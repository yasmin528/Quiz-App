
import quizCompletedImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';
export default function Summary({ userAnswers }) {
    const skippedAnswers =  userAnswers.filter(answer => answer === null);
    const correctAnswers  =  userAnswers.filter((answer , index) => answer === QUESTIONS[index].answers[0]);
    const skippedAnswerShared = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctedAnsweredShared =  Math.round((correctAnswers.length / userAnswers.length) * 100);
    const wrongAnsweredShared = 100 - skippedAnswerShared - correctedAnsweredShared;
    return (
        <div id="summary">
            <img src={quizCompletedImg} />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedAnswerShared}%</span>
                    <span className='text'>Skipped</span>
                </p>
                <p>
                    <span className='number'>{correctedAnsweredShared}%</span>
                    <span className='text'>Answered correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnsweredShared}%</span>
                    <span className='text'>Answered incorrectly</span>
                </p>
            </div>
            <ol>
                {
                    userAnswers.map((answer,index) => {
                        let cssClasses = 'user-answer';
                        if(answer === null){
                            cssClasses+=' skipped';
                        }else if(answer === QUESTIONS[index].answers[0]){
                            cssClasses += ' correct'
                        }else{
                             cssClasses += ' wrong'
                        }
                        return (
                            <li key={index}>
                                <h3>{index + 1}</h3>
                                <p className='question'>{QUESTIONS[index].text}</p>
                                <p className={cssClasses}>{answer ?? 'skipped'}</p>
                            </li>
                        )
                    })
                }

            </ol>
        </div>
    )
}