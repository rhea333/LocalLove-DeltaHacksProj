
import logo from "./logo.svg";
import "./App.css";
import { GoogleMaps } from "google-maps-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Map from "./Map.js";
import { useState } from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Map">
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
