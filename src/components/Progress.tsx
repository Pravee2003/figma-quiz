import React from "react";

type Props = { steps: number; current: number };

const Progress: React.FC<Props> = ({ steps, current }) => {
  // Step widths & left positions taken from Figma vectors — we approximate fixed gaps.
  const items = new Array(steps).fill(0);
  return (
    <div style={{ width: 896, margin: "28px auto 0", display: "flex", gap: 36, alignItems: "center", marginLeft:"8%" }}>
      {items.map((_, i) => (
        <div key={i} style={{ flex: 1 }}>
          <div
            style={{
              height: i === current ? 10 : 4,
              borderRadius: 6,
              background: i === current ? "#15313D" : "#E3E3E3"
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Progress;
