import styled from "styled-components";
import { WIDTH_TABLET_XS } from "../../device";
import { COLORS, FONT_WEIGHT } from "../../styles/constant";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLORS.lightYellow};
  overflow: hidden;

  @media (max-width: ${WIDTH_TABLET_XS}) and (orientation: landscape) {
    overflow: scroll;
    height: 68vw;
  }

  > .background {
    width: 101%;
    height: 102%;
    background-image: url("/assets/images/step/pain-record-bg.png");
    background-position: 64% 1em;
    background-size: cover;
    background-repeat: no-repeat;

    > .contents-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      @media (orientation: landscape) {
        flex-direction: row;
      }

      > .title-container {
        margin-bottom: 1em;
        display: flex;
        justify-content: center;
        align-items: end;
        line-height: 27px;
        word-break: keep-all;

        @media (orientation: landscape) {
          margin-right: 2em;
        }

        > .meditation-img {
          width: 5.5em;
          height: 5.5em;
        }

        > h1 {
          font-size: 1.5em;
          padding-left: 0.3em;
          font-weight: ${FONT_WEIGHT.semiBold};
          letter-spacing: 1px;
          width: min-content;

          .thinner {
            font-weight: ${FONT_WEIGHT.thin};
          }
        }
      }

      > .body-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > .button-container {
          > .button + .button {
            margin-left: 1em;
          }
        }
      }
    }
  }
`;
