import { getRequestConfig } from "next-intl/server";
import { routing, type Locale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale = (
    routing.locales as readonly string[]
  ).includes(requested ?? "")
    ? (requested as Locale)
    : routing.defaultLocale;

  // ES is canonical; other locales merge over ES so missing keys fall back.
  const fallback = (await import(`../../messages/es.json`)).default;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages: { ...fallback, ...messages },
  };
});
