import React from 'react';

import StoryCard from './StoryCard';

/**
 * TODO: make a basic thumbnail and a vertical card
 * TODO: make style changes so that we can differentiate between featured and vertical cards
 * TODO: Make a card without any image
 */

export default {
  title: 'Components/StoryCard',
  component: StoryCard,
};

const postDesc = {
  time: 1599811473454,
  blocks: [
    {
      type: 'header',
      data: {
        text: 'Editor.js',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      data: {
        text:
          'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
      },
    },
    {
      type: 'header',
      data: {
        text: 'Key features',
        level: 3,
      },
    },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'It is a block-styled editor',
          'It returns clean data output in JSON',
          'Designed to be extendable and pluggable with a simple API',
        ],
      },
    },
  ],
  version: '2.18.0',
};
const post = {
  id: 11,
  created_date: '01-01-1998',
  updated_date: '01-01-1998',
  title: 'Who is paying the Train fare for Migrants?',
  subtitle: 'Lorem ipsum dolor, sit amet consectetur',
  slug: '/who-is-paying-the-train-fare-of-migrants',
  status: 'x',
  users: [
    {
      display_name: 'Rakesh',
      medium: {
        url: 'https://source.unsplash.com/150x150/?man',
        alt_text: 'Rakesh',
      },
      slug: 'rakesh',
    },
  ],
  categories: [
    {
      name: 'Business',
      slug: 'business',
    },
    {
      name: 'Politics',
      slug: 'politics',
    },
  ],
  medium: {
    url: 'https://source.unsplash.com/640x360',
    alt_text: 'Lorem, ipsum dolor sit amet',
  },
  excerpt:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit ipsam nam consequuntur aliquid excepturi corporis ipsum! Quae deleniti asperiores dolores eum quod incidunt repudiandae amet quos sunt dignissimos. Corrupti.',
  description: postDesc,
  tags: [
    {
      name: 'Politics',
      slug: 'politics',
    },
    {
      name: 'GOI',
      slug: 'goi',
    },
  ],
};

export const BasicCard = () => <StoryCard storyData={post} />;

export const BasicCardWithExcerpt = () => <StoryCard excerpt storyData={post} />;

export const Featured = () => <StoryCard cardStyle="featured" storyData={post} />;

export const Vertical = () => <StoryCard cardStyle="vertical" storyData={post} />;
