import React from 'react';

const User = ({ user }) => {
  return (
    <div className="flex flex-col px-6">
      <div className="flex py-4">
        <img
          alt={user.medium.alt_text}
          src={user.medium.url}
          className="h-20 lg:h-40 object-cover rounded"
        />
        <div className="px-4">
          <h2 className="font-bold">{user.display_name}</h2>
          <a href="mailto:rakesh@factly.in" className="font-medium text-blue-500 text-lg ">
            {user.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
