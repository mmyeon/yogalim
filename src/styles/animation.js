import { keyframes } from "styled-components";

export const slideUp = keyframes`
\ 0% {
  height:0%;
  
}
\ 100% {
  height:100%;  
}
`;

export const slideUpAndFadeIn = keyframes`
\ 0% {
  height:0px;
  opacity:0;
}

\ 100% {
  height:100%;
}
`;

export const alignMiddle = keyframes`
\ 0% {
  top: 100%;
}
\ 100% {
  top: 50%;
  transform: translateY(-50%);
}
`;

export const moveToRight = keyframes`
\ 0% {
  transform: translateX(-10px);
}

\ 100% {
  opacity:1;
  transform: translateX(0px);
}
`;
