import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';

class Chart extends Component {
  render() {
    return (
      <svg style={this.props.style} width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    )
  }
}

export default Chart
