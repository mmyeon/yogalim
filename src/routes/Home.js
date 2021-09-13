import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from "../styles/constant";
import { device } from "../device";
import Layout from "../components/Layout";
import LongRoundLink from "../components/buttons/LongRoundLink";
import { slideUp, alignMiddle } from "../styles/animation";
import { useEffect } from "react/cjs/react.development";

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

  > .background {
    top: 1em;
    width: 100%;
    height: 100%;
    background-image: url("/assets/images/home/yoga-in-green.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

    @media ${device.mobileL} {
      background-size: contain;
    }

    > a {
      position: relative;
      top: 55%;
    }
  }

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
    animation: ${slideUp} 2s linear forwards;

    > p {
      position: relative;
      animation: ${alignMiddle} 0.5s linear forwards;

      > b {
        border-bottom: 1px solid ${COLORS.white};
        letter-spacing: 2px;
      }
    }
  }
`;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  // TODO: device 리팩토링 필요
  const MOBILE_ORIENTATION_HEIGHT = 375;
  const TABLET_WIDTH = 768;

  useEffect(() => {
    if (
      window.innerWidth >= TABLET_WIDTH &&
      window.innerHeight > MOBILE_ORIENTATION_HEIGHT
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  return (
    <Layout>
      <MainContainer>
        <div className="text-container">
          <p className="desc">내 몸이 편안한 요가 수련소</p>
          <h1>YOGA FOREST</h1>
        </div>

        <div className="background">
          <LongRoundLink to="/practice" title="수련하기" />
        </div>

        {isVisible && (
          <div className="notice">
            <p>
              🧘🏽 이 서비스는 <b>모바일</b>에 최적화되어 있습니다.
            </p>
          </div>
        )}
      </MainContainer>
    </Layout>
  );
};

export default Home;
