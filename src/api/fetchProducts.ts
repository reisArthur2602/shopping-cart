import { Product } from '../types/Product';
import { FormatResult } from '../utils/formatResult';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=games`
  );
  const data = await response.json();
  return data.results.map((item: any) => FormatResult(item));
};
