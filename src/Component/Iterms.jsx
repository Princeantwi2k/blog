import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import "./Phone.css";
const Iterms = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Card
            style={{ width: "12rem", border: `none`, margin: `0` }}
            className="card"
          >
            <Card.Img variant="top" src={props.details.imgUrl} />
            <Card.Body>
              <Card.Title> {props.details.name}</Card.Title>
              <Card.Text>
                <p>{props.details.price}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Iterms;
