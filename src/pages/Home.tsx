import { useEffect, useState } from 'react';
import { CardProduct } from '../components/CardProduct';

import { Product } from '../types/Product';
import { fetchProducts } from '../api/fetchProducts';
import { LoaderCircle } from 'lucide-react';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res));
  }, []);

  return (
    <section className="layout">
      {products.length === 0 && (
        <div className='w-full flex items-center justify-center mt-40'>
          <LoaderCircle size={60} className="animate-spin" />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
