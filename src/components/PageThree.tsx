import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Gift, PartyPopper, Music, Heart, Sparkles, Moon, Sun } from "lucide-react";
import love6 from "@/assets/romantic/love6.jpeg";

interface PageThreeProps {
  onNext: () => void;
}

const wishes = [
  { icon: Heart, text: "I promise to love you more with every heartbeat", color: "text-rose" },
  { icon: Star, text: "I promise to support your dreams and aspirations", color: "text-gold" },
  { icon: Moon, text: "I promise to be your comfort in the darkest nights", color: "text-rose" },
  { icon: Sun, text: "I promise to be your sunshine on cloudy days", color: "text-gold" },
  { icon: Sparkles, text: "I promise to keep the magic alive in our relationship", color: "text-rose" },
  { icon: Gift, text: "I promise to cherish every moment we spend together", color: "text-gold" },
  { icon: Music, text: "I promise to dance with you through life's ups and downs", color: "text-rose" },
  { icon: PartyPopper, text: "I promise to celebrate every small victory of yours", color: "text-gold" },
];

const PageThree = ({ onNext }: PageThreeProps) => {
  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col md:flex-row items-center justify-center relative pt-16 md:pt-24 px-4 md:px-0 gap-4">
      {/* Left side: Background Image */}
      <div className="w-full md:w-1/2 h-[35vh] md:h-[calc(100vh-8rem)] relative overflow-hidden shrink-0 rounded-[2.5rem] md:rounded-r-[3rem] shadow-xl md:ml-4 self-start">
        <img 
          src={love6} 
          alt="Promises" 
          className="w-full h-full object-cover object-center animate-scaleIn opacity-100"
          style={{ objectPosition: "center 35%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10" />
      </div>

      {/* Right side: Promises Content */}
      <div className="w-full md:w-1/2 h-auto md:h-[calc(100vh-6rem)] flex items-start justify-center p-4 md:p-12 z-10 overflow-y-auto md:overflow-y-auto">
        <div className="max-w-xl w-full py-6 md:py-10">
          <div className="bg-white/85 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-soft border border-rose-light/30 animate-fadeInUp w-full mb-16 md:mb-20">
            {/* Header */}
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-rose/10 mb-4 md:mb-6 text-rose animate-heartbeat">
                <Sparkles className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h2 className="font-display text-3xl md:text-6xl text-foreground mb-2 md:mb-4 font-bold leading-tight">
                My Promises <br/><span className="text-rose italic">to You</span>
              </h2>
            </div>

            {/* Wishes grid */}
            <div className="grid grid-cols-1 gap-3 md:gap-4 mb-8 md:mb-10">
              {wishes.map((wish, index) => (
                <div
                  key={index}
                  className="bg-rose/5 p-3 md:p-4 rounded-2xl border border-rose-light/10 animate-fadeInUp hover:scale-105 transition-transform duration-300 flex items-center gap-4 md:gap-5"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className={`p-2.5 md:p-3 rounded-xl bg-white ${wish.color} shrink-0 shadow-sm`}>
                    <wish.icon className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  </div>
                  <p className="font-body text-base md:text-lg text-foreground font-bold italic leading-tight">
                    {wish.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Next button */}
            <div className="text-center px-2 md:px-0">
              <Button
                onClick={onNext}
                variant="rose"
                size="lg"
                className="group px-8 py-6 md:px-12 md:py-10 text-xl md:text-2xl rounded-full shadow-lg font-bold hover:scale-105 transition-transform w-full md:w-auto"
              >
                A Glimpse of Us
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
