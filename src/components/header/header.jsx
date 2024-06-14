import { useContext } from "react";
import { Link } from "react-router-dom"
import { QuizContext } from "../context/quiz-context";

export const Header = () => {
    const { resetQuiz } = useContext(QuizContext);
    
    return(
        <main className="container-home">
            <h1>CAPITAL QUIZ</h1>
            <h4>Pronto per iniziare questo magnifico quiz???</h4>
            <Link to="/quiz"><button onClick={resetQuiz}>Inizia</button></Link>
        </main>
    )
}