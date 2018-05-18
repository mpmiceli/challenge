import React, { Component } from 'react';
import '../cards.css';
import {textos} from '../textos.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Yava from './javascript.js';



class Cards extends Component{
  constructor(){
    super();
    this.state={
      textos
    }
  }
  render(){
    const dataCard = this.state.textos.map(
      function(data, i ){
        return(
          <div className="cont col-md-4" >
            <img className="card-img-top" src={data.cardImageUrl} alt="Card image cap"></img>
            <div className="card-body">
              <p>{data.cardDescription}</p>
            </div>
          </div>
        );
      }
    )

    return(
      <div className="caja">
        <div className="cards" >
          <div className="row">
            {dataCard}
          </div>
        </div>
      </div>
    );
  }
}

const linkToDetail = () => (
  <div>
    <Yava/>
  </div>
);

export default Cards;
