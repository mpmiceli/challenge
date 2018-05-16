import React, { Component } from 'react';
import '../cards.css';
import {textos} from '../textos.json';



class Cards extends Component{
  constructor(){
    super();
    this.state={
      textos
    }
  }
  render(){
    const dataCard = this.state.textos.map(function(data, i){
      return(
            <div className="card col-md-4" >
              <img className="card-img-top" src={data.cardImageUrl} alt="Card image cap"></img>
              <div className="card-body">
                <p>{data.cardDescription}</p>
              </div>
           </div>
    );
    })

    return(
      <div className="">
          <h2>LENGUAGES AND TECHNOLOGIES</h2>
          <div className="row item">
            {dataCard}
          </div>
          </div>


    );
  }
}

export default Cards;
