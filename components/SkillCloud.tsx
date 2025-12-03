import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

export const SkillCloud: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ 
            scale: 1.1, 
            rotate: Math.random() * 6 - 3,
          }}
          className={`
            px-4 py-2 rounded-full text-sm font-bold border-2 border-ink bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]
            cursor-default
          `}
        >
          <div className="flex flex-col items-center">
            <span>{skill.name}</span>
            {/* Simple progress bar looking like a pen stroke */}
            <div className="w-full h-1 bg-gray-100 mt-1 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-accent opacity-60" 
                    style={{ width: `${skill.level}%` }}
                />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};