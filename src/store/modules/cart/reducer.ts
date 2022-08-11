import { Reducer } from "redux";
import { CartStateProps } from "./types";

const INITIAL_STATE: CartStateProps = {
  items: []
};

const cart: Reducer<CartStateProps> = () => {
  return INITIAL_STATE;
};

export default cart;