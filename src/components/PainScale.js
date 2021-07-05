import React, { useState } from "react";
import styled from "styled-components";

const StyledPainScale = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 4em;
    height: 4em;
  }

  > * + * {
    margin-left: 0.4em;
  }
`;

const PainScale = () => {
  const ratingScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [painScoreBeforePractice, setPainScoreBeforePractice] = useState("0");

  return (
    <StyledPainScale>
      {painScoreBeforePractice === "0" && (
        <img src="/assets/images/step/no-pain.png" alt="no pain" />
      )}
      {"1" <= painScoreBeforePractice && painScoreBeforePractice <= "3" && (
        <img src="/assets/images/step/mild.png" alt="mild pain" />
      )}
      {"4" <= painScoreBeforePractice && painScoreBeforePractice <= "5" && (
        <img src="/assets/images/step/moderate.png" alt="moderate pain" />
      )}
      {"6" <= painScoreBeforePractice && painScoreBeforePractice <= "7" && (
        <img src="/assets/images/step/severe.png" alt="severe pain" />
      )}
      {"8" <= painScoreBeforePractice && painScoreBeforePractice <= "9" && (
        <img src="/assets/images/step/very-severe.png" alt="very severe pain" />
      )}
      {painScoreBeforePractice === "10" && (
        <img src="/assets/images/step/worst.png" alt="worst pain" />
      )}

      {painScoreBeforePractice}

      <div className="container">
        <datalist id="custom-list">
          <option value="0"></option>
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>
          <option value="6"></option>
          <option value="7"></option>
          <option value="8"></option>
          <option value="9"></option>
          <option value="10"></option>
        </datalist>
        <input
          type="range"
          value={painScoreBeforePractice}
          min="0"
          max="10"
          step="1"
          list="custom-list"
          onChange={updatePainScore}
        />
      </div>
    </StyledPainScale>
  );

  function updatePainScore(e) {
    const seletedScore = e.target.value;
    setPainScoreBeforePractice(seletedScore);
  }
};

export default PainScale;
