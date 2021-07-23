import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  width: 2em;
  height: 2em;
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
