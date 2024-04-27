import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EmpytCart = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-zinc-400 ">
      <ShoppingCart size={40} />
      <p className="w-full text-center text-2xl text-medium">
        O seu carrinho está vazio...
      </p>
      <Link
        to="/"
        className="flex items-center justify-center bg-zinc-950 p-2 rounded-sm text-zinc-100 w-80 hover:animate-pulse "
      >
        Acessar Produtos
      </Link>
    </div>
  );
};
