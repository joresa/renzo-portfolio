// src/components/Experience/ExperienceItem.js
// import React from 'react';

// const ExperienceItem = ({ experience }) => {
//     return (
//         <div className="experience-item">
//             <h3>{experience.company}</h3>
//             <p>{experience.title}</p>
//             {/* Add more details or information as needed */}
//         </div>
//     );
// };

// export default ExperienceItem;

import React from 'react';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="flex flex-row-reverse items-center md:order-odd">
      <div className="md:ml-4 md:mr-4 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">{experience.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{experience.date}</p>
        <p className="text-sm">{experience.description}</p>
      </div>
      <div className="h-6 w-6 rounded-full bg-blue-500 mb-6 md:mb-0"></div>
    </div>
  );
};

export default ExperienceItem;


