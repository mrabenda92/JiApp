import React from "react";
import './lists.css';

class Description extends React.Component {
    render() {
        return (
                <div>
                    <h1 className="titleMargin">
                        Lista znaków:
                    </h1>
                    <div className="countryList">
                        <ul>
                            <h2>Kraje: </h2>
                            <li>英国 Anglia</li>
                            <li>日本 Japonia</li>
                            <li>加拿大 Kanada</li>
                            <li>德国 Niemcy</li>
                            <li>俄罗斯 Rosja</li>
                            <li>波兰 Polska</li>
                            <li>中国 Chiny</li>
                            <li>泰国 Tajlandia</li>
                            <li>法国 Francja</li>
                            <li>美国 USA</li>
                        </ul>

                        <ul>
                            <h2>Owoce: </h2>
                            <li>西瓜 arbuz</li>
                            <li>苹果 jabłko</li>
                            <li>荔枝 liczi</li>
                            <li>普通胡桃 orzech włoski</li>
                            <li>草莓属 poziomka</li>
                            <li>小紅莓 żurawina</li>
                            <li>芒果 mango</li>
                            <li>芒果 gruszka</li>
                            <li>大蕉 banan</li>
                        </ul>

                        <ul>
                            <h2>Kolory: </h2>
                            <li>黑色 hēisè - czarny</li>
                            <li>白色 báisè - biały</li>
                            <li>绿色 lǜsè - zielony</li>
                            <li>黄色 huángsè - żółty</li>
                            <li>蓝色 lánsè - niebieski</li>
                            <li>红色 hóngsè - czerwony</li>
                            <li>紫色 zǐsè - fioletowy</li>
                            <li>灰色 huīsè - szary</li>
                            <li>棕色 zōngsè - brązowy</li>
                            <li>橄榄色 gǎnlǎnsè - oliwkowy</li>
                            <li>金色 jīn​ sè - złoty</li>
                            <li>银色 yín​ sè - srebrny</li>
                            <li>橙色 chéngsè - pomarańczowy</li>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default Description;