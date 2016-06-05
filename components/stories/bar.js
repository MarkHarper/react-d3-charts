import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Hello', module)
  .add('Hello', () => {
    return hello();
  })

function hello() {
  return (
    <div>
      hello
    </div>
  );
}
