import React from 'react';
import { motion } from 'framer-motion';

export const RedFlower: React.FC<{ className?: string }> = ({ className }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={className}
    whileHover={{ scale: 1.1, rotate: 10 }}
  >
    <path d="M50 50 Q30 20 50 10 Q70 20 50 50" fill="#e84a5f" opacity="0.8" />
    <path d="M50 50 Q80 30 90 50 Q80 70 50 50" fill="#ff8da1" opacity="0.8" />
    <path d="M50 50 Q70 80 50 90 Q30 80 50 50" fill="#e84a5f" opacity="0.8" />
    <path d="M50 50 Q20 70 10 50 Q20 30 50 50" fill="#ff8da1" opacity="0.8" />
    <circle cx="50" cy="50" r="5" fill="#f6e58d" />
  </motion.svg>
);

export const ScribbleHighlight: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 20" className={className} preserveAspectRatio="none">
    <path 
      d="M5,15 Q30,5 50,15 T100,10 T150,15 T195,10" 
      fill="none" 
      stroke="#f6e58d" 
      strokeWidth="8" 
      strokeOpacity="0.5"
      strokeLinecap="round"
    />
  </svg>
);

export const MessyCircle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path 
      d="M50,10 C80,10 90,30 90,50 C90,80 70,95 50,90 C20,85 10,60 10,40 C10,15 35,5 55,12" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeDasharray="4 2"
      strokeLinecap="round"
    />
  </svg>
);

export const Tape: React.FC<{ className?: string, color?: string, rotate?: number }> = ({ className, color = "#f0e6d2", rotate = 0 }) => (
  <div 
    className={`absolute h-8 w-24 opacity-80 shadow-sm ${className}`}
    style={{ 
      backgroundColor: color, 
      transform: `rotate(${rotate}deg)`,
      clipPath: "polygon(2% 0%, 98% 0%, 100% 10%, 98% 20%, 100% 30%, 98% 40%, 100% 50%, 98% 60%, 100% 70%, 98% 80%, 100% 90%, 98% 100%, 2% 100%, 0% 90%, 2% 80%, 0% 70%, 2% 60%, 0% 50%, 2% 40%, 0% 30%, 2% 20%, 0% 10%)"
    }}
  />
);

export const StarDoodle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 50 50" className={className}>
    <path 
      d="M25,2 L32,18 L48,18 L36,28 L40,44 L25,36 L10,44 L14,28 L2,18 L18,18 Z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDoodle: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 50" className={className}>
        <path d="M10,25 Q50,5 90,25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M80,18 L90,25 L82,32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);