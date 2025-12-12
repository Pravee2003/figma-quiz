import React from "react";

type Props = {
  question: string;
  options: string[];
  selected: number | null;
  onSelect: (i: number) => void;
};

const QuestionCard: React.FC<Props> = ({ question, options, selected, onSelect }) => {
  return (
    <div>
      {/* Question box: gradient and border per Figma */}
      <div
        style={{
          width: 896,
          marginLeft: "8%",
          padding: "20px 32px",
          borderRadius: 12,
          background: "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
          border: "1px solid #96E5FF",
          textAlign: "center",
          fontWeight: 600,
          color: "#15313D"
        }}
      >
        {question}
      </div>

      <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 16 }}>
        {options.map((opt, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              style={{
                width: 896,
                marginLeft: "8%",
                padding: "20px 32px",
                borderRadius: 12,
                textAlign: "center",
                border: isSelected ? "1px solid #A9D0E3" : "1px solid #E0EDF5",
                background: isSelected ? "#D7ECF8" : "rgba(255,255,255,0.9)",
                fontWeight: isSelected ? 700 : 500,
                color: "#15313D"
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
