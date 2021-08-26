import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Printer = ({ printers }) => {
  return (
    <>
      {printers.map((printers, id) => (
        <Link to={`/blog7/${printers.id}`} className="links">
          <div key={id}>
            <Card
              style={{ width: "13.8rem", border: `none`, marginBottom: `10px` }}
              className="card"
            >
              <Card.Img variant="top" src={printers.imgUrl} />
              <Card.Body>
                <Card.Title> {printers.name}</Card.Title>
                <Card.Text>
                  <p>{printers.price}</p>
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
  return { printers: state.printers };
};

export default connect(mapStateToProps)(Printer);
