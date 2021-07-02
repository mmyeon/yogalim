import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";
import ReactPlayer from "react-player";
import LongRoundButton from "../../components/LongRoundButton";
import data from "../../data";
import { COLORS, FONT_FAMILY } from "../../styles/constant";

const StyledPracticeDetail = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .chevron-left {
    width: 1.5em;
    height: 1.5em;
    position: relative;
    top: 0.5em;
    left: 0.5em;
  }

  > .background-video {
    position: relative;
    margin-left: -10em;
    z-index: -2;
    top: -3em;
  }

  > svg {
    position: absolute;
    bottom: -5.5em;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  > .contents {
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: -2.5em;
    position: relative;

    > h1 {
      font-size: 1.3em;
      color: ${COLORS.white};
    }

    > .practice-desc {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${FONT_FAMILY.point};
      margin-top: 1em;
      margin-bottom: 1.2em;

      > img {
        width: 86px;
        height: 86px;
      }

      > .bubble {
        position: relative;

        > img {
          position: absolute;
          z-index: -1;
          width: 23px;
          top: 50%;
          left: 0.4em;
          transform: translateY(-50%);
        }
        > p {
          margin-left: 1.3em;
          background: ${COLORS.lightYellow};
          padding: 1.2em 0.9em;
          border-radius: 16px;
          font-size: 0.87em;
          word-break: keep-all;
          color: ${COLORS.black};
        }
      }
    }
  }
`;

const Step1 = ({ goNextStep }) => {
  const { pathname, search } = useLocation();
  const { goBack } = useHistory();
  const currentBody = pathname.split("/")[2];
  const practicePlayList = data.find(
    (item) => item.title.eng === currentBody
  ).playList;
  const currentVideoId = pathname.split("/").pop() + search;
  const videoInfo = practicePlayList.find(
    (item) => item.videoId === currentVideoId
  );

  return (
    <StyledPracticeDetail>
      <img
        onClick={goBack}
        src="/assets/images/step/chevron-left.png"
        className="chevron-left"
        alt="chevron-left"
      />

      <ReactPlayer
        className="background-video"
        playing
        url={`https://youtu.be/${currentVideoId}`}
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
    </StyledPracticeDetail>
  );
};

export default Step1;
