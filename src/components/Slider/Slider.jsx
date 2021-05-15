import React from "react";
import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./Slider.css";
import { slidesBackEnd, slidesFrontEnd } from "./Slides";

const Slider = () => {
  return (
    <>
      <div className="carousel-container-frontend">
        <div className="carousel-title-frontend">
          <h2> My Frontend Projects</h2>
        </div>
        <Carousel
          plugins={[
            "centered",
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            {
              resolve: slidesToScrollPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ]}
          animationSpeed={200}
          offset={50}
          itemWidth={400}
          slides={slidesFrontEnd}
          breakpoints={{
            960: {
              itemWidth: 250,
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
                {
                  resolve: slidesToScrollPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
          }}
        />
      </div>
      <div className="carousel-container-backend">
        <div className="carousel-title-backend">
          <h2> My Backend Projects</h2>
        </div>
        <Carousel
          plugins={[
            "centered",
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            {
              resolve: slidesToScrollPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ]}
          animationSpeed={200}
          offset={50}
          itemWidth={400}
          slides={slidesBackEnd}
          breakpoints={{
            960: {
              itemWidth: 250,
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
                {
                  resolve: slidesToScrollPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </>
  );
};

export default Slider;
