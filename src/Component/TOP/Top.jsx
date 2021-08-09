import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Card, Col } from "react-bootstrap";
import img from "../../img.jpg";
import img1 from "../../img1.jpg";
import img2 from "../../img2.jpg";
import img3 from "../../img3.jpg";
import img4 from "../../img4.jpg";
import img5 from "../../img5.jpg";
import "./Top.css";

class Top extends Component {
  render() {
    return (
      <div>
        <Container className="top-sell">
          <h3
            style={{
              textAlign: `center`,
              backgroundColor: `orangered`,
              color: `white`,
              padding: `20px`,
            }}
          >
            Top selling items
          </h3>
          <Row>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>Lace-Up Canvas Casual Shoes - Blue</Card.Title>
                  <Card.Text>
                    <p>GH₵ 48.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>
                    E-Life 17G1 Digital Satellite TV - 17" Black
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 370.50</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Rectangle Computer Glasses</Card.Title>
                  <Card.Text>
                    <p>GH₵ 46.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title>
                    T WS Bluetooth headset + ios smart watch
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 98.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>Bluetooth Wireless Stereo Earphones</Card.Title>
                  <Card.Text>
                    <p>GH₵ 48.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>
                    Sports Pants - for both male and female
                  </Card.Title>
                  <Card.Text>GH₵ 53.00</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Top;
