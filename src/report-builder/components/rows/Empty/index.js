import React, { Component, Fragment } from 'react'


class Empty extends Component {


  render() {
    const { height = '20px', width='100%'} = this.props;

    return (

      <div style={{height:`${height}`, width: `${width}`}}>
        &nbsp;&nbsp;&nbsp;
      </div>
    )
  }
}

export default Empty
