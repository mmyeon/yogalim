import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./index.styles";

const Range = ({ updatePainScore, painScore }) => {
  const SCALE_MIN = 0;
  const SCALE_MAX = 10;

  const fieldRef = useRef(null);
  const [rect, setRect] = useState(null);

  useEffect(() => {
    const { left, right, width } = fieldRef.current.getBoundingClientRect();
    const gap = width / SCALE_MAX;
    setRect({ left, right, gap });
  }, []);

  return (
    <Styled.Range>
      <div className="slider-value">
        <span style={{ left: painScore * 10 + "%" }}>{painScore}</span>
      </div>

      <div className="field" ref={fieldRef}>
        <span className="value left">{SCALE_MIN}</span>
        <input
          type="range"
          value={painScore}
          min={SCALE_MIN}
          max={SCALE_MAX}
          step="1"
          onChange={handleChange}
          onTouchMove={handleTouch}
          onTouchStart={handleTouch}
        />

        <span className="value right">{SCALE_MAX}</span>
      </div>
    </Styled.Range>
  );

  function handleChange(e) {
    const score = parseInt(e.target.value);
    updatePainScore(score);
  }

  function handleTouch(e) {
    if (!e.touches || !e.touches.length) return;

    const clientX = e.touches[0].clientX;
    const clientXFromLeft = clientX - rect.left;
    const newScore = Math.ceil(clientXFromLeft / rect.gap);

    if (SCALE_MIN <= newScore && newScore <= SCALE_MAX) {
      updatePainScore(newScore);
    }
  }
};

export default Range;
