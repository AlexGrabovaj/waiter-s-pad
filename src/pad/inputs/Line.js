import React, { Component } from "react";
import { Button, Form, Input } from "reactstrap";
import { isLineBreak } from "typescript";

function PadLine({type='', className = '', line, ...rest}) {
  const props = {
    type: `${type || line.type || 'text'}`,
    // className: `pad-line ${className} ${line.className || ''}`,
    value: line.value,
    // key: line.key, //`${key ?? line.key ?? ''}`,
    // onChange: line.onLineChange
  }

  return (
    <div className={`pad-line ${className} ${line.className || ''}`}>
      <input className = 'pad-line-input' {...props}/>
      <i className='pad-line-delete fa fa-minus' onClick={rest.removeLine}></i>
    </div>
  );
}

export default PadLine;
