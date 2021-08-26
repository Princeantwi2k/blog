import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const Blog12 = ({ accessories }) => {
  const { id } = useParams();

  let [product] = accessories.filter((accessories) => accessories.id === id);

  return (
    <div className="bloglist d-grid gap-2">
      <Container>
        <Row>
          <Col sm={4} md={4} className="items-img">
            <img
              src={product.imgUrl}
              alt="pic"
              className="item img-responsive"
            />
          </Col>
          <Col sm={8} md={8}>
            <h1 className="items-name">{product.name}</h1>
            <p>{product.price}</p>
            <Button variant="primary" size="lg">
              Buy Me{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const mapStateToprops = (state) => {
  return { accessories: state.accessories };
};

export default connect(mapStateToprops)(Blog12);
