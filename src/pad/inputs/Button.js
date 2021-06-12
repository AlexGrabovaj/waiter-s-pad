import React from "react";

function PadButton({ className = "", ...rest }) {
  return (
    <>
      <button type='button' 
        className={`pad-button ${className}`}
        {...rest}
        ></button>
    </>
  );
}

export default PadButton;
