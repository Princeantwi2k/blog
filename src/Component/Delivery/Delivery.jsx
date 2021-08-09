import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img from "../../free.png";
import icon from "../../icon.png";

import icon1 from "../../icon2.png";
import icon2 from "../../icon3.png";
import "./Delivery.css";

class Delivery extends Component {
  render() {
    return (
      <div>
        <Container>
          <ul className="center">
            <li>
              <NavLink to="" className="icons">
                <img src={icon} alt="icon" className="icon" />
                HELP CENTER
              </NavLink>
              <p className="icon-p">How can we help you?</p>
            </li>
            <li>
              <NavLink to="" className="icons">
                <img src={icon1} alt="icon" className="icon" />
                EASY RETURN
              </NavLink>
              <p className="icon-p">Up to 15Days</p>
            </li>
            <li>
              <NavLink to="" className="icons">
                <img src={icon2} alt="icon" className="icon" />
                SELL ON BLUELET
              </NavLink>
              <p className="icon-p">Make more money</p>
            </li>
          </ul>
        </Container>
        <Container>
          <img src={img} alt="pic" className="free" />
        </Container>
      </div>
    );
  }
}

export default Delivery;
