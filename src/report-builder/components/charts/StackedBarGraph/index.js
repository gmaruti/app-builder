import React, { Component } from 'react'
import { BarChart } from 'react-d3-components'

class StackedBarGraph extends Component {



  render() {
    // const BarChart = ReactD3.BarChart;

    const data = [
        {
        label: 'Station A',
        values: [{x: 'Station A', y: 10}, {x: 'Station B', y: 4}, {x: 'Station C', y: 3}]
        },
        {
        label: 'Station B',
        values: [{x: 'Station A', y: 6}, {x: 'Station B', y: 8}, {x: 'Station C', y: 5}]
        },
        {
        label: 'Station C',
        values: [{x: 'Station A', y: 6}, {x: 'Station B', y: 8}, {x: 'Station C', y: 5}]
        }
    ];
    const width = this.props.width || '50%';
    const height = this.props.height || '450px';

    return (
      <div style={{height: `${height}`, width:`${width}`}}>
        <BarChart
            data={data}
            width={400}
            height={400}
            margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
      </div>
    )
  }
}

export default StackedBarGraph
