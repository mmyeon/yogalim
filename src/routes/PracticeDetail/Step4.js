import React, { useEffect } from "react";
import Template from "../../components/Template";
import Card from "../../components/Card";
import PainScale from "../../components/PainScale";
import LongRoundLink from "../../components/buttons/LongRoundLink";
import { useSelector, useDispatch } from "react-redux";
import { updateAfterScore } from "../../store";

const Step4 = ({ currentVideoId, currentBodyPartInEng }) => {
  const { score } = useSelector((state) => {
    return { score: state.afterScore };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const audioElement = new Audio("/assets/audio/meditation-bell-sound.mp3");
    audioElement.play();
    audioElement.volume = 0.1;
  }, []);

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
              통증이 좀 나아졌나요?
              <br />
              다시 한번 관찰해 보세요.
            </>
          }
          body={
            <PainScale
              updatePainScore={(score) => dispatch(updateAfterScore(score))}
              painScore={score}
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
