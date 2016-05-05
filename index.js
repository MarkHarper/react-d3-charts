import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import BarChart from './components/types/bar'

render(
  <BarChart data={[ 30, 10, 5, 8, 15, 10 ]}
            width={600}
            height={300}
            color="cornflowerblue"
            title="fun" />,
  document.getElementById('root')
);
