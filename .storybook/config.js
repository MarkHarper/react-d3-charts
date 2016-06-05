import { configure } from '@kadira/storybook';

function loadStories() {
  require('../components/stories/bar');
  // require as many as stories you need.
}

configure(loadStories, module);
