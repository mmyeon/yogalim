import React from "react";
import styled from "styled-components";
import { COLORS, FONT_FAMILY } from "../styles/constant";

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
