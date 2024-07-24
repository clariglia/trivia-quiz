import { useContext } from "react";
import { QuizContext } from "../context/quiz-context";
import { useNavigate } from "react-router-dom";

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


    if (currQuestInd >= capitalQuiz.length) {
        window.location.pathname.includes('quiz-easy') ? navigate('/easy-results') : navigate('/medium-results');
    }

    return(
        <section>     
            <h2 className={window.location.pathname.includes('easy') ? "question-easy" : "question-medium"}>{window.location.pathname.includes('quiz') && currentQuestion.question}</h2>
            {window.location.pathname.includes('quiz') && currentQuestion.options.map((option, index) => (
                    <div key={index}>
                        <button className={window.location.pathname.includes('easy') ? "button-quiz-easy" : "button-quiz-medium"}
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
            {feedback && <button className={window.location.href.includes('easy') ? "button-next-easy" : "button-next-medium"} onClick={handleNextQuestion}>Next question</button>}
        </section>
    )
}

export default QuestionsQuiz;