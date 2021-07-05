import React, { useState } from "react";
import styled from "styled-components";
import SquareButton from "./SquareButton";

const StyledPainScale = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .pain-score-list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4em;

    > * + * {
      margin-left: 0.4em;
    }
  }
`;

const PainScale = () => {
  const ratingScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [painScoreBeforePractice, setPainScoreBeforePractice] = useState(0);

  return (
    <StyledPainScale>
      {painScoreBeforePractice}

      <div className="pain-score-list">
        {ratingScale.map((number) => (
          <SquareButton
            key={number}
            number={number}
            value={number}
            onClick={updatePainScore}
          />
        ))}
      </div>
    </StyledPainScale>
  );

  function updatePainScore(e) {
    const seletedScore = e.target.value;
    setPainScoreBeforePractice(seletedScore);
  }
};

export default PainScale;
