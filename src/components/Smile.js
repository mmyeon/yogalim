import React from "react";
import styled from "styled-components";

const StyledSmile = styled.div`
  > img {
    width: 4em;
    height: 4em;
    margin-top: 1.4em;
    margin-bottom: 2.4em;
  }
`;
const Smile = ({ painScore }) => {
  return (
    <StyledSmile>
      {painScore === 0 && (
        <img src="/assets/images/step/no-pain.png" alt="no pain" />
      )}

      {0 < painScore && painScore <= 3 && (
        <img src="/assets/images/step/mild.png" alt="mild pain" />
      )}
      {3 < painScore && painScore <= 5 && (
        <img src="/assets/images/step/moderate.png" alt="moderate pain" />
      )}
      {5 < painScore && painScore <= 7 && (
        <img src="/assets/images/step/severe.png" alt="severe pain" />
      )}
      {7 < painScore && painScore <= 9 && (
        <img src="/assets/images/step/very-severe.png" alt="very severe pain" />
      )}
      {painScore === 10 && (
        <img src="/assets/images/step/worst.png" alt="worst pain" />
      )}
    </StyledSmile>
  );
};

export default Smile;
