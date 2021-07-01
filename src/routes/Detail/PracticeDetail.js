import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import ReactPlayer from "react-player";

const StyledPracticeDetail = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  > .background-video {
    position: relative;
    margin-left: -10em;
  }
`;

const PracticeDetail = () => {
  const location = useLocation();
  const videoId = location.pathname.split("/").pop() + location.search;

  return (
    <StyledPracticeDetail>
      <ReactPlayer
        className="background-video"
        playing
        url={`https://youtu.be/${videoId}`}
        muted
      />
    </StyledPracticeDetail>
  );
};

export default PracticeDetail;
