'use client';

import { useState } from 'react';

const FLOWERS = ['🌸', '🌷', '🌹', '🌼', '💐'];

export default function FlowerRain() {
  const [flowers] = useState(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      emoji: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
      left: Math.random() * 100,
      top: -10 - Math.random() * 20,
      duration: 10,
      delay: Math.random() * 1,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute text-3xl opacity-80"
          style={{
            left: `${flower.left}%`,
            top: `${flower.top}vh`,
            animation: `fall ${flower.duration}s linear ${flower.delay}s forwards`,
          }}
        >
          {flower.emoji}
        </div>
      ))}

      {/* IMPORTANT: animation */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}