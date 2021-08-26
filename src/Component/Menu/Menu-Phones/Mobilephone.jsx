import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Mobilephone = ({ mobile }) => {
  return (
    <>
      {mobile.map((mobile, id) => (
        <Link to={`/blog5/${mobile.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.8rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <Card.Img variant="top" src={mobile.imgUrl} />
              <Card.Body>
                <Card.Title> {mobile.name}</Card.Title>
                <Card.Text>
                  <p>{mobile.price}</p>
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
  return { mobile: state.mobile };
};

export default connect(mapStateToProps)(Mobilephone);
