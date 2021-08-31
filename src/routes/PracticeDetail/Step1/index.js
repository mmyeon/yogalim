import React, { useState } from "react";
import ReactPlayer from "react-player";
import * as Styled from "./index.styles";
import Header from "../../../components/Header";
import LongRoundLink from "../../../components/buttons/LongRoundLink";

const Step1 = ({ videoInfo }) => {
  const {
    videoId,
    videoTime: { highlight },
    thumbnail,
  } = videoInfo;

  const [loading, setLoading] = useState(true);

  return (
    <Styled.Container>
      <Header isVisibleBackBtn="isVisibleBackBtn" />

      <ReactPlayer
        className="invisible"
        playing
        url={`https://youtu.be/${videoId}?t=${highlight}`}
        muted
        onStart={() => setLoading(false)}
      />

      {loading ? (
        <img
          src={thumbnail}
          alt="yoga thumbnail"
          width="640px"
          height="360px"
          className="thumbnail"
        />
      ) : (
        <ReactPlayer
          className="background-video"
          playing
          url={`https://youtu.be/${videoId}?t=${highlight}`}
          muted
        />
      )}

      <div className="background"></div>

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

        <LongRoundLink
          to={(location) => `${location.pathname}?step=2`}
          title="수련 시작"
        />
      </div>
    </Styled.Container>
  );
};

export default Step1;
