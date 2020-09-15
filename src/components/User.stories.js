import React from 'react';

import User from './User';

export default {
  title: 'Components/User',
  component: User,
};
const user = {
  display_name: 'Rakesh Dubbudu',
  medium: { url: 'https://source.unsplash.com/150x150?person', alt_text: 'Author Image' },
  email: 'rakesh@factly.in',
};
export const BasicCard = () => <User user={user} />;
