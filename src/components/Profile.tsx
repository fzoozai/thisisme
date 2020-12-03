import React from 'react';
import Chicago from '../chicago.jpg';

const Profile = () => (
  <div className="text-center sm:text-left">
    <div className="flex flex-col items-center">
      <div
        className="text-indigo-300 h-72 w-72 bg-ch bg-cover rounded-full mt-4"
        style={{ backgroundImage: `url(${Chicago})` }}
      ></div>
      <div className="text-red-900 mt-6 mb-8 max-w-md text-center px-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </div>
    </div>
  </div>
);
export default Profile;
