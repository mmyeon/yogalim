import styled from "styled-components";
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from "../../styles/constant";
import { device } from "../../device";
import { slideUp, alignMiddle } from "../../styles/animation";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLORS.primaryTeal};
  color: ${COLORS.white};
  overflow: hidden;
  text-align: center;
  position: relative;

  .text-container {
    padding-top: 4.5em;

    @media ${device.tabletL} {
      padding-top: 7em;
    }

    @media (orientation: landscape) {
      padding-top: 1em;
    }

    @media ${device.desktop} and (orientation: landscape) {
      padding-top: 7em;
    }

    > .desc {
      font-family: ${FONT_FAMILY.point};
      font-size: 0.9em;
      letter-spacing: 0.1em;
    }

    > h1 {
      font-family: ${FONT_FAMILY.english};
      font-weight: ${FONT_WEIGHT.thin};
      font-size: 3.1em;
      letter-spacing: 1px;
    }
  }

  > .background {
    top: 1em;
    width: 100%;
    height: 100%;
    background-image: url("/assets/images/home/yoga-in-green.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

    @media ${device.mobileL} {
      background-size: contain;
    }

    /* TODO: 매직넘버 리팩토링 필요 */
    @media (max-width: 667px) and (orientation: landscape) {
      top: 0;
    }

    > a {
      position: relative;
      top: 55%;
    }
  }

  > .notice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0px;
    max-height: 40px;
    z-index: 20;
    background: ${COLORS.iris};
    color: ${COLORS.white};
    letter-spacing: 1px;
    animation: ${slideUp} 2s linear forwards;

    > p {
      position: relative;
      animation: ${alignMiddle} 0.5s linear forwards;

      > b {
        border-bottom: 1px solid ${COLORS.white};
        letter-spacing: 2px;
      }
    }
  }
`;
