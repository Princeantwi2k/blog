import React from "react";
import Iterm from "./Iterms";

const Product = (props) => {
  return (
    <>
      {props.product.map((product, id) => (
        <div>
          <Iterm details={product} key={id} phone={product} />
        </div>
      ))}
    </>
  );
};

export default Product;
