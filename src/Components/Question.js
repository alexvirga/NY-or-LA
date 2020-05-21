import React, { Component } from "react";

class Question extends Component {
  state = {
    questions: [
      {
        question: "In which year did you escape?",
        points: 1,
        answers: [
          { answer: "1997", city: "NY" },
          { answer: "2013", city: "LA" },
        ], 
      },
      {
        question: "What caused the root of all of the chaos?",
        points: 1,
        answers: [
          { answer: "An earthquake", city: "LA" },
          { answer: "World War 3", city: "NY" },
        ],
      },
      {
        question: "The president tries to stop an invasion from where?",
        points: 1,
        answers: [
          { answer: "Cuba", city: "LA" },
          { answer: "Soviet Union", city: "NY" },
        ],
      },
      {
        question: "Where was an island converted into a prison?",
        points: 1,
        answers: [
          { answer: "LA", city: "LA" },
          { answer: "Manhattan", city: "NY" },
        ],
      },
      {
        question:
          "Warning.. SPOILER ALERT: At the end of the movie, the main character Snake, does what?",
        points: 1,
        answers: [
          {
            answer: "Picks a cigarette box labelled “American Spirit”",
            city: "LA",
          },
          {
            answer: "Puffs a cigarette while going into the darkness",
            city: "NY",
          },
        ],
      },
    ],
  };



  render() {
    return (
      <div>
        <h1> Question</h1>

      </div>
    );
  }
}

export default Question;
