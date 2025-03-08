import React from 'react';
import { Link } from 'react-router-dom';
import { Period } from '../../types/article';

interface HeaderProps {
  period: Period;
  onPeriodChange: (period: Period) => void;
}

const Header: React.FC<HeaderProps> = ({ period, onPeriodChange }) => {
  return (
    <header className="bg-nyt-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="font-serif text-2xl font-bold text-gray-800">
            NY Times Most Popular
          </h1>
        </Link>
        
        <div className="mt-4 md:mt-0">
          <div className="flex space-x-2">
            <button
              onClick={() => onPeriodChange(1)}
              className={`px-3 py-1 rounded cursor-pointer ${
                period === 1 
                  ? 'text-gray-800 border rounded' 
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => onPeriodChange(7)}
              className={`px-3 py-1 rounded cursor-pointer ${
                period === 7 
                  ? 'text-gray-800 border rounded' 
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Last Week
            </button>
            <button
              onClick={() => onPeriodChange(30)}
              className={`px-3 py-1 rounded cursor-pointer ${
                period === 30 
                  ? 'text-gray-800 border rounded' 
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Last Month
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;