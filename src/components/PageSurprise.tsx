import { useState } from "react";
import { Gift, Heart } from "lucide-react";
import love5 from "@/assets/romantic/love5.jpeg";
import { Button } from "./ui/button";

interface PageSurpriseProps {
  name: string;
}

const gifts = [
  { icon: "💝", title: "My Heart", message: "It's yours, forever and always. You hold the key to my happiness." },
  { icon: "🌹", title: "A Promise", message: "To love you more today than yesterday, but less than tomorrow." },
  { icon: "💍", title: "Our Future", message: "I look forward to every single day we'll spend building our life together." },
  { icon: "✨", title: "My Gratitude", message: "Thank you for being the person who makes my life complete." },
  { icon: "💌", title: "A Love Note", message: "I carry your heart with me (I carry it in my heart)." },
  { icon: "🌟", title: "You're My Star", message: "In a sky full of stars, I'll always find my way back to you." },
  { icon: "🥂", title: "To Us", message: "Here's to us, to our love, and to all the adventures yet to come." },
  { icon: "🏠", title: "Home", message: "Home is not a place, it's a person. And for me, that person is you." },
  { icon: "🎁", title: "Pure Joy", message: "You are the reason for my biggest smiles and happiest days." },
  { icon: "🌙", title: "Moon & Back", message: "I love you to the moon and back, through every phase of life." },
  { icon: "🔥", title: "Eternal Flame", message: "Our love burns brighter than any star in the night sky." },
  { icon: "🧚", title: "Magic", message: "Every moment with you feels like a beautiful fairy tale." },
];

const PageSurprise = ({ name }: PageSurpriseProps) => {
  const [openedGifts, setOpenedGifts] = useState<number[]>([]);
  const [showMessage, setShowMessage] = useState<number | null>(null);

  const handleOpenGift = (index: number) => {
    if (!openedGifts.includes(index)) {
      setOpenedGifts([...openedGifts, index]);
    }
    setShowMessage(index);
  };

  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col md:flex-row relative pt-16 md:pt-24 px-4 md:px-0 gap-4">
      {/* Left side: Background Image - Responsive height */}
      <div className="w-full md:w-1/2 h-[35vh] md:h-[calc(100vh-8rem)] relative overflow-hidden shrink-0 rounded-[2.5rem] md:rounded-r-[3rem] shadow-xl md:ml-4 self-start">
        <img 
          src={love5} 
          alt="Surprises" 
          className="w-full h-full object-cover object-center animate-scaleIn opacity-100"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10" />
      </div>

      {/* Right side: Surprises Content - Responsive padding */}
      <div className="w-full md:w-1/2 h-auto md:h-[calc(100vh-6rem)] flex items-start justify-center p-4 md:p-12 z-10 md:overflow-y-auto">
        <div className="bg-white/85 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-soft border border-rose-light/30 animate-fadeInUp w-full max-w-xl mb-20 md:mb-32">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-rose/10 mb-4 md:mb-6 text-rose animate-heartbeat">
              <Gift className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h2 className="font-display text-2xl md:text-6xl text-foreground mb-2 md:mb-4 font-bold leading-tight">
              Romantic <br/><span className="text-rose italic">Surprises</span>
            </h2>
            <p className="text-foreground/70 font-body text-xs md:text-xl font-bold">
              Reveal 12 surprises, {name} 🎀
            </p>
          </div>

          {/* Gifts Grid - Responsive columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6 mb-10 md:mb-12">
            {gifts.map((gift, index) => (
              <div
                key={index}
                className="animate-fadeInUp"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <button
                  onClick={() => handleOpenGift(index)}
                  className={`w-full aspect-square rounded-[1.2rem] md:rounded-[2rem] border-2 transition-all duration-500 flex flex-col items-center justify-center p-2 md:p-6 ${openedGifts.includes(index)
                    ? "bg-gradient-to-br from-rose to-rose-light text-white border-transparent shadow-glow"
                    : "bg-rose/5 backdrop-blur-md border-rose-light/30 hover:border-rose hover:scale-105 shadow-sm"
                    }`}
                >
                  <span className="text-2xl md:text-5xl mb-1 md:mb-2 transition-transform duration-500" style={{
                    transform: openedGifts.includes(index) ? "scale(1.2)" : "scale(1)",
                    filter: openedGifts.includes(index) ? "brightness(0) invert(1)" : "none"
                  }}>
                    {gift.icon}
                  </span>
                  <p className={`font-display text-[8px] md:text-base font-bold ${openedGifts.includes(index) ? "text-white" : "text-foreground"}`}>
                    {gift.title}
                  </p>
                </button>
              </div>
            ))}
          </div>

          {/* Progress */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 md:gap-4 px-5 py-2.5 md:px-8 md:py-4 bg-rose/5 rounded-full border border-rose-light/20">
              <Heart className="w-4 h-4 md:w-6 md:h-6 text-rose fill-rose" />
              <p className="text-foreground/70 font-bold text-xs md:text-lg">
                {openedGifts.length} of {gifts.length} revealed
              </p>
              <Heart className="w-4 h-4 md:w-6 md:h-6 text-rose fill-rose" />
            </div>
          </div>
        </div>
      </div>

      {/* Message Modal - Responsive width */}
      {showMessage !== null && (
        <div
          className="fixed inset-0 bg-rose/20 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          onClick={() => setShowMessage(null)}
        >
          <div
            className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 max-w-lg md:max-w-xl w-full shadow-2xl animate-scaleIn border border-rose-light text-center relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-5xl md:text-8xl block mb-4 md:mb-8 animate-heartbeat">{gifts[showMessage].icon}</span>
            <h3 className="font-display text-2xl md:text-4xl text-rose mb-3 md:mb-6 font-bold tracking-tight">
              {gifts[showMessage].title}
            </h3>
            <p className="font-body text-base md:text-2xl text-foreground/80 mb-6 md:mb-10 leading-relaxed italic font-bold">
              "{gifts[showMessage].message}"
            </p>
            <Button variant="rose" onClick={() => setShowMessage(null)} className="rounded-full px-6 py-4 md:px-12 md:py-8 text-base md:text-xl font-bold w-full md:w-auto">
              My Love Forever!
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageSurprise;
