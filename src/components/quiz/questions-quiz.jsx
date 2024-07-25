import { useContext, useEffect } from "react";
import { QuizContext } from "../context/quiz-context";
import { useNavigate } from "react-router-dom";
import { difficulty } from "../utils/ultis";

const QuestionsQuiz = () => {
const navigate = useNavigate();
const {
    capitalQuiz,
    currQuestInd,
    selectOption,
    feedback,
    handleOptionClick,
    handleNextQuestion,
    currentQuestion,
    isAnswered,
} = useContext(QuizContext);


    useEffect(()=>{
        if (currQuestInd >= capitalQuiz.length) {
            navigate(`/${difficulty()}-results`);
        }
    }, [currQuestInd, capitalQuiz.length, navigate])

    return(
        <section>     
            <h2 className={`question-${difficulty()}`}>{window.location.pathname.includes('quiz') && currentQuestion && currentQuestion.question}</h2>
            {window.location.pathname.includes('quiz') && currentQuestion && currentQuestion.options.map((option, index) => (
                    <div key={index}>
                        <button className={`button-quiz-${difficulty()}`}
                            disabled={isAnswered}
                            onClick={() => handleOptionClick(option)}
                            style={{
                                backgroundColor: selectOption === option
                                  ? option === currentQuestion.answer
                                    ? "#00A693" // Verde persiano per risposta corretta
                                    : "#DC143C" // Rosso cremisi per risposta sbagliata
                                  : feedback && option === currentQuestion.answer
                                    ? "#00A693" // Verde persiano per feedback di risposta corretta
                                    : "",
                                 color: selectOption === option
                                  ? option === currentQuestion.answer
                                    ? "#000000" // Testo nero per risposta corretta
                                    : "#FFFFFF" // Testo bianco per risposta sbagliata
                                  : feedback && option === currentQuestion.answer
                                    ? "#000000" // Testo nero per feedback di risposta corretta
                                    : "",
                              }}>
                            {option}
                        </button>
                    </div>
                ))}
            {feedback && <button className={`button-next-${difficulty()}`} onClick={handleNextQuestion}>Next question</button>}
        </section>
    )
}

export default QuestionsQuiz;