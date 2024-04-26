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
      let cartList = cart;
      cartList[findProduct].amount++;
      cartList[findProduct].total =
        cartList[findProduct].price * cartList[findProduct].amount;
      setCart(cartList);
     
      return;
    }

    let data = {
      ...product,
      amount: 1,
      total: product.price,
    };

    setCart((products) => [...products, data]);
 
  };

  
  return (
    <CartContext.Provider
      value={{ cart, cartAmount: cart.length || 0, addCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
