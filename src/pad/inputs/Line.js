import React, { Component } from "react";
import { Button, Form, Input } from "reactstrap";
import { isLineBreak } from "typescript";

function PadLine({type='', className = '', line, ...rest}) {
  const props = {
    type: `${type || line.type || 'text'}`,
    value: line.value
  }

  const handleDeletion = (e) => {
    e.preventDefault();
    rest.removeLine(line);
  }

  const handleChange = (e) => {
    e.preventDefault()
    rest.onUpdateLine(line.key, e.target.value);
  }

  return (
    <div className={`pad-line ${className} ${line.className || ''}`}>
      <span className='pad-line-count'>{rest.count}.</span>
      <input className = 'pad-line-input' onChange={handleChange}{...props}/>
      <i className='pad-line-delete fa fa-minus' onClick={handleDeletion}></i>
    </div>
  );
}

export default PadLine;
