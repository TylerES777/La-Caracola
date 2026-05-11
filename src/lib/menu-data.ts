// La Carta — full dish list per brief Section 6.2.1
// Allergens use single-letter codes; legend keys live in messages/{locale}.json under menu.carta.allergens.labels.

export type AllergenCode =
  | "gluten"
  | "crustaceos"
  | "huevos"
  | "pescado"
  | "cacahuetes"
  | "soja"
  | "lacteos"
  | "frutosCascara"
  | "apio"
  | "mostaza"
  | "sesamo"
  | "sulfitos"
  | "altramuces"
  | "moluscos";

export type CartaCategory =
  | "ensaladas"
  | "entradas"
  | "sopas"
  | "arroces"
  | "pescaitos"
  | "mariscos"
  | "mariscosPeso"
  | "especialidades"
  | "pescados"
  | "carnes"
  | "extras";

export type Dish = {
  id: number;
  name: string;
  category: CartaCategory;
  /** Single full-portion price (€). */
  price?: number;
  /** Half portion (€). */
  half?: number;
  /** Per-kilo price (€/Kg) for market fish/shellfish. */
  perKg?: number;
  /** Italic seasonal/portion note shown after the name. */
  note?: string;
  allergens?: AllergenCode[];
  /** Key into DISH_PHOTOS — present when the restaurant has supplied a photo. */
  slug?: string;
};

export const ALLERGEN_ORDER: AllergenCode[] = [
  "gluten",
  "crustaceos",
  "huevos",
  "pescado",
  "cacahuetes",
  "soja",
  "lacteos",
  "frutosCascara",
  "apio",
  "mostaza",
  "sesamo",
  "sulfitos",
  "altramuces",
  "moluscos",
];

export const CATEGORY_NOTES: Partial<Record<CartaCategory, string>> = {
  arroces: "arrocesPerPerson",
  mariscosPeso: "mariscosPesoNote",
  especialidades: "especialidadesNote",
};

