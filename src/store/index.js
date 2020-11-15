import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
// 创建saga中间件
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(sagas);
export default store;
