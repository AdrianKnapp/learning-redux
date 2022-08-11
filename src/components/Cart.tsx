import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector(state => state);
  console.log("🚀 ~ file: Cart.tsx ~ line 5 ~ Cart ~ state", state)

  return (
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

      </tbody>
    </table>
  )
}

export default Cart;