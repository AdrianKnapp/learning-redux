import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../services/api";
import { addProductToCart } from "../store/modules/cart/actions";
import { ProductProps } from "../store/modules/cart/types";

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = React.useState<ProductProps[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, [])

  const handleAddProductToCart = useCallback((product: ProductProps) => {
    dispatch(addProductToCart(product))
  }, [dispatch]);

  return (
    <>
    <h1>Catalog</h1>

    {catalog.map(product => (
      <article key={product.id}>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <button type="button" onClick={() => handleAddProductToCart(product)}>COMPRAR</button>
      </article>
    ))}
    </>
  );
}

export default Catalog;