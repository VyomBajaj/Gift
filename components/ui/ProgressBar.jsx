'use client';

export default function ProgressBar({ current, total }) {
  const progress = total > 0 ? Math.min((current / total) * 100, 100) : 0;

  return (
    <div className="space-y-2">
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground text-center">
        {current} of {total} completed
      </p>
    </div>
  );
}