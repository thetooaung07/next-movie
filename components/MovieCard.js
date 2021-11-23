import { useRouter } from "next/dist/client/router";
import Image from "next/image";

function MovieCard({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const router = useRouter();

  console.log(result);
  return (
    //   min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px]
    <div
      className="relative group z-20 flex rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform 
      m-2 hover:scale-105 transition duration-300 mb-3 "
      onClick={() => router.push(`/movie/${result.id}`)}
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg "
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center align-middle hover:bg-black hover:bg-opacity-60">
        <div className="absolute hidden text-center bottom-1/4 group-hover:block ">
         <h5>{result.title}</h5> 
         {/* <small>{result.popularity}</small> */}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
