import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Lock, Sparkles } from "lucide-react";
import love11 from "@/assets/romantic/love8.jpeg";

interface PasswordGateProps {
  onSuccess: () => void;
  correctPassword: string;
}

const PasswordGate = ({ onSuccess, correctPassword }: PasswordGateProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-romantic py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6 xl:gap-10 items-center">
          <div className="overflow-hidden rounded-[2.5rem] border border-rose-light/30 bg-white/70 shadow-soft">
            <div className="relative">
              <img
                src={love11}
                alt="Locked Surprise"
                className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover object-center"
                style={{ objectPosition: "center 12%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-8 rounded-[2rem] border border-rose-light/30 bg-white/90 backdrop-blur-md p-4 shadow-soft">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-rose font-bold">
                  special moment
                </p>
                <p className="mt-2 text-sm sm:text-base text-foreground/80 font-medium leading-relaxed">
                  This page is your private surprise space. Enter the word to continue.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-rose-light/30 bg-white/95 backdrop-blur-xl shadow-soft p-6 sm:p-8 md:p-12">
            <div className={`max-w-md mx-auto text-center ${shake ? "animate-shake" : ""}`}>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose/10 text-rose shadow-glow">
                <Lock className="w-10 h-10" />
              </div>

              <div className="mt-6">
                <p className="text-rose font-body text-sm uppercase tracking-[0.3em] font-semibold">
                  secure entry
                </p>
                <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl text-foreground font-bold leading-tight">
                  Unlock Your <span className="text-rose italic">Surprise</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-foreground/75 font-medium italic">
                  Magic starts with the right word.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div className={`rounded-[2rem] border-2 bg-rose/5 p-3 ${error ? "border-destructive shadow-[0_0_25px_rgba(239,68,68,0.2)]" : "border-rose-light/50"}`}>
                  <Input
                    type="password"
                    placeholder="Hint: It starts with 's'..."
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    className="w-full bg-transparent text-center text-lg sm:text-xl md:text-2xl font-bold placeholder:text-foreground/30 focus-visible:outline-none"
                  />
                </div>

                {error && (
                  <p className="text-destructive text-sm sm:text-base font-semibold animate-fadeInUp">
                    Oops! Try again, my love.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="rose"
                  size="lg"
                  className="w-full rounded-full py-5 md:py-6 text-xl md:text-2xl font-bold transition-transform hover:scale-[1.03]"
                >
                  <Heart className="w-5 h-5 md:w-6 md:h-6 mr-2 fill-current" />
                  Unlock Magic
                </Button>
              </form>

              <div className="mt-8 rounded-[2rem] border border-rose-light/50 bg-rose/5 px-4 py-4 text-sm sm:text-base text-foreground/70 font-medium">
                <Sparkles className="inline-block w-4 h-4 mr-2 text-rose align-middle" />
                Hint: what I feel for you.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
};

export default PasswordGate;
