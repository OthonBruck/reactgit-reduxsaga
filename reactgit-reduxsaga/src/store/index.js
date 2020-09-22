import { createStore, combineReducers, applyMiddleware } from "redux";
import reposi from "./ducks/reposi";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    reposi,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
