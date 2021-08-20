import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from "../styles/constant";
import LongRoundButton from "../components/buttons/LongRoundButton";
import { device } from "../device";
import Layout from "../components/Layout";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLORS.primaryTeal};
  color: ${COLORS.white};
  overflow: hidden;
  text-align: center;
  position: relative;

  .text-container {
    padding-top: 4.5em;

    > .desc {
      font-family: ${FONT_FAMILY.point};
      font-size: 0.9em;
      letter-spacing: 0.1em;
      margin-bottom: 0.2em;
    }

    > h1 {
      font-family: ${FONT_FAMILY.english};
      font-weight: ${FONT_WEIGHT.thin};
      font-size: 3.1em;
      letter-spacing: 1px;
    }
  }

  > .yoga-img {
    position: relative;
    width: 120%;
    height: 100%;
    transform: translate(-50%, -3px);
    left: 50%;
  }

  > a {
    width: 100%;
    position: absolute;
    bottom: 13%;
    left: 50%;
    transform: translateX(-50%);

    @media ${device.tabletL} {
      bottom: 16%;
    }
  }
`;

const Main = () => {
  return (
    <Layout>
      <MainContainer>
        <div className="text-container">
          <p className="desc">내 몸이 편안한 요가 수련소</p>
          <h1>YOGA FORREST</h1>
        </div>
        <img
          className="yoga-img"
          src="/assets/images/home/yoga-in-green.svg"
          alt="yoga meditation"
        />
        <Link to="/practice">
          <LongRoundButton title="수련하기" />
        </Link>
      </MainContainer>
    </Layout>
  );
};

export default Main;
