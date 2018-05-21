import React, { Component } from 'react';
import '../side.css';
import {info} from '../textos.json';
import Filtros from './filtros.js';

class Side extends Component{
  constructor(props){
    super(props);
    this.state = { info }
    this.state.techGroup;
  }
  render(){
    const datosPerfil = this.state.info.map(
      function(dato, i) {
        return (
          <div className="box">
            <h3>{dato.nombre}</h3>
            <h4>{dato.dni}</h4>
            <h4>{dato.edad}</h4>
          </div>
        )
      }
    )
    return (
      this.props.showMenu &&
      <div className="contenedor">
        <aside className="row">
          {datosPerfil}
          <div className="filtro">
          <Filtros techGroup={this.state.techGroup} />
          </div>
        </aside>
      </div>
    )
  }
}

export default Side;
