import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div 
      className={`flex justify-center items-center bg-black bg-opacity-20 rounded-lg p-4 ${className}`}
    >
      <div 
        className={`
          ${sizeClasses[size]} 
          border-gray-300 
          border-t-blue-500 
          border-r-blue-500 
          rounded-full 
          animate-spin 
          shadow-lg
        `}
      ></div>
    </div>
  );
};

export default LoadingSpinner;