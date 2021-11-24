import { useRouter } from "next/dist/client/router";
import Image from "next/image";

function ShowCard({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const router = useRouter();

  return (
    <div
      className="relative group z-20 flex rounded overflow-hidden shadow-xl cursor-pointer border-[2px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform m-2 hover:scale-102 transition duration-300 mb-3 "
      onClick={() => router.push(`/show/${result.id}`)}
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="bg-black"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center align-middle hover:bg-black hover:bg-opacity-60">
        <div className="absolute hidden text-center bottom-1/4 group-hover:block ">
          <h5>{result.name}</h5>
          {/* <small>{result.popularity}</small> */}
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
