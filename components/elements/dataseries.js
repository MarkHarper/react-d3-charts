import React, { Component } from 'react'
import { render } from 'react-dom'
import d3 from 'd3'
import Bar from './Bar'

class DataSeries extends Component {
  render() {
    let props = this.props;
    let bars = this.props.data.map(function(point, i) {
      return (
        <Bar height={props.height - props.yScale(point)}
          width={props.xScale.rangeBand()}
          offset={props.xScale(i)}
          availableHeight={props.height}
          color={props.color}
          yScale={props.yScale}
          value = {point}
          name = {props.names[i]}
          key={i}
          order={i}/>
      )
    });

    return (
      <g>
        {bars}
      </g>
    )
  }
}

export default DataSeries
