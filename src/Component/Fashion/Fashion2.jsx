import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import sneaker from "../../sneaker.jpg";
import sneaker1 from "../../sneaker1.jpg";
import sneaker2 from "../../sneaker2.jpg";
import sneaker3 from "../../sneaker3.jpg";
import sneaker4 from "../../sneaker4.jpg";
import sneaker5 from "../../sneaker5.jpg";
class Fashion2 extends Component {
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
            Top Deal |Sneakers
          </h3>
          <Row>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={sneaker} />
                <Card.Body>
                  <Card.Title>Low-Top Lace Up Sneakers - Black</Card.Title>
                  <Card.Text>
                    <p>GH₵ 79.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={sneaker1} />
                <Card.Body>
                  <Card.Title>Low-Top Lace Up Sneakers - Grey</Card.Title>
                  <Card.Text>
                    <p>GH₵ 79.50</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={sneaker2} />
                <Card.Body>
                  <Card.Title>
                    On Point Low-Top Lace Up Sneakers - Cream
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 46.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={sneaker3} />
                <Card.Body>
                  <Card.Title>
                    Fashion Low Top Lace Up Sneakers - Khaki
                  </Card.Title>
                  <Card.Text>
                    <p>GH₵ 58.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={sneaker4} />
                <Card.Body>
                  <Card.Title>ashion Sneakers Low Top Shoes Lace Up</Card.Title>
                  <Card.Text>
                    <p>GH₵ 58.00</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={sneaker5} />
                <Card.Body>
                  <Card.Title>
                    Casual Low Top Lace Up Sneakers - Black
                  </Card.Title>
                  <Card.Text>GH₵ 50.00</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Fashion2;
