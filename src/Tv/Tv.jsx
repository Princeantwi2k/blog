import React, { Component } from "react";
import Projectors from "./Projectors";

class Tv extends Component {
  render() {
    return (
      <div>
        <h3 className="topic">Tvs & Projectors</h3>
        <div className="box">
          <Projectors />
        </div>
      </div>
    );
  }
}

export default Tv;
