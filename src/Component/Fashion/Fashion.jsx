import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import fash from "../../fashion.jpg";

class Fashion extends Component {
  render() {
    return (
      <div>
        <Container className="picture">
          <Row>
            <Col sm={12} md={12}>
              <Card>
                <Card.Img variant="top" src={fash} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Fashion;
