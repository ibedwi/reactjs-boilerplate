import { configure } from '@storybook/react';
import '../src/styles/tailwind.css'; // For TailwindCSS
import 'bootstrap/dist/css/bootstrap.min.css'; // For Bootstrap

// automatically import all files ending in *.stories.js
configure(require.context('../src/', true, /\.stories\.jsx$/), module);
