import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DoveSVG = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full text-white drop-shadow-sm opacity-90"
  >
    <path d="M22.5 12.5c-1.5 0-3.5-1-4.5-2.5-1-1.5-2-4-2-4s-.5 2.5-2 4c-1.5 1.5-3.5 2.5-5 2.5 1.5 1 3.5 2 5 2.5 1.5.5 3 2 3 2s.5-2.5 2-4c1-1 3-1.5 4.5-1.5-1.5-1-2.5-2.5-3.5-3.5 1 1 2.5 1.5 2.5 4.5z" />
  </svg>
);

interface DoveProps {
  id: number;
  delay: number;
  xStart: number;
  scale: number;
  duration: number;
}

const FlyingDove: React.FC<DoveProps> = ({ delay, xStart, scale, duration }) => {
  return (
    <motion.div
      className="absolute bottom-[-50px]"
      initial={{ y: '100vh', x: `${xStart}%`, opacity: 0, scale: scale * 0.5 }}
      animate={{
        y: '-20vh',
        x: [`${xStart}%`, `${xStart + 20}%`, `${xStart - 20}%`, `${xStart + 10}%`],
        opacity: [0, 1, 1, 0],
        scale: [scale * 0.5, scale, scale * 0.8],
        rotate: [0, 15, -15, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      style={{ width: `${50 * scale}px`, height: `${50 * scale}px` }}
    >
      <DoveSVG />
    </motion.div>
  );
};

export const DoveBackground: React.FC = () => {
  const [doves, setDoves] = useState<DoveProps[]>([]);
  
  useEffect(() => {
    const doveCount = 8;
    const newDoves: DoveProps[] = [];
    
    for (let i = 0; i < doveCount; i++) {
      newDoves.push({
        id: i,
        delay: i * 3,
        xStart: Math.random() * 100,
        scale: 0.6 + Math.random() * 0.8,
        duration: 20 + Math.random() * 10,
      });
    }
    setDoves(newDoves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Texture Overlay for the desk/background */}
      <div className="absolute inset-0 bg-orange-50/20 mix-blend-overlay"></div>
      
      {doves.map((dove) => (
        <FlyingDove key={dove.id} {...dove} />
      ))}
    </div>
  );
};