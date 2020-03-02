import styled from "@emotion/styled"
import { css } from "@emotion/core"

const breakpoints = [320, 480, 768, 992, 1200];
const mediaQuery = breakpoints.map( breakpoint => {
    return `@media (min-width: ${breakpoint}px)`;
});

const base = css`
    font-family: 'Astounder Squared BB', 'Forma DJR Display', sans-serif;
    font-size: 62.5%;
    text-decoration: none;
    text-align: center;
    margin: 0 auto;
    ${mediaQuery[0]} {
        font-size: 1rem;
    }
    ${mediaQuery[1]} {
        font-size: 1.4rem;
    }
    ${mediaQuery[2]} {
        font-size: 1.6rem;
    }
    ${mediaQuery[3]} {
        font-size: 1.8rem;
    }
    ${mediaQuery[4]} {
        font-size: 3rem;
    }
`;

export { base, mediaQuery };

