import {ADD_CITY, INIT_DATA, REMOVE_CITY, SORT_DATA} from "../../constants";

export const data = (data) => ({
  type: INIT_DATA,
  data
});

export const removeCity = (data) => ({
  type: REMOVE_CITY,
  data
});

export const addCity = (data) => ({
  type: ADD_CITY,
  data
});

export const sortCity = (data) => ({
  type: SORT_DATA,
  data
});