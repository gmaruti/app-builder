import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts';
import axios from 'axios'

class LineGraph extends Component {

  clickEvent = (e) => {
    console.log('clickEvent');
    console.log(e);
  }

  tooltip (tooltip)  {

    return `${this.x}, ${this.y}`;// tooltip.defaultFormatter.call(this, tooltip);
  }
  prepareData = reportData => {
      const categories = [];
      const data = []

      reportData.forEach((item) => {
        categories.push(item.date);
        data.push(item.value);
      });

      const config = {
        title: { text: `${this.props.title || ''} Trend` },
        chart: {
          width: this.props.width,
          events: {
            click: this.props.clickEvent || this.clickEvent
          }
        },
        xAxis: {
          title : {
            text: 'Months'
          },
          categories
        },
        series : [
          {
            name: this.props.title,
            data
          }
        ],
        tooltip: {
          useHTML: true,
          formatter: this.props.tooltip || this.tooltip
        }
      }

      return config;
  }

  render() {

    return (
        <ReactHighcharts config={this.prepareData(this.props.data)} />
    )
  }
}

export default LineGraph
