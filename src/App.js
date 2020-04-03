import React, { Component } from "react";
import Astronomy from "./components/Astronomy";
import Space from "./components/Space";
import AstronomyCard from "./components/AstronomyCard";
import LastSpace from "./components/LastSpace";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/space">Space</Link>
          </div>
          <div>
            <Link to="/astronomy">Astronomy</Link>
          </div>
          <div>
            <Link to="/lastSpace">Last Space</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/space">
            <Space />
          </Route>
          <Route path="/lastSpace">
            <LastSpace />
          </Route>
          <Route path="/astronomy">
            <Astronomy />
          </Route>
          <Route path="/">
            <AstronomyCard />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