export const CARTA: Dish[] = [
  // Ensaladas
  { id: 1, category: "ensaladas", name: "Ensalada mixta", price: 11.0, slug: "ensalada-mixta" },
  { id: 2, category: "ensaladas", name: "Ensalada de la Casa", price: 15.0, slug: "ensalada-de-la-casa" },
  { id: 3, category: "ensaladas", name: "Ensalada de bonito en escabeche con tomate", price: 18.0, allergens: ["pescado", "sulfitos"], slug: "ensalada-de-bonito-en-escabeche-con-tomate" },
  { id: 4, category: "ensaladas", name: "Ensaladilla rusa con bonito", price: 14.5, allergens: ["pescado", "huevos"] },
  { id: 5, category: "ensaladas", name: "Ensalada de burrata", price: 17.0, allergens: ["lacteos"] },
  { id: 6, category: "ensaladas", name: "Ensalada César", price: 14.0, allergens: ["gluten", "huevos", "lacteos", "pescado"], slug: "ensalada-cesar" },
  { id: 7, category: "ensaladas", name: "Ensalada de pimientos", price: 10.5 },

  // Entradas
  { id: 8, category: "entradas", name: "Tartar de salmón con aguacate", price: 21.0, allergens: ["pescado"], slug: "tartar-de-salmon-con-aguacate" },
  { id: 9, category: "entradas", name: "Tartar de atún con aguacate y mango", price: 28.5, allergens: ["pescado"] },
  { id: 10, category: "entradas", name: "Paté de Mero", price: 13.0, allergens: ["pescado"], slug: "pate-de-mero" },
  { id: 11, category: "entradas", name: "Jamón Ibérico \"Joselito\" Gran Reserva", half: 18.0, price: 30.0 },
  { id: 12, category: "entradas", name: "Queso Manchego", half: 11.0, price: 19.0, allergens: ["lacteos"] },
  { id: 13, category: "entradas", name: "Boquerones en vinagre", price: 15.0, allergens: ["pescado", "sulfitos"] },
  { id: 14, category: "entradas", name: "Timbal de aguacate con langostinos", price: 15.0, allergens: ["crustaceos"], slug: "aguacate-con-langostinos" },
  { id: 15, category: "entradas", name: "Pipirrana de pulpo", price: 14.5, allergens: ["moluscos"], slug: "pipirana-de-pulpo" },
  { id: 16, category: "entradas", name: "Anchoas del Cantábrico", note: "8 ud.", price: 22.5, allergens: ["pescado"] },
  { id: 17, category: "entradas", name: "Matrimonio de boquerones en vinagre y anchoas", price: 20.5, allergens: ["pescado", "sulfitos"] },
  { id: 18, category: "entradas", name: "Espeto de sardinas", price: 8.2, allergens: ["pescado"], slug: "espetos-de-sardinas" },
  { id: 19, category: "entradas", name: "Corazones de alcachofas salteadas con jamón y almejas", price: 23.0, allergens: ["moluscos"] },
  { id: 20, category: "entradas", name: "Pulpo a la gallega", price: 22.0, allergens: ["moluscos"] },
  { id: 21, category: "entradas", name: "Tentáculo de pulpo a la plancha sobre crema de patatas trufadas", price: 24.5, allergens: ["moluscos", "lacteos"], slug: "tentaculos-de-pulpo-sobre-tartufo-de-patatas" },
  { id: 22, category: "entradas", name: "Langostinos rellenos de foie con salsa de espinacas", note: "6 ud.", price: 26.0, allergens: ["crustaceos", "lacteos"] },
  { id: 23, category: "entradas", name: "Croquetas de carabineros", note: "8 ud.", price: 16.0, allergens: ["gluten", "crustaceos", "lacteos"] },
  { id: 24, category: "entradas", name: "Caviar de Río Frío", note: "15 gr", price: 55.0, allergens: ["pescado"] },

  // Sopas
  { id: 25, category: "sopas", name: "Ajo blanco", note: "Temp. Primavera-Verano", price: 10.0, allergens: ["frutosCascara"] },
  { id: 26, category: "sopas", name: "Gazpacho", price: 8.5, allergens: ["sulfitos"] },
  { id: 27, category: "sopas", name: "Vaso Gazpacho", price: 6.5, allergens: ["sulfitos"] },
  { id: 28, category: "sopas", name: "Porra antequerana", note: "Temp. Primavera-Verano", price: 10.5, allergens: ["gluten", "huevos"] },
  { id: 29, category: "sopas", name: "Sopa de mariscos", price: 11.5, allergens: ["crustaceos", "moluscos", "pescado"] },
  { id: 30, category: "sopas", name: "Crema de langosta", price: 13.5, allergens: ["crustaceos", "lacteos"] },
  { id: 31, category: "sopas", name: "Fabes con almejas", note: "Temp. Otoño-Invierno", price: 22.0, allergens: ["moluscos"] },
  { id: 32, category: "sopas", name: "Gazpachuelo", note: "2 personas", price: 34.0, allergens: ["pescado", "huevos"] },

  // Arroces
  { id: 33, category: "arroces", name: "Paella mixta", price: 16.5, allergens: ["crustaceos", "moluscos"], slug: "paella-mixta" },
  { id: 34, category: "arroces", name: "Paella de mariscos", price: 18.5, allergens: ["crustaceos", "moluscos"] },
  { id: 35, category: "arroces", name: "Paella de marisco al señorito", price: 18.5, allergens: ["crustaceos", "moluscos"] },
  { id: 36, category: "arroces", name: "Paella de presa ibérica, habitas baby y ajos tiernos", price: 22.0 },
  { id: 37, category: "arroces", name: "Paella de verduras", price: 17.0 },
  { id: 38, category: "arroces", name: "Arroz negro", price: 18.5, allergens: ["moluscos", "crustaceos"], slug: "arroz-negro" },
  { id: 39, category: "arroces", name: "Fideuá", price: 18.5, allergens: ["gluten", "crustaceos", "moluscos"] },
  { id: 40, category: "arroces", name: "Fideuá negra", price: 18.5, allergens: ["gluten", "crustaceos", "moluscos"] },
  { id: 41, category: "arroces", name: "Arroz a banda", price: 18.5, allergens: ["pescado", "crustaceos"], slug: "arroz-a-banda" },
  { id: 42, category: "arroces", name: "Arroz caldoso", price: 18.5, allergens: ["crustaceos", "moluscos"] },
  { id: 43, category: "arroces", name: "Arroz con bogavante caldoso", price: 30.0, allergens: ["crustaceos"] },

  // Pescaítos Fritos
  { id: 44, category: "pescaitos", name: "Boquerones malagueños", price: 14.0, allergens: ["pescado", "gluten"] },
  { id: 45, category: "pescaitos", name: "Boquerones al limón", price: 15.0, allergens: ["pescado", "gluten"], slug: "boquerones-al-limon" },
  { id: 46, category: "pescaitos", name: "Calamares", price: 16.5, allergens: ["moluscos", "gluten"], slug: "calamares-fritos" },
  { id: 47, category: "pescaitos", name: "Calamaritos", price: 17.5, allergens: ["moluscos", "gluten"] },
  { id: 48, category: "pescaitos", name: "Salmonetitos fritos", price: 17.5, allergens: ["pescado", "gluten"], slug: "salmonetitos-fritos" },
  { id: 49, category: "pescaitos", name: "Rosada en adobo", price: 14.5, allergens: ["pescado", "gluten"] },
  { id: 50, category: "pescaitos", name: "Pijotas", price: 17.5, allergens: ["pescado", "gluten"] },
  { id: 51, category: "pescaitos", name: "Rosada frita macerada con limón", price: 14.5, allergens: ["pescado", "gluten"], slug: "rosada-frita" },
  { id: 52, category: "pescaitos", name: "Tortillita de camarones", note: "4 ud.", price: 9.0, allergens: ["crustaceos", "gluten"], slug: "tortillitas-de-camarones" },
  { id: 53, category: "pescaitos", name: "Gambas de cristal", price: 16.0, allergens: ["crustaceos"] },
  { id: 54, category: "pescaitos", name: "Fritura", note: "1 persona", price: 23.0, allergens: ["pescado", "gluten", "moluscos"] },

  // Mariscos
  { id: 55, category: "mariscos", name: "Conchas finas", note: "ud.", price: 4.8, allergens: ["moluscos"] },
  { id: 56, category: "mariscos", name: "Bolos", note: "ud.", price: 4.5, allergens: ["moluscos"] },
  { id: 57, category: "mariscos", name: "Ostras", note: "ud.", price: 5.6, allergens: ["moluscos"] },
  { id: 58, category: "mariscos", name: "Coquinas", price: 24.0, allergens: ["moluscos"], slug: "coquinas" },
  { id: 59, category: "mariscos", name: "Almejas", price: 16.5, allergens: ["moluscos"] },
  { id: 60, category: "mariscos", name: "Almejas Caracola", price: 17.5, allergens: ["moluscos"] },
  { id: 61, category: "mariscos", name: "Mejillones al vapor", price: 14.0, allergens: ["moluscos"] },
  { id: 62, category: "mariscos", name: "Mejillones a la marinera", price: 15.0, allergens: ["moluscos"] },
  { id: 63, category: "mariscos", name: "Mejillones con salsa Caracola", price: 15.0, allergens: ["moluscos", "lacteos"] },
  { id: 64, category: "mariscos", name: "Navajas", price: 17.0, allergens: ["moluscos"] },
  { id: 65, category: "mariscos", name: "Langostinos al pil-pil", price: 15.0, allergens: ["crustaceos"], slug: "langostinos-al-pil-pil" },
  { id: 66, category: "mariscos", name: "Gambas a la plancha o cocidas", price: 32.0, allergens: ["crustaceos"] },
  { id: 67, category: "mariscos", name: "Pelegrina a la plancha", price: 9.5, allergens: ["moluscos"] },
  { id: 68, category: "mariscos", name: "Pelegrina gratinada", price: 10.5, allergens: ["moluscos", "lacteos"] },
  { id: 69, category: "mariscos", name: "Quisquillas", price: 32.0, allergens: ["crustaceos"] },
  { id: 70, category: "mariscos", name: "Parrillada de mariscos", note: "2 personas", price: 110.0, allergens: ["crustaceos", "moluscos"] },
  { id: 71, category: "mariscos", name: "Zarzuela de mariscos", note: "2 personas", price: 110.0, allergens: ["crustaceos", "moluscos", "pescado"] },

  // Mariscos al Peso
  { id: 72, category: "mariscosPeso", name: "Almejas Gallegas", perKg: 85.0, allergens: ["moluscos"] },
  { id: 73, category: "mariscosPeso", name: "Carabineros", perKg: 200.0, allergens: ["crustaceos"] },
  { id: 74, category: "mariscosPeso", name: "Cigalas", perKg: 180.0, allergens: ["crustaceos"] },
  { id: 75, category: "mariscosPeso", name: "Gambas rojas", perKg: 190.0, allergens: ["crustaceos"] },
  { id: 76, category: "mariscosPeso", name: "Buey de mar", perKg: 55.0, allergens: ["crustaceos"] },
  { id: 77, category: "mariscosPeso", name: "Centollo", perKg: 55.0, allergens: ["crustaceos"] },
  { id: 78, category: "mariscosPeso", name: "Langostas", perKg: 170.0, allergens: ["crustaceos"] },
  { id: 79, category: "mariscosPeso", name: "Bogavantes", perKg: 150.0, allergens: ["crustaceos"] },

  // Especialidades — Pescado al peso
  { id: 80, category: "especialidades", name: "Dorada", perKg: 60.0, allergens: ["pescado"] },
  { id: 81, category: "especialidades", name: "Lubina", perKg: 60.0, allergens: ["pescado"] },
  { id: 82, category: "especialidades", name: "Pargo", perKg: 72.0, allergens: ["pescado"] },
  { id: 83, category: "especialidades", name: "Besugo", perKg: 75.0, allergens: ["pescado"] },
  { id: 84, category: "especialidades", name: "Rodaballo", perKg: 75.0, allergens: ["pescado"] },
  { id: 85, category: "especialidades", name: "Urta", perKg: 72.0, allergens: ["pescado"] },
  { id: 86, category: "especialidades", name: "Salmonetes", perKg: 75.0, allergens: ["pescado"] },
  { id: 87, category: "especialidades", name: "Lenguados", perKg: 72.0, allergens: ["pescado"] },
  { id: 88, category: "especialidades", name: "Gallineta", perKg: 70.0, allergens: ["pescado"] },
  { id: 89, category: "especialidades", name: "Mero", perKg: 72.0, allergens: ["pescado"] },
  { id: 90, category: "especialidades", name: "Pez Limón", perKg: 70.0, allergens: ["pescado"] },
  { id: 91, category: "especialidades", name: "Calamar", perKg: 60.0, allergens: ["moluscos"] },
  { id: 92, category: "especialidades", name: "Rapecito", perKg: 60.0, allergens: ["pescado"] },
  { id: 93, category: "especialidades", name: "Corvina", perKg: 60.0, allergens: ["pescado"] },
  { id: 94, category: "especialidades", name: "Lubina salvaje", perKg: 72.0, allergens: ["pescado"] },

  // Pescados
  { id: 95, category: "pescados", name: "Rosada a la plancha", price: 16.5, allergens: ["pescado"] },
  { id: 96, category: "pescados", name: "Rape a la plancha", price: 26.0, allergens: ["pescado"] },
  { id: 97, category: "pescados", name: "Rape a la marinera", price: 27.0, allergens: ["pescado", "moluscos"] },
  { id: 98, category: "pescados", name: "Brocheta de rape y langostinos", price: 27.5, allergens: ["pescado", "crustaceos"] },
  { id: 99, category: "pescados", name: "Pez espada a la plancha", price: 21.0, allergens: ["pescado"] },
  { id: 100, category: "pescados", name: "Merluza a la plancha", price: 24.5, allergens: ["pescado"], slug: "merluza-a-la-plancha" },
  { id: 101, category: "pescados", name: "Merluza a la romana", price: 22.0, allergens: ["pescado", "gluten", "huevos"] },
  { id: 102, category: "pescados", name: "Merluza con setas y almejas", price: 25.5, allergens: ["pescado", "moluscos"] },
  { id: 103, category: "pescados", name: "Salmón a la plancha", price: 20.0, allergens: ["pescado"], slug: "salmon-a-la-plancha" },
  { id: 104, category: "pescados", name: "Salmón a La Caracola", price: 21.0, allergens: ["pescado", "lacteos"], slug: "salmon-a-la-caracola" },
  { id: 105, category: "pescados", name: "Creppe relleno de salmón y marisco", price: 17.5, allergens: ["gluten", "lacteos", "huevos", "pescado", "crustaceos"] },
  { id: 106, category: "pescados", name: "Lenguado a la plancha", price: 26.5, allergens: ["pescado"] },
  { id: 107, category: "pescados", name: "Lenguado a la Meunier", price: 27.0, allergens: ["pescado", "gluten", "lacteos"] },
  { id: 108, category: "pescados", name: "Bacalao a la plancha", price: 26.0, allergens: ["pescado"] },
  { id: 109, category: "pescados", name: "Bacalao al espeto", price: 26.5, allergens: ["pescado"] },
  { id: 110, category: "pescados", name: "Bacalao al Pil-pil", price: 27.0, allergens: ["pescado"] },
  { id: 111, category: "pescados", name: "Ventresca de atún a la plancha", price: 26.5, allergens: ["pescado"] },
  { id: 112, category: "pescados", name: "Ventresca de atún al espeto", price: 27.5, allergens: ["pescado"] },
  { id: 113, category: "pescados", name: "Lomo de atún plancha", price: 26.5, allergens: ["pescado"] },
  { id: 114, category: "pescados", name: "Lomo de atún a la pimienta", price: 27.5, allergens: ["pescado"] },

  // Carnes
  { id: 115, category: "carnes", name: "Pechuga de pollo a la parrilla", price: 16.5 },
  { id: 116, category: "carnes", name: "Solomillo de ternera a la parrilla", price: 29.0 },
  { id: 117, category: "carnes", name: "Solomillo de ternera al Stroganoff", price: 29.0, allergens: ["lacteos"] },
  { id: 118, category: "carnes", name: "Brocheta de solomillo ibérico a la parrilla", price: 23.0 },
  { id: 119, category: "carnes", name: "Entrecot de ternera a la parrilla", price: 25.5 },
  { id: 120, category: "carnes", name: "Entrecot de Lomo Alto de Angus a la parrilla", note: "350 gr aprox.", price: 35.0 },
  { id: 121, category: "carnes", name: "Presa Ibérica de Bellota a la parrilla", price: 25.0 },
  { id: 122, category: "carnes", name: "Chuletitas de cordero lechal a la parrilla", price: 26.0 },
  { id: 123, category: "carnes", name: "Paletilla de cordero lechal", price: 30.0 },
  { id: 124, category: "carnes", name: "Chateaubriand", note: "mín. 2 personas · 550 gr aprox.", price: 65.0 },

  // Extras
  { id: 125, category: "extras", name: "Pan y A.O.V.E.", price: 1.9 },
  { id: 126, category: "extras", name: "Pan sin gluten", price: 2.9 },
  { id: 127, category: "extras", name: "Mantequilla", price: 1.0, allergens: ["lacteos"] },
];

export const CARTA_CATEGORY_ORDER: CartaCategory[] = [
  "ensaladas",
  "entradas",
  "sopas",
  "arroces",
  "pescaitos",
  "mariscos",
  "mariscosPeso",
  "especialidades",
  "pescados",
  "carnes",
  "extras",
];
