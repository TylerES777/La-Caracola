// Re-pointed (was auto-generated, now hand-curated) to the real La Caracola
// photo library in /public/media/lacaracola/. Keep the same keys so consuming
// components don't change.
const M = "/media/lacaracola";

export const PREMIUM = {
  // Hero stack
  "hero-restaurant": `${M}/dining-room-hero.jpg`,
  "hero-table": `${M}/dining-room-blue.jpg`,
  "hero-beach": `${M}/beach.jpg`,
  // Dishes
  "dish-seafood": `${M}/dish-mariscada.jpg`,
  "dish-paella": `${M}/dish-langostinos.jpg`,
  "dish-tartare": `${M}/dish-tartar-mango.jpg`,
  "dish-oysters": `${M}/dish-ostras.jpg`,
  "dish-grill": `${M}/dish-espetos.jpg`,
  // Wine & cellar
  "wine-pour": `${M}/wine-melior-table.jpg`,
  "wine-bottles": `${M}/cellar-whites.jpg`,
  // Interior
  "interior-warm": `${M}/dining-room-wide.jpg`,
  "interior-glass": `${M}/terrace.jpg`,
  "kitchen-chef": `${M}/service-bread.jpg`,
  // Sea & atmosphere
  "sea-horizon": `${M}/beach.jpg`,
  "sea-waves": `${M}/beach-foam.jpg`,
  // Pantry — keep existing for now (no replacement in new library)
  "olive-oil": "/assets/photos/premium/olive-oil.jpg",
  "lemons-fresh": "/assets/photos/premium/lemons-fresh.jpg",
  // Facade
  "facade-evening": `${M}/facade.jpg`,
} as const;

export type PremiumKey = keyof typeof PREMIUM;
