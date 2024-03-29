import { ActionTypes, ProductProps } from "./types";

export function addProductToCartRequest(product: ProductProps) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product
    }
  }  
}

export function addProductToCartSuccess(product: ProductProps) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product
    }
  }  
}

export function addProductToCartFailure(productId: ProductProps['id']) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId
    }
  }  
}

