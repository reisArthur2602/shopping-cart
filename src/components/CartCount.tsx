import { ShoppingCart } from 'lucide-react';

type CartCountProps = {
  count: number;
};

export const CartCount = ({ count }: CartCountProps) => {
  return (
    <button className="text-zinc-100 relative">
      {count && (
        <span className="h-7 w-8 flex items-center justify-center rounded-full font-semibold bg-indigo-600 absolute -top-4 -right-4">
          {count}
        </span>
      )}

      <ShoppingCart size={34} />
    </button>
  );
};
