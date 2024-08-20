import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="about/" exact component={About} />
          <Route path="dashboard/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
