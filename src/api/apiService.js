import axios from 'axios';
import { URL } from '../constants/api';

export const fetchBeersFromApi = () => // eslint-disable-line
  axios
    .get(`${URL}/beers`)
    .then(response => response.data);
