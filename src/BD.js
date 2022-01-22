export const PRODUCTS = [
  {
    id: 0,
    name: "Zapatillas",
    price: 15000,
    picture: "https://picsum.photos/200",
  },
  {
    id: 1,
    name: "Mochila",
    price: 1000,
    picture: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Reloj",
    price: 150000,
    picture: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Sandalias",
    price: 15000,
    picture: "https://picsum.photos/200",
  },
 
];

export function getProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(PRODUCTS), 2000);
  });
}
