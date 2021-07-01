import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import * as Styled from "./index.styles";
import data from "../../data";

const VideoList = () => {
  const params = useParams();
  const currentUBodyPart = params.body;
  const selectedBodyPartObj = data.find(
    (bodyPart) => bodyPart.title.eng === currentUBodyPart
  );
  const titleInKorean = selectedBodyPartObj.title.kor;

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
                <Link to={`/practice/${currentUBodyPart}/${item.videoId}`}>
                  <img
                    key={item.videoId}
                    className="video"
                    src={item.thumbnail}
                    alt="yoga video thumbnail"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

export default VideoList;
