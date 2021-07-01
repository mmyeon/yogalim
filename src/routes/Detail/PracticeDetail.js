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
    z-index: -2;
  }

  > svg {
    position: absolute;
    bottom: -8em;
    width: 100%;
    height: 100%;
    z-index: -1;
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
      <svg
        width="320"
        height="321"
        viewBox="0 0 320 321"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M359.993 505.452L362.258 123.406C362.258 123.406 330.431 54.4813 247.509 61.9659C164.586 69.4504 147.143 112.307 47.5491 32.5417C47.5491 32.5417 12.4456 -0.802887 -52.0173 0.0326856L-55 502.991L152.496 504.222L359.993 505.452Z"
          fill="#39AE76"
        />
      </svg>
    </StyledPracticeDetail>
  );
};

export default PracticeDetail;
