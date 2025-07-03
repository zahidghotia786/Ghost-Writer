import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#F2FFFD] py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4 animate-fade-in">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-gray-700 mb-6 animate-fade-in">
          Stay updated with the latest academic writing tips, exclusive offers, and services directly to your inbox.
        </p>
        <div className="flex justify-center animate-fade-in">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg border border-blue-300 w-full md:w-1/2 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-lg font-bold transition-all duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
