import React from "react";
import Header from "../../components/Header";
import SquareButton from "../../components/buttons/SquareButton";
import data from "../../data";
import * as Styled from "./index.styles";
import Layout from "../../components/Layout";

const Practice = () => {
  return (
    <Layout>
      <Styled.Practice>
        <div className="background">
          <div className="container">
            <Header isVisibleLogo="isVisibleLogo" />

            <div className="content">
              <h2>
                평소 신체 어느 부분이
                <span className="thinner"> 불편하신가요?</span>
              </h2>

              <div className="button-container">
                {data.map((bodyPart) => (
                  <SquareButton
                    key={bodyPart.title.kor}
                    to={`/practice/${bodyPart.title.eng}`}
                    backgroundColor={bodyPart.buttonColor}
                    text={bodyPart.title.kor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Styled.Practice>
    </Layout>
  );
};

export default Practice;
