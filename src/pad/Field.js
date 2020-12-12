import React, { Component } from "react";
import { Button, Form, Input } from "reactstrap";
import PadLine from "./inputs/Line";

function Lines({}) {
  return <PadLine></PadLine>;
}

class PadField extends Component {
  render() {
    return (
      <div className="pad-scroll">
        <div className="pad-field">
          <Form>
            <div className="pad-lines">
              <Lines />
              <button className ="pad-add-line-button" type='button'>
                <i className="fa fa-plus mr-2"></i>
                Add Idea
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default PadField;
