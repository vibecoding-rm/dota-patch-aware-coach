import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dota Patch-Aware Coach",
    short_name: "Dota Coach",
    description:
      "Asistente de draft, coach de parches y análisis post-partida para Dota 2 con datos reales de OpenDota.",
    start_url: "/",
    display: "standalone",
    background_color: "#07080a",
    theme_color: "#0a0b0f",
    lang: "es",
    orientation: "portrait-primary",
    categories: ["games", "education", "sports"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
