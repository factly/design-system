import React from 'react';
import data from '../data.json';
const StoryCard = ({
  storyData = data.posts[0],
  cardStyle = 'basic',
  excerpt = false,
  imageSize = 'w-full h-40',
}) => {
  return (
    <>
      {cardStyle === 'basic' && (
        <article
          className={`flex flex-col leading-tight border-b last:border-b-0 p-6 border-gray-200 ${cardStyle}`}>
          <a
            href={storyData.slug}
            className={`w-full flex vertical horizontal no-underline hover:no-underline`}>
            <div
              className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}>
              <img
                alt="article thumbnail"
                src={storyData.media.source_url}
                className="h-full w-full object-cover rounded"
              />
            </div>
            <div className="w-full flex flex-col">
              <p className="w-full text-gray-600 text-xs md:text-sm pb-1">
                {storyData.categories.name}
              </p>
              <div
                id={`nav-0`}
                className={`w-full font-bold font-sans text-lg text-gray-800 active`}>
                {storyData.title}
              </div>
              {excerpt && (
                <p className="text-gray-800 font-sans text-base pt-2">
                  {storyData.excerpt}
                </p>
              )}
              <div className="flex mt-auto pt-2">
                <div
                  className={`flex flex-col w-full vertical horizontal justify-between items-start`}>
                  <div className="flex flex-row flex-wrap">
                    <p className="text-gray-600 text-xs md:text-sm mr-2 normal-case">
                      {storyData.degaUsers[0].display_name}
                    </p>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {storyData.published_date}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </article>
      )}

      {cardStyle === 'featured' && (
        <article className="bg-white rounded-t rounded-b-none overflow-hidden px-6">
          <a
            href={storyData.slug}
            className="flex flex-wrap no-underline hover:no-underline">
            <div
              className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}>
              <img
                alt={storyData.media.alt_text}
                src={storyData.media.source_url}
                className="h-full w-full rounded object-cover"
              />
            </div>

            <p className="w-full text-gray-600 text-xs md:text-sm pt-2">
              {storyData.sub_title}
            </p>
            <div className="w-full font-bold text-xl leading-tight text-gray-900 break-words active">
              {storyData.title}
            </div>
            <p className="text-gray-800 font-sans text-lg pt-2 break-words">
              {storyData.excerpt}
            </p>
          </a>
          <div className="flex-none mt-auto py-4">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center">
                <p className="text-gray-600 text-xs md:text-sm mr-2 normal-case">
                  {storyData.degaUsers[0].display_name}
                </p>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">
                {storyData.published_date}
              </p>
            </div>
          </div>
        </article>
      )}
      {cardStyle === 'vertical' && (
        <article
          className={`flex flex-col leading-tight border-b last:border-b-0 p-6 border-gray-200 ${cardStyle}`}>
          <a
            href={storyData.slug}
            className={`w-full flex vertical no-underline hover:no-underline`}>
            <div
              className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}>
              <img
                alt={storyData.media.alt_text}
                src={storyData.media.source_url}
                className="h-full w-full object-cover rounded"
              />
            </div>
            <div className="w-full flex flex-col">
              <p className="w-full text-gray-600 text-xs md:text-sm pb-1">
                {storyData.categories.name}
              </p>
              <div
                id={`nav-0`}
                className={`w-full font-bold font-sans text-lg text-gray-800 active`}>
                {storyData.title}
              </div>
              <p className="text-gray-800 font-sans text-base pt-2">
                {storyData.excerpt}
              </p>

              <div className="flex mt-auto pt-2">
                <div
                  className={`flex flex-col w-full vertical horizontal justify-between items-start`}>
                  <div className="flex flex-row flex-wrap">
                    <p className="text-gray-600 text-xs md:text-sm mr-2 normal-case">
                      {storyData.degaUsers[0].display_name}
                    </p>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {storyData.published_date}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </article>
      )}
      {cardStyle === 'withoutimage' && <article>card without image</article>}
      {cardStyle === 'basicthumbnail' && <article>basic thumbnail</article>}
    </>
  );
};

export default StoryCard;
