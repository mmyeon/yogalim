import styled from "styled-components";
import { WIDTH_DESKTOP, WIDTH_LAPTOP, WIDTH_TABLET_L } from "../../device";
import { COLORS, FONT_WEIGHT } from "../../styles/constant";

export const Container = styled.div`
  background: ${COLORS.lightYellow};
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-height: ${WIDTH_LAPTOP}) and (orientation: landscape) {
    overflow: scroll;
    height: 80vw;
  }

  > .background {
    width: 100%;
    height: 100%;
    background-image: url("/assets/images/practiceVideoList/bg-mobile.svg");
    background-repeat: no-repeat;
    background-position: left 71% bottom 63%;
    background-size: cover;
    position: relative;

    @media (min-width: ${WIDTH_TABLET_L}) {
      background-image: url("/assets/images/practiceVideoList/bg-tablet.svg");
      background-position: center -19%;
    }

    @media (min-width: ${WIDTH_DESKTOP}) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > .content {
      text-align: center;
      height: auto;
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;

      @media (orientation: landscape) {
        justify-content: center;
      }

      > .title {
        font-weight: 300;

        @media (min-width: ${WIDTH_TABLET_L}) {
          font-size: 2em;
        }

        > b {
          font-weight: 600;
        }
      }

      .video-list {
        overflow: scroll;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 1.3em;
        margin-top: 5em;

        @media (min-width: ${WIDTH_TABLET_L}) {
          position: relative;
          margin-top: 8em;
        }

        > .video-container + .video-container {
          margin-left: 0.6em;
        }

        > .video-container {
          position: relative;

          > a {
            picture {
              display: block;
            }

            picture::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(0deg, ${COLORS.black}, transparent);
              opacity: 0.8;
            }

            picture::after {
              content: "";
              display: block;
              position: absolute;
              top: 0;
              right: -1.3rem;
              width: 1.3rem;
              height: 1px;
            }

            .thumbnail {
              background: ${COLORS.primaryTeal};
              display: block;
              object-fit: cover;
            }

            .title-container {
              position: absolute;
              bottom: 1.5em;
              color: ${COLORS.white};
              text-align: left;
              padding: 0 1.4em;

              > h3 {
                font-size: 1.2em;
                font-weight: ${FONT_WEIGHT.bold};
                margin-bottom: 0.1em;
                word-break: keep-all;
                letter-spacing: 1.5px;
              }

              > span {
                font-size: 0.8em;
                font-weight: ${FONT_WEIGHT.thin};
              }
            }
          }
        }
      }
    }
  }
`;
