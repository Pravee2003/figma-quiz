import React, { useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result";

const App: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);
  const [isFirstQuestion, setIsFirstQuestion] = useState(true);

  const isResultPage = score !== null;

  return (
    <main
      className="min-h-screen w-screen flex items-center justify-center overflow-hidden relative"
      style={{
        background: isResultPage
          ? "rgba(255,255,255,1)" // plain white on result
          : "linear-gradient(112.86deg,#BECFEE 0%, #71C6E2 33%, #D9F4FA 66%, #BECFEE 100%)",
      }}
    >
      {/* -------------------------------------- */}
      {/* BACKGROUND + RECTANGLE (ONLY QUIZ PAGE) */}
      {/* -------------------------------------- */}
      {!isResultPage && (
        <>
          {/* Full-screen blurred gradient */}
          <div
            className="absolute"
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

          {/* Rectangle 1 (glass card behind quiz) */}
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

      {/* -------------------------------------- */}
      {/* MAIN CONTENT: QUIZ OR RESULT */}
      {/* -------------------------------------- */}
      {score === null ? (
        <div
          className="absolute z-20 rounded-[40px] p-16 animate-scaleIn"
          style={{ width: 1250 }}
        >
          <div
            className="relative rounded-[40px] p-16"
            style={{
              width: "1150px",
              background: "#F4FDFF",
              border: "0.72px solid rgba(255,255,255,1)",
              borderRadius: 40,
              boxShadow: "0 10px 40px rgba(31,61,75,0.15)",
            }}
          >
            <Quiz
              onFinish={(finalScore) => setScore(finalScore)}
            />

            {/* 🐾 PAW + BUBBLE ONLY ON FIRST QUESTION */}
            {isFirstQuestion && (
              <div
                className="absolute"
                style={{
                  left: -0.5,
                  bottom: -2,
                  zIndex: 50,
                }}
              >
                {/* Bubble */}
                <img
                  src="/src/assets/bubble.png"
                  alt="bubble"
                  style={{
                    width: 300,
                    marginBottom: -20,
                    marginLeft: -80,
                    animation: "floatBubble 3s ease-in-out infinite",
                    pointerEvents: "none",
                  }}
                />

                {/* Paw */}
                <img
                  src="/src/assets/paw.gif"
                  alt="paw"
                  style={{
                    width: 150,
                    filter: "drop-shadow(0 8px 10px rgba(0,0,0,0.15))",
                    pointerEvents: "none",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        // ----------------------- //
        //  RESULT PAGE (NO CARD)
        // ----------------------- //
        <div className="z-20">
          <Result score={score} onRestart={() => {
            setScore(null);
            setIsFirstQuestion(true);
          }} />
        </div>
      )}
    </main>
  );
};

export default App;
