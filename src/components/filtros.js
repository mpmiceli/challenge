import React, { Component } from 'react';
import '../filtros.css';

class Filtros extends Component{
  render(){
    return(
      <div className="bar">
          <div className="input">
            <input type="text" className="form-control" placeholder="Search in cards" ></input>
          </div>

          <h4>Filter by</h4>
          <div className="input-group">
              <input type="radio" id="1" aria-label="..."></input>
              <h5>Frontend</h5>
          </div>
          <div className="input-group">
              <input type="radio" id="2" aria-label="..."></input>
              <h5>Backend</h5>
          </div>
        </div>
    )
  }
}

export default Filtros;
