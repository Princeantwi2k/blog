import React from "react";
import Phone from "./Phone";
const Iphone = (props) => {
  return (
    <div>
      {props.phone.map((phone, idx) => (
        <Phone key={idx} phone={phone} />
      ))}
    </div>
  );
};

export default Iphone;
