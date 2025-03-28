
import React, { ReactNode } from 'react';

interface EventCategoryProps {
  title: string;
  icon: ReactNode;
  iconBg: string;
  children: ReactNode;
}

const EventCategory = ({ title, icon, iconBg, children }: EventCategoryProps) => {
  return (
    <div className="bg-tech-white border-4 border-tech-black p-6 rounded-md mx-auto max-w-4xl mt-4 relative">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight">{title}</h3>
      </div>
      <div className="space-y-4">
        {children}
      </div>
      <div className={`absolute top-4 right-4 ${iconBg} rounded-full p-2 border-2 border-tech-black`}>
        {icon}
      </div>
    </div>
  );
};

export default EventCategory;
