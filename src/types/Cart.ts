import { Product } from './Product';

export type CartData = {
  id: number;
  name: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
};

export type CartContextData = {
  cart: CartData[];
  cartAmount: number;
  addCart: (product: Product) => void;
  removeCart: (id: number) => void;
  total: string;
};
