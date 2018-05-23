import React, { Component } from 'react';
import '../filtros.css';

class Filtros extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filtrarPor: null
    }
    this.aplicarFiltro = this.aplicarFiltro.bind(this);
  }

  aplicarFiltro = function(value) {
    this.state.filtrarPor = value;
  }

  render() {
    return(
      <div className="bar">
        <div className="input">
          <input type="text" className="form-control" placeholder="Search in cards" ></input>
        </div>
        <h4>Filter by</h4>
        <div className="input-group">
            <input type="radio" name="filter-by-group" id="filterByFrontend" value="Frontend" aria-label="..." onClick={event => this.aplicarFiltro(event.target.value)} />
            <h5>Frontend</h5>
        </div>
        <div className="input-group">
            <input type="radio" name="filter-by-group" id="filter-by-backend" value="Backend" aria-label="..." onClick={event => this.aplicarFiltro(event.target.value)} />
            <h5>Backend</h5>
        </div>
      </div>
    )
  }
}

export default Filtros;
