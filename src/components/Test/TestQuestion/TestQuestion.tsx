import * as React from "react";

export default class TestQuestion extends React.Component <{}> {
  render() {
    return (
      <div className="">
        <div>Question:</div>
        <div>Insert Question from bank</div>
        <div className="answerList">
            <div>Choice A</div>
            <div>Choice B</div>
            <div>Choice C</div>
            <div>Choice D</div>
        </div>
      </div>
    );
  }
}