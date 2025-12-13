import React, { useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result";

const App: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scaleDown, setScaleDown] = useState(false);

  const isResultPage = score !== null;

  const handleRestart = () => {
    // 🔥 trigger scale-down
    setScaleDown(true);

    setTimeout(() => {
      setScore(null);
      setQuestionIndex(0);
      setScaleDown(false);
    }, 400);
  };

  return (
    <main
      className="min-h-screen w-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: isResultPage
          ? "white"
          : "linear-gradient(112.86deg,#BECFEE 0%, #71C6E2 33%, #D9F4FA 66%, #BECFEE 100%)",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">

        {/* GLASS RECTANGLE */}
        {!isResultPage && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `
                translate(-50%, -50%)
                scale(${scaleDown && questionIndex === 0 ? 0.92 : 1})
              `,
              opacity: scaleDown && questionIndex === 0 ? 0 : 1,
              transition: "transform 0.4s ease, opacity 0.4s ease",
              zIndex: 1,
              width: 1350,
              height: 900,
              borderRadius: 42,
              background:
                "linear-gradient(112.86deg, rgba(255,255,255,0.4) -6.68%, rgba(255,255,255,0.12) 45.63%, rgba(255,255,255,0.4) 103.45%)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
              pointerEvents: "none",
            }}
          />
        )}

        {/* MAIN CONTENT */}
        {score === null ? (
          <div
            style={{
              position: "absolute",
              zIndex: 20,
              width: 1250,
              transform: `scale(${scaleDown && questionIndex === 0 ? 0.92 : 1})`,
              opacity: scaleDown && questionIndex === 0 ? 0 : 1,
              transition: "transform 0.4s ease, opacity 0.4s ease",
            }}
          >
            <div
              className="relative rounded-[40px] p-16"
              style={{
                width: 1150,
                background: "#F4FDFF",
                borderRadius: 40,
                boxShadow: "0 10px 40px rgba(31,61,75,0.15)",
              }}
            >
              <Quiz
                onFinish={(val) => setScore(val)}
                onQuestionChange={setQuestionIndex}
              />

              {/* PAW — TOUCH LEFT & BOTTOM */}
              {questionIndex === 0 && (
                <img
                  src="/paw.gif"
                  alt="paw"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: 150,
                    zIndex: 60,
                    pointerEvents: "none",
                  }}
                />
              )}
            </div>

            {/* BUBBLE — TOUCH GLASS LEFT EDGE, TOP LAYER */}
            {questionIndex === 0 && (
              <img
                src="/bubble.png"
                alt="bubble"
                style={{
                  position: "absolute",
                  left: "calc(50% - 675px)", // glass left edge
                  bottom: 140,
                  width: 240,
                  zIndex: 55,
                  pointerEvents: "none",
                  animation: "floatBubble 3s ease-in-out infinite",
                }}
              />
            )}
          </div>
        ) : (
          <div className="z-20">
            <Result score={score} onRestart={handleRestart} />
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
