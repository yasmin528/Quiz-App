import { useState } from "react";
import Progressbar from "./Progressbar";
import QUESTIONS from '../questions';
import Answers from "./answers";


export default function Question({ index, onTimerExpired, onSelectAnswer}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });
    let timer = 10000;
    if(answer.selectedAnswer){
        timer = 1000;
    }
    if(answer.isCorrect !== null){
        timer = 2000;
    }
    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: answer === QUESTIONS[index].answers[0]
            });
            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000);
        }, 1000);
    }
    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect != null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }else if (answer.selectedAnswer ){
        answerState = 'answered'
    }
    return (
        <div id="question">
            <Progressbar key={timer} timeout={timer} onTimerExpired={answer.selectedAnswer === ''? onTimerExpired :  null} mode={answerState}/>
            <h2>{QUESTIONS[index].text}</h2>
            <Answers answers={QUESTIONS[index].answers} answerState={answerState} selectedAnswer={answer.selectedAnswer} handleSelectAnswer={handleSelectAnswer} />
        </div>
    )
}