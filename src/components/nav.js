import React, { Component } from 'react';
import '../nav.css';
import logo from '../avalith.png';

class Nav extends Component{
  render(){
    return(
      <div className="row">
      <header className="col-md-12">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      </div>
    )
  }
}

export default Nav;
