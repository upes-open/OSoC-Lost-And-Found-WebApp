import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./Nav";
import HelpUsFind from './HelpUsFind';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Route path="/help-us-find" component={HelpUsFind} />
    </div>
  </Router>
);

export default App;
