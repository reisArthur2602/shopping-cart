import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartList } from '../components/CartList';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <section className="layout">
      <h1 className="font-semibold text-4xl mb-4">Meu carrinho</h1>
      <div className="flex flex-col">
        {cart.map((product) => (
          <CartList key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Cart;
