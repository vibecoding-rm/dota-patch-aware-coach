// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-08-06
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
      "herald": 0.501,
      "guardian": 0.517,
      "crusader": 0.515,
      "archon": 0.517,
      "legend": 0.511,
      "ancient": 0.513,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 6449,
      "guardian": 18621,
      "crusader": 27768,
      "archon": 32917,
      "legend": 28855,
      "ancient": 17787,
      "divine": 13903
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.485,
      "crusader": 0.471,
      "archon": 0.474,
      "legend": 0.469,
      "ancient": 0.465,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 5728,
      "guardian": 17555,
      "crusader": 27007,
      "archon": 31186,
      "legend": 26170,
      "ancient": 15630,
      "divine": 12095
    },
    "counters": [
      "ring-master",
      "lifestealer",
      "ursa",
      "void-spirit",
      "sand-king",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "storm-spirit",
      "luna",
      "warlock",
      "monkey-king",
      "doom",
      "skywrath-mage"
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
      "Blade of Alacrity",
      "Sacred Relic"
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
      "herald": 0.513,
      "guardian": 0.525,
      "crusader": 0.525,
      "archon": 0.521,
      "legend": 0.519,
      "ancient": 0.514,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 9717,
      "guardian": 31788,
      "crusader": 51151,
      "archon": 61443,
      "legend": 53072,
      "ancient": 32768,
      "divine": 25086
    },
    "counters": [
      "mars",
      "disruptor",
      "hoodwink",
      "pugna",
      "tiny",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "underlord",
      "clinkz",
      "spirit-breaker",
      "tusk",
      "viper",
      "largo"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.501,
      "crusader": 0.498,
      "archon": 0.501,
      "legend": 0.499,
      "ancient": 0.497,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 20575,
      "guardian": 65146,
      "crusader": 95645,
      "archon": 103845,
      "legend": 81074,
      "ancient": 45170,
      "divine": 33697
    },
    "counters": [
      "silencer",
      "lich",
      "dragon-knight",
      "mars",
      "doom",
      "disruptor"
    ],
    "weakAgainst": [
      "timbersaw",
      "ember-spirit",
      "morphling",
      "ogre-magi",
      "jakiro",
      "templar-assassin"
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.513,
      "crusader": 0.51,
      "archon": 0.522,
      "legend": 0.531,
      "ancient": 0.536,
      "divine": 0.531
    },
    "pickByBracket": {
      "herald": 6129,
      "guardian": 19439,
      "crusader": 28796,
      "archon": 30819,
      "legend": 24830,
      "ancient": 14973,
      "divine": 13426
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.518,
      "crusader": 0.509,
      "archon": 0.502,
      "legend": 0.495,
      "ancient": 0.492,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 23881,
      "guardian": 81706,
      "crusader": 127565,
      "archon": 153603,
      "legend": 134672,
      "ancient": 84469,
      "divine": 73221
    },
    "counters": [
      "morphling",
      "death-prophet",
      "terrorblade",
      "winter-wyvern",
      "techies",
      "pangolier"
    ],
    "weakAgainst": [
      "bane",
      "lycan",
      "chen",
      "huskar",
      "monkey-king",
      "abaddon"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Ring of Protection",
      "Tango",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Blade Mail",
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.482,
      "crusader": 0.483,
      "archon": 0.492,
      "legend": 0.502,
      "ancient": 0.51,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 5829,
      "guardian": 18428,
      "crusader": 27043,
      "archon": 30872,
      "legend": 27543,
      "ancient": 18979,
      "divine": 23848
    },
    "counters": [
      "axe",
      "tiny",
      "earthshaker",
      "dawnbreaker",
      "templar-assassin",
      "techies"
    ],
    "weakAgainst": [
      "monkey-king",
      "skywrath-mage",
      "mars",
      "beastmaster",
      "lich",
      "storm-spirit"
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
      "Point Booster",
      "Glimmer Cape",
      "Ogre Axe"
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
    "overallWin": 0.436,
    "winByBracket": {
      "herald": 0.427,
      "guardian": 0.429,
      "crusader": 0.436,
      "archon": 0.425,
      "legend": 0.439,
      "ancient": 0.437,
      "divine": 0.458
    },
    "pickByBracket": {
      "herald": 1885,
      "guardian": 5729,
      "crusader": 8728,
      "archon": 9526,
      "legend": 8068,
      "ancient": 5292,
      "divine": 6183
    },
    "counters": [
      "crystal-maiden",
      "bristleback",
      "beastmaster",
      "grimstroke",
      "pudge",
      "sand-king"
    ],
    "weakAgainst": [
      "oracle",
      "chen",
      "monkey-king",
      "ember-spirit",
      "bane",
      "nyx-assassin"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Circlet",
      "Tango",
      "Observer and Sentry Wards",
      "Magic Stick"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Mithril Hammer",
      "Drum of Endurance",
      "Ring of Tarrasque"
    ]
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
    "overallWin": 0.445,
    "winByBracket": {
      "herald": 0.447,
      "guardian": 0.443,
      "crusader": 0.438,
      "archon": 0.436,
      "legend": 0.447,
      "ancient": 0.446,
      "divine": 0.471
    },
    "pickByBracket": {
      "herald": 4794,
      "guardian": 13691,
      "crusader": 20542,
      "archon": 22041,
      "legend": 18168,
      "ancient": 11466,
      "divine": 13893
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.511,
      "crusader": 0.519,
      "archon": 0.528,
      "legend": 0.52,
      "ancient": 0.523,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 12703,
      "guardian": 28690,
      "crusader": 31527,
      "archon": 28472,
      "legend": 20012,
      "ancient": 10718,
      "divine": 7423
    },
    "counters": [],
    "weakAgainst": [
      "pangolier"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.493,
      "crusader": 0.503,
      "archon": 0.514,
      "legend": 0.525,
      "ancient": 0.541,
      "divine": 0.555
    },
    "pickByBracket": {
      "herald": 8218,
      "guardian": 23119,
      "crusader": 31971,
      "archon": 35216,
      "legend": 30469,
      "ancient": 21309,
      "divine": 24961
    },
    "counters": [
      "dragon-knight",
      "snapfire",
      "timbersaw",
      "queen-of-pain",
      "ursa",
      "warlock"
    ],
    "weakAgainst": [
      "ember-spirit",
      "chen",
      "hoodwink"
    ],
    "startItems": [
      "Observer and Sentry Wards",
      "Iron Branch",
      "Blood Grenade",
      "Tango",
      "Sentry Ward",
      "Boots of Speed"
    ],
    "coreItems": [
      "Drum of Endurance",
      "Staff of Wizardry",
      "Ring of Tarrasque",
      "Diadem",
      "Spirit Vessel"
    ]
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.483,
      "crusader": 0.501,
      "archon": 0.498,
      "legend": 0.517,
      "ancient": 0.509,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 2191,
      "guardian": 6325,
      "crusader": 9237,
      "archon": 11394,
      "legend": 11134,
      "ancient": 8410,
      "divine": 11065
    },
    "counters": [
      "centaur-warrunner",
      "void-spirit",
      "warlock",
      "timbersaw",
      "slardar",
      "tidehunter"
    ],
    "weakAgainst": [
      "bristleback",
      "rubick",
      "treant-protector",
      "beastmaster",
      "largo",
      "puck"
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
      "Point Booster",
      "Blade of Alacrity",
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.54,
      "guardian": 0.512,
      "crusader": 0.493,
      "archon": 0.481,
      "legend": 0.474,
      "ancient": 0.467,
      "divine": 0.459
    },
    "pickByBracket": {
      "herald": 20281,
      "guardian": 55866,
      "crusader": 66961,
      "archon": 62787,
      "legend": 43198,
      "ancient": 22848,
      "divine": 16806
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.499,
      "crusader": 0.503,
      "archon": 0.506,
      "legend": 0.504,
      "ancient": 0.508,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 5798,
      "guardian": 14139,
      "crusader": 17056,
      "archon": 15559,
      "legend": 11520,
      "ancient": 6445,
      "divine": 6287
    },
    "counters": [
      "disruptor",
      "tusk",
      "snapfire",
      "hoodwink",
      "rubick"
    ],
    "weakAgainst": [
      "jakiro"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Quelling Blade",
      "Slippers of Agility",
      "Faerie Fire"
    ],
    "coreItems": [
      "Diadem",
      "Manta Style",
      "Yasha",
      "Blade of Alacrity",
      "Claymore"
    ]
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.514,
      "crusader": 0.508,
      "archon": 0.51,
      "legend": 0.502,
      "ancient": 0.502,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 7317,
      "guardian": 28457,
      "crusader": 51177,
      "archon": 68794,
      "legend": 66028,
      "ancient": 43358,
      "divine": 40486
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.523,
      "crusader": 0.519,
      "archon": 0.517,
      "legend": 0.516,
      "ancient": 0.515,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 10705,
      "guardian": 29797,
      "crusader": 37544,
      "archon": 36965,
      "legend": 26978,
      "ancient": 15043,
      "divine": 10911
    },
    "counters": [
      "ember-spirit",
      "nature-s-prophet",
      "templar-assassin",
      "dragon-knight",
      "ursa",
      "tiny"
    ],
    "weakAgainst": [
      "jakiro",
      "mars",
      "windranger",
      "invoker",
      "disruptor",
      "queen-of-pain"
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
      "herald": 0.465,
      "guardian": 0.434,
      "crusader": 0.423,
      "archon": 0.445,
      "legend": 0.46,
      "ancient": 0.449,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 862,
      "guardian": 2147,
      "crusader": 2929,
      "archon": 3334,
      "legend": 2781,
      "ancient": 1785,
      "divine": 2233
    },
    "counters": [
      "ursa",
      "storm-spirit",
      "ring-master",
      "bristleback",
      "queen-of-pain",
      "axe"
    ],
    "weakAgainst": [
      "abaddon",
      "nature-s-prophet"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.493,
      "crusader": 0.488,
      "archon": 0.498,
      "legend": 0.504,
      "ancient": 0.51,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 12605,
      "guardian": 30926,
      "crusader": 36114,
      "archon": 36969,
      "legend": 29411,
      "ancient": 19080,
      "divine": 19897
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.477,
      "crusader": 0.475,
      "archon": 0.476,
      "legend": 0.478,
      "ancient": 0.484,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 3650,
      "guardian": 12442,
      "crusader": 20200,
      "archon": 26520,
      "legend": 26286,
      "ancient": 19352,
      "divine": 23761
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.538,
      "guardian": 0.527,
      "crusader": 0.523,
      "archon": 0.516,
      "legend": 0.507,
      "ancient": 0.505,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 22969,
      "guardian": 70340,
      "crusader": 96606,
      "archon": 105956,
      "legend": 87533,
      "ancient": 53998,
      "divine": 43630
    },
    "counters": [
      "pugna",
      "sniper",
      "necrophos",
      "legion-commander",
      "luna",
      "underlord"
    ],
    "weakAgainst": [
      "razor",
      "batrider",
      "kunkka",
      "mirana",
      "techies",
      "puck"
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
      "Glimmer Cape",
      "Staff of Wizardry",
      "Drum of Endurance"
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.491,
      "crusader": 0.487,
      "archon": 0.486,
      "legend": 0.489,
      "ancient": 0.495,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 3759,
      "guardian": 12158,
      "crusader": 18166,
      "archon": 22331,
      "legend": 21515,
      "ancient": 16367,
      "divine": 21427
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.474,
      "crusader": 0.474,
      "archon": 0.484,
      "legend": 0.488,
      "ancient": 0.494,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 8077,
      "guardian": 22784,
      "crusader": 31985,
      "archon": 38322,
      "legend": 34262,
      "ancient": 23755,
      "divine": 27475
    },
    "counters": [
      "witch-doctor",
      "weaver",
      "luna",
      "templar-assassin",
      "skywrath-mage",
      "zeus"
    ],
    "weakAgainst": [
      "treant-protector",
      "nyx-assassin",
      "pugna",
      "lifestealer",
      "ember-spirit",
      "dazzle"
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
      "Essence Distiller",
      "Staff of Wizardry",
      "Blink Dagger",
      "Eul's Scepter of Divinity",
      "Aghanim's Shard"
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.517,
      "crusader": 0.521,
      "archon": 0.52,
      "legend": 0.521,
      "ancient": 0.521,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 8331,
      "guardian": 28259,
      "crusader": 50050,
      "archon": 68933,
      "legend": 71784,
      "ancient": 50907,
      "divine": 55836
    },
    "counters": [
      "vengeful-spirit",
      "medusa",
      "death-prophet",
      "terrorblade",
      "earthshaker",
      "underlord"
    ],
    "weakAgainst": [
      "treant-protector",
      "bane",
      "morphling",
      "lycan",
      "alchemist",
      "lone-druid"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Magic Stick",
      "Tango",
      "Circlet",
      "Quelling Blade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Broadsword",
      "Echo Sabre",
      "Mithril Hammer",
      "Aghanim's Shard"
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
      "herald": 0.49,
      "guardian": 0.493,
      "crusader": 0.503,
      "archon": 0.514,
      "legend": 0.517,
      "ancient": 0.521,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 7487,
      "guardian": 24771,
      "crusader": 36875,
      "archon": 39991,
      "legend": 31615,
      "ancient": 18566,
      "divine": 14594
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.486,
      "crusader": 0.483,
      "archon": 0.486,
      "legend": 0.492,
      "ancient": 0.489,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 9243,
      "guardian": 21223,
      "crusader": 27199,
      "archon": 30507,
      "legend": 26127,
      "ancient": 17386,
      "divine": 17419
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.49,
      "crusader": 0.495,
      "archon": 0.498,
      "legend": 0.498,
      "ancient": 0.504,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 6498,
      "guardian": 25455,
      "crusader": 44648,
      "archon": 61267,
      "legend": 60396,
      "ancient": 42011,
      "divine": 41756
    },
    "counters": [
      "chaos-knight",
      "phantom-assassin",
      "sven",
      "muerta",
      "outworld-devourer",
      "phantom-lancer"
    ],
    "weakAgainst": [
      "broodmother",
      "io",
      "kez",
      "chen",
      "treant-protector",
      "drow-ranger"
    ],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.467,
    "winByBracket": {
      "herald": 0.437,
      "guardian": 0.448,
      "crusader": 0.458,
      "archon": 0.464,
      "legend": 0.467,
      "ancient": 0.474,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 5769,
      "guardian": 18757,
      "crusader": 30099,
      "archon": 39263,
      "legend": 38976,
      "ancient": 28227,
      "divine": 32189
    },
    "counters": [
      "lifestealer",
      "razor",
      "gyrocopter",
      "phoenix",
      "venomancer",
      "pangolier"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "shadow-demon",
      "treant-protector",
      "bane",
      "largo",
      "abaddon"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Circlet",
      "Tango",
      "Magic Stick",
      "Quelling Blade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blink Dagger",
      "Mithril Hammer",
      "Sacred Relic",
      "Radiance"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.506,
      "crusader": 0.505,
      "archon": 0.498,
      "legend": 0.504,
      "ancient": 0.491,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 7825,
      "guardian": 22443,
      "crusader": 30587,
      "archon": 32071,
      "legend": 23461,
      "ancient": 13040,
      "divine": 8089
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.469,
      "crusader": 0.464,
      "archon": 0.464,
      "legend": 0.461,
      "ancient": 0.456,
      "divine": 0.458
    },
    "pickByBracket": {
      "herald": 25174,
      "guardian": 71881,
      "crusader": 102292,
      "archon": 116092,
      "legend": 98076,
      "ancient": 60726,
      "divine": 52027
    },
    "counters": [
      "underlord",
      "kez",
      "disruptor",
      "bristleback",
      "spirit-breaker",
      "zeus"
    ],
    "weakAgainst": [
      "dragon-knight",
      "treant-protector",
      "warlock",
      "slardar",
      "largo",
      "queen-of-pain"
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
      "Staff of Wizardry",
      "Dragon Lance",
      "Yasha",
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.459,
      "guardian": 0.481,
      "crusader": 0.484,
      "archon": 0.49,
      "legend": 0.499,
      "ancient": 0.506,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 3296,
      "guardian": 12805,
      "crusader": 25329,
      "archon": 37317,
      "legend": 41477,
      "ancient": 33615,
      "divine": 43242
    },
    "counters": [
      "timbersaw",
      "rubick",
      "lion",
      "pudge",
      "lina",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "ring-master",
      "ember-spirit",
      "puck",
      "gyrocopter",
      "snapfire",
      "warlock"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Circlet",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Ogre Axe",
      "Mithril Hammer",
      "Spirit Vessel",
      "Black King Bar",
      "Staff of Wizardry"
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.499,
      "crusader": 0.502,
      "archon": 0.503,
      "legend": 0.509,
      "ancient": 0.512,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 21255,
      "guardian": 65074,
      "crusader": 97517,
      "archon": 116318,
      "legend": 105199,
      "ancient": 68089,
      "divine": 59020
    },
    "counters": [
      "sven",
      "primal-beast",
      "wraith-king",
      "sniper",
      "faceless-void",
      "axe"
    ],
    "weakAgainst": [
      "monkey-king",
      "bane",
      "enchantress",
      "void-spirit",
      "dawnbreaker",
      "spirit-breaker"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Circlet",
      "Observer and Sentry Wards",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Blink Dagger",
      "Staff of Wizardry",
      "Aghanim's Shard",
      "Blade of Alacrity",
      "Kaya"
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.479,
      "crusader": 0.491,
      "archon": 0.51,
      "legend": 0.515,
      "ancient": 0.539,
      "divine": 0.541
    },
    "pickByBracket": {
      "herald": 1947,
      "guardian": 5451,
      "crusader": 7565,
      "archon": 8155,
      "legend": 6652,
      "ancient": 4548,
      "divine": 5538
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.447,
      "guardian": 0.462,
      "crusader": 0.475,
      "archon": 0.49,
      "legend": 0.498,
      "ancient": 0.504,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 6053,
      "guardian": 19916,
      "crusader": 33841,
      "archon": 46984,
      "legend": 50114,
      "ancient": 38086,
      "divine": 48797
    },
    "counters": [
      "witch-doctor",
      "dark-seer",
      "venomancer",
      "void-spirit",
      "winter-wyvern",
      "sniper"
    ],
    "weakAgainst": [
      "clinkz",
      "bane",
      "io",
      "treant-protector",
      "alchemist",
      "chaos-knight"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Quelling Blade",
      "Mantle of Intelligence"
    ],
    "coreItems": [
      "Spirit Vessel",
      "Ogre Axe",
      "Diadem",
      "Perseverance",
      "Mage Slayer"
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.485,
      "crusader": 0.477,
      "archon": 0.472,
      "legend": 0.475,
      "ancient": 0.478,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 7010,
      "guardian": 16427,
      "crusader": 17922,
      "archon": 17737,
      "legend": 14009,
      "ancient": 9437,
      "divine": 10208
    },
    "counters": [
      "earthshaker",
      "ursa",
      "clockwerk",
      "lifestealer",
      "disruptor",
      "invoker"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "marci",
      "juggernaut",
      "slardar",
      "gyrocopter",
      "leshrac"
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
      "Drum of Endurance",
      "Staff of Wizardry",
      "Power Treads",
      "Blade of Alacrity",
      "Ogre Axe"
    ]
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.491,
      "crusader": 0.494,
      "archon": 0.502,
      "legend": 0.515,
      "ancient": 0.535,
      "divine": 0.562
    },
    "pickByBracket": {
      "herald": 6515,
      "guardian": 19399,
      "crusader": 27172,
      "archon": 28237,
      "legend": 22231,
      "ancient": 14320,
      "divine": 15983
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Magic Stick",
      "Magic Wand",
      "Circlet"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.489,
      "crusader": 0.488,
      "archon": 0.489,
      "legend": 0.495,
      "ancient": 0.496,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 14327,
      "guardian": 46771,
      "crusader": 69746,
      "archon": 80269,
      "legend": 68386,
      "ancient": 42208,
      "divine": 36795
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.503,
      "guardian": 0.509,
      "crusader": 0.513,
      "archon": 0.514,
      "legend": 0.515,
      "ancient": 0.521,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 6506,
      "guardian": 23387,
      "crusader": 40650,
      "archon": 52146,
      "legend": 49452,
      "ancient": 34614,
      "divine": 34140
    },
    "counters": [
      "templar-assassin",
      "muerta",
      "ring-master",
      "beastmaster",
      "skywrath-mage",
      "tidehunter"
    ],
    "weakAgainst": [
      "sniper",
      "windranger",
      "slardar",
      "shadow-shaman",
      "batrider",
      "monkey-king"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Magic Stick"
    ],
    "coreItems": [
      "Arcane Boots",
      "Blink Dagger",
      "Staff of Wizardry",
      "Point Booster",
      "Ogre Axe"
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
    "overallWin": 0.447,
    "winByBracket": {
      "herald": 0.438,
      "guardian": 0.44,
      "crusader": 0.451,
      "archon": 0.448,
      "legend": 0.449,
      "ancient": 0.447,
      "divine": 0.447
    },
    "pickByBracket": {
      "herald": 4244,
      "guardian": 12569,
      "crusader": 19785,
      "archon": 24936,
      "legend": 22529,
      "ancient": 14160,
      "divine": 11793
    },
    "counters": [
      "sven",
      "templar-assassin",
      "earthshaker",
      "troll-warlord",
      "lion",
      "luna"
    ],
    "weakAgainst": [
      "treant-protector",
      "razor",
      "keeper-of-the-light",
      "ember-spirit",
      "shadow-demon",
      "clinkz"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Magic Stick",
      "Magic Wand",
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.473,
      "crusader": 0.478,
      "archon": 0.475,
      "legend": 0.475,
      "ancient": 0.478,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 13985,
      "guardian": 43357,
      "crusader": 65363,
      "archon": 78341,
      "legend": 70074,
      "ancient": 45955,
      "divine": 50257
    },
    "counters": [
      "underlord",
      "death-prophet",
      "phantom-lancer",
      "huskar",
      "drow-ranger",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "naga-siren",
      "keeper-of-the-light",
      "lycan",
      "kunkka",
      "treant-protector",
      "broodmother"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Blood Grenade",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Essence Distiller",
      "Staff of Wizardry",
      "Aghanim's Shard",
      "Blink Dagger"
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
    "overallWin": 0.451,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.443,
      "crusader": 0.446,
      "archon": 0.451,
      "legend": 0.455,
      "ancient": 0.461,
      "divine": 0.454
    },
    "pickByBracket": {
      "herald": 11513,
      "guardian": 24267,
      "crusader": 27368,
      "archon": 26813,
      "legend": 20827,
      "ancient": 13018,
      "divine": 11927
    },
    "counters": [
      "silencer",
      "storm-spirit",
      "tidehunter",
      "axe",
      "spirit-breaker",
      "razor"
    ],
    "weakAgainst": [
      "hoodwink",
      "nature-s-prophet",
      "marci",
      "shadow-shaman",
      "beastmaster",
      "abaddon"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Faerie Fire",
      "Iron Branch",
      "Observer Ward",
      "Tango",
      "Magic Stick"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blade of Alacrity",
      "Mithril Hammer",
      "Blink Dagger",
      "Black King Bar"
    ]
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.499,
      "crusader": 0.499,
      "archon": 0.501,
      "legend": 0.508,
      "ancient": 0.512,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 18956,
      "guardian": 68213,
      "crusader": 116397,
      "archon": 150668,
      "legend": 141761,
      "ancient": 96168,
      "divine": 92699
    },
    "counters": [
      "troll-warlord",
      "weaver",
      "lina",
      "outworld-devourer",
      "chaos-knight",
      "ring-master"
    ],
    "weakAgainst": [
      "treant-protector",
      "tinker",
      "nyx-assassin",
      "oracle",
      "monkey-king",
      "puck"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Faerie Fire",
      "Tango",
      "Observer Ward",
      "Mantle of Intelligence"
    ],
    "coreItems": [
      "Boots of Travel",
      "Aghanim's Shard",
      "Ogre Axe",
      "Mithril Hammer",
      "Meteor Hammer"
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.502,
      "crusader": 0.501,
      "archon": 0.501,
      "legend": 0.511,
      "ancient": 0.516,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 6482,
      "guardian": 20482,
      "crusader": 31783,
      "archon": 36247,
      "legend": 31395,
      "ancient": 21142,
      "divine": 23782
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.497,
      "crusader": 0.492,
      "archon": 0.481,
      "legend": 0.476,
      "ancient": 0.471,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 14355,
      "guardian": 46217,
      "crusader": 69948,
      "archon": 82787,
      "legend": 69578,
      "ancient": 40598,
      "divine": 30209
    },
    "counters": [
      "chaos-knight",
      "weaver",
      "broodmother",
      "tinker",
      "anti-mage",
      "winter-wyvern"
    ],
    "weakAgainst": [
      "lone-druid",
      "treant-protector",
      "enigma",
      "io",
      "clinkz",
      "outworld-devourer"
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
      "Staff of Wizardry",
      "Glimmer Cape",
      "Eul's Scepter of Divinity",
      "Aghanim's Shard"
    ]
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.511,
      "crusader": 0.517,
      "archon": 0.519,
      "legend": 0.522,
      "ancient": 0.523,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 23936,
      "guardian": 75243,
      "crusader": 112067,
      "archon": 132626,
      "legend": 115523,
      "ancient": 69861,
      "divine": 53688
    },
    "counters": [
      "zeus",
      "magnus",
      "beastmaster",
      "pangolier",
      "faceless-void",
      "techies"
    ],
    "weakAgainst": [
      "abaddon",
      "sniper",
      "venomancer",
      "kez",
      "snapfire",
      "timbersaw"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.481,
      "crusader": 0.494,
      "archon": 0.494,
      "legend": 0.503,
      "ancient": 0.513,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 10326,
      "guardian": 32110,
      "crusader": 46280,
      "archon": 51623,
      "legend": 45910,
      "ancient": 31346,
      "divine": 37877
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.436,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.444,
      "crusader": 0.437,
      "archon": 0.44,
      "legend": 0.426,
      "ancient": 0.437,
      "divine": 0.433
    },
    "pickByBracket": {
      "herald": 7076,
      "guardian": 19671,
      "crusader": 29481,
      "archon": 35019,
      "legend": 31956,
      "ancient": 22041,
      "divine": 24845
    },
    "counters": [
      "disruptor",
      "lich",
      "tiny",
      "lifestealer",
      "underlord",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "treant-protector",
      "largo",
      "drow-ranger",
      "windranger",
      "ember-spirit"
    ],
    "startItems": [
      "Faerie Fire",
      "Iron Branch",
      "Tango",
      "Magic Wand",
      "Circlet",
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
      "herald": 0.496,
      "guardian": 0.487,
      "crusader": 0.489,
      "archon": 0.498,
      "legend": 0.499,
      "ancient": 0.498,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 7260,
      "guardian": 20863,
      "crusader": 30709,
      "archon": 38402,
      "legend": 36108,
      "ancient": 23266,
      "divine": 19902
    },
    "counters": [
      "bristleback",
      "hoodwink",
      "crystal-maiden",
      "tiny",
      "skywrath-mage",
      "lina"
    ],
    "weakAgainst": [
      "necrophos",
      "shadow-shaman",
      "templar-assassin",
      "shadow-demon",
      "storm-spirit",
      "underlord"
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
      "Point Booster",
      "Claymore",
      "Blade of Alacrity",
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.461,
      "guardian": 0.466,
      "crusader": 0.473,
      "archon": 0.482,
      "legend": 0.479,
      "ancient": 0.483,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 2254,
      "guardian": 6339,
      "crusader": 10497,
      "archon": 13889,
      "legend": 13404,
      "ancient": 9783,
      "divine": 12212
    },
    "counters": [
      "silencer",
      "pangolier",
      "queen-of-pain",
      "primal-beast",
      "pudge",
      "timbersaw"
    ],
    "weakAgainst": [
      "sniper",
      "treant-protector",
      "beastmaster",
      "clinkz",
      "shadow-demon",
      "batrider"
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
      "Kaya",
      "Ogre Axe",
      "Aghanim's Shard",
      "Meteor Hammer"
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
    "overallWin": 0.531,
    "winByBracket": {
      "herald": 0.53,
      "guardian": 0.531,
      "crusader": 0.532,
      "archon": 0.531,
      "legend": 0.532,
      "ancient": 0.532,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 19550,
      "guardian": 67914,
      "crusader": 105156,
      "archon": 123061,
      "legend": 101283,
      "ancient": 59343,
      "divine": 43710
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.509,
      "crusader": 0.505,
      "archon": 0.515,
      "legend": 0.522,
      "ancient": 0.52,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 3595,
      "guardian": 10864,
      "crusader": 16660,
      "archon": 19645,
      "legend": 18513,
      "ancient": 12444,
      "divine": 13105
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.525,
      "guardian": 0.526,
      "crusader": 0.528,
      "archon": 0.528,
      "legend": 0.528,
      "ancient": 0.523,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 13447,
      "guardian": 43444,
      "crusader": 67198,
      "archon": 85409,
      "legend": 81978,
      "ancient": 54786,
      "divine": 51810
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Smoke of Deceit",
      "Observer and Sentry Wards",
      "Faerie Fire"
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
    "overallWin": 0.529,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.515,
      "crusader": 0.527,
      "archon": 0.529,
      "legend": 0.533,
      "ancient": 0.538,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 11455,
      "guardian": 40601,
      "crusader": 70315,
      "archon": 92804,
      "legend": 88739,
      "ancient": 59120,
      "divine": 53011
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.478,
      "crusader": 0.488,
      "archon": 0.495,
      "legend": 0.495,
      "ancient": 0.501,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 26012,
      "guardian": 75654,
      "crusader": 113084,
      "archon": 140690,
      "legend": 128637,
      "ancient": 84210,
      "divine": 81341
    },
    "counters": [
      "underlord",
      "phoenix",
      "abaddon",
      "dark-willow",
      "spirit-breaker",
      "warlock"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "pangolier",
      "leshrac",
      "timbersaw",
      "invoker",
      "monkey-king"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Observer Ward",
      "Circlet",
      "Magic Stick"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Blade of Alacrity",
      "Ogre Axe",
      "Mithril Hammer",
      "Boots of Travel"
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.487,
      "crusader": 0.49,
      "archon": 0.487,
      "legend": 0.487,
      "ancient": 0.488,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 33091,
      "guardian": 111229,
      "crusader": 174520,
      "archon": 212008,
      "legend": 186603,
      "ancient": 116907,
      "divine": 97761
    },
    "counters": [
      "sven",
      "grimstroke",
      "troll-warlord",
      "razor",
      "dark-willow",
      "tinker"
    ],
    "weakAgainst": [
      "treant-protector",
      "lycan",
      "earth-spirit",
      "monkey-king",
      "wraith-king",
      "undying"
    ],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.503,
      "guardian": 0.481,
      "crusader": 0.479,
      "archon": 0.472,
      "legend": 0.48,
      "ancient": 0.476,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 2758,
      "guardian": 9232,
      "crusader": 14554,
      "archon": 17442,
      "legend": 15169,
      "ancient": 10187,
      "divine": 11400
    },
    "counters": [
      "underlord",
      "shadow-fiend",
      "windranger",
      "jakiro",
      "dawnbreaker",
      "rubick"
    ],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Quelling Blade",
      "Orb of Blight",
      "Tango",
      "Circlet"
    ],
    "coreItems": [
      "Ogre Axe",
      "Hyperstone",
      "Mjollnir",
      "Blade of Alacrity",
      "Maelstrom"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.512,
      "crusader": 0.506,
      "archon": 0.501,
      "legend": 0.497,
      "ancient": 0.494,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 14140,
      "guardian": 43797,
      "crusader": 66419,
      "archon": 80559,
      "legend": 76093,
      "ancient": 53717,
      "divine": 57988
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.472,
      "guardian": 0.48,
      "crusader": 0.47,
      "archon": 0.478,
      "legend": 0.488,
      "ancient": 0.504,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 2230,
      "guardian": 6517,
      "crusader": 9396,
      "archon": 10845,
      "legend": 9654,
      "ancient": 7160,
      "divine": 9253
    },
    "counters": [
      "sven",
      "skywrath-mage",
      "void-spirit",
      "axe",
      "dawnbreaker",
      "pudge"
    ],
    "weakAgainst": [
      "beastmaster",
      "terrorblade",
      "bane",
      "tidehunter",
      "tusk",
      "shadow-fiend"
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.472,
      "crusader": 0.476,
      "archon": 0.489,
      "legend": 0.493,
      "ancient": 0.496,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 7087,
      "guardian": 30573,
      "crusader": 62216,
      "archon": 92639,
      "legend": 94358,
      "ancient": 65522,
      "divine": 56616
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.494,
      "crusader": 0.495,
      "archon": 0.504,
      "legend": 0.504,
      "ancient": 0.508,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 7145,
      "guardian": 19083,
      "crusader": 25971,
      "archon": 29113,
      "legend": 25706,
      "ancient": 17753,
      "divine": 18910
    },
    "counters": [
      "death-prophet",
      "undying",
      "ursa",
      "void-spirit",
      "centaur-warrunner",
      "pangolier"
    ],
    "weakAgainst": [
      "dazzle",
      "phoenix",
      "razor",
      "rubick",
      "terrorblade",
      "ember-spirit"
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
      "Phase Boots",
      "Ogre Axe",
      "Mithril Hammer",
      "Pavise",
      "Black King Bar"
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
    "overallWin": 0.469,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.473,
      "crusader": 0.467,
      "archon": 0.466,
      "legend": 0.473,
      "ancient": 0.471,
      "divine": 0.467
    },
    "pickByBracket": {
      "herald": 4109,
      "guardian": 14403,
      "crusader": 25254,
      "archon": 36351,
      "legend": 38457,
      "ancient": 28283,
      "divine": 29394
    },
    "counters": [
      "chaos-knight",
      "outworld-devourer",
      "medusa",
      "drow-ranger",
      "dawnbreaker",
      "weaver"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "ancient-apparition",
      "phoenix",
      "nyx-assassin",
      "chen"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
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
      "herald": 0.504,
      "guardian": 0.504,
      "crusader": 0.5,
      "archon": 0.499,
      "legend": 0.498,
      "ancient": 0.495,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 5606,
      "guardian": 17616,
      "crusader": 25960,
      "archon": 29355,
      "legend": 24676,
      "ancient": 14057,
      "divine": 10133
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.5,
      "crusader": 0.505,
      "archon": 0.527,
      "legend": 0.527,
      "ancient": 0.529,
      "divine": 0.545
    },
    "pickByBracket": {
      "herald": 4223,
      "guardian": 10078,
      "crusader": 13010,
      "archon": 13070,
      "legend": 9914,
      "ancient": 5960,
      "divine": 6183
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.514,
      "crusader": 0.518,
      "archon": 0.516,
      "legend": 0.514,
      "ancient": 0.513,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 9306,
      "guardian": 34014,
      "crusader": 56208,
      "archon": 69530,
      "legend": 64919,
      "ancient": 44054,
      "divine": 44055
    },
    "counters": [
      "storm-spirit",
      "crystal-maiden",
      "queen-of-pain",
      "dragon-knight",
      "centaur-warrunner",
      "ogre-magi"
    ],
    "weakAgainst": [
      "tusk",
      "templar-assassin",
      "tidehunter",
      "jakiro",
      "tiny"
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
      "Essence Distiller",
      "Point Booster",
      "Mekansm"
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
    "overallWin": 0.452,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.44,
      "crusader": 0.444,
      "archon": 0.452,
      "legend": 0.455,
      "ancient": 0.46,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 9231,
      "guardian": 24835,
      "crusader": 34890,
      "archon": 39196,
      "legend": 35075,
      "ancient": 23603,
      "divine": 21515
    },
    "counters": [
      "undying",
      "earthshaker",
      "weaver",
      "skywrath-mage",
      "bane",
      "underlord"
    ],
    "weakAgainst": [
      "treant-protector",
      "dawnbreaker",
      "slardar",
      "crystal-maiden",
      "zeus",
      "timbersaw"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.475,
      "crusader": 0.47,
      "archon": 0.475,
      "legend": 0.477,
      "ancient": 0.472,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 5597,
      "guardian": 18208,
      "crusader": 27440,
      "archon": 32693,
      "legend": 29742,
      "ancient": 20474,
      "divine": 21244
    },
    "counters": [
      "weaver",
      "lifestealer",
      "dawnbreaker",
      "terrorblade",
      "void-spirit",
      "puck"
    ],
    "weakAgainst": [
      "luna",
      "windranger",
      "sniper",
      "pudge",
      "timbersaw",
      "viper"
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.477,
      "crusader": 0.476,
      "archon": 0.472,
      "legend": 0.469,
      "ancient": 0.47,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 6841,
      "guardian": 17635,
      "crusader": 23803,
      "archon": 27080,
      "legend": 24338,
      "ancient": 16004,
      "divine": 15728
    },
    "counters": [
      "techies",
      "tusk",
      "bristleback",
      "lich",
      "faceless-void",
      "dark-willow"
    ],
    "weakAgainst": [
      "grimstroke",
      "leshrac",
      "ursa",
      "pugna",
      "lifestealer",
      "primal-beast"
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
      "Maelstrom",
      "Blade of Alacrity",
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.497,
      "crusader": 0.482,
      "archon": 0.478,
      "legend": 0.479,
      "ancient": 0.485,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 5578,
      "guardian": 13844,
      "crusader": 15758,
      "archon": 12993,
      "legend": 8662,
      "ancient": 4999,
      "divine": 4270
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.432,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.438,
      "crusader": 0.429,
      "archon": 0.424,
      "legend": 0.426,
      "ancient": 0.434,
      "divine": 0.441
    },
    "pickByBracket": {
      "herald": 14625,
      "guardian": 43386,
      "crusader": 60010,
      "archon": 65221,
      "legend": 52878,
      "ancient": 32592,
      "divine": 28879
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.52,
      "crusader": 0.517,
      "archon": 0.509,
      "legend": 0.505,
      "ancient": 0.495,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 22242,
      "guardian": 74435,
      "crusader": 113595,
      "archon": 135486,
      "legend": 119602,
      "ancient": 75235,
      "divine": 66559
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.495,
      "crusader": 0.509,
      "archon": 0.524,
      "legend": 0.524,
      "ancient": 0.529,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 6395,
      "guardian": 21752,
      "crusader": 39022,
      "archon": 55342,
      "legend": 58335,
      "ancient": 41291,
      "divine": 45737
    },
    "counters": [
      "storm-spirit",
      "dark-willow",
      "zeus",
      "silencer",
      "tiny",
      "phoenix"
    ],
    "weakAgainst": [
      "lifestealer",
      "shadow-fiend",
      "oracle",
      "pugna",
      "beastmaster",
      "shadow-shaman"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Mithril Hammer",
      "Echo Sabre",
      "Broadsword"
    ]
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
      "herald": 0.523,
      "guardian": 0.52,
      "crusader": 0.52,
      "archon": 0.524,
      "legend": 0.522,
      "ancient": 0.522,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 7729,
      "guardian": 25172,
      "crusader": 41447,
      "archon": 51983,
      "legend": 49183,
      "ancient": 33462,
      "divine": 30755
    },
    "counters": [
      "bristleback",
      "void-spirit",
      "dark-willow",
      "puck",
      "timbersaw",
      "invoker"
    ],
    "weakAgainst": [
      "largo",
      "terrorblade",
      "pudge",
      "pangolier",
      "doom",
      "phoenix"
    ],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.52,
      "crusader": 0.511,
      "archon": 0.509,
      "legend": 0.5,
      "ancient": 0.501,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 26145,
      "guardian": 88712,
      "crusader": 130762,
      "archon": 145178,
      "legend": 115395,
      "ancient": 65186,
      "divine": 45366
    },
    "counters": [
      "medusa",
      "winter-wyvern",
      "bristleback",
      "phantom-lancer",
      "ancient-apparition",
      "anti-mage"
    ],
    "weakAgainst": [
      "pugna",
      "phoenix",
      "treant-protector",
      "alchemist",
      "bounty-hunter",
      "magnus"
    ],
    "startItems": [
      "Tango",
      "Iron Branch",
      "Observer and Sentry Wards",
      "Gauntlets of Strength",
      "Sentry Ward",
      "Blood Grenade"
    ],
    "coreItems": [
      "Arcane Boots",
      "Hand of Midas",
      "Aether Lens",
      "Pavise",
      "Staff of Wizardry"
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.49,
      "crusader": 0.499,
      "archon": 0.51,
      "legend": 0.517,
      "ancient": 0.516,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 4512,
      "guardian": 13490,
      "crusader": 18793,
      "archon": 21441,
      "legend": 18789,
      "ancient": 12156,
      "divine": 10875
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.459,
      "guardian": 0.463,
      "crusader": 0.478,
      "archon": 0.497,
      "legend": 0.507,
      "ancient": 0.513,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 4077,
      "guardian": 14514,
      "crusader": 24304,
      "archon": 31814,
      "legend": 30867,
      "ancient": 21506,
      "divine": 22981
    },
    "counters": [
      "batrider",
      "invoker",
      "night-stalker",
      "puck",
      "tiny",
      "mars"
    ],
    "weakAgainst": [
      "windranger",
      "tusk",
      "jakiro",
      "snapfire",
      "pudge",
      "shadow-fiend"
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.498,
      "crusader": 0.517,
      "archon": 0.529,
      "legend": 0.542,
      "ancient": 0.539,
      "divine": 0.53
    },
    "pickByBracket": {
      "herald": 6667,
      "guardian": 20696,
      "crusader": 33425,
      "archon": 44442,
      "legend": 42748,
      "ancient": 27247,
      "divine": 23869
    },
    "counters": [
      "jakiro",
      "lion"
    ],
    "weakAgainst": [
      "invoker",
      "mars",
      "pudge",
      "snapfire",
      "shadow-fiend",
      "disruptor"
    ],
    "startItems": [
      "Iron Branch",
      "Mantle of Intelligence",
      "Tango",
      "Circlet",
      "Observer Ward",
      "Faerie Fire"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Witch Blade",
      "Oblivion Staff",
      "Dragon Lance"
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.435,
      "guardian": 0.449,
      "crusader": 0.446,
      "archon": 0.46,
      "legend": 0.467,
      "ancient": 0.468,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 2885,
      "guardian": 9307,
      "crusader": 15760,
      "archon": 21407,
      "legend": 23113,
      "ancient": 18344,
      "divine": 23551
    },
    "counters": [
      "lina",
      "sven",
      "lion",
      "bloodseeker",
      "silencer",
      "beastmaster"
    ],
    "weakAgainst": [
      "largo",
      "naga-siren",
      "treant-protector",
      "bane",
      "marci",
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
      "Diffusal Blade",
      "Blade of Alacrity",
      "Blink Dagger",
      "Point Booster",
      "Ogre Axe"
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.531,
      "guardian": 0.519,
      "crusader": 0.516,
      "archon": 0.511,
      "legend": 0.506,
      "ancient": 0.503,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 30638,
      "guardian": 88068,
      "crusader": 115880,
      "archon": 117681,
      "legend": 87486,
      "ancient": 47937,
      "divine": 32195
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.534,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.527,
      "crusader": 0.529,
      "archon": 0.534,
      "legend": 0.538,
      "ancient": 0.54,
      "divine": 0.54
    },
    "pickByBracket": {
      "herald": 17818,
      "guardian": 55199,
      "crusader": 78533,
      "archon": 85829,
      "legend": 70505,
      "ancient": 43962,
      "divine": 45666
    },
    "counters": [
      "templar-assassin",
      "slardar",
      "jakiro",
      "mars"
    ],
    "weakAgainst": [
      "queen-of-pain",
      "shadow-demon",
      "windranger",
      "hoodwink",
      "pudge",
      "rubick"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Magic Stick",
      "Circlet",
      "Faerie Fire"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Diadem",
      "Staff of Wizardry",
      "Manta Style",
      "Ogre Axe"
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.509,
      "crusader": 0.512,
      "archon": 0.511,
      "legend": 0.516,
      "ancient": 0.51,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 4613,
      "guardian": 17390,
      "crusader": 31380,
      "archon": 42481,
      "legend": 41619,
      "ancient": 28940,
      "divine": 33199
    },
    "counters": [
      "dark-seer",
      "sand-king",
      "techies",
      "void-spirit",
      "underlord",
      "vengeful-spirit"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "magnus",
      "juggernaut",
      "bane",
      "dazzle",
      "doom"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Staff of Wizardry",
      "Platemail",
      "Solar Crest",
      "Pavise"
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.473,
      "crusader": 0.49,
      "archon": 0.483,
      "legend": 0.481,
      "ancient": 0.495,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 4751,
      "guardian": 14128,
      "crusader": 21004,
      "archon": 23969,
      "legend": 20746,
      "ancient": 14297,
      "divine": 16750
    },
    "counters": [
      "terrorblade",
      "muerta",
      "viper",
      "shadow-shaman",
      "gyrocopter",
      "puck"
    ],
    "weakAgainst": [
      "earthshaker",
      "largo",
      "razor",
      "shadow-demon",
      "faceless-void",
      "invoker"
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
    "overallWin": 0.466,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.444,
      "crusader": 0.458,
      "archon": 0.454,
      "legend": 0.468,
      "ancient": 0.477,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 4230,
      "guardian": 13028,
      "crusader": 21061,
      "archon": 28379,
      "legend": 28918,
      "ancient": 20440,
      "divine": 27088
    },
    "counters": [
      "weaver",
      "dark-willow",
      "invoker",
      "razor",
      "sven",
      "crystal-maiden"
    ],
    "weakAgainst": [
      "naga-siren",
      "nyx-assassin",
      "morphling",
      "dark-seer",
      "oracle",
      "huskar"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Circlet",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Witch Blade",
      "Blink Dagger",
      "Oblivion Staff",
      "Aghanim's Shard",
      "Blitz Knuckles"
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
      "herald": 0.524,
      "guardian": 0.523,
      "crusader": 0.518,
      "archon": 0.513,
      "legend": 0.512,
      "ancient": 0.51,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 33649,
      "guardian": 120879,
      "crusader": 196377,
      "archon": 228647,
      "legend": 191266,
      "ancient": 119601,
      "divine": 115085
    },
    "counters": [
      "io",
      "clinkz",
      "phantom-assassin",
      "wraith-king",
      "morphling",
      "sand-king"
    ],
    "weakAgainst": [
      "largo",
      "lycan",
      "naga-siren",
      "batrider",
      "earth-spirit",
      "magnus"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Gauntlets of Strength",
      "Boots of Speed",
      "Observer Ward",
      "Blood Grenade"
    ],
    "coreItems": [
      "Blink Dagger",
      "Aether Lens",
      "Ogre Axe",
      "Staff of Wizardry",
      "Aghanim's Scepter"
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.49,
      "crusader": 0.494,
      "archon": 0.501,
      "legend": 0.51,
      "ancient": 0.517,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 6986,
      "guardian": 20588,
      "crusader": 29397,
      "archon": 32872,
      "legend": 28851,
      "ancient": 18536,
      "divine": 15517
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
      "herald": 0.474,
      "guardian": 0.472,
      "crusader": 0.472,
      "archon": 0.471,
      "legend": 0.472,
      "ancient": 0.469,
      "divine": 0.467
    },
    "pickByBracket": {
      "herald": 12328,
      "guardian": 41284,
      "crusader": 68399,
      "archon": 89410,
      "legend": 81567,
      "ancient": 52778,
      "divine": 47719
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.498,
      "crusader": 0.506,
      "archon": 0.507,
      "legend": 0.509,
      "ancient": 0.51,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 12277,
      "guardian": 31039,
      "crusader": 40409,
      "archon": 45292,
      "legend": 39016,
      "ancient": 24546,
      "divine": 19689
    },
    "counters": [
      "crystal-maiden",
      "gyrocopter",
      "silencer",
      "primal-beast",
      "tidehunter",
      "marci"
    ],
    "weakAgainst": [
      "treant-protector",
      "nature-s-prophet",
      "phoenix",
      "huskar",
      "doom",
      "puck"
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
    "overallWin": 0.528,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.522,
      "crusader": 0.527,
      "archon": 0.529,
      "legend": 0.53,
      "ancient": 0.539,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 12264,
      "guardian": 32041,
      "crusader": 42617,
      "archon": 44313,
      "legend": 35613,
      "ancient": 21367,
      "divine": 15892
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.479,
      "crusader": 0.479,
      "archon": 0.478,
      "legend": 0.482,
      "ancient": 0.486,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 4356,
      "guardian": 16215,
      "crusader": 28141,
      "archon": 38578,
      "legend": 39971,
      "ancient": 29908,
      "divine": 37402
    },
    "counters": [
      "skywrath-mage",
      "dark-willow",
      "vengeful-spirit",
      "terrorblade",
      "earth-spirit",
      "sniper"
    ],
    "weakAgainst": [
      "alchemist",
      "chen",
      "grimstroke",
      "treant-protector",
      "dazzle",
      "keeper-of-the-light"
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
      "herald": 0.488,
      "guardian": 0.488,
      "crusader": 0.488,
      "archon": 0.496,
      "legend": 0.497,
      "ancient": 0.499,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 14618,
      "guardian": 55202,
      "crusader": 102505,
      "archon": 145660,
      "legend": 151667,
      "ancient": 106906,
      "divine": 103243
    },
    "counters": [
      "phantom-assassin",
      "weaver",
      "phantom-lancer",
      "magnus",
      "death-prophet",
      "brewmaster"
    ],
    "weakAgainst": [
      "earth-spirit",
      "lone-druid",
      "leshrac",
      "broodmother",
      "abaddon",
      "lycan"
    ],
    "startItems": [
      "Iron Branch",
      "Observer and Sentry Wards",
      "Tango",
      "Faerie Fire",
      "Blood Grenade",
      "Sentry Ward"
    ],
    "coreItems": [
      "Essence Distiller",
      "Blink Dagger",
      "Arcane Boots",
      "Staff of Wizardry",
      "Aghanim's Shard"
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.506,
      "crusader": 0.501,
      "archon": 0.486,
      "legend": 0.486,
      "ancient": 0.47,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 8084,
      "guardian": 23707,
      "crusader": 33450,
      "archon": 35801,
      "legend": 29725,
      "ancient": 18378,
      "divine": 14194
    },
    "counters": [
      "templar-assassin",
      "underlord",
      "void-spirit",
      "ursa",
      "lion",
      "beastmaster"
    ],
    "weakAgainst": [
      "warlock",
      "phoenix",
      "alchemist",
      "abaddon",
      "pudge",
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
      "Staff of Wizardry",
      "Blink Dagger",
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
    "overallWin": 0.447,
    "winByBracket": {
      "herald": 0.421,
      "guardian": 0.433,
      "crusader": 0.439,
      "archon": 0.454,
      "legend": 0.448,
      "ancient": 0.453,
      "divine": 0.453
    },
    "pickByBracket": {
      "herald": 2699,
      "guardian": 8372,
      "crusader": 13022,
      "archon": 16532,
      "legend": 15694,
      "ancient": 11121,
      "divine": 12061
    },
    "counters": [
      "phantom-lancer",
      "medusa",
      "weaver",
      "primal-beast",
      "warlock",
      "drow-ranger"
    ],
    "weakAgainst": [
      "naga-siren",
      "alchemist",
      "monkey-king",
      "grimstroke",
      "chen",
      "beastmaster"
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
      "Blink Dagger",
      "Arcane Boots",
      "Aghanim's Shard",
      "Aether Lens",
      "Staff of Wizardry"
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.486,
      "crusader": 0.488,
      "archon": 0.481,
      "legend": 0.478,
      "ancient": 0.476,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 24485,
      "guardian": 76329,
      "crusader": 117021,
      "archon": 138552,
      "legend": 122518,
      "ancient": 80125,
      "divine": 82724
    },
    "counters": [
      "night-stalker",
      "morphling",
      "medusa",
      "undying",
      "tinker",
      "legion-commander"
    ],
    "weakAgainst": [
      "lone-druid",
      "enigma",
      "alchemist",
      "monkey-king",
      "phoenix",
      "batrider"
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
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Dragon Lance",
      "Yasha",
      "Mithril Hammer"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.52,
      "crusader": 0.517,
      "archon": 0.52,
      "legend": 0.523,
      "ancient": 0.518,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 25912,
      "guardian": 80204,
      "crusader": 115241,
      "archon": 130130,
      "legend": 106828,
      "ancient": 62892,
      "divine": 49628
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Magic Stick",
      "Sentry Ward"
    ],
    "coreItems": [
      "Blink Dagger",
      "Arcane Boots",
      "Aether Lens",
      "Staff of Wizardry",
      "Glimmer Cape"
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.525,
      "crusader": 0.512,
      "archon": 0.508,
      "legend": 0.502,
      "ancient": 0.5,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 14325,
      "guardian": 52255,
      "crusader": 81695,
      "archon": 97646,
      "legend": 83787,
      "ancient": 51005,
      "divine": 39679
    },
    "counters": [
      "timbersaw",
      "lina",
      "death-prophet",
      "vengeful-spirit",
      "chaos-knight",
      "ursa"
    ],
    "weakAgainst": [
      "largo",
      "treant-protector",
      "huskar",
      "leshrac",
      "spirit-breaker",
      "razor"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.503,
      "crusader": 0.503,
      "archon": 0.501,
      "legend": 0.494,
      "ancient": 0.495,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 19627,
      "guardian": 60883,
      "crusader": 89531,
      "archon": 101915,
      "legend": 86314,
      "ancient": 53286,
      "divine": 46388
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.509,
      "crusader": 0.505,
      "archon": 0.504,
      "legend": 0.5,
      "ancient": 0.499,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 12073,
      "guardian": 37068,
      "crusader": 54450,
      "archon": 62131,
      "legend": 54344,
      "ancient": 34359,
      "divine": 31398
    },
    "counters": [
      "lifestealer",
      "drow-ranger",
      "weaver",
      "grimstroke",
      "viper",
      "sand-king"
    ],
    "weakAgainst": [
      "marci",
      "naga-siren",
      "vengeful-spirit",
      "faceless-void",
      "phantom-lancer",
      "treant-protector"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Faerie Fire",
      "Circlet",
      "Observer Ward"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.504,
      "crusader": 0.495,
      "archon": 0.492,
      "legend": 0.492,
      "ancient": 0.497,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 12292,
      "guardian": 42224,
      "crusader": 66797,
      "archon": 82746,
      "legend": 74890,
      "ancient": 47795,
      "divine": 40170
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.494,
      "crusader": 0.501,
      "archon": 0.497,
      "legend": 0.496,
      "ancient": 0.493,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 13599,
      "guardian": 48259,
      "crusader": 86368,
      "archon": 120808,
      "legend": 121276,
      "ancient": 84779,
      "divine": 86148
    },
    "counters": [
      "tinker",
      "death-prophet",
      "witch-doctor",
      "winter-wyvern",
      "phantom-lancer",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "broodmother",
      "bounty-hunter",
      "clinkz",
      "treant-protector",
      "io",
      "bane"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Observer and Sentry Wards",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Blink Dagger",
      "Staff of Wizardry",
      "Boots of Travel",
      "Kaya"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.513,
      "crusader": 0.507,
      "archon": 0.506,
      "legend": 0.5,
      "ancient": 0.494,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 36176,
      "guardian": 108774,
      "crusader": 156512,
      "archon": 173464,
      "legend": 137228,
      "ancient": 74415,
      "divine": 46682
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.544,
    "winByBracket": {
      "herald": 0.552,
      "guardian": 0.552,
      "crusader": 0.54,
      "archon": 0.542,
      "legend": 0.544,
      "ancient": 0.545,
      "divine": 0.541
    },
    "pickByBracket": {
      "herald": 16858,
      "guardian": 59398,
      "crusader": 90735,
      "archon": 107127,
      "legend": 92364,
      "ancient": 58851,
      "divine": 54799
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.519,
      "crusader": 0.52,
      "archon": 0.52,
      "legend": 0.521,
      "ancient": 0.514,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 22903,
      "guardian": 70204,
      "crusader": 102800,
      "archon": 120477,
      "legend": 105368,
      "ancient": 66407,
      "divine": 58253
    },
    "counters": [
      "clinkz",
      "silencer",
      "ancient-apparition",
      "death-prophet",
      "slark",
      "phantom-lancer"
    ],
    "weakAgainst": [
      "treant-protector",
      "huskar",
      "keeper-of-the-light",
      "drow-ranger",
      "marci",
      "largo"
    ],
    "startItems": [
      "Boots of Speed",
      "Tango",
      "Iron Branch",
      "Blood Grenade",
      "Sentry Ward",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Blitz Knuckles",
      "Phase Boots",
      "Claymore",
      "Drum of Endurance",
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
    "overallWin": 0.462,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.458,
      "crusader": 0.457,
      "archon": 0.455,
      "legend": 0.462,
      "ancient": 0.47,
      "divine": 0.474
    },
    "pickByBracket": {
      "herald": 9763,
      "guardian": 29413,
      "crusader": 44291,
      "archon": 53387,
      "legend": 49390,
      "ancient": 34050,
      "divine": 34918
    },
    "counters": [
      "naga-siren",
      "sven",
      "medusa",
      "templar-assassin",
      "techies",
      "alchemist"
    ],
    "weakAgainst": [
      "mirana",
      "treant-protector",
      "huskar",
      "chen",
      "lycan",
      "night-stalker"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Mantle of Intelligence",
      "Sentry Ward"
    ],
    "coreItems": [
      "Ogre Axe",
      "Staff of Wizardry",
      "Kaya",
      "Sange",
      "Kaya and Sange"
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
      "herald": 0.502,
      "guardian": 0.503,
      "crusader": 0.509,
      "archon": 0.508,
      "legend": 0.508,
      "ancient": 0.514,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 12707,
      "guardian": 36011,
      "crusader": 50150,
      "archon": 55550,
      "legend": 47165,
      "ancient": 30344,
      "divine": 28249
    },
    "counters": [
      "dark-seer",
      "phantom-lancer",
      "skywrath-mage",
      "legion-commander",
      "undying",
      "zeus"
    ],
    "weakAgainst": [
      "lycan",
      "earthshaker",
      "void-spirit",
      "necrophos",
      "gyrocopter",
      "lich"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Quelling Blade",
      "Magic Stick",
      "Circlet"
    ],
    "coreItems": [
      "Ogre Axe",
      "Broadsword",
      "Echo Sabre",
      "Blink Dagger",
      "Claymore"
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.515,
      "crusader": 0.508,
      "archon": 0.509,
      "legend": 0.508,
      "ancient": 0.505,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 15135,
      "guardian": 47485,
      "crusader": 68292,
      "archon": 77244,
      "legend": 66244,
      "ancient": 40860,
      "divine": 38416
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.462,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.454,
      "crusader": 0.459,
      "archon": 0.464,
      "legend": 0.469,
      "ancient": 0.465,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 7087,
      "guardian": 20317,
      "crusader": 28553,
      "archon": 31982,
      "legend": 27582,
      "ancient": 17986,
      "divine": 17561
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.466,
      "crusader": 0.468,
      "archon": 0.466,
      "legend": 0.474,
      "ancient": 0.479,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 6087,
      "guardian": 16428,
      "crusader": 22073,
      "archon": 22675,
      "legend": 18699,
      "ancient": 12235,
      "divine": 15990
    },
    "counters": [
      "bristleback",
      "pugna",
      "sand-king",
      "medusa",
      "silencer",
      "dragon-knight"
    ],
    "weakAgainst": [
      "morphling",
      "abaddon",
      "centaur-warrunner",
      "axe",
      "dawnbreaker",
      "primal-beast"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Circlet",
      "Magic Stick",
      "Faerie Fire"
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.509,
      "crusader": 0.509,
      "archon": 0.504,
      "legend": 0.499,
      "ancient": 0.499,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 10599,
      "guardian": 35722,
      "crusader": 56639,
      "archon": 69737,
      "legend": 62037,
      "ancient": 40013,
      "divine": 36656
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Quelling Blade",
      "Magic Stick"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Staff of Wizardry",
      "Point Booster",
      "Aghanim's Shard"
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
    "overallWin": 0.446,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.455,
      "crusader": 0.454,
      "archon": 0.441,
      "legend": 0.448,
      "ancient": 0.442,
      "divine": 0.442
    },
    "pickByBracket": {
      "herald": 5408,
      "guardian": 17106,
      "crusader": 27029,
      "archon": 33706,
      "legend": 31807,
      "ancient": 21979,
      "divine": 25632
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
      "herald": 0.447,
      "guardian": 0.45,
      "crusader": 0.464,
      "archon": 0.468,
      "legend": 0.47,
      "ancient": 0.487,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 7939,
      "guardian": 24732,
      "crusader": 37577,
      "archon": 41342,
      "legend": 35871,
      "ancient": 23795,
      "divine": 24384
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
      "herald": 0.46,
      "guardian": 0.447,
      "crusader": 0.442,
      "archon": 0.44,
      "legend": 0.436,
      "ancient": 0.445,
      "divine": 0.446
    },
    "pickByBracket": {
      "herald": 8560,
      "guardian": 23787,
      "crusader": 33009,
      "archon": 38872,
      "legend": 36372,
      "ancient": 25556,
      "divine": 30016
    },
    "counters": [
      "weaver",
      "death-prophet",
      "bristleback",
      "sven",
      "void-spirit",
      "dark-seer"
    ],
    "weakAgainst": [
      "bane",
      "kez",
      "chen",
      "treant-protector",
      "lone-druid",
      "kunkka"
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
      "Ogre Axe",
      "Claymore",
      "Blitz Knuckles",
      "Shadow Blade"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.481,
      "crusader": 0.479,
      "archon": 0.485,
      "legend": 0.501,
      "ancient": 0.506,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 4395,
      "guardian": 14653,
      "crusader": 22361,
      "archon": 27107,
      "legend": 26412,
      "ancient": 19374,
      "divine": 35535
    },
    "counters": [
      "invoker",
      "monkey-king",
      "gyrocopter",
      "spirit-breaker",
      "razor",
      "centaur-warrunner"
    ],
    "weakAgainst": [
      "enchantress"
    ],
    "startItems": [
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Boots of Speed",
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
      "herald": 0.523,
      "guardian": 0.524,
      "crusader": 0.518,
      "archon": 0.517,
      "legend": 0.511,
      "ancient": 0.509,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 8570,
      "guardian": 19320,
      "crusader": 22394,
      "archon": 22461,
      "legend": 17166,
      "ancient": 10530,
      "divine": 8875
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.441,
      "guardian": 0.447,
      "crusader": 0.461,
      "archon": 0.474,
      "legend": 0.49,
      "ancient": 0.491,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 4642,
      "guardian": 15466,
      "crusader": 26425,
      "archon": 37200,
      "legend": 41056,
      "ancient": 32618,
      "divine": 41534
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
      "herald": 0.513,
      "guardian": 0.517,
      "crusader": 0.514,
      "archon": 0.509,
      "legend": 0.497,
      "ancient": 0.491,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 6134,
      "guardian": 22603,
      "crusader": 39206,
      "archon": 55151,
      "legend": 52508,
      "ancient": 34782,
      "divine": 31701
    },
    "counters": [
      "ancient-apparition",
      "abaddon",
      "gyrocopter",
      "kunkka",
      "primal-beast",
      "mars"
    ],
    "weakAgainst": [
      "lone-druid",
      "treant-protector",
      "ursa",
      "necrophos",
      "monkey-king",
      "drow-ranger"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.518,
      "crusader": 0.519,
      "archon": 0.52,
      "legend": 0.523,
      "ancient": 0.52,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 15153,
      "guardian": 54738,
      "crusader": 86350,
      "archon": 105299,
      "legend": 92729,
      "ancient": 59576,
      "divine": 62619
    },
    "counters": [
      "lion",
      "shadow-shaman",
      "night-stalker",
      "underlord",
      "crystal-maiden",
      "windranger"
    ],
    "weakAgainst": [
      "monkey-king",
      "treant-protector",
      "marci",
      "alchemist",
      "batrider",
      "beastmaster"
    ],
    "startItems": [
      "Iron Branch",
      "Enchanted Mango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Smoke of Deceit",
      "Magic Stick"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Blink Dagger",
      "Phase Boots",
      "Platemail",
      "Arcane Boots"
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.459,
      "guardian": 0.46,
      "crusader": 0.473,
      "archon": 0.478,
      "legend": 0.48,
      "ancient": 0.481,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 11077,
      "guardian": 30756,
      "crusader": 44411,
      "archon": 51895,
      "legend": 45511,
      "ancient": 28504,
      "divine": 25435
    },
    "counters": [
      "underlord",
      "muerta",
      "dark-willow",
      "timbersaw",
      "death-prophet",
      "grimstroke"
    ],
    "weakAgainst": [
      "enigma",
      "treant-protector",
      "chen",
      "alchemist",
      "marci",
      "lycan"
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
      "Broadsword",
      "Mithril Hammer",
      "Battle Fury",
      "Blink Dagger",
      "Skull Basher"
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
    "overallWin": 0.534,
    "winByBracket": {
      "herald": 0.53,
      "guardian": 0.543,
      "crusader": 0.54,
      "archon": 0.538,
      "legend": 0.533,
      "ancient": 0.53,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 14819,
      "guardian": 51121,
      "crusader": 84143,
      "archon": 107088,
      "legend": 100228,
      "ancient": 63442,
      "divine": 51670
    },
    "counters": [
      "morphling",
      "legion-commander",
      "lich",
      "slardar",
      "warlock",
      "lina"
    ],
    "weakAgainst": [
      "clockwerk",
      "dawnbreaker",
      "phoenix",
      "witch-doctor",
      "techies",
      "beastmaster"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Faerie Fire",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Broadsword",
      "Specialist's Array",
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.476,
      "crusader": 0.481,
      "archon": 0.476,
      "legend": 0.48,
      "ancient": 0.475,
      "divine": 0.472
    },
    "pickByBracket": {
      "herald": 12869,
      "guardian": 40053,
      "crusader": 57875,
      "archon": 66276,
      "legend": 54042,
      "ancient": 31608,
      "divine": 23050
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.483,
      "crusader": 0.488,
      "archon": 0.487,
      "legend": 0.49,
      "ancient": 0.489,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 21276,
      "guardian": 50159,
      "crusader": 59079,
      "archon": 59428,
      "legend": 45088,
      "ancient": 24997,
      "divine": 21109
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.529,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.501,
      "crusader": 0.516,
      "archon": 0.521,
      "legend": 0.542,
      "ancient": 0.542,
      "divine": 0.559
    },
    "pickByBracket": {
      "herald": 2306,
      "guardian": 6461,
      "crusader": 9524,
      "archon": 10655,
      "legend": 9385,
      "ancient": 6690,
      "divine": 9618
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.472,
      "guardian": 0.481,
      "crusader": 0.489,
      "archon": 0.499,
      "legend": 0.501,
      "ancient": 0.496,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 5015,
      "guardian": 14505,
      "crusader": 22961,
      "archon": 31543,
      "legend": 32522,
      "ancient": 23888,
      "divine": 29639
    },
    "counters": [
      "zeus",
      "sven",
      "weaver",
      "earthshaker",
      "shadow-shaman",
      "dazzle"
    ],
    "weakAgainst": [
      "necrophos",
      "nyx-assassin",
      "lycan",
      "treant-protector",
      "phoenix",
      "alchemist"
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
      "Staff of Wizardry",
      "Blade of Alacrity",
      "Aghanim's Shard",
      "Spirit Vessel",
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.508,
      "crusader": 0.507,
      "archon": 0.499,
      "legend": 0.492,
      "ancient": 0.482,
      "divine": 0.474
    },
    "pickByBracket": {
      "herald": 9704,
      "guardian": 32989,
      "crusader": 48972,
      "archon": 56272,
      "legend": 46435,
      "ancient": 26091,
      "divine": 20766
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
      "herald": 0.485,
      "guardian": 0.476,
      "crusader": 0.473,
      "archon": 0.472,
      "legend": 0.472,
      "ancient": 0.474,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 12708,
      "guardian": 32902,
      "crusader": 41843,
      "archon": 45548,
      "legend": 37732,
      "ancient": 22396,
      "divine": 19604
    },
    "counters": [
      "sven",
      "dazzle",
      "brewmaster",
      "gyrocopter",
      "ancient-apparition",
      "crystal-maiden"
    ],
    "weakAgainst": [
      "morphling",
      "sniper",
      "monkey-king",
      "venomancer",
      "centaur-warrunner",
      "rubick"
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
      "Mithril Hammer",
      "Blade of Alacrity",
      "Aghanim's Shard",
      "Dragon Lance",
      "Desolator"
    ]
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.481,
      "crusader": 0.479,
      "archon": 0.482,
      "legend": 0.483,
      "ancient": 0.489,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 21668,
      "guardian": 63817,
      "crusader": 93940,
      "archon": 111459,
      "legend": 100937,
      "ancient": 66465,
      "divine": 65985
    },
    "counters": [
      "morphling",
      "phantom-lancer",
      "oracle",
      "grimstroke",
      "chaos-knight",
      "medusa"
    ],
    "weakAgainst": [
      "treant-protector",
      "lone-druid",
      "enigma",
      "bane",
      "dazzle",
      "ember-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Faerie Fire",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Maelstrom",
      "Hyperstone",
      "Mjollnir",
      "Blade of Alacrity"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.484,
      "crusader": 0.488,
      "archon": 0.49,
      "legend": 0.5,
      "ancient": 0.509,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 5961,
      "guardian": 19268,
      "crusader": 27985,
      "archon": 31034,
      "legend": 26711,
      "ancient": 18319,
      "divine": 24907
    },
    "counters": [
      "void-spirit",
      "slardar",
      "clockwerk",
      "pangolier"
    ],
    "weakAgainst": [
      "ogre-magi",
      "ember-spirit",
      "snapfire",
      "axe",
      "windranger",
      "beastmaster"
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
      "Power Treads",
      "Glimmer Cape",
      "Arcane Boots",
      "Staff of Wizardry"
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.523,
      "crusader": 0.523,
      "archon": 0.521,
      "legend": 0.515,
      "ancient": 0.508,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 22504,
      "guardian": 77000,
      "crusader": 117095,
      "archon": 135679,
      "legend": 109953,
      "ancient": 62371,
      "divine": 44401
    },
    "counters": [
      "vengeful-spirit",
      "lich",
      "undying",
      "zeus",
      "tidehunter",
      "ursa"
    ],
    "weakAgainst": [
      "ember-spirit",
      "sniper",
      "necrophos",
      "lifestealer",
      "snapfire",
      "dark-willow"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Smoke of Deceit",
      "Faerie Fire"
    ],
    "coreItems": [
      "Arcane Boots",
      "Glimmer Cape",
      "Aghanim's Shard",
      "Mekansm",
      "Pavise"
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
    "overallWin": 0.548,
    "winByBracket": {
      "herald": 0.566,
      "guardian": 0.557,
      "crusader": 0.558,
      "archon": 0.55,
      "legend": 0.544,
      "ancient": 0.537,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 18152,
      "guardian": 60182,
      "crusader": 92331,
      "archon": 109821,
      "legend": 92772,
      "ancient": 53530,
      "divine": 34155
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
      "herald": 0.495,
      "guardian": 0.504,
      "crusader": 0.503,
      "archon": 0.501,
      "legend": 0.498,
      "ancient": 0.496,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 22678,
      "guardian": 70710,
      "crusader": 107239,
      "archon": 128323,
      "legend": 113280,
      "ancient": 72040,
      "divine": 62104
    },
    "counters": [
      "viper",
      "medusa",
      "vengeful-spirit",
      "dawnbreaker",
      "undying",
      "slardar"
    ],
    "weakAgainst": [
      "juggernaut",
      "void-spirit",
      "wraith-king",
      "beastmaster",
      "keeper-of-the-light",
      "venomancer"
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
