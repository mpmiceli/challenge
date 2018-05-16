import React, { Component } from 'react';
import '../side.css';
import {info} from '../textos.json';



class Side extends Component{
  constructor(){
    super();
    this.state={
      info
    }
  }
  render(){
    const datosPerfil = this.state.info.map(function(dato, i){
      return(
        <aside className="contenedor">
            <div className="box">
              <h3>{dato.nombre}</h3>
              <h4>{dato.dni}</h4>
              <h4>{dato.edad}</h4>
            </div>
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
        </aside>
      );
    })
    return(
      <div className="contenedor">
        {datosPerfil}
      </div>


    );
  }
}

export default Side;
