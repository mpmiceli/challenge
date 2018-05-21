import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './nav.js';
import Side from './side.js';
import Base from './base.js';
import Javascript from './javascript.js';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

class Dashboard extends Component{

  constructor(props){
    super(props);
    this.state = { showMenu: true };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = function(){
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return(
      <div className="todo">
        <div className="col-md-12">
          <Nav toggleMenu={this.toggleMenu} />
        </div>
        <div className="row">
          <div className="col-md-3">
            <Side showMenu={this.state.showMenu} />
          </div>
          <div className="col-md-9">
              <Switch>
              <Route exact path="/" component={Base}/>
              <Route  exact path="/post/:id" component={Javascript}/>
              </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
