import * as React from "react";
import TestTimer from './TestTimer'
export default class TestHeader extends React.Component <{}> {
  render() {
    return (
      <div className="">
        <button>Cancel Test</button>
        <TestTimer/>
      </div>
    );
  }
}