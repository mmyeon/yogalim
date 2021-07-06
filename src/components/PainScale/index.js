import React, { useState } from "react";
import * as Styled from "./index.styles";
import Smile from "../Smile";
import Range from "../Range";

const PainScale = () => {
  const [painScoreBeforePractice, setPainScoreBeforePractice] = useState(0);

  return (
    <Styled.Container>
      <Smile painScoreBeforePractice={painScoreBeforePractice} />

      <Range
        painScoreBeforePractice={painScoreBeforePractice}
        updatePainScore={updatePainScore}
      />
    </Styled.Container>
  );

  function updatePainScore(e) {
    const painScore = parseInt(e.target.value);
    setPainScoreBeforePractice(painScore);
  }
};

export default PainScale;
