import React from "react";
import {Button} from "../Button/Button";
import styled from 'styled-components';
import './FormAdd.css';

const Wrapper = styled.div`
width: 100%;
background-color: var(--color-accent);
padding: 25px 0;
`;

export const FormAdd = () => {
  return(
    <Wrapper>
      <form action="" className='form'>
        <input type="text" placeholder='Введите название города'/>
        <Button type='submit' add>Добавить</Button>
      </form>
    </Wrapper>
  )
};