// src/components/Experience/ExperienceList.js
// import React from 'react';
// import ExperienceItem from './ExperienceItem';
// import experienceData from './data'; // Import sample data for the Experience section

// const ExperienceList = () => {
//     return (
//         <div className="experience-list">
//             {experienceData.map((experience, index) => (
//                 <ExperienceItem key={index} experience={experience} />
//             ))}
//         </div>
//     );
// };

// export default ExperienceList;


import React from 'react';
import ExperienceItem from './ExperienceItem';
import experiences from './data';

const ExperienceList = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {experiences.map((experience, index) => (
        <React.Fragment key={experience.id}>
          {index !== 0 && (
            <div className="border-r-2 border-blue-500 h-6 absolute top-0 left-1/2 -ml-px"></div>
          )}
          <ExperienceItem key={experience.id} experience={experience} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ExperienceList;


