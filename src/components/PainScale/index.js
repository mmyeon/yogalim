import React from "react";
import * as Styled from "./index.styles";
import Smile from "../Smile";
import Range from "../Range";
import { useSetPainScoreBefore } from "../../record";

const PainScale = () => {
  const setPainScoreBefore = useSetPainScoreBefore();

  return (
    <Styled.Container>
      <Smile />

      <Range updatePainScore={updatePainScore} />
    </Styled.Container>
  );

  function updatePainScore(e) {
    const currentPainScore = parseInt(e.target.value);
    setPainScoreBefore(currentPainScore);
  }
};

export default PainScale;
