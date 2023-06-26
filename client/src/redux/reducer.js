import {
  GET_PROP,
  GET_PROP_BY_ID,
  POST_PROP_BY_ID,
  CLEAR_DETAIL,
  BY_ORIENTATION,
  BY_FLOOR,
  BY_PRICE,
  BY_OPERATION,
} from './actions';

const initialState = {
  allProps: [],
  allPropsCopy: [],
  propId: [],
  detailProp: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROP:
      return {
        ...state,
        allProps: action.payload,
        allPropsCopy: action.payload,
      };
      
    case GET_PROP_BY_ID:
      return {
        ...state,
        propId: action.payload,
      };
    case POST_PROP_BY_ID:
      return {
        ...state,
      };

    case BY_ORIENTATION:
      if (action.payload === 'All') {
        return {
          ...state,
          allProps: [...state.allProps],
          allPropsCopy: [...state.allProps],
        };
      }

      let filter = [...state.allProps].filter(
        (prop) => prop.orientation === action.payload
      );
      return {
        ...state,
        allPropsCopy: filter,
      };

    case BY_OPERATION:
      if (action.payload === 'All') {
        return {
          ...state,
          allProps: [...state.allProps],
          allPropsCopy: [...state.allProps],
        };
      }
      let filteri = [...state.allProps].filter(
        (prop) => prop.operations[0].operation_type === action.payload
      );

      return {
        ...state,
        allPropsCopy: filteri,
      };

    case BY_FLOOR:
      let filtero = [...state.allProps].filter(
        (prop) => prop.floors_amount === Number(action.payload)
      );

      return {
        ...state,
        allPropsCopy: filtero,
      };

    case BY_PRICE:
      if (action.payload === 'All') {
        return {
          ...state,
          allProps: [...state.allProps],
          allPropsCopy: [...state.allProps],
        };
      }
      let filteru = [...state.allProps].filter(
        (prop) => prop.operations[0]?.prices[0]?.price <= Number(action.payload)
      );
      return {
        ...state,
        allPropsCopy: filteru,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        detailProp: action.payload,
      };

    default:
      return state;
  }
}
