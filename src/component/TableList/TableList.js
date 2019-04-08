import React from "react";
import PropTypes from 'prop-types';
import {ReactComponent as Logo} from '../../images/icon-up.svg';
import {ReactComponent as ReactLogo} from '../../images/icon-down.svg';

export const TableList = ({children, sort, sortType, onClick}) => {

  return (
    <div className="table__cell" onClick={sort ? onClick : () => {}}>
      {children}
      {sort ?
        <div className='table__sort'>
          <Logo className={sortType === 'Up' ? 'active' : ''}/>
          <ReactLogo className={sortType === 'Down' ? 'active' : ''}/>
        </div>
        : ''
      }
    </div>
  )
};

TableList.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

TableList.defaultProps = {
  children: '',
  onClick: ()=> {}
};