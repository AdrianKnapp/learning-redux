import React, { useEffect } from "react";
import api from "../services/api";
import { ProductProps } from "../store/modules/cart/types";
import CatalogItem from "./CatalogItem";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = React.useState<ProductProps[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, [])


  return (
    <>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </>
  );
}

export default Catalog;