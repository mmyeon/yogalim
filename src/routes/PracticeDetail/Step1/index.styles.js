import styled from "styled-components";
import { device } from "../../../device";
import { COLORS, FONT_FAMILY } from "../../../styles/constant";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  @media ${device.tabletM} {
    background: ${COLORS.primaryTeal};
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    position: absolute;
  }

  > .background-video {
    position: relative;
    margin-left: -10em;
    z-index: -2;
    top: -3em;

    @media ${device.mobileL} {
      margin: 0 auto;
    }

    @media ${device.tabletM} {
      z-index: 0;
      margin: 0;
      top: 1em;
    }
  }

  > .background {
    background-image: url("/assets/images/practice/green-wave.svg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -14.5em;
    right: 0;
    position: relative;

    @media ${device.tabletL} {
      width: 0;
    }
  }

  > .contents {
    position: absolute;
    top: 55%;
    left: 0;
    padding: 0 1em;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

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
      text-align: center;

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
