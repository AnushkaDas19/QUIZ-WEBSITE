import React, { useState } from 'react';
import Question from './Question';

const quizQuestions = [
    {
        question: "Which of the following is used in React.js to increase performance?",
        options: ["Virtual DOM", "Original DOM", "Both A and B", "None of the above"],
        answer: "Virtual DOM"
    },
    {
        question: "What is ReactJS?",
        options: ["Server-side framework", "user interface framework", "both a and b", "none of the above"],
        answer: "user interface framework"
    },
    {
        question: "Identify the one which is used to pass data to components from outside",
        options: ["Render with arguments", "setState", "PropTypes", "props"],
        answer: "props"
    },
    {
        question: "Who created React.js?",
        options: ["Jordan Mike", "Jordan Walke", "Tim Lee", "Jordan Lee"],
        answer: "Jordan Walke"
    },
    {
        question: "In which language is React.js written?",
        options: ["Python", "JavaScript", "Java", "PHP"],
        answer: "JavaScript"
    },
    {
        question: "What is Babel?",
        options: ["JavaScript compiler", "JavaScript interpreter", "JavaScript transpiler", "None of the above"], answer: "JavaScript compiler"
    },
    {
        question: "Identify the command used to create a react app.",
        options: ["npm install create-react-app", "npm install -g create-react-app", "install -g create-react-app", "None of the above"],
        answer: "npm install -g create-react-app"
    },
    {
        question: "Which of the following port is the default where webpack-dev-server runs?",
        options: ["3000", "3306", "3030", "8080"],
        answer: "8080"
    },
    {
        question: "How many elements can a valid react component return?",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        question: "A state in React.js is also known as?",
        options: ["The internal storage of the component", "External storage of the component", "Permanent storage", "All of the above"],
        answer: "The internal storage of the component"
    },
    {
        question: "Which of the following method is used to access the state of a component from inside of a member function?",
        options: ["this.prototype.stateValue", "this.getState()", "this.values", "this.state"],
        answer: "this.state"
    },
    {
        question: "State whether true or false: Props are methods into other components?",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What are arbitrary inputs of components in react also known as?",
        options: ["Elements", "Props", "Keys", "Ref"],
        answer: "Props"
    },
    {
        question: "JSX stands for __________",
        options: ["Javascript XML", "JSON XML", "JSON", "Javascript and AngularJS"],
        answer: "Javascript XML"
    },
    {
        question: "The function which is called to render HTML to a web page in react?",
        options: ["ReactDOM_render()", "render()", "render_DOM()", "DOM_HTML()"],
        answer: "render()"
    },
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (selectedOption) => {
        if (selectedOption === quizQuestions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {quizQuestions.length}
                </div>
            ) : (
                <>
                    <Question
                        question={quizQuestions[currentQuestion].question}
                        options={quizQuestions[currentQuestion].options}
                        onAnswerOptionClick={handleAnswerOptionClick}
                    />
                </>
            )}
        </div>
    );
}

export default App;