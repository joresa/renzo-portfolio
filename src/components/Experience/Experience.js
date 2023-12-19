import React from 'react';
import ExperienceList from './ExperienceList';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <ExperienceList />

            <div class="text-red-500">This text should be red</div>
            <div class="bg-blue-200">This div should have a light blue background</div>

        </section>
    );
};

export default Experience;
