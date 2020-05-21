import React, { Component } from "react";
import Question from "./Question";
import QuestionList from "./QuestionList";

class Home extends Component {
  state = {
    started: false,
    currentQuestion: 0,
    score: {
      NY: 0,
      LA: 0,
    },
  };

  handleAnswer = (city) => {
    this.setState({
      currentQuestion: (this.state.currentQuestion += 1),
      ...this.state.score,
      city: this.state.score[city]++,
    });
    console.log(this.state.score);
  };
  render() {
    return (
      <div>
        <h1> Home</h1>
        {this.state.started ? (
          this.state.currentQuestion < QuestionList.length ? (
              <div>
            <p> {this.state.currentQuestion + 1}</p>

            <Question
              handleAnswer={this.handleAnswer}
              currentQuestion={QuestionList[this.state.currentQuestion]}
            />
            </div>
          ) : (
            <h1> finished</h1>
          )
        ) : (
          <div>
            <h1> Did You Escape From NY or LA </h1>
            <button onClick={() => this.setState({ started: true })}>
              Start Quiz
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
