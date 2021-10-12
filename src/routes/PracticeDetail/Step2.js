import React from "react";
import { useHistory } from "react-router-dom";
import LongRoundButton from "../../components/buttons/LongRoundButton";
import PainScale from "../../components/PainScale";
import Card from "../../components/Card";
import Template from "../../components/Template";
import { useSelector, useDispatch } from "react-redux";
import { updateBeforeScore } from "../../store";

const Step2 = ({ currentBodyPartInKorean }) => {
  const { beforeScore } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { pathname, search },
  } = history;

  return (
    <Template
      title={
        <>
          <span className="thinner">수련 하기 전</span>
          <br />
          {currentBodyPartInKorean} 통증을 기록해보세요.
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
              updatePainScore={(score) => dispatch(updateBeforeScore(score))}
              painScore={beforeScore}
            />
          }
        />
      }
      button={<LongRoundButton onClick={checkUserInput} title="수련 시작" />}
    />
  );

  function checkUserInput() {
    if (beforeScore === 0) {
      confirmPainScore();
    } else {
      goNextStep();
    }
  }

  function goNextStep() {
    history.push(`${pathname}?step=3`);
  }

  function confirmPainScore() {
    if (window.confirm("🙋‍♀️잠시만요. 정말 통증 없이 편안하신가요?")) {
      goNextStep();
    } else {
      history.push(pathname + search);
    }
  }
};

export default Step2;
