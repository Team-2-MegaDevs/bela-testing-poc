import * as React from "react";

export default class TestQuestion extends React.Component <{}> {
  render() {
    return (
      <div className="">
        <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px'}}>Question:</div>
        
        <div style={{ left: 0, display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px'}}>Choice A</div>
            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px'}}>Choice B</div>
            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px'}}>Choice C</div>
            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px'}}>Choice D</div>
        </div>
      </div>
    );
  }
}