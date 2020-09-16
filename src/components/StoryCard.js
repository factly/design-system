import React from 'react';

/**
 * TODO: Change the data structure of props
 * TODO: Make images more responsive
 * TODO: Make most of the items optional
 * TODO: Possibly increase padding
 * TODO: Probably change the name of the component to "Card"
 * TODO: Refactor to decrease repetition of code
 */

const StoryCard = ({
  storyData,
  cardStyle = 'basic',
  excerpt = false,
  imageSize = 'w-full h-40',
}) => {
  console.log(storyData.categories);
  return (
    <>
      {cardStyle === 'basic' && (
        <article
          className={`flex flex-col leading-tight border-b last:border-b-0 p-6 border-gray-200 ${cardStyle}`}
        >
          <a
            href={storyData.slug}
            className={`w-full flex vertical horizontal no-underline hover:no-underline`}
          >
            {storyData.medium.url && (
              <div className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}>
                <img
                  alt={storyData.medium.alt_text}
                  src={storyData.medium.url}
                  className="h-full w-full object-cover rounded"
                />
              </div>
            )}
            <div className="w-full flex flex-col">
              <p className="text-blue-500 text-xs px-1">
                {storyData.categories.map((category, i, arr) => (
                  <span key={i}>
                    {category.name} {arr.length - i > 1 && ','}
                  </span>
                ))}
              </p>

              <div
                id={`nav-0`}
                className={`w-full font-bold font-sans text-lg text-gray-800 active`}
              >
                {storyData.title}
              </div>
              {excerpt && (
                <p className="text-gray-800 font-sans text-base pt-2">{storyData.excerpt}</p>
              )}
              <div className="flex mt-auto pt-2">
                <div
                  className={`flex flex-col w-full vertical horizontal justify-between items-start`}
                >
                  <div className="flex flex-row flex-wrap">
                    <p className="text-gray-600 text-xs md:text-sm mr-2 normal-case">
                      {storyData.users.map((user, i, arr) => (
                        <span key={i}>
                          {user.display_name} {arr.length - i > 1 && ','}
                        </span>
                      ))}
                    </p>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">{storyData.created_date}</p>
                </div>
              </div>
            </div>
          </a>
        </article>
      )}

      {cardStyle === 'featured' && (
        <article className="bg-white rounded-t rounded-b-none overflow-hidden px-6">
          <a href={storyData.slug} className="flex flex-wrap no-underline hover:no-underline">
            {storyData.medium.url && (
              <div className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}>
                <img
                  alt={storyData.medium.alt_text}
                  src={storyData.medium.url}
                  className="h-full w-full rounded object-cover"
                />
              </div>
            )}

            <p className="w-full text-gray-600 text-xs md:text-sm pt-2">{storyData.subtitle}</p>
            <div className="w-full font-bold text-xl leading-tight text-gray-900 break-words active">
              {storyData.title}
            </div>
            <p className="text-gray-800 font-sans text-lg pt-2 break-words">{storyData.excerpt}</p>
          </a>
          <div className="flex-none mt-auto py-4">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center">
                <p className="text-gray-600 text-xs md:text-sm mr-2 normal-case">
                  {storyData.users.map((user, i, arr) => (
                    <span key={i}>
                      {user.display_name} {arr.length - i > 1 && ','}
                    </span>
                  ))}
                </p>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">{storyData.created_date}</p>
            </div>
          </div>
        </article>
      )}
      {cardStyle === 'vertical' && (
        <article
          className={`flex flex-col leading-tight border-b last:border-b-0 p-6 border-gray-200 ${cardStyle}`}
        >
          <a
            href={storyData.slug}
            className={`w-full flex vertical no-underline hover:no-underline`}
          >
            {storyData.medium.url && (
              <div className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}>
                <img
                  alt={storyData.medium.alt_text}
                  src={storyData.medium.url}
                  className="h-full w-full object-cover rounded"
                />
              </div>
            )}

            <div className="w-full flex flex-col">
              <p className="w-full text-gray-600 text-xs md:text-sm pb-1">
                {storyData.categories.map((category, i, arr) => (
                  <span key={i}>
                    {category.name} {arr.length - i > 1 && ','}
                  </span>
                ))}
              </p>
              <div
                id={`nav-0`}
                className={`w-full font-bold font-sans text-lg text-gray-800 active`}
              >
                {storyData.title}
              </div>
              <p className="text-gray-800 font-sans text-base pt-2">{storyData.excerpt}</p>

              <div className="flex mt-auto pt-2">
                <div
                  className={`flex flex-col w-full vertical horizontal justify-between items-start`}
                >
                  <div className="flex flex-row flex-wrap">
                    <p className="text-gray-600 text-xs md:text-sm mr-2 normal-case">
                      {storyData.users.map((user, i, arr) => (
                        <span key={i}>
                          {user.display_name} {arr.length - i > 1 && ','}
                        </span>
                      ))}
                    </p>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">{storyData.created_date}</p>
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
