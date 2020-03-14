import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Map from "./Map.js"
import Check from "./Check.js"
import Home from "./Home.js"

export default function App() {
  return (
    <Router>
      <div>
        <nav className="Nav-header">
            <div className="Nav-item">
              <Link to="/">Home</Link>
            </div>
            <div className="Nav-item">
              <Link to="/Check">Check Symptoms</Link>
            </div>
            <div className="Nav-item">
              <Link to="/Map">Map</Link>
            </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/check">
            <Check />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}