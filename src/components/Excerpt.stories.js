import React from 'react';

import Excerpt from './Excerpt';

export default {
  title: 'Components/Excerpt',
  component: Excerpt,
};
const data = {img: 'https://source.unsplash.com/640x360', alt:"hello",excerpt:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque recusandae et, ipsa quis impedit deserunt dolore assumenda suscipit asperiores expedita eum esse laborum quod illum voluptatem repudiandae dolorum atque porro."}

export const Basic = () => <Excerpt data={data} />;
export const withoutImage = () => <Excerpt img={false} data={data} />;