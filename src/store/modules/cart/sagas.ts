import { all, select, takeLatest, call, put } from 'redux-saga/effects';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';
import type { StateProps } from '../..';
import api from '../../../services/api';
import { AxiosResponse } from 'axios';
import { ActionTypes } from './types';

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>;

type StockResponseProps = {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: checkProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: StateProps) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  const availableStockResponse: AxiosResponse<StockResponseProps> = yield call(api.get, `stock/${product.id}`);

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
]);