import React from 'react';
import Navbar from './components/Navbar';
import StoryCard from './components/StoryCard';
import posts from './post-details-data';
import Tabs from './components/Tabs';
import User from './components/User';
import './assets/css/main.css';
function Author() {
  const baseUrl = window.location.href;
  const tabs = [
    { name: 'All', slug: '' },
    { name: 'Stories', slug: 'stories' },
    { name: 'FactChecks', slug: 'factchecks' },
  ];

  return (
    <>
      <Navbar />
      <div
        style={{ maxWidth: '1920px' }}
        className="w-full text-xl md:text-2xl text-gray-800 leading-normal lg:px-6 mt-10 pt-4 mx-auto"
      >
        <div className="flex flex-col lg:flex-row justify-between lg:border-b">
          <div className="main-content order-2 lg:order-1 lg:w-3/5 mx-auto lg:-my-16">
            <div className="flex flex-col pb-6">
              <Tabs tabs={tabs} baseUrl={baseUrl} currentSlug="" />
              <div>
                {posts.map((item, index) => (
                  <StoryCard
                    cardStyle="basic"
                    storyData={item}
                    excerpt
                    imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col order-1 lg:order-2 w-full lg:w-2/5 border-l pt-10 lg:pt-20 top-0 h-auto lg:h-screen static lg:sticky overflow-y-hidden">
            <User
              user={{
                display_name: 'Rakesh Dubbudu',
                medium: {
                  url: 'https://source.unsplash.com/150x150?person',
                  alt_text: 'Author Image',
                },
                email: 'rakesh@factly.in',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Author;
