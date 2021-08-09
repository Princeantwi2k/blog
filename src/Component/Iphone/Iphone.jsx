import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import iphone from "../../Iphone.jpg";
import iphone1 from "../../iphone1.jpg";
import iphone2 from "../../iphone2.jpg";
import iphone3 from "../../iphone3.jpg";
import iphone4 from "../../iphone4.jpg";
import iphone5 from "../../iphone5.jpg";

class Iphone extends Component {
  render() {
    return (
      <div>
        <Container className="brand">
          <h3
            style={{
              textAlign: `center`,
              backgroundColor: `orangered`,
              color: `white`,
              padding: `20px`,
            }}
          >
            iOS Phones
          </h3>
          <Row>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={iphone} />
                <Card.Body>
                  <Card.Title>
                    Apple iPhone X - 64GB HDD - 3GB RAM - Silver
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 2,600.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={iphone1} />
                <Card.Body>
                  <Card.Title>Apple iPhone 6s - 64GB HDD - 2GB RAM</Card.Title>
                  <Card.Text>
                    <p>GH₵ 980.50</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={iphone2} />
                <Card.Body>
                  <Card.Title>
                    Apple iPhone 12 Pro Max - 128GB HDD - 6GB RAM
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 7796.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={iphone3} />
                <Card.Body>
                  <Card.Title>
                    Apple iPhone 7 Plus - 128GB HDD - 3GB RAM
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 1920.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={iphone4} />
                <Card.Body>
                  <Card.Title>Apple iPhone XR - 64GB HDD - 3GB RAM</Card.Title>
                  <Card.Text>
                    <p>GH₵ 2700.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={iphone5} />
                <Card.Body>
                  <Card.Title>
                    Apple iPhone 6s Plus - 64GB HDD - 2GB RAM
                  </Card.Title>
                  <Card.Text>GH₵ 1280.00</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Iphone;
