import React, { useState } from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery } from '../styles/global.js'

const ToggleButton = () => {
    return (
        <Button>Click</Button>
    );
}

export default ToggleButton;

const Button = styled.button`
  width: 80px;
  place-self: flex-end;
  border-radius: 25px;
  font-size: 1rem;
  line-height: 0;
  padding: 10px;
  color: #798BE4;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  :hover {
    color: #DBE7FB;
  }
  :focus {
    color: #BC9612;
  }
  :active {
    color: #BC9612;
  }
`;

