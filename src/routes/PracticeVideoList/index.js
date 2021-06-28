import React from "react";
import { useParams } from "react-router";
import Header from "../../components/Header";
import * as Styled from "./index.styles";
import data from "../../data";

const VideoList = () => {
  const params = useParams();
  const bodyPartChoice = data.find(
    (bodyPart) => bodyPart.title.eng === params.body
  ).title.kor;

  return (
    <Styled.Container>
      <div className="background">
        <Header />
        <div className="content">
          <h2 className="title">
            {bodyPartChoice === "목" ||
            bodyPartChoice === "전신" ||
            bodyPartChoice === "골반" ? (
              <>
                <b>{bodyPartChoice}</b>이 편안한 요가
              </>
            ) : (
              <>
                <b>{bodyPartChoice}</b>가 편안한 요가
              </>
            )}
          </h2>
        </div>
      </div>
    </Styled.Container>
  );
};

export default VideoList;
