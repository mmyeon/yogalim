import React from "react";
import styled from "styled-components";
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from "../styles/constant";

const StyledCard = styled.section`
  margin-top: 1em;
  margin-bottom: 1.5em;
  background: ${COLORS.white};
  border-radius: 10px;
  padding: 1em 0.5em;
  width: 17em;
  max-width: 18em;

  > .desc {
    font-family: ${FONT_FAMILY.point};
    color: ${COLORS.black};
    text-align: center;
    font-size: 1.18em;
  }

  > .score-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    > .score {
      margin: 0 1em;
      margin-top: 1.5em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > .bar {
        border-radius: 5px;
        width: 40px;
        height: 0px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        color: white;
        font-size: 0.8em;
        font-weight: ${FONT_WEIGHT.semiBold};

        &.before {
          width: 100%;
          background: ${COLORS.amber};
        }

        &.after {
          width: 100%;
          background: ${COLORS.red};
        }
      }

      > .bar-name {
        font-weight: ${FONT_WEIGHT.semiBold};
      }
    }
  }
`;

const Card = ({ title, body }) => {
  return (
    <StyledCard className="card">
      <p className="desc">{title}</p>
      {body}
    </StyledCard>
  );
};

export default Card;
