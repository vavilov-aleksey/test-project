import {SORT_DATA} from "../../constants";

const sort = (state='', {data, type}) => {

  if (type === SORT_DATA) {
    return data;
  } else {
    return state
  }
};

export default sort;