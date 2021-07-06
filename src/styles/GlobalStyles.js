import { createGlobalStyle } from "styled-components";
import { FONT_FAMILY } from "./constant";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}

body {
   font-family :${FONT_FAMILY.korean} ;
}


@font-face {
    font-family: 'KOMACON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/KOMACON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}



`;

export default GlobalStyles;
