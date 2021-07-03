import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/constant";
import Header from "../../components/Header";

const StyledStep2 = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${COLORS.lightYellow};

  > .background {
    width: 101%;
    height: 102%;
    background-image: url("/assets/images/step/pain-record-bg.png");
    background-position: bottom;
    background-size: cover;

    > .title-container {
      > .meditation-img {
        width: 5.5em;
        height: 5.5em;
      }
    }
  }
`;

const Step2 = () => {
  return (
    <StyledStep2>
      <div className="background">
        <Header />
        <div className="title-container">
          <img
            className="meditation-img"
            src="/assets/images/step/meditation-pose.png"
            alt="meditation pose"
          />
          <h1>ddd</h1>
        </div>
      </div>
    </StyledStep2>
  );
};

export default Step2;
