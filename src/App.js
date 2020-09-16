import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import StoryCard from '../src/components/StoryCard';

import './assets/css/main.css';

import data from '../src/data.json';

const HomePage = () => {
  const { posts, factchecks, categories } = data;
  const merged = [...posts, ...factchecks];
  const [postItems, setPostItems] = useState(merged.slice(0, 2));
  const [hasNextPage, setHasNextPage] = useState(true);
  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = merged.slice(postItems.length, postItems.length + 2);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < merged.length);
  };
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div
        style={{ maxWidth: '1920px' }}
        className="w-full text-xl md:text-2xl text-gray-800 leading-normal lg:px-6 mt-10 pt-4 mx-auto"
      >
        <div className="flex flex-row justify-between lg:border-b">
          {/* Left sidebar */}
          <div className="sidebar xl:flex xl:w-1/4 border-r sticky">
            <div className="block">
              <div className="mb-4 pb-4 border-b px-6">
                <h5 className="heading">Headlines</h5>
              </div>
              {categories.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col leading-tight border-b last:border-b-0 py-2 px-6 border-gray-200"
                >
                  <a
                    href={`#${item.slug}`}
                    className={`w-full flex no-underline hover:no-underline font-bold font-sans text-base text-gray-800`}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-start items-start my-4 p-4">
              <img
                alt=""
                src="https://factly.in/wp-content/uploads//2018/09/banner-survey-side.png"
                className="w-full object-cover rounded"
              />
            </div>
          </div>
          {/* Main/ Middle part of the homepage */}
          <div className="main-content w-full md:w-3/4 xl:w-2/4 mx-auto">
            {/* Featured Card */}
            <StoryCard cardStyle="featured" storyData={data.posts[0]} imageSize="w-full h-64" />
            {/* Articles list */}
            <div className="flex flex-col py-6">
              {categories.map((category) => (
                <div key={category.slug} id={category.slug}>
                  <div className="mb-4 pb-4 border-b px-6">
                    <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                      {category.name}
                    </h5>
                  </div>
                  {posts.slice(0, 4).map((item, index) => (
                    <StoryCard
                      cardStyle="basic"
                      storyData={item}
                      excerpt
                      imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
                    />
                  ))}
                </div>
              ))}
              {/* More stories / Infinite Scrolling */}
              <div id="more-stories">
                <div className="border-b p-6">
                  <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                    More stories from factly.....
                  </h5>
                </div>
                <InfiniteScroll
                  pageStart={0}
                  loadMore={handleLoadMore}
                  hasMore={hasNextPage}
                  loader={
                    <div className="loader" key={0}>
                      Loading ...
                    </div>
                  }
                >
                  {postItems.map((item, index) => (
                    <StoryCard
                      cardStyle="basic"
                      storyData={item}
                      excerpt
                      imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
                    />
                  ))}
                </InfiniteScroll>
              </div>
            </div>
          </div>
          {/* Right sidebar */}
          <div className="sidebar lg:flex lg:w-2/6 xl:w-1/4 border-l sticky">
            <div className="block overflow-y-scroll">
              <div className="mb-4 pb-4 border-b px-6">
                <h5 className="heading">Top In Factchecks</h5>
              </div>
              {factchecks.map((item, index) => (
                <StoryCard cardStyle="vertical" storyData={item} imageSize="h-40" />
              ))}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
