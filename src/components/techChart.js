import React, { Component } from 'react';
import {textos} from '../textos.json';
import {Doughnut} from 'react-chartjs-2';

class TechChart extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    var doughnutData = {
      datasets: [
        {
          label: '# of Votes',
          "data": this.props.data,
          backgroundColor: [
            "#ff9914",
            "#f21b3f",
            "#08bdbd"
          ]
        }
      ]
    };

    let options = {responsive: true, maintainAspectRatio: true}
    return (
        <Doughnut data={doughnutData} options={options} />
    )
  }
}

export default TechChart;
