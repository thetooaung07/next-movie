import Head from "next/head";
import Header from "../../components/Header";
import Image from "next/dist/client/image";
import { useState } from "react";
import { PlusIcon, XIcon } from "@heroicons/react/solid";
import ReactPlayer from "react-player/lazy";
import { PlayIcon, PresentationChartLineIcon } from "@heroicons/react/outline";

// TODO: use useEffect for session changes after adding authentication

function Movie({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const [showPlayer, setShowPlayer] = useState(false);

  const index = result.videos.results.findIndex((element) => element.type === "Trailer");
  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}</title>
      </Head>

      <Header></Header>

      <section className="relative z-50">
        <div className="relative min-h-[calc(100vh-72px)]">
          <Image
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            layout="fill"
            objectFit="cover"
            objectPosition={"top"}
          />
        </div>
        <div className="absolute z-50 space-y-6 md:inset-y-auto inset-y-20 md:bottom-10 inset-x-4 md:inset-x-12">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            {result.title || result.original_name}
          </h1>
          <div className="flex items-center space-x-3 md:space-x-5">
          <button className="text-xs text-black md:text-base bg-white flex items-center border  justify-center py-3.5 px-6 rounded  hover:border group hover:bg-white/20 transition-colors">
              <PlayIcon className="h-6 mr-1.5 text-gray-800  group-hover:text-white" />
              <span className="font-semibold tracking-widest text-gray-800 uppercase group-hover:text-white">
                Play
              </span>
            </button>

            <button
              className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-3.5 px-6 rounded hover:bg-white/70 group"
              onClick={() => setShowPlayer(true)}
            >
              <PresentationChartLineIcon className="h-6 mr-1.5 group-hover:text-gray-800 " />
              <span className="font-semibold tracking-widest uppercase group-hover:text-gray-800 ">
                Trailer
              </span>
            </button>

            {/* bg-black/60 maps to opacity */}
            <div className="flex items-center justify-center border-2 border-white rounded-full cursor-pointer bg-black/60 w-11 h-11">
              <PlusIcon className="h-6" />
            </div>
            <div className="flex items-center justify-center border-2 border-white rounded-full cursor-pointer bg-black/60 w-11 h-11">
              <img src="/images/group-icon.svg" alt="" />
            </div>
          </div>
          <p className="text-xs md:text-sm">
            {result.release_date || result.first_air_date} ??? {Math.floor(result.runtime / 60)}h{" "}
            {result.runtime % 60}m ??? {result.genres.map((genre) => genre.name + " ")}{" "}
          </p>
          <h4 className="max-w-4xl text-sm md:text-lg">{result.overview}</h4>
        </div>

        {/* Bg Overlay */}
        {showPlayer && (
          <div
            className="absolute inset-0 z-50 w-full h-full bg-black opacity-50"
            onClick={() => setShowPlayer(false)}
          />
        )}
        <div
          className={`absolute top-0 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showPlayer ? "opacity-100 z-50" : "opacity-0"
          }`}
        >
          {/*add another div to define width and height so that react player won't take all the way to screen  */}

          <div className="relative pt-[55.5%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
              />
            </div>
        </div>
      </section>
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const request = await fetch(`
  https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos`).then(
    (res) => res.json(),
  );

  return {
    props: {
      result: request,
    },
  };
}
