import React from "react";
import ReactPlayer from "react-player";
import LongRoundButton from "../../../components/buttons/LongRoundButton";
import * as Styled from "./index.styles";
import BackButton from "../../../components/buttons/BackButton";

const Step1 = ({ goNextStep, videoInfo }) => {
  const {
    videoId,
    videoTime: { highlight },
  } = videoInfo;

  return (
    <Styled.Container>
      <BackButton />

      <ReactPlayer
        className="background-video"
        playing
        url={`https://youtu.be/${videoId}?t=${highlight}`}
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

      <div className="contents">
        <h1>{videoInfo.title}</h1>

        <div className="practice-desc">
          <img src="/assets/images/step/yoga-teacher.png" alt="yoga-teacher" />
          <div className="bubble">
            <img
              src="/assets/images/step/bubble-point.png"
              alt="bubble-point"
            />
            <p>{videoInfo.desc}</p>
          </div>
        </div>

        <LongRoundButton onClick={goNextStep} title="수련 시작" />
      </div>
    </Styled.Container>
  );
};

export default Step1;
