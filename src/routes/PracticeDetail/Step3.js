import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { useSetStep, useStep } from "../../record";

const StyledStep3 = styled.div``;

const Step3 = ({ currentVideoId }) => {
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const step = useStep();
  const setStep = useSetStep();

  useEffect(() => {
    if (played && duration) {
      if (
        checkPlayedEnough({
          duration,
          played,
          adTime: 20,
        })
      ) {
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
        onProgress={handleProgress}
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

  /**
   * adTime: 동영상 재생 남은 시간
   */
  function checkPlayedEnough({ duration, played, adTime }) {
    const remain = Math.round(duration * (1 - played));

    const result = remain <= adTime;

    return result;
  }

  function goNextStep() {
    setStep(step + 1);
  }
};

export default Step3;
