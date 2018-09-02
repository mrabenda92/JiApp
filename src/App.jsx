import React, { Component } from "react";
import { HashRouter, Switch, Link, NavLink, Route } from "react-router-dom";
import "./App.css";
import Main from "./routes/Main";
import Description from "./routes/Description";
import Lists from "./routes/Lists";
import Other from "./routes/Other";
import RunGame from "./game/Run";
import EasyLevel from "./game/difficultlevel/Easy";
import Fruits from "./game/difficultlevel/easy/Fruits";
import FruitsMedium from "./game/difficultlevel/medium/Fruits";
import FruitsHard from "./game/difficultlevel/hard/Fruits";
import Countries from "./game/difficultlevel/easy/Countries";
import CountriesMedium from "./game/difficultlevel/medium/Countries";
import CountriesHard from "./game/difficultlevel/hard/Countries";
import Colors from "./game/difficultlevel/easy/Colors";
import ColorsMedium from "./game/difficultlevel/medium/Colors";
import ColorsHard from "./game/difficultlevel/hard/Colors";
import MediumLevel from "./game/difficultlevel/Medium";
import HardLevel from "./game/difficultlevel/Hard";

import Navbar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/description" component={Description} />
            <Route path="/lists" component={Lists} />
            <Route path="/other" component={Other} />
            <Route path="/run" component={RunGame} />
            <Route path="/easy" component={EasyLevel} />
            <Route path="/fruits" component={Fruits} />
            <Route path="/fruits-med" component={FruitsMedium} />
            <Route path="/fruits-hard" component={FruitsHard} />
            <Route path="/countries" component={Countries} />
            <Route path="/countries-med" component={CountriesMedium} />
            <Route path="/countries-hard" component={CountriesHard} />
            <Route path="/colors" component={Colors} />
            <Route path="/colors-med" component={ColorsMedium} />
            <Route path="/colors-hard" component={ColorsHard} />
            <Route path="/medium" component={MediumLevel} />
            <Route path="/hard" component={HardLevel} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;