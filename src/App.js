import React, { Component } from 'react';
import './App.css';

import Nav from './components/nav.js';
import Side from './components/side.js';
import Base from './components/base.js';
import Dashboard from './components/dashboard.js';
import Javascript from './components/javascript.js';

import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";


class App extends Component{
  render(){
    return(
      <div>
        <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route  exact path="/post/:id" component={Dashboard}/>
        </Switch>
        </div>
    )
  }
}

export default App;
