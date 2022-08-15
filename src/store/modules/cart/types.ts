export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export type ProductProps = {
  id: number;
  title: string;
  price: number;
}

export type CartItemProps = {
  product: ProductProps;
  quantity: number;
}

export type CartStateProps = {
  items: CartItemProps[];
  failedStockCheck: ProductProps['id'][];
} 