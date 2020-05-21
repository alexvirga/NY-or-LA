import React, { Component } from 'react'
import Question from './Question'

class Home extends Component {
    state = {
        started: false,
        currentQuestion: 0,
        score: {
            NY: 0,
            LA: 0
        }
    }


    render() {

        return (
            <div>
                <h1> Home</h1>
                {this.state.started ? <Question /> : <h1> Did You Escape From NY or LA </h1>}
                

            </div>
        )
    }
}

export default Home