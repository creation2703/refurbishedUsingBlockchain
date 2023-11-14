// Hero.js

import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10">
      <div className="md:w-3/6 w-full">
        <div className="hero-text-container">
          <h1 className='text-gradient1 text-white text-6xl-large md:text-6xl-large font-bold mb-4 leading-tight font-roboto'>
            Buy and Sell
          </h1>
          <h1 className='text-gradient text-white text-6xl-large md:text-6xl-large font-bold mb-4 leading-tight font-roboto'>
            Refurbished
          </h1>
          <p className='text-gradient2 text-gray text-sm md:text-base mb-8 font-roboto'>
            A curated selection of refurbished products.
          </p>
        </div>
        
        {/* Centered "List Item" button */}
        <div className='flex justify-auto mt-5'>
          <button className='button-50 font-roboto'>
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
