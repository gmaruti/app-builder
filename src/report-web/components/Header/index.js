import React, { Component } from 'react'
import appConfig from '../../conf/appConfig'
import './index.css'


class Header extends Component {
  render() {
    const { mediaType } = this.props;
    const height = appConfig.headerHeight[mediaType];
    const fontSize = appConfig.titleFont[mediaType];
    return (
      <div style={{background:'white', height:`${height}`, paddingLeft:'0px'}}>
        <span style={{padding:'10px',fontSize:`${fontSize}`, fontWeight:'bold'}}>TEGNA</span>
        <span style={{margin:'2%'}}><a style={{textDecaration: 'none'}} href=`${appConfig.serverURL}:3000/report/station`> Station</a></span>
        <span style={{margin:'2%'}}><a style={{textDecaration: 'none'}} href=``${appConfig.serverURL}/report/program`>Program</a></span>
        <span style={{margin:'2%'}}>Advertisers</span>
        <span style={{margin:'2%'}}>Plan</span>
        {mediaType !=='tablet' && mediaType !=='mobile' && <span style={{margin:'2%'}}>Rate Card</span>}
        <span style={{margin:'20%'}}></span>
      </div>
    )
  }
}

export default Header
