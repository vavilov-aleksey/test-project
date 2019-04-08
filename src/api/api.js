import axios from 'axios';
import {url} from '../constants';

export const api = (city) => {
    return axios.get(`${url}?q=${city}&appid=${process.env.REACT_APP_USER_TOKEN}&units=metric`)
};
