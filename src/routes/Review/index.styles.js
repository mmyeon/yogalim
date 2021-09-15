import { COLORS } from "../../styles/constant";
import styled from "styled-components";
import { FONT_WEIGHT } from "../../styles/constant";
import { slideUpAndFadeIn, moveToRight } from "../../styles/animation";

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  height: 143px;

  > .score {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .bar-name {
      font-weight: ${FONT_WEIGHT.semiBold};
      z-index: 10;
    }
  }

  > .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 30px;
      height: 30px;
      opacity: 0;
      margin-right: 0.5em;
      margin-bottom: 2.7em;
      animation: ${moveToRight} 0.5s forwards 0.5s linear;
    }
  }
`;

export const Bar = styled.div`
  position: absolute;
  bottom: 1.3em;
  border-radius: 5px;
  width: 3em;
  max-height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.8em;
  font-weight: ${FONT_WEIGHT.semiBold};
  animation: ${slideUpAndFadeIn} 1.5s forwards linear;
  margin-bottom: 0.5em;
  padding: 0;

  &.before {
    background: ${COLORS.amber};
  }

  &.after {
    background: ${COLORS.red};
    height: 0;
    animation-delay: 1s;
  }
`;
