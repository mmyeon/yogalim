import React from "react";
import styled from "styled-components";
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from "../../styles/constant";
import Header from "../../components/Header";

const StyledStep2 = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${COLORS.lightYellow};

  > .background {
    width: 101%;
    height: 102%;
    background-image: url("/assets/images/step/pain-record-bg.png");
    background-position: bottom;
    background-size: cover;

    > .title-container {
      display: flex;
      max-width: 70%;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      line-height: 27px;
      padding-top: 4.5em;
      word-break: keep-all;

      > .meditation-img {
        width: 5.5em;
        height: 5.5em;
      }

      > h1 {
        font-size: 1.5em;
        font-family: ${FONT_FAMILY.korean};
        padding-left: 0.3em;
        font-weight: ${FONT_WEIGHT.semiBold};
        letter-spacing: 1px;

        .thinner {
          font-weight: ${FONT_WEIGHT.thin};
        }
      }
    }
  }
`;

const Step2 = ({ currentBodyInKorean }) => {
  return (
    <StyledStep2>
      <div className="background">
        <Header />
        <div className="title-container">
          <img
            className="meditation-img"
            src="/assets/images/step/meditation-pose.png"
            alt="meditation pose"
          />
          <h1>
            <span className="thinner">수련 하기 전</span> {currentBodyInKorean}
            의 통증을 기록해보세요
          </h1>
        </div>
      </div>
    </StyledStep2>
  );
};

export default Step2;
