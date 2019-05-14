import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import charts from '../../charts'

class ThreeColumn extends Component {



  render() {
    const { comps, elements } = this.props;
    const queryStr = (elements.find(item => item.key === comps[0].query) || {}).value;
    const dataFunc = this.props.dataFunction || 'getRevenueData';
    const query = gql ` ${queryStr} ` ;

    const { height = '450px' } = this.props;
    return (
      <div style={{align:'left', height:`${height}`}} >
      <Query query={query}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const onLoad = (elements.find(item => item.key === comps[0].onLoad) || {}).value;
          const revenue = {};

          const GraphComp = charts[comps[0].type || 'LineGraph'];
          return (
            <div style={{width:"32%", float:"left", margin:'0.5%'}}>
              <GraphComp data={revenue} width={'100%'} onLoad={onLoad} title={comps[0].title}/>
            </div>
          )
        }}
      </Query>

      <Query query={query}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const revenue = {};
          const onLoad = (elements.find(item => item.key === comps[1].onLoad) || {}).value;
          const GraphComp = charts[comps[1].type || 'LineGraph'];
          return (
            <div style={{width:"32%", float:"left", margin:'0.5%'}}>
              <GraphComp data={revenue} width={'100%'} onLoad={onLoad} title={comps[1].title}/>
            </div>
          )
        }}
      </Query>

      <Query query={query}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const revenue = {};
          const onLoad = (elements.find(item => item.key === comps[2].onLoad) || {}).value;
          const GraphComp = charts[comps[2].type || 'LineGraph'];
          return (
            <div style={{width:"32%", float:"left", margin:'0.5%'}}>
              <GraphComp data={revenue} width={'100%'} onLoad={onLoad} title={comps[2].title}/>
            </div>
          )
        }}
      </Query>

      </div>
    )
  }
}

export default ThreeColumn
