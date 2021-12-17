import { useParams } from "react-router-dom";
import { Container, Col, Row, Dropdown } from "react-bootstrap";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { FaHands } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { connect } from "react-redux";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import "./Blog.css";

const Blog7 = ({ printers }) => {
  const { id } = useParams();

  let [product] = printers.filter((printers) => printers.id === id);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">REACH US ON </Popover.Header>
      <Popover.Body>
        <h5>0550300103</h5>
        <h5>0572211378</h5>
      </Popover.Body>
    </Popover>
  );
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="warning" className="buttom">
        Buy me
      </Button>
    </OverlayTrigger>
  );
  return (
    <div className="bloglist d-grid gap-2">
      <Container className="itemContainer">
        <Row>
          <Col sm={3} md={3} className="items-img phone ">
            <img
              src={product.imgUrl}
              alt="pic"
              className="item img-responsive"
            />
          </Col>
          <Col sm={5} md={5} className="productName">
            <h4 className="items-name">{product.name}</h4>
            <p>Brand: E-Life | Similar products from E-Life</p>
            <p>GH₵ 390.00 -10%</p>
            <h4>{product.price}</h4>

            <div>
              <BsFillStarFill className="blogicon" />
              <BsFillStarFill className="blogicon" />
              <BsFillStarFill className="blogicon" />
              <BsFillStarFill className="blogicon" />
              <BsFillStarFill className="blogicon" />
              (405 Verified Product Ratings)
            </div>
            <p>+ shipping from GH₵ 7.06 to Tema</p>
            <Example />
          </Col>
          <Col sm={2} md={3} className="over">
            <h5 className="items-deliver">DELIVERY & RETURNS</h5>
            <h6>
              BLUELET <span style={{ color: "red" }}>EXPRESS</span>
            </h6>
            <p>
              Free shipping on Jumia Express orders above GH¢125 in Accra
              (excluding bulky items) Details
            </p>
            <p className="location"> Choose your location</p>
            <Dropdown>
              <Dropdown.Toggle
                variant="default"
                id="dropdown-basic"
                className="day"
              >
                Greater Accra
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Kumasi</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tamale</Dropdown.Item>
                <Dropdown.Item href="#/action-3">HO</Dropdown.Item>
                <Dropdown.Item href="#/action-3">kwahu</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cape coast</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                variant="default"
                id="dropdown-basic"
                className="day"
              >
                Tema
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">lapaz</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Abeka</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Nima</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Osu</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tiafa</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Caprice</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="truck">
              <FiTruck className="truckicons" />
              <p className="name">
                Door Delivery Details Shipping GH₵ 8.06 Delivery by 17 December
                when you order within next 24mins
              </p>
            </div>
            <div className="truck">
              <FaHands className="truckicons" />
              <p className="name">
                Pickup Station Details Shipping GH₵ 4.02 Pickup by 17 December
                when you order within next 24mins
              </p>
            </div>
            <div className="truck">
              <GiReturnArrow className="truckicons" />
              <p className="name">
                Return Policy Free return within 15 days for all eligible
                items.See more
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const mapStateToprops = (state) => {
  return { printers: state.printers };
};

export default connect(mapStateToprops)(Blog7);
