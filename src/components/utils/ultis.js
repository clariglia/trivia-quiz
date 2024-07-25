import { capitalQuizEasy, capitalQuizHard, capitalQuizMedium } from "../../constants/constants";

export const difficulty = () => {
    if(window.location.pathname.includes('easy')){
        return 'easy';
    } else if(window.location.pathname.includes('medium')){
        return 'medium';
    } else return 'hard';
}

export const capitalQuizContext = () => {
    if(window.location.pathname.includes('easy')){
        return capitalQuizEasy;
    } else if(window.location.pathname.includes('medium')){
        return capitalQuizMedium;
    } else return capitalQuizHard;
}