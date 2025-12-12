import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";
import { img } from "./data.js";

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageLink, index) => {
          return <img key={index} src={imageLink} />;
        })}
      </Carousel>
      {/* the reasone out of div---carousel library does not let you easily style inside it */}
      <div className={classes.hero_img}></div>
    </div>
  );
};

export default CarouselEffect;
