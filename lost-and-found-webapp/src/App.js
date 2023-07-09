import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import LostItem from './components/LostItem';
import FoundItem from './components/FoundItem';
import Contact from './components/Contact';

import Navbarmenu from './components/menu/Navbarmenu';
import ItemGallery from './components/ItemsGallery';
import HelpUsFind from './components/HelpUsFind';
import FAQ from './components/FAQ';
import Feedback from './components/feedback/Feedback';

function App() {
  return (
    <div>
      <Router basename="/">
        {/* Add Menu Component */}
        <Navbarmenu />
        
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/LostItem" component={LostItem} />
          <Route path="/FoundItem" component={FoundItem} />
          <Route path="/Contact" component={Contact} />
          <Route path="/ItemsGallery" component={ItemGallery} />
          <Route path="/HelpUsFind" component={HelpUsFind} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/Feedback" component={Feedback} />
          <Route path="/feedback.html" render={() => <iframe src="/feedback.html" title="Feedback" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
