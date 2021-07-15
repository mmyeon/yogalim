import React from "react";
import { usePainScoreBefore } from "../../record";
import * as Styled from "./index.styles";

const Range = ({ updatePainScore }) => {
  const scaleMin = 0;
  const scaleMax = 10;

  const painScoreBefore = usePainScoreBefore();

  return (
    <Styled.Range>
      <div className="slider-value">
        <span style={{ left: painScoreBefore * 10 + "%" }}>
          {painScoreBefore}
        </span>
      </div>

      <div className="field">
        <span className="value left">{scaleMin}</span>
        <input
          type="range"
          value={painScoreBefore}
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
