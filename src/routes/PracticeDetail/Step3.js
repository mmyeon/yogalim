import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import ReactPlayer from "react-player";

const Step3 = ({ currentVideoId, videoInfo }) => {
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const {
    videoTime: { start, end },
  } = videoInfo;
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (played && duration) {
      if (
        checkPlayedEnough({
          duration,
          played,
          adTime: end,
        })
      ) {
        goNextStep();
      }
    }
  }, [played, duration]);

  return (
    <ReactPlayer
      playing
      width="100vw"
      height="100vh"
      controls
      url={`https://youtu.be/${currentVideoId}?t=${start}`}
      onProgress={handleProgress}
      onDuration={handleDuration}
    />
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
    history.push(`${location.pathname}?step=4`);
  }
};

export default Step3;
