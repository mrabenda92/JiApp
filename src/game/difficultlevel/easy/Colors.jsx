import React, { Component } from "react";
import GameMechanic from "../components/GameMechanic";

class Colors extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                qNumber: 0,
                score: 0
            }
    }

    nextQuestion = () => {
        this.setState ({
            qNumber: this.state.qNumber + 1
        })
    }

    getPoint = () => {
        this.setState ({
            score: this.state.score + 1
        })
    }

    renderQuestion = (states) => {
        let question = ''
        let answers = ["再见", "谢谢", "什么", "苹果", "图书馆", "这个", "我们", "走了", "汉字", "西瓜", "很多"]

        switch (states) {
            case 0:
                question = {
                    name: "biały",
                    correct: "白色"
                }
                break;

            case 1:
                question = {
                    name: "zielony",
                    correct: "绿色"
                }
                break;

            case 2:
                question = {
                    name: "czerwony",
                    correct: "红色"
                }
                break;


            case 3:
                question = {
                    name: "żółty",
                    correct: "黄色"
                }
                break;

            case 4:
                question = {
                    name: "niebieski",
                    correct: "蓝色"
                }
                break;

            case 5:
                question = {
                    name: "czarny",
                    correct: "黑色"
                }
                break;
            case 6:
                question = {
                    name: "brązowy",
                    correct: "棕色"
                }
                break;

            default: 
                return <p style={{textAlign: 'center', fontSize: '26px'}}>Twój wynik to {this.state.score}/7 poprawnych odpowiedzi</p>
        }

        return <GameMechanic {...this.props} {...question} answers={answers} nextQuestion={this.nextQuestion} getPoint={this.getPoint} />
    }



    render() {
        return this.renderQuestion(this.state.qNumber)
    }
}

export default Colors;

// 黑色 hēisè - czarny
// 白色 báisè - biały
// 绿色 lǜsè - zielony
// 黄色 huángsè - żółty
// 蓝色 lánsè - niebieski
// 红色 hóngsè - czerwony
// 紫色 zǐsè - fioletowy
// 灰色 huīsè - szary
// 棕色 zōngsè - brązowy
// 橙色 chéngsè - pomarańczowy


