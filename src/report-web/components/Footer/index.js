import React, { Component } from 'react'
import appConfig from '../../conf/appConfig'

class Footer extends Component {
  render() {
    const { mediaType } = this.props;
    const height = appConfig.footerHeight[mediaType];
    return (
      <div style={{background:'white', height:`${height}`}}>

      </div>
    )
  }
}

export default Footer
