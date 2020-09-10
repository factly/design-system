import React from 'react';

import ShareButtonGroup from './ShareButtonGroup';

/**
 * TODO:
 */

export default {
  title: 'Components/ShareButtonGroup',
  component: ShareButtonGroup,
};
let data = {
  url:
    'https://factly.in/review-what-does-the-draft-national-health-data-management-policy-contain/',
  title: 'Review: What does the draft ‘National Health Data Management Policy’ contain?',
  hashtags: 'factly',
};

export const Basic = () => <ShareButtonGroup data={data} />;
