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
          ? "white"
          : "linear-gradient(112.86deg,#BECFEE 0%, #71C6E2 33%, #D9F4FA 66%, #BECFEE 100%)",
      }}
    >
      {/* ----------------------------- */}
      {/* CENTERED BACKGROUND ELEMENTS */}
      {/* ----------------------------- */}
      {!isResultPage && (
        <>
          {/* Blurred background fill */}
          <div
            className="absolute"
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

          {/* PERFECTLY CENTERED GLASS BACKGROUND */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "1350px",          // FIXED SIZE — PERFECT FOR ALIGNMENT
              height: "900px",
              borderRadius: "42px",
              background:
                "linear-gradient(112.86deg, rgba(255,255,255,0.4) -6.68%, rgba(255,255,255,0.12) 45.63%, rgba(255,255,255,0.4) 103.45%)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.05)",

              /* TRUE CENTERING */
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              zIndex: 1,
            }}
          />
        </>
      )}

      {/* ----------------------------- */}
      {/* QUIZ OR RESULT CARD           */}
      {/* ----------------------------- */}
      {score === null ? (
        <div
          className="absolute z-20 rounded-[40px] p-16"
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
        <div className="z-20">
          <Result score={score} onRestart={() => setScore(null)} />
        </div>
      )}

      {/* ----------------------------- */}
      {/* PAW + BUBBLE (FIRST SCREEN)   */}
      {/* ----------------------------- */}
      {score === null && (
        <>
          {/* Bubble message */}
          <img
            src="/bubble.png"
            alt="bubble"
            style={{
              position: "absolute",
              bottom: 155,        // PERFECT Y-POSITION
              left: "18%",        // FIXED RELATIVE — SAME ON FIREFOX / CHROME
              width: 240,
              zIndex: 50,
              pointerEvents: "none",
              animation: "floatBubble 3s ease-in-out infinite",
            }}
          />

          {/* Paw image */}
          <img
            src="/paw.gif"
            alt="paw"
            style={{
              position: "absolute",
              bottom: 35,         // PERFECT Y-POSITION
              left: "23%",        // MATCHES YOUR LOCAL SCREENSHOT EXACTLY
              width: 155,
              zIndex: 51,
              pointerEvents: "none",
            }}
          />
        </>
      )}
    </main>
  );
};

export default App;

