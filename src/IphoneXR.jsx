import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const IphoneXR = ({ andriod }) => {
  return (
    <>
      {andriod.map((andriod, id) => (
        <Link to={`/blog3/${andriod.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.6rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <img
                variant="top"
                src={andriod.imgUrl}
                alt="imgUrl"
                style={{ height: 250, width: 180 }}
              />
              <Card.Body>
                <Card.Title> {andriod.name}</Card.Title>
                <Card.Text>
                  <p>{andriod.price}</p>
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
  return { andriod: state.andriod };
};

export default connect(mapStateToProps)(IphoneXR);
