import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import shoe from "../../shoe.jpg";
import shoe1 from "../../shoe1.jpg";
import shoe2 from "../../shoe2.jpg";
import shoe3 from "../../shoe3.jpg";
import shoe4 from "../../shoe4.jpg";
import shoe5 from "../../shoe5.jpg";
import dress from "../../dress.jpg";
import dress1 from "../../dress1.jpg";
import dress2 from "../../dress2.jpg";
import dress3 from "../../dress3.jpg";
import dress4 from "../../dress4.jpg";
import dress5 from "../../dress5.jpg";
import "./Fashion.css";

class Fashion1 extends Component {
  render() {
    return (
      <div>
        <Container className="brand">
          <Row>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={shoe} />
                <Card.Title style={{ textAlign: `center` }}>
                  Sneakers
                </Card.Title>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={shoe1} />
                <Card.Title style={{ textAlign: `center` }}>
                  M. Shoes
                </Card.Title>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={shoe2} />

                <Card.Title style={{ textAlign: `center` }}>
                  M. Shirts
                </Card.Title>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={shoe3} />

                <Card.Title style={{ textAlign: `center` }}>
                  M. Trousers
                </Card.Title>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={shoe4} />

                <Card.Title style={{ textAlign: `center` }}>
                  M.Trousers
                </Card.Title>
              </Card>
            </Col>
            <Col sm={2} md={2}>
              <Card style={{ width: "12rem", border: `none` }}>
                <Card.Img variant="top" src={shoe5} />

                <Card.Title style={{ textAlign: `center` }}>
                  M.Watches
                </Card.Title>
              </Card>
            </Col>
          </Row>
          <Row>
            <Container className="brand">
              <Row>
                <Col sm={2} md={2}>
                  <Card style={{ width: "12rem", border: `none` }}>
                    <Card.Img variant="top" src={dress} />

                    <Card.Title style={{ textAlign: `center` }}>
                      Dress
                    </Card.Title>
                  </Card>
                </Col>
                <Col sm={2} md={2}>
                  <Card style={{ width: "12rem", border: `none` }}>
                    <Card.Img variant="top" src={dress1} />

                    <Card.Title style={{ textAlign: `center` }}>
                      Jeans
                    </Card.Title>
                  </Card>
                </Col>
                <Col sm={2} md={2}>
                  <Card style={{ width: "12rem", border: `none` }}>
                    <Card.Img variant="top" src={dress2} />

                    <Card.Title style={{ textAlign: `center` }}>
                      Heels
                    </Card.Title>
                  </Card>
                </Col>
                <Col sm={2} md={2}>
                  <Card style={{ width: "12rem", border: `none` }}>
                    <Card.Img variant="top" src={dress3} />

                    <Card.Title style={{ textAlign: `center` }}>
                      Bags
                    </Card.Title>
                  </Card>
                </Col>
                <Col sm={2} md={2}>
                  <Card style={{ width: "12rem", border: `none` }}>
                    <Card.Img variant="top" src={dress4} />

                    <Card.Title style={{ textAlign: `center` }}>
                      W.Watches
                    </Card.Title>
                  </Card>
                </Col>
                <Col sm={2} md={2}>
                  <Card style={{ width: "12rem", border: `none` }}>
                    <Card.Img variant="top" src={dress5} />

                    <Card.Title style={{ textAlign: `center` }}>
                      Jewelry
                    </Card.Title>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Fashion1;
