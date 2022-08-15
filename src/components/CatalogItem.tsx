import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StateProps } from "../store";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { ProductProps } from "../store/modules/cart/types";

type CatalogItemProps = {
  product: ProductProps;
}

const CatalogItem = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<StateProps, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product]);

  return (
    <article >
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button type="button" onClick={handleAddProductToCart}>COMPRAR</button>

      {hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span> }
    </article>
  )
}

export default CatalogItem;