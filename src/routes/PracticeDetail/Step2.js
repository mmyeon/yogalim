import React from "react";
import LongRoundButton from "../../components/buttons/LongRoundButton";
import PainScale from "../../components/PainScale";
import Card from "../../components/Card";
import Template from "../../components/Template";
import { usePainScoreBefore, useSetPainScoreBefore } from "../../record";

const Step2 = ({ currentBodyInKorean, goNextStep }) => {
  const painScoreBefore = usePainScoreBefore();
  const setPainScoreBefore = useSetPainScoreBefore();

  return (
    <Template
      title={
        <>
          <span className="thinner">수련 하기 전</span>
          <br />
          {currentBodyInKorean}의 통증을 기록해보세요
        </>
      }
      body={
        <Card
          title={
            <>
              불편한 정도에 따라서 <br />0 ~ 10 까지 표시해보세요.
            </>
          }
          body={
            <PainScale
              updatePainScore={updatePainScoreBefore}
              painScore={painScoreBefore}
            />
          }
        />
      }
      button={<LongRoundButton onClick={goNextStep} title="수련 시작" />}
    />
  );

  function updatePainScoreBefore(e) {
    const currentPainScore = parseInt(e.target.value);
    setPainScoreBefore(currentPainScore);
  }
};

export default Step2;
