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
      totalResultCart(cartList);
      return;
    }

    let data = {
      ...product,
      amount: 1,
      total: product.price,
    };

    setCart((products) => [...products, data]);
    totalResultCart([...cart, data]);
  };
  const totalResultCart = (product: CartData[]) => {
    let result = product.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    const resultFormated = FormatNumber(result);
    setTotal(resultFormated);
  };

  const removeCart = (id: number) => {
    const findProduct = cart.findIndex((item) => item.id === id);
    let cartList = cart;

    if (cartList[findProduct].amount > 1) {
      cartList[findProduct].amount--;
      cartList[findProduct].total =
        cartList[findProduct].total - cartList[findProduct].price;
      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== id);
    setCart(removeItem);
    totalResultCart(removeItem);
  };

  return (
    <CartContext.Provider
      value={{ cart, cartAmount: cart.length || 0, addCart, total, removeCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
