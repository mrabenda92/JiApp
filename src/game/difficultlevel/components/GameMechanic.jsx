import React from "react";
import ReturnButton from "../components/ReturnButton";
import './gamemechanic.css';


class Card extends React.PureComponent {
    state = {
        cardClass: ''
    }

    handleCardClick = () => {
        if (this.props.answer == this.props.correct) {
            this.setState({
                cardClass: 'cardCorrect',
            }, () => {
                this.props.getPoint()})
        } else {
            this.setState({
                cardClass: 'cardIncorrect'
            })
        }
        this.props.chooseAnswer(this.props.answer)
    }

    render() {
        return (
            <button
                disabled={this.props.disabled}
                className={`cardBox ${this.state.cardClass}`}
                onClick={this.handleCardClick}>
                {this.props.answer}
            </button>
        )
    }
}

class GameMechanic extends React.Component {
    state = {
        answers: [],
        isCardSelected: false,
        
    }

    componentDidMount = () => {
        const answers = this.randomizeQuestion(this.props)
        this.setState({
            answers
        })}

    componentWillReceiveProps = (nextProps) => {
        const answers = this.randomizeQuestion(nextProps)
        this.setState({
            answers
        })
    }

    randomizeQuestion = (props) => {
        let generatedAnswers = [props.correct]
        let shuffledAnswers = []

        let answers = props.answers
        for (let i = 0; i < 2; i++) {
            const length = answers.length
            const randomAnswerIndex = Math.floor(Math.random() * length);
            const randomAnswer = answers[randomAnswerIndex]
            answers = answers.filter(answer => answer !== randomAnswer)
            generatedAnswers.push(randomAnswer)
        }

        for (let i = 0; i < 3; i++) {
            const length = generatedAnswers.length
            const randomAnswerIndex = Math.floor(Math.random() * length);
            const randomAnswer = generatedAnswers[randomAnswerIndex]
            generatedAnswers = generatedAnswers.filter(answer => answer !== randomAnswer)
            shuffledAnswers.push(randomAnswer)
        }

        return shuffledAnswers
    }

    chooseAnswer = (answer) => {
        this.setState({
            isCardSelected: true
        })
    }

    nextQuestion = () => {
        this.setState({
            isCardSelected: false,
            answers: []
        }, () => {
            this.props.nextQuestion()
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Wybierz znaki dla słowa {this.props.name}
                </h1>
                <div className="styles">
                    <div>
                        {this.state.answers.map(answer => {
                            return <Card
                                getPoint={this.props.getPoint}
                                correct={this.props.correct}
                                answer={answer}
                                chooseAnswer={this.chooseAnswer}
                                disabled={this.state.isCardSelected}
                            />
                        })}
                    </div> <button
                        class='btn btn-primary btnNext'
                        onClick={this.nextQuestion}
                        disabled={!this.state.isCardSelected}
                    >Dalej</button>
                    <ReturnButton btn='btn btn-primary' />
                </div>
            </div>
        );
    }
}

export default GameMechanic;

