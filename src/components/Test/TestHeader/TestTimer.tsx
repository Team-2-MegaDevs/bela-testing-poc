import * as React from "react";

export default class TestTimer extends React.Component <{}> {
  render() {
    return (
      <div  style={{ display: 'flex', flexDirection: 'row'}} >
        <div style={{ paddingRight: '10px'}}>Time left:</div>
        <div>39:59</div>
      </div>
    );
  }
}