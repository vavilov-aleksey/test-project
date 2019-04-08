import {ADD_CITY, INIT_DATA, REMOVE_CITY} from '../../constants';

const data = (state=[], {data, type}) => {

  switch(type) {
    case INIT_DATA :
      return [{
        ...data
      }];
    case ADD_CITY :
      return [
        ...state, data
      ];
    case REMOVE_CITY :
      return state.filter( val => val !== data );
    default:
      return state
  }
};

export default data;