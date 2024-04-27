import { Product } from '../types/Product';

export const FormatResult = (data: any): Product => {
  return {
    id: data.id,
    name: data.title,
    cover: data.thumbnail.replace(/\w\.jpg/gi, 'W.jpg'),
    price: data.price,
  };
};
