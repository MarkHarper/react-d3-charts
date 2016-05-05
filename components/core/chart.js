import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from '../../styles';

class Chart extends Component {
  render() {
    return (
      <svg style={styles.shadow} width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    )
  }
}

export default Chart
