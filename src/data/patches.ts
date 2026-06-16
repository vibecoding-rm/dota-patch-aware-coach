export type PatchFactKind = "hecho" | "inferencia" | "estadistica";
export type PatchImpact = "buff" | "nerf" | "neutral" | "unknown";
export type PatchTargetType = "hero" | "item" | "general" | "map" | "objective";

export type PatchSource = {
  label: string;
  url: string;
  consultedAt: string;
};

export type PatchRecord = {
  version: string;
  releasedAt: string;
  source: PatchSource;
  status: "manual-review" | "verified" | "stale";
  notes: string;
};

export type PatchChange = {
  id: string;
  patch: string;
  targetType: PatchTargetType;
  targetId?: string;
  targetName: string;
  summary: string;
  impact: PatchImpact;
  kind: PatchFactKind;
  confidence: "alta" | "media" | "baja";
  source: PatchSource;
  coachTakeaway: string;
};

const OFFICIAL_741D: PatchSource = {
  label: "Valve - Gameplay Update 7.41d",
  url: "https://www.dota2.com/patches/7.41d",
  consultedAt: "2026-06-16",
};

const D2PT_META_GRID: PatchSource = {
  label: "Dota2ProTracker - Meta Hero Grids 7.41d",
  url: "https://dota2protracker.com/meta-hero-grids",
  consultedAt: "2026-06-16",
};

export const PATCHES: PatchRecord[] = [
  {
    version: "7.41d",
    releasedAt: "2026-06-04",
    source: OFFICIAL_741D,
    status: "manual-review",
    notes:
      "Patch vigente cargado como base versionada. Los cambios finos de heroes/items requieren revision manual antes de emitir recomendaciones categoricas.",
  },
];

export const PATCH_CHANGES: PatchChange[] = [
  {
    id: "741d-official-release",
    patch: "7.41d",
    targetType: "general",
    targetName: "Patch 7.41d",
    summary: "Valve publico el Gameplay Update 7.41d el 2026-06-04.",
    impact: "neutral",
    kind: "hecho",
    confidence: "alta",
    source: OFFICIAL_741D,
    coachTakeaway:
      "Toda recomendacion debe declarar 7.41d como version activa y bajar confianza si no hay cambio especifico revisado para el heroe.",
  },
  ...metaGridChanges("carry", [
    ["drow-ranger", "Drow Ranger"],
    ["faceless-void", "Faceless Void"],
    ["shadow-fiend", "Shadow Fiend"],
    ["phantom-lancer", "Phantom Lancer"],
    ["juggernaut", "Juggernaut"],
    ["lifestealer", "Lifestealer"],
    ["slark", "Slark"],
  ]),
  ...metaGridChanges("mid", [
    ["invoker", "Invoker"],
    ["snapfire", "Snapfire"],
    ["ember-spirit", "Ember Spirit"],
    ["lina", "Lina"],
    ["keeper-of-the-light", "Keeper of the Light"],
    ["tinker", "Tinker"],
    ["outworld-destroyer", "Outworld Destroyer"],
  ]),
  ...metaGridChanges("offlane", [
    ["axe", "Axe"],
    ["dawnbreaker", "Dawnbreaker"],
    ["night-stalker", "Night Stalker"],
    ["legion-commander", "Legion Commander"],
    ["doom", "Doom"],
    ["necrophos", "Necrophos"],
    ["pudge", "Pudge"],
  ]),
  ...metaGridChanges("support", [
    ["pudge", "Pudge"],
    ["zeus", "Zeus"],
    ["spirit-breaker", "Spirit Breaker"],
    ["techies", "Techies"],
    ["bounty-hunter", "Bounty Hunter"],
    ["nyx-assassin", "Nyx Assassin"],
    ["invoker", "Invoker"],
  ]),
  ...metaGridChanges("hard support", [
    ["pudge", "Pudge"],
    ["disruptor", "Disruptor"],
    ["shadow-shaman", "Shadow Shaman"],
    ["rubick", "Rubick"],
    ["silencer", "Silencer"],
    ["treant-protector", "Treant Protector"],
    ["snapfire", "Snapfire"],
  ]),
];

function metaGridChanges(
  role: string,
  heroes: Array<[targetId: string, targetName: string]>,
): PatchChange[] {
  return heroes.map(([targetId, targetName]) => ({
    id: `741d-d2pt-${role.replace(/\s+/g, "-")}-${targetId}`,
    patch: "7.41d",
    targetType: "hero",
    targetId,
    targetName,
    summary: `${targetName} aparece en el grid de meta ${role} de Dota2ProTracker para 7.41d.`,
    impact: "unknown",
    kind: "estadistica",
    confidence: "media",
    source: D2PT_META_GRID,
    coachTakeaway:
      "Tratar como senal de meta, no como orden de pick. Cruzar con comfort pool, bracket y draft antes de recomendar.",
  }));
}

export function getActivePatch(): PatchRecord {
  return PATCHES[0];
}

export function getPatchChangesForHero(heroId: string): PatchChange[] {
  return PATCH_CHANGES.filter((change) => change.targetId === heroId);
}

export function getGlobalPatchChanges(): PatchChange[] {
  return PATCH_CHANGES.filter((change) => change.targetType === "general");
}

export function getPatchConfidenceForHero(heroId: string): "alta" | "media" | "baja" {
  const heroChanges = getPatchChangesForHero(heroId);
  if (heroChanges.some((change) => change.kind === "hecho" && change.confidence === "alta")) {
    return "alta";
  }
  if (heroChanges.length > 0) return "media";
  return "baja";
}

export function getPatchRecommendationLabel(heroId: string): "Priorizar" | "Revisar" | "Estable" {
  const changes = getPatchChangesForHero(heroId);
  if (changes.some((change) => change.kind === "estadistica")) return "Revisar";
  if (changes.some((change) => change.impact === "buff")) return "Priorizar";
  return "Estable";
}
