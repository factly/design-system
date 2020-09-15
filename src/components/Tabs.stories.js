import React from 'react';

import Tabs from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};
const tabs = [
  { name: 'All', slug: '' },
  { name: 'Stories', slug: 'stories' },
  { name: 'FactChecks', slug: 'factchecks' },
];

export const BasicCard = () => <Tabs tabs={tabs} baseUrl={'/'} slug="" />;
