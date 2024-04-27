import { FormatNumber } from '../utils/formatNumber';
import { Image } from './Image';
import { CartData } from '../types/Cart';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CartList = ({
  id,
  amount,
  cover,
  name,
  total,
  price,
}: CartData) => {
  const { addCart, removeCart } = useContext(CartContext);

  return (
    <div
      key={id}
      className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-6 text-zinc-500 border-b-2 border-solid border-zinc-200"
    >
      <Image src={cover} className="max-w-40 rounded-xl" />
      <p className=" max-w-96 w-full">{name}</p>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => addCart({ id, cover, name, price })}
          className="text-2xl text-zinc-100 flex items-center justify-center rounded-md bg-indigo-500 h-8 w-8"
        >
          +
        </button>
        <span className="text-base flex items-center justify-center h-8 w-8 border-solid border-1 border-zinc-600 ">
          {amount}
        </span>
        <button
          onClick={() => removeCart(id)}
          className="text-2xl text-zinc-100 flex items-center justify-center rounded-md bg-indigo-500 h-8 w-8"
        >
          -
        </button>
      </div>

      <strong className=" max-w-96 w-full">
        SubTotal: {FormatNumber(total)}
      </strong>
    </div>
  );
};
