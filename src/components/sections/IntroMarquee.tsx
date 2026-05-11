import { Marquee } from "@/components/ui/Marquee";

export function IntroMarquee() {
  const items = [
    "Cocina Mediterránea",
    "Pescados al Espeto",
    "Mariscos del Día",
    "Bodega Cuidada",
    "Frente al Mar",
    "Fuengirola · Málaga",
    "Renovado 2021",
    "Familia Malagueña",
  ];

  return <Marquee items={items} tone="ink" separator="✦" />;
}
