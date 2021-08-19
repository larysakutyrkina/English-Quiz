import React from 'react';
import styles from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
    return (
        <div className={styles.activeQuiz}>
            <p className={styles.question}>
                <span>
                    <strong>{props.questionNumber}.</strong>&nbsp;
                    {props.question}
                </span>
            </p>

            <small className={styles.count}> {props.questionNumber} out of {props.quizLength} </small>

            <AnswersList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    );
}

export default ActiveQuiz;