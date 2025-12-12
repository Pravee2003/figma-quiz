import React, { useState } from "react";
import QuestionCard from "../QuestionCard";
import Progress from "../Progress";

type Q = { q: string; opts: string[]; correct: number };

const QUESTIONS: Q[] = [
  { q: "What sound does a cat make?", opts: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"], correct: 1 },
  { q: "What would you probably find in your fridge?", opts: ["Shoes", "Ice Cream", "Books"], correct: 1 },
  { q: "What color are bananas?", opts: ["Blue", "Yellow", "Red"], correct: 1 },
  { q: "How many stars are in the sky?", opts: ["Two", "Infinite", "One Hundred"], correct: 1 }
];

type Props = { onFinish: (percent: number) => void };

const Quiz: React.FC<Props> = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const isLast = index === QUESTIONS.length - 1;

  const handleNext = () => {
    if (selected === QUESTIONS[index].correct) setScore((s) => s + 1);

    if (!isLast) {
      setIndex((i) => i + 1);
      setSelected(null);
    } else {
      const finalPercent =
        Math.round(((selected === QUESTIONS[index].correct ? score + 1 : score) / QUESTIONS.length) * 100);

      onFinish(finalPercent);
    }
  };

  const handlePrev = () => {
    if (index === 0) return; // disabled on first question
    setIndex((i) => i - 1);
    setSelected(null);
  };

  return (
    <section className="w-full relative" style={{ width: 918 }}>

      {/* TITLE */}
      <h1
        className="font-dmserif italic"
        style={{
          fontSize: 90,
          color: "var(--title-color)",
          marginBottom: 12,
          marginLeft: 126,
          letterSpacing: "-4px",
        }}
      >
        Test Your Knowledge
      </h1>

      {/* SUBTITLE */}
      <p
        className="font-dmserif"
        style={{
          fontSize: 20,
          color: "var(--title-color)",
          marginBottom: 12,
          marginLeft: 330,
        }}
      >
        Answer all questions to see your results
      </p>

      {/* PROGRESS BAR */}
      <div style={{ marginTop: 28 }}>
        <Progress steps={QUESTIONS.length} current={index} />
      </div>

      {/* QUESTION CARD */}
      <div style={{ marginTop: 28 }}>
        <QuestionCard
          question={`${index + 1}. ${QUESTIONS[index].q}`}
          options={QUESTIONS[index].opts}
          selected={selected}
          onSelect={(val) => setSelected(val)}
        />
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-end gap-4 mt-6" style={{ width: "100%" }}>

        {/* LEFT ARROW — always visible but disabled on first screen */}
        {!isLast && (
          <button
            onClick={handlePrev}
            disabled={index === 0}
            aria-label="previous"
            style={{
              width: 53,
              height: 50,
              borderRadius: 10,
              background: "linear-gradient(89.72deg,#C6E9F7 0.09%,#E5F8FF 99.91%)",
              border: "1px solid rgba(150,229,255,0.05)",
              opacity: index === 0 ? 0.4 : 1,
              cursor: index === 0 ? "not-allowed" : "pointer",
            }}
          >
            ←
          </button>
        )}

        {/* NEXT ARROW — visible on Q1, Q2, Q3 */}
        {!isLast && (
          <button
            onClick={handleNext}
            aria-label="next"
            style={{
              width: 53,
              height: 50,
              borderRadius: 10,
              background: "linear-gradient(89.72deg,#C6E9F7 0.09%,#E5F8FF 99.91%)",
              border: "1px solid rgba(150,229,255,0.05)",
            }}
          >
            →
          </button>
        )}

        {/* SUBMIT — ONLY at last question */}
        {isLast && (
          <button
            onClick={handleNext}
            aria-label="submit"
            style={{
              padding: "0 24px",
              height: 50,
              borderRadius: 10,
              background: "linear-gradient(89.72deg,#C6E9F7 0.09%,#E5F8FF 99.91%)",
              border: "1px solid rgba(150,229,255,0.05)",
              fontWeight: 600,
            }}
          >
            Submit
          </button>
        )}
      </div>
    </section>
  );
};

export default Quiz;
