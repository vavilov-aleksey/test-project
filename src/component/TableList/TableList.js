import React from "react";
import PropTypes from 'prop-types';
import {Button} from "../Button/Button";


export const TableList = ({children, btn, sort}) => {
  return (
    !btn ?
      <div className="table__cell">
        {children}
        {sort && '>'}
      </div>
      :
      <div className="table__cell"><Button>Удалить</Button></div>
  )
};

TableList.propTypes = {
  children: PropTypes.node
};

TableList.defaultProps = {
  children: ''
};