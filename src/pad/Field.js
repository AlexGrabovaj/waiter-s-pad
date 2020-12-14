import React, { Component } from "react";
import { Button, Form, Input } from "reactstrap";
import PadLine from "./inputs/Line";
import PadButton from "./inputs/Button";

function Lines({ lines = [] , removeLine = ()=>{}}) {
  var lines = lines.map((line) => {
    return <PadLine key={line.key} line={line} removeLine={removeLine}/>;
  });
  return lines;
}

class PadField extends Component {
  state = {
    lineCounter: 0,
    lines: [
      {
        key: 0,
      },
    ],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  addLine = (e) => {
    e.preventDefault();
    var lineKey = this.state.lineCounter+1,
        newLine = ({key: lineKey});

    this.setState({
      ...this.state,
      lineCounter: lineKey,
      lines: [...this.state.lines, newLine],
    });

    console.log("line added");
  };

  removeLine = (params) => {
    console.log("line removed")
  };

  render() {
    return (
      <Form>
        <div className="pad-top-buttons">
          <PadButton> Options </PadButton>
          <PadButton onClick={(e)=>this.handleSubmit(e)}> Save </PadButton>
        </div>
        <div className="pad-scroll">
          <div className="pad-field">
            <div className="pad-lines">
              <Lines lines={this.state.lines} removeLine={this.removeLine}/>
              <button
                className="pad-add-line-button"
                type="button"
                onClick={(e)=>this.addLine(e)}
              >
                <i className="fa fa-plus mr-2"> </i>
                Add
              </button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default PadField;
