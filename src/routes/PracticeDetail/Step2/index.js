import React from "react";
import Header from "../../../components/Header";
import LongRoundButton from "../../../components/LongRoundButton";
import PainScale from "../../../components/PainScale";
import * as Styled from "./index.styles";
import Card from "../../../components/Card";

const Step2 = ({ currentBodyInKorean, goNextStep }) => {
  return (
    <Styled.Container>
      <div className="background">
        <Header />

        <div className="contents">
          <div className="title-container">
            <img
              className="meditation-img"
              src="/assets/images/step/meditation-pose.png"
              alt="meditation pose"
            />
            <h1>
              <span className="thinner">수련 하기 전</span>{" "}
              {currentBodyInKorean}의 통증을 기록해보세요
            </h1>
          </div>

          <Card
            title={
              <>
                불편한 정도에 따라서 <br />0 ~ 10 까지 표시해보세요.
              </>
            }
            body={<PainScale />}
          />

          <LongRoundButton onClick={goNextStep} title="수련 시작" />
        </div>
      </div>
    </Styled.Container>
  );
};

export default Step2;
