import React from 'react';
import styles from './FinishedQuiz.module.scss';
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {
    const resultCount =  Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total
    }, 0)
    return (
        <div className={styles.finishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const icons = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        styles[props.results[quizItem.id]]
                    ]
                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>. &nbsp;
                            {quizItem.question}
                            <i className={icons.join(' ')}/>
                        </li>
                    )
                })}
            </ul>

            <p>Your result is {resultCount} out of {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type='primary'>Try Again</Button>
                <Button type='success'>Back to test list </Button>
            </div>
        </div>
    );
}

export default FinishedQuiz;