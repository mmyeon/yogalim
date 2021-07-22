import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  width: 2em;
  height: 2em;
  position: relative;
  top: 0.5em;
  left: 0.5em;
`;

const GoBackButton = () => {
  const { goBack } = useHistory();

  return (
    <Image
      onClick={goBack}
      src="/assets/images/step/chevron-left.png"
      alt="chevron-left"
    />
  );
};

export default GoBackButton;
