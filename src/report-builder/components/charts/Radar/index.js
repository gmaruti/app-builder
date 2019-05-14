import React, {Component} from 'react';

import {RadarChart} from 'react-vis';



const DATA = [
  {
    'The Voice': 17,
    'This Is US': 10,
    'The Blacklist': 18,
    Superstore: 19,
    'The Brave': 18
  },
  {
    'The Voice': 13,
    'This Is US': 18,
    'The Blacklist': 16,
    Superstore: 14,
    'The Brave': 20
  },
  {
    'The Voice': 23,
    'This Is US': 9,
    'The Blacklist': 11,
    Superstore: 8,
    'The Brave': 15
  }
];

const DOMAIN = [
  {name: 'The Voice', domain: [0, 25], tickFormat: t => t},
  {name: 'This Is US', domain: [0, 25]},
  {name: 'The Blacklist', domain: [0, 25]},
  {name: 'Superstore', domain: [0, 25]},
  {name: 'The Brave', domain: [0, 25]}
];


export default class Radar extends Component {
  state = {
    data: DATA
  };

  render() {
    const {data} = this.state;

    return (
      <div style={{marginLeft: '50px'}}>
        <div className="centered-and-flexed">
          <RadarChart
            animation
            data={data}
            domains={DOMAIN}
            style={{
              polygons: {
                fillOpacity: 0,
                strokeWidth: 3
              },
              axes: {
                text: {
                  opacity: 1
                }
              },
              labels: {
                textAnchor: 'middle'
              }
            }}
            margin={{
              left: 70,
              top: 30,
              bottom: 40,
              right: 70
            }}
            tickFormat={t => ''}
            width={470}
            height={410}
          >

          </RadarChart>

        </div>
      </div>
    );
  }
}
