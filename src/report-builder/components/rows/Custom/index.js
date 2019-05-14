import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'

class Custom extends Component {


  render() {
    const { comps, elements, height = '450px' } = this.props;
    const compName = comps[0].component;
    const Comp = (elements.find(item => item.key === compName) || {}).value;

    return (
      <Fragment>

        <Comp />
      </Fragment>
    )
  }
}

export default Custom
