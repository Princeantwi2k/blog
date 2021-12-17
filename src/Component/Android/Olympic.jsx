import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Olympic = ({ olympic }) => {
  return (
    <>
      {olympic.map((olympic, id) => (
        <Link to={`/blog2/${olympic.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.8rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <Card.Img
                variant="top"
                src={olympic.imgUrl}
                style={{ height: 250, width: 180 }}
              />
              <Card.Body>
                <Card.Title> {olympic.name}</Card.Title>
                <Card.Text>
                  <p>{olympic.price}</p>
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
  return { olympic: state.Olympic };
};

export default connect(mapStateToProps)(Olympic);
