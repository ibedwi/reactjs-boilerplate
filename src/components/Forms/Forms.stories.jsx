import React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleForms from './Example.form';

storiesOf('UI | Forms', module)
  .add('example', () => <ExampleForms />)