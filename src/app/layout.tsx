import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Caracola · Comer frente al mar en Fuengirola",
  description:
    "Restaurante La Caracola — cocina mediterránea, pescados al espeto y mariscos frescos del día en el Paseo Marítimo de Fuengirola.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
