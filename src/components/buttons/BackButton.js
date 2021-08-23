import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../styles/constant";

const Image = styled.img`
  width: 1.8em;
  height: 1.8em;
  background: ${COLORS.primaryTeal};
  opacity: 0.9;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
`;

const BackButton = () => {
  const { goBack } = useHistory();

  return (
    <Image
      onClick={goBack}
      className="backButton"
      src="/assets/images/step/chevron-left.png"
      alt="chevron-left"
    />
  );
};

export default BackButton;
