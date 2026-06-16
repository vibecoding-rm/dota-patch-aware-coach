import { ImageResponse } from "next/og";
import { OgCard, ogContentType, ogSize } from "@/lib/og";
import { loadMatchSummary } from "@/lib/matchSummary";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Resumen de partida · Dota Patch-Aware Coach";

// Estrella dibujada como SVG (no como caracter), así Satori la rasteriza sin
// depender de que el glyph exista en la fuente embebida. `filled` controla si
// la estrella es maciza (victoria) o solo el contorno (derrota).
function StarIcon({ filled }: { filled: boolean }) {
  const path =
    "M24 3 L29.78 18.36 L46 19.27 L33.5 30.05 L37.45 46 L24 37.27 L10.55 46 L14.5 30.05 L2 19.27 L18.22 18.36 Z";
  return (
    <svg width={44} height={44} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={path}
        fill={filled ? "#ffffff" : "transparent"}
        stroke="#ffffff"
        strokeWidth={filled ? 0 : 3}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const summary = await loadMatchSummary(id);

  if (!summary) {
    return new ImageResponse(
      (
        <OgCard
          eyebrow={`MATCH · ${id}`}
          title="Partida no encontrada"
          subtitle="OpenDota no tiene datos para este ID o aún no se ha procesado."
          tags={["Verifica el ID", "Pública necesaria"]}
          icon={<StarIcon filled={false} />}
          accent="yellow"
        />
      ),
      { ...size },
    );
  }

  const { match, perspective: p } = summary;
  const result = p.won ? "VICTORIA" : "DERROTA";
  const accent = p.won ? "teal" : "red";
  const kda = `${p.kills}/${p.deaths}/${p.assists}`;
  const subtitle = `${result} en ${match.durationLabel} · GPM ${p.gpm} · XPM ${p.xpm} · Net worth ${p.netWorth.toLocaleString()}`;
  const tags = [
    `KDA ${kda}`,
    `${p.lastHits} last hits`,
    match.parsed ? "Partida parseada" : "Sin parsear",
  ];

  return new ImageResponse(
    (
      <OgCard
        eyebrow={`MATCH · ${match.matchId}`}
        title={`${p.heroName} · ${kda}`}
        subtitle={subtitle}
        tags={tags}
        icon={<StarIcon filled={p.won} />}
        accent={accent}
      />
    ),
    { ...size },
  );
}
