export const GET_PROP = 'GET_PROP';
export const GET_PROP_BY_ID = 'GET_PROP_BY_ID';
export const POST_PROP_BY_ID = 'POST_PROP_BY_ID';
// Filtros
export const BY_ORIENTATION = 'BY_ORIENTATION';
export const BY_OPERATION = 'BY_OPERATION';
export const BY_FLOOR = 'BY_FLOOR';
export const BY_PRICE = 'BY_PRICE';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';

import axios from 'axios';

export function getAllProperties() {
  return async function (dispatch) {
    try {
      const response = await axios.get('https://bienesraices-production-9eb3.up.railway.app/realState');

      dispatch({
        type: GET_PROP,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error while getting realStateHandler', error);
    }
  };
}

export function getPropById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/realState/${id}`);
      return dispatch({
        type: GET_PROP_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error while getting Get Prop By Id', error);
    }
  };
}

export function postProp() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/realState`);
      return dispatch({
        type: POST_PROP_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error while getting Get Prop By Id', error);
    }
  };
}

export const orderByOrientation = (Orientation) => {
  return {
    type: BY_ORIENTATION,
    payload: Orientation,
  };
};

export const orderByOperation = (Operation) => {
  return {
    type: BY_OPERATION,
    payload: Operation,
  };
};

export const orderByFloor = (Floor) => {
  return {
    type: BY_FLOOR,
    payload: Floor,
  };
};

export const OrderByPrice = (Price) => {
  return {
    type: BY_PRICE,
    payload: Price,
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
    payload: [],
  };
};
