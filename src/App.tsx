import React, { useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result";

const App: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);

  const isResultPage = score !== null;

  return (
    <main
      className="min-h-screen w-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: isResultPage
          ? "rgba(255,255,255,1)"
          : "linear-gradient(112.86deg,#BECFEE 0%, #71C6E2 33%, #D9F4FA 66%, #BECFEE 100%)",
      }}
    >
      {/* ------------------------------------------------ */}
      {/* WRAPPER — This makes EVERYTHING align perfectly */}
      {/* ------------------------------------------------ */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: "100%", height: "100%" }}
      >
        {/* ------------------------------------------------ */}
        {/* QUIZ BACKGROUND (only before result)             */}
        {/* ------------------------------------------------ */}
        {!isResultPage && (
          <>
            {/* Blurred Gradient BG */}
            <div
              className="absolute enter-scale"
              style={{
                width: "100%",
                height: "100%",
                filter: "blur(12px)",
                opacity: 0.35,
                background:
                  "linear-gradient(112.86deg,#BECFEE 0%, #71C6E2 33%, #D9F4FA 66%, #BECFEE 100%)",
                zIndex: 0,
              }}
            />

            {/* CENTERED GLASS RECTANGLE */}
            <div
              className="absolute pointer-events-none animate-scaleInGlass"
              style={{
                width: 2100,
                height: 856,
                borderRadius: 42,
                background:
                  "linear-gradient(112.86deg, rgba(255,255,255,0.4) -6.68%, rgba(255,255,255,0.12) 45.63%, rgba(255,255,255,0.4) 103.45%)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.05)",

                /* TRUE CENTERING: */
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",

                zIndex: 1,
              }}
            />
          </>
        )}

        {/* ------------------------------------------------ */}
        {/* QUIZ / RESULT CARD (centered)                   */}
        {/* ------------------------------------------------ */}
        {score === null ? (
          <div
            className="absolute z-20 rounded-[40px] p-16 animate-scaleIn"
            style={{ width: 1250 }}
          >
            <div
              className="rounded-[40px] p-16"
              style={{
                width: "1150px",
                background: "#F4FDFF",
                border: "0.72px solid rgba(255,255,255,1)",
                borderRadius: 40,
                boxShadow: "0 10px 40px rgba(31,61,75,0.15)",
              }}
            >
              <Quiz onFinish={(val) => setScore(val)} />
            </div>
          </div>
        ) : (
          <div className="z-20 enter-scale">
            <Result score={score} onRestart={() => setScore(null)} />
          </div>
        )}

      {/* ------------------------------------------------ */}
      {/* PAW + BUBBLE — FIXED POSITION CROSS-BROWSER      */}
      {/* ------------------------------------------------ */}
      {score === null && (
        <>
          {/* Speech Bubble */}
          <img
            src="/bubble.png"
            alt="bubble"
            style={{
              position: "absolute",
              bottom: 165,         // PERFECT POSITION MATCHING YOUR SECOND SCREENSHOT
              left: "16%",         // FIXED RELATIVE TO CARD → WORKS IN ALL BROWSERS
              width: 240,
              zIndex: 40,
              pointerEvents: "none",
              animation: "floatBubble 3s ease-in-out infinite",
            }}
          />

          {/* Paw GIF */}
          <img
            src="/paw.gif"
            alt="paw"
            style={{
              position: "absolute",
              bottom: 55,          // EXACT SAME POSITION AS LOCAL
              left: "22%",         // CHANGED TO PERCENT SO IT DOES NOT SHIFT IN FIREFOX
              width: 150,
              zIndex: 50,
              pointerEvents: "none",
            }}
          />
        </>
      )}
    </main>
  );
};

export default App;


