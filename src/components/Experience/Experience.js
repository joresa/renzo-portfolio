import React from 'react';
import experienceData from './experienceData';
import ExperienceLeft from './experienceLeft';
import ExperienceVerticalTimeLine from './experienceVerticalTimeLine';

const Experience = () => {

  return (
    <div className="grid grid-cols-12">
        {/* Left Container */}
        <div className="col-span-5  bg-gray-400">
          <ExperienceLeft experienceData={experienceData} />
        </div>

      {/* Right Container */}
      <div className="col-span-7 bg-gray-400 flex justify-center items-center">
        <div className="py-5 px-5 min-h-200">
        <p>Timeline of experience</p>
          <ExperienceVerticalTimeLine />
        </div>
      </div>
    </div>
  );
};

export default Experience;


