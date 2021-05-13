import React from "react";
import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./Slider.css";
import slides from "./Slides";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2> My projects</h2>
      </div>
      <Carousel
        plugins={[
          "centered",
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        animationSpeed={200}
        offset={50}
        itemWidth={400}
        slides={slides}
        breakpoints={{
          960: {
            itemWidth: 225,
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
  );
};

export default Slider;
