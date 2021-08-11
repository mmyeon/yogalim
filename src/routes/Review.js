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
  height:0%;
}

\ 100% {
  height:100%;
}
`;

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  left: 50%;
  bottom: 14%;
  transform: translateX(-50%);
  height: 130px;

  > .score {
    margin: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 0em;

    > .bar-name {
      font-weight: ${FONT_WEIGHT.semiBold};
    }
  }
`;

const Bar = styled.div`
  position: absolute;
  bottom: 1.5em;
  border-radius: 5px;
  width: 3em;
  max-height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;
  font-size: 0.8em;
  font-weight: ${FONT_WEIGHT.semiBold};
  animation: ${barMove} 1.5s forwards linear;

  &.before {
    background: ${COLORS.amber};
  }

  &.after {
    background: ${COLORS.red};
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
