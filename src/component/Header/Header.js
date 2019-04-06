import React from "react";
import styled from 'styled-components';

const HeaderParent = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  font-size: 24px;
  font-weight: bold;
`;


export const Header = () => {
  return (
    <React.Fragment>
        <HeaderParent>WeatherMap</HeaderParent>
    </React.Fragment>
)
};
