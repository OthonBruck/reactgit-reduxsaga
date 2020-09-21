import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./ducks";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    reducers,
  }),
  applyMiddleware(sagaMiddleware)
);

export default store;
