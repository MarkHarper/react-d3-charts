import React, { Component } from 'react';
import { render } from 'react-dom';
import d3 from 'd3';
import Chart from './Chart.js'
import Axis from './Axis.js'
import { axis, xAxis, yAxis, levelsAxis } from './Axis.css'
import DataSeries from './DataSeries.js'

const styles = {
  transparentBg: {
    background: 'transparent'
  },
  space: {
    marginTop: '25px',
  },
  shadow: {
    padding: '2em 2em 2em 7em'
  },
  title: {
    align: 'middle',
    fontSize: '16px'
  },
  margin: {
    margin: '0 auto'
  }
}

class BarChart extends Component {
  render() {
    let levels = ['Jon Snow', 'Broken Toys', 'Proficient', 'Like Whoa', 'Master']
    let x = this.props.data.map(function (obj) {
      return Object.keys(obj)[0];
    });
    let y = this.props.data.map(function (obj) {
      let key = Object.keys(obj)[0];
      return obj[key];
    });;
    let yMax = Math.max(...y);

    let yScale = d3.scale.linear()
      .domain([0,yMax])
      .range([this.props.height, 0]);

    let levelsScale = d3.scale.ordinal()
      .domain(levels)
      .rangePoints([this.props.height, 0], 0.5);

    let xScale = d3.scale.ordinal()
      .domain(d3.range(x.length))
      .rangeRoundBands([0, this.props.width], 0.1);

    return (
      <Chart style={styles.shadow} width={this.props.width} height={this.props.height}>
        <Axis names={x}
          axisType={'levelsAxis'}
          height={this.props.height}
          className={levelsAxis}
          scale={levelsScale}
          width={this.props.width}
          orient={'left'} />
        <DataSeries data={y}
                    width={this.props.width}
                    height={this.props.height}
                    color={this.props.color}
                    xScale={xScale}
                    yScale={yScale}
                    names={x}/>
        <Axis axisType={'yAxis'}
          height={this.props.height}
          className={xAxis}
          scale={yScale}
          orient={'left'} />
        <Axis names={x}
          axisType={'xAxis'}
          height={this.props.height}
          className={xAxis}
          scale={xScale}
          orient={'bottom'} />
      </Chart>
    )
  }
};

export default BarChart
