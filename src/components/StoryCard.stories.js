import React from 'react';

import StoryCard from './StoryCard';

export default {
  title: 'Components/StoryCard',
  component: StoryCard,
};

export const BasicCard = () => <StoryCard />;

export const BasicCardWithExcerpt = () => <StoryCard excerpt />;

export const Featured = () => <StoryCard cardStyle="featured" />;

export const Vertical = () => <StoryCard cardStyle="vertical" />;
