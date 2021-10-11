import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import * as Styled from "./index.styles";
import data from "../../data";
import Layout from "../../components/Layout";
import { useDispatch } from "react-redux";
import { updateAfterScore, updateBeforeScore } from "../../store";

const PracticeVideoList = () => {
  const { body } = useParams();
  const dispatch = useDispatch();
  const currentBodyPart = body;
  const selectedBodyPartInfo = data.find(
    (bodyPart) => bodyPart.title.eng === currentBodyPart
  );
  const titleInKorean = selectedBodyPartInfo.title.kor;

  useEffect(() => {
    dispatch(updateBeforeScore(0));
    dispatch(updateAfterScore(0));
  }, []);

  return (
    <Layout>
      <Styled.Container>
        <div className="background">
          <Header
            isVisibleBackBtn="isVisibleBackBtn"
            isVisibleLogo="isVisibleLogo"
          />
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

            <ul className="video-list">
              {selectedBodyPartInfo.playList.map((item) => (
                <li className="video-container" key={item.videoId}>
                  <Link
                    to={(location) =>
                      `${location.pathname}/${item.videoId}?step=1`
                    }
                  >
                    <picture>
                      <source srcSet={item.thumbnail} />

                      <img
                        className="thumbnail"
                        src={item.thumbnail}
                        alt="yoga video thumbnail"
                        width="213px"
                        height="250px"
                      />
                    </picture>

                    <div className="title-container">
                      <h3>{item.title}</h3>
                      <span>{item.duration}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Styled.Container>
    </Layout>
  );
};

export default PracticeVideoList;
