
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechnicalEvents = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-tech-blue hover:underline mb-6">
          <ArrowLeft className="h-5 w-5" />
          Back to Main Page
        </Link>
        
        <div className="bg-tech-white border-4 border-tech-black p-6 rounded-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Technical Events</h1>
          
          <div className="space-y-6">
            <div className="border-2 border-gray-300 p-4 rounded-md">
              <h2 className="text-xl font-bold">Hackathon</h2>
              <p className="mt-2">A 24-hour coding marathon to solve real-world problems.</p>
              <p className="mt-1 text-gray-600">Date: March 20-21, 2025</p>
              <p className="mt-1 text-gray-600">Venue: Computer Science Building</p>
            </div>
            
            <div className="border-2 border-gray-300 p-4 rounded-md">
              <h2 className="text-xl font-bold">AI Project Competition</h2>
              <p className="mt-2">Showcase innovative artificial intelligence and machine learning projects.</p>
              <p className="mt-1 text-gray-600">Date: March 22, 2025</p>
              <p className="mt-1 text-gray-600">Venue: Data Science Lab</p>
            </div>
            
            <div className="border-2 border-gray-300 p-4 rounded-md">
              <h2 className="text-xl font-bold">Technical Quiz</h2>
              <p className="mt-2">Test your knowledge in various technical domains.</p>
              <p className="mt-1 text-gray-600">Date: March 23, 2025</p>
              <p className="mt-1 text-gray-600">Venue: Seminar Hall</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalEvents;
