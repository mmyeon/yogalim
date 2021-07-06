import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../styles/constant";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .range {
    width: 18.75rem;
    height: 4em;
    background: white;
    border-radius: 10px;
    padding: 0 2.8em;

    .slider-value {
      position: relative;
      width: 100%;

      span {
        position: absolute;
        width: 2em;
        height: 2em;
        color: ${COLORS.white};
        transform: rotate(45deg);
        font-weight: ${FONT_WEIGHT.bold};
        font-size: 1.125em;
        top: -27px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        right: 1px;
      }

      span:after {
        position: absolute;
        content: "";
        width: 2em;
        height: 2em;
        background: ${COLORS.primaryTeal};
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        border: 3px solid ${COLORS.white};
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        border-bottom-left-radius: 50%;
        text-align: center;
        line-height: 55px;
        z-index: -1;
      }
    }

    .field {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      .value {
        position: absolute;
        font-size: 1.125em;
        font-weight: ${FONT_WEIGHT.bold};
        color: ${COLORS.primaryTeal};
      }

      .value.left {
        left: -1.375em;
      }
      .value.right {
        right: -1.75em;
      }

      input {
        -webkit-appearance: none;
        width: 100%;
        height: 3px;
        border: none;
        outline: none;
        background: #ddd;
        border-radius: 5px;
      }

      input::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: ${COLORS.primaryTeal};
        cursor: pointer;
      }
    }
  }
`;
