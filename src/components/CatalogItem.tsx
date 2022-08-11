import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";
import { ProductProps } from "../store/modules/cart/types";

type CatalogItemProps = {
  product: ProductProps;
}

const CatalogItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product]);

  return (
    <article >
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button type="button" onClick={handleAddProductToCart}>COMPRAR</button>
    </article>
  )
}

export default CatalogItem;