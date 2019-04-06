import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const ButtonParent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 1px solid var(--color-white-f2);
  padding-left: 40px;
  padding-right: 40px;
  color: var(--color-accent);
  background-color: var(--color-white);
  cursor: pointer;
  outline: none;
  height: 35px;
  
  &:hover {
    border-color: var(--color-accent);
    background-color: var(--color-pink);
  }

  &:active {
    box-shadow: inset 0 3px 3px 0 rgba(0, 0, 0, .5);
  }
  
  ${props => props.add && css`
    background-color: var(--color-accent-dark);
    color: var(--color-white);
    border-color: var(--color-accent);
    height: 50px;
    margin-left: 20px;

    &:hover{
      background-color: var(--color-accent);
      border-color: var(--color-accent-dark)
    }
  `}
`;


export const Button = ({children, onClick, disabled, ...attrs}) => {
  return(
    <ButtonParent
      {...attrs}
      onClick={onClick}
      disabled={disabled}
    >{children}</ButtonParent>
  )
};

ButtonParent.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ButtonParent.defaultProps = {
  children: 'Default button',
  onClick: () => {
    console.log('click test')
  },
  disabled: false
};