import React, { Component } from "react";
import Speakers from "./Speakers";

class Speaker extends Component {
  render() {
    return (
      <div>
        <h3 className="topic">Speakers</h3>
        <div className="box">
          <Speakers />
        </div>
      </div>
    );
  }
}

export default Speaker;
