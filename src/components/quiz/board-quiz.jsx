import ContainerQuiz from "./container-quiz";
import ProgressQuiz from "./progress-quiz";
import QuestionsQuiz from "./questions-quiz";

const BoardQuiz = () =>{
    return (
            <ContainerQuiz>
                <ProgressQuiz />
                <QuestionsQuiz />
            </ContainerQuiz>
    )
}

export default BoardQuiz;