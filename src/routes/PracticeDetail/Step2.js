import React from "react";
import LongRoundButton from "../../components/LongRoundButton";
import PainScale from "../../components/PainScale";
import Card from "../../components/Card";
import Template from "../../components/Template";

const Step2 = ({ currentBodyInKorean, goNextStep }) => {
  return (
    <Template
      title={
        <>
          <span className="thinner">수련 하기 전</span> {currentBodyInKorean}의
          통증을 기록해보세요
        </>
      }
      body={
        <Card
          title={
            <>
              불편한 정도에 따라서 <br />0 ~ 10 까지 표시해보세요.
            </>
          }
          body={<PainScale />}
        />
      }
      button={<LongRoundButton onClick={goNextStep} title="수련 시작" />}
    />
  );
};

export default Step2;
