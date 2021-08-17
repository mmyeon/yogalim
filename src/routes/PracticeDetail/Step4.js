import React from "react";
import Template from "../../components/Template";
import Card from "../../components/Card";
import PainScale from "../../components/PainScale";
import LongRoundButton from "../../components/buttons/LongRoundButton";
import { Link } from "react-router-dom";
import { usePainScoreAfter, useSetPainScoreAfter } from "../../record";

const AfterPainRecord = ({ currentVideoId, currentBodyPartInEng }) => {
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
        <Link to={`/practice/${currentBodyPartInEng}/${currentVideoId}/review`}>
          <LongRoundButton title="수련 결과 보기" />
        </Link>
      }
    />
  );
};

export default AfterPainRecord;
