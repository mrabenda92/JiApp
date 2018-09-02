import React from "react";
import GameMechanic from "../components/GameMechanic";

class Fruits extends React.Component {
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
        let answers = ["再见", "谢谢", "什么", "苹果", "图书馆", "这个", "我们", "走了", "汉字", "很多"]

        switch (states) {
            case 0:
                question = {
                    name: "jabłko",
                    correct: "苹果"
                }
                break;

            case 1:
                question = {
                    name: "mango",
                    correct: "芒果"
                }
                break;

            case 2:
                question = {
                    name: "banan",
                    correct: "大蕉"
                }
                break;


            case 3:
                question = {
                    name: "grejpfrut",
                    correct: "葡萄柚"
                }
                break;

            case 4:
                question = {
                    name: "poziomka",
                    correct: "草莓属"
                }
                break;

            case 5:
                question = {
                    name: "arbuz",
                    correct: "西瓜"
                }
                break;
            case 6:
                question = {
                    name: "gruszka",
                    correct: "梨"
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

export default Fruits;

// 西瓜 arbuz
// 苹果 jabłko
// 荔枝 liczi
// 普通胡桃 orzech włoski
// 草莓属 poziomka
// 小紅莓 żurawina
// 芒果 mango
// 芒果 gruszka
// 大蕉 banan

