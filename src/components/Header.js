import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.header`
  position: absolute;
  top: 1.5em;
  width: 100%;
  text-align: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

export default Header;
