import { Bracket, Hero, HERO_BY_ID, Role } from "@/data/dota";
import { getPatchRecommendationLabel } from "@/data/patches";

export type WeeklyClassification = "jugar-ahora" | "jugar-draft" | "pausar" | "aprender";

export type WeeklyHeroResult = {
  hero: Hero;
  classification: WeeklyClassification;
  reason: string;
};

export function classifyHeroPool(
  heroPool: string[],
  role: Role,
  bracket: Bracket,
): WeeklyHeroResult[] {
  return heroPool.map((heroId) => {
    const hero = HERO_BY_ID.get(heroId);
    if (!hero) {
      return {
        hero: { id: heroId, name: heroId } as Hero,
        classification: "pausar" as WeeklyClassification,
        reason: "Héroe no encontrado",
      };
    }

    const patchLabel = getPatchRecommendationLabel(heroId); // "Priorizar", "Revisar", "Estable"
    const isRoleMatch = hero.roles.includes(role);
    const difficultyPenalty = hero.difficulty > 3 && ["herald", "guardian", "crusader"].includes(bracket);

    let classification: WeeklyClassification = "jugar-draft";
    let reason = "Opción sólida dependiendo del draft aliado y enemigo.";

    if (!isRoleMatch) {
      classification = "aprender";
      reason = `Suele jugarse en otros roles. Practícalo en unranked si quieres llevarlo como ${role}.`;
    } else if (patchLabel === "Priorizar" && !difficultyPenalty) {
      classification = "jugar-ahora";
      reason = "Excelente en el meta actual y encaja con tu nivel mecánico.";
    } else if (patchLabel === "Priorizar" && difficultyPenalty) {
      classification = "jugar-draft";
      reason = "Fuerte en el parche, pero requiere mucha ejecución en tu bracket. Úsalo si tu equipo tiene buen control.";
    } else if (patchLabel === "Revisar") {
      classification = "pausar";
      reason = "Su efectividad está siendo reevaluada en este parche o no es el mejor momento para spammearlo a ciegas.";
    } else if (hero.patchValue < 0 || (difficultyPenalty && patchLabel !== "Priorizar")) {
      classification = "pausar";
      reason = "Débil en el parche actual o muy riesgoso por su dificultad para tu bracket.";
    } else if (patchLabel === "Estable" && isRoleMatch) {
      classification = "jugar-draft";
      reason = "Estable en el meta. Dependerá de counters directos en partida.";
    }

    return { hero, classification, reason };
  });
}
