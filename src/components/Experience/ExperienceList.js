// src/components/Experience/ExperienceList.js
import React from 'react';
import ExperienceItem from './ExperienceItem';
import experienceData from './data'; // Import sample data for the Experience section

const ExperienceList = () => {
    return (
        <div className="experience-list">
            {experienceData.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} />
            ))}
        </div>
    );
};

export default ExperienceList;
