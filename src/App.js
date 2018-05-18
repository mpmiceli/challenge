import React, { Component } from 'react';
import './App.css';

import Nav from './components/nav.js';
import Side from './components/side.js';
import Base from './components/base.js';
import Dashboard from './components/dashboard.js';

class App extends Component{
  render(){
    return(
      <div>
          <Dashboard/>
      </div>
    )
  }
}

export default App;
