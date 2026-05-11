export type Drink = {
  name: string;
  ingredients?: string;
  slug?: string;
};

// All classic cocktails are €10 — single price set on the page header.
export const COCKTAILS: Drink[] = [
  { name: "Dry Martini", ingredients: "Martini Blanco o Bombay" },
  { name: "Daikiris Frozen", ingredients: "Ron blanco, Lima, Azúcar, Puré de frutas" },
  { name: "Piña Colada", ingredients: "Ron blanco, Crema de coco, Zumo de piña, Leche", slug: "pina-colada" },
  { name: "Mojito · Mojito de Fresa", ingredients: "Ron blanco, Lima, Azúcar, Hierbabuena, Soda y Puré de frutas", slug: "mojito-de-fresa" },
  { name: "Sours", ingredients: "Whisky o Amaretto, Zumo de lima, Sirope simple, Clara de huevo" },
  { name: "Bloody Mary", ingredients: "Vodka, Zumo de tomate, Salsa Inglesa, Tabasco, Sal, Pimienta" },
  { name: "Negroni", ingredients: "Campari, Gin, Vermouth" },
  { name: "Porn Star Martini", ingredients: "Zumo de lima, Fruta de la Pasión, Sirope de Azúcar, Vodka, Cava" },
  { name: "Sex on the Beach", ingredients: "Vodka Smirnoff, Zumo de naranja, Licor de melocotón, Granadina" },
  { name: "Margarita", ingredients: "Tequila, Zumo de Lima, Licor Triple Sec" },
  { name: "Expresso Martini", ingredients: "Vodka, Licor Café Tía María, Café expresso, Azúcar" },
  { name: "Caipirinha · Caipiroska", ingredients: "Cachaça o Vodka, Lima, Azúcar" },
  { name: "Moscow Mule", ingredients: "Vodka, Zumo de lima, Ginger beer" },
  { name: "Mimosa", ingredients: "Cava, Zumo de Naranja" },
  { name: "Tequila Sunrise", ingredients: "Tequila, Zumo de naranja, Granadina" },
  { name: "Aperol Spritz", ingredients: "Aperol, Cava, Soda" },
];

export const ALCOHOL_FREE: Drink[] = [
  { name: "San Francisco", ingredients: "Zumo de naranja, piña y melocotón, Sirope de granadina" },
  { name: "Mojito · Mojitos de sabores", ingredients: "Lima, Azúcar, Hierbabuena, Soda y Puré de frutas", slug: "mojito" },
  { name: "Caipirinha", ingredients: "Mango · Fresa · Plátano" },
  { name: "Piña Colada", ingredients: "Crema de coco, Zumo de piña", slug: "pina-colada" },
  { name: "Daikiri", ingredients: "Mango · Fresa · Plátano" },
];

export const SMOOTHIES: Drink[] = [
  { name: "Naranja, Fresa y Plátano" },
  { name: "Naranja, Piña y Jengibre" },
  { name: "Naranja, Zanahoria y Jengibre" },
  { name: "Manzana, Pepino y Jengibre" },
  { name: "Mango y Plátano" },
  { name: "Manzana, Piña y Yerbabuena" },
  { name: "Mango, Plátano y Melón" },
  { name: "Sandía y Lima" },
];

export const COCKTAIL_PRICE = 10;
export const ALCOHOL_FREE_PRICE = 10;
export const SMOOTHIE_PRICE = 9;
