import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import Base from './base.js';
import Nav from './nav.js';
import PostDetail from './postDetail.js';
import Side from './side.js';

class Dashboard extends Component{

  constructor(props){
    super(props);
    this.state = {
      showMenu: true,
      showFiltros: true,
      filtrarPor: null,
      filtrarPorBusqueda: null
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.applyFilterSearch = this.applyFilterSearch.bind(this);
  }

  toggleMenu = function(){
    this.setState({ showMenu: !this.state.showMenu });
  }

  toggleFiltros = function(){
    this.setState({ showFiltros: !this.state.showFiltros });
  }

  applyFilter(e) {
    this.setState({ filtrarPor: e.target.value });
  }

  applyFilterSearch(e) {
    this.setState({ filtrarPorBusqueda: e.target.value});
  }

  render() {
    let filtrarPor = this.state.filtrarPor;
    let filtrarPorBusqueda = this.state.filtrarPorBusqueda;

    let result = (
      <div className="todo">
        <div className="navBar">
          <Nav toggleMenu={this.toggleMenu} />
        </div>
        <div className="row">
          <div className="col-md-3">
            <Side showMenu={this.state.showMenu} showFiltros={this.state.showFiltros} filtrarXbusqueda={this.applyFilterSearch} filtrar={this.applyFilter} />
          </div>
          <div className={this.state.showMenu ? "col-md-9" : "col-md-12"}>
              <Switch>
                <Route exact path="/" component={() => <Base filtrarPor={filtrarPor} filtrarPorBusqueda={filtrarPorBusqueda} />} />
                <Route path="/post/:id" component={PostDetail}/>
              </Switch>
          </div>
        </div>
      </div>
    )

    return result;
  }
}

export default Dashboard;
