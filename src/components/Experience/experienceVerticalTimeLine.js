
import React, { useState } from "react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { BriefcaseIcon, AcademicCapIcon } from '../../assets/svg/svg';
import "./experience.css";

import experienceData from './experienceData';

const ExperienceVerticalTimeline = () => {
    const workIconStyle = { background: "#06D6A0" };
    const schoolIconStyle = { background: "#F9C74" };
  
    const [expandedId, setExpandedId] = useState(null);
  
    const toggleExpand = (itemId) => {
      setExpandedId(expandedId === itemId ? null : itemId);
    };

    return (
      <div>
        <VerticalTimeline>
          {experienceData.map((element) => {
            const isWorkIcon = element.icon === "work";
            const isExpanded = expandedId === element.key;
            const sentences = element.jobDescription.split('. ');
            const shortDescription = sentences.slice(0, 2).join('. ');

            return (
              <VerticalTimelineElement
                key={element.key} 
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
                icon={isWorkIcon ? <BriefcaseIcon/> : <AcademicCapIcon/>}
              >
                <h3 className="vertical-timeline-element-title">{element.company}</h3>
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
                <p className="job-description text-gray-400">
                  {isExpanded ? element.jobDescription : shortDescription}
                  {sentences.length > 2 && (
                    <button className="view-more-button button" onClick={() => toggleExpand(element.key)}>
                      {isExpanded ? 'View Less' : 'View More'}
                    </button>
                  )}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    );
};

export default ExperienceVerticalTimeline;
