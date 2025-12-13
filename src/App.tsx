import React, { useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result";

const App: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);

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
      <div
        className="relative flex items-center justify-center"
        style={{ width: "100%", height: "100%" }}
      >
        {!isResultPage && (
          <>
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

            <div
              className="absolute pointer-events-none"
              style={{
                width: "1350px",
                height: "900px",
                borderRadius: "42px",
                background:
                  "linear-gradient(112.86deg, rgba(255,255,255,0.4) -6.68%, rgba(255,255,255,0.12) 45.63%, rgba(255,255,255,0.4) 103.45%)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            />
          </>
        )}

        {score === null ? (
          <div
            className="absolute z-20 rounded-[40px] p-16"
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
                onFinish={(val) => setScore(val)}
                onQuestionChange={setQuestionIndex}
              />

              {/* PAW + BUBBLE — ONLY QUESTION 1 */}
              {questionIndex === 0 && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                  }}
                >
                  {/* Bubble */}
                  <img
                    src="/bubble.png"
                    alt="bubble"
                    style={{
                      position: "absolute",
                      bottom: "78px",
                      left: "120px", // ← moved left
                      width: "240px",
                      zIndex: 40,
                      animation: "floatBubble 3s ease-in-out infinite",
                    }}
                  />

                  {/* Paw */}
                  <img
                    src="/paw.gif"
                    alt="paw"
                    style={{
                      position: "absolute",
                      bottom: "28px",
                      left: "190px", // ← moved left
                      width: "150px",
                      zIndex: 50,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="z-20">
            <Result score={score} onRestart={() => setScore(null)} />
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
