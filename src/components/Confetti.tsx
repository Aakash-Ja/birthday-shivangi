import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
}

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(45, 90%, 55%)", // gold
      "hsl(340, 65%, 55%)", // rose
      "hsl(45, 80%, 75%)", // gold light
      "hsl(340, 50%, 85%)", // rose light
      "hsl(35, 85%, 50%)", // amber
    ];

    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2,
        size: 8 + Math.random() * 8,
      });
    }
    setPieces(newPieces);

    // Remove confetti after animation
    const timer = setTimeout(() => {
      setPieces([]);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
