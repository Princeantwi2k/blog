import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "../../pic1.jpg";
import pic2 from "../../pic1.png";
import pic3 from "../../pic2.png";
import pic4 from "../../pic3.png";
import pic5 from "../../pic4.png";
import pic6 from "../../pic5.png";
import pic7 from "../../pic1.png";
import "./MenuCaro.css";
class MenuCaro extends Component {
  render() {
    return (
      <div>
        <Carousel className="manu-caro">
          <Carousel.Item style={{ height: `350px`, width: `100%` }}>
            <img className="d-block" src={pic1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item style={{ height: `350px`, width: `100%` }}>
            <img className="d-block" src={pic4} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item style={{ height: `350px`, width: `100%` }}>
            <img className="d-block" src={pic2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item style={{ height: `350px`, width: `100%` }}>
            <img className="d-block" src={pic3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item style={{ height: `350px`, width: `100%` }}>
            <img className="d-block" src={pic5} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item style={{ height: `350px`, width: `100%` }}>
            <img className="d-block" src={pic6} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item style={{ height: `350px`, width: `100%` }}>
            <img className="d-block" src={pic7} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default MenuCaro;
