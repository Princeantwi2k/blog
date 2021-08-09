import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon4 from "../../icon4.png";
import icon5 from "../../icon5.png";
import icon6 from "../../icon6.png";
import icon7 from "../../icon7.png";
import "./Official.css";
const Official = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={3} md={2} className="menu">
            <img src={icon4} alt="icon" className="icon" />{" "}
            <Link to="" className="link">
              Official stores
            </Link>{" "}
          </Col>
          <Col sm={3} md={2} className="menu1">
            <img src={icon5} alt="icon" className="icon" />{" "}
            <Link to="" className="link">
              Bleulet Global
            </Link>
          </Col>
          <Col sm={3} md={2} className="menu1">
            <img src={icon6} alt="icon" className="icon" />{" "}
            <Link to="" className="link">
              Buy Airtime
            </Link>
          </Col>
          <Col sm={3} md={2} className="menu1">
            <img src={icon7} alt="icon" className="icon" />{" "}
            <Link to="" className="link">
              Bluelet Prime
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Official;
