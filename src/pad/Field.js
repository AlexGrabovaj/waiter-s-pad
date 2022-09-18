import React, { Component } from "react";
import { Form } from "reactstrap";
import PadLine from "./inputs/Line";
import PadButton from "./inputs/Button";
import { Parser } from "json2csv";


const downloadAsCsv = (data) => { //TODO get this out of here
  const encodedUri = encodeURI(data);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `idea_${Date.now()}.csv`);
  link.click();
}

function Lines({ lines = [] , removeLine = ()=>{}, onUpdateLine = ()=>{}}) {
  return Object.keys(lines).map((key, index ) => {
    var line = lines[key];
    return <PadLine key={line.key} 
      id={`line_`+line.key}
      line={line} 
      removeLine={removeLine}
      onUpdateLine={onUpdateLine}
      count={index+1}
      />;
  });
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
  savePad = (e) => {
    e.preventDefault()
    const fields = ["key", "value"]
    const parserOpt = {fields}
    const parser = new Parser(parserOpt) 
    const ideas = Object.values(this.state.lines)
    const parsedIdeas = parser.parse(ideas)
    
    const savedFile = `data:text/csv;charset=utf-8,${parsedIdeas}`; 
    downloadAsCsv(savedFile)
    this.clear()
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

  clear = () => {
    this.setState({
      ...this.state,
      lineCounter: 0,
      lines: {
        0:{
          key: 0,
          value: ''
        },
      },
    })
  }

  render() {
    return (
      <Form onSubmit={this.savePad}>
        <div className="pad-top-buttons">
          {/* <PadButton> Options </PadButton> */}
          <PadButton onClick={this.clear}> Clear </PadButton>
          <PadButton onClick={this.savePad}> Save </PadButton>
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
