import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

const Access = ({ access }) => {
  return (
    <>
      {access.map((access, id) => (
        <Link to={`/blogs/${access.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.8rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <Card.Img variant="top" src={access.imgUrl} />
              <Card.Body>
                <Card.Title> {access.name}</Card.Title>
                <Card.Text>
                  <p>{access.price}</p>
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
  return { access: state.accessories };
};

export default connect(mapStateToProps)(Access);
