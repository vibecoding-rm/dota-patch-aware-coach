// Pequeño loader compartido por la página /match/[id] y su OG image. Mantiene
// la pieza de "qué se muestra cuando alguien comparte una partida" en un sitio
// y reusa el cache de fetchMatch (revalidate 600s).

import {
  fetchHeroConstants,
  fetchMatch,
  normalizeMatch,
  OpenDotaError,
  pickPerspective,
  type NormalizedMatch,
  type NormalizedPlayer,
} from "@/lib/opendota";

export type MatchSummary = {
  match: NormalizedMatch;
  perspective: NormalizedPlayer;
};

export async function loadMatchSummary(matchId: string): Promise<MatchSummary | null> {
  if (!/^\d{6,}$/.test(matchId)) return null;
  try {
    const [match, heroes] = await Promise.all([
      fetchMatch(matchId),
      fetchHeroConstants(),
    ]);
    const normalized = normalizeMatch(match, heroes);
    const perspective = pickPerspective(normalized);
    return { match: normalized, perspective };
  } catch (error) {
    if (error instanceof OpenDotaError) return null;
    return null;
  }
}
