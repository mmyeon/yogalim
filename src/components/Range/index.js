import React from "react";
import * as Styled from "./index.styles";

const Range = ({ updatePainScore, painScore }) => {
  const scaleMin = 0;
  const scaleMax = 10;

  return (
    <Styled.Range>
      <div className="slider-value">
        <span style={{ left: painScore * 10 + "%" }}>{painScore}</span>
      </div>

      <div className="field">
        <span className="value left">{scaleMin}</span>
        <input
          type="range"
          value={painScore}
          min={scaleMin}
          max={scaleMax}
          step="1"
          onChange={updatePainScore}
        />

        <span className="value right">{scaleMax}</span>
      </div>
    </Styled.Range>
  );
};

export default Range;
