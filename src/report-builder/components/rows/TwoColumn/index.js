import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import charts from '../../charts'

class TwoColumn extends Component {



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

          const revenue = {};

          const GraphComp = charts[comps[0].type || 'LineGraph'];
          const onLoad = (elements.find(item => item.key === comps[0].onLoad) || {}).value;
          return (
            <div style={{width:"49%", float:"left", margin:'0.5%'}}>
              <GraphComp data={revenue} title={comps[0].title} onLoad={onLoad}/>
            </div>
          )
        }}
      </Query>

      <Query query={query}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const revenue = {};

          const GraphComp = charts[comps[1].type || 'LineGraph'];
          const onLoad = (elements.find(item => item.key === comps[1].onLoad) || {}).value;
          return (
            <div style={{width:"49%", float:"left", margin:'0.5%'}}>
              <GraphComp data={revenue} title={comps[1].title} onLoad={onLoad}/>
            </div>
          )
        }}
      </Query>
      </div>
    )
  }
}

export default TwoColumn
