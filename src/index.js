import React from 'react';
import './assets/style.css';
import ReactDOM from 'react-dom';
import general from './quizList/General';
import science from './quizList/Science';
import Result from './components/Result';
import NavBar from './components/NavBar';
import QuestionBox from './components/QuestionBox';

class Quizbee extends React.Component {
  
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
    currentQuiz: "",
  };

  getQuestions = (type) => {
    if (type === "general") {     
      general().then(general => {
        this.setState({
          questionBank: general,
          score: 0,
          responses: 0,
          currentQuiz: type
        });
      });
    }
    else if (type === "science") {
      science().then(science => {
        this.setState({
          questionBank: science,
          score: 0,
          responses: 0,
          currentQuiz: type
        });
      });
    }
    else {    
      general().then(general => {
        this.setState({
          questionBank: general
        });
      });
    }
  };

  componentDidMount() {
    this.getQuestions();
  }

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });
  }

  playAgain = () => {
    this.getQuestions(this.state.currentQuiz);
    this.setState({
      score: 0,
      responses: 0
    });
  }

  render() {
    return (
      <div>
        <NavBar        
          general={a => this.getQuestions(a)}
          science={b => this.getQuestions(b)}
        />
        <div className="container">        
          <div className="title">Quizbee</div>
          {this.state.questionBank.length > 0 &&
          this.state.responses <= 5 &&
          this.state.questionBank.map(
          ({question, answers, correct, questionId}) => (
            <QuestionBox
              question={question}
              options={answers}
              selected={answered => this.computeAnswer(answered, correct)}
              key={questionId}
            />
          )
          )}
        </div>
        <div>
          {this.state.responses === 5 ? <Result score={this.state.score} playAgain={this.playAgain}/> : null}
        </div>
      </div>
    );
  }
}

ReactDOM.render (
  <Quizbee />,
  document.getElementById('root')
)