import React, { Component } from "react";
import Description from "./components/Description";
import ReturnButton from "./components/ReturnButton";

class Easy extends Component {
    render() {
        return (
            <div>
                <Description name='Owoce 水果' descrp='Większość owoców w języku chińskim posiada w swoim znaku element oznaczający trawę, przykłady:'
                    liOne='菠萝 ananas (bō luó)' liTwo='苹果 jabłko (píng guǒ)' liThree='荔枝 liczi (lì zhī)' liFour='芒果 mango (máng guǒ)'
                    levelColor='blue' goTo='/fruits' {...this.props} />
                <Description name='Państwa 国家'
                    descrp='W przypadku państw, powtarzającym się elementem jest znak "GUÓ"(国), przykłady krajów:'
                    liOne='法国 Francja (fǎ guó)' liTwo='德国 Niemcy (dé guó)' liThree='英国 Anglia (yīng guó)' liFour='美国 Stany Zjednoczone (mĕi guó)'
                    levelColor='blue' goTo='/countries' {...this.props} />
                <Description name='Kolory 颜色'
                    descrp='Każdy kolor kończy się znakiem "sè" 色, dotyczy to wszystkich podstawowych kolorów i nie mamy od tego wyjątków'
                    liOne='红色 Czerwony (hóng sè)' liTwo='蓝色 Niebieski (lán sè)' liThree='绿色 Zielony (lǜ sè)' liFour='黄色 Żółty (huáng sè)'
                    levelColor='blue' goTo='/colors' {...this.props} />
                <ReturnButton btn='btn btn-primary' />
            </div>
        );
    }
}

export default Easy;