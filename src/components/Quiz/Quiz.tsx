import React, { useEffect, useState } from "react";
import QuestionCard from "../QuestionCard";
import Progress from "../Progress";

type Q = { q: string; opts: string[]; correct: number };

const QUESTIONS: Q[] = [
  { q: "What sound does a cat make?", opts: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"], correct: 1 },
  { q: "What would you probably find in your fridge?", opts: ["Shoes", "Ice Cream", "Books"], correct: 1 },
  { q: "What color are bananas?", opts: ["Blue", "Yellow", "Red"], correct: 1 },
  { q: "How many stars are in the sky?", opts: ["Two", "Infinite", "One Hundred"], correct: 1 },
];

type Props = {
  onFinish: (percent: number) => void;
  onQuestionChange: (index: number) => void;
};

const Quiz: React.FC<Props> = ({ onFinish, onQuestionChange }) => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    onQuestionChange(index);
  }, [index, onQuestionChange]);

  const isLast = index === QUESTIONS.length - 1;

  const handleNext = () => {
    if (selected === QUESTIONS[index].correct) {
      setScore((s) => s + 1);
    }

    if (!isLast) {
      setIndex((i) => i + 1);
      setSelected(null);
    } else {
      const finalPercent = Math.round(
        ((selected === QUESTIONS[index].correct ? score + 1 : score) /
          QUESTIONS.length) *
          100
      );
      onFinish(finalPercent);
    }
  };

  const handlePrev = () => {
    if (index === 0) return;
    setIndex((i) => i - 1);
    setSelected(null);
  };

  return (
    <section className="w-full relative" style={{ width: 918 }}>
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

      <div style={{ marginTop: 28 }}>
        <Progress steps={QUESTIONS.length} current={index} />
      </div>

      <div style={{ marginTop: 28 }}>
        <QuestionCard
          question={`${index + 1}. ${QUESTIONS[index].q}`}
          options={QUESTIONS[index].opts}
          selected={selected}
          onSelect={(val) => setSelected(val)}
        />
      </div>

      <div className="flex justify-end gap-4 mt-6">
        {!isLast && (
          <button
            onClick={handlePrev}
            disabled={index === 0}
            style={{
              width: 53,
              height: 50,
              borderRadius: 10,
              opacity: index === 0 ? 0.4 : 1,
            }}
          >
            ←
          </button>
        )}

        {!isLast && (
          <button
            onClick={handleNext}
            style={{ width: 53, height: 50, borderRadius: 10 }}
          >
            →
          </button>
        )}

        {isLast && (
          <button
            onClick={handleNext}
            style={{ padding: "0 24px", height: 50, borderRadius: 10 }}
          >
            Submit
          </button>
        )}
      </div>
    </section>
  );
};

export default Quiz;
