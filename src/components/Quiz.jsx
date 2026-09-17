import { useState , useCallback } from "react";
import QUESTIONS from '../questions';
import Question from "./Question";
import Summary from "./Summary";
export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const isQuizCompleted = userAnswers.length === QUESTIONS.length;
    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevAnswer) => {
            const NewAnswersList = [...prevAnswer, selectedAnswer];
            return NewAnswersList;
        });
       
    }, [])
    const onTimerExpired = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])
    if (isQuizCompleted) {
        return (
            <Summary userAnswers={userAnswers}/>
        )
    }
    
    return (
        <div id="quiz">
            <Question key={activeQuestionIndex} index={activeQuestionIndex} onTimerExpired={onTimerExpired} onSelectAnswer={handleSelectAnswer}/>
        </div >
    )
}