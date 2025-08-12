//quiz.jsx is supposed to return UI for a quiz. The results would be a different UI, 
//and steer away from the purpose of the quiz

function Results() {
    return <div>
        <h2>Quiz Complerted!</h2>
        <p>Your Score: 3/6</p>
        <button className="restart-button"> Restart Quiz</button>
    </div>
}

export default Results;