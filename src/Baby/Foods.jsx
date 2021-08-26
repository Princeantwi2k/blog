import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

const Foods = ({ foods }) => {
  return (
    <>
      {foods.map((foods, id) => (
        <Link to={`/blog11/${foods.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.8rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <Card.Img variant="top" src={foods.imgUrl} />
              <Card.Body>
                <Card.Title> {foods.name}</Card.Title>
                <Card.Text>
                  <p>{foods.price}</p>
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
  return { foods: state.baby };
};

export default connect(mapStateToProps)(Foods);
