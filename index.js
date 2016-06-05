import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import BarChart from './components/types/bar'

render(
  <BarChart data={[{'HTML/CSS': 85},
            {'Javascript': 95},
            {'D3': 77},
            {'Canvas/SVG': 73},
            {'React': 65},
            {'Backbone': 55},
            {'ProcessingJs': 50}]}
              barPadding={0.1}
              width={800}
              height={400}
              color="cornflowerblue"
              title="fun" />,
  document.getElementById('root')
);
