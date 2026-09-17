import { useEffect, useState } from "react"

export default function Progressbar({ timeout, onTimerExpired, mode }) {
    const [questionTimer, setQuestionTimer] = useState(timeout);
    useEffect(() => {
        const timerOut = setTimeout(() => {
            if (onTimerExpired) {
                onTimerExpired();
            }
        }, timeout);
        return () => {
            clearTimeout(timerOut);
        };
    }, [timeout, onTimerExpired]);
    useEffect(() => {
        const interval = setInterval(() => {
            setQuestionTimer((prevTimer) => prevTimer - 10);
        }, 10);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <progress id="question-timer" value={questionTimer} max={timeout} className={mode} />
    )
}