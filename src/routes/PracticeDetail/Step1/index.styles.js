import styled from "styled-components";
import { device } from "../../../device";
import { COLORS, FONT_FAMILY } from "../../../styles/constant";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  @media ${device.tablet} {
    background: ${COLORS.primaryTeal};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  > .background-video {
    position: relative;
    margin-left: -10em;
    z-index: -2;
    top: -3em;

    @media ${device.tablet} {
      z-index: 0;
      margin-left: 0;
    }
  }

  > .green-wave {
    position: absolute;
    bottom: -5.5em;
    width: 120%;
    height: 100%;
    left: -10%;
    z-index: 0;

    @media ${device.tablet} {
      display: none;
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
    top: -14em;
    left: 0%;
    position: relative;

    > .contents {
      padding: 0 1em;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media ${device.tablet} {
        top: -2em;
      }

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
  }
`;
