import { CartCount } from './CartCount';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="w-full p-6 bg-zinc-900">
      <div className="container flex items-center justify-between">
        <Logo />
        <CartCount count={8}/>
      </div>
    </header>
  );
};
