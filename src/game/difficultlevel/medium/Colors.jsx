import React, { Component } from "react";
import GameMechanic from "../components/GameMechanic";

class ColorsMedium extends React.Component {
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
        let answers = ["谢谢", "什么", "苹果", "图书馆", "这个了", "我们", "走了", "汉字了", "很多", "白色", "蓝色", "爱沙尼亚", "葡萄牙"]

        switch (states) {
            case 0:
                question = {
                    name: "jasny żółty",
                    correct: "亮黄色"
                }
                break;

            case 1:
                question = {
                    name: "ciemny zielony",
                    correct: "暗绿色"
                }
                break;

            case 2:
                question = {
                    name: "jasny czerwony",
                    correct: "亮红色"
                }
                break;


            case 3:
                question = {
                    name: "ciemny żółty",
                    correct: "暗黄色"
                }
                break;

            case 4:
                question = {
                    name: "jasny niebieski",
                    correct: "亮蓝色"
                }
                break;

            case 5:
                question = {
                    name: "ciemny pomarańczowy",
                    correct: "暗橙色"
                }
                break;
            case 6:
                question = {
                    name: "jasny brązowy",
                    correct: "亮棕色"
                }
                break;

            default: 
                return <p style={{textAlign: 'center', fontSize: '26px'}}>Twój wynik to {this.state.score}/7 poprawnych odpowiedzi</p>
        }

        return <GameMechanic {...this.props} {...question} answers={answers} nextQuestion={this.nextQuestion} getPoint={this.getPoint}/>
    }



    render() {
        return this.renderQuestion(this.state.qNumber)
    }
}

export default ColorsMedium;

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


