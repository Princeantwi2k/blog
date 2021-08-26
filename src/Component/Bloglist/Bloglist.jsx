import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const Bloglist = ({ topsell }) => {
  const { id } = useParams();

  let [item] = topsell.filter((item) => item.id === id);
  console.log(item);

  return (
    <div className="bloglist d-grid gap-2">
      <Container>
        <Row>
          <Col sm={4} md={4} className="items-img">
            <img src={item.imgUrl} alt="pic" className="item img-responsive" />
          </Col>
          <Col sm={8} md={8}>
            <h1 className="items-name">{item.name}</h1>
            <p>{item.price}</p>
            <Button variant="primary" size="lg">
              Buy Me{" "}
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const mapStateToprops = (state) => {
  return { topsell: state.topsell };
};

export default connect(mapStateToprops)(Bloglist);
