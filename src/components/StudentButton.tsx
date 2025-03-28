
import React from 'react';

interface StudentButtonProps {
  bgColor: string;
  textColor: string;
  text: string;
  link?: string;
  onClick?: () => void;
}

const StudentButton = ({ bgColor, textColor, text, link, onClick }: StudentButtonProps) => {
  // If link is provided, render an anchor tag instead of a button
  if (link) {
    return (
      <a 
        href={link} 
        className={`${bgColor} ${textColor} font-bold py-3 px-6 rounded-md border-4 border-tech-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 inline-block text-center font-mono tracking-wide`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }
  
  // Otherwise, render a regular button
  return (
    <button 
      className={`${bgColor} ${textColor} font-bold py-3 px-6 rounded-md border-4 border-tech-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 font-mono tracking-wide`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default StudentButton;
