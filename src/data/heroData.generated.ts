// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-08-31
// Fuente: https://api.opendota.com (heroStats, matchups, itemPopularity).

export type Bracket =
  | "herald" | "guardian" | "crusader" | "archon" | "legend" | "ancient" | "divine";

export type HeroData = {
  id: string;
  numericId: number;
  name: string;
  shortName: string;
  primaryAttr: "str" | "agi" | "int" | "all";
  attackType: "Melee" | "Ranged";
  roles: string[];
  /** Winrate global 0-1 (todos los brackets pub). */
  overallWin: number;
  /** Winrate 0-1 por bracket. */
  winByBracket: Record<Bracket, number>;
  /** Partidas (picks) por bracket: señal de popularidad/meta. */
  pickByBracket: Record<Bracket, number>;
  /** Héroes a los que este héroe le gana (winrate real >= 0.52). */
  counters: string[];
  /** Héroes que le ganan a este héroe (winrate real <= 0.48). */
  weakAgainst: string[];
  /** Objetos de inicio reales más comprados. */
  startItems: string[];
  /** Objetos de mid game reales más comprados (primer core). */
  coreItems: string[];
};

export const HERO_DATA: readonly HeroData[] = [
  {
    "id": "abaddon",
    "numericId": 102,
    "name": "Abaddon",
    "shortName": "abaddon",
    "primaryAttr": "all",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Carry",
      "Durable"
    ],
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.51,
      "crusader": 0.511,
      "archon": 0.521,
      "legend": 0.515,
      "ancient": 0.509,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 5063,
      "guardian": 14561,
      "crusader": 22726,
      "archon": 28984,
      "legend": 27695,
      "ancient": 17485,
      "divine": 11106
    },
    "counters": [
      "legion-commander",
      "troll-warlord",
      "terrorblade",
      "lion",
      "sand-king",
      "clockwerk"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "underlord",
      "wraith-king",
      "marci",
      "shadow-demon",
      "sniper"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Quelling Blade",
      "Circlet",
      "Magic Wand"
    ],
    "coreItems": [
      "Talisman of Evasion",
      "Sacred Relic",
      "Radiance",
      "Diadem",
      "Blade of Alacrity"
    ]
  },
  {
    "id": "alchemist",
    "numericId": 73,
    "name": "Alchemist",
    "shortName": "alchemist",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Support",
      "Durable",
      "Disabler",
      "Initiator",
      "Nuker"
    ],
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.483,
      "crusader": 0.477,
      "archon": 0.468,
      "legend": 0.469,
      "ancient": 0.46,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 4753,
      "guardian": 15474,
      "crusader": 24651,
      "archon": 31018,
      "legend": 27538,
      "ancient": 16696,
      "divine": 9945
    },
    "counters": [
      "ring-master",
      "lifestealer",
      "undying",
      "void-spirit",
      "sand-king",
      "ursa"
    ],
    "weakAgainst": [
      "luna",
      "storm-spirit",
      "warlock",
      "puck",
      "monkey-king",
      "doom"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Quelling Blade",
      "Tango",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Ogre Axe",
      "Radiance",
      "Talisman of Evasion",
      "Sacred Relic",
      "Blink Dagger"
    ]
  },
  {
    "id": "ancient-apparition",
    "numericId": 68,
    "name": "Ancient Apparition",
    "shortName": "ancient_apparition",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker"
    ],
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.525,
      "crusader": 0.522,
      "archon": 0.522,
      "legend": 0.518,
      "ancient": 0.513,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 8058,
      "guardian": 28148,
      "crusader": 47345,
      "archon": 63127,
      "legend": 60101,
      "ancient": 35551,
      "divine": 20606
    },
    "counters": [
      "mars",
      "disruptor",
      "pugna",
      "tiny",
      "hoodwink",
      "dark-willow"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "underlord",
      "clinkz",
      "tusk",
      "viper",
      "snapfire"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Sentry Ward",
      "Observer and Sentry Wards",
      "Faerie Fire"
    ],
    "coreItems": [
      "Arcane Boots",
      "Staff of Wizardry",
      "Aghanim's Shard",
      "Vitality Booster",
      "Glimmer Cape"
    ]
  },
  {
    "id": "anti-mage",
    "numericId": 1,
    "name": "Anti-Mage",
    "shortName": "antimage",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Nuker"
    ],
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.502,
      "crusader": 0.501,
      "archon": 0.502,
      "legend": 0.501,
      "ancient": 0.498,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 16592,
      "guardian": 53694,
      "crusader": 84488,
      "archon": 100364,
      "legend": 85004,
      "ancient": 46540,
      "divine": 25149
    },
    "counters": [
      "lich",
      "dragon-knight",
      "warlock",
      "mars",
      "disruptor",
      "storm-spirit"
    ],
    "weakAgainst": [
      "timbersaw",
      "ember-spirit",
      "jakiro",
      "ogre-magi",
      "abaddon",
      "shadow-fiend"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Broadsword",
      "Blade of Alacrity",
      "Yasha",
      "Diadem",
      "Battle Fury"
    ]
  },
  {
    "id": "arc-warden",
    "numericId": 113,
    "name": "Arc Warden",
    "shortName": "arc_warden",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape",
      "Nuker"
    ],
    "overallWin": 0.527,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.513,
      "crusader": 0.519,
      "archon": 0.528,
      "legend": 0.536,
      "ancient": 0.534,
      "divine": 0.54
    },
    "pickByBracket": {
      "herald": 5590,
      "guardian": 18418,
      "crusader": 30667,
      "archon": 37509,
      "legend": 34351,
      "ancient": 20529,
      "divine": 15066
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Observer Ward",
      "Faerie Fire",
      "Tango",
      "Gloves of Haste"
    ],
    "coreItems": [
      "Maelstrom",
      "Hyperstone",
      "Mjollnir",
      "Mithril Hammer",
      "Blade of Alacrity"
    ]
  },
  {
    "id": "axe",
    "numericId": 2,
    "name": "Axe",
    "shortName": "axe",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Durable",
      "Disabler",
      "Carry"
    ],
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.521,
      "crusader": 0.514,
      "archon": 0.508,
      "legend": 0.5,
      "ancient": 0.49,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 21561,
      "guardian": 76056,
      "crusader": 129166,
      "archon": 171311,
      "legend": 167512,
      "ancient": 106693,
      "divine": 72169
    },
    "counters": [
      "morphling",
      "winter-wyvern",
      "death-prophet",
      "troll-warlord",
      "terrorblade",
      "faceless-void"
    ],
    "weakAgainst": [
      "bane",
      "monkey-king",
      "chen",
      "ember-spirit",
      "abaddon",
      "treant-protector"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Ring of Protection",
      "Tango",
      "Faerie Fire",
      "Magic Stick"
    ],
    "coreItems": [
      "Blink Dagger",
      "Blade Mail",
      "Ogre Axe",
      "Broadsword",
      "Mithril Hammer"
    ]
  },
  {
    "id": "bane",
    "numericId": 3,
    "name": "Bane",
    "shortName": "bane",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker",
      "Durable"
    ],
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.477,
      "crusader": 0.489,
      "archon": 0.496,
      "legend": 0.495,
      "ancient": 0.511,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 5617,
      "guardian": 18074,
      "crusader": 29522,
      "archon": 38164,
      "legend": 36556,
      "ancient": 25568,
      "divine": 23764
    },
    "counters": [
      "axe",
      "timbersaw",
      "templar-assassin",
      "earthshaker",
      "puck",
      "tiny"
    ],
    "weakAgainst": [
      "centaur-warrunner",
      "lich",
      "marci",
      "mars",
      "skywrath-mage",
      "treant-protector"
    ],
    "startItems": [
      "Iron Branch",
      "Observer and Sentry Wards",
      "Tango",
      "Blood Grenade",
      "Faerie Fire",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Aether Lens",
      "Arcane Boots",
      "Ogre Axe",
      "Point Booster",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "batrider",
    "numericId": 65,
    "name": "Batrider",
    "shortName": "batrider",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Initiator",
      "Disabler",
      "Escape"
    ],
    "overallWin": 0.437,
    "winByBracket": {
      "herald": 0.424,
      "guardian": 0.431,
      "crusader": 0.424,
      "archon": 0.434,
      "legend": 0.432,
      "ancient": 0.44,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 1632,
      "guardian": 4446,
      "crusader": 7111,
      "archon": 8459,
      "legend": 7739,
      "ancient": 5055,
      "divine": 4631
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
  },
  {
    "id": "beastmaster",
    "numericId": 38,
    "name": "Beastmaster",
    "shortName": "beastmaster",
    "primaryAttr": "all",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Durable",
      "Nuker"
    ],
    "overallWin": 0.448,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.448,
      "crusader": 0.445,
      "archon": 0.442,
      "legend": 0.443,
      "ancient": 0.449,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 3714,
      "guardian": 11108,
      "crusader": 17422,
      "archon": 20137,
      "legend": 17698,
      "ancient": 10760,
      "divine": 9071
    },
    "counters": [
      "lycan",
      "vengeful-spirit",
      "shadow-shaman",
      "zeus",
      "necrophos",
      "clockwerk"
    ],
    "weakAgainst": [
      "grimstroke",
      "dazzle",
      "batrider",
      "juggernaut",
      "pangolier",
      "slark"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Faerie Fire",
      "Sage's Mask",
      "Circlet"
    ],
    "coreItems": [
      "Ultimate Orb",
      "Helm of the Overlord",
      "Blink Dagger",
      "Ogre Axe",
      "Mithril Hammer"
    ]
  },
  {
    "id": "bloodseeker",
    "numericId": 4,
    "name": "Bloodseeker",
    "shortName": "bloodseeker",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Disabler",
      "Nuker",
      "Initiator"
    ],
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.51,
      "crusader": 0.517,
      "archon": 0.512,
      "legend": 0.519,
      "ancient": 0.531,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 10785,
      "guardian": 25305,
      "crusader": 29313,
      "archon": 28430,
      "legend": 22447,
      "ancient": 12619,
      "divine": 6929
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Tango",
      "Magic Stick",
      "Circlet",
      "Faerie Fire"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Ogre Axe",
      "Maelstrom",
      "Hyperstone",
      "Mjollnir"
    ]
  },
  {
    "id": "bounty-hunter",
    "numericId": 62,
    "name": "Bounty Hunter",
    "shortName": "bounty_hunter",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Escape",
      "Nuker"
    ],
    "overallWin": 0.538,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.514,
      "crusader": 0.518,
      "archon": 0.534,
      "legend": 0.542,
      "ancient": 0.552,
      "divine": 0.56
    },
    "pickByBracket": {
      "herald": 9500,
      "guardian": 32628,
      "crusader": 56019,
      "archon": 77620,
      "legend": 84202,
      "ancient": 63327,
      "divine": 63067
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
  },
  {
    "id": "brewmaster",
    "numericId": 78,
    "name": "Brewmaster",
    "shortName": "brewmaster",
    "primaryAttr": "all",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Initiator",
      "Durable",
      "Disabler",
      "Nuker"
    ],
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.482,
      "crusader": 0.493,
      "archon": 0.512,
      "legend": 0.51,
      "ancient": 0.519,
      "divine": 0.532
    },
    "pickByBracket": {
      "herald": 1750,
      "guardian": 5195,
      "crusader": 8442,
      "archon": 11330,
      "legend": 11594,
      "ancient": 9605,
      "divine": 9682
    },
    "counters": [
      "centaur-warrunner",
      "void-spirit",
      "warlock",
      "slardar",
      "tidehunter",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "bristleback",
      "rubick",
      "treant-protector",
      "invoker",
      "puck",
      "beastmaster"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Gauntlets of Strength",
      "Magic Stick",
      "Quelling Blade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Staff of Wizardry",
      "Blade of Alacrity",
      "Point Booster",
      "Aghanim's Scepter"
    ]
  },
  {
    "id": "bristleback",
    "numericId": 99,
    "name": "Bristleback",
    "shortName": "bristleback",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable",
      "Initiator",
      "Nuker"
    ],
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.537,
      "guardian": 0.509,
      "crusader": 0.494,
      "archon": 0.479,
      "legend": 0.47,
      "ancient": 0.464,
      "divine": 0.459
    },
    "pickByBracket": {
      "herald": 16861,
      "guardian": 48365,
      "crusader": 61785,
      "archon": 60364,
      "legend": 43300,
      "ancient": 20923,
      "divine": 10790
    },
    "counters": [
      "brewmaster",
      "templar-assassin",
      "techies",
      "sand-king",
      "razor",
      "dragon-knight"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "terrorblade",
      "kunkka",
      "batrider",
      "viper",
      "chen"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Quelling Blade"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Ogre Axe",
      "Platemail",
      "Blade of Alacrity",
      "Sange"
    ]
  },
  {
    "id": "broodmother",
    "numericId": 61,
    "name": "Broodmother",
    "shortName": "broodmother",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Pusher",
      "Escape",
      "Nuker"
    ],
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.495,
      "crusader": 0.494,
      "archon": 0.497,
      "legend": 0.503,
      "ancient": 0.517,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 4702,
      "guardian": 12084,
      "crusader": 15704,
      "archon": 15817,
      "legend": 12239,
      "ancient": 6677,
      "divine": 4710
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
  },
  {
    "id": "centaur-warrunner",
    "numericId": 96,
    "name": "Centaur Warrunner",
    "shortName": "centaur",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Durable",
      "Initiator",
      "Disabler",
      "Nuker",
      "Escape"
    ],
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.517,
      "crusader": 0.51,
      "archon": 0.509,
      "legend": 0.501,
      "ancient": 0.5,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 7333,
      "guardian": 30859,
      "crusader": 59503,
      "archon": 89469,
      "legend": 96299,
      "ancient": 64969,
      "divine": 46260
    },
    "counters": [
      "medusa",
      "terrorblade",
      "weaver",
      "troll-warlord",
      "faceless-void",
      "puck"
    ],
    "weakAgainst": [
      "treant-protector",
      "bounty-hunter",
      "brewmaster",
      "marci",
      "timbersaw",
      "grimstroke"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Ring of Protection",
      "Tango",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ring of Tarrasque",
      "Reaver",
      "Heart of Tarrasque",
      "Platemail"
    ]
  },
  {
    "id": "chaos-knight",
    "numericId": 81,
    "name": "Chaos Knight",
    "shortName": "chaos_knight",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Disabler",
      "Durable",
      "Pusher",
      "Initiator"
    ],
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.537,
      "guardian": 0.521,
      "crusader": 0.516,
      "archon": 0.513,
      "legend": 0.512,
      "ancient": 0.517,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 8699,
      "guardian": 26883,
      "crusader": 37401,
      "archon": 39973,
      "legend": 31373,
      "ancient": 17789,
      "divine": 10508
    },
    "counters": [
      "templar-assassin",
      "dragon-knight",
      "tidehunter",
      "ursa",
      "pudge",
      "tiny"
    ],
    "weakAgainst": [
      "jakiro",
      "mars",
      "windranger",
      "invoker",
      "abaddon",
      "shadow-shaman"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Gauntlets of Strength",
      "Magic Stick",
      "Circlet"
    ],
    "coreItems": [
      "Blitz Knuckles",
      "Armlet of Mordiggian",
      "Oblivion Staff",
      "Claymore",
      "Ogre Axe"
    ]
  },
  {
    "id": "chen",
    "numericId": 66,
    "name": "Chen",
    "shortName": "chen",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Pusher"
    ],
    "overallWin": 0.45,
    "winByBracket": {
      "herald": 0.404,
      "guardian": 0.441,
      "crusader": 0.433,
      "archon": 0.436,
      "legend": 0.451,
      "ancient": 0.477,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 723,
      "guardian": 2069,
      "crusader": 3161,
      "archon": 3553,
      "legend": 3098,
      "ancient": 2117,
      "divine": 1825
    },
    "counters": [
      "ring-master",
      "storm-spirit",
      "ursa",
      "axe",
      "bristleback",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "abaddon"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Sentry Ward",
      "Smoke of Deceit",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Arcane Boots",
      "Mekansm",
      "Drum of Endurance",
      "Guardian Greaves",
      "Pavise"
    ]
  },
  {
    "id": "clinkz",
    "numericId": 56,
    "name": "Clinkz",
    "shortName": "clinkz",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape",
      "Pusher"
    ],
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.486,
      "crusader": 0.491,
      "archon": 0.499,
      "legend": 0.498,
      "ancient": 0.506,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 11167,
      "guardian": 29199,
      "crusader": 38164,
      "archon": 41902,
      "legend": 37107,
      "ancient": 23778,
      "divine": 18205
    },
    "counters": [
      "ancient-apparition",
      "skywrath-mage",
      "clockwerk",
      "snapfire",
      "dragon-knight",
      "jakiro"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "pudge",
      "templar-assassin",
      "slardar",
      "razor",
      "luna"
    ],
    "startItems": [
      "Faerie Fire",
      "Iron Branch",
      "Magic Wand",
      "Tango",
      "Magic Stick",
      "Circlet"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Blade of Alacrity",
      "Desolator",
      "Aghanim's Shard",
      "Dragon Lance"
    ]
  },
  {
    "id": "clockwerk",
    "numericId": 51,
    "name": "Clockwerk",
    "shortName": "rattletrap",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Durable",
      "Nuker"
    ],
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.484,
      "crusader": 0.478,
      "archon": 0.478,
      "legend": 0.485,
      "ancient": 0.489,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 3382,
      "guardian": 12579,
      "crusader": 23318,
      "archon": 34136,
      "legend": 38846,
      "ancient": 30527,
      "divine": 28796
    },
    "counters": [
      "tidehunter",
      "luna",
      "silencer",
      "dark-willow",
      "weaver",
      "pangolier"
    ],
    "weakAgainst": [
      "venomancer",
      "clinkz",
      "leshrac",
      "abaddon",
      "beastmaster",
      "monkey-king"
    ],
    "startItems": [
      "Tango",
      "Iron Branch",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Boots of Speed",
      "Sentry Ward"
    ],
    "coreItems": [
      "Essence Distiller",
      "Staff of Wizardry",
      "Blink Dagger",
      "Force Staff",
      "Pavise"
    ]
  },
  {
    "id": "crystal-maiden",
    "numericId": 5,
    "name": "Crystal Maiden",
    "shortName": "crystal_maiden",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker"
    ],
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.546,
      "guardian": 0.532,
      "crusader": 0.523,
      "archon": 0.517,
      "legend": 0.514,
      "ancient": 0.506,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 21254,
      "guardian": 68167,
      "crusader": 102538,
      "archon": 125191,
      "legend": 115126,
      "ancient": 72882,
      "divine": 47054
    },
    "counters": [
      "slardar",
      "necrophos",
      "underlord",
      "sniper",
      "pugna",
      "legion-commander"
    ],
    "weakAgainst": [
      "razor",
      "kunkka",
      "techies",
      "earthshaker",
      "hoodwink",
      "templar-assassin"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Enchanted Mango",
      "Magic Stick"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Blink Dagger",
      "Staff of Wizardry",
      "Glimmer Cape",
      "Force Staff"
    ]
  },
  {
    "id": "dark-seer",
    "numericId": 55,
    "name": "Dark Seer",
    "shortName": "dark_seer",
    "primaryAttr": "int",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Escape",
      "Disabler"
    ],
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.487,
      "crusader": 0.479,
      "archon": 0.481,
      "legend": 0.49,
      "ancient": 0.494,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 4860,
      "guardian": 17901,
      "crusader": 32563,
      "archon": 46041,
      "legend": 50213,
      "ancient": 37920,
      "divine": 39740
    },
    "counters": [
      "terrorblade",
      "disruptor",
      "puck",
      "queen-of-pain",
      "slardar",
      "ring-master"
    ],
    "weakAgainst": [
      "phoenix",
      "ember-spirit",
      "tiny",
      "lion",
      "storm-spirit",
      "centaur-warrunner"
    ],
    "startItems": [],
    "coreItems": []
  },
  {
    "id": "dark-willow",
    "numericId": 119,
    "name": "Dark Willow",
    "shortName": "dark_willow",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Escape"
    ],
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.471,
      "crusader": 0.476,
      "archon": 0.479,
      "legend": 0.484,
      "ancient": 0.49,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 8789,
      "guardian": 28949,
      "crusader": 47790,
      "archon": 65441,
      "legend": 70251,
      "ancient": 52244,
      "divine": 46503
    },
    "counters": [
      "weaver",
      "witch-doctor",
      "luna",
      "drow-ranger",
      "templar-assassin",
      "pangolier"
    ],
    "weakAgainst": [
      "treant-protector",
      "nyx-assassin",
      "dazzle",
      "pugna",
      "ursa",
      "clockwerk"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Essence Distiller",
      "Eul's Scepter of Divinity",
      "Aghanim's Shard",
      "Arcane Boots"
    ]
  },
  {
    "id": "dawnbreaker",
    "numericId": 135,
    "name": "Dawnbreaker",
    "shortName": "dawnbreaker",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable"
    ],
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.511,
      "crusader": 0.518,
      "archon": 0.519,
      "legend": 0.523,
      "ancient": 0.521,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 6868,
      "guardian": 25674,
      "crusader": 47833,
      "archon": 75446,
      "legend": 85547,
      "ancient": 63839,
      "divine": 52509
    },
    "counters": [
      "vengeful-spirit",
      "medusa",
      "monkey-king",
      "sven",
      "lina",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "treant-protector",
      "venomancer",
      "bane",
      "alchemist",
      "kez",
      "morphling"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Magic Stick",
      "Quelling Blade",
      "Circlet"
    ],
    "coreItems": [
      "Ogre Axe",
      "Broadsword",
      "Echo Sabre",
      "Aghanim's Shard",
      "Diadem"
    ]
  },
  {
    "id": "dazzle",
    "numericId": 50,
    "name": "Dazzle",
    "shortName": "dazzle",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.495,
      "crusader": 0.503,
      "archon": 0.511,
      "legend": 0.514,
      "ancient": 0.516,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 6513,
      "guardian": 21902,
      "crusader": 35496,
      "archon": 43261,
      "legend": 37449,
      "ancient": 22622,
      "divine": 15204
    },
    "counters": [
      "skywrath-mage",
      "dark-willow",
      "beastmaster",
      "underlord",
      "ring-master",
      "warlock"
    ],
    "weakAgainst": [
      "shadow-demon",
      "lion",
      "abaddon",
      "ember-spirit",
      "slardar",
      "void-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Magic Stick",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Holy Locket",
      "Mekansm",
      "Glimmer Cape",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "death-prophet",
    "numericId": 43,
    "name": "Death Prophet",
    "shortName": "death_prophet",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Pusher",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.47,
      "crusader": 0.479,
      "archon": 0.481,
      "legend": 0.489,
      "ancient": 0.491,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 7427,
      "guardian": 18655,
      "crusader": 25560,
      "archon": 31000,
      "legend": 28871,
      "ancient": 19017,
      "divine": 14177
    },
    "counters": [
      "shadow-shaman",
      "slardar",
      "ogre-magi",
      "dragon-knight",
      "zeus"
    ],
    "weakAgainst": [
      "sniper",
      "spirit-breaker",
      "pudge",
      "snapfire",
      "hoodwink",
      "axe"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Circlet",
      "Observer Ward",
      "Magic Stick"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Vitality Booster",
      "Mithril Hammer",
      "Eul's Scepter of Divinity"
    ]
  },
  {
    "id": "disruptor",
    "numericId": 87,
    "name": "Disruptor",
    "shortName": "disruptor",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker",
      "Initiator"
    ],
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.49,
      "crusader": 0.498,
      "archon": 0.497,
      "legend": 0.501,
      "ancient": 0.507,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 5716,
      "guardian": 23060,
      "crusader": 44261,
      "archon": 68851,
      "legend": 76349,
      "ancient": 55375,
      "divine": 43665
    },
    "counters": [
      "phantom-assassin",
      "chaos-knight",
      "phantom-lancer",
      "muerta",
      "bristleback",
      "lina"
    ],
    "weakAgainst": [
      "broodmother",
      "kez",
      "io",
      "enigma",
      "dark-seer",
      "treant-protector"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Faerie Fire",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Blink Dagger",
      "Staff of Wizardry",
      "Point Booster",
      "Glimmer Cape"
    ]
  },
  {
    "id": "doom",
    "numericId": 69,
    "name": "Doom",
    "shortName": "doom_bringer",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Disabler",
      "Initiator",
      "Durable",
      "Nuker"
    ],
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.462,
      "crusader": 0.46,
      "archon": 0.464,
      "legend": 0.468,
      "ancient": 0.477,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 6068,
      "guardian": 22116,
      "crusader": 40376,
      "archon": 61313,
      "legend": 67435,
      "ancient": 50346,
      "divine": 44386
    },
    "counters": [
      "lifestealer",
      "ring-master",
      "winter-wyvern",
      "lion",
      "sand-king",
      "razor"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "abaddon",
      "treant-protector",
      "shadow-demon",
      "largo",
      "kez"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Circlet",
      "Quelling Blade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blink Dagger",
      "Mithril Hammer",
      "Black King Bar",
      "Aghanim's Shard"
    ]
  },
  {
    "id": "dragon-knight",
    "numericId": 49,
    "name": "Dragon Knight",
    "shortName": "dragon_knight",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Pusher",
      "Durable",
      "Disabler",
      "Initiator",
      "Nuker"
    ],
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.515,
      "crusader": 0.513,
      "archon": 0.514,
      "legend": 0.512,
      "ancient": 0.519,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 7484,
      "guardian": 25282,
      "crusader": 41298,
      "archon": 52569,
      "legend": 50750,
      "ancient": 33608,
      "divine": 25503
    },
    "counters": [
      "drow-ranger",
      "morphling",
      "troll-warlord",
      "magnus",
      "pangolier",
      "tusk"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "venomancer",
      "keeper-of-the-light",
      "phoenix",
      "monkey-king",
      "terrorblade"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Quelling Blade",
      "Tango",
      "Circlet",
      "Observer Ward"
    ],
    "coreItems": [
      "Blink Dagger",
      "Mithril Hammer",
      "Claymore",
      "Ogre Axe",
      "Mask of Madness"
    ]
  },
  {
    "id": "drow-ranger",
    "numericId": 6,
    "name": "Drow Ranger",
    "shortName": "drow_ranger",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Disabler",
      "Pusher"
    ],
    "overallWin": 0.464,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.473,
      "crusader": 0.468,
      "archon": 0.463,
      "legend": 0.461,
      "ancient": 0.457,
      "divine": 0.453
    },
    "pickByBracket": {
      "herald": 22051,
      "guardian": 66052,
      "crusader": 100374,
      "archon": 122532,
      "legend": 112896,
      "ancient": 69074,
      "divine": 44056
    },
    "counters": [
      "underlord",
      "pudge",
      "disruptor",
      "spirit-breaker",
      "bristleback",
      "phoenix"
    ],
    "weakAgainst": [
      "treant-protector",
      "dragon-knight",
      "largo",
      "slardar",
      "shadow-demon",
      "queen-of-pain"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Magic Wand",
      "Tango",
      "Circlet",
      "Magic Stick"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Yasha",
      "Dragon Lance",
      "Diadem"
    ]
  },
  {
    "id": "earth-spirit",
    "numericId": 107,
    "name": "Earth Spirit",
    "shortName": "earth_spirit",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Nuker",
      "Escape",
      "Disabler",
      "Initiator",
      "Durable"
    ],
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.461,
      "guardian": 0.477,
      "crusader": 0.483,
      "archon": 0.485,
      "legend": 0.495,
      "ancient": 0.501,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 4976,
      "guardian": 20618,
      "crusader": 42894,
      "archon": 69341,
      "legend": 80380,
      "ancient": 62628,
      "divine": 56909
    },
    "counters": [
      "rubick",
      "timbersaw",
      "lion",
      "pudge",
      "slardar",
      "hoodwink"
    ],
    "weakAgainst": [
      "ember-spirit",
      "necrophos",
      "doom",
      "ring-master",
      "storm-spirit",
      "luna"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Circlet",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Spirit Vessel",
      "Ogre Axe",
      "Mithril Hammer",
      "Staff of Wizardry",
      "Diadem"
    ]
  },
  {
    "id": "earthshaker",
    "numericId": 7,
    "name": "Earthshaker",
    "shortName": "earthshaker",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Initiator",
      "Disabler",
      "Nuker"
    ],
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.497,
      "crusader": 0.5,
      "archon": 0.505,
      "legend": 0.507,
      "ancient": 0.511,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 18829,
      "guardian": 59914,
      "crusader": 95860,
      "archon": 126851,
      "legend": 126501,
      "ancient": 83408,
      "divine": 56584
    },
    "counters": [
      "sven",
      "wraith-king",
      "axe",
      "sniper",
      "invoker",
      "undying"
    ],
    "weakAgainst": [
      "monkey-king",
      "bane",
      "enchantress",
      "void-spirit",
      "dawnbreaker",
      "luna"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Blink Dagger",
      "Staff of Wizardry",
      "Aghanim's Shard",
      "Ogre Axe",
      "Blade of Alacrity"
    ]
  },
  {
    "id": "elder-titan",
    "numericId": 103,
    "name": "Elder Titan",
    "shortName": "elder_titan",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Nuker",
      "Durable"
    ],
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.481,
      "crusader": 0.5,
      "archon": 0.5,
      "legend": 0.528,
      "ancient": 0.537,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 1470,
      "guardian": 4552,
      "crusader": 7074,
      "archon": 8460,
      "legend": 8185,
      "ancient": 5598,
      "divine": 5705
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Sentry Ward",
      "Wind Lace"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Drum of Endurance",
      "Pavise",
      "Point Booster"
    ]
  },
  {
    "id": "ember-spirit",
    "numericId": 106,
    "name": "Ember Spirit",
    "shortName": "ember_spirit",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Nuker",
      "Disabler",
      "Initiator"
    ],
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.451,
      "guardian": 0.47,
      "crusader": 0.479,
      "archon": 0.487,
      "legend": 0.491,
      "ancient": 0.496,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 7822,
      "guardian": 28614,
      "crusader": 53678,
      "archon": 81249,
      "legend": 92060,
      "ancient": 69684,
      "divine": 64292
    },
    "counters": [
      "witch-doctor",
      "sniper",
      "dark-seer",
      "void-spirit",
      "venomancer",
      "axe"
    ],
    "weakAgainst": [
      "io",
      "treant-protector",
      "clinkz",
      "bane",
      "lifestealer",
      "alchemist"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Quelling Blade",
      "Magic Stick"
    ],
    "coreItems": [
      "Spirit Vessel",
      "Ogre Axe",
      "Diadem",
      "Staff of Wizardry",
      "Mithril Hammer"
    ]
  },
  {
    "id": "enchantress",
    "numericId": 58,
    "name": "Enchantress",
    "shortName": "enchantress",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Pusher",
      "Durable",
      "Disabler"
    ],
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.484,
      "crusader": 0.482,
      "archon": 0.482,
      "legend": 0.475,
      "ancient": 0.473,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 6750,
      "guardian": 17342,
      "crusader": 21620,
      "archon": 24088,
      "legend": 21928,
      "ancient": 15003,
      "divine": 13802
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
  },
  {
    "id": "enigma",
    "numericId": 33,
    "name": "Enigma",
    "shortName": "enigma",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Disabler",
      "Initiator",
      "Pusher"
    ],
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.491,
      "crusader": 0.494,
      "archon": 0.5,
      "legend": 0.517,
      "ancient": 0.533,
      "divine": 0.562
    },
    "pickByBracket": {
      "herald": 5841,
      "guardian": 18489,
      "crusader": 29997,
      "archon": 37101,
      "legend": 33140,
      "ancient": 21953,
      "divine": 20588
    },
    "counters": [
      "shadow-fiend",
      "windranger",
      "disruptor",
      "mars"
    ],
    "weakAgainst": [
      "hoodwink",
      "tusk",
      "snapfire"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Magic Stick",
      "Circlet",
      "Wind Lace"
    ],
    "coreItems": [
      "Blink Dagger",
      "Aghanim's Shard",
      "Ogre Axe",
      "Mithril Hammer",
      "Black King Bar"
    ]
  },
  {
    "id": "faceless-void",
    "numericId": 41,
    "name": "Faceless Void",
    "shortName": "faceless_void",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Initiator",
      "Disabler",
      "Escape",
      "Durable"
    ],
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.485,
      "crusader": 0.484,
      "archon": 0.486,
      "legend": 0.49,
      "ancient": 0.495,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 11922,
      "guardian": 39998,
      "crusader": 63037,
      "archon": 79630,
      "legend": 72994,
      "ancient": 44257,
      "divine": 27719
    },
    "counters": [
      "dragon-knight",
      "dawnbreaker",
      "primal-beast",
      "ursa",
      "storm-spirit",
      "razor"
    ],
    "weakAgainst": [
      "tidehunter",
      "skywrath-mage",
      "muerta",
      "axe",
      "keeper-of-the-light",
      "centaur-warrunner"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Tango",
      "Magic Stick",
      "Circlet",
      "Faerie Fire"
    ],
    "coreItems": [
      "Broadsword",
      "Blade of Alacrity",
      "Battle Fury",
      "Yasha",
      "Diadem"
    ]
  },
  {
    "id": "grimstroke",
    "numericId": 121,
    "name": "Grimstroke",
    "shortName": "grimstroke",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Escape"
    ],
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.509,
      "crusader": 0.517,
      "archon": 0.518,
      "legend": 0.52,
      "ancient": 0.515,
      "divine": 0.526
    },
    "pickByBracket": {
      "herald": 5037,
      "guardian": 18857,
      "crusader": 34693,
      "archon": 50789,
      "legend": 53678,
      "ancient": 37720,
      "divine": 29155
    },
    "counters": [
      "muerta",
      "beastmaster",
      "templar-assassin",
      "ring-master",
      "tidehunter",
      "shadow-demon"
    ],
    "weakAgainst": [
      "windranger",
      "batrider",
      "slardar",
      "lion",
      "sniper",
      "snapfire"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Blink Dagger",
      "Staff of Wizardry",
      "Ogre Axe",
      "Point Booster"
    ]
  },
  {
    "id": "gyrocopter",
    "numericId": 72,
    "name": "Gyrocopter",
    "shortName": "gyrocopter",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.457,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.441,
      "crusader": 0.461,
      "archon": 0.459,
      "legend": 0.457,
      "ancient": 0.463,
      "divine": 0.452
    },
    "pickByBracket": {
      "herald": 3328,
      "guardian": 10111,
      "crusader": 16451,
      "archon": 23154,
      "legend": 22796,
      "ancient": 14991,
      "divine": 9695
    },
    "counters": [
      "templar-assassin",
      "sven",
      "earthshaker",
      "luna",
      "lion",
      "viper"
    ],
    "weakAgainst": [
      "treant-protector",
      "razor",
      "ember-spirit",
      "keeper-of-the-light",
      "pudge",
      "shadow-demon"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Magic Wand",
      "Magic Stick",
      "Quelling Blade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blade of Alacrity",
      "Claymore",
      "Staff of Wizardry",
      "Crystalys"
    ]
  },
  {
    "id": "hoodwink",
    "numericId": 123,
    "name": "Hoodwink",
    "shortName": "hoodwink",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Escape",
      "Disabler"
    ],
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.471,
      "crusader": 0.474,
      "archon": 0.476,
      "legend": 0.477,
      "ancient": 0.476,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 16200,
      "guardian": 54764,
      "crusader": 93714,
      "archon": 128453,
      "legend": 129547,
      "ancient": 89793,
      "divine": 73045
    },
    "counters": [
      "phantom-lancer",
      "death-prophet",
      "shadow-shaman",
      "huskar",
      "underlord",
      "legion-commander"
    ],
    "weakAgainst": [
      "naga-siren",
      "keeper-of-the-light",
      "lycan",
      "kunkka",
      "broodmother",
      "ember-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Faerie Fire",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Essence Distiller",
      "Staff of Wizardry",
      "Blink Dagger",
      "Vitality Booster"
    ]
  },
  {
    "id": "huskar",
    "numericId": 59,
    "name": "Huskar",
    "shortName": "huskar",
    "primaryAttr": "str",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Durable",
      "Initiator"
    ],
    "overallWin": 0.449,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.447,
      "crusader": 0.44,
      "archon": 0.446,
      "legend": 0.455,
      "ancient": 0.45,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 10545,
      "guardian": 24045,
      "crusader": 29585,
      "archon": 31893,
      "legend": 27681,
      "ancient": 17477,
      "divine": 13341
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
  },
  {
    "id": "invoker",
    "numericId": 74,
    "name": "Invoker",
    "shortName": "invoker",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Disabler",
      "Escape",
      "Pusher"
    ],
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.493,
      "crusader": 0.494,
      "archon": 0.498,
      "legend": 0.504,
      "ancient": 0.512,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 17813,
      "guardian": 65263,
      "crusader": 121415,
      "archon": 174962,
      "legend": 186038,
      "ancient": 129550,
      "divine": 99195
    },
    "counters": [
      "troll-warlord",
      "chaos-knight",
      "weaver",
      "ring-master",
      "venomancer",
      "grimstroke"
    ],
    "weakAgainst": [
      "treant-protector",
      "tinker",
      "oracle",
      "puck",
      "monkey-king",
      "earthshaker"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Faerie Fire",
      "Observer Ward",
      "Tango",
      "Mantle of Intelligence"
    ],
    "coreItems": [
      "Boots of Travel",
      "Ogre Axe",
      "Aghanim's Shard",
      "Meteor Hammer",
      "Mithril Hammer"
    ]
  },
  {
    "id": "io",
    "numericId": 91,
    "name": "Io",
    "shortName": "wisp",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Escape",
      "Nuker"
    ],
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.485,
      "crusader": 0.481,
      "archon": 0.475,
      "legend": 0.474,
      "ancient": 0.475,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 6387,
      "guardian": 21764,
      "crusader": 37002,
      "archon": 48196,
      "legend": 46690,
      "ancient": 32198,
      "divine": 26882
    },
    "counters": [
      "disruptor",
      "jakiro",
      "ember-spirit",
      "queen-of-pain",
      "snapfire",
      "hoodwink"
    ],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Gauntlets of Strength",
      "Ring of Regen"
    ],
    "coreItems": [
      "Ogre Axe",
      "Mekansm",
      "Mithril Hammer",
      "Blade of Alacrity",
      "Aghanim's Scepter"
    ]
  },
  {
    "id": "jakiro",
    "numericId": 64,
    "name": "Jakiro",
    "shortName": "jakiro",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Pusher",
      "Disabler"
    ],
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.495,
      "crusader": 0.491,
      "archon": 0.486,
      "legend": 0.48,
      "ancient": 0.477,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 11541,
      "guardian": 39224,
      "crusader": 64286,
      "archon": 83474,
      "legend": 76350,
      "ancient": 45060,
      "divine": 25610
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
  },
  {
    "id": "juggernaut",
    "numericId": 8,
    "name": "Juggernaut",
    "shortName": "juggernaut",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Pusher",
      "Escape"
    ],
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.512,
      "crusader": 0.523,
      "archon": 0.526,
      "legend": 0.529,
      "ancient": 0.532,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 22723,
      "guardian": 73144,
      "crusader": 120457,
      "archon": 162650,
      "legend": 159444,
      "ancient": 104091,
      "divine": 65910
    },
    "counters": [
      "zeus",
      "magnus",
      "phoenix",
      "pangolier",
      "techies",
      "beastmaster"
    ],
    "weakAgainst": [
      "sniper",
      "abaddon",
      "timbersaw",
      "kez",
      "snapfire",
      "primal-beast"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Magic Stick",
      "Tango",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Broadsword",
      "Blade of Alacrity",
      "Yasha",
      "Battle Fury",
      "Diadem"
    ]
  },
  {
    "id": "keeper-of-the-light",
    "numericId": 90,
    "name": "Keeper of the Light",
    "shortName": "keeper_of_the_light",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.486,
      "crusader": 0.493,
      "archon": 0.5,
      "legend": 0.509,
      "ancient": 0.516,
      "divine": 0.526
    },
    "pickByBracket": {
      "herald": 8588,
      "guardian": 27058,
      "crusader": 42378,
      "archon": 52931,
      "legend": 50156,
      "ancient": 34225,
      "divine": 32549
    },
    "counters": [
      "warlock",
      "phoenix",
      "queen-of-pain",
      "lina",
      "silencer",
      "kez"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "pudge",
      "slardar",
      "viper",
      "batrider"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Circlet",
      "Blood Grenade",
      "Faerie Fire"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Holy Locket",
      "Force Staff",
      "Point Booster",
      "Glimmer Cape"
    ]
  },
  {
    "id": "kez",
    "numericId": 145,
    "name": "Kez",
    "shortName": "kez",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Disabler"
    ],
    "overallWin": 0.445,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.454,
      "crusader": 0.452,
      "archon": 0.445,
      "legend": 0.439,
      "ancient": 0.435,
      "divine": 0.447
    },
    "pickByBracket": {
      "herald": 6665,
      "guardian": 19918,
      "crusader": 32055,
      "archon": 42935,
      "legend": 44108,
      "ancient": 31199,
      "divine": 26889
    },
    "counters": [
      "lifestealer",
      "disruptor",
      "lich",
      "underlord",
      "tiny",
      "silencer"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "treant-protector",
      "drow-ranger",
      "largo",
      "windranger",
      "razor"
    ],
    "startItems": [
      "Faerie Fire",
      "Iron Branch",
      "Tango",
      "Circlet",
      "Magic Wand",
      "Quelling Blade"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Mage Slayer",
      "Ogre Axe",
      "Blade of Alacrity",
      "Desolator"
    ]
  },
  {
    "id": "kunkka",
    "numericId": 23,
    "name": "Kunkka",
    "shortName": "kunkka",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Support",
      "Disabler",
      "Initiator",
      "Durable",
      "Nuker"
    ],
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.489,
      "crusader": 0.483,
      "archon": 0.496,
      "legend": 0.5,
      "ancient": 0.506,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 5919,
      "guardian": 17265,
      "crusader": 27795,
      "archon": 37549,
      "legend": 38593,
      "ancient": 25435,
      "divine": 16710
    },
    "counters": [
      "bristleback",
      "hoodwink",
      "tiny",
      "warlock",
      "crystal-maiden",
      "pangolier"
    ],
    "weakAgainst": [
      "shadow-shaman",
      "templar-assassin",
      "shadow-demon",
      "underlord",
      "storm-spirit",
      "jakiro"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Circlet",
      "Tango",
      "Quelling Blade",
      "Observer Ward"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blade of Alacrity",
      "Point Booster",
      "Claymore",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "largo",
    "numericId": 155,
    "name": "Largo",
    "shortName": "largo",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Durable",
      "Disabler",
      "Support"
    ],
    "overallWin": 0.479,
    "winByBracket": {
      "herald": 0.437,
      "guardian": 0.461,
      "crusader": 0.47,
      "archon": 0.477,
      "legend": 0.487,
      "ancient": 0.484,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 2080,
      "guardian": 6704,
      "crusader": 11206,
      "archon": 15941,
      "legend": 17470,
      "ancient": 13625,
      "divine": 13587
    },
    "counters": [
      "silencer",
      "queen-of-pain",
      "primal-beast",
      "pangolier",
      "pudge",
      "timbersaw"
    ],
    "weakAgainst": [
      "sniper",
      "treant-protector",
      "shadow-demon",
      "beastmaster",
      "batrider",
      "clinkz"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Faerie Fire",
      "Quelling Blade"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Kaya",
      "Aghanim's Shard",
      "Point Booster"
    ]
  },
  {
    "id": "legion-commander",
    "numericId": 104,
    "name": "Legion Commander",
    "shortName": "legion_commander",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Disabler",
      "Initiator",
      "Durable",
      "Nuker"
    ],
    "overallWin": 0.53,
    "winByBracket": {
      "herald": 0.53,
      "guardian": 0.531,
      "crusader": 0.529,
      "archon": 0.531,
      "legend": 0.531,
      "ancient": 0.531,
      "divine": 0.53
    },
    "pickByBracket": {
      "herald": 16621,
      "guardian": 60759,
      "crusader": 102851,
      "archon": 132522,
      "legend": 122012,
      "ancient": 71577,
      "divine": 40837
    },
    "counters": [
      "luna",
      "bristleback",
      "skywrath-mage",
      "shadow-shaman",
      "dark-willow",
      "ursa"
    ],
    "weakAgainst": [
      "abaddon",
      "hoodwink",
      "vengeful-spirit",
      "lifestealer",
      "sniper",
      "crystal-maiden"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Quelling Blade",
      "Circlet",
      "Magic Stick"
    ],
    "coreItems": [
      "Blink Dagger",
      "Blade Mail",
      "Broadsword",
      "Ogre Axe",
      "Mithril Hammer"
    ]
  },
  {
    "id": "leshrac",
    "numericId": 52,
    "name": "Leshrac",
    "shortName": "leshrac",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Support",
      "Nuker",
      "Pusher",
      "Disabler"
    ],
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.491,
      "crusader": 0.499,
      "archon": 0.501,
      "legend": 0.512,
      "ancient": 0.516,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 3061,
      "guardian": 8601,
      "crusader": 13045,
      "archon": 16091,
      "legend": 15783,
      "ancient": 11020,
      "divine": 9695
    },
    "counters": [
      "primal-beast",
      "silencer",
      "slark",
      "clockwerk",
      "rubick",
      "muerta"
    ],
    "weakAgainst": [
      "dawnbreaker",
      "terrorblade",
      "bane",
      "abaddon",
      "void-spirit",
      "batrider"
    ],
    "startItems": [],
    "coreItems": []
  },
  {
    "id": "lich",
    "numericId": 31,
    "name": "Lich",
    "shortName": "lich",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker"
    ],
    "overallWin": 0.527,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.524,
      "crusader": 0.531,
      "archon": 0.529,
      "legend": 0.529,
      "ancient": 0.527,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 11719,
      "guardian": 38502,
      "crusader": 64634,
      "archon": 89512,
      "legend": 94625,
      "ancient": 64918,
      "divine": 45870
    },
    "counters": [
      "sven",
      "ursa",
      "zeus",
      "ring-master",
      "winter-wyvern",
      "razor"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "treant-protector",
      "kez",
      "sniper",
      "phoenix",
      "anti-mage"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Enchanted Mango",
      "Smoke of Deceit",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Blink Dagger",
      "Glimmer Cape",
      "Staff of Wizardry",
      "Force Staff"
    ]
  },
  {
    "id": "lifestealer",
    "numericId": 54,
    "name": "Lifestealer",
    "shortName": "life_stealer",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable",
      "Escape",
      "Disabler"
    ],
    "overallWin": 0.531,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.519,
      "crusader": 0.529,
      "archon": 0.532,
      "legend": 0.535,
      "ancient": 0.535,
      "divine": 0.532
    },
    "pickByBracket": {
      "herald": 16168,
      "guardian": 61609,
      "crusader": 116342,
      "archon": 168120,
      "legend": 177001,
      "ancient": 120741,
      "divine": 90849
    },
    "counters": [
      "witch-doctor",
      "phantom-assassin",
      "vengeful-spirit",
      "night-stalker",
      "muerta",
      "dark-willow"
    ],
    "weakAgainst": [
      "doom",
      "alchemist",
      "kez",
      "morphling",
      "phoenix",
      "mirana"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Quelling Blade",
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Magic Stick"
    ],
    "coreItems": [
      "Talisman of Evasion",
      "Sacred Relic",
      "Radiance",
      "Blade of Alacrity",
      "Armlet of Mordiggian"
    ]
  },
  {
    "id": "lina",
    "numericId": 25,
    "name": "Lina",
    "shortName": "lina",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Carry",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.486,
      "crusader": 0.497,
      "archon": 0.5,
      "legend": 0.502,
      "ancient": 0.504,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 27135,
      "guardian": 86399,
      "crusader": 144837,
      "archon": 199400,
      "legend": 203580,
      "ancient": 136873,
      "divine": 102478
    },
    "counters": [
      "viper",
      "storm-spirit",
      "grimstroke",
      "warlock",
      "underlord",
      "phoenix"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "pangolier",
      "timbersaw",
      "pudge",
      "monkey-king",
      "dawnbreaker"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Circlet",
      "Magic Wand"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Blade of Alacrity",
      "Ogre Axe",
      "Boots of Travel",
      "Kaya"
    ]
  },
  {
    "id": "lion",
    "numericId": 26,
    "name": "Lion",
    "shortName": "lion",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker",
      "Initiator"
    ],
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.49,
      "crusader": 0.49,
      "archon": 0.491,
      "legend": 0.492,
      "ancient": 0.491,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 29202,
      "guardian": 103327,
      "crusader": 175229,
      "archon": 236351,
      "legend": 232533,
      "ancient": 148089,
      "divine": 96168
    },
    "counters": [
      "grimstroke",
      "sven",
      "troll-warlord",
      "razor",
      "dazzle",
      "tinker"
    ],
    "weakAgainst": [
      "treant-protector",
      "abaddon",
      "earth-spirit",
      "monkey-king",
      "doom",
      "pangolier"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Sentry Ward"
    ],
    "coreItems": [
      "Blink Dagger",
      "Staff of Wizardry",
      "Force Staff",
      "Glimmer Cape",
      "Ghost Scepter"
    ]
  },
  {
    "id": "lone-druid",
    "numericId": 80,
    "name": "Lone Druid",
    "shortName": "lone_druid",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Pusher",
      "Durable"
    ],
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.483,
      "crusader": 0.473,
      "archon": 0.469,
      "legend": 0.469,
      "ancient": 0.47,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 5304,
      "guardian": 20316,
      "crusader": 34018,
      "archon": 43934,
      "legend": 41429,
      "ancient": 26956,
      "divine": 21195
    },
    "counters": [
      "pangolier",
      "underlord",
      "shadow-fiend",
      "windranger",
      "rubick",
      "hoodwink"
    ],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Quelling Blade",
      "Orb of Blight",
      "Tango",
      "Magic Stick"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blade of Alacrity",
      "Hyperstone",
      "Mjollnir",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "luna",
    "numericId": 48,
    "name": "Luna",
    "shortName": "luna",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Pusher"
    ],
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.516,
      "crusader": 0.507,
      "archon": 0.506,
      "legend": 0.503,
      "ancient": 0.501,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 13166,
      "guardian": 42055,
      "crusader": 65696,
      "archon": 85359,
      "legend": 87127,
      "ancient": 62151,
      "divine": 54723
    },
    "counters": [
      "morphling",
      "sand-king",
      "earthshaker",
      "phantom-assassin",
      "sniper",
      "weaver"
    ],
    "weakAgainst": [
      "clockwerk",
      "legion-commander",
      "keeper-of-the-light",
      "monkey-king",
      "bane",
      "lifestealer"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Magic Wand",
      "Circlet",
      "Magic Stick"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Diadem",
      "Manta Style",
      "Yasha",
      "Ogre Axe"
    ]
  },
  {
    "id": "lycan",
    "numericId": 77,
    "name": "Lycan",
    "shortName": "lycan",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Pusher",
      "Durable",
      "Escape"
    ],
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.452,
      "crusader": 0.467,
      "archon": 0.471,
      "legend": 0.476,
      "ancient": 0.503,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 1828,
      "guardian": 5355,
      "crusader": 8437,
      "archon": 10272,
      "legend": 10027,
      "ancient": 6877,
      "divine": 6995
    },
    "counters": [
      "sven",
      "void-spirit",
      "ursa",
      "hoodwink",
      "silencer",
      "rubick"
    ],
    "weakAgainst": [
      "beastmaster",
      "terrorblade",
      "bane",
      "tidehunter",
      "tusk"
    ],
    "startItems": [
      "Iron Branch",
      "Sage's Mask",
      "Tango",
      "Quelling Blade",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Ultimate Orb",
      "Helm of the Overlord",
      "Aghanim's Shard",
      "Hyperstone",
      "Platemail"
    ]
  },
  {
    "id": "magnus",
    "numericId": 97,
    "name": "Magnus",
    "shortName": "magnataur",
    "primaryAttr": "all",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Nuker",
      "Escape"
    ],
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.473,
      "crusader": 0.478,
      "archon": 0.49,
      "legend": 0.495,
      "ancient": 0.499,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 7306,
      "guardian": 30388,
      "crusader": 64295,
      "archon": 101422,
      "legend": 114638,
      "ancient": 81526,
      "divine": 54891
    },
    "counters": [
      "phoenix",
      "pudge",
      "storm-spirit",
      "skywrath-mage",
      "puck",
      "silencer"
    ],
    "weakAgainst": [
      "juggernaut",
      "ember-spirit",
      "rubick",
      "beastmaster",
      "invoker",
      "tusk"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Quelling Blade",
      "Gauntlets of Strength",
      "Faerie Fire"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Echo Sabre",
      "Broadsword",
      "Diadem"
    ]
  },
  {
    "id": "marci",
    "numericId": 136,
    "name": "Marci",
    "shortName": "marci",
    "primaryAttr": "all",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Carry",
      "Initiator",
      "Disabler",
      "Escape"
    ],
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.481,
      "crusader": 0.489,
      "archon": 0.497,
      "legend": 0.508,
      "ancient": 0.506,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 6429,
      "guardian": 17845,
      "crusader": 26180,
      "archon": 31648,
      "legend": 30687,
      "ancient": 21027,
      "divine": 17082
    },
    "counters": [
      "undying",
      "pangolier",
      "ursa",
      "centaur-warrunner",
      "vengeful-spirit",
      "abaddon"
    ],
    "weakAgainst": [
      "phoenix",
      "razor",
      "rubick",
      "ember-spirit",
      "clockwerk",
      "juggernaut"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Sentry Ward",
      "Magic Stick",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Ogre Axe",
      "Phase Boots",
      "Mithril Hammer",
      "Black King Bar",
      "Pavise"
    ]
  },
  {
    "id": "mars",
    "numericId": 129,
    "name": "Mars",
    "shortName": "mars",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Initiator",
      "Disabler",
      "Durable"
    ],
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.465,
      "guardian": 0.476,
      "crusader": 0.469,
      "archon": 0.474,
      "legend": 0.474,
      "ancient": 0.471,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 3567,
      "guardian": 11855,
      "crusader": 22293,
      "archon": 34392,
      "legend": 40016,
      "ancient": 30691,
      "divine": 23944
    },
    "counters": [
      "chaos-knight",
      "medusa",
      "drow-ranger",
      "outworld-devourer",
      "weaver",
      "tinker"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "oracle",
      "ancient-apparition",
      "phoenix",
      "nyx-assassin"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Quelling Blade",
      "Circlet",
      "Magic Stick"
    ],
    "coreItems": [
      "Blink Dagger",
      "Aghanim's Shard",
      "Mithril Hammer",
      "Ogre Axe",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "medusa",
    "numericId": 94,
    "name": "Medusa",
    "shortName": "medusa",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Disabler",
      "Durable"
    ],
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.501,
      "crusader": 0.501,
      "archon": 0.498,
      "legend": 0.499,
      "ancient": 0.499,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 4699,
      "guardian": 14556,
      "crusader": 22468,
      "archon": 27737,
      "legend": 25602,
      "ancient": 14774,
      "divine": 8094
    },
    "counters": [
      "templar-assassin",
      "sand-king",
      "underlord",
      "warlock",
      "beastmaster",
      "faceless-void"
    ],
    "weakAgainst": [
      "shadow-demon",
      "shadow-shaman",
      "ogre-magi",
      "centaur-warrunner",
      "morphling",
      "nyx-assassin"
    ],
    "startItems": [
      "Iron Branch",
      "Magic Stick",
      "Circlet",
      "Enchanted Mango",
      "Magic Wand",
      "Quelling Blade"
    ],
    "coreItems": [
      "Manta Style",
      "Diadem",
      "Claymore",
      "Eaglesong",
      "Yasha"
    ]
  },
  {
    "id": "meepo",
    "numericId": 82,
    "name": "Meepo",
    "shortName": "meepo",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Nuker",
      "Disabler",
      "Initiator",
      "Pusher"
    ],
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.506,
      "crusader": 0.516,
      "archon": 0.52,
      "legend": 0.521,
      "ancient": 0.54,
      "divine": 0.559
    },
    "pickByBracket": {
      "herald": 3415,
      "guardian": 9163,
      "crusader": 12099,
      "archon": 13549,
      "legend": 11303,
      "ancient": 6992,
      "divine": 5577
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Slippers of Agility",
      "Tango",
      "Observer Ward",
      "Quelling Blade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blade of Alacrity",
      "Sange and Yasha",
      "Sange",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "mirana",
    "numericId": 9,
    "name": "Mirana",
    "shortName": "mirana",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Support",
      "Escape",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.521,
      "crusader": 0.524,
      "archon": 0.523,
      "legend": 0.519,
      "ancient": 0.514,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 10800,
      "guardian": 44093,
      "crusader": 84910,
      "archon": 128903,
      "legend": 143434,
      "ancient": 105777,
      "divine": 89779
    },
    "counters": [
      "storm-spirit",
      "underlord",
      "slardar",
      "nature-s-prophet",
      "undying",
      "lifestealer"
    ],
    "weakAgainst": [
      "ember-spirit",
      "centaur-warrunner",
      "luna",
      "tusk"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Essence Distiller",
      "Arcane Boots",
      "Point Booster",
      "Eul's Scepter of Divinity"
    ]
  },
  {
    "id": "monkey-king",
    "numericId": 114,
    "name": "Monkey King",
    "shortName": "monkey_king",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Disabler",
      "Initiator"
    ],
    "overallWin": 0.454,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.446,
      "crusader": 0.448,
      "archon": 0.449,
      "legend": 0.456,
      "ancient": 0.463,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 7722,
      "guardian": 21713,
      "crusader": 31418,
      "archon": 38382,
      "legend": 36539,
      "ancient": 24521,
      "divine": 17723
    },
    "counters": [
      "earthshaker",
      "skywrath-mage",
      "undying",
      "underlord",
      "weaver",
      "axe"
    ],
    "weakAgainst": [
      "treant-protector",
      "dawnbreaker",
      "slardar",
      "marci",
      "zeus",
      "sven"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Quelling Blade",
      "Slippers of Agility"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Ogre Axe",
      "Desolator",
      "Broadsword",
      "Echo Sabre"
    ]
  },
  {
    "id": "morphling",
    "numericId": 10,
    "name": "Morphling",
    "shortName": "morphling",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape",
      "Durable",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.468,
      "crusader": 0.463,
      "archon": 0.473,
      "legend": 0.477,
      "ancient": 0.486,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 4842,
      "guardian": 14272,
      "crusader": 23151,
      "archon": 29902,
      "legend": 28088,
      "ancient": 19600,
      "divine": 15765
    },
    "counters": [
      "weaver",
      "terrorblade",
      "medusa",
      "lifestealer",
      "puck",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "luna",
      "sniper",
      "axe",
      "pudge",
      "windranger",
      "timbersaw"
    ],
    "startItems": [
      "Iron Branch",
      "Magic Wand",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Magic Stick"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Diadem",
      "Yasha",
      "Manta Style",
      "Vladmir's Offering"
    ]
  },
  {
    "id": "muerta",
    "numericId": 138,
    "name": "Muerta",
    "shortName": "muerta",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.483,
      "crusader": 0.469,
      "archon": 0.475,
      "legend": 0.475,
      "ancient": 0.478,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 5790,
      "guardian": 14575,
      "crusader": 20741,
      "archon": 25702,
      "legend": 24630,
      "ancient": 16482,
      "divine": 12432
    },
    "counters": [
      "techies",
      "faceless-void",
      "dark-willow",
      "bristleback",
      "lich",
      "tusk"
    ],
    "weakAgainst": [
      "grimstroke",
      "ursa",
      "primal-beast",
      "lifestealer",
      "pugna",
      "leshrac"
    ],
    "startItems": [
      "Faerie Fire",
      "Iron Branch",
      "Magic Wand",
      "Tango",
      "Circlet",
      "Magic Stick"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Blade of Alacrity",
      "Maelstrom",
      "Dragon Lance",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "naga-siren",
    "numericId": 89,
    "name": "Naga Siren",
    "shortName": "naga_siren",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Support",
      "Pusher",
      "Disabler",
      "Initiator",
      "Escape"
    ],
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.493,
      "crusader": 0.487,
      "archon": 0.483,
      "legend": 0.475,
      "ancient": 0.49,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 4692,
      "guardian": 11373,
      "crusader": 14153,
      "archon": 13452,
      "legend": 9468,
      "ancient": 5318,
      "divine": 3697
    },
    "counters": [
      "puck",
      "pangolier",
      "hoodwink",
      "ursa",
      "pudge",
      "slardar"
    ],
    "weakAgainst": [
      "ember-spirit",
      "queen-of-pain",
      "dragon-knight",
      "shadow-fiend"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Slippers of Agility",
      "Tango",
      "Quelling Blade",
      "Magic Stick"
    ],
    "coreItems": [
      "Claymore",
      "Blitz Knuckles",
      "Diadem",
      "Oblivion Staff",
      "Manta Style"
    ]
  },
  {
    "id": "nature-s-prophet",
    "numericId": 53,
    "name": "Nature's Prophet",
    "shortName": "furion",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Pusher",
      "Escape",
      "Nuker"
    ],
    "overallWin": 0.424,
    "winByBracket": {
      "herald": 0.455,
      "guardian": 0.439,
      "crusader": 0.423,
      "archon": 0.416,
      "legend": 0.418,
      "ancient": 0.422,
      "divine": 0.436
    },
    "pickByBracket": {
      "herald": 16594,
      "guardian": 55445,
      "crusader": 88712,
      "archon": 111518,
      "legend": 104839,
      "ancient": 67296,
      "divine": 50636
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Circlet",
      "Tango",
      "Magic Wand",
      "Observer Ward"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Blade of Alacrity",
      "Dragon Lance",
      "Hyperstone",
      "Maelstrom"
    ]
  },
  {
    "id": "necrophos",
    "numericId": 36,
    "name": "Necrophos",
    "shortName": "necrolyte",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Durable",
      "Disabler"
    ],
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.54,
      "guardian": 0.528,
      "crusader": 0.521,
      "archon": 0.517,
      "legend": 0.511,
      "ancient": 0.507,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 19960,
      "guardian": 69837,
      "crusader": 114858,
      "archon": 152356,
      "legend": 150018,
      "ancient": 97442,
      "divine": 68697
    },
    "counters": [
      "underlord",
      "void-spirit",
      "witch-doctor",
      "bristleback",
      "dark-willow",
      "ursa"
    ],
    "weakAgainst": [
      "beastmaster",
      "windranger",
      "crystal-maiden",
      "muerta",
      "queen-of-pain",
      "tidehunter"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Circlet",
      "Magic Stick",
      "Tango",
      "Magic Wand"
    ],
    "coreItems": [
      "Radiance",
      "Aghanim's Shard",
      "Talisman of Evasion",
      "Sacred Relic",
      "Boots of Travel"
    ]
  },
  {
    "id": "night-stalker",
    "numericId": 60,
    "name": "Night Stalker",
    "shortName": "night_stalker",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Initiator",
      "Durable",
      "Disabler",
      "Nuker"
    ],
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.49,
      "crusader": 0.501,
      "archon": 0.512,
      "legend": 0.523,
      "ancient": 0.53,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 5961,
      "guardian": 22820,
      "crusader": 43344,
      "archon": 64049,
      "legend": 72946,
      "ancient": 53925,
      "divine": 44680
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
  },
  {
    "id": "nyx-assassin",
    "numericId": 88,
    "name": "Nyx Assassin",
    "shortName": "nyx_assassin",
    "primaryAttr": "all",
    "attackType": "Melee",
    "roles": [
      "Disabler",
      "Nuker",
      "Initiator",
      "Escape"
    ],
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.52,
      "crusader": 0.523,
      "archon": 0.525,
      "legend": 0.524,
      "ancient": 0.521,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 6199,
      "guardian": 21533,
      "crusader": 37854,
      "archon": 52039,
      "legend": 54378,
      "ancient": 37405,
      "divine": 27081
    },
    "counters": [
      "lich",
      "void-spirit",
      "bristleback",
      "dark-willow",
      "timbersaw",
      "puck"
    ],
    "weakAgainst": [
      "terrorblade",
      "largo",
      "doom",
      "axe",
      "pangolier",
      "ursa"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Boots of Speed",
      "Observer and Sentry Wards",
      "Sentry Ward"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Blink Dagger",
      "Arcane Boots",
      "Eul's Scepter of Divinity",
      "Point Booster"
    ]
  },
  {
    "id": "ogre-magi",
    "numericId": 84,
    "name": "Ogre Magi",
    "shortName": "ogre_magi",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Durable",
      "Initiator"
    ],
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.522,
      "crusader": 0.512,
      "archon": 0.508,
      "legend": 0.504,
      "ancient": 0.499,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 22932,
      "guardian": 81774,
      "crusader": 131809,
      "archon": 162910,
      "legend": 144195,
      "ancient": 82197,
      "divine": 44514
    },
    "counters": [
      "winter-wyvern",
      "medusa",
      "bristleback",
      "troll-warlord",
      "zeus",
      "anti-mage"
    ],
    "weakAgainst": [
      "phoenix",
      "pugna",
      "treant-protector",
      "death-prophet",
      "alchemist",
      "viper"
    ],
    "startItems": [
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Gauntlets of Strength",
      "Iron Branch",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Hand of Midas",
      "Pavise",
      "Solar Crest",
      "Aether Lens"
    ]
  },
  {
    "id": "omniknight",
    "numericId": 57,
    "name": "Omniknight",
    "shortName": "omniknight",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Durable",
      "Nuker"
    ],
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.488,
      "crusader": 0.502,
      "archon": 0.501,
      "legend": 0.507,
      "ancient": 0.515,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 3515,
      "guardian": 10626,
      "crusader": 15984,
      "archon": 20050,
      "legend": 18537,
      "ancient": 12116,
      "divine": 9119
    },
    "counters": [
      "shadow-fiend",
      "ogre-magi"
    ],
    "weakAgainst": [
      "ember-spirit",
      "pudge"
    ],
    "startItems": [],
    "coreItems": []
  },
  {
    "id": "oracle",
    "numericId": 111,
    "name": "Oracle",
    "shortName": "oracle",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Escape"
    ],
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.463,
      "guardian": 0.47,
      "crusader": 0.49,
      "archon": 0.506,
      "legend": 0.51,
      "ancient": 0.521,
      "divine": 0.53
    },
    "pickByBracket": {
      "herald": 3141,
      "guardian": 11571,
      "crusader": 20656,
      "archon": 29756,
      "legend": 32054,
      "ancient": 23434,
      "divine": 20072
    },
    "counters": [
      "batrider",
      "puck",
      "mars",
      "invoker",
      "tiny",
      "ursa"
    ],
    "weakAgainst": [
      "windranger",
      "shadow-fiend",
      "snapfire",
      "jakiro",
      "ogre-magi"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Arcane Boots",
      "Blink Dagger",
      "Ghost Scepter",
      "Mekansm",
      "Glimmer Cape"
    ]
  },
  {
    "id": "outworld-devourer",
    "numericId": 76,
    "name": "Outworld Devourer",
    "shortName": "obsidian_destroyer",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.531,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.504,
      "crusader": 0.516,
      "archon": 0.532,
      "legend": 0.537,
      "ancient": 0.545,
      "divine": 0.539
    },
    "pickByBracket": {
      "herald": 6508,
      "guardian": 21166,
      "crusader": 37779,
      "archon": 58902,
      "legend": 64146,
      "ancient": 46227,
      "divine": 33818
    },
    "counters": [
      "lion"
    ],
    "weakAgainst": [
      "pudge",
      "mars",
      "snapfire",
      "shadow-fiend",
      "disruptor",
      "rubick"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Mantle of Intelligence",
      "Circlet",
      "Observer Ward",
      "Faerie Fire"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Blade of Alacrity",
      "Witch Blade",
      "Oblivion Staff",
      "Blink Dagger"
    ]
  },
  {
    "id": "pangolier",
    "numericId": 120,
    "name": "Pangolier",
    "shortName": "pangolier",
    "primaryAttr": "all",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Nuker",
      "Disabler",
      "Durable",
      "Escape",
      "Initiator"
    ],
    "overallWin": 0.462,
    "winByBracket": {
      "herald": 0.437,
      "guardian": 0.449,
      "crusader": 0.459,
      "archon": 0.46,
      "legend": 0.465,
      "ancient": 0.465,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 3732,
      "guardian": 12964,
      "crusader": 24028,
      "archon": 36122,
      "legend": 42354,
      "ancient": 33421,
      "divine": 32337
    },
    "counters": [
      "lina",
      "beastmaster",
      "lion",
      "medusa",
      "queen-of-pain",
      "silencer"
    ],
    "weakAgainst": [
      "lone-druid",
      "naga-siren",
      "largo",
      "marci",
      "treant-protector",
      "juggernaut"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Circlet",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blink Dagger",
      "Blade of Alacrity",
      "Diffusal Blade",
      "Aghanim's Shard",
      "Point Booster"
    ]
  },
  {
    "id": "phantom-assassin",
    "numericId": 44,
    "name": "Phantom Assassin",
    "shortName": "phantom_assassin",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape"
    ],
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.522,
      "crusader": 0.517,
      "archon": 0.514,
      "legend": 0.508,
      "ancient": 0.501,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 27052,
      "guardian": 80702,
      "crusader": 112184,
      "archon": 123393,
      "legend": 97390,
      "ancient": 50594,
      "divine": 24508
    },
    "counters": [
      "dragon-knight",
      "ogre-magi",
      "mars"
    ],
    "weakAgainst": [
      "rubick",
      "pudge",
      "lifestealer",
      "disruptor",
      "shadow-demon",
      "luna"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Tango",
      "Magic Stick",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Broadsword",
      "Battle Fury",
      "Desolator",
      "Perseverance"
    ]
  },
  {
    "id": "phantom-lancer",
    "numericId": 12,
    "name": "Phantom Lancer",
    "shortName": "phantom_lancer",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Pusher",
      "Nuker"
    ],
    "overallWin": 0.532,
    "winByBracket": {
      "herald": 0.53,
      "guardian": 0.528,
      "crusader": 0.526,
      "archon": 0.535,
      "legend": 0.531,
      "ancient": 0.536,
      "divine": 0.537
    },
    "pickByBracket": {
      "herald": 17509,
      "guardian": 55976,
      "crusader": 86891,
      "archon": 106837,
      "legend": 97715,
      "ancient": 61124,
      "divine": 48656
    },
    "counters": [
      "slardar",
      "mars",
      "jakiro"
    ],
    "weakAgainst": [
      "queen-of-pain",
      "shadow-demon",
      "rubick",
      "hoodwink",
      "windranger",
      "snapfire"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Tango",
      "Magic Stick",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Diadem",
      "Ogre Axe",
      "Manta Style"
    ]
  },
  {
    "id": "phoenix",
    "numericId": 110,
    "name": "Phoenix",
    "shortName": "phoenix",
    "primaryAttr": "str",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Initiator",
      "Escape",
      "Disabler"
    ],
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.516,
      "crusader": 0.516,
      "archon": 0.514,
      "legend": 0.514,
      "ancient": 0.514,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 3953,
      "guardian": 15369,
      "crusader": 29921,
      "archon": 44132,
      "legend": 47906,
      "ancient": 34461,
      "divine": 30151
    },
    "counters": [
      "dark-seer",
      "vengeful-spirit",
      "sand-king",
      "techies",
      "void-spirit",
      "razor"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "bane",
      "juggernaut",
      "magnus",
      "huskar",
      "drow-ranger"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Sentry Ward"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Platemail",
      "Spirit Vessel",
      "Staff of Wizardry",
      "Diadem"
    ]
  },
  {
    "id": "primal-beast",
    "numericId": 137,
    "name": "Primal Beast",
    "shortName": "primal_beast",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Durable",
      "Disabler"
    ],
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.482,
      "crusader": 0.484,
      "archon": 0.495,
      "legend": 0.495,
      "ancient": 0.501,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 3818,
      "guardian": 11807,
      "crusader": 18733,
      "archon": 22783,
      "legend": 21033,
      "ancient": 14383,
      "divine": 13323
    },
    "counters": [
      "terrorblade",
      "muerta",
      "shadow-shaman",
      "weaver",
      "pugna",
      "nature-s-prophet"
    ],
    "weakAgainst": [
      "largo",
      "leshrac",
      "razor",
      "shadow-demon",
      "faceless-void",
      "clockwerk"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Observer Ward",
      "Quelling Blade",
      "Magic Stick"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blink Dagger",
      "Mithril Hammer",
      "Black King Bar",
      "Aghanim's Shard"
    ]
  },
  {
    "id": "puck",
    "numericId": 13,
    "name": "Puck",
    "shortName": "puck",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Initiator",
      "Disabler",
      "Escape",
      "Nuker"
    ],
    "overallWin": 0.465,
    "winByBracket": {
      "herald": 0.435,
      "guardian": 0.446,
      "crusader": 0.445,
      "archon": 0.462,
      "legend": 0.468,
      "ancient": 0.473,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 3558,
      "guardian": 11148,
      "crusader": 18426,
      "archon": 26403,
      "legend": 29108,
      "ancient": 20928,
      "divine": 20349
    },
    "counters": [
      "weaver",
      "silencer",
      "invoker",
      "razor",
      "brewmaster",
      "dark-willow"
    ],
    "weakAgainst": [
      "naga-siren",
      "oracle",
      "bane",
      "nyx-assassin",
      "morphling",
      "dark-seer"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Observer and Sentry Wards",
      "Circlet"
    ],
    "coreItems": [
      "Witch Blade",
      "Oblivion Staff",
      "Blink Dagger",
      "Blitz Knuckles",
      "Aghanim's Shard"
    ]
  },
  {
    "id": "pudge",
    "numericId": 14,
    "name": "Pudge",
    "shortName": "pudge",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Disabler",
      "Initiator",
      "Durable",
      "Nuker"
    ],
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.522,
      "crusader": 0.522,
      "archon": 0.514,
      "legend": 0.509,
      "ancient": 0.509,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 30197,
      "guardian": 114175,
      "crusader": 204596,
      "archon": 271357,
      "legend": 254793,
      "ancient": 163937,
      "divine": 126848
    },
    "counters": [
      "clinkz",
      "morphling",
      "death-prophet",
      "wraith-king",
      "phantom-assassin",
      "outworld-devourer"
    ],
    "weakAgainst": [
      "largo",
      "drow-ranger",
      "magnus",
      "earth-spirit",
      "monkey-king",
      "naga-siren"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Gauntlets of Strength",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Observer Ward"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Aether Lens",
      "Staff of Wizardry",
      "Point Booster"
    ]
  },
  {
    "id": "pugna",
    "numericId": 45,
    "name": "Pugna",
    "shortName": "pugna",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Nuker",
      "Pusher"
    ],
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.482,
      "crusader": 0.497,
      "archon": 0.505,
      "legend": 0.51,
      "ancient": 0.513,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 6355,
      "guardian": 18361,
      "crusader": 28137,
      "archon": 34655,
      "legend": 33077,
      "ancient": 21034,
      "divine": 13558
    },
    "counters": [
      "ogre-magi",
      "dark-willow",
      "storm-spirit",
      "queen-of-pain",
      "gyrocopter",
      "muerta"
    ],
    "weakAgainst": [
      "terrorblade",
      "ancient-apparition",
      "clockwerk",
      "shadow-fiend",
      "primal-beast",
      "nature-s-prophet"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Magic Stick",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Glimmer Cape",
      "Aether Lens",
      "Staff of Wizardry",
      "Kaya"
    ]
  },
  {
    "id": "queen-of-pain",
    "numericId": 39,
    "name": "Queen of Pain",
    "shortName": "queenofpain",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Escape"
    ],
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.465,
      "guardian": 0.475,
      "crusader": 0.472,
      "archon": 0.471,
      "legend": 0.472,
      "ancient": 0.467,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 9740,
      "guardian": 34498,
      "crusader": 60378,
      "archon": 85581,
      "legend": 88452,
      "ancient": 57190,
      "divine": 38652
    },
    "counters": [
      "phantom-lancer",
      "drow-ranger",
      "tinker",
      "timbersaw",
      "necrophos",
      "chaos-knight"
    ],
    "weakAgainst": [
      "largo",
      "keeper-of-the-light",
      "chen",
      "treant-protector",
      "bounty-hunter",
      "mirana"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Circlet",
      "Mantle of Intelligence"
    ],
    "coreItems": [
      "Ogre Axe",
      "Staff of Wizardry",
      "Kaya",
      "Point Booster",
      "Sange"
    ]
  },
  {
    "id": "razor",
    "numericId": 15,
    "name": "Razor",
    "shortName": "razor",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Durable",
      "Nuker",
      "Pusher"
    ],
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.502,
      "crusader": 0.51,
      "archon": 0.502,
      "legend": 0.502,
      "ancient": 0.5,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 10831,
      "guardian": 29580,
      "crusader": 42531,
      "archon": 53456,
      "legend": 52211,
      "ancient": 33833,
      "divine": 21777
    },
    "counters": [
      "crystal-maiden",
      "gyrocopter",
      "primal-beast",
      "marci",
      "tidehunter",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "treant-protector",
      "phoenix",
      "pudge",
      "lion",
      "puck",
      "doom"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Faerie Fire",
      "Slippers of Agility"
    ],
    "coreItems": [
      "Ogre Axe",
      "Yasha",
      "Blade of Alacrity",
      "Mithril Hammer",
      "Diadem"
    ]
  },
  {
    "id": "riki",
    "numericId": 32,
    "name": "Riki",
    "shortName": "riki",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Disabler"
    ],
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.504,
      "guardian": 0.517,
      "crusader": 0.524,
      "archon": 0.529,
      "legend": 0.525,
      "ancient": 0.525,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 9734,
      "guardian": 26890,
      "crusader": 38664,
      "archon": 44432,
      "legend": 37637,
      "ancient": 23038,
      "divine": 14218
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Circlet",
      "Observer Ward",
      "Magic Stick"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Diffusal Blade",
      "Yasha",
      "Diadem",
      "Manta Style"
    ]
  },
  {
    "id": "ring-master",
    "numericId": 131,
    "name": "Ring Master",
    "shortName": "ringmaster",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Escape",
      "Disabler"
    ],
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.469,
      "crusader": 0.476,
      "archon": 0.482,
      "legend": 0.487,
      "ancient": 0.489,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 4549,
      "guardian": 16285,
      "crusader": 31163,
      "archon": 45391,
      "legend": 50574,
      "ancient": 38409,
      "divine": 34583
    },
    "counters": [
      "skywrath-mage",
      "vengeful-spirit",
      "silencer",
      "timbersaw",
      "muerta",
      "sniper"
    ],
    "weakAgainst": [
      "alchemist",
      "chen",
      "grimstroke",
      "keeper-of-the-light",
      "dazzle",
      "doom"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Faerie Fire",
      "Sentry Ward",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Arcane Boots",
      "Staff of Wizardry",
      "Blink Dagger",
      "Essence Distiller",
      "Vitality Booster"
    ]
  },
  {
    "id": "rubick",
    "numericId": 86,
    "name": "Rubick",
    "shortName": "rubick",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker"
    ],
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.488,
      "crusader": 0.489,
      "archon": 0.492,
      "legend": 0.496,
      "ancient": 0.503,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 14580,
      "guardian": 58441,
      "crusader": 113790,
      "archon": 181153,
      "legend": 209272,
      "ancient": 154306,
      "divine": 118934
    },
    "counters": [
      "phantom-assassin",
      "phantom-lancer",
      "weaver",
      "undying",
      "brewmaster",
      "magnus"
    ],
    "weakAgainst": [
      "earth-spirit",
      "lone-druid",
      "lycan",
      "leshrac",
      "abaddon",
      "bounty-hunter"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Staff of Wizardry",
      "Blink Dagger",
      "Essence Distiller",
      "Force Staff"
    ]
  },
  {
    "id": "sand-king",
    "numericId": 16,
    "name": "Sand King",
    "shortName": "sand_king",
    "primaryAttr": "all",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Support",
      "Nuker",
      "Escape"
    ],
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.509,
      "crusader": 0.505,
      "archon": 0.492,
      "legend": 0.483,
      "ancient": 0.477,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 7613,
      "guardian": 23145,
      "crusader": 35049,
      "archon": 42423,
      "legend": 37711,
      "ancient": 23079,
      "divine": 14298
    },
    "counters": [
      "templar-assassin",
      "lion",
      "ursa",
      "void-spirit",
      "underlord",
      "beastmaster"
    ],
    "weakAgainst": [
      "warlock",
      "phoenix",
      "alchemist",
      "pudge",
      "abaddon",
      "luna"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Circlet",
      "Quelling Blade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blink Dagger",
      "Staff of Wizardry",
      "Point Booster",
      "Blade of Alacrity"
    ]
  },
  {
    "id": "shadow-demon",
    "numericId": 79,
    "name": "Shadow Demon",
    "shortName": "shadow_demon",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Initiator",
      "Nuker"
    ],
    "overallWin": 0.453,
    "winByBracket": {
      "herald": 0.418,
      "guardian": 0.436,
      "crusader": 0.44,
      "archon": 0.448,
      "legend": 0.463,
      "ancient": 0.463,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 2699,
      "guardian": 8379,
      "crusader": 14224,
      "archon": 19568,
      "legend": 21529,
      "ancient": 15521,
      "divine": 13111
    },
    "counters": [
      "medusa",
      "weaver",
      "phantom-lancer",
      "dazzle",
      "primal-beast",
      "drow-ranger"
    ],
    "weakAgainst": [
      "alchemist",
      "naga-siren",
      "grimstroke",
      "zeus",
      "monkey-king",
      "chen"
    ],
    "startItems": [
      "Iron Branch",
      "Blood Grenade",
      "Tango",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Sentry Ward"
    ],
    "coreItems": [
      "Blink Dagger",
      "Arcane Boots",
      "Aghanim's Shard",
      "Glimmer Cape",
      "Pavise"
    ]
  },
  {
    "id": "shadow-fiend",
    "numericId": 11,
    "name": "Shadow Fiend",
    "shortName": "nevermore",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker"
    ],
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.489,
      "crusader": 0.487,
      "archon": 0.484,
      "legend": 0.481,
      "ancient": 0.485,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 27970,
      "guardian": 94294,
      "crusader": 161281,
      "archon": 218343,
      "legend": 219818,
      "ancient": 149882,
      "divine": 117508
    },
    "counters": [
      "night-stalker",
      "medusa",
      "undying",
      "pugna",
      "oracle",
      "tinker"
    ],
    "weakAgainst": [
      "lone-druid",
      "enigma",
      "monkey-king",
      "alchemist",
      "phoenix",
      "venomancer"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Magic Wand",
      "Tango",
      "Magic Stick",
      "Circlet"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Dragon Lance",
      "Staff of Wizardry",
      "Yasha",
      "Force Staff"
    ]
  },
  {
    "id": "shadow-shaman",
    "numericId": 27,
    "name": "Shadow Shaman",
    "shortName": "shadow_shaman",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Pusher",
      "Disabler",
      "Nuker",
      "Initiator"
    ],
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.519,
      "crusader": 0.521,
      "archon": 0.522,
      "legend": 0.525,
      "ancient": 0.52,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 22707,
      "guardian": 73935,
      "crusader": 114745,
      "archon": 140830,
      "legend": 128714,
      "ancient": 76506,
      "divine": 44837
    },
    "counters": [
      "medusa",
      "kunkka",
      "chaos-knight",
      "grimstroke",
      "morphling",
      "bristleback"
    ],
    "weakAgainst": [
      "death-prophet",
      "undying",
      "beastmaster",
      "hoodwink",
      "void-spirit",
      "terrorblade"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Blink Dagger",
      "Arcane Boots",
      "Aether Lens",
      "Staff of Wizardry",
      "Aghanim's Shard"
    ]
  },
  {
    "id": "silencer",
    "numericId": 75,
    "name": "Silencer",
    "shortName": "silencer",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Support",
      "Disabler",
      "Initiator",
      "Nuker"
    ],
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.525,
      "guardian": 0.518,
      "crusader": 0.512,
      "archon": 0.505,
      "legend": 0.5,
      "ancient": 0.495,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 11498,
      "guardian": 44151,
      "crusader": 74784,
      "archon": 97883,
      "legend": 91333,
      "ancient": 55187,
      "divine": 32384
    },
    "counters": [
      "timbersaw",
      "vengeful-spirit",
      "lina",
      "chaos-knight",
      "dark-willow",
      "jakiro"
    ],
    "weakAgainst": [
      "largo",
      "keeper-of-the-light",
      "clockwerk",
      "spirit-breaker",
      "leshrac",
      "night-stalker"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Staff of Wizardry",
      "Force Staff",
      "Glimmer Cape",
      "Pavise"
    ]
  },
  {
    "id": "skywrath-mage",
    "numericId": 101,
    "name": "Skywrath Mage",
    "shortName": "skywrath_mage",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.502,
      "crusader": 0.505,
      "archon": 0.5,
      "legend": 0.503,
      "ancient": 0.496,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 17229,
      "guardian": 55674,
      "crusader": 85488,
      "archon": 106625,
      "legend": 98020,
      "ancient": 60740,
      "divine": 40291
    },
    "counters": [
      "faceless-void",
      "death-prophet",
      "witch-doctor",
      "ancient-apparition",
      "dragon-knight",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "dazzle",
      "clinkz",
      "phoenix",
      "ring-master"
    ],
    "startItems": [
      "Tango",
      "Iron Branch",
      "Circlet",
      "Blood Grenade",
      "Mantle of Intelligence",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Arcane Boots",
      "Vitality Booster",
      "Rod of Atos",
      "Kaya"
    ]
  },
  {
    "id": "slardar",
    "numericId": 28,
    "name": "Slardar",
    "shortName": "slardar",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable",
      "Initiator",
      "Disabler",
      "Escape"
    ],
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.515,
      "crusader": 0.512,
      "archon": 0.512,
      "legend": 0.505,
      "ancient": 0.497,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 11528,
      "guardian": 39627,
      "crusader": 65194,
      "archon": 84449,
      "legend": 82670,
      "ancient": 53859,
      "divine": 39232
    },
    "counters": [
      "grimstroke",
      "drow-ranger",
      "weaver",
      "underlord",
      "lifestealer",
      "viper"
    ],
    "weakAgainst": [
      "mirana",
      "phantom-lancer",
      "death-prophet",
      "vengeful-spirit",
      "crystal-maiden",
      "zeus"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Faerie Fire",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Aghanim's Shard",
      "Mithril Hammer",
      "Black King Bar"
    ]
  },
  {
    "id": "slark",
    "numericId": 93,
    "name": "Slark",
    "shortName": "slark",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Disabler",
      "Nuker"
    ],
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.515,
      "crusader": 0.5,
      "archon": 0.497,
      "legend": 0.496,
      "ancient": 0.504,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 11057,
      "guardian": 38768,
      "crusader": 67539,
      "archon": 93175,
      "legend": 95572,
      "ancient": 63958,
      "divine": 44838
    },
    "counters": [
      "warlock",
      "beastmaster",
      "puck",
      "tidehunter",
      "storm-spirit",
      "pudge"
    ],
    "weakAgainst": [
      "leshrac",
      "spirit-breaker",
      "treant-protector",
      "snapfire",
      "shadow-demon",
      "jakiro"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Faerie Fire",
      "Quelling Blade",
      "Magic Stick"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blade of Alacrity",
      "Diffusal Blade",
      "Point Booster",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "snapfire",
    "numericId": 128,
    "name": "Snapfire",
    "shortName": "snapfire",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Escape"
    ],
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.482,
      "crusader": 0.492,
      "archon": 0.494,
      "legend": 0.492,
      "ancient": 0.489,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 9538,
      "guardian": 34751,
      "crusader": 66329,
      "archon": 102252,
      "legend": 117598,
      "ancient": 86643,
      "divine": 67647
    },
    "counters": [
      "tinker",
      "winter-wyvern",
      "death-prophet",
      "witch-doctor",
      "ancient-apparition",
      "grimstroke"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "clinkz",
      "bane",
      "treant-protector",
      "lone-druid",
      "keeper-of-the-light"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Observer and Sentry Wards",
      "Blood Grenade"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Staff of Wizardry",
      "Blink Dagger",
      "Kaya",
      "Boots of Travel"
    ]
  },
  {
    "id": "sniper",
    "numericId": 35,
    "name": "Sniper",
    "shortName": "sniper",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker"
    ],
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.523,
      "guardian": 0.514,
      "crusader": 0.509,
      "archon": 0.503,
      "legend": 0.498,
      "ancient": 0.491,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 31674,
      "guardian": 101434,
      "crusader": 158937,
      "archon": 196127,
      "legend": 169771,
      "ancient": 91495,
      "divine": 44510
    },
    "counters": [
      "death-prophet",
      "witch-doctor",
      "morphling",
      "lich",
      "sven",
      "grimstroke"
    ],
    "weakAgainst": [
      "ember-spirit",
      "nature-s-prophet",
      "earthshaker",
      "crystal-maiden",
      "luna",
      "ring-master"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Slippers of Agility",
      "Observer Ward",
      "Tango",
      "Faerie Fire"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Dragon Lance",
      "Mithril Hammer",
      "Maelstrom",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "spectre",
    "numericId": 67,
    "name": "Spectre",
    "shortName": "spectre",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable",
      "Escape"
    ],
    "overallWin": 0.542,
    "winByBracket": {
      "herald": 0.55,
      "guardian": 0.547,
      "crusader": 0.542,
      "archon": 0.541,
      "legend": 0.543,
      "ancient": 0.539,
      "divine": 0.539
    },
    "pickByBracket": {
      "herald": 13875,
      "guardian": 50456,
      "crusader": 85291,
      "archon": 109903,
      "legend": 103953,
      "ancient": 64950,
      "divine": 43722
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Tango",
      "Magic Stick",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Sacred Relic",
      "Talisman of Evasion",
      "Radiance",
      "Yasha"
    ]
  },
  {
    "id": "spirit-breaker",
    "numericId": 71,
    "name": "Spirit Breaker",
    "shortName": "spirit_breaker",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Initiator",
      "Disabler",
      "Durable",
      "Escape"
    ],
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.521,
      "guardian": 0.521,
      "crusader": 0.517,
      "archon": 0.521,
      "legend": 0.523,
      "ancient": 0.525,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 20370,
      "guardian": 65953,
      "crusader": 104551,
      "archon": 134947,
      "legend": 130873,
      "ancient": 84464,
      "divine": 59643
    },
    "counters": [
      "clinkz",
      "ancient-apparition",
      "silencer",
      "death-prophet",
      "slark",
      "troll-warlord"
    ],
    "weakAgainst": [
      "treant-protector",
      "keeper-of-the-light",
      "huskar",
      "drow-ranger",
      "largo",
      "razor"
    ],
    "startItems": [
      "Tango",
      "Boots of Speed",
      "Sentry Ward",
      "Blood Grenade",
      "Iron Branch",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Phase Boots",
      "Blitz Knuckles",
      "Drum of Endurance",
      "Claymore",
      "Shadow Blade"
    ]
  },
  {
    "id": "storm-spirit",
    "numericId": 17,
    "name": "Storm Spirit",
    "shortName": "storm_spirit",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape",
      "Nuker",
      "Initiator",
      "Disabler"
    ],
    "overallWin": 0.461,
    "winByBracket": {
      "herald": 0.459,
      "guardian": 0.466,
      "crusader": 0.462,
      "archon": 0.458,
      "legend": 0.459,
      "ancient": 0.465,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 8698,
      "guardian": 27803,
      "crusader": 47121,
      "archon": 63492,
      "legend": 65351,
      "ancient": 46295,
      "divine": 36822
    },
    "counters": [
      "templar-assassin",
      "sven",
      "queen-of-pain",
      "void-spirit",
      "death-prophet",
      "techies"
    ],
    "weakAgainst": [
      "mirana",
      "huskar",
      "chen",
      "treant-protector",
      "night-stalker",
      "pugna"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Circlet",
      "Sentry Ward"
    ],
    "coreItems": [
      "Ogre Axe",
      "Staff of Wizardry",
      "Kaya",
      "Oblivion Staff",
      "Blitz Knuckles"
    ]
  },
  {
    "id": "sven",
    "numericId": 18,
    "name": "Sven",
    "shortName": "sven",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Disabler",
      "Initiator",
      "Durable",
      "Nuker"
    ],
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.504,
      "crusader": 0.51,
      "archon": 0.511,
      "legend": 0.51,
      "ancient": 0.51,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 12224,
      "guardian": 38202,
      "crusader": 60324,
      "archon": 75438,
      "legend": 72905,
      "ancient": 48627,
      "divine": 37731
    },
    "counters": [
      "undying",
      "skywrath-mage",
      "dark-willow",
      "zeus",
      "monkey-king",
      "axe"
    ],
    "weakAgainst": [
      "lycan",
      "earthshaker",
      "lich",
      "void-spirit",
      "sniper",
      "lion"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Magic Stick",
      "Tango",
      "Quelling Blade",
      "Faerie Fire"
    ],
    "coreItems": [
      "Ogre Axe",
      "Broadsword",
      "Echo Sabre",
      "Blink Dagger",
      "Mithril Hammer"
    ]
  },
  {
    "id": "techies",
    "numericId": 105,
    "name": "Techies",
    "shortName": "techies",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.514,
      "crusader": 0.506,
      "archon": 0.507,
      "legend": 0.505,
      "ancient": 0.504,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 14696,
      "guardian": 48650,
      "crusader": 77054,
      "archon": 95186,
      "legend": 86895,
      "ancient": 54679,
      "divine": 38025
    },
    "counters": [
      "viper",
      "crystal-maiden",
      "disruptor",
      "undying",
      "grimstroke",
      "luna"
    ],
    "weakAgainst": [
      "phoenix",
      "keeper-of-the-light",
      "muerta",
      "monkey-king",
      "juggernaut",
      "bristleback"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Sentry Ward"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Arcane Boots",
      "Glimmer Cape",
      "Eul's Scepter of Divinity",
      "Force Staff"
    ]
  },
  {
    "id": "templar-assassin",
    "numericId": 46,
    "name": "Templar Assassin",
    "shortName": "templar_assassin",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape"
    ],
    "overallWin": 0.457,
    "winByBracket": {
      "herald": 0.458,
      "guardian": 0.457,
      "crusader": 0.455,
      "archon": 0.454,
      "legend": 0.457,
      "ancient": 0.462,
      "divine": 0.454
    },
    "pickByBracket": {
      "herald": 8755,
      "guardian": 27220,
      "crusader": 42927,
      "archon": 53394,
      "legend": 49672,
      "ancient": 31820,
      "divine": 23293
    },
    "counters": [
      "kunkka",
      "crystal-maiden",
      "troll-warlord",
      "dawnbreaker",
      "clinkz",
      "sven"
    ],
    "weakAgainst": [
      "bane",
      "treant-protector",
      "bristleback",
      "sand-king",
      "grimstroke",
      "monkey-king"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Magic Wand",
      "Tango",
      "Magic Stick",
      "Quelling Blade"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Desolator",
      "Blink Dagger",
      "Blade of Alacrity",
      "Dragon Lance"
    ]
  },
  {
    "id": "terrorblade",
    "numericId": 109,
    "name": "Terrorblade",
    "shortName": "terrorblade",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Pusher",
      "Nuker"
    ],
    "overallWin": 0.467,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.468,
      "crusader": 0.465,
      "archon": 0.462,
      "legend": 0.468,
      "ancient": 0.465,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 9223,
      "guardian": 27865,
      "crusader": 43031,
      "archon": 52756,
      "legend": 49608,
      "ancient": 33510,
      "divine": 31702
    },
    "counters": [
      "bristleback",
      "medusa",
      "pugna",
      "dragon-knight",
      "shadow-shaman",
      "nyx-assassin"
    ],
    "weakAgainst": [
      "morphling",
      "abaddon",
      "centaur-warrunner",
      "dark-seer",
      "primal-beast",
      "spirit-breaker"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Circlet",
      "Quelling Blade",
      "Magic Stick"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Diadem",
      "Manta Style",
      "Yasha",
      "Dragon Lance"
    ]
  },
  {
    "id": "tidehunter",
    "numericId": 29,
    "name": "Tidehunter",
    "shortName": "tidehunter",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Durable",
      "Disabler",
      "Nuker",
      "Carry"
    ],
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.504,
      "crusader": 0.508,
      "archon": 0.505,
      "legend": 0.498,
      "ancient": 0.496,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 8653,
      "guardian": 29671,
      "crusader": 51156,
      "archon": 70550,
      "legend": 68706,
      "ancient": 44348,
      "divine": 31188
    },
    "counters": [
      "faceless-void",
      "undying",
      "necrophos",
      "sniper",
      "lycan",
      "spirit-breaker"
    ],
    "weakAgainst": [
      "clockwerk",
      "treant-protector",
      "huskar",
      "ember-spirit",
      "keeper-of-the-light",
      "razor"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Quelling Blade",
      "Circlet",
      "Magic Stick"
    ],
    "coreItems": [
      "Blink Dagger",
      "Aghanim's Shard",
      "Ogre Axe",
      "Staff of Wizardry",
      "Point Booster"
    ]
  },
  {
    "id": "timbersaw",
    "numericId": 98,
    "name": "Timbersaw",
    "shortName": "shredder",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Nuker",
      "Durable",
      "Escape"
    ],
    "overallWin": 0.45,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.454,
      "crusader": 0.449,
      "archon": 0.45,
      "legend": 0.449,
      "ancient": 0.452,
      "divine": 0.446
    },
    "pickByBracket": {
      "herald": 5670,
      "guardian": 19031,
      "crusader": 33340,
      "archon": 45577,
      "legend": 48119,
      "ancient": 33384,
      "divine": 30020
    },
    "counters": [
      "lina",
      "troll-warlord",
      "morphling",
      "anti-mage",
      "witch-doctor",
      "lifestealer"
    ],
    "weakAgainst": [
      "bane",
      "nyx-assassin",
      "bounty-hunter",
      "earth-spirit",
      "largo",
      "alchemist"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Magic Stick",
      "Circlet",
      "Quelling Blade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Kaya",
      "Sange",
      "Kaya and Sange",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "tinker",
    "numericId": 34,
    "name": "Tinker",
    "shortName": "tinker",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Pusher"
    ],
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.448,
      "crusader": 0.452,
      "archon": 0.467,
      "legend": 0.478,
      "ancient": 0.483,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 6516,
      "guardian": 20810,
      "crusader": 34099,
      "archon": 42794,
      "legend": 41087,
      "ancient": 27061,
      "divine": 21750
    },
    "counters": [
      "invoker",
      "ogre-magi",
      "dragon-knight"
    ],
    "weakAgainst": [
      "snapfire",
      "shadow-demon",
      "queen-of-pain",
      "lion",
      "shadow-fiend",
      "pudge"
    ],
    "startItems": [
      "Iron Branch",
      "Observer Ward",
      "Tango",
      "Faerie Fire",
      "Circlet",
      "Mantle of Intelligence"
    ],
    "coreItems": [
      "Ogre Axe",
      "Point Booster",
      "Staff of Wizardry",
      "Blade of Alacrity",
      "Blink Dagger"
    ]
  },
  {
    "id": "tiny",
    "numericId": 19,
    "name": "Tiny",
    "shortName": "tiny",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Nuker",
      "Pusher",
      "Initiator",
      "Durable",
      "Disabler"
    ],
    "overallWin": 0.443,
    "winByBracket": {
      "herald": 0.455,
      "guardian": 0.451,
      "crusader": 0.44,
      "archon": 0.441,
      "legend": 0.438,
      "ancient": 0.441,
      "divine": 0.446
    },
    "pickByBracket": {
      "herald": 7912,
      "guardian": 23091,
      "crusader": 35372,
      "archon": 44708,
      "legend": 45187,
      "ancient": 32797,
      "divine": 28787
    },
    "counters": [
      "weaver",
      "bristleback",
      "death-prophet",
      "void-spirit",
      "sven",
      "dark-seer"
    ],
    "weakAgainst": [
      "bane",
      "kez",
      "chen",
      "kunkka",
      "treant-protector",
      "ember-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Magic Stick",
      "Tango",
      "Quelling Blade",
      "Faerie Fire"
    ],
    "coreItems": [
      "Echo Sabre",
      "Blink Dagger",
      "Ogre Axe",
      "Claymore",
      "Blitz Knuckles"
    ]
  },
  {
    "id": "treant-protector",
    "numericId": 83,
    "name": "Treant Protector",
    "shortName": "treant",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Initiator",
      "Durable",
      "Disabler",
      "Escape"
    ],
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.487,
      "crusader": 0.479,
      "archon": 0.487,
      "legend": 0.493,
      "ancient": 0.494,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 5204,
      "guardian": 18944,
      "crusader": 33211,
      "archon": 46024,
      "legend": 49985,
      "ancient": 37902,
      "divine": 43786
    },
    "counters": [
      "invoker",
      "monkey-king",
      "gyrocopter",
      "spirit-breaker",
      "razor",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "enchantress"
    ],
    "startItems": [
      "Blood Grenade",
      "Boots of Speed",
      "Observer and Sentry Wards",
      "Smoke of Deceit",
      "Sentry Ward",
      "Observer Ward"
    ],
    "coreItems": [
      "Blink Dagger",
      "Arcane Boots",
      "Essence Distiller",
      "Pavise",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "troll-warlord",
    "numericId": 95,
    "name": "Troll Warlord",
    "shortName": "troll_warlord",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Pusher",
      "Disabler",
      "Durable"
    ],
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.522,
      "crusader": 0.517,
      "archon": 0.517,
      "legend": 0.512,
      "ancient": 0.508,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 7070,
      "guardian": 17337,
      "crusader": 21231,
      "archon": 22030,
      "legend": 17880,
      "ancient": 10233,
      "divine": 6739
    },
    "counters": [
      "sven",
      "silencer",
      "medusa",
      "lifestealer",
      "shadow-fiend",
      "pugna"
    ],
    "weakAgainst": [
      "abaddon",
      "timbersaw",
      "invoker",
      "nature-s-prophet",
      "lion",
      "axe"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Tango",
      "Magic Stick",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Ogre Axe",
      "Broadsword",
      "Blade of Alacrity",
      "Battle Fury",
      "Yasha"
    ]
  },
  {
    "id": "tusk",
    "numericId": 100,
    "name": "Tusk",
    "shortName": "tusk",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Nuker"
    ],
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.451,
      "guardian": 0.452,
      "crusader": 0.466,
      "archon": 0.477,
      "legend": 0.48,
      "ancient": 0.491,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 4212,
      "guardian": 15943,
      "crusader": 30098,
      "archon": 46838,
      "legend": 56813,
      "ancient": 46209,
      "divine": 43923
    },
    "counters": [
      "vengeful-spirit",
      "ancient-apparition",
      "death-prophet",
      "void-spirit",
      "magnus",
      "tinker"
    ],
    "weakAgainst": [
      "treant-protector",
      "broodmother",
      "venomancer",
      "muerta",
      "pugna",
      "phoenix"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Sentry Ward",
      "Faerie Fire"
    ],
    "coreItems": [
      "Blink Dagger",
      "Staff of Wizardry",
      "Phase Boots",
      "Ogre Axe",
      "Arcane Boots"
    ]
  },
  {
    "id": "underlord",
    "numericId": 108,
    "name": "Underlord",
    "shortName": "abyssal_underlord",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Durable",
      "Escape"
    ],
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.522,
      "crusader": 0.522,
      "archon": 0.507,
      "legend": 0.501,
      "ancient": 0.491,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 8629,
      "guardian": 35812,
      "crusader": 73810,
      "archon": 118657,
      "legend": 133316,
      "ancient": 94703,
      "divine": 73003
    },
    "counters": [
      "ancient-apparition",
      "abaddon",
      "templar-assassin",
      "kunkka",
      "gyrocopter",
      "zeus"
    ],
    "weakAgainst": [
      "treant-protector",
      "necrophos",
      "lone-druid",
      "drow-ranger",
      "mirana",
      "monkey-king"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Faerie Fire",
      "Quelling Blade"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Point Booster",
      "Blade of Alacrity",
      "Aghanim's Scepter"
    ]
  },
  {
    "id": "undying",
    "numericId": 85,
    "name": "Undying",
    "shortName": "undying",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Durable",
      "Disabler",
      "Nuker"
    ],
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.511,
      "crusader": 0.509,
      "archon": 0.508,
      "legend": 0.506,
      "ancient": 0.501,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 15208,
      "guardian": 58339,
      "crusader": 102544,
      "archon": 143298,
      "legend": 145537,
      "ancient": 97771,
      "divine": 76831
    },
    "counters": [
      "shadow-shaman",
      "lion",
      "silencer",
      "lifestealer",
      "warlock",
      "invoker"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "alchemist",
      "marci",
      "rubick",
      "mirana"
    ],
    "startItems": [
      "Iron Branch",
      "Enchanted Mango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Smoke of Deceit",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Arcane Boots",
      "Point Booster",
      "Vitality Booster",
      "Blink Dagger"
    ]
  },
  {
    "id": "ursa",
    "numericId": 70,
    "name": "Ursa",
    "shortName": "ursa",
    "primaryAttr": "agi",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable",
      "Disabler"
    ],
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.457,
      "crusader": 0.471,
      "archon": 0.474,
      "legend": 0.477,
      "ancient": 0.48,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 8673,
      "guardian": 24181,
      "crusader": 36834,
      "archon": 47013,
      "legend": 45358,
      "ancient": 29085,
      "divine": 18525
    },
    "counters": [
      "underlord",
      "muerta",
      "dark-willow",
      "timbersaw",
      "grimstroke",
      "magnus"
    ],
    "weakAgainst": [
      "treant-protector",
      "chen",
      "bounty-hunter",
      "alchemist",
      "marci",
      "naga-siren"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Magic Stick",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Broadsword",
      "Battle Fury",
      "Blink Dagger",
      "Mithril Hammer",
      "Ogre Axe"
    ]
  },
  {
    "id": "vengeful-spirit",
    "numericId": 20,
    "name": "Vengeful Spirit",
    "shortName": "vengefulspirit",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Initiator",
      "Disabler",
      "Nuker",
      "Escape"
    ],
    "overallWin": 0.532,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.539,
      "crusader": 0.539,
      "archon": 0.536,
      "legend": 0.531,
      "ancient": 0.525,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 12379,
      "guardian": 44053,
      "crusader": 75561,
      "archon": 103929,
      "legend": 104654,
      "ancient": 66637,
      "divine": 40460
    },
    "counters": [
      "slardar",
      "legion-commander",
      "lich",
      "medusa",
      "underlord",
      "lina"
    ],
    "weakAgainst": [
      "dawnbreaker",
      "phoenix",
      "tusk",
      "beastmaster",
      "lifestealer",
      "marci"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Circlet",
      "Magic Stick",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Specialist's Array",
      "Broadsword",
      "Staff of Wizardry",
      "Ogre Axe"
    ]
  },
  {
    "id": "venomancer",
    "numericId": 40,
    "name": "Venomancer",
    "shortName": "venomancer",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Initiator",
      "Pusher",
      "Disabler"
    ],
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.479,
      "crusader": 0.477,
      "archon": 0.478,
      "legend": 0.471,
      "ancient": 0.468,
      "divine": 0.463
    },
    "pickByBracket": {
      "herald": 10763,
      "guardian": 35201,
      "crusader": 55314,
      "archon": 68000,
      "legend": 59624,
      "ancient": 33457,
      "divine": 18575
    },
    "counters": [
      "dragon-knight",
      "clockwerk",
      "dawnbreaker",
      "weaver",
      "warlock",
      "tusk"
    ],
    "weakAgainst": [
      "ember-spirit",
      "invoker",
      "pudge",
      "batrider",
      "doom",
      "queen-of-pain"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Staff of Wizardry",
      "Diadem",
      "Spirit Vessel",
      "Mekansm"
    ]
  },
  {
    "id": "viper",
    "numericId": 47,
    "name": "Viper",
    "shortName": "viper",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Durable",
      "Initiator",
      "Disabler"
    ],
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.477,
      "crusader": 0.484,
      "archon": 0.48,
      "legend": 0.485,
      "ancient": 0.487,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 18928,
      "guardian": 46321,
      "crusader": 59765,
      "archon": 65371,
      "legend": 55256,
      "ancient": 31073,
      "divine": 20248
    },
    "counters": [
      "bristleback",
      "ancient-apparition",
      "silencer",
      "morphling",
      "dragon-knight",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "techies",
      "bane",
      "dazzle",
      "slardar",
      "lina",
      "treant-protector"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Slippers of Agility"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Dragon Lance",
      "Staff of Wizardry",
      "Force Staff",
      "Hurricane Pike"
    ]
  },
  {
    "id": "visage",
    "numericId": 92,
    "name": "Visage",
    "shortName": "visage",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Durable",
      "Disabler",
      "Pusher"
    ],
    "overallWin": 0.53,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.506,
      "crusader": 0.524,
      "archon": 0.525,
      "legend": 0.538,
      "ancient": 0.55,
      "divine": 0.551
    },
    "pickByBracket": {
      "herald": 1968,
      "guardian": 6202,
      "crusader": 9588,
      "archon": 10992,
      "legend": 10444,
      "ancient": 7050,
      "divine": 7446
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Enchanted Mango",
      "Faerie Fire",
      "Magic Stick"
    ],
    "coreItems": [
      "Drum of Endurance",
      "Ring of Tarrasque",
      "Vladmir's Offering",
      "Aghanim's Shard",
      "Boots of Bearing"
    ]
  },
  {
    "id": "void-spirit",
    "numericId": 126,
    "name": "Void Spirit",
    "shortName": "void_spirit",
    "primaryAttr": "all",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.483,
      "crusader": 0.492,
      "archon": 0.495,
      "legend": 0.504,
      "ancient": 0.5,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 4689,
      "guardian": 14409,
      "crusader": 24072,
      "archon": 33828,
      "legend": 36794,
      "ancient": 28580,
      "divine": 25123
    },
    "counters": [
      "zeus",
      "sven",
      "weaver",
      "shadow-shaman",
      "earthshaker",
      "leshrac"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "lycan",
      "necrophos",
      "phoenix",
      "treant-protector",
      "alchemist"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Quelling Blade",
      "Circlet"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Spirit Vessel",
      "Aghanim's Shard",
      "Ogre Axe",
      "Diadem"
    ]
  },
  {
    "id": "warlock",
    "numericId": 37,
    "name": "Warlock",
    "shortName": "warlock",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Initiator",
      "Disabler"
    ],
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.504,
      "crusader": 0.504,
      "archon": 0.494,
      "legend": 0.49,
      "ancient": 0.477,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 7787,
      "guardian": 27452,
      "crusader": 44353,
      "archon": 55061,
      "legend": 49075,
      "ancient": 27966,
      "divine": 15748
    },
    "counters": [
      "sand-king",
      "grimstroke",
      "ancient-apparition",
      "troll-warlord",
      "dark-willow",
      "axe"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "treant-protector",
      "slark",
      "venomancer",
      "pudge",
      "dazzle"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Magic Stick",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Glimmer Cape",
      "Aghanim's Shard",
      "Staff of Wizardry",
      "Pavise"
    ]
  },
  {
    "id": "weaver",
    "numericId": 63,
    "name": "Weaver",
    "shortName": "weaver",
    "primaryAttr": "agi",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape"
    ],
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.476,
      "crusader": 0.473,
      "archon": 0.476,
      "legend": 0.473,
      "ancient": 0.469,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 10591,
      "guardian": 27568,
      "crusader": 37946,
      "archon": 43841,
      "legend": 39447,
      "ancient": 23262,
      "divine": 16418
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
  },
  {
    "id": "windranger",
    "numericId": 21,
    "name": "Windranger",
    "shortName": "windrunner",
    "primaryAttr": "all",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Support",
      "Disabler",
      "Escape",
      "Nuker"
    ],
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.485,
      "crusader": 0.487,
      "archon": 0.482,
      "legend": 0.488,
      "ancient": 0.489,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 20446,
      "guardian": 66807,
      "crusader": 109815,
      "archon": 148086,
      "legend": 152890,
      "ancient": 105237,
      "divine": 81960
    },
    "counters": [
      "grimstroke",
      "morphling",
      "chaos-knight",
      "oracle",
      "phantom-lancer",
      "necrophos"
    ],
    "weakAgainst": [
      "treant-protector",
      "enigma",
      "lone-druid",
      "bane",
      "dazzle",
      "ember-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Blood Grenade"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Maelstrom",
      "Ogre Axe",
      "Essence Distiller",
      "Blink Dagger"
    ]
  },
  {
    "id": "winter-wyvern",
    "numericId": 112,
    "name": "Winter Wyvern",
    "shortName": "winter_wyvern",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker"
    ],
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.488,
      "crusader": 0.495,
      "archon": 0.496,
      "legend": 0.503,
      "ancient": 0.506,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 7483,
      "guardian": 27633,
      "crusader": 47431,
      "archon": 65135,
      "legend": 68696,
      "ancient": 50977,
      "divine": 51870
    },
    "counters": [
      "underlord",
      "dark-willow",
      "void-spirit",
      "centaur-warrunner",
      "undying",
      "clockwerk"
    ],
    "weakAgainst": [
      "ogre-magi",
      "snapfire",
      "axe",
      "doom",
      "beastmaster",
      "jakiro"
    ],
    "startItems": [
      "Iron Branch",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Tango",
      "Blood Grenade",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Blink Dagger",
      "Arcane Boots",
      "Power Treads",
      "Staff of Wizardry",
      "Glimmer Cape"
    ]
  },
  {
    "id": "witch-doctor",
    "numericId": 30,
    "name": "Witch Doctor",
    "shortName": "witch_doctor",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler"
    ],
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.529,
      "crusader": 0.527,
      "archon": 0.525,
      "legend": 0.518,
      "ancient": 0.512,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 20166,
      "guardian": 70363,
      "crusader": 117131,
      "archon": 149914,
      "legend": 134664,
      "ancient": 76192,
      "divine": 40485
    },
    "counters": [
      "tidehunter",
      "undying",
      "lich",
      "vengeful-spirit",
      "tiny",
      "zeus"
    ],
    "weakAgainst": [
      "ember-spirit",
      "sniper",
      "necrophos",
      "lifestealer",
      "snapfire",
      "timbersaw"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Smoke of Deceit",
      "Observer and Sentry Wards",
      "Faerie Fire"
    ],
    "coreItems": [
      "Arcane Boots",
      "Glimmer Cape",
      "Mekansm",
      "Blink Dagger",
      "Staff of Wizardry"
    ]
  },
  {
    "id": "wraith-king",
    "numericId": 42,
    "name": "Wraith King",
    "shortName": "skeleton_king",
    "primaryAttr": "str",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Support",
      "Durable",
      "Disabler",
      "Initiator"
    ],
    "overallWin": 0.547,
    "winByBracket": {
      "herald": 0.558,
      "guardian": 0.561,
      "crusader": 0.556,
      "archon": 0.55,
      "legend": 0.539,
      "ancient": 0.533,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 15031,
      "guardian": 51739,
      "crusader": 87000,
      "archon": 112435,
      "legend": 103806,
      "ancient": 59380,
      "divine": 28829
    },
    "counters": [
      "zeus",
      "abaddon",
      "templar-assassin",
      "lion",
      "silencer",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "earthshaker",
      "pudge",
      "snapfire",
      "invoker",
      "crystal-maiden",
      "spirit-breaker"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Tango",
      "Gauntlets of Strength",
      "Magic Stick",
      "Circlet"
    ],
    "coreItems": [
      "Talisman of Evasion",
      "Sacred Relic",
      "Radiance",
      "Mithril Hammer",
      "Blink Dagger"
    ]
  },
  {
    "id": "zeus",
    "numericId": 22,
    "name": "Zeus",
    "shortName": "zuus",
    "primaryAttr": "int",
    "attackType": "Ranged",
    "roles": [
      "Nuker",
      "Carry"
    ],
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.501,
      "crusader": 0.504,
      "archon": 0.5,
      "legend": 0.499,
      "ancient": 0.497,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 18196,
      "guardian": 58405,
      "crusader": 95257,
      "archon": 123287,
      "legend": 119228,
      "ancient": 75087,
      "divine": 49871
    },
    "counters": [
      "medusa",
      "vengeful-spirit",
      "slardar",
      "faceless-void",
      "nature-s-prophet",
      "shadow-demon"
    ],
    "weakAgainst": [
      "juggernaut",
      "void-spirit",
      "wraith-king",
      "beastmaster",
      "keeper-of-the-light",
      "night-stalker"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Enchanted Mango",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Point Booster",
      "Blade of Alacrity",
      "Aghanim's Scepter"
    ]
  }
];

export const HERO_DATA_BY_ID: Record<string, HeroData> = Object.fromEntries(
  HERO_DATA.map((h) => [h.id, h]),
);
