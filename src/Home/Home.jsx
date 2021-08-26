import React, { Component } from "react";
import Product from "../Component/Product";
import Official from "../Component/Official/Official";
import Deli from "../Component/Deli/Deli";
import Brand from "../Component/Brand/Brand";
import Discount from "../Component/Discount/Discount";
import Fashion from "../Component/Fashion/Fashion";
import Fashion1 from "../Component/Fashion/Fashion1";
import IphoneXR from "../IphoneXR";
import Call from "../Component/Call";
import Fashionshop from "../Component/Fashions/Fashionshop";
import Olympic from "../Component/Android/Olympic";

class Home extends Component {
  render() {
    return (
      <>
        <Official />
        <h3 className="topic">Top selling items</h3>
        <div className="box">
          <Product />
        </div>
        <Deli />
        <h3 className="topic">Brand Olympics up to 50% off</h3>
        <div className="box">
          <Olympic />
        </div>
        <Discount />
        <h3 className="topic">Andriod phone</h3>
        <div className="box">
          <IphoneXR />
        </div>
        <Call />
        <h3 className="topic">Iphone phone</h3>
        <div className="box">
          <Brand />
        </div>

        <Fashion />
        <Fashion1 />
        <h3 className="topic">Fashion</h3>
        <div className="box">
          <Fashionshop />
        </div>
      </>
    );
  }
}

export default Home;
