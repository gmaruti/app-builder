import React, { Component } from 'react'

class Summary extends Component {

  componentDidMount() {
    console.log('componentDidMount');
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  }

  render() {
    const width = this.props.width || '100%';
    return (
      <div style={ {background:'white', height:'150px', width:`${width}`, margin:'10px', border: 'thin solid #0000FF'}}>
        <div><b>&nbsp;{this.props.title}</b></div>
        <div><span style={ {width:'50%', float:'left', margin:'10px'}}>Target</span><span id="val1" style={ {float:'right', margin:'10px'}}>$10,000k</span> </div>

        <div><span style={ {width:'50%', float:'left', margin:'10px'}}>Estimated</span><span id="val2" style={ {float:'right', margin:'10px'}}>$29,000k</span> </div>

        <div><span style={ {width:'50%', float:'left', margin:'10px'}}>Expected</span><span id="val3" style={ {float:'right', margin:'10px'}}>$19,000k</span> </div>
      </div>
    )
  }
}

export default Summary
