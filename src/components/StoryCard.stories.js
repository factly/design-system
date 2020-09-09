import React from 'react';

import StoryCard from './StoryCard';

import data from '../data.json';

export default {
  title: 'Components/StoryCard',
  component: StoryCard,
};
const storyData = data.posts[0];

export const BasicCard = () => <StoryCard storyData={storyData}/>;

export const BasicCardWithExcerpt = () => <StoryCard excerpt storyData={storyData} />;

export const Featured = () => <StoryCard cardStyle="featured" storyData={storyData} />;

export const Vertical = () => <StoryCard cardStyle="vertical" storyData={storyData} />;
