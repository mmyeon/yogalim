import React from "react";
import Card from "../components/Card";
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
    />
  );
};

export default Review;
