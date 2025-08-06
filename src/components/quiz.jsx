//ANY JS FILE THAT INCORPORTATES A COMPONENT MUST BE A JSX FILE

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
        answer: "Paris"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris, again.", "Ohio"],
        answer: "Paris, again."
    },

    ];

    return (
    <div> 
        <h2>Question 1</h2>
        <p className="question">{questionBank[0].question}</p>
        {questionBank[0].options.map((option) =>(
           <button className="option">{option}</button>
        ))}
        
        <div className="nav-buttons">
            <button>Previous</button>
            <button>Next</button>
        </div>
    </div>
    );
}

export default Quiz;