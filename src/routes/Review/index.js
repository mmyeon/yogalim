import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/buttons/Button";
import Template from "../../components/Template";
import {
  usePainScoreAfter,
  usePainScoreBefore,
  useSetPainScoreAfter,
  useSetPainScoreBefore,
} from "../../record";
import Layout from "../../components/Layout";
import * as Styled from "./index.styles";
import { COLORS } from "../../styles/constant";

const MIN_HEIGHT = 13;

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
              <Styled.ScoreContainer>
                <div className="score">
                  <Styled.Bar
                    className="before"
                    height={`${MIN_HEIGHT + painScoreBefore * MIN_HEIGHT}px`}
                  >
                    {painScoreBefore}
                  </Styled.Bar>
                  <span className="bar-name">Before</span>
                </div>

                <div className="wrapper">
                  <img
                    src="/assets/images/review/arrow_right.svg"
                    alt="arrow right"
                  />
                </div>

                <div className="score">
                  <Styled.Bar
                    className="after"
                    height={`${MIN_HEIGHT + painScoreAfter * MIN_HEIGHT}px`}
                  >
                    {painScoreAfter}
                  </Styled.Bar>
                  <span className="bar-name">After</span>
                </div>
              </Styled.ScoreContainer>
            }
          />
        }
        button={
          <div className="button-container">
            <Button
              to="/"
              color={`${COLORS.iris}`}
              backgroundColor={`${COLORS.white}`}
              onClick={resetPainScore}
              text="홈"
            />

            <Button
              to={`/practice/${body}`}
              backgroundColor={`${COLORS.iris}`}
              color={`${COLORS.white}`}
              onClick={resetPainScore}
              text="다음 수련 이어가기"
            />
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
