import React from "react";
import GameMechanic from "../components/GameMechanic";

class CountriesHard extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                qNumber: 0,
                score: 0
            }
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if(this.state.score == nextState.score) {
            return true
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
        let answers = ["苹果", "图书馆", "这个", "我们", "走了", "汉字", "西瓜", "很多", "德国", "中国", "法国", "美国"]

        switch (states) {
            case 0:
                question = {
                    name: "Anglia",
                    correct: "英国"
                }
                break;

            case 1:
                question = {
                    name: "Szwajcaria",
                    correct: "瑞士"
                }
                break;

            case 2:
                question = {
                    name: "Islandia",
                    correct: "冰岛"
                }
                break;


            case 3:
                question = {
                    name: "Grecja",
                    correct: "希腊"
                }
                break;

            case 4:
                question = {
                    name: "Estonia",
                    correct: "爱沙尼亚"
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
                    name: "Portugalia",
                    correct: "葡萄牙"
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

export default CountriesHard;


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
