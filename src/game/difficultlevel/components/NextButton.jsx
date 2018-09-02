import React, { Component } from "react";

class NextButton extends Component {
    render() {
        return (
            <div style={{clear: 'both'}}><button type="button" class={this.props.btn} style={{ marginTop: '55px', marginLeft: '35px', width: '100px'}}
            onClick={() => { this.props.history.push(this.props.goBack) }}>Wróć</button></div>
        );
    }
}

export default NextButton;