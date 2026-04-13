'use client';

import { useEffect, useState } from 'react';
import FlowerRain from './FlowerRain.jsx';

export default function FinalScreen() {
  const [showFlowers, setShowFlowers] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlowers(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md text-center space-y-10 animate-in fade-in duration-700">
      
      {/* 🌸 Glow background */}
      <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl"></div>

      {/* Flower rain */}
      {showFlowers && <FlowerRain />}

      {/* 💐 Bouquet */}
      <div className="relative z-10 text-7xl md:text-8xl animate-in zoom-in duration-700 delay-300">
        💐
      </div>

      {/* Message */}
      <div className="relative z-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
        
        <h2 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight">
          This bouquet is for you
        </h2>

        <div className="bg-card/80 backdrop-blur-md rounded-3xl shadow-xl border border-primary p-8 space-y-1">
          
          <p className="text-lg text-foreground leading-relaxed">
            There&apos;s something special about a bond where you can share anything and everything. Where there is understanding and laughter comes easy.
          </p>

          <p className="text-lg text-foreground leading-relaxed">
            Thank you for being someone I can be completely comfortable with. For the conversations that matter, the silly moments, and the quiet understanding between us.
          </p>

          <p className="text-primary font-semibold text-lg pt-2">
            Here&apos;s to many more shared moments , 5am conversations and a bond that continues to bloom. 🌸
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 space-y-4 animate-in fade-in duration-700 delay-700">
        <div className="flex justify-center gap-2 text-3xl">
          {/* <span>🌸</span>
          <span>🌷</span>
          <span>🌹</span> */}
        </div>
        <p className="text-sm text-muted-foreground">
          With warmth and appreciation ✨
        </p>
        <p className="text-sm text-muted-foreground">
            From Vyom 👀 
            To Ishitatata....
        </p>
      </div>
    </div>
  );
}