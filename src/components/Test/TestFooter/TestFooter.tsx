import * as React from "react";
export default class TestFooter extends React.Component <{}> {
  render() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
        <button>NextQuestion</button>
    </div> 
    );
  }
}