'use client';

export default function QuestionCard({
  hint,
  userAnswer,
  onAnswerChange,
  onSubmit,
  onKeyPress,
  error,
  answered,
  disabled,
  correctAnswer = '',
}) {
  const answerStructure = correctAnswer || '';

  return (
    <div className="relative">
  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl"></div>
    <div className="bg-card/80 backdrop-blur-md rounded-3xl shadow-xl border border-primary p-8 space-y-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground/80 font-medium uppercase tracking-wide">
          Hint
        </p>
        <p className="text-xl md:text-2xl text-primary font-semibold tracking-tight">
          {hint}
        </p>
      </div>

      {/* Blanks */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 min-h-12 items-center justify-center">
          {answerStructure.split('').map((char, index) => {
            const userChar = userAnswer[index];

            if (char === ' ') {
              return <div key={index} className="w-4 h-8 md:h-10" />;
            }

            return (
              <div
                key={index}
                className={`w-6 h-8 md:w-8 md:h-10 flex items-center justify-center text-lg font-semibold rounded border
                  ${
                    userChar
                      ? 'text-primary bg-primary/5 border-primary/20'
                      : 'text-muted-foreground bg-muted border-muted-foreground/30'
                  }
                `}
              >
                {userChar || '_'}
              </div>
            );
          })}
        </div>

        {/* Input */}
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => {
            if (e.target.value.length <= correctAnswer.length) {
              onAnswerChange(e.target.value);
            }
          }}
          onKeyDown={onKeyPress}
          disabled={disabled}
          autoFocus
          placeholder="Type your answer..."
          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="p-3 bg-accent/10 text-accent rounded-lg text-sm font-medium animate-in fade-in duration-200">
          {error}
        </div>
      )}

      {/* Button */}
      <button
        onClick={onSubmit}
        disabled={disabled || userAnswer.trim().length === 0}
        className="w-full px-6 py-3 bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground rounded-lg font-medium transition-all duration-300 disabled:cursor-not-allowed"
      >
        {answered ? 'Next →' : 'Submit'}
      </button>
    </div>
    </div>
  );
}