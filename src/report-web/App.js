import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Station from '../report-builder/components/Station'
import LineGraph from '../report-builder/components/charts/LineGraph'
import BarGraph from '../report-builder/components/charts/BarGraph'
import Overview from '../report-builder/components/charts/Overview'
import DataTable from '../report-builder/components/charts/DataTable'
import Summary from '../report-builder/components/charts/Summary'
import OneColumn from '../report-builder/components/rows/OneColumn'
import TwoColumn from '../report-builder/components/rows/TwoColumn'
import ThreeColumn from '../report-builder/components/rows/ThreeColumn'
import Empty from '../report-builder/components/rows/Empty'
import StackedBarGraph from '../report-builder/components/charts/StackedBarGraph'
import SunBurst from '../report-builder/components/charts/SunBurst'
import Radar from '../report-builder/components/charts/Radar'

import Report from './components/Report'

class App extends Component {
  render() {
    return (
      <div className="center w85">

        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route exact path="/line" component={LineGraph} />
            <Route exact path="/bar" component={BarGraph} />
            <Route exact path="/overview" component={Overview} />
            <Route exact path="/table" component={DataTable} />
            <Route exact path="/summary" component={Summary} />
            <Route exact path="/one" component={OneColumn} />
            <Route exact path="/two" component={TwoColumn} />
            <Route exact path="/three" component={ThreeColumn} />
            <Route exact path="/empty" component={Empty} />
            <Route exact path="/station" component={Station} />
            <Route exact path="/stack" component={StackedBarGraph} />
            <Route exact path="/sun" component={SunBurst} />
            <Route exact path="/radar" component={Radar} />

            <Route path='/report/*' component={Report} />

          </Switch>
        </div>
      </div>
    )
  }
}

export default App
