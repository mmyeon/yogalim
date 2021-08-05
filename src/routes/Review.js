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
              <div className="score-container">
                <div className="score before">
                  <span>{painScoreBefore}</span>
                  <h3>Before</h3>
                </div>
                <div className="score after">
                  <span>{painScoreAfter}</span>
                  <h3>After</h3>
                </div>
              </div>
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
