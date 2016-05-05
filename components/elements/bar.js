import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';

class Bar extends Component {
  render() {
    return (
      <rect fill={this.props.color}
        width={this.props.width} height={this.props.height}
        x={this.props.offset} y={this.props.availableHeight - this.props.height} />
    )
  }
}

export default Bar
