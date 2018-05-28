import React, { Component } from 'react';
import '../searchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filtrarPor: null
    }
    this.applyFilterSearch = this.applyFilterSearch.bind(this)
  }

  applyFilterSearch(e) {
    this.props.filtrarXbusqueda(e)
  }

  render() {
    return(
        <div className="input">
          <input type="text" className="form" placeholder="Search in cards" onChange={this.applyFilterSearch} />
        </div>
    )
  }
}

export default SearchBar;
