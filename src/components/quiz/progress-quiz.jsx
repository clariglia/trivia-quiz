import { useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import { QuizContext } from "../context/quiz-context";

const ProgressQuiz = () => {
    const {progress, capitalQuiz, currQuestInd } = useContext(QuizContext);
    
    return(
        <>
            {currQuestInd >= capitalQuiz.length ? null : 
            <article className="col-12 flex-column"> 
                <ProgressBar animated variant="primary" now={progress} />
                <div>
                    <p>{`${currQuestInd + 1} / ${capitalQuiz.length}`}</p>
                </div>
            </article>
            }
        </>
    )
}

export default ProgressQuiz;