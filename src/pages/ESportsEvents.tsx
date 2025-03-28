
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ESportsEvents = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-tech-blue hover:underline mb-6">
          <ArrowLeft className="h-5 w-5" />
          Back to Main Page
        </Link>
        
        <div className="bg-tech-white border-4 border-tech-black p-6 rounded-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">E-Sports Events</h1>
          
          <div className="space-y-6">
            <div className="border-2 border-gray-300 p-4 rounded-md">
              <h2 className="text-xl font-bold">Valorant Tournament</h2>
              <p className="mt-2">Team-based tactical shooter competition.</p>
              <p className="mt-1 text-gray-600">Date: March 25, 2025</p>
              <p className="mt-1 text-gray-600">Venue: E-Sports Arena</p>
            </div>
            
            <div className="border-2 border-gray-300 p-4 rounded-md">
              <h2 className="text-xl font-bold">FIFA Tournament</h2>
              <p className="mt-2">Show off your virtual football skills in this popular game.</p>
              <p className="mt-1 text-gray-600">Date: March 26, 2025</p>
              <p className="mt-1 text-gray-600">Venue: Gaming Lab</p>
            </div>
            
            <div className="border-2 border-gray-300 p-4 rounded-md">
              <h2 className="text-xl font-bold">Mobile Gaming Competition</h2>
              <p className="mt-2">PUBG Mobile and COD Mobile tournaments for mobile gamers.</p>
              <p className="mt-1 text-gray-600">Date: March 27, 2025</p>
              <p className="mt-1 text-gray-600">Venue: Student Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESportsEvents;
