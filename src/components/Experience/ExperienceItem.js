// src/components/Experience/ExperienceItem.js
import React from 'react';

const ExperienceItem = ({ experience }) => {
    return (
        <div className="experience-item">
            <h3>{experience.company}</h3>
            <p>{experience.title}</p>
            {/* Add more details or information as needed */}
        </div>
    );
};

export default ExperienceItem;
