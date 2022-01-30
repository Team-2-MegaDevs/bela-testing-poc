import * as React from "react";

export default class TestQuestion extends React.Component <{}> {
  render() {
    return (
      <div className="">
        <div style={{ display: 'flex', flexDirection: 'row'}}>Question:</div>
        
        <div style={{ width: "100vw", left: 0, display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex', flexDirection: 'row'}}>Choice A</div>
            <div style={{ display: 'flex', flexDirection: 'row'}}>Choice B</div>
            <div style={{ display: 'flex', flexDirection: 'row'}}>Choice C</div>
            <div style={{ display: 'flex', flexDirection: 'row'}}>Choice D</div>
        </div>
      </div>
    );
  }
}