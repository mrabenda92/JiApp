import React from "react";
import GameMechanic from "../components/GameMechanic";

class FruitsHard extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                qNumber: 0,
                score: 0
            }
    }
    nextQuestion = () => {
        this.setState({
            qNumber: this.state.qNumber + 1
        })
    }

    getPoint = () => {
        this.setState({
            score: this.state.score + 1
        })
    }

    renderQuestion = (states) => {
        let question = ''
        let answers = ["苹果", "芒果", "葡萄柚", "苹果", "图书馆", "草莓属", "梨", "走了", "汉字", "西瓜", "很多"]

        switch (states) {
            case 0:
                question = {
                    name: "kiwi",
                    correct: "獼猴桃屬"
                }
                break;

            case 1:
                question = {
                    name: "kumkwat",
                    correct: "金橘"
                }
                break;

            case 2:
                question = {
                    name: "karambola",
                    correct: "楊桃"
                }
                break;


            case 3:
                question = {
                    name: "rambutan",
                    correct: "红毛丹"
                }
                break;

            case 4:
                question = {
                    name: "durian",
                    correct: "榴梿"
                }
                break;

            case 5:
                question = {
                    name: "jeżyna",
                    correct: "悬钩子属"
                }
                break;
            case 6:
                question = {
                    name: "kaki",
                    correct: "柿"
                }
                break;

            default:
                return <p style={{ textAlign: 'center', fontSize: '26px' }}>Twój wynik to {this.state.score}/7 poprawnych odpowiedzi</p>
        }

        return <GameMechanic {...this.props} {...question} answers={answers} nextQuestion={this.nextQuestion} getPoint={this.getPoint} />
    }



    render() {
        return this.renderQuestion(this.state.qNumber)
    }
}

export default FruitsHard;

// 西瓜 arbuz
// 苹果 jabłko
// 荔枝 liczi
// 普通胡桃 orzech włoski
// 草莓属 poziomka
// 小紅莓 żurawina
// 芒果 mango
// 芒果 gruszka
// 大蕉 banan

