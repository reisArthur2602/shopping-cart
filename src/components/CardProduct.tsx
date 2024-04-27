import { ShoppingCart } from 'lucide-react';
import { Image } from './Image';
import { Product } from '../types/Product';
import { FormatNumber } from '../utils/formatNumber';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CardProduct = ({ id, cover, name, price }: Product) => {
  const { addCart } = useContext(CartContext);

  const handleAddCart = () => {
    addCart({ id, cover, name, price });
  };

  return (
    <article className="w-full flex flex-col overflow-hidden rounded-sm cursor-pointer shadow-xl ">
      <Image src={cover} className="max-h-80 p-2" />
      <div className="h-64 flex flex-col justify-between  p-8 bg-white border-t-2 border-solid border-zinc-100">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-zinc-500">{name}</p>
          <strong className="font-black text-4xl text-indigo-500">
            {FormatNumber(price)}
          </strong>
        </div>

        <button
          onClick={handleAddCart}
          className=" flex items-center justify-center gap-2 w-full bg-zinc-950 p-4 rounded-sm text-zinc-100 hover:animate-pulse"
        >
          Adicionar ao carrinho <ShoppingCart size={16} />
        </button>
      </div>
    </article>
  );
};
