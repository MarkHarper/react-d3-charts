import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from '../../styles';

class Title extends Component {
  render() {
    return (
      <text className={this.props.className} x={this.props.width / 2} y='0.5' style={styles.title}>
        {this.props.title}
      </text>
    )
  }
}

export default Title
