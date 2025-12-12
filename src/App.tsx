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

      {/* QUIZ BACKGROUND (only visible in quiz page) */}
      {!isResultPage && (
        <>
          {/* Blur BG */}
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

          {/* Glass Rectangle */}
          <div
            className="absolute pointer-events-none enter-scale"
            style={{
              width: 1250,
              height: 856,
              top: "50%",
              left: "50%",
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

      {/* MAIN CONTENT */}
      {score === null ? (
        <div
          className="absolute z-20 rounded-[40px] p-16 enter-scale"
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
<<<<<<< HEAD
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
                  src="/bubble.png"
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
                  src="/paw.gif"
                  alt="paw"
                  style={{
                    width: 150,
                    filter: "drop-shadow(0 8px 10px rgba(0,0,0,0.15))",
                    pointerEvents: "none",
                  }}
                />
              </div>
            )}
=======
            <Quiz onFinish={(finalScore) => setScore(finalScore)} />
>>>>>>> 3429eea3250542634d5343c4a900f19d5b8f3f69
          </div>
        </div>
      ) : (
        <div className="z-20 enter-scale">
          <Result score={score} onRestart={() => setScore(null)} />
        </div>
      )}

      {/* PAW + BUBBLE GIF (only on first quiz) */}
      {score === null && (
        <>
          <img
            src="components/paw.gif"   // FIXED FOR VERCEL
            alt="paw"
            style={{
              position: "absolute",
              left: 120,
              bottom: 120,
              width: 128,
              zIndex: 30,
              pointerEvents: "none",
            }}
          />

          <img
            src="components/bubble.png"  // FIXED FOR VERCEL
            alt="bubble"
            style={{
              position: "absolute",
              left: 68,
              bottom: 200,
              width: 180,
              zIndex: 30,
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
