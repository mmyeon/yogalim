import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import data from "../../data";
import * as Styled from "./index.styles";

const Practice = () => {
  return (
    <Styled.Practice>
      <div className="background">
        <div className="container">
          <Header />
          <div className="content">
            <h2>
              평소 신체 어느 부분이
              <br /> <span className="thiner">불편하신가요?</span>
            </h2>
            <div className="button-container">
              {data.map((bodyPart) => (
                <Link to={`/practice/${bodyPart.title.eng}`}>
                  <Button
                    key={bodyPart}
                    text={bodyPart.title.kor}
                    backgroundColor={bodyPart.buttonColor}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Styled.Practice>
  );
};

export default Practice;
