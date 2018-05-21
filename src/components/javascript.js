import React, { Component } from 'react';
import {textos} from '../textos.json';
import '../javascript.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";


class Javascript extends Component{
  constructor(){
    super();
    this.state={
      textos
    }
  }
  render(){
    const cardInfo = this.state.textos.map(function(data, i){
      return(
          <div className="row">
          <div class="contenedor col-md-9">
            <img src={'http://localhost:3000/' + data.cardPost.postImageUrl}/>
             <Link to="/"><button class="btn"  type="button">Volver</button></Link>
            <div class="title">{data.cardPost.postTitle}</div>
          </div>
          <div className="col-md-7">
              {data.cardPost.postDescription}
          </div>
          <div className="col-md-5">
          </div>
          </div>
      );
    })
      return(
        <div>
          <div className="caja">
            {cardInfo}
          </div>
        </div>
      );
    }
  }

export default Javascript;
