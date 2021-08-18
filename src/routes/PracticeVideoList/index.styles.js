import styled from "styled-components";
import { device } from "../../device";
import { COLORS, FONT_WEIGHT } from "../../styles/constant";

export const Container = styled.div`
  background: ${COLORS.lightYellow};
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  > .background {
    width: 100%;
    height: 100%;
    background-image: url("/assets/images/practiceVideoList/bg-mobile.svg");
    background-repeat: no-repeat;
    background-position: left 71% bottom 63%;
    background-size: cover;
    position: relative;

    @media ${device.tablet} {
      background-image: url("/assets/images/practiceVideoList/bg-tablet.svg");
      background-position: center -19%;
    }

    > .content {
      text-align: center;
      height: 100vh;
      position: relative;
      top: 15%;

      > .title {
        font-weight: 300;
        margin-bottom: 6.5em;

        @media ${device.tablet} {
          font-size: 2em;
        }

        > b {
          font-weight: 600;
        }
      }

      > .video-list {
        .video-container {
          overflow: scroll;
          width: 100%;
          height: auto;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 1.3em;

          @media ${device.tablet} {
            position: relative;
            bottom: -9em;
          }

          @media (orientation: landscape) {
            bottom: -3em;
          }

          > .container + .container {
            margin-left: 0.6em;
          }

          > .container {
            position: relative;

            > a {
              display: block;
              width: 100%;
              height: 100%;

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
  }
`;
