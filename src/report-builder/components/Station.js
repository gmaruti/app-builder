import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import charts from './charts'

export const STATION_QUERY = gql`
   {
    version
    station {
       revenue {
        data {
          date
          value
        }
      }
      earnings{
        data {
          date
          value
        }
      }
    }
  }
`



class Station extends Component {


  render() {
    return (
      <Query query={STATION_QUERY}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const revenue = data.station.revenue.data;

          const LGraph = charts['LineGraph'];
          return (
            <Fragment>
              <LGraph data={revenue} />
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default Station
