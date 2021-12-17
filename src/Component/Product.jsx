import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Product = ({ product }) => {
  return (
    <>
      {product.map((product, id) => (
        <>
          <Link to={`/blogs/${product.id}`} className="links">
            <div key={id}>
              <Card
                style={{
                  width: "13.8rem",
                  border: `none`,
                  marginBottom: `10px`,
                }}
                className="card"
              >
                <Card.Img
                  variant="top"
                  src={product.imgUrl}
                  style={{ height: 250, width: 180 }}
                />
                <Card.Body>
                  <Card.Title> {product.name}</Card.Title>
                  <Card.Text>
                    <p>{product.price}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Link>
        </>
      ))}
    </>
  );
};
const mapStateToProps = (state) => {
  return { product: state.topsell };
};

export default connect(mapStateToProps)(Product);
