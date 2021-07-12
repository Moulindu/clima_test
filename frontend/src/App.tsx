import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

import FooterComponent from './component/HeaderComponent';
import ListTechnicianComponent from './component/ListTechnicianComponent';
import HeaderComponent from './component/HeaderComponent';


function App() {
  return (
    // <div className="App">
      <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListTechnicianComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    // </div>
  );
}

export default App;
