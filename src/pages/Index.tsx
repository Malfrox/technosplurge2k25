
import React from 'react';
import UniversityHeader from '../components/UniversityHeader';
import EventBanner from '../components/EventBanner';
import EventCategory from '../components/EventCategory';
import StudentButton from '../components/StudentButton';
import { Music, Code, Gamepad } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <UniversityHeader />
        <EventBanner />
        
        {/* Cultural Events Section */}
        <EventCategory 
          title="Cultural Events" 
          icon={<Music className="h-6 w-6 text-white" />}
          iconBg="bg-tech-blue"
        >
          <div className="flex flex-wrap gap-4">
            <StudentButton 
              bgColor="bg-tech-blue"
              textColor="text-white"
              text="For MRUH Students"
              link="https://forms.gle/hU8b1Sqt1MszFMfJ7"
            />
          </div>
        </EventCategory>
        
        {/* Technical Events Section */}
        <EventCategory 
          title="Technical Events" 
          icon={<Code className="h-6 w-6 text-white" />}
          iconBg="bg-orange-500"
        >
          <div className="flex flex-wrap gap-4">
            <StudentButton 
              bgColor="bg-tech-blue"
              textColor="text-white"
              text="For MRUH Students"
              link="https://forms.gle/gT6jBwDEkCXGo5c6A"
            />
            <StudentButton 
              bgColor="bg-tech-orange"
              textColor="text-white"
              text="For Non-MRUH Students"
              link="https://forms.gle/HXJkdLc8Wwi6LAjz5"
            />
          </div>
        </EventCategory>
        
        {/* E-Sports Event Section */}
        <EventCategory 
          title="E-Sports Event" 
          icon={<Gamepad className="h-6 w-6 text-white" />}
          iconBg="bg-tech-blue"
        >
          <div className="flex flex-wrap gap-4">
            <StudentButton 
              bgColor="bg-tech-blue"
              textColor="text-white"
              text="For MRUH (DS) Students"
              link="https://forms.gle/a4d4ScmYKa6gZ9ML8"
            />
          </div>
        </EventCategory>
      </div>
    </div>
  );
};

export default Index;
