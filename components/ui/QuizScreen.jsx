'use client';

import { useState } from 'react';
import ProgressBar from './ProgressBar.jsx';
import QuestionCard from './QuestionCard.jsx';

const QUESTIONS = [
  {
    hint: 'Who do I generally ask about apart from you everyday?',
    answer: 'ary',
  },
  {
    hint: 'The first quote which we had sync to and our go to quote',
    answer: 'go with the flow',
  },
  {
    hint: 'Quote for no heartbreaks',
    answer: 'no expectations no disappointments',
  },
  {
    hint: 'Which key is most important for us?',
    answer: 'communication',
  },
];

export default function QuizScreen({ onComplete, onBack }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');
  const [answered, setAnswered] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleSubmit = () => {
    if (!userAnswer.trim()) return; // ✅ prevent empty submit

    const normalizedAnswer = userAnswer.toLowerCase().trim();
    const normalizedCorrect = currentQuestion.answer.toLowerCase().trim();

    if (normalizedAnswer === normalizedCorrect) {
      setError('');
      setAnswered(true);

      setTimeout(() => {
        if (currentQuestionIndex < QUESTIONS.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1); // ✅ safe update
          setUserAnswer('');
          setAnswered(false);
        } else {
          onComplete();
        }
      }, 800);
    } else {
      setError('Not quite right. Try again!');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !answered) {
      handleSubmit();
    }
  };

  return (
    
<div className="w-full max-w-2xl relative space-y-8 animate-in fade-in duration-500">
        <div className="w-full relative">
  <button
    onClick={onBack}
    className="absolute top-0 left-0 text-sm text-muted-foreground hover:text-foreground transition"
  >
    ← Back
  </button>
</div>
      
      {/* Progress bar */}
      <ProgressBar 
        current={currentQuestionIndex} 
        total={QUESTIONS.length} 
      />

      {/* Question */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-sm text-secondary font-medium">
            Question {currentQuestionIndex + 1} of {QUESTIONS.length}
          </span>
        </div>

        <QuestionCard
          hint={currentQuestion.hint}
          userAnswer={userAnswer}
          onAnswerChange={setUserAnswer}
          onSubmit={handleSubmit}
          onKeyPress={handleKeyPress}
          error={error}
          answered={answered}
          disabled={answered}
          correctAnswer={currentQuestion.answer}
        />

        {/* Success */}
        {answered && (
          <div className="text-center animate-in fade-in duration-300">
            <p className="text-lg text-secondary font-medium">✨ Correct!</p>
          </div>
        )}

        {/* Error */}
        {error && !answered && (
          <div className="text-center">
            <p className="text-muted-foreground text-sm">{error}</p>
          </div>
        )}
      </div>

      {/* Hint */}
      {!answered && (
        <p className="text-center text-xs text-muted-foreground">
          Press Enter or click Submit
        </p>
      )}
    </div>
  );
}