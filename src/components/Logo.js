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
        <svg
          width="20"
          height="17"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.32422"
            y="7.59357"
            width="2.35662"
            height="6.89531"
            fill="#9F7535"
          />
          <path
            opacity="0.1"
            d="M6.2843 7.59357H7.68082V14.4889H6.2843V7.59357Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.47572 2.5314C9.24593 1.0964 8.00225 0 6.5025 0C5.00275 0 3.75907 1.0964 3.52928 2.5314L3.4913 2.53119C1.56311 2.53119 0 4.0943 0 6.02249C0 7.95068 1.56311 9.51379 3.4913 9.51379C4.77436 9.51379 5.89577 8.82166 6.50254 7.79039C7.1093 8.82166 8.23071 9.51379 9.51378 9.51379C11.442 9.51379 13.0051 7.95068 13.0051 6.02249C13.0051 4.0943 11.442 2.53119 9.51378 2.53119C9.50107 2.53119 9.48839 2.53127 9.47572 2.5314Z"
            fill="#9CC27E"
          />
          <path
            opacity="0.1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.45886 7.86266C6.47371 7.83876 6.48828 7.81467 6.50257 7.79039C7.10933 8.82166 8.23074 9.51379 9.51381 9.51379C11.442 9.51379 13.0051 7.95068 13.0051 6.02249C13.0051 4.0943 11.442 2.53119 9.51381 2.53119L9.47575 2.5314C9.24596 1.0964 8.00228 0 6.50253 0C6.48795 0 6.47339 0.00010363 6.45886 0.000310194V7.86266Z"
            fill="black"
          />
        </svg>
        <span>FOREST</span>
      </Link>
    </Container>
  );
};

export default Logo;
