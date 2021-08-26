import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

const laptops = ({ laptops }) => {
  return (
    <>
      {laptops.map((laptops, id) => (
        <Link to={`/blog6/${laptops.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.8rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <Card.Img variant="top" src={laptops.imgUrl} />
              <Card.Body>
                <Card.Title> {laptops.name}</Card.Title>
                <Card.Text>
                  <p>{laptops.price}</p>
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
  return { laptops: state.laptops };
};

export default connect(mapStateToProps)(laptops);
