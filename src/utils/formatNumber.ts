export const FormatNumber = (value: number) => {
  const result = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return result;
};
