import React from "react";
import './description.css';


class Description extends React.Component {

    render() {
        return (
            <div className="form-signin">
                <h1 className="descrp" style={{ textAlign: 'center', marginBottom: '80px' }}>
                    Proste zwroty chińskie:
                </h1>
                <ul>
                    <li>是的 [shì de] - tak</li>
                    <li>不 [bù] - nie</li>
                    <li>谢谢 [Xièxie] - Dziękuję.</li>
                    <li>不客气 [Bù kèqì] / 不谢 [Bù xiè.] - Proszę bardzo / Nie ma za co.</li>
                    <li>请 [Gǐng] - Proszę (prosząc o coś).</li>
                    <li>给你 [Gěi nǐ] (dosł. Daję ci.) - Proszę (podając coś).</li>
                    <li>你好 [Nǐ hǎo] - Dzień dobry (nieformalnie do jednej osoby)</li>
                    <li>您好 [Nín hǎo] - Dzień dobry (formalnie do jednej osoby)</li>
                    <li>你们好 [Nǐmen hǎo] - Dzień dobry (nieformalnie do 2 lub więcej osób)</li>
                    <li>诸位好 [Zhūwèi hǎo] - Dzień dobry (formalnie do 2 lub więcej osób)</li>
                    <li>早上好 [Zǎoshang hǎo] - Dzień dobry (rano).</li>
                    <li>再见 [Zàijiàn] - Do widzenia!</li>
                    <li>晚上好 [Wǎnshang hǎo] - Dobry wieczór!</li>
                    <li>晚安 [Wǎn’ān] - Dobranoc!</li>
                    <li>你好 [Nǐ hǎo] - Cześć!</li>
                    <li>拜拜 [Bàibai] - Cześć! Pa!</li>
                </ul>
            </div>
        );
    }
}

export default Description;