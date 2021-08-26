import React, { Component } from "react";
import Shoes from "./Shoes";

class Cloth extends Component {
  render() {
    return (
      <div>
        <h3 className="topic">Fashion</h3>
        <div className="box">
          <Shoes />
        </div>
      </div>
    );
  }
}

export default Cloth;
