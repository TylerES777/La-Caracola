export type WineCategory = "tintos" | "blancos" | "rosados" | "cavas" | "champagnes";

export type Wine = {
  name: string;
  grapes?: string;
  copa?: number;
  half?: number;
  bottle?: number;
  /** Some bottles are 1.5L magnums — render as a small note. */
  magnum?: number;
  isHouse?: boolean;
};

export type WineGroup = {
  doLabel: string;
  subLabel?: string;
  wines: Wine[];
};

export type WineSection = {
  category: WineCategory;
  groups: WineGroup[];
};

export const WINES: WineSection[] = [
  {
    category: "tintos",
    groups: [
      {
        doLabel: "D.O. Rioja",
        subLabel: "Crianza",
        wines: [
          { name: "22 Piés", grapes: "Tempranillo", copa: 3.9, bottle: 18.5, isHouse: true },
          { name: "Marqués de Cáceres", grapes: "Tempranillo, Garnacha, Graciano", half: 11, bottle: 20 },
          { name: "Ramón Bilbao", bottle: 20 },
          { name: "Aguirrebeña", grapes: "Tempranillo", bottle: 22 },
          { name: "Campillo", grapes: "Tempranillo", bottle: 22.5 },
          { name: "Luis Cañas", grapes: "Tempranillo, Garnacha", bottle: 23 },
          { name: "Viuda Negra Nunca Jamás", grapes: "Tempranillo", bottle: 32 },
          { name: "Muga", grapes: "Tempranillo, Garnacha, Mazuelo, Graciano", half: 19.5, bottle: 33 },
          { name: "La Mateo Vendimia", grapes: "Tempranillo, Garnacha, Graciano", bottle: 44 },
          { name: "Macan Cosecha", grapes: "Tempranillo", bottle: 120 },
        ],
      },
      {
        doLabel: "D.O. Rioja",
        subLabel: "Reservas y Grandes Reservas",
        wines: [
          { name: "Barón de Ley", grapes: "Tempranillo, Graciano, Maturana", bottle: 25 },
          { name: "Marqués de Cáceres", grapes: "Tempranillo, Garnacha, Graciano", bottle: 28 },
          { name: "Ramón Bilbao", grapes: "Tempranillo, Graciano, Mazuelo", bottle: 28.5 },
          { name: "Campillo", grapes: "Tempranillo", bottle: 32 },
          { name: "Marqués de Riscal", grapes: "Tempranillo, Graciano", half: 20, bottle: 35 },
          { name: "Luis Cañas Selección Familiar", grapes: "Tempranillo, Cabernet Sauvignon", bottle: 40 },
          { name: "Marqués de Murrieta", grapes: "Tempranillo, Mazuelo, Garnacha", bottle: 43 },
          { name: "Muga Selección", grapes: "Tempranillo, Garnacha, Mazuelo, Graciano", bottle: 58 },
          { name: "Villa Tondonia", grapes: "Tempranillo, Graciano, Mazuelo, Garnacha", bottle: 63 },
          { name: "Perica Oro", grapes: "Tempranillo", bottle: 70 },
          { name: "200 Monges", grapes: "Tempranillo, Graciano, Garnacha", bottle: 72 },
          { name: "Roda I", grapes: "Tempranillo, Graciano", bottle: 80 },
          { name: "Altún Everest", grapes: "Tempranillo", bottle: 80 },
          { name: "Ramón Bilbao Mirto", grapes: "Tempranillo", bottle: 95 },
          { name: "Viuda Negra La Taconera", grapes: "Tempranillo", bottle: 110 },
          { name: "Torre de Muga", grapes: "Tempranillo, Graciano, Mazuelo", bottle: 115 },
          { name: "Finca La Nieta", grapes: "Tempranillo", bottle: 214 },
          { name: "Artadi El Carretil", grapes: "Tempranillo", bottle: 258 },
          { name: "Castillo Ygay", grapes: "Tempranillo, Mazuelo", bottle: 350 },
        ],
      },
      {
        doLabel: "D.O. Castilla y León",
        wines: [
          { name: "Abadía Retuerta Selección", grapes: "Tempranillo, Syrah, Cabernet Sauvignon, Merlot", bottle: 48 },
          { name: "Mauro", grapes: "Tempranillo, Syrah, Cabernet Sauvignon", bottle: 64 },
          { name: "Abadía Retuerta Petit de Negralada", grapes: "Tempranillo", bottle: 105 },
          { name: "Abadía Retuerta Pago de Garduña", grapes: "Syrah", bottle: 130 },
          { name: "Abadía Retuerta Petit Verdot", grapes: "Petit Verdot", bottle: 210 },
        ],
      },
      {
        doLabel: "D.O. Laguardia, Álava",
        wines: [{ name: "Viña El Pisón", grapes: "Tempranillo", bottle: 520 }],
      },
      {
        doLabel: "D.O. Ribera del Duero",
        subLabel: "Roble",
        wines: [
          { name: "Melior de Matarromera", grapes: "Tempranillo", copa: 3.9, bottle: 18.5, isHouse: true },
          { name: "Celeste Torres", grapes: "Tempranillo", bottle: 22 },
          { name: "Protos", grapes: "Tempranillo", bottle: 22 },
          { name: "Finca Resalso", grapes: "Tempranillo", bottle: 23.5 },
          { name: "Luis Cañas Cair", grapes: "Tempranillo", bottle: 24 },
        ],
      },
      {
        doLabel: "D.O. Ribera del Duero",
        subLabel: "Crianzas y Reservas",
        wines: [
          { name: "Portia Crianza", bottle: 28.5 },
          { name: "Viña Sastre Crianza", bottle: 30 },
          { name: "Nabal Crianza", bottle: 32.5 },
          { name: "Protos Crianza", bottle: 33 },
          { name: "Emilio Moro", bottle: 36 },
          { name: "Matarromera Crianza", half: 23, bottle: 37 },
          { name: "Arzuaga", grapes: "Tempranillo, Cabernet Sauvignon", bottle: 38 },
          { name: "Carmelo Rodero Crianza", bottle: 38 },
          { name: "Pago de Anguix", bottle: 40 },
          { name: "Pago de los Capellanes", bottle: 45 },
          { name: "Protos Reserva", bottle: 45 },
          { name: "Bosque de Matasnos", grapes: "Tempranillo, Merlot, Malbec", bottle: 55 },
          { name: "Tomás Postigo 3er. año", bottle: 62 },
          { name: "Pago de Carraovejas", bottle: 65 },
          { name: "Malleolus", bottle: 65 },
          { name: "Hacienda del Monasterio", bottle: 70 },
          { name: "PSI Pingus", grapes: "Tempranillo, Garnacha", bottle: 75 },
          { name: "Viña Sastre Pago de Santa Cruz", bottle: 80 },
          { name: "Regina Vides", bottle: 110 },
          { name: "Carmelo Rodero TSM", bottle: 110 },
          { name: "Alión Reserva", bottle: 120 },
          { name: "Malleolus Sancho Martín", bottle: 200 },
          { name: "Vega Sicilia Balbuena 5º año", grapes: "Tempranillo, Merlot", bottle: 220 },
          { name: "Flor de Pingus", bottle: 250 },
          { name: "Pago de Carraovejas Cuesta de las Liebres", grapes: "Tinto Fino 100%", bottle: 260 },
          { name: "Vega Sicilia Único", grapes: "Tempranillo, Cabernet Sauvignon", bottle: 500 },
          { name: "Pingus", bottle: 1700 },
        ],
      },
      {
        doLabel: "D.O. Extremadura · Sierras de Málaga · Toro",
        wines: [
          { name: "Habla del Silencio", grapes: "Syrah, Cabernet Sauvignon, Tempranillo, Cabernet Franc", bottle: 25 },
          { name: "Seis + Seis", grapes: "Tempranillo, Syrah", bottle: 30 },
          { name: "Numanthia", grapes: "Tinta de Toro", bottle: 85 },
          { name: "Pintia", grapes: "Tinta de Toro", bottle: 90 },
          { name: "Teso La Monja", grapes: "Tinta de Toro", bottle: 1700 },
        ],
      },
    ],
  },
  {
    category: "blancos",
    groups: [
      {
        doLabel: "D.O. Rueda",
        wines: [
          { name: "Melior de Matarromera", grapes: "Verdejo", copa: 3.6, bottle: 17, isHouse: true },
          { name: "Javier Sanz Semidulce", grapes: "Verdejo", copa: 4, bottle: 18.5 },
          { name: "Yllera 5.5", grapes: "Verdejo frizzante", copa: 4.2, bottle: 19 },
          { name: "Protos", grapes: "Verdejo", bottle: 19 },
          { name: "Ramón Bilbao", grapes: "Verdejo", bottle: 19.5 },
          { name: "Marqués de Riscal Ecológico", grapes: "Verdejo", half: 12.5, bottle: 22.5 },
          { name: "Javier Sanz", grapes: "Sauvignon Blanc", copa: 5, bottle: 23 },
          { name: "José Pariente", grapes: "Verdejo", bottle: 25 },
          { name: "Finca La Colina", grapes: "Sauvignon Blanc", bottle: 31 },
          { name: "Marqués de Riscal Limousin", grapes: "Verdejo", bottle: 32 },
          { name: "V Malcorta", grapes: "Malcorta", bottle: 34 },
          { name: "Meraldis", grapes: "Verdejo · fermentado en barrica", bottle: 37 },
          { name: "Ossian", grapes: "Verdejo", bottle: 65 },
          { name: "Belondrade y Lurtón", grapes: "Verdejo", bottle: 72 },
        ],
      },
      {
        doLabel: "D.O. Rioja",
        wines: [
          { name: "Marqués de Cáceres", grapes: "Viura", copa: 3.7, half: 11, bottle: 18 },
          { name: "Aguirrebeña", grapes: "fermentado en barrica", bottle: 22 },
          { name: "Campillo", grapes: "Viura, Chardonnay · barrica", bottle: 23 },
          { name: "Muga", grapes: "Viura, Garnacha, Malvasía", bottle: 25 },
          { name: "Barón de Ley Tres Viñas", grapes: "Viura, Malvasía, Garnacha Blanc", bottle: 30 },
          { name: "Viuda Negra Villahuercos", grapes: "Tempranillo Blanc", bottle: 42 },
          { name: "La Mateo", grapes: "Tempranillo Blanc", bottle: 42 },
          { name: "200 Monges Reserva", grapes: "Viura, Malvasía", bottle: 72 },
          { name: "Pujanzas San Juan de Anteportalatina", grapes: "Viura", bottle: 85 },
          { name: "Capellanía de Marqués de Murrieta", grapes: "Viura", bottle: 110 },
          { name: "Pujanzas Añadas Frías", grapes: "Viura", bottle: 170 },
          { name: "Castillo de Ygay 1986", grapes: "Viura, Malvasía", bottle: 1600 },
        ],
      },
      {
        doLabel: "D.O. Penedés",
        wines: [
          { name: "Viñasol Ecológico", grapes: "Parellada, Garnacha", half: 11.5, bottle: 19 },
          { name: "Atrium Chardonnay", grapes: "Chardonnay", bottle: 22.5 },
          { name: "Viña Esmeralda", grapes: "Gewürztraminer, Moscatel", half: 14, bottle: 22.5 },
          { name: "Gran Viñasol Chardonnay", grapes: "Chardonnay", bottle: 27 },
          { name: "Jean Leon Chardonnay", grapes: "Chardonnay", bottle: 27 },
          { name: "Waltraud Torres", grapes: "Riesling", bottle: 36 },
          { name: "Fransola Torres", grapes: "Sauvignon Blanc", bottle: 47 },
          { name: "Milmanda", grapes: "Chardonnay", bottle: 90 },
        ],
      },
      {
        doLabel: "Rías Baixas · Ribeiro · Galicia",
        wines: [
          { name: "Attis Mar (Vino Submarino)", grapes: "Albariño", bottle: 125 },
          { name: "Alba Martín", grapes: "Albariño", copa: 4.6, bottle: 22, isHouse: true },
          { name: "Martín Códax", grapes: "Albariño", bottle: 25, magnum: 48 },
          { name: "Viña Caeira", grapes: "Albariño", bottle: 27 },
          { name: "Pazo de San Mauro", grapes: "Albariño", bottle: 32 },
          { name: "Mar de Frades", grapes: "Albariño", bottle: 32, magnum: 65 },
          { name: "Terras Gauda", grapes: "Albariño", bottle: 33 },
          { name: "Fefiñanes", grapes: "Albariño", bottle: 34 },
          { name: "Martín Códax Arousa", grapes: "Albariño", bottle: 40 },
          { name: "Fefiñanes III año", grapes: "Albariño", bottle: 66 },
          { name: "Pazo de Barrantes", grapes: "Albariño", bottle: 66 },
          { name: "Casar de Vide", grapes: "Treixadura, Albariño, Godello", bottle: 24 },
          { name: "El Paraguas", grapes: "Treixadura, Godello, Albariño", bottle: 42 },
          { name: "O'Morto", grapes: "Godello", bottle: 45 },
          { name: "Fai un sol de Carallo", grapes: "Treixadura, Godello, Albariño", bottle: 125 },
          { name: "G'Aviones", grapes: "Albariño, Godello, Loureira, Treixadura", bottle: 125 },
        ],
      },
      {
        doLabel: "Andalucía · Tierras de Málaga, Cádiz, Huelva",
        wines: [
          { name: "La Raspa", grapes: "Moscatel de Alejandría", bottle: 22 },
          { name: "Cloe", grapes: "Chardonnay", bottle: 25 },
          { name: "Botani Espumoso", grapes: "Moscatel de Alejandría", bottle: 28 },
          { name: "Castillo Miraflores", grapes: "Verdejo · semidulce", bottle: 18.5 },
          { name: "Hacienda La Quintería", grapes: "Chardonnay", bottle: 27 },
          { name: "Destellos", grapes: "Palomino, Arinto", bottle: 35 },
          { name: "Viña Barredero", grapes: "Zalema", bottle: 18.5 },
        ],
      },
      {
        doLabel: "Internacionales",
        wines: [
          { name: "Chablis Fèvre", grapes: "Chardonnay (Borgoña)", bottle: 35 },
          { name: "Domaine Vincent Girardin VV", grapes: "Pouilly Fuissé, Chardonnay", bottle: 60 },
          { name: "Te Mata Sauvignon Blanc", grapes: "Nueva Zelanda", bottle: 35 },
          { name: "Trimbach Riesling", grapes: "Alsacia", bottle: 38 },
        ],
      },
      {
        doLabel: "Finos & Manzanilla",
        wines: [
          { name: "Tío Pepe", copa: 3.5, bottle: 23 },
          { name: "Tío Pepe en rama", bottle: 36 },
          { name: "Manzanilla La Papirusa", copa: 4.2, bottle: 28 },
        ],
      },
    ],
  },
  {
    category: "rosados",
    groups: [
      {
        doLabel: "Rosados",
        wines: [
          { name: "Cuatro Pasos", grapes: "Mencía · Bierzo", copa: 3.8, bottle: 18, isHouse: true },
          { name: "Marqués de Cáceres Excellens", grapes: "Garnacha, Tempranillo · Rioja", bottle: 19 },
          { name: "Ramón Bilbao", grapes: "Garnacha", bottle: 19.5 },
          { name: "Marqués de Riscal", grapes: "Tempranillo, Garnacha", bottle: 20 },
          { name: "Barón de Ley de Lágrima", grapes: "Garnacha", bottle: 20 },
          { name: "Viuda Negra Prado de Almas", grapes: "Tempranillo", bottle: 33 },
          { name: "Lalomba de Ramón Bilbao", grapes: "Garnacha, Macabeo", bottle: 44 },
          { name: "Primer Rosé de Marqués de Murrieta", grapes: "Mazuelo", bottle: 57 },
          { name: "200 Monges", grapes: "Tempranillo, Graciano, Garnacha", bottle: 72 },
          { name: "Aurora D'Espiells", grapes: "Pinot Noir, Xare·lo, Syrah · Cataluña", bottle: 23 },
          { name: "Quelias", grapes: "Albillo, Garnacha, Tempranillo · Cigales", bottle: 24.5 },
          { name: "Nabal Rose", grapes: "Tempranillo, Garnacha, Albillo Mayor · Ribera del Duero", bottle: 23 },
          { name: "Flamingo Rosé", grapes: "Tinta Fina", bottle: 40 },
          { name: "Habla de Ti", grapes: "Cinsault, Garnacha, Syrah · Extremadura", bottle: 25 },
          { name: "Belondrade Quinta Clarisa", grapes: "Tempranillo, Syrah · Castilla y León", bottle: 31 },
          { name: "Chivite Las Fincas", grapes: "Tempranillo, Garnacha · Navarra", bottle: 24 },
          { name: "Chivite Colección 125", grapes: "Tempranillo, Garnacha", bottle: 52 },
          { name: "Finca La Habanera", grapes: "Tenerife", bottle: 45 },
          { name: "Fleurs de Prairie", grapes: "Grenache, Syrah, Carignan · Provence", bottle: 28 },
          { name: "Miraval", grapes: "Cinsault, Garnacha, Syrah", bottle: 43 },
          { name: "Habla de Rita", grapes: "Garnacha, Syrah", bottle: 43 },
          { name: "Whispering Angel", grapes: "Garnacha, Syrah, Vermentino", bottle: 48 },
          { name: "Cloe Rosé", grapes: "Garnacha · Sierras de Málaga", bottle: 25 },
          { name: "Marbella Blush", grapes: "Syrah", bottle: 42 },
        ],
      },
    ],
  },
  {
    category: "cavas",
    groups: [
      {
        doLabel: "Cavas",
        wines: [
          { name: "Juvé & Camps Essential Púrpura · Brut", copa: 5.2, bottle: 25, isHouse: true },
          { name: "Juvé & Camps Essential Rosé", bottle: 28 },
          { name: "Agustí Torelló Brut Reserva", bottle: 28.5 },
          { name: "Juvé & Camps Reserva de la Familia", bottle: 33 },
          { name: "Juvé & Camps Milesime Brut Reserva", bottle: 42 },
          { name: "Gran Juvé & Camps Brut Gran Reserva", bottle: 50 },
          { name: "Juvé & Camps Milésime Rosé", bottle: 59 },
          { name: "Kripta Gran Reserva", bottle: 115 },
        ],
      },
    ],
  },
  {
    category: "champagnes",
    groups: [
      {
        doLabel: "Champagnes",
        wines: [
          { name: "Nicolas Feuillatte Brut Reserva", bottle: 59 },
          { name: "Moët & Chandon", bottle: 75 },
          { name: "Deutz Brut Classic", bottle: 90 },
          { name: "Moët & Chandon Rosé", bottle: 95 },
          { name: "Louis Roederer Premier", bottle: 95 },
          { name: "Veuve Cliquot", bottle: 95 },
          { name: "Bollinger Brut", bottle: 100 },
          { name: "Gosset Blanc de Blancs Brut", bottle: 130 },
          { name: "Moët Chandon Ice Imperial", bottle: 130 },
          { name: "Laurent Perrier Rosé", bottle: 135 },
          { name: "Billecart Salmon Brut Rosé", bottle: 140 },
          { name: "Palmes d'Or", bottle: 200 },
          { name: "Dom Pérignon", bottle: 320 },
          { name: "Louis Roederer Cristal Brut", bottle: 420 },
          { name: "Krug Grande Cuvée", bottle: 450 },
        ],
      },
    ],
  },
];
