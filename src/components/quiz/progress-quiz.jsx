import { useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import { QuizContext } from "../context/quiz-context";
import { difficulty } from "../utils/ultis";

const ProgressQuiz = () => {
    const {progress, capitalQuiz, currQuestInd } = useContext(QuizContext);
    return(
        <>
            {currQuestInd >= capitalQuiz.length ? null : 
            <article className="col-12 flex-column"> 
                <section className={difficulty() + '-progress'}>
                    <ProgressBar animated now={progress} />
                </section>
                <div>
                    <p>{`${currQuestInd + 1} / ${capitalQuiz.length}`}</p>
                </div>
            </article>
            }
        </>
    )
}

export default ProgressQuiz;