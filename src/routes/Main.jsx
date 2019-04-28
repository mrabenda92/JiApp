import React from "react";
// import { HashRouter, Switch, Link, NavLink, Route } from "react-router-dom";



class Main extends React.Component {

  render() {
    return (
      <div className="form-signin">
        <button
          className="btn btn-lg btn-warning btn-block"
          type="submit" onClick = {() => {this.props.history.push('/run')}}
        > 
          Start
        </button>
        <p className="mt-5 mb-3 text-muted">米洛玆&copy; Miłosz Rabenda</p>
      </div>
    );
  }
}

export default Main;