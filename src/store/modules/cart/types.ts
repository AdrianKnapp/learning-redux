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
} 