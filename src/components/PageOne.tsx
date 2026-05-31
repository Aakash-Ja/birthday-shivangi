import { Button } from "@/components/ui/button";
import { Heart, ChevronRight, Sparkles } from "lucide-react";
import love5 from "@/assets/romantic/love2.jpeg";

interface PageOneProps {
  onNext: () => void;
  name: string;
}

const PageOne = ({ onNext, name }: PageOneProps) => {
  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col md:flex-row relative pt-16 md:pt-24 px-4 md:px-0 gap-4">
      {/* Left side: Image - Fixed below header */}
      <div className="w-full md:w-1/2 h-[35vh] md:h-[calc(100vh-8rem)] relative overflow-hidden shrink-0 rounded-[2.5rem] md:rounded-r-[3rem] shadow-xl md:ml-4 self-start">
        <img 
          src={love5} 
          alt="Our Love" 
          className="w-full h-full object-cover object-center animate-scaleIn opacity-100"
          style={{ objectPosition: "center 32%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10" />
      </div>

      {/* Right side: Card Content - Scrollable below header */}
      <div className="w-full md:w-1/2 h-auto md:h-[calc(100vh-6rem)] flex items-start justify-center p-4 md:p-12 z-10 overflow-y-auto md:overflow-y-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 shadow-soft border border-rose-light/30 animate-scaleIn text-center max-w-xl w-full mb-8 md:mb-12">
          {/* Animated heart icon */}
          <div className="mb-6 md:mb-8 animate-heartbeat inline-block">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-rose to-rose-light shadow-glow">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
            </div>
          </div>

          {/* Main heading */}
          <div className="animate-fadeInUp">
            <p className="text-rose font-body text-xl md:text-2xl font-bold mb-2 md:mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              My Dearest
              <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
            </p>
            <h1 className="font-display text-4xl md:text-7xl text-foreground mb-2 md:mb-4 leading-tight font-bold">
              Forever Yours,
            </h1>
            <h2 className="font-display text-3xl md:text-6xl text-rose italic mb-6 md:mb-10 font-bold">
              {name}
            </h2>
          </div>

          {/* Quote */}
          <p className="text-lg md:text-2xl text-foreground font-body mb-8 md:mb-12 animate-fadeInUp italic font-bold leading-relaxed" style={{ animationDelay: "0.2s" }}>
            "Every moment with you is a beautiful dream come true."
          </p>

          {/* CTA Button */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={onNext}
              variant="rose"
              size="lg"
              className="group px-8 py-6 md:px-12 md:py-10 text-xl md:text-2xl rounded-full shadow-lg font-bold hover:scale-105 transition-transform w-full md:w-auto"
            >
              Enter My Heart
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
