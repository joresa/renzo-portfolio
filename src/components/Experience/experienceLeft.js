import React from 'react';

const ExperienceLeft = ({ experienceData }) => {

  return (
    <div className="col-span-5 min-h-200">
      {experienceData.map((experience, index) => (
        <div key={experience.id} className={index % 2 === 0 ? "bg-gray-100 py-3 px-3" : "bg-gray-200 py-3 px-3"}>
          <div className="h-1/4">
            <h1>{experience.company}</h1>
            <ul className='list-disc py-4 px-4 text-sm'>
              {experience.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="h-1/4 ">
            <p>Tech stacks</p>
            <ul className="flex flex-wrap">
              {experience.skills
                .filter((skill) => skill.category === 'techStack')
                .map((techSkill, index) => (
                  <li key={index} className="bg-gray-300 rounded-full py-1 px-3 text-xs mr-2 mb-2">{techSkill.skill}</li>
                ))}
            </ul>
          </div>
          <div className="h-1/4 ">
            <p>Business and Softskill</p>
            <ul className="flex flex-wrap">
              {experience.skills
                .filter((skill) => skill.category === 'BusinessSoft')
                .map((businessSoftSkill, index) => (
                  <li key={index} className="bg-gray-300 rounded-full py-1 px-3 text-xs mr-2 mb-2" >{businessSoftSkill.skill}</li>
                ))}
            </ul>
          </div>
          <div className="h-1/4">
            <p>Others</p>
            <ul className="flex flex-wrap">
              {experience.skills
                .filter((skill) => skill.category === 'others')
                .map((otherSkill, index) => (
                  <li key={index} className="bg-gray-300 rounded-full py-1 px-3 text-xs mr-2 mb-2">{otherSkill.skill}</li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceLeft;
