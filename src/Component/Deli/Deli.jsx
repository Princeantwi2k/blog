import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import deli from "../../deli2.jpg";
import deli1 from "../../deli1.jpg";
import "./Deli.css";

class Deli extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Container className="picture">
          <Row>
            <Col sm={6} md={6}>
              <Card>
                <Card.Img variant="top" src={deli} className="deli" />
              </Card>
            </Col>
            <Col sm={6} md={6}>
              <Card>
                <Card.Img variant="top" src={deli1} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Deli;
