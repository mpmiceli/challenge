import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let filtrarPor = this.props.filtrarPor; // "Backend", "Frontend", null

    if (!filtrarPor || this.props.info.cardTechnology.includes(filtrarPor)) {
      return (
        <div className="cont col-md-4" >
          <div>
            <img className="card-img-top" src={this.props.info.cardImageUrl} alt="Card image cap"></img>
            <div className="card-body">
              <Link to={"/post/" + this.props.info.cardTitle}><p>{this.props.info.cardDescription}</p></Link>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Card;
