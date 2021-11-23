import MovieCard from "./MovieCard";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Scrollbar } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";




SwiperCore.use([Scrollbar, Mousewheel]);

function MoviesCollection({ results, title }) {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex p-2 -m-2 space-x-6 ">
        <Swiper
          mousewheel={{ releaseOnEdges: true }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >

        {results.map((result) => (
          <SwiperSlide key={result.id}>
            <MovieCard result={result} />
          </SwiperSlide>
        ))}</Swiper>
      </div>
    </div>
  );
}

export default MoviesCollection;
