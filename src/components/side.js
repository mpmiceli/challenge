import React, { Component } from 'react';
import '../side.css';
import {info} from '../textos.json';
import Filtros from './filtros.js';

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
                <Filtros/>
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
