import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import LongRoundLink from "../../components/buttons/LongRoundLink";
import * as Styled from "./index.styles";

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
      <Styled.MainContainer>
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
      </Styled.MainContainer>
    </Layout>
  );
};

export default Home;
