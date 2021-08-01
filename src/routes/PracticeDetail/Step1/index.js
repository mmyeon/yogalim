import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import LongRoundButton from "../../../components/buttons/LongRoundButton";
import * as Styled from "./index.styles";
import Header from "../../../components/Header";

const Step1 = ({ videoInfo }) => {
  const {
    videoId,
    videoTime: { highlight },
  } = videoInfo;

  return (
    <Styled.Container>
      <Header isVisibleBackBtn="isVisibleBackBtn" />

      <ReactPlayer
        className="background-video"
        playing
        url={`https://youtu.be/${videoId}?t=${highlight}`}
        muted
      />

      <img
        src="/assets/images/practice/green-wave.svg"
        className="green-wave"
        alt="green wave"
      />

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

        <Link to={(location) => `${location.pathname}?step=2`}>
          <LongRoundButton title="수련 시작" />
        </Link>
      </div>
    </Styled.Container>
  );
};

export default Step1;
