import React from 'react';
import Author from './Author';
import ShareButtonGroup from './ShareButtonGroup';
import FactCheckWidget from './FactCheckWidget';
import Tag from './Tag';

/**
 * TODO:
 */

const Post = ({ post }) => {
  return (
    <article
      post={post.id}
      //ref={postSection}
      id={post.id}
      className="flex flex-col p-6 mb-12"
    >
      <div className="bg-white rounded-t rounded-b-none overflow-hidden">
        <h1 className="font-medium text-3xl py-2">{post.title}</h1>
        <div className="flex flex-col md:flex-row">
          <Author date={post.created_date} authors={post.users} categories={post.categories} />
          <ShareButtonGroup data={{ url: post.slug, title: post.title }} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap my-6 bg-gray-200">
        <div className="flex-1">
          <img
            src={post.media.url}
            alt={post.media.alt}
            className="w-full h-full rounded-t rounded-l-none md:rounded-t-none md:rounded-l object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 p-4">
          <div className="w-full font-bold text-2xl leading-tight text-gray-900">Excerpt</div>
          <p className="text-gray-800 font-sans text-lg pt-2">{post.excerpt}</p>
        </div>
      </div>

      <div className="w-full lg:w-3/4 mx-auto font-sans text-xl">
        {post.claims && <FactCheckWidget claims={post.claims} />}
        <div
          className="my-6 pb-6 border-b text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.description }}
        ></div>
        <div className="flex flex-wrap pb-6 border-b">
          <div className="flex flex-wrap">
            {post.tags.map((tag) => (
              <Tag url={tag.slug} name={tag.name} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
