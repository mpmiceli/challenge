import React, {Component} from 'react';
import '../base.css';
import Cards from './cards.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Base extends Component{

  constructor(props) {
    super(props)

    console.log(this.props);

    this.state = {
        filtrarPor: this.props.filtrarPor
    }
  }

  render() {
    return(
      <Router>
        <div className="father">
          <div className="titulo">
            <h2>Technologies and Languages</h2>
          </div>
          <div>
          <Cards filtrarPor={this.state.filtrarPor} />
          </div>
        </div>
      </Router>
    )
  }
}

export default Base;
