import React from "react";
import styled from "styled-components";
import { usePainScoreBefore } from "../record";

const StyledSmile = styled.div`
  > img {
    width: 4em;
    height: 4em;
    margin-top: 1.4em;
    margin-bottom: 2.4em;
  }
`;
const Smile = () => {
  const painScoreBefore = usePainScoreBefore();

  return (
    <StyledSmile>
      {painScoreBefore === 0 && (
        <img src="/assets/images/step/no-pain.png" alt="no pain" />
      )}

      {0 < painScoreBefore && painScoreBefore <= 3 && (
        <img src="/assets/images/step/mild.png" alt="mild pain" />
      )}
      {3 < painScoreBefore && painScoreBefore <= 5 && (
        <img src="/assets/images/step/moderate.png" alt="moderate pain" />
      )}
      {5 < painScoreBefore && painScoreBefore <= 7 && (
        <img src="/assets/images/step/severe.png" alt="severe pain" />
      )}
      {7 < painScoreBefore && painScoreBefore <= 9 && (
        <img src="/assets/images/step/very-severe.png" alt="very severe pain" />
      )}
      {painScoreBefore === 10 && (
        <img src="/assets/images/step/worst.png" alt="worst pain" />
      )}
    </StyledSmile>
  );
};

export default Smile;
