import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PotteryJar } from './components/PotteryJar';
import { FortuneCard } from './components/FortuneCard';
import { drawRandomFortune } from './data/fortuneData';
import { FortuneResult } from './types';

export default function App() {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [currentFortune, setCurrentFortune] = useState<FortuneResult | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDraw = () => {
    if (isDrawing) return;
    setIsDrawing(true);

    // Smooth soft animation delay before revealing fortune slip
    setTimeout(() => {
      const result = drawRandomFortune();
      setCurrentFortune(result);
      setIsDrawing(false);

      // Smooth scroll down gently to card
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }, 1200);
  };

  const handleDrawAgain = () => {
    handleDraw();
  };

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#4a453c] flex flex-col justify-between items-center px-4 py-10 sm:py-14 selection:bg-[#eeede4] selection:text-[#4a453c] font-serif relative">
      {/* Top Ambient Header */}
      <header className="w-full max-w-xl text-center pt-2 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-1"
        >
          <div className="text-[11px] tracking-[0.3em] text-[#4a453c]/40 font-serif">
            今日小签
          </div>
        </motion.div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-lg flex-1 flex flex-col items-center justify-center my-auto">
        {/* Pottery Jar & Interactive Area */}
        <div className="w-full flex flex-col items-center justify-center space-y-7">
          <PotteryJar isDrawing={isDrawing} onDraw={handleDraw} />

          {/* Prompt Title & Editorial Draw Button */}
          <div className="text-center space-y-6 pt-1">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-2xl sm:text-[26px] tracking-[0.1em] text-[#4a453c] font-serif font-normal"
            >
              今天要不要听一点运气？
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button
                id="main-draw-button"
                onClick={handleDraw}
                disabled={isDrawing}
                className={`editorial-btn px-10 py-2.5 text-[15px] sm:text-base font-serif tracking-[0.15em] rounded-[2px] cursor-pointer focus:outline-none ${
                  isDrawing ? 'opacity-40 cursor-not-allowed' : ''
                }`}
              >
                {isDrawing ? '摇签中…' : '抽一签'}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Drawn Result Display Card */}
        <div ref={cardRef} className="w-full mt-6">
          <AnimatePresence mode="wait">
            {currentFortune && (
              <FortuneCard
                key={currentFortune.id}
                fortune={currentFortune}
                onDrawAgain={handleDrawAgain}
              />
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Editorial Footer Note */}
      <footer className="w-full max-w-xl text-center pt-8 pb-3 text-xs tracking-[0.08em] text-[#4a453c]/40 font-serif">
        <p>随便抽一张就好。</p>
      </footer>
    </div>
  );
}

