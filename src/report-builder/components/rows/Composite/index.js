import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import charts from '../../charts'


class Composite extends Component {

  constructor(props) {
    super(props);
    const queryName = props.comps[0].query;
    this.state = {
      query: (props.elements.find(item => item.key === queryName) || {}).value,
      title: props.title
    }
  }

  setQuery = (queryName, moreProps = {}) => {
    console.log('setQuery');
    const query = (this.props.elements.find(item => item.key === queryName) || {}).value
    this.setState({query, ...moreProps});
  }

  getComps = () => {
    const { comps, elements, height = '450px' } = this.props;
    const items = comps.map((comp) => {
      const queryStr = this.state.query;
      const query = gql ` ${queryStr} ` ;
      const dataFunc = (elements.find(item => item.key === comp.dataFunction) || {}).value;
      const tooltip = (elements.find(item => item.key === comp.tooltip) || {}).value;

      if (comp.type === 'Header' || comp.type === 'Custom') {
        const headerCompName = comp.component;
        const HeaderComp = (elements.find(item => item.key === headerCompName) || {}).value;
        return (
          <HeaderComp  setQuery={this.setQuery}/>
        )
      }
      return (
        <Query query={query}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            const chartData = dataFunc(data);
            const GraphComp = charts[comp.type];
            return (
              <div style={{width:"100%", height:`${height}`}}>

                <GraphComp data={chartData} title={this.state.title} tooltip={tooltip}/>
              </div>
            )
          }}
        </Query>
      )
    });
    console.log(items);
    return items;
  }

  render() {
    return (
      <Fragment>
        {this.getComps()}
      </Fragment>
    )
  }
}

export default Composite
