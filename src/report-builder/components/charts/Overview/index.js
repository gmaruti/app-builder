import React, { Component } from 'react'

class Overview extends Component {

  prepareData = reportData => {
      const categories = [];
      const data = []

      reportData.forEach((item) => {
        categories.push(item.date);
        data.push(item.value);
      });

      const config = {
        title: { text: 'Revenue Trend' },
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
      console.log(config);
      return config;
  }

  render() {
    const width = this.props.width || '100%';
    return (


      <div align='left' style={{width:`${width}`, background:'white'}} >
      <div style={ { float: 'left', height:'100px', width:'30%', margin:'1%', border: 'thin solid #0000FF'}}>
        <div align='center' margin='20px'><b>Sellout Target</b></div><br/>
        <div align='center'><span style={ {fontSize:'40px', margin:'10px'}}>60%</span> </div>


      </div>

      <div style={ {float: 'left', height:'100px', width:'30%', margin:'1%', border: 'thin solid #0000FF'}}>
        <div align='center' margin='20px'><b>Sellout Target</b></div><br/>
        <div align='center'><span style={ {fontSize:'40px', margin:'10px'}}>60%</span> </div>


      </div>


      <div style={ {float: 'left', height:'100px', width:'30%', margin:'1%', border: 'thin solid #0000FF'}}>
        <div align='center' margin='20px'><b>Sellout Target</b></div><br/>
        <div align='center'><span style={ {fontSize:'40px', margin:'10px'}}>60%</span> </div>


      </div>
      </div>

    )
  }
}

export default Overview
