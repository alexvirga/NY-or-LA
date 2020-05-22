import React, { Component } from "react";
import Question from "./Question";
import QuestionList from "./QuestionList";
import ProgressBar from "./ProgressBar";
import QuizResults from "./QuizResults";
import Footer from "./Footer";

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
  };

  render() {
    return (
      <div>
        {this.state.started ? (
          this.state.currentQuestion < QuestionList.length ? (
            <div className="quiz-container">
              <Question
                key={this.state.currentQuestion}
                handleAnswer={this.handleAnswer}
                currentQuestion={QuestionList[this.state.currentQuestion]}
              />
              <ProgressBar
                questionCount={QuestionList.length + 1}
                currentQuestion={this.state.currentQuestion}
              />
            </div>
          ) : (
            <QuizResults finalScore={this.state.score} />
          )
        ) : (
          <div className="quiz-landing">
            <h1> Did You Escape From NY or LA </h1>
            <button
              className={"start-button"}
              onClick={() => this.setState({ started: true })}
            >
              <h2>Start Quiz</h2>
            </button>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Home;
