import React from 'react';

import Author from './Author';

/**
 * TODO:
 */

export default {
  title: 'Components/Author',
  component: Author,
};

const authors = [
  {
    display_name: 'Shashi',
    media: {
      img: 'https://source.unsplash.com/150x150/?man',
      alt: 'Shashi ',
    },
    slug: 'shashi',
  },
  {
    display_name: 'Rakesh',
    media: {
      img: 'https://source.unsplash.com/150x150/?person',
      alt: 'Rakesh',
    },
    slug: 'rakesh',
  },
];

const categories = [
  {
    name: 'Business',
    slug: 'business',
  },
  {
    name: 'Politics',
    slug: 'politics',
  },
];

export const Basic = () => <Author authors={authors} categories={categories} date="01-02-2020" />;

export const SingleAuthor = () => (
  <Author authors={[authors[0]]} categories={categories} date="01-02-2020" />
);

export const singleTag = () => (
  <Author authors={authors} categories={[categories[0]]} date="01-02-2020" />
);
