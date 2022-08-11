import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateProps } from "../store";
import { CartItemProps } from "../store/modules/cart/types";

const Cart = () => {
  const cart = useSelector<StateProps, CartItemProps[]>(state => state.cart.items);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, current) => acc + current.product.price * current.quantity, 0));
  }, [cart]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr
              key={item.product.id}
            >
              <td>{item.product.title}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{(item.product.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <strong>Total: </strong>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
    </>
  )
}

export default Cart;