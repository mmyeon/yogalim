import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;

const Layout = ({ children }) => {
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return <Container>{children}</Container>;

  function handleResize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }
};

export default Layout;
