import styled from "styled-components";
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from "../../../styles/constant";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${COLORS.lightYellow};
  overflow: hidden;

  > .background {
    width: 101%;
    height: 102%;
    background-image: url("/assets/images/step/pain-record-bg.png");
    background-position: 64% 1em;
    background-size: cover;
    background-repeat: no-repeat;

    > .contents {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > .title-container {
        display: flex;
        max-width: 70%;
        margin: 0 auto;
        justify-content: center;
        align-items: end;
        line-height: 27px;
        padding-top: 6em;
        word-break: keep-all;

        > .meditation-img {
          width: 5.5em;
          height: 5.5em;
        }

        > h1 {
          font-size: 1.5em;
          padding-left: 0.3em;
          font-weight: ${FONT_WEIGHT.semiBold};
          letter-spacing: 1px;

          .thinner {
            font-weight: ${FONT_WEIGHT.thin};
          }
        }
      }

      > .pain-record-container {
        margin-top: 1em;
        margin-bottom: 1.5em;
        background: ${COLORS.white};
        border-radius: 10px;
        padding: 1em 0;

        > .desc {
          font-family: ${FONT_FAMILY.point};
          color: ${COLORS.black};
          text-align: center;
          font-size: 1.18em;
        }
      }

      > button {
        margin-bottom: 2em;
      }
    }
  }
`;
