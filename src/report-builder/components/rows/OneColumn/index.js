import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import charts from '../../charts'
import Empty from '../Empty'

class OneColumn extends Component {

  constructor(props) {
    super(props);
    const queryName = props.comps[0].query;
    this.state = {
      query: (props.elements.find(item => item.key === queryName) || {}).value,
      title: props.comps[0].title,
      subscribed: false
    }
  }

  subscribeToChanges = async (subscribeToMore) => {
    if (!this.props.comps[0].autoRefresh) return;
    const subsQueryName = this.props.comps[0].autoRefresh.query;
    const subsQueryStr = (this.props.elements.find(item => item.key === subsQueryName) || {}).value;
    const subsQuery = gql ` ${subsQueryStr} ` ;
    subscribeToMore({
      document: subsQuery,
      updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev
          const newData = subscriptionData.data.newData
          // const exists = prev.feed.links.find(({ id }) => id === newLink.id)
          // if (exists) return prev

          return Object.assign({}, prev, {
            station: {
              revenue: newData.revenue,
              __typename: prev.station.revenue.__typename
            },
          })
      },
    })
  }

  setQuery = (queryName, moreProps = {}) => {
    const query = (this.props.elements.find(item => item.key === queryName) || {}).value
    this.setState({query, ...moreProps});
  }

  render() {
    const { comps, elements, height = '450px' } = this.props;
    if (comps[0].type === 'Empty') return (<Empty />)
    const queryStr = this.state.query;
    const query = gql ` ${queryStr} ` ;
    const headerComp = comps.find(item => item.type === 'Header') || '';
    const headerCompName = headerComp.component;
    const HeaderComp = (elements.find(item => item.key === headerCompName) || {}).value;

    const footerComp = comps.find(item => item.type === 'Footer') || '';
    const footerCompName = footerComp.component;
    const FooterComp = (elements.find(item => item.key === footerCompName) || {}).value;

    const dataFunc = (elements.find(item => item.key === comps[0].dataFunction) || {}).value;
    const tooltip = (elements.find(item => item.key === comps[0].tooltip) || {}).value;

    return (
      <Query query={query}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          if (this.props.comps[0].autoRefresh && !this.state.subscribed) {
            this.subscribeToChanges(subscribeToMore);
            this.setState({subscribed: true});
          }

          const chartData = dataFunc(data);
          const GraphComp = charts[comps[0].type];
          return (
            <div style={{width:"100%", height:`${height}`, margin: '10px'}}>
              {HeaderComp && <HeaderComp  setQuery={this.setQuery}/>}
              <GraphComp data={chartData} title={this.state.title} tooltip={tooltip}/>
              {FooterComp && <FooterComp  setQuery={this.setQuery}/>}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default OneColumn
