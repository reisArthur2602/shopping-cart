import { Product } from './Product';

export type CartData = {
  id: number;
  name: string;
  price: number;
  banner: string;
  ammount: number;
  total: number;
};

export type CartContextData = {
  cart: CartData[];
  cartAmmount: number;
  addCart: (product: Product) => void;
};
