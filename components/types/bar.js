import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import d3 from 'd3';
import Bar from '../elements/bar'
import Chart from '../core/chart'
import Title from '../core/title'
import Axis from '../core/axis'

class DataSeries extends Component {
  render() {
    let props = this.props;

    let bars = this.props.data.map(function(point, i) {
      return (
        <Bar height={props.height - props.yScale(point)} width={props.xScale.rangeBand()} offset={props.xScale(i)} availableHeight={props.height} color={props.color} key={i} />
      )
    });

    return (
      <g>{bars}</g>
    )
  }
}

class BarChart extends Component {
  render() {

    let yScale = d3.scale.linear()
      .domain([0,d3.max(this.props.data)])
      .range([this.props.height, 0]);

    let xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.width], 0.05);

    return (
      <Chart width={this.props.width} height={this.props.height}>
        <Title width={this.props.width} align='middle' size='16px' title={this.props.title} />
        <DataSeries data={this.props.data}
                    width={this.props.width}
                    height={this.props.height}
                    color={this.props.color}
                    xScale={xScale}
                    yScale={yScale} />
        <Axis height={this.props.height} className="yAxis" scale={yScale} orient={'left'} />
        <Axis height={this.props.height} className="xAxis" scale={xScale} orient={'bottom'} />
      </Chart>
    )
  }
};

export default BarChart
