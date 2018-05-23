import React, { Component } from 'react';
import {textos} from '../textos.json';
import '../javascript.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

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
              <div class="contenedor col-md-9">
                <img src={'http://localhost:3000/' + data.cardPost.postImageUrl}/>
                <Link to="/"><button class="btn"  type="button">Volver</button></Link>
                <div class="title">{data.cardPost.postTitle}</div>
              </div>
              <div className="col-md-7">
                {data.cardPost.postDescription}
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        );
      }
    }
    return null
  }
}

export default PostDetail;
