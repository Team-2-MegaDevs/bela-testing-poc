import * as React from "react";
import TestHeader from './TestHeader/TestHeader'
import TestQuestion from './TestQuestion/TestQuestion'
import TestFooter from './TestFooter/TestFooter'
export default class Test extends React.Component <{}> {
  render() {
    return (
      <div className="">
        <TestHeader/>
        <TestQuestion/>
        <TestFooter/>
      </div>
    );
  }
}