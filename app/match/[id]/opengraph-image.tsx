import { ImageResponse } from "next/og";
import { OgCard, ogContentType, ogSize } from "@/lib/og";
import { loadMatchSummary } from "@/lib/matchSummary";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Resumen de partida · Dota Patch-Aware Coach";

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
          icon="?"
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
        icon={p.won ? "★" : "☆"}
        accent={accent}
      />
    ),
    { ...size },
  );
}
