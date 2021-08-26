import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import call from "../../brand6.png";

class Discount extends Component {
  render() {
    return (
      <div>
        <Container className="picture">
          <Row>
            <Col sm={12} md={12}>
              <Card>
                <Card.Img variant="top" src={call} className="deli" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Discount;
