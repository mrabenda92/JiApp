import React, { Component } from "react";
import { withRouter } from 'react-router'

class ReturnButton extends Component {
    render() {
        return (
            <div style={{clear: 'both'}}>
                <button
                    type="button"
                    class={this.props.btn}
                    style={{ marginTop: '55px', marginLeft: '35px', width: '100px'}}
                    onClick={this.props.history.goBack}>
                    Wróć
                </button>
            </div>
        );
    }
}

export default withRouter(ReturnButton);