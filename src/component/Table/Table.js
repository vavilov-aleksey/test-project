import React from "react";
import {TableList} from "../TableList/TableList";
import {HeaderTable, testTable} from '../../data';
import './Table.css'

export const Table = () => {
  return (
    <div className='table__wrapper'>
      <div className="table__header table__tr">
        {
          HeaderTable.map((title, id) => {
            return (
              <TableList key={id}>{title}</TableList>
            )
          })
        }
      </div>
      {
        testTable.map((list, id) => {
          return (
            <div className='table__list table__tr' key={id}>
              <TableList>{list.city}</TableList>
              <TableList>{list.t}</TableList>
              <TableList>{list.a}</TableList>
              <TableList btn/>
            </div>
          )
        })
      }
    </div>
  )
};