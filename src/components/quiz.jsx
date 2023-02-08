import { useEffect, useState } from "react"

export default function Quiz({
    data,
    setStop,
    questionNumber,
    setQuestionNumber }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);

        delay(6000, (a) => {
            if (a.correct) {
                setQuestionNumber = ((prev) => prev + 1);
                setSelectedAnswer(null);
            } else{
                setStop(true);
            }
        });
    };

    const handleClick = () => {
        setSelectedAnswer();
        setClassName("answer active");
        delay(3000, (a) => setClassName(a.correct ? "answer correct" : "answer wrong"));
    };

    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
                ))}
            </div>
        </div>
    )
}