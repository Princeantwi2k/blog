import React from "react";
import { Card, Row, Container } from "react-bootstrap";
import "./Component/Phone.css";
const Phone = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Card
            style={{ width: "12rem", border: `none`, margin: `0` }}
            className="card"
          >
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title> {props.phone.name}</Card.Title>
              <Card.Text>
                <p>{props.phone.price}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Phone;
