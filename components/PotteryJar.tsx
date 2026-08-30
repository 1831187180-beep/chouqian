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
        className="absolute z-10 w-2.5 h-36 bg-[var(--accent)] rounded-t-sm shadow-xs flex flex-col items-center justify-start pt-1.5"
        initial={{ y: 20, opacity: 0 }}
        animate={
          isDrawing
            ? {
                y: -95,
                opacity: [0, 1, 1],
                rotate: [0, -2, 2, 0],
                transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
              }
            : { y: 20, opacity: 0 }
        }
      >
        <div className="w-1 h-3 bg-white/40 dark:bg-black/30 rounded-full" />
      </motion.div>

      {/* Jar & inner sticks wrapper */}
      <motion.div
        id="fortune-jar-body"
        className="relative w-32 h-44 flex items-end justify-center"
        animate={
          isDrawing
            ? {
                rotate: [0, -2.5, 2.5, -1.8, 1.8, -1, 1, 0],
                x: [0, -1.8, 1.8, -1.2, 1.2, 0],
                transition: { duration: 1.35, ease: 'easeInOut' },
              }
            : {
                rotate: [0, 0.3, -0.3, 0],
                transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
              }
        }
      >
        {/* Sticks inside pot */}
        <div className="absolute top-1 w-24 h-28 flex justify-center items-end gap-2.5 pointer-events-none z-0">
          <div className="w-2 h-24 bg-[var(--accent)] opacity-75 rounded-t-sm -rotate-10 transform origin-bottom" />
          <div className="w-2 h-26 bg-[var(--accent)] opacity-85 rounded-t-sm -rotate-3 transform origin-bottom" />
          <div className="w-2 h-28 bg-[var(--accent)] rounded-t-sm rotate-2 transform origin-bottom" />
          <div className="w-2 h-25 bg-[var(--accent)] opacity-75 rounded-t-sm rotate-10 transform origin-bottom" />
        </div>

        {/* Bamboo / Ceramic Pot Body */}
        <div className="relative z-20 w-28 h-36 border-2 border-[var(--border)] rounded-t-lg rounded-b-[48px] bg-gradient-to-b from-[var(--jar-from)] to-[var(--jar-to)] shadow-xs overflow-hidden flex flex-col items-center justify-center transition-colors duration-400">
          {/* Subtle minimal accent line */}
          <div className="w-12 h-px bg-[var(--border)] opacity-70 mb-2" />
          <div className="text-[11px] font-serif text-[var(--ink)] opacity-40 tracking-widest">
            籤
          </div>
          <div className="w-8 h-px bg-[var(--border)] opacity-70 mt-2" />
        </div>
      </motion.div>

      {/* Jar base subtle shadow */}
      <div className="w-24 h-2 bg-[var(--ink)] opacity-5 dark:opacity-20 rounded-[50%] blur-[2px] -mt-1 z-0 transition-opacity duration-400" />
    </div>
  );
};


