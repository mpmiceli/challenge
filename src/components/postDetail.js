import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import React, { Component } from 'react';
import {textos} from '../textos.json';

import '../postDetails.css';
import TechChart from './techChart.js';

class PostDetail extends Component{

  constructor(props){
    super(props);
  }



  render() {
    let id = this.props.match.params.id;
    for (var i = 0; i < textos.length; i++) {
      var data = textos[i];
      if (id == data.cardId) {
        return (
          <div className="caja">
            <div className="row">
              <div class="contenedor">
                <img src={'http://localhost:3000/' + data.cardPost.postImageUrl}/>
                <Link to="/"><button class="btn"  type="button">Go back</button></Link>
                <div class="title">{data.cardPost.postTitle}</div>
              </div>
              <div className="col-md-7">
                {data.cardPost.postDescription}
              </div>
              <div className="col-md-5">
              <TechChart data={data.cardGraph.data} />
              </div>
            </div>
          </div>
        );
      }
    }
    return null
  }
}

export default PostDetail;
