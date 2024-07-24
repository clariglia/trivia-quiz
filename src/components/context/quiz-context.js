import { createContext, useCallback, useMemo, useState } from "react";
import { capitalQuiz } from "../../constants/constants";

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const [currQuestInd, setCurrQuestInd] = useState(0);
    const [selectOption, setSelectOption] = useState("");
    const [feedback, setFeedback] = useState("");
    const [progress, setProgress] = useState(0);
    const [saveAnswer, setSaveAnswer] = useState(0);


    const handleOptionClick = useCallback((option) => {
        setSelectOption(option);
        if (option === capitalQuiz[currQuestInd].answer) {
            setFeedback("correct");
            setSaveAnswer(saveAnswer + 1);
        } else {
            setFeedback("incorrect");
        }
    }, [currQuestInd, saveAnswer])

    const handleNextQuestion = useCallback(() => {
        setCurrQuestInd(currQuestInd + 1);
        setSelectOption("");
        setFeedback("");
        setProgress((prevProgress) => prevProgress + capitalQuiz.length);
    }, [currQuestInd])

    const resetQuiz = useCallback(() => {
        setCurrQuestInd(0);
        setSelectOption("");
        setFeedback("");
        setProgress(0);
        setSaveAnswer(0);
    }, []);

    const currentQuestion = useMemo(() => capitalQuiz[currQuestInd], [currQuestInd]);

    return(
        <QuizContext.Provider value={{capitalQuiz,
            currQuestInd,
            selectOption,
            feedback,
            handleOptionClick,
            progress,
            currentQuestion,
            saveAnswer,
            handleNextQuestion, resetQuiz}}>
            {children}
        </QuizContext.Provider>
    )
}