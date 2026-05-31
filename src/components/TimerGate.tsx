import { useState, useEffect } from "react";
import { Heart, Sparkles, Timer } from "lucide-react";
import love10 from "@/assets/romantic/love10.jpeg";

interface TimerGateProps {
  children: React.ReactNode;
  targetDate: string; // ISO format: YYYY-MM-DD
}

const TimerGate = ({ children, targetDate }: TimerGateProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference <= 0) {
        setIsReady(true);
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
      if (remaining === null) {
        clearInterval(timer);
      }
    }, 1000);

    const initialRemaining = calculateTimeLeft();
    setTimeLeft(initialRemaining);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isReady) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col md:flex-row items-center justify-center relative px-4 md:px-0 gap-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={love10} 
          alt="Coming Soon" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/90" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto w-full p-4 md:p-6">
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] shadow-soft p-6 md:p-16 border border-rose-light/30 animate-scaleIn text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-rose/10 mb-6 md:mb-8 text-rose animate-pulse">
              <Timer className="w-8 h-8 md:w-12 md:h-12" />
          </div>
          <h1 className="font-display text-2xl md:text-5xl text-foreground mb-4 md:mb-6 font-bold leading-tight">
            A Romantic Surprise <br/><span className="text-rose">Awaits...</span>
          </h1>
          
          <p className="text-foreground/80 font-body text-lg md:text-2xl mb-8 md:mb-12 italic font-medium">
            The magic begins in:
          </p>

          {timeLeft && (
            <div className="grid grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Mins", value: timeLeft.minutes },
                { label: "Secs", value: timeLeft.seconds },
              ].map((unit, i) => (
                <div key={i} className="flex flex-col bg-white/50 p-2 md:p-4 rounded-2xl md:rounded-3xl shadow-sm border border-rose-light/20 transform hover:scale-110 transition-transform">
                  <span className="text-xl md:text-5xl font-display text-rose font-bold">
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[8px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] text-foreground/60 font-bold mt-1 md:mt-2">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-center gap-2 md:gap-4 text-rose animate-heartbeat">
            <Heart className="fill-rose w-5 h-5 md:w-7 md:h-7" />
            <span className="font-body text-base md:text-xl italic font-bold">Patience is the key to love</span>
            <Heart className="fill-rose w-5 h-5 md:w-7 md:h-7" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      {[...Array(6)].map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-rose/20 animate-sparkle pointer-events-none"
          size={15 + i * 15}
          style={{
            top: `${(i * 17) % 90}%`,
            left: `${(i * 13) % 90}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default TimerGate;
