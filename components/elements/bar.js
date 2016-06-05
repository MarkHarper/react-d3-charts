import 'babel-polyfill';
import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import d3 from 'd3'

class Bar extends Component {
  enter (selection) {
    selection
      .attr('x', (d) => d.offset)
      .attr('y', (d) => d.availableHeight)
      .attr('stroke', (d) => d.color)
      .attr('fill', (d) => d.color)
      .attr('height', (d) => 0)
      .attr('width', (d) => d.width)
      .attr('opacity', 0.7);


    selection
      .transition()
      .delay(function (d) {
        return d.order * 200;
      })
      .duration(2000)
      .attr('height', (d) => d.height)
      .attr('y', (d) => d.availableHeight - d.height)

  }
  componentDidMount () {
    d3.select(findDOMNode(this))
      .datum(this.props)
      .call(this.enter);
  }
  render() {
    return (
      <rect className={'bar'}/>
    )
  }
}

Bar.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  availableHeight: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  yScale: PropTypes.func.isRequired
}

export default Bar
