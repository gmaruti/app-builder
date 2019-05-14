import React, { Component } from 'react'
import Breakpoints from '../../utils/Breakpoints'
import getLayout from '../../reportLayout'
import Header from '../Header'
import Footer from '../Footer'
import ReportLayout from '../../../report-generator/ReportLayout'
import queries from '../../queries'
import filterComps from '../Filters'
import dataFunctions from '../DataRoutine'

class Report extends Component {

   parseLayout = layout => {
    const elements = [];
    const { rows } = layout.components;

    rows.forEach((row) => {
      row.components.forEach((comp) => {
        if (comp.query) elements.push({key: comp.query, value: queries[comp.query]});
        if (comp.component) elements.push({key: comp.component, value: filterComps[comp.component]});
        if (comp.dataFunction) elements.push({key: comp.dataFunction, value: dataFunctions[comp.dataFunction]});
        if (comp.tooltip) elements.push({key: comp.tooltip, value: dataFunctions[comp.tooltip]});
        if (comp.onLoad) elements.push({key: comp.onLoad, value: dataFunctions[comp.onLoad]});
        if (comp.autoRefresh) elements.push({key: comp.autoRefresh.query, value: queries[comp.autoRefresh.query]});
      })
    });

    return elements;
  }

  render() {
    const { match = {}} = this.props;
    const reportType = (match.params || [])[0] || '';
    const mediaType = Breakpoints.getMediaType();
    const layout = getLayout(reportType, mediaType) || {};
    const repQueries = [queries['defaultQuery']]
    return (
      <div >
        <Header mediaType={mediaType}/>
        <ReportLayout
          layout = {layout}
          elements={this.parseLayout(layout)}
          />
        <Footer mediaType={mediaType}/>
      </div>
    )
  }
}

export default Report
