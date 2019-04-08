import React, {PureComponent} from "react";
import {TableList} from "../TableList/TableList";
import {HeaderTable} from '../../data';
import './Table.css'
import {connect} from "react-redux";
import {sortCity} from "../../redux/Actions/data";
import WrapperBtn from "../Button/WrapperBtn";

class Table extends PureComponent {

  render(){
    let data = this.props.data;
    const sortType = this.props.sortType;

    const clickSort = () => {
      this.props.sortCity(sortType === '' ? 'Down' : sortType === 'Up' ? '' : 'Up')
    };


    if(sortType === 'Down') {
      data = data.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }

    if(sortType === 'Up') {
      data = data.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }

    return (
      <div className='table__wrapper'>
        {data.length ?
          <div className="table__header table__tr">
            {
              HeaderTable.map((title, id) => {
                return (
                  <TableList key={id}
                             sort={title.sort}
                             onClick={clickSort}
                             sortType={sortType} >{title.city}</TableList>
                )
              })
            }
          </div>
          : ''}
        {
          data.map((city, id) => {
            return(
              <div className={`table__list table__tr`} key={id}>
                <TableList>{city.name}, {city.sys.country}</TableList>
                <TableList>{city.main.temp} °C</TableList>
                <TableList>{city.main.pressure} hPa</TableList>
                <TableList>
                  <WrapperBtn children={city}/>
                </TableList>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default connect(state => ({
  data: state.data,
  sortType: state.sort
}),({sortCity}))(Table)
