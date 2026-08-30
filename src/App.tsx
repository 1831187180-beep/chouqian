import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { PotteryJar } from './components/PotteryJar';
import { FortuneCard } from './components/FortuneCard';
import { drawRandomFortune } from './data/fortuneData';
import { FortuneResult } from './types';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fortune_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
  });

  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [currentFortune, setCurrentFortune] = useState<FortuneResult | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('fortune_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

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
    }, 1400);
  };

  const handleDrawAgain = () => {
    handleDraw();
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] flex flex-col justify-between items-center px-4 py-8 sm:py-12 selection:bg-[var(--action-bg)] selection:text-[var(--ink)] font-serif relative transition-colors duration-400">
      {/* Top Ambient Header with Theme Toggle */}
      <header className="w-full max-w-xl flex items-center justify-between pt-1 pb-3 px-2">
        <div className="w-8" />
        
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-[11px] tracking-[0.3em] text-[var(--ink)] opacity-40 font-serif">
            今日小签
          </div>
        </motion.div>

        {/* Minimal Sun/Moon Theme Switcher */}
        <button
          id="theme-toggle-button"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? '切换为暗色模式' : '切换为浅色模式'}
          title={theme === 'light' ? '暗色模式' : '浅色模式'}
          className="theme-toggle-btn w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none"
        >
          <motion.div
            key={theme}
            initial={{ rotate: -30, opacity: 0, scale: 0.85 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 30, opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25 }}
          >
            {theme === 'light' ? (
              <Moon className="w-3.5 h-3.5 opacity-70 hover:opacity-100 transition-opacity" />
            ) : (
              <Sun className="w-3.5 h-3.5 opacity-80 hover:opacity-100 transition-opacity" />
            )}
          </motion.div>
        </button>
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
              className="text-2xl sm:text-[26px] tracking-[0.1em] text-[var(--ink)] font-serif font-normal"
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
      <footer className="w-full max-w-xl text-center pt-8 pb-3 text-xs tracking-[0.08em] text-[var(--ink)] opacity-40 font-serif">
        <p>随便抽一张就好。</p>
      </footer>
    </div>
  );
}

