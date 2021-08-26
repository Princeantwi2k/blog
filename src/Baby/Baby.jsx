import React, { Component } from "react";
import Foods from "./Foods";

class Baby extends Component {
  render() {
    return (
      <div>
        <h3 className="topic">Babies Productes</h3>
        <div className="box">
          <Foods />
        </div>
      </div>
    );
  }
}

export default Baby;
