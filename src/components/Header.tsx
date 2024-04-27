import { useContext } from 'react';
import { CartCount } from './CartCount';
import { Logo } from './Logo';
import { CartContext } from '../context/CartContext';

export const Header = () => {
  const {cartAmount} = useContext(CartContext)
  return (
    <header className="w-full bg-zinc-900">
      <div className="layout  flex items-center justify-between">
        <Logo />
        <CartCount count={cartAmount}/>
      </div>
    </header>
  );
};
