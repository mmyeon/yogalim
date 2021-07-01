import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import * as Styled from "./index.styles";
import data from "../../data";

const VideoList = () => {
  const params = useParams();
  const selectedBodyPartObj = data.find(
    (bodyPart) => bodyPart.title.eng === params.body
  );

  const titleInKorean = selectedBodyPartObj.title.kor;
  // const bodyPartChoice = data.find(
  //   (bodyPart) => bodyPart.title.eng === params.body
  // ).title.kor;

  // console.log("bodyPartChoice", bodyPartChoice);

  return (
    <Styled.Container>
      <div className="background">
        <Header />
        <div className="content">
          <h2 className="title">
            {titleInKorean === "목" ||
            titleInKorean === "전신" ||
            titleInKorean === "골반" ? (
              <>
                <b>{titleInKorean}</b>이 편안해지는 요가
              </>
            ) : (
              <>
                <b>{titleInKorean}</b>가 편안해지는 요가
              </>
            )}
          </h2>
          <div className="video-list">
            <div className="video-container">
              {selectedBodyPartObj.playList.map((item) => (
                <img
                  key={item.videoId}
                  className="video"
                  src={item.thumbnail}
                  alt="yoga video thumbnail"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

export default VideoList;
