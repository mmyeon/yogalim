import React, { useState } from "react";
import * as Styled from "./index.styles";
import Smile from "../Smile";

const PainScale = () => {
  const scaleMin = 0;
  const scaleMax = 10;
  const [painScoreBeforePractice, setPainScoreBeforePractice] = useState(0);

  return (
    <Styled.Container>
      <Smile painScoreBeforePractice={painScoreBeforePractice} />

      <div className="range">
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
            list="custom-list"
            onChange={updatePainScore}
          />
          <span className="value right">{scaleMax}</span>
        </div>
      </div>
    </Styled.Container>
  );

  function updatePainScore(e) {
    const painScore = parseInt(e.target.value);
    setPainScoreBeforePractice(painScore);
  }
};

export default PainScale;
