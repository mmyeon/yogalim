import styled from "styled-components";
import { BREAK_POINT, COLORS, FONT_FAMILY } from "../../../styles/constant";

export const Thumbnail = styled.div`
  width: 640px;
  height: 360px;
  background-image: url(${(props) => props.backgroundImg});
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: ${BREAK_POINT.tabletS}) {
    left: 0;
    transform: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: ${BREAK_POINT.tabletS}) {
    background: ${COLORS.primaryTeal};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${BREAK_POINT.laptop}) and (orientation: landscape) {
    height: 100vw;
  }

  .invisible {
    opacity: 0;
    position: absolute;
  }

  > .video-wrapper {
    @media (min-width: ${BREAK_POINT.tabletS}) {
      border: 5px solid ${COLORS.white};
      border-radius: 50px 0;
      overflow: hidden;
      z-index: 10;
      max-width: 92%;
    }

    > .background-video {
      position: relative;
      margin-left: -10em;
      z-index: -2;
      top: -3em;

      @media (min-width: ${BREAK_POINT.mobileL}) {
        margin: 0 auto;
      }

      @media (min-width: ${BREAK_POINT.tabletS}) {
        z-index: 0;
        margin: 0;
        top: 0;
      }
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
    background-position: bottom;
    top: -16em;
    right: 0;
    position: relative;

    @media (min-width: ${BREAK_POINT.tabletS}) {
      top: 0;
      height: auto;
    }

    > .contents {
      padding: 0 1em;
      padding-top: 1em;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      > h1 {
        font-size: 1.3em;
        color: ${COLORS.white};

        @media (min-width: ${BREAK_POINT.tabletL}) {
          font-size: 2em;
        }
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
