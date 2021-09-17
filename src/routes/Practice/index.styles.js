import styled from "styled-components";
import { COLORS } from "../../styles/constant";
import { WIDTH_TABLET_L } from "../../device";

export const Practice = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLORS.lightYellow};
  overflow: hidden;

  > .background {
    background-image: url("/assets/images/practice/yoga-in-mountain.svg");
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: 63.5%;
    background-size: cover;

    @media (min-width: ${WIDTH_TABLET_L}) {
      background-position: bottom;
    }

    > .container {
      max-width: 700px;
      margin: 0 auto;
      position: relative;
      z-index: 10;

      > .content {
        padding-top: 5em;
        max-width: 80%;
        margin: 0 auto;

        > h2 {
          font-size: 1.6em;
          letter-spacing: 1px;
          margin-bottom: 0.5em;
          word-break: keep-all;

          > .thinner {
            font-weight: 400;
          }
        }

        > .button-container {
          margin-top: 0.7em;
          display: flex;
          flex-direction: row;
          flex-flow: wrap;
          justify-content: space-evenly;
          align-items: center;
          margin: 0 auto;
          padding: 0 1em;

          > a {
            margin-bottom: 0.5em;
            margin-right: 0.5em;
          }
        }
      }
    }
  }
`;
