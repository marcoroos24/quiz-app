//ANY JS FILE THAT INCORPORTATES A COMPONENT MUST BE A JSX FILE

import { useState } from "react";
import Results from "./results"

//Component function should always start with a capital
function Quiz() {
    console.log("Quiz component rendered");
    const questionBank = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Ohio"],
        answer: "Paris"
    },
    {
        question: "What is Kourosh's greatest secret?",
        options: ["Girl Dinner", "9/11", "What happened in Montreal", "labubu shelf"],
        answer: "9/11"
    },
    {
        question: "Where is my damn money?",
        options: ["I don't know", "I don't have it", "I'll get it to you by next week man!", "Shit okay fine, here it is"],
        answer: "Shit okay fine, here it is"
    },
    {
        question: "What sauce goes best with Five Guys fries?",
        options: ["Ketchup", "Malt vinegar", "Mayo", "Chick Fil A sauce"],
        answer: "Mayo"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris, again.", "Ohio"],
        answer: "Paris, again."
    },

    ];

    //states!
    const initialAnswers = [null, null, null, null, null];
    const[userAnswers, setUserAnswers] = useState(initialAnswers);
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const selectedAnswer = userAnswers[currentQuestion]; //a check to see if an answer is selected yet
    const [isQuizFinished, setIsQuizFinished] = useState(false);


    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        if(currentQuestion===questionBank.length-1)
            setIsQuizFinished(true);
        else
            setCurrentQuestion(currentQuestion + 1);
    }

    function goToPrev() {
        if (currentQuestion > 0)
            setCurrentQuestion(currentQuestion - 1);
    }

        function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }


    if (isQuizFinished) {
        return <Results 
        userAnswers={userAnswers} 
        questionBank={questionBank} 
        restartQuiz={restartQuiz} 
        />;
    }
    return (
    <div> 
        <h2>Question {currentQuestion+1}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>
        {questionBank[currentQuestion].options.map((option) =>(
           <button 
                className={"option" + (selectedAnswer === option ? " selected" : "")} //ternary operator checks for option selected
                onClick={() => handleSelectOption(option)}>{option}
            </button>
        ))}
        


        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion===0}>Previous</button>
            <button onClick={goToNext} disabled={!selectedAnswer}>
                {currentQuestion === questionBank.length-1 ? "Finish Quiz" : "Next"}
            </button>
        </div>
    </div>
    );
}

export default Quiz;