import React from "react";
import styled, { keyframes } from "styled-components";
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from "../styles/constant";
import { device } from "../device";
import Layout from "../components/Layout";
import LongRoundLink from "../components/buttons/LongRoundLink";

const showUp = keyframes`
\ 0% {
  height:0%;
  
}
\ 100% {
  height:100%;  
}
`;

const goCenter = keyframes`
\ 0% {
  top: 100%;
}
\ 100% {
  top: 50%;
  transform: translateY(-50%);
}
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLORS.primaryTeal};
  color: ${COLORS.white};
  overflow: hidden;
  text-align: center;
  position: relative;

  > .notice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0px;
    max-height: 40px;
    z-index: 20;
    background: ${COLORS.iris};
    color: ${COLORS.white};
    letter-spacing: 1px;
    animation: ${showUp} 2s linear forwards;
    visibility: hidden;

    @media ${device.tabletM} {
      visibility: visible;
    }

    > p {
      position: relative;
      animation: ${goCenter} 0.5s linear forwards;

      > b {
        border-bottom: 1px solid ${COLORS.white};
        letter-spacing: 2px;
      }
    }
  }

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
    position: absolute;
    bottom: 13%;
    left: 50%;
    transform: translateX(-50%);

    @media ${device.tabletL} {
      bottom: 16%;
    }
  }
`;

const Home = () => {
  return (
    <Layout>
      <MainContainer>
        <div className="notice">
          <p>
            🧘🏽 이 서비스는 <b>모바일</b>에 최적화되어 있습니다.
          </p>
        </div>

        <div className="text-container">
          <p className="desc">내 몸이 편안한 요가 수련소</p>
          <h1>YOGA FORREST</h1>
        </div>

        <img
          className="yoga-img"
          src="/assets/images/home/yoga-in-green.svg"
          alt="yoga meditation"
        />

        <LongRoundLink to="/practice" title="수련하기" />
      </MainContainer>
    </Layout>
  );
};

export default Home;
