import React, { Component } from 'react';
import { Router, Link } from "react-router-dom";
import '../card.css';

class Card extends Component {

  constructor(props) {
    super(props);
  }

  applyFiltroPorBusqueda() {
    let filtrarPorBusqueda = this.props.filtrarPorBusqueda;
    if (!filtrarPorBusqueda || this.props.info.cardTitle.toLowerCase().includes(filtrarPorBusqueda.toLowerCase()) || this.props.info.cardPost.postDescription.toLowerCase().includes(filtrarPorBusqueda.toLowerCase())) {
      return true;
    }
    return false;
  }

  applyFiltroPorTecnologia() {
    let filtrarPor = this.props.filtrarPor; 
    if (!filtrarPor || this.props.info.cardTechnology.includes(filtrarPor)) {
      return true;
    }
    return false;
  }

  render() {

    if (this.applyFiltroPorBusqueda() && this.applyFiltroPorTecnologia()) {
      return (
        <div className="cont col-md-4 col-s-6" >
          <div>
            <Link to={"/"+ "post/" + this.props.info.cardId}>
              <img className="card-img-top" src={this.props.info.cardImageUrl} alt="Card image cap"></img>
              <div className="card-body">
                <p>{this.props.info.cardDescription}</p>
              </div>
            </Link>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Card;
