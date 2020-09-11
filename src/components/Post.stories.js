import React from 'react';

import Post from './Post';

/**
 * TODO: Know about "status","medium","is_sticky", "is_highlighted", "format","User", and date format returned.
 * TODO:
 */

export default {
  title: 'Components/Post',
  component: Post,
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
const desc1 = {
  time: 1599811473454,
  blocks: [
    {
      type: 'header',
      data: {
        text:
          'During Partition, the minority population which stayed back in Pakistan was 23% and 30% in West and East Pakistan respectively.',
        level: 2,
      },
    },
  ],
  version: '2.18.0',
};
const desc2 = {
  time: 1599811473454,
  blocks: [
    {
      type: 'header',
      data: {
        text: 'Birth certificate, Aadhar, Voter ID etc and other documents as proof for NRC',
        level: 2,
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
/* prettier-ignore */
const factcheck = {
  id: 12,
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
  excerpt:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit ipsam nam consequuntur aliquid excepturi corporis ipsum! Quae deleniti asperiores dolores eum quod incidunt repudiandae amet quos sunt dignissimos. Corrupti.',
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
  claims: [
    {
      id: 115,
      created_date: '02-02-2020',
      updated_date: '03-02-2020',
      title:
        'During Partition, the minority population which stayed back in Pakistan was 23% and 30% in West and East Pakistan respectively.',
      slug: 'fackcheck10255',
      claim_date: '25-05-1990',
      checked_date: '30-05-1990',
      claim_source: 'Facebook',
      description: desc1,
      review:
        'While there is no conclusive data regarding share of minorities, Hindus who stayed back is West Pakistan as of 1951 were only 1.6% , much less than 23% quoted by Jaggi Vasudev. Even the number quoted for East Pakistan is wrong. Hence the statement is False.',
      review_tag_line: 'String',
      review_sources: 'String',
      space_id: 1,
      claimant: {
        id: 123,
        created_date: '20-06-2020',
        updated_date: '20-12-2020',
        name: 'Jaggi Vasudev',
        slug: 'jaggi',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupted',
        tag_line: 'lorem',
        medium: {
          url: 'https://source.unsplash.com/150x150',
          alt_text: 'loremmmm',
        },
        space_id: 21,
      },
      rating: {
        id: 111,
        created_date: '20-06-2020',
        updated_date: '20-12-2020',
        name: 'False',
        slug: 'false',
        description:'',
        numeric_value: '1',
        medium: {
          url: 'https://source.unsplash.com/150x150',
          alt_text: 'loremmm',
        },
        space_id: 21,
      },
    },
    {
      id: 115,
      created_date: '02-02-2020',
      updated_date: '03-02-2020',
      title: 'Birth certificate, Aadhar, Voter ID etc and other documents as proof for NRC',
      slug: 'fackcheck10256',
      claim_date: '25-05-1990',
      checked_date: '30-05-1990',
      claim_source: 'Facebook',
      description: desc2,
      review:
        'While there is no official notification on the documents which needs to be provided for NRC, the experience from Assam NRC shows that proving citizenship is not about simply submitting one of the documents as stated by Jaggi Vasudev. Hence this statement is Misleading.',
      review_tag_line: 'String',
      review_sources: 'String',
      space_id: 21,
      claimant: {
        id: 126,
        created_date: '20-06-2020',
        updated_date: '20-12-2020',
        name: 'Facebook',
        slug: 'fb',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupted',
        tag_line: 'lorem',
        medium: {
          url: 'https://source.unsplash.com/150x150',
          alt_text: 'loremmmm',
        },
        space_id: 21,
      },
      rating: {
        id: 116,
        created_date: '20-06-2020',
        updated_date: '20-12-2020',
        name: 'Misleading',
        slug: 'misleading',
        description: '',
        numeric_value: '2',
        medium: {
          url: 'https://source.unsplash.com/150x150',
          alt_text: 'loremmm',
        },
        space_id: 21,
      },
    },
  ],
};
export const Basic = () => <Post post={post} />;

export const FactCheckPost = () => <Post post={factcheck} />;
