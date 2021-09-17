import React from "react";
import Header from "../Header";
import * as Styled from "./index.styles";

const Template = ({ title, body, button }) => {
  return (
    <Styled.Container>
      <div className="background">
        <Header />

        <div className="contents-container">
          <div className="title-container">
            <img
              className="meditation-img"
              src="/assets/images/step/meditation-pose.png"
              alt="meditation pose"
            />
            <h1>{title}</h1>
          </div>

          <div className="body-container">
            {body}
            {button}
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

export default Template;
