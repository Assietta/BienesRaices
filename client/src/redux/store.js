import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer.js";
import thunkMiddleware from "redux-thunk";
import ReactDOM from 'react-dom';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;


