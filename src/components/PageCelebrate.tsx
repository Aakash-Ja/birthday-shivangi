import { useState } from "react";
import { Flame, Heart, RefreshCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Confetti from "./Confetti";
import love1 from "@/assets/romantic/love1.jpeg";
import love11 from "@/assets/romantic/love11.jpeg";

interface PageCelebrateProps {
  name: string;
  onRestart: () => void;
}

const quotes = [
  "Whatever our souls are made of, his and mine are the same.",
  "You are my today and all of my tomorrows.",
  "In all the world, there is no heart for me like yours.",
  "I love you not only for what you are, but for what I am when I am with you."
];

const PageCelebrate = ({ name, onRestart }: PageCelebrateProps) => {
  const [candlesLit, setCandlesLit] = useState([true, true, true, true, true]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [allBlown, setAllBlown] = useState(false);

  const blowCandle = (index: number) => {
    const newCandles = [...candlesLit];
    newCandles[index] = false;
    setCandlesLit(newCandles);

    if (newCandles.every(c => !c)) {
      setAllBlown(true);
      setShowConfetti(true);
    }
  };

  const relightCandles = () => {
    setCandlesLit([true, true, true, true, true]);
    setAllBlown(false);
  };

  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col md:flex-row items-center justify-center relative px-4 md:px-0 gap-4 pt-16 md:pt-24">
      {showConfetti && <Confetti />}

      {/* Left side: Hero background image */}
      <div className="w-full md:w-1/2 h-[35vh] md:h-[calc(100vh-8rem)] relative overflow-hidden shrink-0 rounded-[2.5rem] md:rounded-r-[3rem] shadow-xl md:ml-4 self-start">
        <img 
          src={love11} 
          alt="Forever" 
          className="w-full h-full object-cover object-center animate-scaleIn opacity-100"
          style={{ objectPosition: "center 10%" }}
       />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10" />
      </div>

      {/* Right side: Celebration Content */}
      <div className="w-full md:w-1/2 h-auto md:h-[calc(100vh-6rem)] flex items-start justify-center p-4 md:p-12 z-10 overflow-y-auto md:overflow-y-auto">
        <div className="bg-white/85 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-soft border border-rose-light/30 animate-scaleIn w-full max-w-xl text-center mb-20 md:mb-32">
          {/* Header */}
          <div className="mb-8 md:mb-10 animate-fadeInUp">
            <h2 className="font-display text-2xl md:text-6xl text-foreground mb-4 font-bold leading-tight">
              Make a Wish! 🌟
            </h2>
          </div>

          {/* Interaction area */}
          <div className="relative mb-8 md:mb-10 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto max-w-[280px] md:max-w-sm bg-white p-3 md:p-4 rounded-[2rem] md:rounded-[2.5rem] shadow-glow border-4 border-rose-light/20">
              <img
                src={love1}
                alt="Our Moment"
                className="w-full aspect-square object-cover rounded-[1.5rem] md:rounded-[2rem]"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose/60 to-transparent rounded-[1.5rem] md:rounded-[2rem]" />
              
              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 md:gap-6">
                {candlesLit.map((lit, index) => (
                  <button
                    key={index}
                    onClick={() => lit && blowCandle(index)}
                    className={`transition-all duration-300 ${lit ? "cursor-pointer hover:scale-125" : "cursor-default"}`}
                    disabled={!lit}
                  >
                    <div className="flex flex-col items-center">
                      {lit ? (
                        <Flame
                          className="w-6 h-6 md:w-12 md:h-12 text-amber-400 animate-pulse drop-shadow-lg"
                          style={{
                            filter: "drop-shadow(0 0 15px rgba(251, 191, 36, 1))",
                            animationDelay: `${index * 0.1}s`
                          }}
                        />
                      ) : (
                        <Heart className="w-6 h-6 md:w-12 md:h-12 text-white fill-white opacity-90 animate-heartbeat" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="mb-8 md:mb-10 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            {!allBlown ? (
              <p className="text-rose font-body font-bold text-base md:text-xl italic">
                {candlesLit.filter(c => c).length} candles remaining...
              </p>
            ) : (
              <div className="space-y-4">
                <span className="font-display text-xl md:text-3xl font-bold text-rose">Our love is eternal!</span>
                <div className="flex items-center justify-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 md:w-6 md:h-6 text-rose animate-heartbeat fill-rose" />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quote Cards - EXPANDED */}
          <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
            {quotes.map((quote, i) => (
              <div 
                key={i}
                className="bg-rose/5 p-5 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] border border-rose-light/20 animate-fadeInUp shadow-inner" 
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                {i === 0 && <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-rose mx-auto mb-3 md:mb-4 animate-pulse" />}
                <p className="font-display text-lg md:text-2xl text-foreground font-bold italic leading-relaxed text-center">
                  "{quote}"
                </p>
                {i === quotes.length - 1 && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-rose font-bold text-sm md:text-base">
                    <Heart size={14} fill="currentColor" />
                    <span>Always yours, {name}</span>
                    <Heart size={14} fill="currentColor" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-4 animate-fadeInUp" style={{ animationDelay: "1s" }}>
            {allBlown && (
              <Button variant="rose" onClick={relightCandles} className="rounded-full px-6 py-4 md:px-12 md:py-8 text-lg md:text-xl font-bold shadow-lg transform hover:scale-105 transition-transform">
                <Flame className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                Light Again
              </Button>
            )}
            <Button variant="ghost" onClick={onRestart} className="text-foreground/40 hover:text-rose font-bold text-base md:text-lg rounded-full">
              <RefreshCw className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Restart Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCelebrate;
