import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-300 text-center py-4 text-gray-600 text-sm">
      &copy; {currentYear} John Renzo Sabado. All Rights Reserved.
    </div>
  );
};

export default Copyright;
