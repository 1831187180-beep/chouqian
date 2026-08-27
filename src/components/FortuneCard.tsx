import React from 'react';
import { motion } from 'motion/react';
import { FortuneResult } from '../types';

interface FortuneCardProps {
  fortune: FortuneResult;
  onDrawAgain: () => void;
}

export const FortuneCard: React.FC<FortuneCardProps> = ({ fortune, onDrawAgain }) => {
  return (
    <motion.div
      id="fortune-card-wrapper"
      initial={{ opacity: 0, y: 20, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[420px] mx-auto my-4 flex flex-col items-center"
    >
      {/* Editorial Result Card */}
      <div
        id="fortune-paper-slip"
        className="editorial-paper rounded-[2px] w-full p-8 sm:p-10 relative flex flex-col items-center text-center text-[#4a453c]"
      >
        {/* Subtle corner watermark */}
        <div
          id="corner-heart-watermark"
          className="absolute bottom-2.5 right-3 text-[10px] text-[#4a453c]/20 select-none cursor-default font-serif"
          title="🩵💛"
        >
          🩵💛
        </div>

        {/* Top Sign Sub-title */}
        {fortune.signName && (
          <div
            id="fortune-sign-name"
            className="text-[11px] tracking-[0.25em] text-[#4a453c]/50 font-serif mb-1"
          >
            {fortune.signName}
          </div>
        )}

        {/* Fortune Grade / Rank */}
        <div
          id="res-grade"
          className="text-4xl sm:text-5xl font-bold tracking-widest text-[#4a453c] mb-5 font-serif"
        >
          {fortune.rank}
        </div>

        {/* Fortune Poem Text */}
        <div
          id="res-fortune"
          className="text-lg sm:text-xl font-serif text-[#4a453c] leading-relaxed mb-3 tracking-wide"
        >
          「{fortune.poem}」
        </div>

        {/* Action Suggestion Tip */}
        {fortune.action && (
          <div
            id="res-action"
            className="text-[13px] bg-[#eeede4] text-[#4a453c]/80 px-4 py-1 rounded-full mb-6 font-serif"
          >
            {fortune.action}
          </div>
        )}

        {/* Dialogue Box with hairline top border */}
        <div
          id="res-dialogue"
          className="w-full border-t border-[#e8e4d9] pt-6 text-left space-y-3.5"
        >
          {fortune.dialogue.map((item, idx) => (
            <div
              key={idx}
              id={`dialogue-line-${idx}`}
              className="flex flex-col space-y-0.5"
            >
              <span className="font-semibold text-[11px] uppercase tracking-wider text-[#4a453c]/60 font-sans">
                {item.speaker}
              </span>
              <span className="text-[14px] sm:text-[15px] font-serif text-[#4a453c] leading-relaxed pl-1">
                “{item.text}”
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Reset / Draw Again Link Button */}
      <button
        id="draw-again-button"
        onClick={onDrawAgain}
        className="mt-6 text-[13px] tracking-widest text-[#4a453c]/60 hover:text-[#4a453c] underline underline-offset-4 cursor-pointer transition-colors font-serif focus:outline-none"
      >
        {fortune.buttonLabel || '再抽一签'}
      </button>
    </motion.div>
  );
};

