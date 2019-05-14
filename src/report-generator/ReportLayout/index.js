import React, { Component, Fragment } from 'react'
import reportsComponents from '../../report-builder/components/rows'



class ReportLayout extends Component {

  renderPage = (layout, elements) => {
    console.log(layout);
    const { rows } = layout.components;

    return rows.map((row) => {
      const RowComp = reportsComponents[row.type];
      return <RowComp comps = {row.components} elements={elements} height={row.height}/>;
    });
  }

  render() {
    const { layout, elements } = this.props;
    return (
      <Fragment >
        {this.renderPage(layout, elements)}
      </Fragment>
    )
  }
}

export default ReportLayout
