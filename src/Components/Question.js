import React, { Component } from "react";
import QuestionList from './QuestionList'

class Question extends Component {
  state = {
      currentQuestion: 0
  }



  render() {
    return (
      <div className="slide" >
        <h1 className="question-title"> {this.props.currentQuestion.question} </h1>
        <div className={"response-container"}>
            <div className={"response response-left"} onClick={() => this.props.handleAnswer(this.props.currentQuestion.answers[0].city) }>
            {this.props.currentQuestion.answers[0].answer}
            </div>
            <div className={"response response-right"} onClick={() => this.props.handleAnswer(this.props.currentQuestion.answers[1].city) }>
            {this.props.currentQuestion.answers[1].answer}
            </div>
        </div>

      </div>
    );
  }
}

export default Question;
