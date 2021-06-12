import React, { Component } from "react";
import { Button, Form, Input } from "reactstrap";
import PadLine from "./inputs/Line";
import PadButton from "./inputs/Button";

function Lines({ lines = [] , removeLine = ()=>{}, onUpdateLine = ()=>{}}) {
  var lines = Object.keys(lines).map((key, index ) => {
    var line = lines[key];
    return <PadLine key={line.key} 
      id={`line_`+line.key}
      line={line} 
      removeLine={removeLine}
      onUpdateLine={onUpdateLine}
      count={index+1}
      />;
  });
  return lines;
}

class PadField extends Component {
  state = {
    lineCounter: 0,
    lines: {
      0:{
        key: 0,
        value: ''
      },
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let savedFile = "data:text/csv;charset=utf-8," 
    + Object.values(this.state.lines).map(line => line.value).join("\n");
    let encodedUri = encodeURI(savedFile);
    let link = <a href={encodedUri} download={`title.svg`}></a>;
    // React.render(link, document.body)
    // link.click();
    // window.open(encodedUri);
    console.log(this.state.lines);
  };

  addLine = (e) => {
    e.preventDefault();
    var lineKey = this.state.lineCounter+1,
        newLine = {
          key: lineKey,
          value: ''
        },
        lines = {...this.state.lines};
        lines[lineKey] = newLine;

    this.setState({
      ...this.state,
      lineCounter: lineKey,
      lines: lines
    });
  };

  updateLine = (key, value) => {
    var lines = {... this.state.lines};

    if (lines[key]) {
      lines[key].value = value;
      this.setState({
        ...this.state,
        lines: lines
      });
    }
  };

  removeLine = (line) => {
    const lines = {...this.state.lines}
    if (line.key in this.state.lines) {
        delete lines[line.key];
        this.setState({
          ...this.state,
          lines: lines,
        });
      }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="pad-top-buttons">
          <PadButton> Options </PadButton>
          <PadButton type="submit"> Save </PadButton>
        </div>
        <div className="pad-scroll">
          <div className="pad-field">
            <div className="pad-lines">
              <Lines 
                lines={this.state.lines}
                removeLine={this.removeLine.bind(this)}
                onUpdateLine={this.updateLine.bind(this)}
              />

              <button className="pad-add-line-button"
                type="button"
                onClick={(e) => this.addLine(e)}
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
