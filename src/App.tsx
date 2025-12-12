import React, { useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result";

const App: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);

  const isResultPage = score !== null;

  return (
    <main
      className="min-h-screen w-screen flex items-center justify-center overflow-hidden"
      style={{
        background: isResultPage
          ? "rgba(255,255,255,1)"
          : "linear-gradient(112.86deg,#BECFEE 0%, #71C6E2 33%, #D9F4FA 66%, #BECFEE 100%)",
      }}
    >

      {/* ------------------------------------------------ */}
      {/* QUIZ BACKGROUND (SHOWN ONLY BEFORE SUBMIT)       */}
      {/* ------------------------------------------------ */}
      {!isResultPage && (
        <>
          {/* Blur Background */}
          <div
            className="absolute enter-scale"
            style={{
              width: "100vw",
              height: "100vh",
              filter: "blur(12px)",
              opacity: 0.35,
              background:
                "linear-gradient(112.86deg,#BECFEE 0%, #71C6E2 33%, #D9F4FA 66%, #BECFEE 100%)",
              zIndex: 0,
            }}
          />

          {/* Glass Main Rectangle */}
          <div
            className="absolute pointer-events-none animate-scaleInGlass"
            style={{
              width: 1250,
              height: 856,
              top: "50%",
              left: "51%",
              transform: "translate(-50%, -50%)",
              borderRadius: 42,
              background:
                "linear-gradient(112.86deg, rgba(255,255,255,0.4) -6.68%, rgba(255,255,255,0.12) 45.63%, rgba(255,255,255,0.4) 103.45%)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
              zIndex: 1,
            }}
          />
        </>
      )}

      {/* ------------------------------------------------ */}
      {/* MAIN CONTENT — Quiz or Result                   */}
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
      {/* PAW + BUBBLE — ONLY ON FIRST QUESTION            */}
      {/* (Quiz component controls question index)        */}
      {/* ------------------------------------------------ */}
      {score === null && (
        <>
          {/* PAW GIF */}
          <img
            src="/paw.gif"
            alt="paw"
            style={{
              position: "absolute",
              left: 400,
              bottom: -40,
              width: 150,
              zIndex: 50,
              pointerEvents: "none",
            }}
          />

          {/* BUBBLE PNG */}
          <img
            src="/bubble.png"
            alt="bubble"
            style={{
              position: "absolute",
              left: 300,
              bottom: 192,
              width: 240,
              zIndex: 40,
              pointerEvents: "none",
              animation: "floatBubble 3s ease-in-out infinite",
            }}
          />
        </>
      )}
    </main>
  );
};

export default App;
