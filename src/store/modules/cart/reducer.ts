import { Reducer } from "redux";
import { CartStateProps } from "./types";
import produce from "immer";

const INITIAL_STATE: CartStateProps = {
  items: []
};

const cart: Reducer<CartStateProps> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item =>
          item.product.id === product.id
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1 
          });
        };

        break;
      }
      default: {
        return state;
      }
    }
  });
};

export default cart;