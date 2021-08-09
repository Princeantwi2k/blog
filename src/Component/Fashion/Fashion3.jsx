import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import men from "../../men.jpg";
import men1 from "../../men1.jpg";
import img2 from "../../img2.jpg";
import men2 from "../../men2.jpg";
import men3 from "../../men3.jpg";
import men4 from "../../men4.jpg";

class Fashion3 extends Component {
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
            Men's Accessories
          </h3>
          <Row>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={men} />
                <Card.Body>
                  <Card.Title>
                    Fashion Leather Foldable Short Wallet - Grey
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 35.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>
                    Rectangle Computer Glasses Anti Blue Light Eyewear Frames
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 45.50</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={men1} />
                <Card.Body>
                  <Card.Title>
                    Adjustable Cap Set - 3 Pack - Wine/Navy Blue/Black
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 49.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={men2} />
                <Card.Body>
                  <Card.Title>
                    Premium Soft Textured Fashion Durag - Black
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 15.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={men3} />
                <Card.Body>
                  <Card.Title>
                    Men's Korean Fashion Eye Glasses Frame Bamboo Eyewear Frames
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 46.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={men4} />
                <Card.Body>
                  <Card.Title>
                    Blue Light Blocking Computer Glasses Metal Eyewear Frames
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

export default Fashion3;
