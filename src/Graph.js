import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = ({xAxis, yAxis, text, label, bg, border})=> {
  
const state = {
  labels: xAxis,
  datasets: [{
    label: label,
    fill: true,
    lineTension: 1,
    backgroundColor: bg,
    borderColor: border,
    borderWidth: 2,
    data: yAxis
  }]
}
return (
  <div>
        <Line
    data={state}
    height="250px"
    width="310px"
    options={ {
      title: {
        display: true,
        text: text,
        fontSize: 20
      },
      elements: {},
    tooltips: {
      mode: "index",
      intersect: false,
    },
      legend: {
        display: true,
        position: 'right'
      },
      scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "YY-MM-DD",
            tooltipFormat: "ll",
          },
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
          },
            beginAtZero: true,
          }
      ]
    }
    }}
    />
  </div>
);

}
export default Graph