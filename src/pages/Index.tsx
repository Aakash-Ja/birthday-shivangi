import { useState } from "react";
import PasswordGate from "@/components/PasswordGate";
import TimerGate from "@/components/TimerGate";
import BirthdayNav from "@/components/BirthdayNav";
import PageOne from "@/components/PageOne";
import PageTwo from "@/components/PageTwo";
import PageThree from "@/components/PageThree";
import PageMemories from "@/components/PageMemories";
import PageSurprise from "@/components/PageSurprise";
import PageCelebrate from "@/components/PageCelebrate";
import Confetti from "@/components/Confetti";
import DeveloperPage from "./Developer";

const BIRTHDAY_NAME = "Shivangi Verma"; // Change this to the birthday person's name
const PASSWORD = "shivangi"; // Change this to your secret password
const TARGET_DATE = "2026-06-02T00:00:00"; // June 2nd, 2026

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [showInitialConfetti, setShowInitialConfetti] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setShowInitialConfetti(true);
    setTimeout(() => setShowInitialConfetti(false), 5000);
  };

  const handleRestart = () => {
    setCurrentPage(0);
  };

  const handleNavigate = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    setCurrentPage((prev) => {
      const nextPage = Math.min(prev + 1, 5);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return nextPage;
    });
  };

  return (
    <TimerGate targetDate={TARGET_DATE}>
    <div>
      {!isUnlocked ? (
        <PasswordGate onSuccess={handleUnlock} correctPassword={PASSWORD} />
      ) : (
        <div className="relative">
          {showInitialConfetti && <Confetti />}

          {/* Navigation */}
          <BirthdayNav currentPage={currentPage} onNavigate={handleNavigate} />

          {/* Pages */}
          {currentPage === 0 && (
            <PageOne
              name={BIRTHDAY_NAME}
              onNext={handleNext}
            />
          )}

          {currentPage === 1 && (
            <PageTwo
              name={BIRTHDAY_NAME}
              onNext={handleNext}
            />
          )}

          {currentPage === 2 && (
            <PageThree
              onNext={handleNext}
            />
          )}

          {currentPage === 3 && (
            <PageMemories
              name={BIRTHDAY_NAME}
            />
          )}

          {currentPage === 4 && (
            <PageSurprise
              name={BIRTHDAY_NAME}
            />
          )}

          {currentPage === 5 && (
            <PageCelebrate
              name={BIRTHDAY_NAME}
              onRestart={handleRestart}
            />
          )}

          {currentPage === 6 && (
            <DeveloperPage />
          )}
        </div>
      )}
    </div>
   </TimerGate>
  );
};

export default Index;
