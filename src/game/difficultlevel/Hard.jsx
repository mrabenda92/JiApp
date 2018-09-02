import React, { Component } from "react";
import Description from "./components/Description";
import ReturnButton from "./components/ReturnButton";

class Hard extends Component {
  render() {
    return (
        <div>
            <Description name='Owoce 水果' descrp='Problemy z nauką chińskich znaków dla owoców może być nauka owoców mniej popularnych w Polsce, takich jak:'
                liOne='楊桃 karambola (yángtáo)' liTwo='金橘 kumkwat (jīn jú)' liThree='红毛丹 rambutan (hóng máo dān)' liFour='榴梿 durian (liú lián)'
                levelColor='blue' goTo='/fruits-hard' {...this.props} />
            <Description name='Państwa 国家'
                descrp='Mamy także Państwa nie posiadające w sobie znaku "GUÓ"(国) oraz których fonetyka nie jest w żaden sposób podobna do ich anglojęzycznych odpowiedników: '
                liOne='冰岛 Islandia (bīng dǎo)' liTwo='瑞士 Szwajcaria (ruì shì)' liThree='希腊 Grecja (xī là)' liFour='爱沙尼亚 Estonia (ài shā ní yà)'
                levelColor='blue' goTo='/countries-hard' {...this.props} />
            <Description name='Kolory 颜色'
                descrp='Inne przykłady znaków dla kolorów w języku chińskim są między innymi:'
                liOne='银色 Srebrny (yín​ sè)' liTwo='金色 Złoty (jīn​ sè)' liThree='橄榄色 oliwkowy (gǎn lǎn sè)' liFour='粉红色 różowy (fěn​ hóng​ sè)'
                levelColor='blue' goTo='/colors-hard' {...this.props} />
            <ReturnButton btn='btn btn-primary' />
        </div>
    );
}
}

export default Hard;