import React, {Component} from 'react';
import '../base.css';
import Card from './cards.js';

class Base extends Component{
  render(){
    return(
      <div className="father">
        <div>
          <h2>Technologies and Languages</h2>
        </div>
        <div>
          <Card/>
        </div>
      </div>
    )
  }
}

export default Base;
