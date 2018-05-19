import React, {Component} from 'react';
import '../base.css';
import Card from './cards.js';
import Javascript from './javascript.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Base extends Component{
  render(){
    return(
      <Router>
      <div className="father">
        <div className="titulo">
          <h2>Technologies and Languages</h2>
        </div>

        <div>
          <Link to="/"><Card/></Link>
        </div>
        <div>
          <Route exact path="/" component={Detail} />
        </div>

      </div>
      </Router>
    )
  }
}

const Detail = () => (
  <div>
    <Javascript/>
  </div>
);


export default Base;
