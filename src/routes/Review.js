import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/buttons/Button";
import Template from "../components/Template";
import { COLORS } from "../styles/constant";
import {
  usePainScoreAfter,
  usePainScoreBefore,
  useSetPainScoreAfter,
  useSetPainScoreBefore,
} from "../record";
import Layout from "../components/Layout";
import styled, { keyframes } from "styled-components";
import { FONT_WEIGHT } from "../styles/constant";

const barMove = keyframes`
\ 0% {
  height:0px;
  opacity:0;
}

\ 100% {
  height:100%;
}
`;

const reveal = keyframes`
\ 0% {
  transform: translateX(-10px);
}

\ 100% {
  opacity:1;
  transform: translateX(0px);
}
`;

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  height: 140px;

  > .score {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .bar-name {
      font-weight: ${FONT_WEIGHT.semiBold};
      z-index: 10;
    }
  }

  > .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 30px;
      height: 30px;
      opacity: 0;
      margin-right: 0.5em;
      margin-bottom: 2.7em;
      animation: ${reveal} 0.5s forwards 0.5s linear;
    }
  }
`;

const Bar = styled.div`
  position: absolute;
  bottom: 1.3em;
  border-radius: 5px;
  width: 3em;
  max-height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-items: center;
  color: white;
  font-size: 0.8em;
  font-weight: ${FONT_WEIGHT.semiBold};
  animation: ${barMove} 1.5s forwards linear;
  margin-bottom: 0.5em;
  padding: 0;

  &.before {
    background: ${COLORS.amber};
  }

  &.after {
    background: ${COLORS.red};
    height: 0;
    animation-delay: 1s;
  }
`;

const Review = () => {
  const { body } = useParams();
  const painScoreBefore = usePainScoreBefore();
  const painScoreAfter = usePainScoreAfter();
  const setPainScoreBefore = useSetPainScoreBefore();
  const setPainScoreAfter = useSetPainScoreAfter();

  return (
    <Layout>
      <Template
        title={
          <>
            몸과 마음의 변화가
            <br />
            <span className="thinner">느껴지시나요?</span>
          </>
        }
        body={
          <Card
            title={
              <>
                수련 전 / 후 <br />
                변화를 살펴볼까요?
              </>
            }
            body={
              <ScoreContainer>
                <div className="score">
                  <Bar className="before" height={`${painScoreBefore * 14}px`}>
                    {painScoreBefore}
                  </Bar>
                  <span className="bar-name">Before</span>
                </div>

                <div className="wrapper">
                  <img
                    src="/assets/images/review/arrow_right.svg"
                    alt="arrow right"
                  />
                </div>

                <div className="score">
                  <Bar className="after" height={`${painScoreAfter * 14}px`}>
                    {painScoreAfter}
                  </Bar>
                  <span className="bar-name">After</span>
                </div>
              </ScoreContainer>
            }
          />
        }
        button={
          <div className="button-container">
            <Link to="/">
              <Button
                color={`${COLORS.iris}`}
                backgroundColor={`${COLORS.white}`}
                onClick={resetPainScore}
                text="홈"
              />
            </Link>
            <Link to={`/practice/${body}`}>
              <Button
                backgroundColor={`${COLORS.iris}`}
                color={`${COLORS.white}`}
                onClick={resetPainScore}
                text="다음 수련 이어가기"
              />
            </Link>
          </div>
        }
      />
    </Layout>
  );

  function resetPainScore() {
    setPainScoreAfter(0);
    setPainScoreBefore(0);
  }
};

export default Review;
