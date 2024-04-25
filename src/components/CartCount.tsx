import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

type CartCountProps = {
  count: number;
};

export const CartCount = ({ count }: CartCountProps) => {
  return (
    <Link to="/cart" className="text-zinc-100 relative">
      {count !== 0 && (
        <span className="h-7 w-8 flex items-center justify-center rounded-full font-semibold bg-indigo-600 absolute -top-4 -right-4">
          {count}
        </span>
      )}

      <ShoppingCart size={34} />
    </Link>
  );
};
