import React from "react";
import styled from "styled-components";
import BackButton from "./buttons/BackButton";
import Logo from "./Logo";

const StyledHeader = styled.header`
  position: absolute;
  top: 1.5em;
  width: 100%;
  height: 2em;
  text-align: center;

  > .backButton {
    position: absolute;
    left: 1em;
    top: 0;
  }

  > .logo {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Header = ({ isVisibleBackBtn }) => {
  return (
    <StyledHeader>
      {isVisibleBackBtn && <BackButton />}

      <Logo />
    </StyledHeader>
  );
};

export default Header;
