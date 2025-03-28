
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CulturalEvents = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-tech-blue hover:underline mb-6">
          <ArrowLeft className="h-5 w-5" />
          Back to Main Page
        </Link>
        
        <div className="bg-tech-white border-4 border-tech-black p-6 rounded-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Cultural Events</h1>
          
          <div className="space-y-6">
            <div className="border-2 border-gray-300 p-4 rounded-md">
              <h2 className="text-xl font-bold">Music Competition</h2>
              <p className="mt-2">Showcase your musical talents in solo or group performances.</p>
              <p className="mt-1 text-gray-600">Date: March 15, 2025</p>
              <p className="mt-1 text-gray-600">Venue: University Auditorium</p>
            </div>
            
            <div className="border-2 border-gray-300 p-4 rounded-md">
              <h2 className="text-xl font-bold">Dance Competition</h2>
              <p className="mt-2">Express yourself through classical, contemporary, or folk dance forms.</p>
              <p className="mt-1 text-gray-600">Date: March 16, 2025</p>
              <p className="mt-1 text-gray-600">Venue: Main Stage</p>
            </div>
            
            <div className="border-2 border-gray-300 p-4 rounded-md">
              <h2 className="text-xl font-bold">Art Exhibition</h2>
              <p className="mt-2">Display your creative artwork and compete for the best artist award.</p>
              <p className="mt-1 text-gray-600">Date: March 17-18, 2025</p>
              <p className="mt-1 text-gray-600">Venue: University Gallery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalEvents;
