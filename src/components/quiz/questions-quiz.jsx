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
    } = useContext(QuizContext);


        if (currQuestInd >= capitalQuiz.length) {
            navigate('/results');
        }

    return(
        <section>     
            <h2>{window.location.pathname.includes('quiz') && currentQuestion.question}</h2>
            {window.location.pathname.includes('quiz') && currentQuestion.options.map((option, index) => (
                    <div key={index}>
                        <button className="button-quiz"
                            onClick={() => handleOptionClick(option)}
                            style={{
                                backgroundColor: selectOption === option
                                    ? option === currentQuestion.answer
                                        ? "green"
                                        : "red"
                                    : feedback && option === currentQuestion.answer
                                        ? "green"
                                        : ""
                            }}>
                            {option}
                        </button>
                    </div>
                ))}
            {feedback && <button className="button-next" onClick={handleNextQuestion}>Next question</button>}
        </section>
    )
}

export default QuestionsQuiz;