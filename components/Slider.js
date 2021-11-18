import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires to show a carousel

function Slider() {
   return (
      // adding max-w-screen-2xl will make carousel completely responsive even on browser zoom in
      // mx-auto for centering Carousel in center when zoom out
      <section className="relative mx-auto mt-8 shadow-2xl max-w-screen-2xl">
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
        </div>
      </Carousel>  
      </section>
   )
}

export default Slider
