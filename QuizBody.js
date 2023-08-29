import React, { useState } from 'react';
import { questions } from './QuizData'; // Assuming you export your questions from QuizData.js

const QuizBody = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setShowScore(true);
        }
    };

    const handleNextButtonClick = () => {
        setShowScore(false);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div className="app">
            <h1>Wise Spending Quiz</h1>
            <div className="quiz">
                {!showScore ? (
                    <div>
                        <h2 id="question">{questions[currentQuestionIndex].question}</h2>
                        <div id="answer-buttons">
                            {questions[currentQuestionIndex].answers.map((answer, index) => (
                                <button
                                    key={index}
                                    className="btn"
                                    onClick={() => handleAnswerClick(answer.correct)}
                                >
                                    {answer.text}
                                </button>
                            ))}
                        </div>
                        <button
                            id="next-btn"
                            className="btn"
                            onClick={handleNextButtonClick}
                        >
                            Next
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2>Your Score: {score} out of {questions.length}</h2>
                        <button
                            id="next-btn"
                            className="btn"
                            onClick={() => {
                                setCurrentQuestionIndex(0);
                                setScore(0);
                                setShowScore(false);
                            }}
                        >
                            Play Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizBody;
