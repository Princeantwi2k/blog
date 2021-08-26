import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Speakers = ({ speakers }) => {
  return (
    <>
      {speakers.map((speakers, id) => (
        <Link to={`/blog9/${speakers.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.8rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <Card.Img variant="top" src={speakers.imgUrl} />
              <Card.Body>
                <Card.Title> {speakers.name}</Card.Title>
                <Card.Text>
                  <p>{speakers.price}</p>
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
  return { speakers: state.speaker };
};

export default connect(mapStateToProps)(Speakers);
