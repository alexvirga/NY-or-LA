import React, { Component } from "react";

class ProgressBar extends Component {
  renderDots = () => {
    const dotArr = [];
    for (let i = 0; i < this.props.questionCount - 1; i++) {
      if (this.props.currentQuestion >= i) {
        dotArr.push(
          <div id={`step${i}`} className="progress-step dot-incomplete" />
        );
      } else
        dotArr.push(
          <div id={`step${i}`} className="progress-step dot-complete" />
        );
    }
    return dotArr;
  };

  render() {
    return <div className="progress">{this.renderDots()}</div>;
  }
}

export default ProgressBar;
