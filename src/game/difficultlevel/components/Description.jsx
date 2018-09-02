import React, { Component } from "react";

class Description extends Component {
    render() {
        return (
            <div>
                <div className="form-signin" style={{ marginLeft: '150px', float: 'left' }}>
                    <h1 style={{ paddingLeft: '45px', color: this.props.levelColor }}>
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