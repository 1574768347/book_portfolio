import React from 'react';
import { motion } from 'framer-motion';

export const HandDrawnWave: React.FC = () => {
  return (
    <div className="w-full overflow-hidden leading-none rotate-180 absolute bottom-0 left-0 z-0">
      <motion.svg
        className="relative block w-[200%] h-[150px] md:h-[200px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-white/40"
        ></path>
        <path
           d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
           className="fill-sky-100/30"
           transform="translate(-50, 10)"
        ></path>
      </motion.svg>
    </div>
  );
};

export const HandDrawnSeparator: React.FC = () => (
  <div className="w-full flex justify-center py-8 opacity-50">
    <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 10C30 5 50 15 80 10C110 5 130 15 160 10C180 6 198 10 198 10" stroke="#78e08f" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
    </svg>
  </div>
);

export const ScrollIndicator: React.FC = () => (
    <motion.div 
        initial={{ y: 0, opacity: 0.5 }}
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2 z-10"
    >
        <span className="text-xs tracking-widest font-serif">SCROLL</span>
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="10" cy="8" r="2" fill="currentColor"/>
        </svg>
    </motion.div>
);