import React, { Component } from "react";
import Description from "./components/Description";
import ReturnButton from "./components/ReturnButton";

class Medium extends Component {
    render() {
        return (
            <div>
                <Description name='Owoce 水果' descrp='Istnieje także dużo znaków dla owoców nie posiadających w sobie elementu trawy, takie jak:'
                    liOne='西瓜 arbuz (xīguā)' liTwo='梨 gruszka (lí)' liThree='椰 kokos (yē)' liFour='李属 śliwka (li shǔ)'
                    levelColor='blue' goTo='/fruits-med' {...this.props} />
                <Description name='Państwa 国家'
                    descrp='Mamy także kraje, w których nie występuje znak "GUÓ"(国), etymologia tych znaków wynika z fonetycznego zapożyczenia tych słów z j.angielskiego'
                    liOne='波兰 Polska (bō lán)' liTwo='捷克 Czechy (jié kè)' liThree='卢森堡 Luxemburg (lū sēn bǎo)' liFour='阿尔巴尼亚 Albania (ā ěr bā ní yà)'
                    levelColor='blue' goTo='/countries-med' {...this.props} />
                <Description name='Kolory 颜色'
                    descrp='Intensywność kolorów możemy określać dodając odpowiednio àn(暗) dla ciemniejszego koloru i liàng(亮) dla jaśniejszego.'
                    liOne='暗红色 ciemny czerwony (ànhóngsè)' liTwo='亮亮蓝色 jasny niebieski (liànglánsè)' liThree='亮绿色 jasny zielony (liànglǜsè)' liFour='暗黄色 ciemny żółty (ànhuángsè)'
                    levelColor='blue' goTo='/colors-med' {...this.props} />
                <ReturnButton btn='btn btn-primary' />
            </div>
        );
    }
}

export default Medium;