import { Button } from "@/components/ui/button";
import { ChevronRight, Heart } from "lucide-react";
import love11 from "@/assets/romantic/love11.jpeg";

interface PageTwoProps {
  onNext: () => void;
  name: string;
}

const loveNotes = [
  {
    title: "My Dearest",
    content: "Words often fail to capture the depth of my feelings for you, but today I want to try. From the moment you entered my life, everything changed.",
    rotate: -1,
  },
  {
    title: "The Little Things",
    content: "It's the way you smile when you're happy, the kindness in your eyes, and the warmth of your presence. Every second feels like a gift.",
    rotate: 1,
  },
  {
    title: "My Promise",
    content: "I promise to love you, cherish you, and stand by you through every season of life. You are not just my love; you are my home.",
    rotate: -1,
  },
  {
    title: "Forever",
    content: "You are my today and all of my tomorrows. I look forward to every sunrise we'll share together. You are my everything.",
    rotate: 1,
  }
];

const PageTwo = ({ onNext, name }: PageTwoProps) => {
  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col md:flex-row items-center justify-center relative pt-16 md:pt-24 px-4 md:px-0 gap-4">
      {/* Left side: Background Image */}
      <div className="w-full md:w-1/2 h-[35vh] md:h-[calc(100vh-8rem)] relative overflow-hidden shrink-0 rounded-[2.5rem] md:rounded-r-[3rem] shadow-xl md:ml-4 self-start">
        <img 
          src={love11} 
          alt="Love Letter" 
          className="w-full h-full object-cover object-center animate-scaleIn opacity-100"
          style={{ objectPosition: "center 10%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10" />
      </div>

      {/* Right side: Letter Content */}
      <div className="w-full md:w-1/2 h-auto md:h-[calc(100vh-6rem)] flex items-start justify-center p-4 md:p-12 z-10 overflow-y-auto md:overflow-y-auto">
        <div className="max-w-xl w-full pb-16 md:pb-20">
          <div className="text-center mb-8 md:mb-12 animate-fadeInUp">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-rose/10 mb-4 md:mb-6 text-rose animate-heartbeat">
              <Heart className="w-8 h-8 md:w-10 md:h-10 fill-rose/20" />
            </div>
            <h2 className="font-display text-3xl md:text-6xl text-foreground font-bold leading-tight">Letters from <br/><span className="text-rose">My Heart</span></h2>
          </div>

          {/* Letter cards */}
          <div className="grid grid-cols-1 gap-6 md:gap-8 mb-8 md:mb-12 px-2 md:px-0">
            {loveNotes.map((note, index) => (
              <div
                key={index}
                className="bg-white/85 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-soft border border-rose-light/30 animate-fadeInUp hover:scale-105 transition-transform duration-500"
                style={{ 
                  animationDelay: `${0.2 * (index + 1)}s`,
                  transform: `rotate(${note.rotate}deg)`
                }}
              >
                <h3 className="font-display text-2xl md:text-3xl text-rose mb-2 md:mb-4 font-bold tracking-tight">{note.title}</h3>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed italic font-bold">
                  "{note.content}"
                </p>
              </div>
            ))}
          </div>

          {/* Next button */}
          <div className="text-center animate-fadeInUp px-4 md:px-0" style={{ animationDelay: "1s" }}>
            <Button
              onClick={onNext}
              variant="rose"
              size="lg"
              className="group px-8 py-6 md:px-12 md:py-10 text-xl md:text-2xl rounded-full shadow-lg font-bold hover:scale-105 transition-transform w-full md:w-auto"
            >
              See Our Journey
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
