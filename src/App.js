import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  LandingPage from './pages/landing/landing.component';
import  ContactPage from './pages/contact/contact.component';
import Header from './components/header/header.component';

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header}></Route>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
