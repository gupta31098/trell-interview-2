import React, { Component } from 'react'
import ReactDOM from "react-dom";
import questionAPI from './question';
import QuestionBox from './components/QuestionBox';
import Result from './components/ResultBox';
class Quiz extends Component {
    constructor(){
        super();
        this.state={
            questionBank:[],
            scores:0,
            responses:0
        };
    }
    getQuestions = () => {
        questionAPI().then(question => {
            this.setState({questionBank:question});
        })
    }
    computeAnswer=(answer,correctAns)=>{
        if(answer===correctAns){
            this.setState({
                score:this.state.score+1
            });
        }
        this.setState({
            responses:this.state.responses<10
            ? this.state.responses+1:10
        });
    };
    componentDidMount(){
        this.getQuestions();
    }
    render() {
        return (<div className="container">
            <div className="title">Question Answer</div>
            {
                this.state.questionBank.length>0 &&
                this.state.response < 10 &&
                this.state.questionBank.map(({question,answers,
                correct,questionId})=><QuestionBox question={question}
                options={answers} key={questionId}
                selected={answer=>this.computeAnswer(answer,correct)}/>)
            }
            {
                this.state.response === 10 
                ? (<Result score={this.state.score}
                    playAgain={this.playAgain}/>):null
            }
            </div>
        )
    }
}

ReactDOM.render(<Quiz/>,document.getElementById("root"));
