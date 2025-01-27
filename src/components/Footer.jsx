import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700"
        >
          Made on ZAPT
        </a>
      </div>
    </footer>
  );
}