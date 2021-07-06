import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../styles/constant";

const StyledPainScale = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 4em;
    height: 4em;
    margin-top: 1.4em;
    margin-bottom: 2.4em;
  }

  .range {
    width: 18.75rem;
    height: 4em;
    background: white;
    border-radius: 10px;
    padding: 0 2.8em;

    .slider-value {
      position: relative;
      width: 100%;

      span {
        position: absolute;
        width: 2em;
        height: 2em;
        color: ${COLORS.white};
        transform: rotate(45deg);
        font-weight: ${FONT_WEIGHT.bold};
        font-size: 1.125em;
        top: -27px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        right: 1px;
      }

      span:after {
        position: absolute;
        content: "";
        width: 2em;
        height: 2em;
        background: ${COLORS.primaryTeal};
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        border: 3px solid ${COLORS.white};
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        border-bottom-left-radius: 50%;
        text-align: center;
        line-height: 55px;
        z-index: -1;
      }
    }

    .field {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      .value {
        position: absolute;
        font-size: 1.125em;
        font-weight: ${FONT_WEIGHT.bold};
        color: ${COLORS.primaryTeal};
      }

      .value.left {
        left: -1.375em;
      }
      .value.right {
        right: -1.75em;
      }

      input {
        -webkit-appearance: none;
        width: 100%;
        height: 3px;
        border: none;
        outline: none;
        background: #ddd;
        border-radius: 5px;
      }

      input::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: ${COLORS.primaryTeal};
        cursor: pointer;
      }
    }
  }
`;

const PainScale = () => {
  const scaleMin = 0;
  const scaleMax = 10;
  const [painScoreBeforePractice, setPainScoreBeforePractice] = useState(0);

  return (
    <StyledPainScale>
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
    </StyledPainScale>
  );

  function updatePainScore(e) {
    const painScore = parseInt(e.target.value);
    setPainScoreBeforePractice(painScore);
  }
};

export default PainScale;
