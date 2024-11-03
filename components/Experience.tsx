import { workExperience } from '@/data';
import React from 'react';
import { Button } from './ui/MovingBorder';

const Experience = () => {
  return (
    <div className='pb-20' id='experience'>
      <h1 className='heading'>
        My <span className='text-purple'>Work Experience</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 1000) + 10000}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark:border-slate-800 relative group'
          >
            <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
              <img src={card.thumbnail} alt={card.title} className='lg:w-32 md:w-20 w-16' />
              <div className='lg:ms-5'>
                <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                <p className='text-start text-sm mt-1 font-medium text-gray-400'>
                  {card.company} &bull; {card.duration}
                </p>
                <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
              </div>
            </div>

            {/* Overlay for keypoints on hover with scrollable area */}
            <div className='absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5 rounded-2xl'>
              <div className='max-h-40 overflow-y-auto p-3 w-full'>
                <ul className='text-left text-sm space-y-2 text-white'>
                  {card.keypoints.map((point, index) => (
                    <li key={index} className='list-disc list-inside'>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
