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
        <div className="col-span-4 bg-gray-300 min-h-200">
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
      <div className="col-span-8 bg-gray-400 py-5 px-5 h-200 min-h-200">
        {/* Content for right container */}
        <p> Timeline of experience</p>
        <VerticalTimeline>
          {experienceData.map((element) => {
            const isWorkIcon = element.icon === "work";
            const isExpanded = expandedId === element.id;

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
                icon = {isWorkIcon ? <BriefcaseIcon/> : <AcademicCapIcon/>}
              >
                <h3 className="vertical-timeline-element-title">{element.company} - {element.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{element.location} </h4>
                <p className="job-description">
                  {element.jobDescription}
                </p>
                {isExpanded && (
                  <div className='jobText'>
                    <ul className="list-disc ml-6">
                      {element.jobRoles.map((role, index) => (
                        <li key={index}>{role}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className="view-more-button button" onClick={() => toggleExpand(element.id)}>
                  {isExpanded ? 'View Less' : 'View More'}
                </button>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;


