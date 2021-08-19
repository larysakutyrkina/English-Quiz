import React, {Component} from 'react';
import styles from './Quiz.module.scss';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'How often ___ to the dentist?',
                correctAnswerId: 1,
                id: 1,
                answers: [
                    {text: 'do you go', id: 1},
                    {text: 'you go', id: 2},
                    {text: 'you do go', id: 3},
                    {text: 'does you go', id: 4},
                ]},
            {
                question: 'How many brothers and sisters ___ ?',
                correctAnswerId: 3,
                id: 2,
                answers: [
                    {text: 'you have', id: 1},
                    {text: 'you do have', id: 2},
                    {text: 'have you got', id: 3},
                    {text: 'do have you', id: 4},
                ]
            },
            {
                question: 'Where ___ last night?',
                correctAnswerId: 4,
                id: 3,
                answers: [
                    {text: 'Tim was', id: 1},
                    {text: 'were Tim', id: 2},
                    {text: 'did Tim', id: 3},
                    {text: 'was Tim', id: 4},
                ]
            }
        ],

    }
    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0 ]
                if (this.state.answerState[key] === 'success') {
                    return
                }
        }
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.correctAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = window.setTimeout(() => {

                if (this.isQuizOver()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)

        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    }

    isQuizOver () {
        return  this.state.activeQuestion + 1 === this.state.quiz.length
    }
    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }
    render() {
        return (
            <div className={styles.quiz}>
                <div className={styles.quizActive}>
                    <h1 className={styles.title}>Fill in the gap</h1>
                    {
                        this.state.isFinished
                        ? <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                questionNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        );
    }
}

export default Quiz;