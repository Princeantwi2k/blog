import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Shoes = ({ shoes }) => {
  return (
    <>
      {shoes.map((shoes, id) => (
        <Link to={`/blog10/${shoes.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.8rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <Card.Img variant="top" src={shoes.imgUrl} />
              <Card.Body>
                <Card.Title> {shoes.name}</Card.Title>
                <Card.Text>
                  <p>{shoes.price}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Link>
      ))}
    </>
  );
};
const mapStateToProps = (state) => {
  return { shoes: state.cloth };
};

export default connect(mapStateToProps)(Shoes);
