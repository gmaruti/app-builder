import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class StationLineToggle extends Component {

  constructor(props){
      super(props);
      this.state = {
        mode: 'Revenue'
      }
  }

  showRevenue = () => {
    this.setState({mode: 'Revenue'});
    if (this.props.setQuery) this.props.setQuery('station_revenue', {title: 'Revenue', subscribed: false});
  }

  showEarning = () => {
    this.setState({mode: 'Earning'});
    if (this.props.setQuery) this.props.setQuery('station_earning', {title: 'Earnings', subscribed: false});
  }

  render() {
    return (
      <div style={{width:'100%', align:'right', marginLeft: '80%'}} >
      <Button variant="contained" color="primary" onClick={this.showRevenue} style={{margin: '10px'}}>
          Revenue
      </Button>
      <Button variant="contained" color="secondary" onClick={this.showEarning}>
          Earnings
      </Button>

      </div>
    )
  }
}

export default StationLineToggle
