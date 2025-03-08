import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-500 text-sm">
          <p>
            Data provided by The New York Times API.
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} NY Times Most Popular Articles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;