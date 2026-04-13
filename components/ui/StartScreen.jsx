'use client';

export default function StartScreen({ onStart }) {
  return (
    <div className="w-full max-w-md text-center animate-in fade-in duration-500">
      <div className="space-y-8">
        {/* Decorative flowers */}
        <div className="flex justify-center gap-3 text-4xl">
          <span>🌸</span>
          <span>🌷</span>
          <span>🌹</span>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
            A small gift of appreciation
          </h1>
          <div className="text-muted-foreground text-lg font-light text-center">
 <p className="text-muted-foreground text-lg font-light text-center space-y-1">
  <span className="block text-red-400">From Vyom</span>
  <span className="block text-red-500 font-medium">To Ishita</span>
</p>
</div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          Start
        </button>

        {/* Bottom decorative text */}
        <p className="text-lg text-muted-foreground italic">
          Take your time, no rush
        </p>
      </div>
    </div>
  );
}
