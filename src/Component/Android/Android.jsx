import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import phone from "../../phone.jpg";
import phone1 from "../../phone1.jpg";
import phone2 from "../../phone2.jpg";
import phone3 from "../../phone3.jpg";
import phone4 from "../../phone4.jpg";
import phone5 from "../../phone5.jpg";

class Android extends Component {
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
          Android Phones
        </h3>
        <Row>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }}>
              <Card.Img variant="top" src={phone} />
              <Card.Body>
                <Card.Title>
                  Samsung A3 Core Dual SIM - 16GB HDD - 1GB RAM - Blue
                </Card.Title>
                <Card.Text>
                  <p>GH₵ 380.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }}>
              <Card.Img variant="top" src={phone1} />
              <Card.Body>
                <Card.Title>
                  Tecno POP 3 (BB2) Dual SIM - 16GB HDD - 1GB RAM
                </Card.Title>
                <Card.Text>
                  <p>GH₵ 380.50</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }}>
              <Card.Img variant="top" src={phone2} />
              <Card.Body>
                <Card.Title>
                  Samsung Galaxy A21S Dual SIM - 128GB HDD - 4GB RAM - Blue
                </Card.Title>
                <Card.Text>
                  <p>GH₵ 996.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }}>
              <Card.Img variant="top" src={phone3} />
              <Card.Body>
                <Card.Title>
                  Infinix X657 Smart 5 Dual SIM Smartphone - 32GB HDD -
                </Card.Title>
                <Card.Text>
                  <p>GH₵ 580.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }}>
              <Card.Img variant="top" src={phone4} />
              <Card.Body>
                <Card.Title>
                  Infinix Hot 10T - 64GB HDD- 4GB RAM Smartphone -
                </Card.Title>
                <Card.Text>
                  <p>GH₵ 755.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} md={2}>
            <Card style={{ width: "12rem", border: `none` }}>
              <Card.Img variant="top" src={phone5} />
              <Card.Body>
                <Card.Title>
                  Infinix Hot 10T - 64GB HDD- 4GB RAM Smartphone -
                </Card.Title>
                <Card.Text>GH₵ 357.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Android;
