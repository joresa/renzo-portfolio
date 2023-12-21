import React from 'react';
import portfolioData from './data'; // Import the data file

const Portfolio = () => {
  return (
    <div className="w-full bg-gray-500 px-7">
        <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
        <div className="grid grid-cols-12 gap-4">
            {portfolioData.map((item) => (
            <div key={item.id} className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="bg-gray-200 rounded p-4 mb-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="mb-2">{item.description}</p>
                <img src={item.image} alt={item.title} className="mb-2" />
                <p className="mb-2">
                    Timeline: {item.timeline.startDate} - {item.timeline.endDate}
                </p>
                <div>
                    <p className="text-sm font-semibold">Tech Stack:</p>
                    <ul className="flex flex-wrap">
                    {item.techStack.map((tech) => (
                        <li key={tech} className="bg-gray-300 rounded-full py-1 px-3 text-xs mr-2 mb-2">
                        {tech}
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
            ))}
        </div>
        {/* Dots/slider indicator for portfolio items */}
        <div className="flex justify-center mt-4">
            {/* Implement dots/slider indicator here */}
        </div>
    </div>
  );
};

export default Portfolio;
