import React from 'react';

import Excerpt from './Excerpt';

/**
 * TODO:
 */

export default {
  title: 'Components/Excerpt',
  component: Excerpt,
};
const excerpt= 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque recusandae et, ipsa quis impedit deserunt dolore assumenda suscipit asperiores expedita eum esse laborum quod illum voluptatem repudiandae dolorum atque porro.';
const image = {
    url: 'https://source.unsplash.com/640x360',
    alt_text: 'hello',
};

export const Basic = () => <Excerpt excerpt={excerpt} image={image} />;
export const withoutImage = () => <Excerpt img={false} excerpt={excerpt} />;
