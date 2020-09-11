import React from 'react';

import FactCheckWidget from './FactCheckWidget';

/**
 * TODO:
 */

export default {
  title: 'Components/FactCheckWidget',
  component: FactCheckWidget,
};
/* const claims = [
  {
    claimant: { name: 'Jaggi Vasudev' },
    rating: { slug: 'false', medium: { url: 'https://source.unsplash.com/100x100', alt_text: 'blah' } },
    claim:
      'During Partition, the minority population which stayed back in Pakistan was 23% and 30% in West and East Pakistan respectively.',
    review:
      'While there is no conclusive data regarding share of minorities, Hindus who stayed back is West Pakistan as of 1951 were only 1.6% , much less than 23% quoted by Jaggi Vasudev. Even the number quoted for East Pakistan is wrong. Hence the statement is False.',
  },
  {
    claimant: { name: 'Jaggi Vasudev' },
    rating: {
      slug: 'misleading',
      medium: { url: 'https://source.unsplash.com/100x100', alt_text: 'blah' },
    },
    claim: 'Birth certificate, Aadhar, Voter ID etc and other documents as proof for NRC',
    review:
      'While there is no official notification on the documents which needs to be provided for NRC, the experience from Assam NRC shows that proving citizenship is not about simply submitting one of the documents as stated by Jaggi Vasudev. Hence this statement is Misleading.',
  },
  {
    claimant: { name: 'Facebook' },
    rating: {
      slug: 'misleading',
      medium: { url: 'https://source.unsplash.com/100x100', alt_text: 'blah' },
    },
    claim: 'A clip from a movie, ‘The Flu’, is being falsely shared as ‘Situation in Italy’',
    review: 'False.',
  },
];
 */
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
        text:
          'While there is no conclusive data regarding share of minorities, Hindus who stayed back is West Pakistan as of 1951 were only 1.6% , much less than 23% quoted by Jaggi Vasudev. Even the number quoted for East Pakistan is wrong. Hence the statement is False.',
        level: 2,
      },
    },
  ],
  version: '2.18.0',
};
const desc3 = {
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
const claims = [
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
        src: 'https://source.unsplash.com/150x150',
        alt: 'loremmmm',
      },
      space_id: 21,
    },
    rating: {
      id: 111,
      created_date: '20-06-2020',
      updated_date: '20-12-2020',
      name: 'False',
      slug: 'false',
      description: desc2,
      numeric_value: '1',
      medium: {
        src: 'https://source.unsplash.com/150x150',
        alt: 'loremmm',
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
    description: desc3,
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
        src: 'https://source.unsplash.com/150x150',
        alt: 'loremmmm',
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
        src: 'https://source.unsplash.com/150x150',
        alt: 'loremmm',
      },
      space_id: 21,
    },
  },
];

export const Basic = () => <FactCheckWidget claims={claims} />;

export const WithOneClaim = () => <FactCheckWidget claims={[claims[0]]} />;
