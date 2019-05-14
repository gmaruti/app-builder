import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class DataTable extends Component {

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
  const data = [
    {
      program: 'The Voice',
      sellout: 26,
      rate: 16,
      revenue: 26
    },
    {
      program: 'The Brave',
      sellout: 11,
      rate: 26,
      revenue: 22
    },
    {
      program: 'This is US',
      sellout: 23,
      rate: 33,
      revenue: 44
    },
    {
      program: 'Law & Order',
      sellout: 32,
      rate: 22,
      revenue: 44
    },
    {
      program: 'Chicago Med',
      sellout: 45,
      rate: 33,
      revenue: 55
    },
    {
      program: 'The Blacklist',
      sellout: 22,
      rate: 34,
      revenue: 55
    },
    {
      program: 'Superstore',
      sellout: 43,
      rate: 54,
      revenue: 33
    },
    {
      program: 'The Good Place',
      sellout: 24,
      rate: 22,
      revenue: 43
    },
    {
      program: 'Chicago PD',
      sellout: 25,
      rate: 65,
      revenue: 78
    }
  ]

  const columns = [{
    Header: 'Program',
    accessor: 'program' // String-based value accessors!
  }, {
    Header: 'Sell out Data',
    accessor: 'sellout',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    Header: 'Rate',
    accessor: 'rate' // Custom value accessors!
  }, {
    Header: 'Revenue', // Custom header components!
    accessor: 'revenue'
  }]
  const tableWidth = this.props.width || '100%';
  return (<div style={{background:'white', width: `${tableWidth}` }}>

  <div style={{marginLeft:'30%'}}><b>{this.props.title || ''}</b></div><br/>
  <ReactTable
    data={data}
    columns={columns}
    defaultPageSize={10}
    minRows={0}
    showPagination={false}
  />
  </div>
  )
}
}

export default DataTable
