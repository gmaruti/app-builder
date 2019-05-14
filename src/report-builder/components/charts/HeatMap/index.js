import React, {Component} from 'react';

import {Treemap} from 'react-vis';



const INTERPOLATE_DATA = {
  title: 'interpolate',
  children: [
    {title: 'Day Time', color: '#12939A', size: 1983, style: {background: '#584303'}},
    {title: 'Ealrly News', color: '#12939A', size: 2047, style: {background: '#BCA96E'}},
    {title: 'Prime News', color: '#12939A', size: 1375, style: {background: '#E5CB7B'}},
    {title: 'Prime', color: '#12939A', size: 8746, style: {background: '#CD5C5C'}},
    {title: 'Late News', color: '#12939A', size: 2202, style: {background: '#F5CB49'}},
    {title: 'Late Fringe', color: '#12939A', size: 1382, style: {background: '#A9861C'}},
    {title: 'Sports', color: '#12939A', size: 1629, style: {background: '#ECD99F'}},
    {title: 'Weather', color: '#12939A', size: 1675, style: {background: '#D6C07D'}},
    {title: 'Politics', color: '#12939A', size: 2042, style: {background: '#8A7A48'}}
  ]
};

const TREEMAP_PROPS = {
  height: 370,
  width: 600,
  className: 'little-nested-tree-example',
  animation: true,
  data: {
    name: 'animate',
    color: "#12939A",
    children: [
      {title: 'The Voice', color: '#12939A', size: 17010, style: {background: '#CD5C5C'}},
      {title: 'The Brave', color: '#12939A', size: 5842, style: {background: '#F08080'}},
      INTERPOLATE_DATA,
      {title: 'This is US', color: '#12939A', size: 1041, style: {background: '#FA8072'}},
      {title: 'Law & Order True Crime', color: '#12939A', size: 5176, style: {background: '#E9967A'}},
      {title: 'Chicago Med', color: '#12939A', size: 449, style: {background: '#FFA07A'}},
      {title: 'The Blacklist', color: '#12939A', size: 5593, style: {background: '#EEB80B'}},
      {title: 'Law & Order SVU', color: '#12939A', size: 5534, style: {background: '#CEA216'}},
      {title: 'Chicago PD', color: '#12939A', size: 9201, style: {background: '#9B7C1A'}},
      {title: 'Superstore', color: '#12939A', size: 19975, style: {background: '#866D1E'}},
      {title: 'The Goodplace', color: '#12939A', size: 1116, style: {background: '#5A4504'}}
    ]
  }
};

export default class HeatMap extends Component {

  render() {


    return (

        <div style={{margin:'5px'}}>
          <div style={{marginLeft:'30%'}}><b>Program Distribution</b></div><br/>
          <Treemap
              {...TREEMAP_PROPS}
            />
        </div>

    );
  }
}
