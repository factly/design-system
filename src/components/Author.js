import React from 'react';

/* 
 TODO 1. Make images optional
 TODO 2. 
 */

const Author = ({ authors, categories, date }) => {
  return (
    <div className="flex flex-col justify-start items-start py-2">
      <div className="flex flex-row flex-wrap">
        {authors.map((author) => (
          <img
            className="w-16 h-16 rounded-full mr-2 avatar"
            data-tippy-content={author.display_name}
            src={author.media.img}
            alt={author.media.alt}
          />
        ))}
      </div>
      <div className="flex flex-col py-2">
        <div className="flex flex-row flex-wrap">
          {authors.map((author, index, arr) => (
            <>
              <a
                href={`/author/${author.slug}/`}
                className="font-medium text-blue-500 text-lg  px-1"
              >
                {author.display_name}
              </a>
              {arr.length - index > 1 && ','}
            </>
          ))}
          <span className="font-medium text-lg ">in</span>
          {categories.map((category, index, arr) => (
            <>
              <a
                href={`/categories/${category.slug}`}
                className="font-medium text-blue-500 text-lg  px-1"
              >
                {category.name}
              </a>
              {arr.length - index > 1 && ','}
            </>
          ))}
        </div>
        <span className="text-gray-600 text-lg">{date}</span>
      </div>
    </div>
  );
};

export default Author;
