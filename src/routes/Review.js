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
import styled from "styled-components";
import { FONT_WEIGHT } from "../styles/constant";

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  > .score {
    margin: 0 1em;
    margin-top: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .bar {
      border-radius: 5px;
      width: 3em;
      height: 0px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      color: white;
      font-size: 0.8em;
      font-weight: ${FONT_WEIGHT.semiBold};

      &.before {
        background: ${COLORS.amber};
      }

      &.after {
        background: ${COLORS.red};
      }
    }

    > .bar-name {
      font-weight: ${FONT_WEIGHT.semiBold};
    }
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
                  <div
                    className="bar before"
                    style={{ height: `${painScoreBefore * 10}px` }}
                  >
                    {painScoreBefore}
                  </div>
                  <span className="bar-name">Before</span>
                </div>

                <div className="score">
                  <div
                    className="bar after"
                    style={{ height: `${painScoreAfter * 10}px` }}
                  >
                    {painScoreAfter}
                  </div>
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
