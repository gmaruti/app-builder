import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts';

class BarGraph extends Component {

  prepareData = reportData => {
      const categories = [];
      const data = []

      reportData.forEach((item) => {
        categories.push(item.date);
        data.push(item.value);
      });

      const config = {
        title: { text: 'Revenue Trend' },
        chart: {
          width: `${this.props.width || 100}`,
        },
        xAxis: {
          title : {
            text: 'Months'
          },
          categories
        },
        series : [
          {
            name: 'Revenue',
            data
          }
        ]
      }

      return config;
  }

  render() {
    const config = {
          chart: {
              type: 'bar',
              width: `${this.props.width || 1192}`,
              height: 400
          },
          title: {
              text: 'Program Trend by Year'
          },
          subtitle: {
              text: ''
          },
          xAxis: {
              categories: ['The Voice', 'The Brave', 'This is US', 'Blacklist', 'Superstore'],
              title: {
                  text: null
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Viewers',
                  align: 'high'
              },
              labels: {
                  overflow: 'justify'
              }
          },
          tooltip: {
              valueSuffix: ' millions'
          },
          plotOptions: {
              bar: {
                  dataLabels: {
                      enabled: true
                  }
              }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'top',
              x: -40,
              y: 80,
              floating: true,
              borderWidth: 1,
              shadow: true
          },
          credits: {
              enabled: false
          },
          series: [{
              name: 'Year 2015',
              data: [107, 31, 635, 203, 2]
          }, {
              name: 'Year 2016',
              data: [133, 156, 947, 408, 6]
          }, {
              name: 'Year 2017',
              data: [814, 841, 1714, 727, 31]
          }, {
              name: 'Year 2018',
              data: [1216, 1001, 1436, 738, 40]
          }]
    };
    return (
        <ReactHighcharts config={config} />
    )
  }
}

export default BarGraph
