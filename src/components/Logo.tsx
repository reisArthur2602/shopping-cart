import { Gamepad } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-1 text-zinc-100">
      <Gamepad size={40} />
      <span className="font-bold text-3xl">Games</span>
    </Link>
  );
};
