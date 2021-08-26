import React from "react";
import Template from "../../components/Template";
import Card from "../../components/Card";
import PainScale from "../../components/PainScale";
import { usePainScoreAfter, useSetPainScoreAfter } from "../../record";
import LongRoundLink from "../../components/buttons/LongRoundLink";

const Step4 = ({ currentVideoId, currentBodyPartInEng }) => {
  const painScoreAfter = usePainScoreAfter();
  const setPainScoreAfter = useSetPainScoreAfter();

  return (
    <Template
      title={
        <>
          <span className="thinner">수련 후</span>
          <br /> 몸의 변화를 기록해보세요.
        </>
      }
      body={
        <Card
          title={
            <>
              통증이 조금 나아졌나요?
              <br />
              아니면 그대로인가요?
            </>
          }
          body={
            <PainScale
              updatePainScore={(score) => setPainScoreAfter(score)}
              painScore={painScoreAfter}
            />
          }
        />
      }
      button={
        <LongRoundLink
          to={`/practice/${currentBodyPartInEng}/${currentVideoId}/review`}
          title="수련 결과 보기"
        />
      }
    />
  );
};

export default Step4;
