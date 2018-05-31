import React, { Component } from 'react';
import '../filtros.css';

class Filtros extends Component {

  constructor(props) {
    super(props);
    this.applyFilter = this.applyFilter.bind(this);
  }

  applyFilter(e) {
    this.props.filtrar(e);
  }


  render() {
    return(
      <div >
        <h5>Filter by</h5>
        <div className="input-group">
            <input type="radio" name="filter-by-group" id="filterByFrontend" value="Frontend" aria-label="..." onClick={this.applyFilter} />
            <h5>Frontend</h5>
        </div>
        <div className="input-group">
            <input type="radio" name="filter-by-group" id="filter-by-backend" value="Backend" aria-label="..." onClick={this.applyFilter} />
            <h5>Backend</h5>
        </div>
      </div>
    )
  }
}

export default Filtros;
