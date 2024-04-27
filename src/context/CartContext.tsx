import { ReactNode, createContext, useState } from 'react';
import { CartContextData, CartData } from '../types/Cart';
import { Product } from '../types/Product';
import { FormatNumber } from '../utils/formatNumber';

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartData[]>([]);
  const [total, setTotal] = useState('');

  const addCart = (product: Product) => {
    const findProduct = cart.findIndex((item) => item.id === product.id);

    if (findProduct !== -1) {
      let cartList = cart;
      cartList[findProduct].amount++;
      cartList[findProduct].total =
        cartList[findProduct].price * cartList[findProduct].amount;
      setCart(cartList);
      TotalResultCart(cartList);
      return;
    }

    let data = {
      ...product,
      amount: 1,
      total: product.price,
    };

    setCart((products) => [...products, data]);
    TotalResultCart([...cart, data]);
  };
  const TotalResultCart = (product: CartData[]) => {
    let result = product.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    const resultFormated = FormatNumber(result);
    setTotal(resultFormated);
  };

  return (
    <CartContext.Provider
      value={{ cart, cartAmount: cart.length || 0, addCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
