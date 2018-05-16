import React, { Component } from 'react';
import './App.css';

import Nav from './components/nav.js';
import Side from './components/side.js';
import Card from './components/cards.js';

class App extends Component{
  render(){
    return(
          <div>
              <Nav/>
              <div className="row">
              <div className="col-md-3">
                <Side/>
              </div>
            <div className="col-md-9">
              <Card/>
            </div>
          </div>
          </div>
    )
  }
}

export default App;
