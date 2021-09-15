import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONT_FAMILY } from "../styles/constant";

const Container = styled.div`
  font-family: ${FONT_FAMILY.english};

  > a {
    text-decoration: none;

    span {
      font-size: 1.3em;
      letter-spacing: 1px;
      color: ${COLORS.darkGreen2};
    }
  }
`;

const Logo = () => {
  return (
    <Container className="logo">
      <Link to="/">
        <span>YOGA</span>

        <img src="/logo-tree.svg" alt="tree" />

        <span>FOREST</span>
      </Link>
    </Container>
  );
};

export default Logo;
