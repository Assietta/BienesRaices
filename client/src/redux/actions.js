export const GET_PROP = 'GET_PROP';
export const GET_PROP_BY_ID = 'GET_PROP_BY_ID';
export const POST_PROP_BY_ID = 'POST_PROP_BY_ID';
import axios from 'axios';

export function getAllProperties() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/realState');

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
