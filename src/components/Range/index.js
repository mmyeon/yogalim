import React from "react";
import * as Styled from "./index.styles";

const index = ({ painScoreBeforePractice, updatePainScore }) => {
  const scaleMin = 0;
  const scaleMax = 10;

  return (
    <Styled.Range>
      <div className="slider-value">
        <span style={{ left: painScoreBeforePractice * 10 + "%" }}>
          {painScoreBeforePractice}
        </span>
      </div>

      <div className="field">
        <span className="value left">{scaleMin}</span>
        <input
          type="range"
          value={painScoreBeforePractice}
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

export default index;
