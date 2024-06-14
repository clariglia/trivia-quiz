import { useContext } from "react";
import { QuizContext } from "../context/quiz-context";
import { Link } from "react-router-dom";

const Results = () => {
    const { capitalQuiz, saveAnswer, resetQuiz } = useContext(QuizContext);

    return(
        <section className="container-results">
            <h1>Quiz completato!</h1>
            <h3>Hai totalizzato: {saveAnswer} / {capitalQuiz.length} </h3>
            <div>
                <Link to="/">
                    <button>Torna alla pagina iniziale!</button>
                </Link>
                <Link to="/quiz">
                    <button onClick={resetQuiz}>Ricomincia il quiz!</button>
                </Link>
            </div>
        </section>
    )
}

export default Results;