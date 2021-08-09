import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import brand from "../../brand.jpg";
import brand1 from "../../brand1.jpg";
import brand2 from "../../brand2.jpg";
import brand3 from "../../brand3.jpg";
import brand4 from "../../brand4.jpg";
import brand5 from "../../brand5.jpg";
import "./Brand.css";

class Brand extends Component {
  render() {
    return (
      <Container className="brand">
        <h3
          style={{
            textAlign: `center`,
            backgroundColor: `orangered`,
            color: `white`,
            padding: `20px`,
          }}
        >
          Brand Olympics | Up to 50% off
        </h3>
        <Row>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }} className="card">
              <Card.Img variant="top" src={brand} />
              <Card.Body>
                <Card.Title>Binatone Durable Blender</Card.Title>
                <Card.Text>
                  <p>GH₵ 280.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }}>
              <Card.Img variant="top" src={brand1} />
              <Card.Body>
                <Card.Title>
                  Westpool WP-128 Double Door Refrigerator
                </Card.Title>
                <Card.Text>
                  <p>GH₵ 1080.50</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }}>
              <Card.Img variant="top" src={brand2} />
              <Card.Body>
                <Card.Title>Syinix MW720-03M Microwave Oven</Card.Title>
                <Card.Text>
                  <p>GH₵ 356.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }}>
              <Card.Img variant="top" src={brand3} />
              <Card.Body>
                <Card.Title>
                  Italian Home Rice Cooker 2 Litres - Black
                </Card.Title>
                <Card.Text>
                  <p>GH₵ 112.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }}>
              <Card.Img variant="top" src={brand4} />
              <Card.Body>
                <Card.Title>Mitsui ME-260 Electric Blender</Card.Title>
                <Card.Text>
                  <p>GH₵ 115.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }}>
              <Card.Img variant="top" src={brand5} />
              <Card.Body>
                <Card.Title>Delron Electric Kettle - White/Blue</Card.Title>
                <Card.Text>GH₵ 57.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Brand;
