// Auto-generado por scripts/sync-patch-notes.mjs desde el datafeed público de Valve.
// NO editar a mano. Re-sincroniza con: node scripts/sync-patch-notes.mjs
// Última sync: 2026-08-17
// Fuente: https://www.dota2.com/datafeed/patchnotes (cambios reales del parche).

export type HeroPatchChange = {
  /** slug del héroe (coincide con HERO_DATA y HEROES). */
  id: string;
  name: string;
  numericId: number;
  /** Número real de líneas de cambio (héroe + habilidades + talentos) en este parche. */
  changeCount: number;
  /** Cuántas habilidades distintas recibieron ajustes. */
  abilitiesChanged: number;
  /** Iconos que Valve adjunta a las notas (p. ej. "damage", "agility"): pista del tipo de cambio. */
  icons: string[];
};

export const PATCH_NOTES_META = {
  version: "7.41e",
  releasedAt: "2026-07-30",
  sourceUrl: "https://www.dota2.com/patches/7.41e",
  heroesChanged: 56,
  itemsChanged: 26,
  neutralItemsChanged: 8,
} as const;

export const HERO_PATCH_CHANGES: readonly HeroPatchChange[] = [
  {
    "id": "snapfire",
    "name": "Snapfire",
    "numericId": 128,
    "changeCount": 7,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "bane",
    "name": "Bane",
    "numericId": 3,
    "changeCount": 5,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "legion-commander",
    "name": "Legion Commander",
    "numericId": 104,
    "changeCount": 5,
    "abilitiesChanged": 0,
    "icons": [
      "strength",
      "damage",
      "attack_speed"
    ]
  },
  {
    "id": "clockwerk",
    "name": "Clockwerk",
    "numericId": 51,
    "changeCount": 4,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "troll-warlord",
    "name": "Troll Warlord",
    "numericId": 95,
    "changeCount": 4,
    "abilitiesChanged": 2,
    "icons": [
      "agility",
      "damage"
    ]
  },
  {
    "id": "drow-ranger",
    "name": "Drow Ranger",
    "numericId": 6,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "shadow-fiend",
    "name": "Shadow Fiend",
    "numericId": 11,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": [
      "intelligence"
    ]
  },
  {
    "id": "zeus",
    "name": "Zeus",
    "numericId": 22,
    "changeCount": 3,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "doom",
    "name": "Doom",
    "numericId": 69,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": [
      "attack_range"
    ]
  },
  {
    "id": "gyrocopter",
    "name": "Gyrocopter",
    "numericId": 72,
    "changeCount": 3,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "outworld-devourer",
    "name": "Outworld Devourer",
    "numericId": 76,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "treant-protector",
    "name": "Treant Protector",
    "numericId": 83,
    "changeCount": 3,
    "abilitiesChanged": 2,
    "icons": [
      "attack_speed"
    ]
  },
  {
    "id": "hoodwink",
    "name": "Hoodwink",
    "numericId": 123,
    "changeCount": 3,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "axe",
    "name": "Axe",
    "numericId": 2,
    "changeCount": 2,
    "abilitiesChanged": 1,
    "icons": [
      "agility"
    ]
  },
  {
    "id": "morphling",
    "name": "Morphling",
    "numericId": 10,
    "changeCount": 2,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "necrophos",
    "name": "Necrophos",
    "numericId": 36,
    "changeCount": 2,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "beastmaster",
    "name": "Beastmaster",
    "numericId": 38,
    "changeCount": 2,
    "abilitiesChanged": 0,
    "icons": []
  },
  {
    "id": "queen-of-pain",
    "name": "Queen of Pain",
    "numericId": 39,
    "changeCount": 2,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "death-prophet",
    "name": "Death Prophet",
    "numericId": 43,
    "changeCount": 2,
    "abilitiesChanged": 0,
    "icons": [
      "agility",
      "damage"
    ]
  },
  {
    "id": "pugna",
    "name": "Pugna",
    "numericId": 45,
    "changeCount": 2,
    "abilitiesChanged": 0,
    "icons": [
      "intelligence",
      "damage"
    ]
  },
  {
    "id": "spectre",
    "name": "Spectre",
    "numericId": 67,
    "changeCount": 2,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "invoker",
    "name": "Invoker",
    "numericId": 74,
    "changeCount": 2,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "lone-druid",
    "name": "Lone Druid",
    "numericId": 80,
    "changeCount": 2,
    "abilitiesChanged": 0,
    "icons": []
  },
  {
    "id": "undying",
    "name": "Undying",
    "numericId": 85,
    "changeCount": 2,
    "abilitiesChanged": 1,
    "icons": [
      "movement"
    ]
  },
  {
    "id": "keeper-of-the-light",
    "name": "Keeper of the Light",
    "numericId": 90,
    "changeCount": 2,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "centaur-warrunner",
    "name": "Centaur Warrunner",
    "numericId": 96,
    "changeCount": 2,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "elder-titan",
    "name": "Elder Titan",
    "numericId": 103,
    "changeCount": 2,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "earth-spirit",
    "name": "Earth Spirit",
    "numericId": 107,
    "changeCount": 2,
    "abilitiesChanged": 0,
    "icons": [
      "intelligence"
    ]
  },
  {
    "id": "oracle",
    "name": "Oracle",
    "numericId": 111,
    "changeCount": 2,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "phantom-lancer",
    "name": "Phantom Lancer",
    "numericId": 12,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "puck",
    "name": "Puck",
    "numericId": 13,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "tiny",
    "name": "Tiny",
    "numericId": 19,
    "changeCount": 1,
    "abilitiesChanged": 0,
    "icons": [
      "health_regen"
    ]
  },
  {
    "id": "vengeful-spirit",
    "name": "Vengeful Spirit",
    "numericId": 20,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "lina",
    "name": "Lina",
    "numericId": 25,
    "changeCount": 1,
    "abilitiesChanged": 0,
    "icons": [
      "agility"
    ]
  },
  {
    "id": "witch-doctor",
    "name": "Witch Doctor",
    "numericId": 30,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "sniper",
    "name": "Sniper",
    "numericId": 35,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "venomancer",
    "name": "Venomancer",
    "numericId": 40,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "phantom-assassin",
    "name": "Phantom Assassin",
    "numericId": 44,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "templar-assassin",
    "name": "Templar Assassin",
    "numericId": 46,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "dragon-knight",
    "name": "Dragon Knight",
    "numericId": 49,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "omniknight",
    "name": "Omniknight",
    "numericId": 57,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "night-stalker",
    "name": "Night Stalker",
    "numericId": 60,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "weaver",
    "name": "Weaver",
    "numericId": 63,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "jakiro",
    "name": "Jakiro",
    "numericId": 64,
    "changeCount": 1,
    "abilitiesChanged": 0,
    "icons": [
      "intelligence"
    ]
  },
  {
    "id": "batrider",
    "name": "Batrider",
    "numericId": 65,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "ancient-apparition",
    "name": "Ancient Apparition",
    "numericId": 68,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "chaos-knight",
    "name": "Chaos Knight",
    "numericId": 81,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "visage",
    "name": "Visage",
    "numericId": 92,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "medusa",
    "name": "Medusa",
    "numericId": 94,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "magnus",
    "name": "Magnus",
    "numericId": 97,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "ember-spirit",
    "name": "Ember Spirit",
    "numericId": 106,
    "changeCount": 1,
    "abilitiesChanged": 0,
    "icons": [
      "movement"
    ]
  },
  {
    "id": "underlord",
    "name": "Underlord",
    "numericId": 108,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "grimstroke",
    "name": "Grimstroke",
    "numericId": 121,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "mars",
    "name": "Mars",
    "numericId": 129,
    "changeCount": 1,
    "abilitiesChanged": 0,
    "icons": [
      "intelligence"
    ]
  },
  {
    "id": "ring-master",
    "name": "Ring Master",
    "numericId": 131,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "muerta",
    "name": "Muerta",
    "numericId": 138,
    "changeCount": 1,
    "abilitiesChanged": 1,
    "icons": []
  }
];

export const HERO_PATCH_CHANGES_BY_ID: Record<string, HeroPatchChange> = Object.fromEntries(
  HERO_PATCH_CHANGES.map((h) => [h.id, h]),
);
