import React, {Component} from 'react';
import '../base.css';
import Cards from './cards.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Base extends Component{

  constructor(props) {
    super(props)
    this.state = {
        filtrarPor: this.props.filtrarPor,
        filtrarPorBusqueda: this.props.filtrarPorBusqueda
    }
  }

  render() {
    return(
      <Router>
        <div className="father">
          <div className="titulo">
            <h2>LANGUAGES & TECHNOLOGIES</h2>
          </div>
          <div>
          <Cards filtrarPor={this.state.filtrarPor} filtrarPorBusqueda={this.state.filtrarPorBusqueda} />
          </div>
        </div>
      </Router>
    )
  }
}

export default Base;
