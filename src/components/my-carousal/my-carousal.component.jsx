import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide2 from "../../assets/img/carousal/slide2.webp";
import Slide3 from "../../assets/img/carousal/slide3.webp";
import Slide4 from "../../assets/img/carousal/slide4.webp";
import Slide5 from "../../assets/img/carousal/slide5.webp";
import Slide6 from "../../assets/img/carousal/slide6.webp";
import Slide7 from "../../assets/img/carousal/slide7.webp";
import Slide8 from "../../assets/img/carousal/slide8.webp";
import Slide9 from "../../assets/img/carousal/slide9.webp";
import Slide10 from "../../assets/img/carousal/slide10.webp";

import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
];
class MyCarousal extends Component {
  render() {
    return (
      <div id="home">
        <Carousel
          controls={false}
          indicators
          interval={2500}
          pauseOnHover={false}
        >
          {slides.map((slide) => (
            <Carousel.Item>
              <img
                className="d-block w-100 custom-img"
                src={slide}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <ScrollDown />
      </div>
    );
  }
}

export default MyCarousal;
