import React from 'react';
import logo from './logo.svg';
import NaviagtionBar from "./components/navbar";
import Photography from "./pages/photography";
import Home from "./pages/home"
import ContactMe from "./pages/contact";
import Project1 from "./pages/projectPages/project1";
import Project2 from "./pages/projectPages/project2";
import { Switch, Route } from "react-router-dom";
import './App.css';

function App()
{
  return (
    <div className="App">
      <NaviagtionBar />
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/photography" component={Photography} />
          <Route exact path="/contact" component={ContactMe} />
          <Route exact path="/project1" component={Project1} />
          <Route exact path="/project2" component={Project2} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
