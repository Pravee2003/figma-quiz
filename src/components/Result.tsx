import React, { useEffect, useState } from "react";

type Props = {
  score: number;
  onRestart: () => void;
};

// gradient text style
const gradientText: React.CSSProperties = {
  background: "linear-gradient(90deg, #15313D 0%, #3CABDA 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const Result: React.FC<Props> = ({ score, onRestart }) => {
  const [numbers, setNumbers] = useState<string[]>([]);
  const [animate, setAnimate] = useState(false);
  const [showPercent, setShowPercent] = useState(score === 0); 
  // If score = 0 → show immediately

  useEffect(() => {
    // Build 0 → score list
    const arr = [];
    for (let i = 0; i <= score; i++) arr.push(String(i));
    setNumbers(arr);

    // Start scroll animation
    setTimeout(() => setAnimate(true), 20);

    // If score > 0 → fade in % after 0.5 sec  
    if (score > 0) {
      const timeout = setTimeout(() => {
        setShowPercent(true);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [score]);

  return (
    <div className="text-center mt-10">

      {/* KEEP LEARNING */}
      <p
        className="
          px-6 py-2 
          bg-white/70 
          rounded-lg 
          inline-block 
          font-medium 
          mb-10
        "
        style={gradientText}
      >
        Keep Learning!
      </p>

      {/* TITLE */}
      <h2
        className="text-[48px] font-display italic mb-12"
        style={gradientText}
      >
        Your Final score is
      </h2>

      {/* SCORE BLOCK */}
      <div className="flex items-center justify-center gap-4">

        {/* Scroll numbers */}
        <div
          style={{
            height: "160px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              transform: animate
                ? `translateY(-${score * 160}px)`
                : "translateY(0)",
              transition: "transform 2.5s cubic-bezier(0.25,0.1,0.25,1)",
            }}
          >
            {numbers.map((num, i) => (
              <div
                key={i}
                style={{
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "DM Serif Display",
                  fontSize: "160px",
                  lineHeight: "100%",
                  letterSpacing: "-2px",
                  ...gradientText,
                }}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* % symbol */}
        <div
          style={{
            fontFamily: "DM Serif Display",
            fontSize: "80px",
            marginTop: "20px",
            opacity: showPercent ? 1 : 0,
            transition: score === 0 ? "none" : "opacity 0.6s ease-out",
            ...gradientText,
          }}
        >
          %
        </div>
      </div>

      {/* RESTART */}
      <button
        onClick={onRestart}
        className="
          mt-16 px-8 py-3 rounded-[10px]
          bg-gradient-to-r from-[#C6E9F7] to-[#E5F8FF]
          border border-[#96E5FF]
          font-semibold shadow-sm 
          text-[#15313D]
        "
      >
        Start Again
      </button>
    </div>
  );
};

export default Result;
