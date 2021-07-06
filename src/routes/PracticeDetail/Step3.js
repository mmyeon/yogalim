import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const StyledStep3 = styled.div``;

const Step3 = ({ goNextStep, currentVideoId }) => {
  console.log("currentVideoId", currentVideoId);

  return (
    <StyledStep3>
      <ReactPlayer
        playing
        width="100vw"
        height="100vh"
        url={`https://youtu.be/${currentVideoId}`}
      />
    </StyledStep3>
  );
};

export default Step3;
