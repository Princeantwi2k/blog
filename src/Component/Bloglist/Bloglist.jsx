import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";

const Bloglist = ({ topsell }) => {
  const { id } = useParams();

  let [item] = topsell.filter((item) => item.id === id);
  console.log(item);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">REACH US ON </Popover.Header>
      <Popover.Body>
        <h5>0550300103</h5>
        <h5>0572211378</h5>
      </Popover.Body>
    </Popover>
  );
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="warning">Buy me</Button>
    </OverlayTrigger>
  );

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
            <Example />
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
