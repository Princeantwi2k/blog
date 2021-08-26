import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Projectors = ({ projectors }) => {
  return (
    <>
      {projectors.map((projectors, id) => (
        <Link to={`/blog8/${projectors.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.8rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <Card.Img variant="top" src={projectors.imgUrl} />
              <Card.Body>
                <Card.Title> {projectors.name}</Card.Title>
                <Card.Text>
                  <p>{projectors.price}</p>
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
  return { projectors: state.tvs };
};

export default connect(mapStateToProps)(Projectors);
