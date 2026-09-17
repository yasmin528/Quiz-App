import { useRef } from "react";
function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}
export default function Answers({answers,selectedAnswer,answerState,handleSelectAnswer }) {
    const shuffledAnswers = useRef();
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = shuffleArray(answers);
    }
    return (
        <ul id="answers">
            {
                shuffledAnswers.current.map((answer, index) => {
                    const isSelected = selectedAnswer === answer
                    let cssClasses = '';
                    if (answerState == 'answered' && isSelected) {
                        cssClasses = 'selected'
                    }
                    if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                        cssClasses = answerState
                    }
                    return (
                        <li className="answer" key={index}>
                            <button className={cssClasses} onClick={() => handleSelectAnswer(answer)} disabled={answerState !== ''}>{answer}</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}