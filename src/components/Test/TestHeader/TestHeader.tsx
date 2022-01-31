import * as React from "react";
import TestTimer from './TestTimer'



export default class TestHeader extends React.Component <{}> {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px'}} >
        <div style={{ width: "50%", display: 'flex', flexDirection: 'row'}}>
            <button >Cancel Test</button>
        </div>
        <div style={{ width: "50%", display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center"}}>
            <TestTimer />
        </div>
      </div>
    );
  }
}