export const PRODUCTS = [
  {
    id: 0,
    name: "Zapatillas",
    price: 15000,
    picture: "https://picsum.photos/200",
    description: "Zapatillas imperdibles"
  },
 ];

export function getItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(PRODUCTS), 2000);
  });
}
