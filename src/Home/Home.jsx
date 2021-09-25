import React, { Component } from "react";
import Product from "../Component/Product";
import Official from "../Component/Official/Official";
import Deli from "../Component/Deli/Deli";
import Brand from "../Component/Brand/Brand";
import Discount from "../Component/Discount/Discount";
import Fashion from "../Component/Fashion/Fashion";
import Fashion1 from "../Component/Fashion/Fashion1";
import IphoneXR from "../IphoneXR";
import Call from "../Component/Call";
import Fashionshop from "../Component/Fashions/Fashionshop";
import Olympic from "../Component/Android/Olympic";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import pic1 from "../pic1.jpg";
import pic2 from "../pic1.png";
import pic3 from "../pic2.png";
import pic4 from "../pic3.png";
import pic5 from "../pic4.png";
import pic6 from "../pic5.png";
import pic7 from "../pic1.png";
import gif from "../gif.gif";
import icon from "../icon.png";
import icon1 from "../icon2.png";
import icon2 from "../icon3.png";
import "../Component/Menu/Menu.css";

class Home extends Component {
  render() {
    return (
      <>
        <>
          <Col>
            <ul className="super-links">
              <Link to="/mobile" className="super">
                <li className="mobile">Mobile phones</li>
              </Link>
              <Link to="/laptops" className="super">
                <li className="mobile"> Laptops </li>
              </Link>
              <Link to="/tv" className="super">
                <li className="mobile"> Tvs & Projectors</li>
              </Link>
              <Link to="/accessories" className="super">
                <li className="mobile">Accessories</li>
              </Link>
              <Link to="/printer" className="super">
                <li className="mobile">Printer</li>
              </Link>
              <Link to="/speaker" className="super">
                <li className="mobile">Speakers</li>
              </Link>
              <Link to="/fashion" className="super">
                <li className="mobile">Fashion</li>
              </Link>
              <Link to="/baby" className="super">
                <li className="mobile">Baby Product</li>
              </Link>
            </ul>
          </Col>
          <Col>
            <Carousel className="manu-caro">
              <Carousel.Item className="img">
                <img className="d-block" src={pic1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item className="img">
                <img className="d-block" src={pic4} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item className="img">
                <img className="d-block" src={pic2} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item className="img">
                <img className="d-block" src={pic3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item className="img">
                <img className="d-block" src={pic5} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item className="img">
                <img className="d-block" src={pic6} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item className="img">
                <img className="d-block" src={pic7} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <ul className="center">
              <li>
                <Link to="" className="icons">
                  <img src={icon} alt="icon" className="icon" />
                  Help Center
                </Link>
                <p className="icon-p">How can we help you?</p>
              </li>
              <li>
                <Link to="" className="icons">
                  <img src={icon1} alt="icon" className="icon" />
                  Easy Return
                </Link>
                <p className="icon-p">Up to 15Days</p>
              </li>
              <li>
                <Link to="" className="icons">
                  <img src={icon2} alt="icon" className="icon" />
                  Sell on Bluelet
                </Link>
                <p className="icon-p">Make more money</p>
              </li>
            </ul>
            <img src={gif} alt="pic" className="free" />
          </Col>
        </>
        <Official />
        <h3 className="topic">Top selling items</h3>
        <div className="box">
          <Product />
        </div>
        <Deli />
        <h3 className="topic">Brand Olympics up to 50% off</h3>
        <div className="box">
          <Olympic />
        </div>
        <Discount />
        <h3 className="topic">Andriod phone</h3>
        <div className="box">
          <IphoneXR />
        </div>
        <Call />
        <h3 className="topic">Iphone phone</h3>
        <div className="box">
          <Brand />
        </div>

        <Fashion />
        <Fashion1 />
        <h3 className="topic">Fashion</h3>
        <div className="box">
          <Fashionshop />
        </div>
      </>
    );
  }
}

export default Home;
