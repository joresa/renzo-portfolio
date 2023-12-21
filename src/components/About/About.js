// About.js

import React from 'react';

const About = () => {
  return (
    <div className="grid grid-cols-12">
      {/* Left Container */}
      <div className="col-span-7 bg-gray-400 py-5 px-5">
        <h1 className="text-xl">About me</h1>

        <p> Nisi minim exercitation occaecat veniam enim aliqua excepteur sunt eiusmod consectetur sit dolore ullamco exercitation. Ipsum aliquip fugiat proident excepteur cillum ut. Esse minim quis in anim veniam commodo et non eiusmod enim dolore non. Culpa ex est cupidatat sint.</p>
      </div>

      {/* Right Container */}
      <div className="col-span-5 bg-gray-500">
        <p> Photo Here</p>
      </div>
    </div>
  );
};

export default About;
