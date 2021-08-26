import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Brand = ({ brand }) => {
  return (
    <>
      {brand.map((brand, id) => (
        <Link to={`/blog1/${brand.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.8rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <Card.Img variant="top" src={brand.imgUrl} />
              <Card.Body>
                <Card.Title> {brand.name}</Card.Title>
                <Card.Text>
                  <p>{brand.price}</p>
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
  return { brand: state.brand };
};

export default connect(mapStateToProps)(Brand);
