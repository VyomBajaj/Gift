"use client";

import { useState, useEffect } from "react";
import StartScreen from "@/components/ui/StartScreen.jsx";
import QuizScreen from "@/components/ui/QuizScreen.jsx";
import FinalScreen from "@/components/ui/FinalScreen.jsx";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState("start");

  // Handle hydration + restore only final state
useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setMounted(true);

  const savedStep = localStorage.getItem("step");
  if (savedStep === "final" && step !== "start") {
  setStep("final");
}
}, []);

  // Save progress (only matters when reaching final)
  useEffect(() => {
    if (mounted && step === "final") {
      localStorage.setItem("step", "final");
    }
  }, [step, mounted]);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-rose-50 via-orange-50 to-pink-100">
      
      {step === "start" && (
        <StartScreen onStart={() => setStep("quiz")} />
      )}

      {step === "quiz" && (
        <QuizScreen 
  onComplete={() => setStep("final")} 
  onBack={() => {
  localStorage.removeItem("step"); // 🔥 important
  setStep("start");
}}
/>
      )}

      {step === "final" && <FinalScreen />}
      
    </main>
  );
}