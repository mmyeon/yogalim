import React from "react";
import * as Styled from "./index.styles";
import Smile from "../Smile";
import Range from "../Range";

const PainScale = ({ updatePainScore, painScore }) => {
  return (
    <Styled.Container>
      <Smile />

      <Range updatePainScore={updatePainScore} painScore={painScore} />
    </Styled.Container>
  );
};

export default PainScale;
