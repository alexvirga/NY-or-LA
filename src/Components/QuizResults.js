import React, { Component } from "react";

class QuizResults extends Component {
  calculateResult = () => {
    const scores = this.props.finalScore;
    const result = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
    return result;
  };
  render() {
    return (
      <h1 className={"result-text"}>
        Congrats, you are a survivor! You just escaped from{" "}
        {this.calculateResult()}!
      </h1>
    );
  }
}

export default QuizResults;
