import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/constant";
import Header from "../../components/Header";

const StyledStep2 = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${COLORS.lightYellow};
`;

const Step2 = () => {
  return (
    <StyledStep2>
      <Header />
    </StyledStep2>
  );
};

export default Step2;
