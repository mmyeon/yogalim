import React, { useEffect, useState } from "react";
import * as Styled from "./index.styles";
import Smile from "../Smile";
import Range from "../Range";
import { useBeforeScore } from "../../record";

const PainScale = () => {
  const [painScoreBeforePractice, setPainScoreBeforePractice] = useState(0);
  const beforeScore = useBeforeScore();

  // TODO: context API로 state 가져오기
  useEffect(() => {
    console.log("beforeScore", beforeScore);
  }, []);

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
