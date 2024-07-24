import { useContext } from "react";
import { Link } from "react-router-dom"
import { QuizContext } from "../context/quiz-context";

export const Header = () => {
    const { resetQuiz } = useContext(QuizContext);
    
    return(
        <main className="container-home">
            <h1>CAPITAL QUIZ</h1>
            <h3>Pronto per iniziare questo magnifico quiz???</h3>
            <h4>Scegli la modalità di quiz</h4>
            <section className="d-flex justify-content-center gap-2 ">
                <Link to="/quiz-easy"><button className="easy" onClick={resetQuiz}>Easy</button></Link>
                <Link to="/quiz-medium"><button className="medium" onClick={resetQuiz}>Medium</button></Link>
            </section>
            
        </main>
    )
}