import styled from "styled-components";
import { COLORS } from "../../styles/constant";

export const Container = styled.div`
  background: ${COLORS.lightYellow};
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;

  > svg {
    /* TODO: 이미지 개선하기  */
    position: relative;
    right: 104%;
    top: 1em;
  }
`;
