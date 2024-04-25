import { CardProduct } from '../components/CardProduct';
import { ProductsItems } from '../utils/data';

const Home = () => {
  return (
    <section className="layout">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
        {ProductsItems.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
