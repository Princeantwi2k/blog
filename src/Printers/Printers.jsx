import React, { Component } from "react";

import Printer from "./Printer";

class Printers extends Component {
  render() {
    return (
      <div>
        <h3 className="topic">Printers</h3>
        <div className="box">
          <Printer />
        </div>
      </div>
    );
  }
}

export default Printers;
