import React from 'react';

const Excerpt = ({data, img=true}) => {
 
  return ( <div className="flex flex-col md:flex-row flex-wrap my-6 bg-gray-200">
  {img && (<div className="flex-1">
    <img
      src={data.img}
      alt={data.alt}
      className="w-full h-full rounded-t rounded-l-none md:rounded-t-none md:rounded-l object-cover"
    />
  </div>)}
  <div className="flex flex-col flex-1 p-4">
    <div className="w-full font-bold text-2xl leading-tight text-gray-900">
      Excerpt
    </div>
    <p className="text-gray-800 font-sans text-lg pt-2">
      {data.excerpt}
    </p>
  </div>
</div> );
}
 
export default Excerpt;