import { ReactNode, createContext, useState } from 'react';
import { CartContextData, CartData } from '../types/Cart';
import { Product } from '../types/Product';

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartData[]>([]);

  const addCart = (product: Product) => {
    const findProduct = cart.findIndex((item) => item.id === product.id);

    if (findProduct !== -1) {
      const listCart = cart;
      listCart[findProduct].ammount++;
      listCart[findProduct].total =
        listCart[findProduct].total * listCart[findProduct].ammount;
      return;
    }

    const data = {
      ...product,
      ammount: 1,
      total: product.price,
    };

    setCart((products) => [...products, data]);
  };
  console.log(cart);
  return (
    <CartContext.Provider
      value={{ cart, cartAmmount: cart?.length || 0, addCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
