import { Home, Heart, Camera, Gift, Cake, Sparkles, Code } from "lucide-react";
import { Link } from "react-router-dom";

interface BirthdayNavProps {
  currentPage: number;
  onNavigate: (page: number) => void;
}

const navItems = [
  { icon: Home, label: "Our Love", page: 0 },
  { icon: Heart, label: "Letter", page: 1 },
  { icon: Sparkles, label: "Promises", page: 2 },
  { icon: Camera, label: "Memories", page: 3 },
  { icon: Gift, label: "Surprises", page: 4 },
  { icon: Cake, label: "Forever", page: 5 },
  { icon: Code, label: "Dev", page: 6 },
];

const BirthdayNav = ({ currentPage, onNavigate }: BirthdayNavProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-gold-light/20 shadow-soft">
      <div className="max-w-4xl mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between gap-1 py-2 md:py-3">
          <div className="flex items-center justify-center gap-0.5 md:gap-2 flex-1 no-scrollbar overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`flex flex-col items-center gap-0.5 md:gap-1 px-1.5 md:px-4 py-1.5 md:py-2 rounded-xl transition-all duration-300 min-w-[3.5rem] md:min-w-0 ${
                  currentPage === item.page
                    ? "bg-gradient-to-br from-rose to-rose-light/50 text-primary-foreground scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-[9px] md:text-xs font-body hidden sm:block truncate w-full text-center">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BirthdayNav;
