//quiz.jsx is supposed to return UI for a quiz. The results would be a different UI, 
//and steer away from the purpose of the quiz. Thus, we make the results component

function Results({questionBank, userAnswers, restartQuiz}) {

    function getScore() {
        let finalScore = 0;

        userAnswers.forEach((answer, index) => {
            if(answer === questionBank[index].answer) {
                finalScore++;
            }
        });

        return finalScore;
    }

    const score = getScore();


    return <div>
        <h2>Quiz Complerted!</h2>
        <p>Your Score: {score}/5</p>
        <button className="restart-button" onClick={restartQuiz}> Restart Quiz</button>
    </div>
}

export default Results;