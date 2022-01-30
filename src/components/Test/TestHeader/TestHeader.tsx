import * as React from "react";
import TestTimer from './TestTimer'



export default class TestHeader extends React.Component <{}> {
  render() {
    return (
      <div style={{ width: "100vw", backgroundColor: 'blue', display: 'flex', flexDirection: 'row'}} >
        <div style={{ width: "50%", display: 'flex', flexDirection: 'row'}}>
            <button >Cancel Test</button>
        </div>
        <div style={{ width: "50%", display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TestTimer />
        </div>
      </div>
    );
  }
}