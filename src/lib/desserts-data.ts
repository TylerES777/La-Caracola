export type Dessert = {
  id: number;
  name: string;
  price: number;
  note?: string;
  slug?: string;
};

export const POSTRES: Dessert[] = [
  { id: 1, name: "Sorbete de limón", price: 7.5 },
  { id: 2, name: "Arroz con leche", price: 7.5, slug: "arroz-con-leche" },
  { id: 3, name: "Crema catalana", price: 7.5, slug: "crema-catalana" },
  { id: 4, name: "Flan de naranja", price: 7.5 },
  { id: 5, name: "Tarta de 3 chocolates", price: 8.0, slug: "tarta-2-chocolates" },
  { id: 6, name: "Tiramisú", price: 8.0, slug: "tiramisu" },
  { id: 7, name: "Tarta de limón", price: 8.0 },
  {
    id: 8,
    name: "Copa de helados artesanos variados",
    price: 8.5,
    note: "3 bolas a elegir: Vainilla, Chocolate Kinder bueno, Yogur con mango y maracuyá o Fresa",
  },
  { id: 9, name: "Tarta helada al whisky", price: 8.5 },
  { id: 10, name: "Tarta de queso con helado de frambuesa", price: 8.5 },
  { id: 11, name: "Milhojas de nata o crema", price: 9.0, slug: "milhoja-de-nata" },
  { id: 12, name: "Brownie de chocolate con helado de vainilla", price: 8.5 },
  { id: 13, name: "Profiteroles bañados en chocolate", price: 9.0 },
];
