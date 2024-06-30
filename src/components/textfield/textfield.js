import React from "react";
import "./textfield.css";

const TextField = (props) => {
  return (
    <input
      type="text"
      className="text-field"
      placeholder="Enter Your Name?"
      {...props}
    />
    
  );
};

export default TextField;
