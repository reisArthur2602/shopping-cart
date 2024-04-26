import { useEffect, useState } from 'react';
import { CardProduct } from '../components/CardProduct';

import { ProductsItems } from '../utils/data';
import { Product } from '../types/Product';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(ProductsItems);
  }, []);
  return (
    <section className="layout">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
