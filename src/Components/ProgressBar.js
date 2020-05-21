import React, { Component } from "react";

class ProgressBar extends Component {
  renderDots = () => {
    console.log(this.props.questionCount);
    const dotArr = []
    for (let i = 1; i < this.props.questionCount; i++){
        console.log(this.props.currentQuestion)
        if (this.props.currentQuestion >= i ){
            dotArr.push(<div id={`step${i}`} className="progress-step dot-incomplete" />)
            
        } else  dotArr.push(<div id={`step${i}`} className="progress-step dot-complete" />)

    }
    return dotArr
  };

  render() {

    return <div className="progress">
        {this.renderDots()}
    </div>;
  }
}

export default ProgressBar;
