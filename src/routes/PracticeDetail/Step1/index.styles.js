import styled from "styled-components";
import { COLORS, FONT_FAMILY } from "../../../styles/constant";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  > .background-video {
    position: relative;
    margin-left: -10em;
    z-index: -2;
    top: -3em;
  }

  > .green-wave {
    position: absolute;
    bottom: -5.5em;
    width: 120%;
    height: 100%;
    left: -10%;
    z-index: -1;
  }

  > .contents {
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: -4.5em;
    position: relative;

    > h1 {
      font-size: 1.3em;
      color: ${COLORS.white};
    }

    > .practice-desc {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${FONT_FAMILY.point};
      margin-top: 1em;
      margin-bottom: 1.2em;

      > img {
        width: 86px;
        height: 86px;
      }

      > .bubble {
        position: relative;

        > img {
          position: absolute;
          z-index: -1;
          width: 23px;
          top: 50%;
          left: 0.4em;
          transform: translateY(-50%);
        }
        > p {
          margin-left: 1.3em;
          background: ${COLORS.lightYellow};
          padding: 1.2em 0.9em;
          border-radius: 16px;
          font-size: 0.87em;
          word-break: keep-all;
          color: ${COLORS.black};
        }
      }
    }
  }
`;
