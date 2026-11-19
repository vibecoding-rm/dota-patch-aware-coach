// Auto-generado por scripts/sync-patch-notes.mjs desde el datafeed público de Valve.
// NO editar a mano. Re-sincroniza con: node scripts/sync-patch-notes.mjs
// Última sync: 2026-11-19
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
  version: "7.42",
  releasedAt: "2026-11-18",
  sourceUrl: "https://www.dota2.com/patches/7.42",
  heroesChanged: 127,
  itemsChanged: 84,
  neutralItemsChanged: 83,
} as const;

export const HERO_PATCH_CHANGES: readonly HeroPatchChange[] = [
  {
    "id": "pugna",
    "name": "Pugna",
    "numericId": 45,
    "changeCount": 29,
    "abilitiesChanged": 4,
    "icons": [
      "agility",
      "intelligence",
      "damage",
      "attack_range"
    ]
  },
  {
    "id": "death-prophet",
    "name": "Death Prophet",
    "numericId": 43,
    "changeCount": 28,
    "abilitiesChanged": 5,
    "icons": [
      "damage",
      "movement",
      "attack_range"
    ]
  },
  {
    "id": "beastmaster",
    "name": "Beastmaster",
    "numericId": 38,
    "changeCount": 26,
    "abilitiesChanged": 3,
    "icons": [
      "agility",
      "damage"
    ]
  },
  {
    "id": "abaddon",
    "name": "Abaddon",
    "numericId": 102,
    "changeCount": 23,
    "abilitiesChanged": 4,
    "icons": []
  },
  {
    "id": "hoodwink",
    "name": "Hoodwink",
    "numericId": 123,
    "changeCount": 22,
    "abilitiesChanged": 5,
    "icons": []
  },
  {
    "id": "dazzle",
    "name": "Dazzle",
    "numericId": 50,
    "changeCount": 20,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "chaos-knight",
    "name": "Chaos Knight",
    "numericId": 81,
    "changeCount": 20,
    "abilitiesChanged": 3,
    "icons": [
      "damage"
    ]
  },
  {
    "id": "meepo",
    "name": "Meepo",
    "numericId": 82,
    "changeCount": 19,
    "abilitiesChanged": 2,
    "icons": [
      "damage",
      "strength"
    ]
  },
  {
    "id": "chen",
    "name": "Chen",
    "numericId": 66,
    "changeCount": 18,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "brewmaster",
    "name": "Brewmaster",
    "numericId": 78,
    "changeCount": 16,
    "abilitiesChanged": 4,
    "icons": []
  },
  {
    "id": "nyx-assassin",
    "name": "Nyx Assassin",
    "numericId": 88,
    "changeCount": 16,
    "abilitiesChanged": 4,
    "icons": []
  },
  {
    "id": "leshrac",
    "name": "Leshrac",
    "numericId": 52,
    "changeCount": 15,
    "abilitiesChanged": 3,
    "icons": [
      "damage",
      "health_regen"
    ]
  },
  {
    "id": "nature-s-prophet",
    "name": "Nature's Prophet",
    "numericId": 53,
    "changeCount": 15,
    "abilitiesChanged": 5,
    "icons": []
  },
  {
    "id": "batrider",
    "name": "Batrider",
    "numericId": 65,
    "changeCount": 15,
    "abilitiesChanged": 2,
    "icons": [
      "intelligence",
      "damage"
    ]
  },
  {
    "id": "phantom-assassin",
    "name": "Phantom Assassin",
    "numericId": 44,
    "changeCount": 13,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "ancient-apparition",
    "name": "Ancient Apparition",
    "numericId": 68,
    "changeCount": 13,
    "abilitiesChanged": 5,
    "icons": [
      "attack_speed"
    ]
  },
  {
    "id": "techies",
    "name": "Techies",
    "numericId": 105,
    "changeCount": 13,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "tinker",
    "name": "Tinker",
    "numericId": 34,
    "changeCount": 12,
    "abilitiesChanged": 4,
    "icons": [
      "strength"
    ]
  },
  {
    "id": "broodmother",
    "name": "Broodmother",
    "numericId": 61,
    "changeCount": 12,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "disruptor",
    "name": "Disruptor",
    "numericId": 87,
    "changeCount": 12,
    "abilitiesChanged": 2,
    "icons": [
      "damage"
    ]
  },
  {
    "id": "ring-master",
    "name": "Ring Master",
    "numericId": 131,
    "changeCount": 12,
    "abilitiesChanged": 6,
    "icons": []
  },
  {
    "id": "kez",
    "name": "Kez",
    "numericId": 145,
    "changeCount": 12,
    "abilitiesChanged": 4,
    "icons": []
  },
  {
    "id": "queen-of-pain",
    "name": "Queen of Pain",
    "numericId": 39,
    "changeCount": 11,
    "abilitiesChanged": 3,
    "icons": [
      "intelligence"
    ]
  },
  {
    "id": "medusa",
    "name": "Medusa",
    "numericId": 94,
    "changeCount": 11,
    "abilitiesChanged": 2,
    "icons": [
      "intelligence"
    ]
  },
  {
    "id": "muerta",
    "name": "Muerta",
    "numericId": 138,
    "changeCount": 11,
    "abilitiesChanged": 2,
    "icons": [
      "damage"
    ]
  },
  {
    "id": "shadow-fiend",
    "name": "Shadow Fiend",
    "numericId": 11,
    "changeCount": 10,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "phantom-lancer",
    "name": "Phantom Lancer",
    "numericId": 12,
    "changeCount": 9,
    "abilitiesChanged": 2,
    "icons": [
      "agility"
    ]
  },
  {
    "id": "enigma",
    "name": "Enigma",
    "numericId": 33,
    "changeCount": 9,
    "abilitiesChanged": 3,
    "icons": [
      "intelligence",
      "damage"
    ]
  },
  {
    "id": "venomancer",
    "name": "Venomancer",
    "numericId": 40,
    "changeCount": 9,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "gyrocopter",
    "name": "Gyrocopter",
    "numericId": 72,
    "changeCount": 9,
    "abilitiesChanged": 5,
    "icons": []
  },
  {
    "id": "invoker",
    "name": "Invoker",
    "numericId": 74,
    "changeCount": 9,
    "abilitiesChanged": 4,
    "icons": []
  },
  {
    "id": "ogre-magi",
    "name": "Ogre Magi",
    "numericId": 84,
    "changeCount": 9,
    "abilitiesChanged": 2,
    "icons": [
      "movement"
    ]
  },
  {
    "id": "undying",
    "name": "Undying",
    "numericId": 85,
    "changeCount": 9,
    "abilitiesChanged": 4,
    "icons": []
  },
  {
    "id": "skywrath-mage",
    "name": "Skywrath Mage",
    "numericId": 101,
    "changeCount": 9,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "monkey-king",
    "name": "Monkey King",
    "numericId": 114,
    "changeCount": 9,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "juggernaut",
    "name": "Juggernaut",
    "numericId": 8,
    "changeCount": 8,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "sand-king",
    "name": "Sand King",
    "numericId": 16,
    "changeCount": 8,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "lycan",
    "name": "Lycan",
    "numericId": 77,
    "changeCount": 8,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "keeper-of-the-light",
    "name": "Keeper of the Light",
    "numericId": 90,
    "changeCount": 8,
    "abilitiesChanged": 4,
    "icons": []
  },
  {
    "id": "void-spirit",
    "name": "Void Spirit",
    "numericId": 126,
    "changeCount": 8,
    "abilitiesChanged": 4,
    "icons": [
      "agility",
      "damage",
      "attack_speed"
    ]
  },
  {
    "id": "mars",
    "name": "Mars",
    "numericId": 129,
    "changeCount": 8,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "largo",
    "name": "Largo",
    "numericId": 155,
    "changeCount": 8,
    "abilitiesChanged": 4,
    "icons": [
      "damage"
    ]
  },
  {
    "id": "drow-ranger",
    "name": "Drow Ranger",
    "numericId": 6,
    "changeCount": 7,
    "abilitiesChanged": 3,
    "icons": [
      "intelligence"
    ]
  },
  {
    "id": "storm-spirit",
    "name": "Storm Spirit",
    "numericId": 17,
    "changeCount": 7,
    "abilitiesChanged": 1,
    "icons": [
      "damage",
      "intelligence"
    ]
  },
  {
    "id": "wraith-king",
    "name": "Wraith King",
    "numericId": 42,
    "changeCount": 7,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "weaver",
    "name": "Weaver",
    "numericId": 63,
    "changeCount": 7,
    "abilitiesChanged": 3,
    "icons": [
      "strength"
    ]
  },
  {
    "id": "outworld-devourer",
    "name": "Outworld Devourer",
    "numericId": 76,
    "changeCount": 7,
    "abilitiesChanged": 3,
    "icons": [
      "strength"
    ]
  },
  {
    "id": "underlord",
    "name": "Underlord",
    "numericId": 108,
    "changeCount": 7,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "axe",
    "name": "Axe",
    "numericId": 2,
    "changeCount": 6,
    "abilitiesChanged": 3,
    "icons": [
      "agility"
    ]
  },
  {
    "id": "bloodseeker",
    "name": "Bloodseeker",
    "numericId": 4,
    "changeCount": 6,
    "abilitiesChanged": 3,
    "icons": [
      "movement"
    ]
  },
  {
    "id": "earthshaker",
    "name": "Earthshaker",
    "numericId": 7,
    "changeCount": 6,
    "abilitiesChanged": 2,
    "icons": [
      "damage"
    ]
  },
  {
    "id": "morphling",
    "name": "Morphling",
    "numericId": 10,
    "changeCount": 6,
    "abilitiesChanged": 2,
    "icons": [
      "strength",
      "intelligence"
    ]
  },
  {
    "id": "vengeful-spirit",
    "name": "Vengeful Spirit",
    "numericId": 20,
    "changeCount": 6,
    "abilitiesChanged": 3,
    "icons": [
      "attack_speed",
      "strength",
      "agility"
    ]
  },
  {
    "id": "zeus",
    "name": "Zeus",
    "numericId": 22,
    "changeCount": 6,
    "abilitiesChanged": 1,
    "icons": [
      "attack_range",
      "damage"
    ]
  },
  {
    "id": "lion",
    "name": "Lion",
    "numericId": 26,
    "changeCount": 6,
    "abilitiesChanged": 2,
    "icons": [
      "agility"
    ]
  },
  {
    "id": "lich",
    "name": "Lich",
    "numericId": 31,
    "changeCount": 6,
    "abilitiesChanged": 4,
    "icons": []
  },
  {
    "id": "faceless-void",
    "name": "Faceless Void",
    "numericId": 41,
    "changeCount": 6,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "dragon-knight",
    "name": "Dragon Knight",
    "numericId": 49,
    "changeCount": 6,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "lifestealer",
    "name": "Lifestealer",
    "numericId": 54,
    "changeCount": 6,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "clinkz",
    "name": "Clinkz",
    "numericId": 56,
    "changeCount": 6,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "spirit-breaker",
    "name": "Spirit Breaker",
    "numericId": 71,
    "changeCount": 6,
    "abilitiesChanged": 5,
    "icons": []
  },
  {
    "id": "silencer",
    "name": "Silencer",
    "numericId": 75,
    "changeCount": 6,
    "abilitiesChanged": 2,
    "icons": [
      "damage",
      "strength"
    ]
  },
  {
    "id": "timbersaw",
    "name": "Timbersaw",
    "numericId": 98,
    "changeCount": 6,
    "abilitiesChanged": 2,
    "icons": [
      "agility"
    ]
  },
  {
    "id": "bristleback",
    "name": "Bristleback",
    "numericId": 99,
    "changeCount": 6,
    "abilitiesChanged": 2,
    "icons": [
      "damage"
    ]
  },
  {
    "id": "tusk",
    "name": "Tusk",
    "numericId": 100,
    "changeCount": 6,
    "abilitiesChanged": 2,
    "icons": [
      "damage",
      "intelligence"
    ]
  },
  {
    "id": "elder-titan",
    "name": "Elder Titan",
    "numericId": 103,
    "changeCount": 6,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "ember-spirit",
    "name": "Ember Spirit",
    "numericId": 106,
    "changeCount": 6,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "grimstroke",
    "name": "Grimstroke",
    "numericId": 121,
    "changeCount": 6,
    "abilitiesChanged": 2,
    "icons": [
      "damage"
    ]
  },
  {
    "id": "marci",
    "name": "Marci",
    "numericId": 136,
    "changeCount": 6,
    "abilitiesChanged": 2,
    "icons": [
      "agility",
      "damage"
    ]
  },
  {
    "id": "crystal-maiden",
    "name": "Crystal Maiden",
    "numericId": 5,
    "changeCount": 5,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "razor",
    "name": "Razor",
    "numericId": 15,
    "changeCount": 5,
    "abilitiesChanged": 2,
    "icons": [
      "damage"
    ]
  },
  {
    "id": "tiny",
    "name": "Tiny",
    "numericId": 19,
    "changeCount": 5,
    "abilitiesChanged": 2,
    "icons": [
      "intelligence"
    ]
  },
  {
    "id": "kunkka",
    "name": "Kunkka",
    "numericId": 23,
    "changeCount": 5,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "lina",
    "name": "Lina",
    "numericId": 25,
    "changeCount": 5,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "shadow-shaman",
    "name": "Shadow Shaman",
    "numericId": 27,
    "changeCount": 5,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "riki",
    "name": "Riki",
    "numericId": 32,
    "changeCount": 5,
    "abilitiesChanged": 2,
    "icons": [
      "health_regen"
    ]
  },
  {
    "id": "luna",
    "name": "Luna",
    "numericId": 48,
    "changeCount": 5,
    "abilitiesChanged": 2,
    "icons": [
      "agility"
    ]
  },
  {
    "id": "clockwerk",
    "name": "Clockwerk",
    "numericId": 51,
    "changeCount": 5,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "dark-seer",
    "name": "Dark Seer",
    "numericId": 55,
    "changeCount": 5,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "bounty-hunter",
    "name": "Bounty Hunter",
    "numericId": 62,
    "changeCount": 5,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "spectre",
    "name": "Spectre",
    "numericId": 67,
    "changeCount": 5,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "centaur-warrunner",
    "name": "Centaur Warrunner",
    "numericId": 96,
    "changeCount": 5,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "earth-spirit",
    "name": "Earth Spirit",
    "numericId": 107,
    "changeCount": 5,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "terrorblade",
    "name": "Terrorblade",
    "numericId": 109,
    "changeCount": 5,
    "abilitiesChanged": 4,
    "icons": []
  },
  {
    "id": "snapfire",
    "name": "Snapfire",
    "numericId": 128,
    "changeCount": 5,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "primal-beast",
    "name": "Primal Beast",
    "numericId": 137,
    "changeCount": 5,
    "abilitiesChanged": 2,
    "icons": [
      "damage",
      "attack_time"
    ]
  },
  {
    "id": "bane",
    "name": "Bane",
    "numericId": 3,
    "changeCount": 4,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "puck",
    "name": "Puck",
    "numericId": 13,
    "changeCount": 4,
    "abilitiesChanged": 2,
    "icons": [
      "agility"
    ]
  },
  {
    "id": "sven",
    "name": "Sven",
    "numericId": 18,
    "changeCount": 4,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "windranger",
    "name": "Windranger",
    "numericId": 21,
    "changeCount": 4,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "tidehunter",
    "name": "Tidehunter",
    "numericId": 29,
    "changeCount": 4,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "necrophos",
    "name": "Necrophos",
    "numericId": 36,
    "changeCount": 4,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "warlock",
    "name": "Warlock",
    "numericId": 37,
    "changeCount": 4,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "jakiro",
    "name": "Jakiro",
    "numericId": 64,
    "changeCount": 4,
    "abilitiesChanged": 2,
    "icons": [
      "mana_regen",
      "strength"
    ]
  },
  {
    "id": "doom",
    "name": "Doom",
    "numericId": 69,
    "changeCount": 4,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "shadow-demon",
    "name": "Shadow Demon",
    "numericId": 79,
    "changeCount": 4,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "naga-siren",
    "name": "Naga Siren",
    "numericId": 89,
    "changeCount": 4,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "io",
    "name": "Io",
    "numericId": 91,
    "changeCount": 4,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "slark",
    "name": "Slark",
    "numericId": 93,
    "changeCount": 4,
    "abilitiesChanged": 1,
    "icons": [
      "damage"
    ]
  },
  {
    "id": "legion-commander",
    "name": "Legion Commander",
    "numericId": 104,
    "changeCount": 4,
    "abilitiesChanged": 0,
    "icons": [
      "strength"
    ]
  },
  {
    "id": "phoenix",
    "name": "Phoenix",
    "numericId": 110,
    "changeCount": 4,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "dawnbreaker",
    "name": "Dawnbreaker",
    "numericId": 135,
    "changeCount": 4,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "anti-mage",
    "name": "Anti-Mage",
    "numericId": 1,
    "changeCount": 3,
    "abilitiesChanged": 0,
    "icons": []
  },
  {
    "id": "mirana",
    "name": "Mirana",
    "numericId": 9,
    "changeCount": 3,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "pudge",
    "name": "Pudge",
    "numericId": 14,
    "changeCount": 3,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "slardar",
    "name": "Slardar",
    "numericId": 28,
    "changeCount": 3,
    "abilitiesChanged": 0,
    "icons": []
  },
  {
    "id": "witch-doctor",
    "name": "Witch Doctor",
    "numericId": 30,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "sniper",
    "name": "Sniper",
    "numericId": 35,
    "changeCount": 3,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "templar-assassin",
    "name": "Templar Assassin",
    "numericId": 46,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": [
      "intelligence"
    ]
  },
  {
    "id": "enchantress",
    "name": "Enchantress",
    "numericId": 58,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "night-stalker",
    "name": "Night Stalker",
    "numericId": 60,
    "changeCount": 3,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "ursa",
    "name": "Ursa",
    "numericId": 70,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "alchemist",
    "name": "Alchemist",
    "numericId": 73,
    "changeCount": 3,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "treant-protector",
    "name": "Treant Protector",
    "numericId": 83,
    "changeCount": 3,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "rubick",
    "name": "Rubick",
    "numericId": 86,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "visage",
    "name": "Visage",
    "numericId": 92,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": [
      "agility",
      "damage"
    ]
  },
  {
    "id": "troll-warlord",
    "name": "Troll Warlord",
    "numericId": 95,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": [
      "health_regen"
    ]
  },
  {
    "id": "magnus",
    "name": "Magnus",
    "numericId": 97,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": [
      "strength",
      "damage"
    ]
  },
  {
    "id": "oracle",
    "name": "Oracle",
    "numericId": 111,
    "changeCount": 3,
    "abilitiesChanged": 3,
    "icons": []
  },
  {
    "id": "winter-wyvern",
    "name": "Winter Wyvern",
    "numericId": 112,
    "changeCount": 3,
    "abilitiesChanged": 2,
    "icons": []
  },
  {
    "id": "arc-warden",
    "name": "Arc Warden",
    "numericId": 113,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "dark-willow",
    "name": "Dark Willow",
    "numericId": 119,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": [
      "strength",
      "health_regen"
    ]
  },
  {
    "id": "pangolier",
    "name": "Pangolier",
    "numericId": 120,
    "changeCount": 3,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "viper",
    "name": "Viper",
    "numericId": 47,
    "changeCount": 2,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "omniknight",
    "name": "Omniknight",
    "numericId": 57,
    "changeCount": 2,
    "abilitiesChanged": 1,
    "icons": []
  },
  {
    "id": "huskar",
    "name": "Huskar",
    "numericId": 59,
    "changeCount": 2,
    "abilitiesChanged": 0,
    "icons": [
      "agility",
      "armor"
    ]
  },
  {
    "id": "lone-druid",
    "name": "Lone Druid",
    "numericId": 80,
    "changeCount": 2,
    "abilitiesChanged": 1,
    "icons": [
      "strength"
    ]
  }
];

export const HERO_PATCH_CHANGES_BY_ID: Record<string, HeroPatchChange> = Object.fromEntries(
  HERO_PATCH_CHANGES.map((h) => [h.id, h]),
);
