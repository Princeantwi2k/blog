import React, { Component } from "react";
import Mobilephone from "./Mobilephone";

class Mobile extends Component {
  render() {
    return (
      <div>
        <h3 className="topic">Mobile phones</h3>
        <div className="box">
          <Mobilephone />
        </div>
      </div>
    );
  }
}

export default Mobile;
