import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import './App.css';

import Nav from './components/nav.js';
import Side from './components/side.js';
import Base from './components/base.js';
import Dashboard from './components/dashboard.js';

class App extends Component{
  render(){
    return(
        <Dashboard/>
    )
  }
}

export default App;
