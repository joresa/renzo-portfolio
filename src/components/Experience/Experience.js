// import React from 'react';
// import ExperienceList from './ExperienceList';

// const Experience = () => {
//     return (
//         <section id="experience">
//             <h2>Experience</h2>
//             <ExperienceList />

//             <div class="text-red-500">This text should be red</div>
//             <div class="bg-blue-200">This div should have a light blue background</div>

//         </section>
//     );
// };

// export default Experience;

// Experience.js

import React from 'react';

const Experience = () => {
  return (
    <div className="grid grid-cols-12">
      {/* Left Container */}
      <div className="col-span-6 bg-gray-300 min-h-200">
        {/* Row 1 */}
        <div className="h-1/3 bg-red-200 py-5 px-5">
        <p> Nisi minim exercitation occaecat veniam enim aliqua excepteur sunt eiusmod consectetur sit dolore ullamco exercitation. Ipsum aliquip fugiat proident excepteur cillum ut. Esse minim quis in anim veniam commodo et non eiusmod enim dolore non. Culpa ex est cupidatat sint.</p>
        </div>

        {/* Row 2 */}
        <div className="h-1/3 bg-blue-200 py-5 px-5">
        <p> Nisi minim exercitation occaecat veniam enim aliqua excepteur sunt eiusmod consectetur sit dolore ullamco exercitation. Ipsum aliquip fugiat proident excepteur cillum ut. Esse minim quis in anim veniam commodo et non eiusmod enim dolore non. Culpa ex est cupidatat sint.</p>
        </div>

        {/* Row 3 */}
        <div className="h-1/3 bg-green-200 py-5 px-5">
        <p> Nisi minim exercitation occaecat veniam enim aliqua excepteur sunt eiusmod consectetur sit dolore ullamco exercitation. Ipsum aliquip fugiat proident excepteur cillum ut. Esse minim quis in anim veniam commodo et non eiusmod enim dolore non. Culpa ex est cupidatat sint.</p>
        </div>
      </div>

      {/* Right Container */}
      <div className="col-span-6 bg-gray-400  h-200 min-h-200">
        {/* Content for right container */}
        <p> Timeline of experience here</p>
      </div>
    </div>
  );
};

export default Experience;


