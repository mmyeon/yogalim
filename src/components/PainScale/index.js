import React, { useState } from "react";
import * as Styled from "./index.styles";

const PainScale = () => {
  const scaleMin = 0;
  const scaleMax = 10;
  const [painScoreBeforePractice, setPainScoreBeforePractice] = useState(0);

  return (
    <Styled.Container>
      {painScoreBeforePractice === 0 && (
        <img src="/assets/images/step/no-pain.png" alt="no pain" />
      )}

      {0 < painScoreBeforePractice && painScoreBeforePractice <= 3 && (
        <img src="/assets/images/step/mild.png" alt="mild pain" />
      )}
      {3 < painScoreBeforePractice && painScoreBeforePractice <= 5 && (
        <img src="/assets/images/step/moderate.png" alt="moderate pain" />
      )}
      {5 < painScoreBeforePractice && painScoreBeforePractice <= 7 && (
        <img src="/assets/images/step/severe.png" alt="severe pain" />
      )}
      {7 < painScoreBeforePractice && painScoreBeforePractice <= 9 && (
        <img src="/assets/images/step/very-severe.png" alt="very severe pain" />
      )}
      {painScoreBeforePractice === 10 && (
        <img src="/assets/images/step/worst.png" alt="worst pain" />
      )}

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
