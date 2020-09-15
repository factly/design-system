import React from 'react';

const Tabs = ({ tabs, currentSlug = '', baseUrl }) => {
  return (
    <ul className="flex bg-gray-300">
      {tabs.map((tab) => {
        let url;
        if (tab.slug === '') {
          url = baseUrl;
        } else {
          url = `${baseUrl}format/${tab.slug}`;
        }
        console.log(tab.slug, currentSlug);
        return (
          <li className="mx-1">
            <a
              href={url}
              className={`inline-block py-2 px-4 border border-b-0 rounded-t font-medium text-lg focus:outline-none hover:bg-white
      ${tab.slug === currentSlug && 'bg-white'}`}
            >
              {tab.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
