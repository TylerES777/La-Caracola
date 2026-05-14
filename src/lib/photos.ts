// Real La Caracola photos. Add new files in /public/media/lacaracola/
// and surface them here so consumers don't hard-code paths.
//
// The first block is the legacy keys (already wired across components);
// we keep the same key names so we don't have to touch consumers, but
// re-point them at the new real photography. The MEDIA block exposes
// the full new library for any future use.

const M = "/media/lacaracola";

export const PHOTOS = {
  // Hero / signature interior — the panoramic dining room with sea view
  heroDiningRoom: `${M}/dining-room-hero.jpg`,
  // Plated tartar (mango + strawberry + crackers)
  dishTartar: `${M}/dish-tartar-mango.jpg`,
  // Was: lamb. New: signature plated whole sole (lenguado a la plancha)
  dishCorderoAzul: `${M}/dish-lenguado.jpg`,
  // Real La Caracola facade with the conch-shell logo
  facade: `${M}/facade.jpg`,
  // Keep vintage assets — heritage texture
  vintageFaena: "/assets/photos/vintage-faena.jpg",
  vintagePesca: "/assets/photos/vintage-pesca.webp",
  vintagePlaya: "/assets/photos/vintage-playa.webp",
} as const;

// Full library of real photography for new uses.
export const MEDIA = {
  // Interior & ambiance
  diningRoomHero: `${M}/dining-room-hero.jpg`,
  diningRoomWide: `${M}/dining-room-wide.jpg`,
  diningRoomBlue: `${M}/dining-room-blue.jpg`,
  terrace: `${M}/terrace.jpg`,
  facade: `${M}/facade.jpg`,
  serviceBread: `${M}/service-bread.jpg`,
  // Location
  beach: `${M}/beach.jpg`,
  beachFoam: `${M}/beach-foam.jpg`,
  // Bar & cellar
  bar: `${M}/bar.jpg`,
  bartender: `${M}/bartender-franco.jpg`,
  cocktailPour: `${M}/cocktail-pour.jpg`,
  cellarWhites: `${M}/cellar-whites.jpg`,
  cellarChampagne: `${M}/cellar-champagne.jpg`,
  winePariente: `${M}/wine-pariente.jpg`,
  wineMeliorTable: `${M}/wine-melior-table.jpg`,
  // Dishes
  espetos: `${M}/dish-espetos.jpg`,
  vieirasAction: `${M}/dish-vieiras-action.jpg`,
  vieirasCloseup: `${M}/dish-vieiras-closeup.jpg`,
  tartarMango: `${M}/dish-tartar-mango.jpg`,
  ostras: `${M}/dish-ostras.jpg`,
  mariscada: `${M}/dish-mariscada.jpg`,
  pescadoSal: `${M}/dish-pescado-sal.jpg`,
  langostinos: `${M}/dish-langostinos.jpg`,
  lenguado: `${M}/dish-lenguado.jpg`,
  pezPlata: `${M}/dish-pez-plata.jpg`,
  // Fresh product
  freshFishIce: `${M}/fresh-fish-ice.jpg`,
  freshCigalas: `${M}/fresh-cigalas.jpg`,
} as const;

export type MediaKey = keyof typeof MEDIA;

export const EU_LOGOS = {
  andalucia: "/assets/eu-compliance/andalucia.png",
  junta: "/assets/eu-compliance/junta.png",
  feder: "/assets/eu-compliance/feder.png",
} as const;
