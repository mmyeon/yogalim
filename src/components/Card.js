import React from "react";
import styled from "styled-components";
import { COLORS, FONT_FAMILY } from "../styles/constant";

const StyledCard = styled.section`
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

  > .score-container {
    display: flex;
    justify-content: center;
    align-items: center;

    > .score {
      margin: 0.5em 1em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
