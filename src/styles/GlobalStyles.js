import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


@font-face {
    font-family: 'KOMACON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/KOMACON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}



`;

export default GlobalStyles;
