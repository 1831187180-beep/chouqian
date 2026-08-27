import React from 'react';
import { motion } from 'motion/react';

interface PotteryJarProps {
  isDrawing: boolean;
  onDraw?: () => void;
}

export const PotteryJar: React.FC<PotteryJarProps> = ({ isDrawing, onDraw }) => {
  return (
    <div
      id="fortune-jar-container"
      onClick={!isDrawing ? onDraw : undefined}
      className={`relative w-40 h-56 mx-auto flex flex-col items-center justify-end select-none ${
        !isDrawing ? 'cursor-pointer group' : ''
      }`}
    >
      {/* Emerging stick during drawing animation */}
      <motion.div
        id="emerging-bamboo-slip"
        className="absolute z-10 w-2.5 h-36 bg-[#8e9b8b] rounded-t-sm shadow-xs flex flex-col items-center justify-start pt-1.5"
        initial={{ y: 20, opacity: 0 }}
        animate={
          isDrawing
            ? {
                y: -95,
                opacity: [0, 1, 1],
                rotate: [0, -2, 2, 0],
                transition: { duration: 1.2, ease: [0.175, 0.885, 0.32, 1.275] },
              }
            : { y: 20, opacity: 0 }
        }
      >
        <div className="w-1 h-3 bg-[#fdfcf8]/40 rounded-full" />
      </motion.div>

      {/* Jar & inner sticks wrapper */}
      <motion.div
        id="fortune-jar-body"
        className="relative w-32 h-44 flex items-end justify-center"
        animate={
          isDrawing
            ? {
                rotate: [0, -3, 3, -2, 2, 0],
                x: [0, -2, 2, -1, 1, 0],
                transition: { duration: 1.1, ease: 'easeInOut' },
              }
            : {
                rotate: [0, 0.4, -0.4, 0],
                transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
              }
        }
      >
        {/* Sticks inside pot */}
        <div className="absolute top-1 w-24 h-28 flex justify-center items-end gap-2.5 pointer-events-none z-0">
          <div className="w-2 h-24 bg-[#8e9b8b]/75 rounded-t-sm -rotate-10 transform origin-bottom" />
          <div className="w-2 h-26 bg-[#8e9b8b]/85 rounded-t-sm -rotate-3 transform origin-bottom" />
          <div className="w-2 h-28 bg-[#8e9b8b] rounded-t-sm rotate-2 transform origin-bottom" />
          <div className="w-2 h-25 bg-[#8e9b8b]/75 rounded-t-sm rotate-10 transform origin-bottom" />
        </div>

        {/* Bamboo / Ceramic Pot Body */}
        <div className="relative z-20 w-28 h-36 border-2 border-[#e8e4d9] rounded-t-lg rounded-b-[48px] bg-gradient-to-b from-[#f9f7f0] to-[#f0ede4] shadow-xs overflow-hidden flex flex-col items-center justify-center">
          {/* Subtle minimal accent line */}
          <div className="w-12 h-px bg-[#e8e4d9] opacity-70 mb-2" />
          <div className="text-[11px] font-serif text-[#4a453c]/40 tracking-widest">
            籤
          </div>
          <div className="w-8 h-px bg-[#e8e4d9] opacity-70 mt-2" />
        </div>
      </motion.div>

      {/* Jar base subtle shadow */}
      <div className="w-24 h-2 bg-[#4a453c]/5 rounded-[50%] blur-[2px] -mt-1 z-0" />
    </div>
  );
};

