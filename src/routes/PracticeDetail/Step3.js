import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const StyledStep3 = styled.div``;

const Step3 = ({ goNextStep, currentVideoId }) => {
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);

  useEffect(() => {
    if (played && duration) {
      const remain = Math.round(duration * (1 - played));

      if (remain <= 20) {
        goNextStep();
      }
    }
  }, [played, duration]);

  return (
    <StyledStep3>
      <ReactPlayer
        playing
        width="100vw"
        height="100vh"
        controls
        url={`https://youtu.be/${currentVideoId}`}
        // 동영상 played시간
        onProgress={handleProgress}
        // 동영상 재생 시간
        onDuration={handleDuration}
      />
    </StyledStep3>
  );

  function handleDuration(duration) {
    setDuration(duration);
  }

  function handleProgress(state) {
    setPlayed(state.played);
  }
};

export default Step3;
