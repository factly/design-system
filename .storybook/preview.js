import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/assets/css/main.css';
addDecorator(withInfo);

// automatically import all files ending in *.stories.tsx
configure(
  require.context('../src', true, /\.stories.@(js|jsx|ts|tsx)$/),
  module,
);
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
};
