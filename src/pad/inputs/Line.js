import React, { Component } from "react";
import { Button, Form, Input } from "reactstrap";

function PadLine({type='', className = '', ...rest}) {
  const props = {
    type: `${type || 'text'}`,
    className: `pad-line ${className}`,
    value: rest.children || ''
  }
  return (
    <>
      <input {...props}/>
    </>
  );
}

export default PadLine;
