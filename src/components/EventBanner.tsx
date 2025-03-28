
import React from 'react';
import { Star } from 'lucide-react';

const EventBanner = () => {
  return (
    <div className="bg-tech-orange border-4 border-tech-black p-6 rounded-md mx-auto max-w-4xl mt-4 relative">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white font-heading tracking-wider">
        TechnoSplurge 2k25
      </h2>
      <div className="absolute top-4 right-4 bg-white rounded-full p-2 border-2 border-tech-black">
        <Star className="h-6 w-6 text-tech-orange" />
      </div>
    </div>
  );
};

export default EventBanner;
