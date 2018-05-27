import React, { Component } from 'react';
import '../side.css';
import {info} from '../textos.json';
import Filtros from './filtros.js';
import SearchBar from './searchBar.js';

class Side extends Component{
  constructor(props){
    super(props);
    this.state = {
      info
    };
    this.applyFilter = this.applyFilter.bind(this);
    this.applyFilterSearch = this.applyFilterSearch.bind(this);
  }

  applyFilter(e) {
      this.props.filtrar(e);
  }

  applyFilterSearch(e) {
      this.props.filtrarXbusqueda(e);
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
          <SearchBar filtrarXbusqueda={this.applyFilterSearch} />
          <Filtros filtrar={this.applyFilter}  />
          </div>
        </aside>
      </div>
    )
  }
}

export default Side;
