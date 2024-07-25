import { createContext, useCallback, useMemo, useState } from "react";
/* import { capitalQuizEasy, capitalQuizMedium } from "../../constants/constants"; */
import { capitalQuizContext } from "../utils/ultis";

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const [currQuestInd, setCurrQuestInd] = useState(0);
    const [selectOption, setSelectOption] = useState("");
    const [feedback, setFeedback] = useState("");
    const [progress, setProgress] = useState(0);
    const [saveAnswer, setSaveAnswer] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const capitalQuiz = capitalQuizContext();


    const handleOptionClick = useCallback((option) => {
        setSelectOption(option);
        if (option === capitalQuiz[currQuestInd].answer) {
            setFeedback("correct");
            setSaveAnswer(saveAnswer + 1);
            setIsAnswered(true);
        }
        else {
            setFeedback("incorrect");
            setIsAnswered(true);
        }
    }, [currQuestInd, saveAnswer, capitalQuiz])

    const handleNextQuestion = useCallback(() => {
        setCurrQuestInd(currQuestInd + 1);
        setSelectOption("");
        setFeedback("");
        setIsAnswered(false);
        setProgress((prevProgress) => prevProgress + capitalQuiz.length);
    }, [currQuestInd, capitalQuiz])

    const resetQuiz = useCallback(() => {
        setCurrQuestInd(0);
        setSelectOption("");
        setFeedback("");
        setProgress(0);
        setSaveAnswer(0);
        setIsAnswered(false);
    }, []);

    const currentQuestion = useMemo(() => capitalQuiz[currQuestInd], [currQuestInd, capitalQuiz]);

    return(
        <QuizContext.Provider value={{
            capitalQuiz,
            currQuestInd,
            selectOption,
            feedback,
            handleOptionClick,
            progress,
            currentQuestion,
            saveAnswer,
            isAnswered,
            handleNextQuestion, resetQuiz}}>
            {children}
        </QuizContext.Provider>
    )
}