import React, { Component } from "react";
import Desktops from "./Desktops";
import { connect } from "react-redux";

class Laptops extends Component {
  render() {
    return (
      <div>
        <h3 className="topic">Laptops & Desktops</h3>
        <div className="box">
          <Desktops />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { laptops: state.laptops };
};

export default connect(mapStateToProps)(Laptops);
