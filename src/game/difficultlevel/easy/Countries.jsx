import React from "react";
import GameMechanic from "../components/GameMechanic";

class Countries extends React.Component {
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
        let answers = ["再见", "谢谢", "什么", "苹果", "图书馆", "这个", "我们", "走了", "汉字", "西瓜", "很多"]

        switch (states) {
            case 0:
                question = {
                    name: "Anglia",
                    correct: "英国"
                }
                break;

            case 1:
                question = {
                    name: "Niemcy",
                    correct: "德国"
                }
                break;

            case 2:
                question = {
                    name: "Chiny",
                    correct: "中国"
                }
                break;


            case 3:
                question = {
                    name: "Francja",
                    correct: "法国"
                }
                break;

            case 4:
                question = {
                    name: "Stany Zjednoczone",
                    correct: "美国"
                }
                break;

            case 5:
                question = {
                    name: "Japonia",
                    correct: "日本"
                }
                break;
            case 6:
                question = {
                    name: "Polska",
                    correct: "波兰"
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

export default Countries;


// 英国 anglia
// 日本 japonia
// 加拿大 kanada
// 德国 niemcy
// 俄罗斯 rosja
// 波兰 polska
// 中国 chiny
// 泰国 tajlandia
// 法国 francja
// 美国 usa
