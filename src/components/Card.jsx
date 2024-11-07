// Card.js
import React from 'react';

const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 w-full max-w-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-500 w-8 h-8 rounded-full"></div>
          <span className="font-semibold text-gray-800">Client Name</span>
        </div>
        <span className="text-sm text-gray-500">Sadik Istiak</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        
        Lorem ipsum dolor sit amet curr...
      </p>
      <div className="flex justify-between items-center text-gray-500 text-xs">
        <div className="flex space-x-2">
          <span>👤</span>
          <span>12+</span>
          <span>💬 15</span>
          <span>⭐ 25</span>
        </div>
        <div className="flex space-x-2 items-center">
          <span>📅</span>
          <span>30-12-2022</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
