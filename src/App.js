import React,{ useState } from "react"
import "./App.css"
import questions from './questions';
import Progress_bar from './progress_bar';


function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [correctWidth , setCorrectwidth] = useState(0)
  const [inCorrectWidth , setinCorrectwidth] = useState(0)
  const [totalCorrect , setTotalCorrect] = useState(0)
  const [totalIncorrect , setTotalIncorrect] = useState(0)
  

  function handleAnswer(isCorrect) {

    if (isCorrect) {

      setCorrectwidth(correctWidth+10)
      setTotalCorrect(totalCorrect+1)
      setScore(score + 1);
      console.log("true")

    }
    if(!isCorrect){

      setinCorrectwidth(inCorrectWidth+10)
      setTotalIncorrect(totalIncorrect+1)
      console.log("false");
      
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (<>

    <h2>Progress Bar</h2>

    <Progress_bar correctwidth={correctWidth + "%"} incorrectwidth={inCorrectWidth + "%"} total={questions.length} total_incorrect={totalIncorrect} total_correct={totalCorrect} />

    <div className="app">
      {showScore ? (
        <div className="score-section">
          Você pontuou {score} de {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  </>
  )
}

export default App;
