import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import { CartStateProps } from './modules/cart/types';
import rootReducer from './modules/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './modules/rootSaga';

export type StateProps = {
  cart: CartStateProps;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)
));

sagaMiddleware.run(rootSaga);

export default store;