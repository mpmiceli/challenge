import React, { Component } from 'react';

import Nav from './nav.js';
import Side from './side.js';
import Base from './base.js';

class Dashboard extends Component{
  render() {
    return(
      <div className="todo">
        <div className="col-md-12">
          <Nav/>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Side/>
          </div>
          <div className="col-md-9">
            <Base/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
