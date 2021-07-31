import React from "react";
import * as Styled from "./index.styles";

const Range = ({ updatePainScore, painScore }) => {
  const SCALE_MIN = 0;
  const SCALE_MAX = 10;

  return (
    <Styled.Range>
      <div className="slider-value">
        <span style={{ left: painScore * 10 + "%" }}>{painScore}</span>
      </div>

      <div className="field">
        <span className="value left">{SCALE_MIN}</span>
        <input
          type="range"
          value={painScore}
          min={SCALE_MIN}
          max={SCALE_MAX}
          step="1"
          onChange={updatePainScore}
        />

        <span className="value right">{SCALE_MAX}</span>
      </div>
    </Styled.Range>
  );
};

export default Range;
