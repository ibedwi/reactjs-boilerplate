import { configure } from '@storybook/react';
import '../src/styles/tailwind.css'; // For TailwindCSS

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
