import { useContext } from "react";
import { QuizContext } from "../context/quiz-context";
import { Link } from "react-router-dom";

const Results = () => {
    const { capitalQuiz, saveAnswer, resetQuiz } = useContext(QuizContext);

    return(
        <section className={window.location.pathname.includes('easy') ? "container-results-easy" : "container-results-medium"}>
            <h1>Quiz completato!</h1>
            <h3>Hai totalizzato: {saveAnswer} / {capitalQuiz.length} </h3>
            <div>
                <Link to="/">
                    <button>Torna alla pagina iniziale!</button>
                </Link>
                <Link to={window.location.pathname.includes('easy') ? '/quiz-easy' : '/quiz-medium'}>
                    <button onClick={resetQuiz}>Ricomincia il quiz!</button>
                </Link>
            </div>
        </section>
    )
}

export default Results;