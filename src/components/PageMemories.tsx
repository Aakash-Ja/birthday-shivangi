import { Camera, Heart } from "lucide-react";
import love2 from "@/assets/romantic/love2.jpeg";
import love3 from "@/assets/romantic/love3.jpeg";
import love4 from "@/assets/romantic/love4.jpeg";
import love5 from "@/assets/romantic/love5.jpeg";
import love6 from "@/assets/romantic/love6.jpeg";
import love7 from "@/assets/romantic/love7.jpeg";
import love8 from "@/assets/romantic/love8.jpeg";
import love9 from "@/assets/romantic/love9.jpeg";
import love10 from "@/assets/romantic/love10.jpeg";
import love11 from "@/assets/romantic/love11.jpeg";
import love1 from "@/assets/romantic/love1.jpeg";

interface PageMemoriesProps {
  name: string;
}

const memories = [
  { image: love2, caption: "Your beautiful smile 😊", rotate: -2 },
  { image: love3, caption: "A moment to cherish ✨", rotate: 1 },
  { image: love4, caption: "Lost in your eyes 💫", rotate: -1 },
  { image: love5, caption: "Together forever 💑", rotate: 2 },
  { image: love6, caption: "Our special day 🌟", rotate: -2 },
  { image: love7, caption: "Making memories 💝", rotate: 1 },
  { image: love8, caption: "Love in the air 🌹", rotate: -1 },
  { image: love9, caption: "Pure bliss ✨", rotate: 2 },
  { image: love10, caption: "Unforgettable moments 💫", rotate: -2 },
  { image: love11, caption: "My everything ❤️", rotate: 1 },
];

const PageMemories = ({ name }: PageMemoriesProps) => {
  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col md:flex-row relative pt-16 md:pt-24 px-4 md:px-0 gap-4">
      {/* Left side: Background Image */}
      <div className="w-full md:w-1/2 h-[35vh] md:h-[calc(100vh-8rem)] relative overflow-hidden shrink-0 rounded-[2.5rem] md:rounded-r-[4rem] shadow-2xl md:ml-4 self-start order-1">
        <img 
          src={love7} 
          alt="Our Journey" 
          className="w-full h-full object-cover object-center animate-scaleIn opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      </div>

      {/* Right side: Memories Content */}
      <div className="w-full md:w-1/2 flex items-start justify-center p-4 md:p-12 z-10 order-2 md:h-[calc(100vh-6rem)] md:overflow-y-auto">
        <div className="max-w-xl w-full pb-16 md:pb-24">
          {/* Header Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-soft border border-rose-light/30 animate-fadeInUp mb-8 md:mb-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-rose/10 mb-4 md:mb-6 text-rose animate-heartbeat">
              <Camera className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h2 className="font-display text-2xl md:text-6xl text-foreground mb-3 md:mb-4 font-extrabold leading-tight">
              Our Beautiful <br/><span className="text-rose italic">Journey</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/70 font-body italic font-bold">
              "Every picture is a heartbeat of our love, {name}."
            </p>
          </div>

          {/* Polaroid Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-12 px-1 md:px-0">
            {memories.map((memory, index) => (
              <div
                key={index}
                className="animate-fadeInUp"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <div
                  className="bg-white p-2 md:p-3 pb-6 md:pb-10 rounded-sm shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group relative z-10"
                  style={{ transform: `rotate(${memory.rotate}deg)` }}
                >
                  <div className="aspect-[4/5] bg-gray-50 rounded-sm overflow-hidden relative border border-gray-100">
                    <img 
                      src={memory.image} 
                      alt={memory.caption}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-rose/5 group-hover:bg-transparent transition-colors duration-500" />
                    <Heart className="absolute top-1 md:top-2 right-1 md:right-2 w-4 h-4 md:w-6 md:h-6 text-white/70 group-hover:text-rose group-hover:animate-heartbeat fill-current drop-shadow-md" />
                  </div>
                  <p className="absolute bottom-1 md:bottom-2 left-0 right-0 font-display text-[10px] md:text-base text-foreground/80 text-center italic font-bold px-1 md:px-2 truncate">
                    {memory.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Card */}
          <div className="bg-white/85 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-soft border border-rose-light/20 animate-fadeInUp text-center mb-10" style={{ animationDelay: "0.5s" }}>
            <p className="font-display text-xl md:text-3xl text-rose mb-2 md:mb-4 font-extrabold italic leading-tight">
              "The best is yet to come"
            </p>
            <p className="text-foreground font-body text-base md:text-lg font-bold opacity-70 italic">
              Every day with you is my favorite memory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMemories;
