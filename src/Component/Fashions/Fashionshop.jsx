import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Fashionshop = ({ fashions }) => {
  return (
    <>
      {fashions.map((fashions, id) => (
        <Link to={`/blog4/${fashions.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.8rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <Card.Img variant="top" src={fashions.imgUrl} />
              <Card.Body>
                <Card.Title> {fashions.name}</Card.Title>
                <Card.Text>
                  <p>{fashions.price}</p>
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
  return { fashions: state.fashions };
};

export default connect(mapStateToProps)(Fashionshop);
