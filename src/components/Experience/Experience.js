import React, { useState } from 'react';
// import wtwLogo from '../../assets/image/wtw.svg';
// import BenekivaLogo from '../../assets/image/benekiva.svg';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "./experience.css";

import experienceData from './experienceData';
import {BriefcaseIcon, AcademicCapIcon} from '../../assets/svg/svg';

const Experience = () => {

  let workIconStyle = {background: "#06D6A0" } ;
  let schoolIconStyle = {background: "#F9C74" } ;

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (itemId) => {
    setExpandedId(expandedId === itemId ? null : itemId);
  };


  return (
    <div className="grid grid-cols-12">

        {/* Left Container */}
        <div className="col-span-5 bg-gray-100 min-h-200">
        {/* Row 1 */}
          <div className="h-1/3 bg-gray-100">
            <div className="h-1/4 bg-blue-200 py-5 px-5">
              
            </div>
            <div className="h-1/4 bg-gray-200 py-5 px-5">
              
            </div>
            <div className="h-1/4 bg-red-200 py-5 px-5">
              
            </div>
            <div className="h-1/4 bg-green-200 py-5 px-5">
              
            </div>
          </div>

          {/* Row 2 */}
          <div className="h-1/3 bg-gray-100">
              <div className="h-1/4 bg-blue-200 py-5 px-5">
              
              </div>
              <div className="h-1/4 bg-gray-200 py-5 px-5">
                
              </div>
              <div className="h-1/4 bg-red-200 py-5 px-5">
                
              </div>
              <div className="h-1/4 bg-green-200 py-5 px-5">
                
              </div>
          </div>

          {/* Row 3 */}
          <div className="h-1/3 bg-gray-100">
              <div className="h-1/4 bg-blue-200 py-5 px-5">
              
              </div>
              <div className="h-1/4 bg-gray-200 py-5 px-5">
                
              </div>
              <div className="h-1/4 bg-red-200 py-5 px-5">
                
              </div>
              <div className="h-1/4 bg-green-200 py-5 px-5">
                
              </div>
          </div>
      </div>

      {/* Right Container */}
      <div className="col-span-7 bg-gray-400 py-5 px-5 h-200 min-h-200">
        {/* Content for right container */}
        <p> Timeline of experience</p>
        <VerticalTimeline>
          {experienceData.map((element) => {
            const isWorkIcon = element.icon === "work";
            const isExpanded = expandedId === element.id;
            const sentences = element.jobDescription.split('. ');
            const shortDescription = sentences.slice(0, 2).join('. ');

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
                icon = {isWorkIcon ? <BriefcaseIcon/> : <AcademicCapIcon/>}
              >
                <h3 className="vertical-timeline-element-title">{element.company}</h3>
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{element.location} </h4>
                <p className="job-description text-gray-400">
                  {isExpanded ? element.jobDescription : shortDescription}
                  {sentences.length > 2 && (
                    <button className="view-more-button button" onClick={() => toggleExpand(element.id)}>
                      {isExpanded ? 'View Less' : 'View More'}
                    </button>
                  )}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;


