import React from "react";
import Card from "../components/Card";
import Button from "../components/buttons/Button";
import Template from "../components/Template";

const Review = () => {
  return (
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
        />
      }
      button={
        <div className="button-container">
          <Button text="홈" />
          <Button text="다음 수련 이어가기" />
        </div>
      }
    />
  );
};

export default Review;
