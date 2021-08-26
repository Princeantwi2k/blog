import React, { Component } from "react";
import Access from "./Access";

class Accessories extends Component {
  render() {
    return (
      <div>
        <h3 className="topic">Accessories</h3>
        <div className="box">
          <Access />
        </div>
      </div>
    );
  }
}

export default Accessories;
