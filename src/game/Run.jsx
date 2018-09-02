import React, { Component } from "react";


class Run extends Component {
    render() {
        return (<div className="form-signin">
        <h1 style={{ textAlign: 'center', paddingLeft: '35px' }}>
            Wybierz poziom trudności:
    </h1>
        <div style={{textAlign: 'center' }}>
        <ul style={{listStyleType:'none'}}>
            <li><button type="button" class="btn btn-primary" style={{marginBottom: '15px'}} 
            onClick = {() => {this.props.history.push('/easy')}}>Łatwy 初级</button></li>
            <li><button type="button" class="btn btn-info" style={{marginBottom: '15px'}}
            onClick = {() => {this.props.history.push('/medium')}}>Średni 中级</button></li>
            <li><button type="button" class="btn btn-danger" style={{marginBottom: '15px'}}
            onClick = {() => {this.props.history.push('/hard')}}>Trudny 高级</button></li>
            </ul>
        </div>
    </div>
);
    }
}

export default Run

