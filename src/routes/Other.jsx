import React, { Component } from "react";
import "./Other.css";

class Other extends Component {

  render() {
    return (
      <div className="form-signin">
        <h1 style={{ textAlign: 'center'}}>
          <div style={{marginBottom: '10px'}}><a href="https://github.com/mrabenda92" target="_blank">Link do Githuba</a></div>
          <div style={{marginBottom: '10px'}}><a href="https://mrabenda92.github.io/portfolio/" target="_blank">Link do Portfolio</a></div>
          <div style={{marginBottom: '10px'}}><a href="https://www.linkedin.com/in/mi%C5%82osz-rabenda-559152105/" target="_blank">Link do LinkedIn</a></div>
        </h1>
      </div>
    );
  }
}

export default Other;