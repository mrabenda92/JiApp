import React, { Component } from "react";

class Description extends Component {
    render() {
        return (
            <div>
                <div className="form-signin">
                    <h1 style={{ paddingLeft: '45px', color: this.props.levelColor, marginBottom: "10px"}}>
                        {this.props.name}
        </h1>
                    <p style={{ textAlign: 'center' }}>{this.props.descrp}</p>
                    <ul>
                        <li>{this.props.liOne}</li>
                        <li>{this.props.liTwo}</li>
                        <li>{this.props.liThree}</li>
                        <li>{this.props.liFour}</li>
                    </ul>
                    <button type="button" class="btn btn-primary" style={{ marginLeft: '75px' }}
                        onClick={() => { this.props.history.push(this.props.goTo) }}>Przejdź do zadań </button>
                </div>
            </div>
        );
    }
}

export default Description;