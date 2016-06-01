import 'babel-polyfill';
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';
import 'd3';

class Axis extends Component {
  renderAxis() {
    let props = this.props;
    let axis = d3.svg.axis().scale(this.props.scale)
                            .orient(this.props.orient);
    let levels = ['Jon Snow', 'Broken Toys', 'Proficient', 'Like Whoa', 'Master']
    if (this.props.axisType == 'xAxis') {
      axis
        .tickSize(2)
				.tickFormat(function(d,i){
          return props.names[i];
        })
				.tickValues(d3.range(props.names.length));

      let trans = function (selection) {
        selection.attr('opacity', 0)
          .attr('fill', 'white')
          .transition()
          .delay(3000)
          .duration(500)
          .attr('opacity', 1);
      }
      d3.select(findDOMNode(this))
        .call(axis)
        .call(trans)
    } else if (this.props.axisType == 'yAxis') {
      let style = function (selection) {
        selection
          .attr('opacity', 0)
      }

      d3.select(findDOMNode(this))
        .call(axis)
        .call(style)
    } else {
      axis
        .innerTickSize(-this.props.width)

      let styleText = function (selection) {
        selection
          .attr('fill', '#777')
          .attr('padding-left', '5px');
      }

      let styleTicks = function (selection) {
        selection
          .attr('stroke', '#777')
          .attr('fill', '#777')
          .attr('padding-left', '5px');
      }
      d3.select(findDOMNode(this))
        .call(axis)

      d3.select(findDOMNode(this))
        .selectAll('line')
        .call(styleTicks);

      d3.select(findDOMNode(this))
        .selectAll('text')
        .call(styleText);
    }
  }

  componentDidMount() {
    this.renderAxis();
  }

  render() {
    let translate = "translate(0,"+(this.props.height - 50)+")";
    return (
      <g className={this.props.className}
        transform={this.props.axisType == 'xAxis' ? translate:""}>
      </g>
    )
  }
}

export default Axis
