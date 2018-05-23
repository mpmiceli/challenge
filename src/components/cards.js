import React, { Component } from 'react';
import '../cards.css';
import {textos} from '../textos.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from './card.js';

class Cards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filtrarPor: this.props.filtrarPor // "Backend", "Frontend", null
    }
  }

  render(){
    let filtrarPor = this.state.filtrarPor;
    const cards = textos.map(function(data, i ){
      return (
        <Card info={data} filtrarPor={filtrarPor} />
      );
    })

    return(
      <div className="caja">
        <div className="cards">
          <div className="row">
            {cards}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
