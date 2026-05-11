export const RESTAURANT = {
  name: "Restaurante La Caracola",
  shortName: "La Caracola",
  city: "Fuengirola",
  region: "Málaga",
  address: "Paseo Marítimo Rey de España, parc 9 · Fuengirola · Málaga",
  addressShort: "Paseo Marítimo Rey de España, parc 9",
  phone: "+34 952 584 687",
  phoneHref: "tel:+34952584687",
  email: "reservaslacaracolafuengirola@gmail.com",
  hours: "L–D · 12:00 h – 23:30 h",
  hoursShort: "L–D 12:00–23:30",
  social: {
    facebook: "https://www.facebook.com/restaurantelacaracola",
    instagram: "https://www.instagram.com/restaurantelacaracola",
  },
} as const;

export const NAV_ITEMS = [
  { key: "inicio", href: "/" },
  { key: "elSabor", href: "/el-sabor" },
  { key: "elMenu", href: "/el-menu" },
  { key: "reservas", href: "/reservas" },
  { key: "galeria", href: "/galeria" },
  { key: "contacto", href: "/contacto" },
] as const;

export const LOCALE_LABELS: Record<string, string> = {
  es: "ES",
  en: "EN",
  fr: "FR",
  de: "DE",
  nl: "NL",
  ru: "RU",
};
