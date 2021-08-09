import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import brand6 from "../../brand6.png";
class Olympics extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col
            sm={12}
            md={12}
            style={{
              marginTop: `15px`,
              marginBottom: `10px`,
              borderBottom: `1px solid white`,
            }}
          >
            <Card>
              <Card.Img variant="top" src={brand6} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Olympics;
