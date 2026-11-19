// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-11-19
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.525,
      "guardian": 0.52,
      "crusader": 0.518,
      "archon": 0.517,
      "legend": 0.521,
      "ancient": 0.524,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 2592,
      "guardian": 7933,
      "crusader": 15343,
      "archon": 25346,
      "legend": 30485,
      "ancient": 17015,
      "divine": 10204
    },
    "counters": [
      "lion",
      "disruptor",
      "dragon-knight",
      "axe",
      "void-spirit",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "hoodwink",
      "invoker",
      "ember-spirit",
      "gyrocopter",
      "shadow-demon",
      "tiny"
    ],
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.487,
      "crusader": 0.481,
      "archon": 0.473,
      "legend": 0.465,
      "ancient": 0.463,
      "divine": 0.452
    },
    "pickByBracket": {
      "herald": 2299,
      "guardian": 7790,
      "crusader": 15668,
      "archon": 25687,
      "legend": 28299,
      "ancient": 14873,
      "divine": 8061
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.52,
      "crusader": 0.519,
      "archon": 0.516,
      "legend": 0.516,
      "ancient": 0.511,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 4809,
      "guardian": 17295,
      "crusader": 36565,
      "archon": 65932,
      "legend": 79383,
      "ancient": 41890,
      "divine": 23246
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.508,
      "crusader": 0.511,
      "archon": 0.507,
      "legend": 0.509,
      "ancient": 0.51,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 9634,
      "guardian": 35462,
      "crusader": 75164,
      "archon": 132389,
      "legend": 159792,
      "ancient": 88341,
      "divine": 61862
    },
    "counters": [
      "disruptor",
      "dark-willow",
      "rubick"
    ],
    "weakAgainst": [
      "lion",
      "ember-spirit",
      "skywrath-mage",
      "storm-spirit",
      "windranger"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Quelling Blade",
      "Magic Stick"
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.506,
      "crusader": 0.513,
      "archon": 0.517,
      "legend": 0.516,
      "ancient": 0.52,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 4090,
      "guardian": 14045,
      "crusader": 28790,
      "archon": 45577,
      "legend": 47724,
      "ancient": 26305,
      "divine": 18358
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.523,
      "crusader": 0.514,
      "archon": 0.51,
      "legend": 0.5,
      "ancient": 0.492,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 10429,
      "guardian": 38060,
      "crusader": 79446,
      "archon": 137636,
      "legend": 161269,
      "ancient": 85981,
      "divine": 51771
    },
    "counters": [
      "morphling",
      "viper",
      "ursa",
      "void-spirit",
      "bristleback",
      "brewmaster"
    ],
    "weakAgainst": [
      "bane",
      "monkey-king",
      "keeper-of-the-light",
      "treant-protector",
      "abaddon",
      "leshrac"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Ring of Protection",
      "Circlet",
      "Quelling Blade"
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.437,
      "guardian": 0.473,
      "crusader": 0.481,
      "archon": 0.483,
      "legend": 0.501,
      "ancient": 0.493,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 2056,
      "guardian": 6463,
      "crusader": 12464,
      "archon": 19942,
      "legend": 22128,
      "ancient": 12568,
      "divine": 9631
    },
    "counters": [
      "warlock",
      "axe",
      "timbersaw",
      "dawnbreaker",
      "snapfire",
      "phoenix"
    ],
    "weakAgainst": [
      "centaur-warrunner",
      "ursa",
      "beastmaster",
      "lich",
      "dark-willow",
      "largo"
    ],
    "startItems": [
      "Iron Branch",
      "Observer and Sentry Wards",
      "Tango",
      "Blood Grenade",
      "Smoke of Deceit",
      "Faerie Fire"
    ],
    "coreItems": [
      "Point Booster",
      "Ogre Axe",
      "Arcane Boots",
      "Aether Lens",
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
    "overallWin": 0.446,
    "winByBracket": {
      "herald": 0.42,
      "guardian": 0.451,
      "crusader": 0.444,
      "archon": 0.436,
      "legend": 0.438,
      "ancient": 0.446,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 898,
      "guardian": 2508,
      "crusader": 4969,
      "archon": 7900,
      "legend": 8718,
      "ancient": 5185,
      "divine": 4962
    },
    "counters": [
      "bristleback",
      "weaver",
      "shadow-shaman",
      "warlock",
      "shadow-fiend",
      "beastmaster"
    ],
    "weakAgainst": [
      "bane",
      "dark-willow",
      "dragon-knight",
      "abaddon",
      "treant-protector",
      "underlord"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Circlet",
      "Observer and Sentry Wards",
      "Blood Grenade"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Mithril Hammer",
      "Black King Bar",
      "Staff of Wizardry"
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
    "overallWin": 0.465,
    "winByBracket": {
      "herald": 0.451,
      "guardian": 0.462,
      "crusader": 0.449,
      "archon": 0.454,
      "legend": 0.464,
      "ancient": 0.476,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 1629,
      "guardian": 5885,
      "crusader": 11262,
      "archon": 17567,
      "legend": 19624,
      "ancient": 11908,
      "divine": 10422
    },
    "counters": [
      "lifestealer",
      "clockwerk",
      "undying",
      "shadow-shaman",
      "ursa",
      "winter-wyvern"
    ],
    "weakAgainst": [
      "juggernaut",
      "slark",
      "grimstroke",
      "dazzle",
      "terrorblade",
      "batrider"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Sage's Mask",
      "Magic Stick",
      "Circlet",
      "Faerie Fire"
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
      "herald": 0.502,
      "guardian": 0.511,
      "crusader": 0.51,
      "archon": 0.521,
      "legend": 0.519,
      "ancient": 0.523,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 6217,
      "guardian": 15676,
      "crusader": 23868,
      "archon": 32310,
      "legend": 29987,
      "ancient": 14136,
      "divine": 7979
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Circlet",
      "Tango",
      "Magic Stick",
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.493,
      "crusader": 0.497,
      "archon": 0.505,
      "legend": 0.523,
      "ancient": 0.532,
      "divine": 0.548
    },
    "pickByBracket": {
      "herald": 4688,
      "guardian": 15339,
      "crusader": 28341,
      "archon": 44568,
      "legend": 53052,
      "ancient": 33226,
      "divine": 32205
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Observer and Sentry Wards",
      "Iron Branch",
      "Blood Grenade",
      "Tango",
      "Boots of Speed",
      "Sentry Ward"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Essence Distiller",
      "Eul's Scepter of Divinity",
      "Drum of Endurance",
      "Force Staff"
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.492,
      "crusader": 0.498,
      "archon": 0.502,
      "legend": 0.505,
      "ancient": 0.513,
      "divine": 0.526
    },
    "pickByBracket": {
      "herald": 1040,
      "guardian": 3845,
      "crusader": 8170,
      "archon": 14436,
      "legend": 18938,
      "ancient": 13111,
      "divine": 12888
    },
    "counters": [
      "void-spirit",
      "slardar",
      "sven",
      "dragon-knight",
      "centaur-warrunner",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "bristleback",
      "invoker",
      "clockwerk",
      "treant-protector",
      "axe",
      "beastmaster"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Gauntlets of Strength",
      "Faerie Fire",
      "Magic Stick"
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.538,
      "guardian": 0.521,
      "crusader": 0.5,
      "archon": 0.484,
      "legend": 0.475,
      "ancient": 0.46,
      "divine": 0.459
    },
    "pickByBracket": {
      "herald": 9429,
      "guardian": 28691,
      "crusader": 47252,
      "archon": 61847,
      "legend": 52268,
      "ancient": 21425,
      "divine": 10079
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Enchanted Mango"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Ogre Axe",
      "Blade of Alacrity",
      "Sange",
      "Platemail"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.514,
      "crusader": 0.5,
      "archon": 0.501,
      "legend": 0.505,
      "ancient": 0.505,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 3106,
      "guardian": 8877,
      "crusader": 14941,
      "archon": 20232,
      "legend": 18120,
      "ancient": 8856,
      "divine": 5872
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Quelling Blade",
      "Faerie Fire",
      "Slippers of Agility"
    ],
    "coreItems": [
      "Claymore",
      "Diadem",
      "Manta Style",
      "Yasha",
      "Blade of Alacrity"
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.512,
      "crusader": 0.497,
      "archon": 0.5,
      "legend": 0.488,
      "ancient": 0.484,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 2812,
      "guardian": 9921,
      "crusader": 21929,
      "archon": 41265,
      "legend": 50380,
      "ancient": 27362,
      "divine": 14457
    },
    "counters": [
      "bane",
      "terrorblade",
      "weaver",
      "ancient-apparition",
      "dazzle",
      "puck"
    ],
    "weakAgainst": [
      "treant-protector",
      "sniper",
      "brewmaster",
      "witch-doctor",
      "keeper-of-the-light",
      "sven"
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
      "Ring of Tarrasque",
      "Blink Dagger",
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.511,
      "crusader": 0.51,
      "archon": 0.504,
      "legend": 0.495,
      "ancient": 0.485,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 5652,
      "guardian": 18661,
      "crusader": 34478,
      "archon": 49843,
      "legend": 48674,
      "ancient": 23663,
      "divine": 13291
    },
    "counters": [
      "templar-assassin",
      "pudge",
      "lion"
    ],
    "weakAgainst": [
      "jakiro",
      "sniper",
      "wraith-king",
      "ogre-magi",
      "crystal-maiden",
      "luna"
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
      "Armlet of Mordiggian",
      "Blitz Knuckles",
      "Oblivion Staff",
      "Ogre Axe",
      "Claymore"
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
    "overallWin": 0.456,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.42,
      "crusader": 0.426,
      "archon": 0.446,
      "legend": 0.465,
      "ancient": 0.468,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 477,
      "guardian": 1426,
      "crusader": 2801,
      "archon": 4270,
      "legend": 4732,
      "ancient": 2637,
      "divine": 2328
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
      "herald": 0.492,
      "guardian": 0.494,
      "crusader": 0.49,
      "archon": 0.498,
      "legend": 0.503,
      "ancient": 0.503,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 6144,
      "guardian": 17341,
      "crusader": 26963,
      "archon": 37052,
      "legend": 37699,
      "ancient": 19307,
      "divine": 12609
    },
    "counters": [
      "clockwerk",
      "skywrath-mage",
      "gyrocopter",
      "snapfire",
      "lion",
      "jakiro"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "pangolier",
      "pudge",
      "templar-assassin",
      "kez",
      "razor"
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
      "Mithril Hammer",
      "Blade of Alacrity",
      "Aghanim's Shard",
      "Desolator",
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.485,
      "crusader": 0.48,
      "archon": 0.48,
      "legend": 0.48,
      "ancient": 0.48,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 1363,
      "guardian": 4833,
      "crusader": 9988,
      "archon": 17687,
      "legend": 22300,
      "ancient": 14101,
      "divine": 10428
    },
    "counters": [
      "tidehunter",
      "bristleback",
      "primal-beast",
      "dawnbreaker",
      "luna",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "clinkz",
      "lone-druid",
      "shadow-demon",
      "beastmaster",
      "keeper-of-the-light",
      "monkey-king"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Sentry Ward",
      "Faerie Fire"
    ],
    "coreItems": [
      "Essence Distiller",
      "Staff of Wizardry",
      "Vitality Booster",
      "Consecrated Wraps",
      "Blink Dagger"
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
      "herald": 0.535,
      "guardian": 0.534,
      "crusader": 0.526,
      "archon": 0.522,
      "legend": 0.514,
      "ancient": 0.507,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 12692,
      "guardian": 43789,
      "crusader": 82755,
      "archon": 130853,
      "legend": 144257,
      "ancient": 76567,
      "divine": 45177
    },
    "counters": [
      "timbersaw",
      "slardar",
      "underlord",
      "mars",
      "chaos-knight",
      "necrophos"
    ],
    "weakAgainst": [
      "templar-assassin",
      "techies",
      "witch-doctor",
      "windranger",
      "shadow-shaman",
      "spirit-breaker"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Enchanted Mango",
      "Sentry Ward"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Glimmer Cape",
      "Staff of Wizardry",
      "Blink Dagger",
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.479,
      "crusader": 0.482,
      "archon": 0.487,
      "legend": 0.489,
      "ancient": 0.51,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 1737,
      "guardian": 6127,
      "crusader": 12862,
      "archon": 23170,
      "legend": 30814,
      "ancient": 21675,
      "divine": 21713
    },
    "counters": [
      "underlord",
      "dragon-knight",
      "mars",
      "clockwerk",
      "tusk",
      "rubick"
    ],
    "weakAgainst": [
      "phoenix",
      "ember-spirit",
      "mirana",
      "sven",
      "winter-wyvern",
      "storm-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Mantle of Intelligence",
      "Sage's Mask",
      "Faerie Fire"
    ],
    "coreItems": [
      "Platemail",
      "Shiva's Guard",
      "Aghanim's Shard",
      "Blink Dagger",
      "Ogre Axe"
    ]
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.472,
      "crusader": 0.477,
      "archon": 0.482,
      "legend": 0.491,
      "ancient": 0.5,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 4266,
      "guardian": 14792,
      "crusader": 28696,
      "archon": 48888,
      "legend": 61716,
      "ancient": 40287,
      "divine": 34954
    },
    "counters": [
      "weaver",
      "batrider",
      "drow-ranger",
      "tiny",
      "pangolier",
      "luna"
    ],
    "weakAgainst": [
      "treant-protector",
      "bounty-hunter",
      "pudge",
      "sniper",
      "ursa",
      "muerta"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Faerie Fire",
      "Ring of Regen"
    ],
    "coreItems": [
      "Essence Distiller",
      "Vitality Booster",
      "Staff of Wizardry",
      "Blink Dagger",
      "Eul's Scepter of Divinity"
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
      "herald": 0.504,
      "guardian": 0.509,
      "crusader": 0.518,
      "archon": 0.518,
      "legend": 0.522,
      "ancient": 0.52,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 3198,
      "guardian": 11741,
      "crusader": 27815,
      "archon": 58433,
      "legend": 84587,
      "ancient": 55463,
      "divine": 42104
    },
    "counters": [
      "lina",
      "monkey-king",
      "shadow-shaman",
      "ogre-magi",
      "underlord",
      "viper"
    ],
    "weakAgainst": [
      "treant-protector",
      "faceless-void",
      "alchemist",
      "winter-wyvern",
      "bane",
      "keeper-of-the-light"
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.501,
      "crusader": 0.507,
      "archon": 0.507,
      "legend": 0.518,
      "ancient": 0.526,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 3519,
      "guardian": 13234,
      "crusader": 27705,
      "archon": 46614,
      "legend": 52936,
      "ancient": 29640,
      "divine": 23359
    },
    "counters": [
      "ogre-magi",
      "beastmaster",
      "warlock",
      "tiny",
      "snapfire",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "terrorblade",
      "shadow-demon",
      "witch-doctor",
      "centaur-warrunner",
      "ember-spirit",
      "tusk"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Smoke of Deceit",
      "Sentry Ward"
    ],
    "coreItems": [
      "Holy Locket",
      "Blink Dagger",
      "Arcane Boots",
      "Mekansm",
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.47,
      "crusader": 0.479,
      "archon": 0.48,
      "legend": 0.478,
      "ancient": 0.477,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 5519,
      "guardian": 14918,
      "crusader": 26934,
      "archon": 43889,
      "legend": 54979,
      "ancient": 32684,
      "divine": 25044
    },
    "counters": [
      "ogre-magi",
      "dragon-knight"
    ],
    "weakAgainst": [
      "snapfire",
      "hoodwink",
      "lion",
      "shadow-fiend",
      "rubick",
      "jakiro"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Faerie Fire",
      "Observer Ward",
      "Sentry Ward"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Mithril Hammer",
      "Vitality Booster",
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.485,
      "crusader": 0.496,
      "archon": 0.502,
      "legend": 0.506,
      "ancient": 0.512,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 3012,
      "guardian": 11926,
      "crusader": 28294,
      "archon": 58243,
      "legend": 83284,
      "ancient": 51860,
      "divine": 40134
    },
    "counters": [
      "phantom-assassin",
      "bristleback",
      "muerta",
      "grimstroke",
      "night-stalker",
      "weaver"
    ],
    "weakAgainst": [
      "abaddon",
      "ancient-apparition",
      "kez",
      "faceless-void",
      "treant-protector",
      "techies"
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
      "Blink Dagger",
      "Glimmer Cape",
      "Pavise",
      "Ghost Scepter"
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.46,
      "crusader": 0.462,
      "archon": 0.467,
      "legend": 0.475,
      "ancient": 0.488,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 2714,
      "guardian": 9368,
      "crusader": 20748,
      "archon": 39926,
      "legend": 54987,
      "ancient": 35601,
      "divine": 30666
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.535,
      "crusader": 0.527,
      "archon": 0.527,
      "legend": 0.526,
      "ancient": 0.524,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 6502,
      "guardian": 25085,
      "crusader": 56594,
      "archon": 108129,
      "legend": 143023,
      "ancient": 88712,
      "divine": 68432
    },
    "counters": [
      "sand-king",
      "dazzle",
      "troll-warlord",
      "doom",
      "batrider",
      "chen"
    ],
    "weakAgainst": [
      "venomancer",
      "abaddon",
      "pugna",
      "viper",
      "void-spirit",
      "monkey-king"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Magic Stick",
      "Circlet",
      "Observer Ward",
      "Tango"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Mithril Hammer",
      "Aghanim's Shard",
      "Black King Bar"
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
    "overallWin": 0.465,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.473,
      "crusader": 0.471,
      "archon": 0.466,
      "legend": 0.462,
      "ancient": 0.464,
      "divine": 0.451
    },
    "pickByBracket": {
      "herald": 11467,
      "guardian": 35357,
      "crusader": 66486,
      "archon": 106966,
      "legend": 117900,
      "ancient": 59555,
      "divine": 31640
    },
    "counters": [
      "pudge",
      "underlord",
      "spirit-breaker",
      "disruptor",
      "bristleback",
      "lich"
    ],
    "weakAgainst": [
      "treant-protector",
      "largo",
      "timbersaw",
      "shadow-demon",
      "hoodwink",
      "mars"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Circlet",
      "Tango",
      "Magic Wand",
      "Magic Stick"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Yasha",
      "Dragon Lance",
      "Staff of Wizardry",
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.48,
      "crusader": 0.485,
      "archon": 0.485,
      "legend": 0.494,
      "ancient": 0.503,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 1373,
      "guardian": 4981,
      "crusader": 11974,
      "archon": 23721,
      "legend": 34779,
      "ancient": 25343,
      "divine": 22912
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
      "herald": 0.498,
      "guardian": 0.5,
      "crusader": 0.495,
      "archon": 0.505,
      "legend": 0.509,
      "ancient": 0.513,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 11374,
      "guardian": 39183,
      "crusader": 78629,
      "archon": 135977,
      "legend": 169740,
      "ancient": 99230,
      "divine": 68263
    },
    "counters": [
      "witch-doctor"
    ],
    "weakAgainst": [
      "snapfire",
      "shadow-fiend",
      "pangolier",
      "hoodwink",
      "tusk",
      "jakiro"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Enchanted Mango",
      "Faerie Fire",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Staff of Wizardry",
      "Blink Dagger",
      "Boots of Travel",
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.478,
      "crusader": 0.486,
      "archon": 0.495,
      "legend": 0.522,
      "ancient": 0.523,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 852,
      "guardian": 2681,
      "crusader": 5168,
      "archon": 7961,
      "legend": 8963,
      "ancient": 5695,
      "divine": 4994
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Sentry Ward",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Drum of Endurance",
      "Point Booster",
      "Pavise"
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.466,
      "crusader": 0.47,
      "archon": 0.477,
      "legend": 0.489,
      "ancient": 0.494,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 2626,
      "guardian": 9286,
      "crusader": 20757,
      "archon": 39714,
      "legend": 56249,
      "ancient": 38646,
      "divine": 33303
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.49,
      "crusader": 0.484,
      "archon": 0.486,
      "legend": 0.481,
      "ancient": 0.479,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 3447,
      "guardian": 9291,
      "crusader": 13978,
      "archon": 17789,
      "legend": 18816,
      "ancient": 10578,
      "divine": 8172
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Blood Grenade",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Blade of Alacrity",
      "Drum of Endurance",
      "Point Booster"
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.465,
      "guardian": 0.484,
      "crusader": 0.479,
      "archon": 0.499,
      "legend": 0.504,
      "ancient": 0.53,
      "divine": 0.559
    },
    "pickByBracket": {
      "herald": 3231,
      "guardian": 10388,
      "crusader": 20562,
      "archon": 33085,
      "legend": 37773,
      "ancient": 22371,
      "divine": 20556
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Ring of Regen",
      "Circlet",
      "Magic Stick"
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.479,
      "crusader": 0.481,
      "archon": 0.481,
      "legend": 0.487,
      "ancient": 0.485,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 5939,
      "guardian": 20623,
      "crusader": 41248,
      "archon": 67618,
      "legend": 74455,
      "ancient": 36852,
      "divine": 20225
    },
    "counters": [
      "dawnbreaker",
      "ursa",
      "disruptor",
      "silencer",
      "puck",
      "razor"
    ],
    "weakAgainst": [
      "rubick",
      "lion",
      "pangolier",
      "warlock",
      "ogre-magi",
      "tusk"
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.509,
      "crusader": 0.521,
      "archon": 0.524,
      "legend": 0.526,
      "ancient": 0.527,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 2827,
      "guardian": 11079,
      "crusader": 25652,
      "archon": 52622,
      "legend": 73994,
      "ancient": 46983,
      "divine": 36240
    },
    "counters": [
      "zeus",
      "necrophos",
      "beastmaster",
      "skywrath-mage",
      "ring-master",
      "tidehunter"
    ],
    "weakAgainst": [
      "windranger",
      "lion",
      "slardar",
      "storm-spirit",
      "shadow-shaman",
      "invoker"
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
    "overallWin": 0.468,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.464,
      "crusader": 0.462,
      "archon": 0.469,
      "legend": 0.468,
      "ancient": 0.472,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 2079,
      "guardian": 7227,
      "crusader": 16302,
      "archon": 32856,
      "legend": 45387,
      "ancient": 26382,
      "divine": 18171
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.458,
      "guardian": 0.467,
      "crusader": 0.474,
      "archon": 0.471,
      "legend": 0.472,
      "ancient": 0.473,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 7089,
      "guardian": 24548,
      "crusader": 49961,
      "archon": 84365,
      "legend": 99895,
      "ancient": 58744,
      "divine": 44404
    },
    "counters": [
      "abaddon",
      "death-prophet",
      "shadow-shaman",
      "huskar",
      "phantom-lancer",
      "underlord"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "ancient-apparition",
      "treant-protector",
      "ember-spirit",
      "nyx-assassin",
      "enchantress"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Blood Grenade",
      "Circlet"
    ],
    "coreItems": [
      "Essence Distiller",
      "Arcane Boots",
      "Blink Dagger",
      "Aghanim's Shard",
      "Staff of Wizardry"
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
      "herald": 0.458,
      "guardian": 0.459,
      "crusader": 0.449,
      "archon": 0.449,
      "legend": 0.447,
      "ancient": 0.455,
      "divine": 0.453
    },
    "pickByBracket": {
      "herald": 6285,
      "guardian": 15604,
      "crusader": 23823,
      "archon": 32490,
      "legend": 34824,
      "ancient": 19535,
      "divine": 14830
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Faerie Fire",
      "Observer Ward",
      "Magic Stick",
      "Tango"
    ],
    "coreItems": [
      "Ogre Axe",
      "Mithril Hammer",
      "Blade of Alacrity",
      "Black King Bar",
      "Dragon Lance"
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.501,
      "crusader": 0.504,
      "archon": 0.504,
      "legend": 0.51,
      "ancient": 0.514,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 7931,
      "guardian": 29946,
      "crusader": 69694,
      "archon": 135391,
      "legend": 180985,
      "ancient": 109327,
      "divine": 77068
    },
    "counters": [
      "abaddon",
      "ring-master",
      "brewmaster",
      "sand-king",
      "ursa",
      "necrophos"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "nyx-assassin",
      "sniper",
      "morphling",
      "undying"
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
      "Meteor Hammer",
      "Mithril Hammer",
      "Black King Bar"
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.485,
      "crusader": 0.492,
      "archon": 0.486,
      "legend": 0.497,
      "ancient": 0.498,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 2578,
      "guardian": 9210,
      "crusader": 18694,
      "archon": 31203,
      "legend": 36097,
      "ancient": 22789,
      "divine": 19410
    },
    "counters": [
      "hoodwink",
      "windranger",
      "phoenix"
    ],
    "weakAgainst": [
      "rubick"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Sage's Mask",
      "Tango",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blade of Alacrity",
      "Mithril Hammer",
      "Aghanim's Scepter",
      "Point Booster"
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.504,
      "guardian": 0.496,
      "crusader": 0.502,
      "archon": 0.488,
      "legend": 0.481,
      "ancient": 0.473,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 5496,
      "guardian": 19073,
      "crusader": 38515,
      "archon": 65696,
      "legend": 75913,
      "ancient": 38541,
      "divine": 19363
    },
    "counters": [
      "undying",
      "tinker",
      "chaos-knight",
      "weaver",
      "techies",
      "medusa"
    ],
    "weakAgainst": [
      "treant-protector",
      "pangolier",
      "enchantress",
      "sand-king",
      "clinkz",
      "alchemist"
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
      "Force Staff",
      "Eul's Scepter of Divinity",
      "Glimmer Cape"
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.516,
      "crusader": 0.518,
      "archon": 0.521,
      "legend": 0.525,
      "ancient": 0.527,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 12426,
      "guardian": 43695,
      "crusader": 88910,
      "archon": 153899,
      "legend": 187783,
      "ancient": 104509,
      "divine": 65038
    },
    "counters": [
      "zeus",
      "beastmaster",
      "phoenix",
      "pangolier",
      "nature-s-prophet",
      "underlord"
    ],
    "weakAgainst": [
      "snapfire",
      "sniper",
      "puck",
      "terrorblade",
      "rubick",
      "tiny"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.469,
      "crusader": 0.479,
      "archon": 0.49,
      "legend": 0.493,
      "ancient": 0.503,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 3743,
      "guardian": 11963,
      "crusader": 22097,
      "archon": 32927,
      "legend": 35368,
      "ancient": 19457,
      "divine": 15913
    },
    "counters": [
      "queen-of-pain",
      "lina",
      "spirit-breaker",
      "warlock",
      "phoenix",
      "bristleback"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "bane",
      "batrider",
      "slardar",
      "earth-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Boots of Travel",
      "Point Booster",
      "Vitality Booster",
      "Staff of Wizardry",
      "Soul Booster"
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
    "overallWin": 0.451,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.464,
      "crusader": 0.461,
      "archon": 0.45,
      "legend": 0.446,
      "ancient": 0.448,
      "divine": 0.449
    },
    "pickByBracket": {
      "herald": 2767,
      "guardian": 8799,
      "crusader": 17508,
      "archon": 29194,
      "legend": 36610,
      "ancient": 22683,
      "divine": 18845
    },
    "counters": [
      "underlord",
      "disruptor",
      "lich",
      "lifestealer",
      "tiny",
      "primal-beast"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "treant-protector",
      "windranger",
      "tidehunter",
      "drow-ranger",
      "nyx-assassin"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Faerie Fire",
      "Tango",
      "Quelling Blade",
      "Magic Stick"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Desolator",
      "Mage Slayer",
      "Ogre Axe",
      "Blade of Alacrity"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.483,
      "crusader": 0.488,
      "archon": 0.489,
      "legend": 0.498,
      "ancient": 0.495,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 3422,
      "guardian": 10614,
      "crusader": 20946,
      "archon": 35904,
      "legend": 45696,
      "ancient": 27291,
      "divine": 16065
    },
    "counters": [
      "pangolier",
      "skywrath-mage",
      "warlock",
      "snapfire",
      "disruptor",
      "pudge"
    ],
    "weakAgainst": [
      "shadow-demon",
      "shadow-shaman",
      "templar-assassin",
      "rubick",
      "invoker",
      "storm-spirit"
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
      "Mithril Hammer",
      "Blade of Alacrity",
      "Point Booster",
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
      "herald": 0.457,
      "guardian": 0.447,
      "crusader": 0.457,
      "archon": 0.474,
      "legend": 0.483,
      "ancient": 0.494,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 1027,
      "guardian": 3015,
      "crusader": 6445,
      "archon": 11498,
      "legend": 14974,
      "ancient": 10477,
      "divine": 10258
    },
    "counters": [
      "silencer",
      "queen-of-pain",
      "primal-beast",
      "pangolier",
      "monkey-king",
      "pudge"
    ],
    "weakAgainst": [
      "mirana",
      "treant-protector",
      "shadow-demon",
      "sniper",
      "invoker",
      "clinkz"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Kaya",
      "Ogre Axe",
      "Aghanim's Shard",
      "Platemail"
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.525,
      "crusader": 0.53,
      "archon": 0.527,
      "legend": 0.527,
      "ancient": 0.523,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 9420,
      "guardian": 34964,
      "crusader": 74463,
      "archon": 131206,
      "legend": 151835,
      "ancient": 77059,
      "divine": 43527
    },
    "counters": [
      "bristleback",
      "ogre-magi",
      "pudge",
      "disruptor",
      "zeus"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "shadow-fiend"
    ],
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.521,
      "guardian": 0.497,
      "crusader": 0.5,
      "archon": 0.505,
      "legend": 0.507,
      "ancient": 0.511,
      "divine": 0.535
    },
    "pickByBracket": {
      "herald": 1740,
      "guardian": 5502,
      "crusader": 10461,
      "archon": 17089,
      "legend": 21025,
      "ancient": 14189,
      "divine": 12695
    },
    "counters": [
      "slark",
      "axe",
      "skywrath-mage",
      "lion",
      "timbersaw",
      "slardar"
    ],
    "weakAgainst": [
      "invoker",
      "tiny",
      "shadow-demon",
      "gyrocopter",
      "disruptor",
      "centaur-warrunner"
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
      "Staff of Wizardry",
      "Ogre Axe",
      "Kaya",
      "Blink Dagger",
      "Sange"
    ]
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.517,
      "crusader": 0.522,
      "archon": 0.529,
      "legend": 0.529,
      "ancient": 0.52,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 6478,
      "guardian": 22426,
      "crusader": 44835,
      "archon": 80073,
      "legend": 106142,
      "ancient": 65677,
      "divine": 45192
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Enchanted Mango",
      "Sentry Ward",
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.503,
      "guardian": 0.503,
      "crusader": 0.506,
      "archon": 0.511,
      "legend": 0.516,
      "ancient": 0.513,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 6078,
      "guardian": 23027,
      "crusader": 51987,
      "archon": 100319,
      "legend": 132386,
      "ancient": 76010,
      "divine": 50098
    },
    "counters": [
      "muerta",
      "dawnbreaker",
      "dragon-knight",
      "luna",
      "zeus",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "doom",
      "slardar",
      "beastmaster",
      "alchemist",
      "phoenix",
      "kez"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Quelling Blade",
      "Iron Branch",
      "Faerie Fire",
      "Magic Stick",
      "Tango"
    ],
    "coreItems": [
      "Sacred Relic",
      "Talisman of Evasion",
      "Radiance",
      "Blade of Alacrity",
      "Yasha"
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
    "overallWin": 0.469,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.461,
      "crusader": 0.466,
      "archon": 0.469,
      "legend": 0.471,
      "ancient": 0.472,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 11313,
      "guardian": 33905,
      "crusader": 62727,
      "archon": 102471,
      "legend": 119471,
      "ancient": 62870,
      "divine": 37974
    },
    "counters": [
      "phoenix",
      "luna",
      "warlock",
      "storm-spirit",
      "spirit-breaker",
      "underlord"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "silencer",
      "dawnbreaker",
      "pudge",
      "pangolier",
      "earth-spirit"
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
      "Staff of Wizardry",
      "Blade of Alacrity",
      "Ogre Axe",
      "Kaya",
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.49,
      "crusader": 0.487,
      "archon": 0.488,
      "legend": 0.487,
      "ancient": 0.486,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 15485,
      "guardian": 55894,
      "crusader": 116489,
      "archon": 205085,
      "legend": 246521,
      "ancient": 132614,
      "divine": 78283
    },
    "counters": [
      "anti-mage",
      "sven",
      "grimstroke",
      "death-prophet",
      "razor",
      "morphling"
    ],
    "weakAgainst": [
      "abaddon",
      "treant-protector",
      "undying",
      "pangolier",
      "earth-spirit",
      "wraith-king"
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.492,
      "crusader": 0.493,
      "archon": 0.486,
      "legend": 0.487,
      "ancient": 0.494,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 1832,
      "guardian": 6834,
      "crusader": 15006,
      "archon": 23972,
      "legend": 25052,
      "ancient": 15038,
      "divine": 11847
    },
    "counters": [
      "clockwerk",
      "underlord",
      "pangolier",
      "windranger",
      "shadow-fiend",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "keeper-of-the-light"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Orb of Blight",
      "Quelling Blade",
      "Tango",
      "Orb of Frost"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Hyperstone",
      "Ogre Axe",
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.511,
      "crusader": 0.51,
      "archon": 0.508,
      "legend": 0.502,
      "ancient": 0.499,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 7691,
      "guardian": 25672,
      "crusader": 51669,
      "archon": 91526,
      "legend": 114683,
      "ancient": 71510,
      "divine": 55098
    },
    "counters": [
      "morphling",
      "silencer",
      "phantom-assassin",
      "alchemist",
      "chaos-knight",
      "ogre-magi"
    ],
    "weakAgainst": [
      "gyrocopter",
      "keeper-of-the-light",
      "clockwerk",
      "undying",
      "magnus",
      "techies"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Circlet",
      "Tango",
      "Magic Wand",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Yasha",
      "Diadem",
      "Manta Style",
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.468,
      "crusader": 0.476,
      "archon": 0.48,
      "legend": 0.496,
      "ancient": 0.507,
      "divine": 0.526
    },
    "pickByBracket": {
      "herald": 1095,
      "guardian": 3454,
      "crusader": 7527,
      "archon": 11865,
      "legend": 13875,
      "ancient": 8283,
      "divine": 8489
    },
    "counters": [
      "rubick",
      "clockwerk",
      "ember-spirit",
      "hoodwink"
    ],
    "weakAgainst": [
      "bane",
      "terrorblade"
    ],
    "startItems": [
      "Iron Branch",
      "Sage's Mask",
      "Tango",
      "Quelling Blade",
      "Gauntlets of Strength",
      "Faerie Fire"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Ultimate Orb",
      "Helm of the Overlord",
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.477,
      "crusader": 0.486,
      "archon": 0.489,
      "legend": 0.498,
      "ancient": 0.498,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 2940,
      "guardian": 12305,
      "crusader": 33802,
      "archon": 77738,
      "legend": 119391,
      "ancient": 77001,
      "divine": 50653
    },
    "counters": [
      "pudge",
      "luna",
      "hoodwink",
      "disruptor",
      "queen-of-pain",
      "ogre-magi"
    ],
    "weakAgainst": [
      "rubick",
      "tusk",
      "shadow-fiend",
      "templar-assassin",
      "lion",
      "mars"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Quelling Blade",
      "Gauntlets of Strength",
      "Observer Ward"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blink Dagger",
      "Mithril Hammer",
      "Echo Sabre",
      "Broadsword"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.481,
      "crusader": 0.494,
      "archon": 0.502,
      "legend": 0.499,
      "ancient": 0.505,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 4529,
      "guardian": 13108,
      "crusader": 22720,
      "archon": 33858,
      "legend": 37817,
      "ancient": 22194,
      "divine": 16385
    },
    "counters": [
      "slardar",
      "dragon-knight",
      "shadow-shaman",
      "snapfire",
      "pudge",
      "storm-spirit"
    ],
    "weakAgainst": [
      "phoenix",
      "tusk",
      "puck",
      "razor",
      "shadow-demon",
      "invoker"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Sentry Ward",
      "Circlet",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Ogre Axe",
      "Mithril Hammer",
      "Phase Boots",
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.477,
      "crusader": 0.476,
      "archon": 0.478,
      "legend": 0.478,
      "ancient": 0.481,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 1877,
      "guardian": 6355,
      "crusader": 14391,
      "archon": 28979,
      "legend": 43577,
      "ancient": 30299,
      "divine": 23236
    },
    "counters": [
      "drow-ranger",
      "slark",
      "dawnbreaker",
      "weaver",
      "terrorblade",
      "dark-willow"
    ],
    "weakAgainst": [
      "monkey-king",
      "treant-protector",
      "phantom-lancer",
      "phoenix",
      "keeper-of-the-light",
      "shadow-demon"
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
      "Mithril Hammer",
      "Aghanim's Shard",
      "Ogre Axe",
      "Phase Boots"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.501,
      "crusader": 0.501,
      "archon": 0.497,
      "legend": 0.489,
      "ancient": 0.498,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 2270,
      "guardian": 7325,
      "crusader": 14409,
      "archon": 24552,
      "legend": 26022,
      "ancient": 11993,
      "divine": 6274
    },
    "counters": [],
    "weakAgainst": [
      "rubick",
      "shadow-fiend",
      "doom",
      "ogre-magi",
      "snapfire",
      "windranger"
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
      "Yasha",
      "Claymore",
      "Eaglesong"
    ]
  },
  {
    "id": "meepo",
    "numericId": 82,
    "name": "Meepo",
    "shortName": "meepo",
    "primaryAttr": "all",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Nuker",
      "Disabler",
      "Initiator",
      "Pusher"
    ],
    "overallWin": 0.53,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.507,
      "crusader": 0.529,
      "archon": 0.536,
      "legend": 0.531,
      "ancient": 0.527,
      "divine": 0.547
    },
    "pickByBracket": {
      "herald": 2221,
      "guardian": 6874,
      "crusader": 11614,
      "archon": 17014,
      "legend": 17902,
      "ancient": 9845,
      "divine": 7496
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Slippers of Agility",
      "Tango",
      "Quelling Blade",
      "Observer Ward"
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.521,
      "crusader": 0.517,
      "archon": 0.512,
      "legend": 0.516,
      "ancient": 0.517,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 4411,
      "guardian": 17114,
      "crusader": 38741,
      "archon": 74566,
      "legend": 97665,
      "ancient": 58511,
      "divine": 42329
    },
    "counters": [
      "storm-spirit",
      "underlord",
      "slardar",
      "dark-seer",
      "shadow-fiend",
      "undying"
    ],
    "weakAgainst": [
      "timbersaw",
      "keeper-of-the-light",
      "ember-spirit",
      "tidehunter",
      "beastmaster",
      "puck"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Faerie Fire",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Essence Distiller",
      "Arcane Boots",
      "Eul's Scepter of Divinity",
      "Vitality Booster"
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
    "overallWin": 0.46,
    "winByBracket": {
      "herald": 0.46,
      "guardian": 0.454,
      "crusader": 0.454,
      "archon": 0.449,
      "legend": 0.459,
      "ancient": 0.471,
      "divine": 0.478
    },
    "pickByBracket": {
      "herald": 4576,
      "guardian": 13551,
      "crusader": 24690,
      "archon": 38465,
      "legend": 45894,
      "ancient": 28013,
      "divine": 18957
    },
    "counters": [
      "skywrath-mage",
      "mars",
      "templar-assassin",
      "axe",
      "underlord",
      "techies"
    ],
    "weakAgainst": [
      "largo",
      "dawnbreaker",
      "snapfire",
      "slardar",
      "shadow-shaman",
      "hoodwink"
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
      "Broadsword",
      "Black King Bar",
      "Desolator"
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.482,
      "crusader": 0.478,
      "archon": 0.47,
      "legend": 0.47,
      "ancient": 0.47,
      "divine": 0.478
    },
    "pickByBracket": {
      "herald": 2408,
      "guardian": 8791,
      "crusader": 17993,
      "archon": 31399,
      "legend": 38116,
      "ancient": 22386,
      "divine": 17275
    },
    "counters": [
      "weaver",
      "puck",
      "queen-of-pain",
      "invoker",
      "mars",
      "razor"
    ],
    "weakAgainst": [
      "luna",
      "sniper",
      "treant-protector",
      "pudge",
      "ursa",
      "spirit-breaker"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Magic Wand",
      "Faerie Fire",
      "Tango",
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.487,
      "crusader": 0.493,
      "archon": 0.482,
      "legend": 0.479,
      "ancient": 0.486,
      "divine": 0.471
    },
    "pickByBracket": {
      "herald": 2773,
      "guardian": 7369,
      "crusader": 13166,
      "archon": 20455,
      "legend": 23197,
      "ancient": 13082,
      "divine": 8828
    },
    "counters": [
      "bristleback",
      "techies",
      "lich",
      "necrophos",
      "tusk",
      "dark-willow"
    ],
    "weakAgainst": [
      "lifestealer",
      "treant-protector",
      "primal-beast",
      "shadow-demon",
      "ursa",
      "juggernaut"
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.494,
      "crusader": 0.49,
      "archon": 0.479,
      "legend": 0.48,
      "ancient": 0.489,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 2285,
      "guardian": 6532,
      "crusader": 11123,
      "archon": 13918,
      "legend": 12367,
      "ancient": 5937,
      "divine": 3793
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
      "Diadem",
      "Manta Style",
      "Blitz Knuckles",
      "Oblivion Staff"
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
    "overallWin": 0.429,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.442,
      "crusader": 0.429,
      "archon": 0.42,
      "legend": 0.422,
      "ancient": 0.432,
      "divine": 0.446
    },
    "pickByBracket": {
      "herald": 7163,
      "guardian": 24269,
      "crusader": 46429,
      "archon": 72204,
      "legend": 77419,
      "ancient": 40925,
      "divine": 28529
    },
    "counters": [
      "pangolier",
      "clockwerk",
      "undying",
      "puck",
      "queen-of-pain",
      "dark-willow"
    ],
    "weakAgainst": [
      "juggernaut",
      "timbersaw",
      "ember-spirit",
      "kez",
      "pudge",
      "necrophos"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Faerie Fire",
      "Tango",
      "Observer Ward",
      "Magic Wand"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Blade of Alacrity",
      "Hyperstone",
      "Maelstrom",
      "Mjollnir"
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.517,
      "crusader": 0.513,
      "archon": 0.507,
      "legend": 0.502,
      "ancient": 0.498,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 9869,
      "guardian": 34798,
      "crusader": 69428,
      "archon": 118244,
      "legend": 140759,
      "ancient": 75899,
      "divine": 49162
    },
    "counters": [
      "underlord",
      "disruptor",
      "void-spirit",
      "bristleback",
      "timbersaw",
      "nature-s-prophet"
    ],
    "weakAgainst": [
      "grimstroke",
      "keeper-of-the-light",
      "muerta",
      "invoker",
      "lich",
      "kez"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Faerie Fire",
      "Tango",
      "Magic Stick",
      "Observer Ward"
    ],
    "coreItems": [
      "Radiance",
      "Sacred Relic",
      "Talisman of Evasion",
      "Aghanim's Shard",
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
      "herald": 0.483,
      "guardian": 0.482,
      "crusader": 0.498,
      "archon": 0.509,
      "legend": 0.524,
      "ancient": 0.526,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 2931,
      "guardian": 10866,
      "crusader": 25325,
      "archon": 49637,
      "legend": 72443,
      "ancient": 46955,
      "divine": 35893
    },
    "counters": [
      "puck",
      "snapfire",
      "luna"
    ],
    "weakAgainst": [
      "shadow-fiend",
      "invoker",
      "warlock",
      "hoodwink",
      "disruptor",
      "rubick"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Circlet",
      "Quelling Blade",
      "Magic Stick"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Mithril Hammer",
      "Aghanim's Shard",
      "Drum of Endurance"
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
    "overallWin": 0.527,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.519,
      "crusader": 0.521,
      "archon": 0.527,
      "legend": 0.527,
      "ancient": 0.53,
      "divine": 0.532
    },
    "pickByBracket": {
      "herald": 4131,
      "guardian": 16123,
      "crusader": 36903,
      "archon": 71913,
      "legend": 99264,
      "ancient": 63362,
      "divine": 46568
    },
    "counters": [
      "void-spirit",
      "puck",
      "timbersaw",
      "skywrath-mage",
      "invoker",
      "hoodwink"
    ],
    "weakAgainst": [
      "doom",
      "largo",
      "techies",
      "shadow-shaman",
      "axe"
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
      "Essence Distiller",
      "Vitality Booster",
      "Consecrated Wraps",
      "Blink Dagger",
      "Staff of Wizardry"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.515,
      "crusader": 0.512,
      "archon": 0.501,
      "legend": 0.498,
      "ancient": 0.493,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 12794,
      "guardian": 46677,
      "crusader": 93901,
      "archon": 153918,
      "legend": 163814,
      "ancient": 78389,
      "divine": 38865
    },
    "counters": [
      "medusa",
      "bristleback",
      "zeus",
      "phantom-lancer",
      "chaos-knight",
      "terrorblade"
    ],
    "weakAgainst": [
      "pugna",
      "dazzle",
      "treant-protector",
      "phoenix",
      "dawnbreaker",
      "slardar"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Tango",
      "Iron Branch",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Hand of Midas",
      "Ogre Axe",
      "Staff of Wizardry",
      "Blink Dagger"
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.503,
      "crusader": 0.5,
      "archon": 0.51,
      "legend": 0.514,
      "ancient": 0.532,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 1689,
      "guardian": 5447,
      "crusader": 10506,
      "archon": 17640,
      "legend": 20808,
      "ancient": 11913,
      "divine": 8902
    },
    "counters": [
      "shadow-fiend"
    ],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Magic Stick"
    ],
    "coreItems": [
      "Ogre Axe",
      "Echo Sabre",
      "Broadsword",
      "Diadem",
      "Harpoon"
    ]
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.471,
      "crusader": 0.484,
      "archon": 0.495,
      "legend": 0.509,
      "ancient": 0.507,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 1784,
      "guardian": 6502,
      "crusader": 14552,
      "archon": 27293,
      "legend": 36245,
      "ancient": 23369,
      "divine": 18726
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.529,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.496,
      "crusader": 0.512,
      "archon": 0.527,
      "legend": 0.537,
      "ancient": 0.539,
      "divine": 0.535
    },
    "pickByBracket": {
      "herald": 6271,
      "guardian": 21742,
      "crusader": 45921,
      "archon": 87681,
      "legend": 119302,
      "ancient": 72727,
      "divine": 53760
    },
    "counters": [
      "dark-willow"
    ],
    "weakAgainst": [
      "witch-doctor",
      "windranger",
      "shadow-fiend",
      "pudge",
      "dragon-knight"
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
      "Staff of Wizardry",
      "Blink Dagger",
      "Blade of Alacrity",
      "Force Staff",
      "Witch Blade"
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
    "overallWin": 0.46,
    "winByBracket": {
      "herald": 0.428,
      "guardian": 0.453,
      "crusader": 0.446,
      "archon": 0.461,
      "legend": 0.456,
      "ancient": 0.464,
      "divine": 0.472
    },
    "pickByBracket": {
      "herald": 1419,
      "guardian": 4611,
      "crusader": 9992,
      "archon": 19308,
      "legend": 28256,
      "ancient": 20970,
      "divine": 21422
    },
    "counters": [
      "clinkz",
      "lion",
      "lina",
      "undying",
      "jakiro",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "lone-druid",
      "largo",
      "kunkka",
      "juggernaut",
      "treant-protector",
      "monkey-king"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Circlet",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Diffusal Blade",
      "Blink Dagger",
      "Ogre Axe",
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.522,
      "crusader": 0.522,
      "archon": 0.518,
      "legend": 0.511,
      "ancient": 0.507,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 14724,
      "guardian": 47241,
      "crusader": 84556,
      "archon": 122726,
      "legend": 119227,
      "ancient": 53904,
      "divine": 25997
    },
    "counters": [
      "ogre-magi",
      "dragon-knight",
      "skywrath-mage",
      "mars"
    ],
    "weakAgainst": [
      "rubick",
      "disruptor",
      "luna",
      "sniper",
      "shadow-fiend",
      "tiny"
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
      "Ogre Axe"
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.526,
      "crusader": 0.522,
      "archon": 0.523,
      "legend": 0.527,
      "ancient": 0.526,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 9095,
      "guardian": 31985,
      "crusader": 63859,
      "archon": 102467,
      "legend": 113018,
      "ancient": 59023,
      "divine": 41417
    },
    "counters": [
      "mars",
      "slardar",
      "invoker"
    ],
    "weakAgainst": [
      "snapfire",
      "hoodwink",
      "rubick",
      "ogre-magi",
      "tusk",
      "shadow-fiend"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Magic Stick"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Ogre Axe",
      "Staff of Wizardry",
      "Manta Style",
      "Point Booster"
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.508,
      "crusader": 0.516,
      "archon": 0.515,
      "legend": 0.517,
      "ancient": 0.521,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 1833,
      "guardian": 7253,
      "crusader": 17048,
      "archon": 35256,
      "legend": 50379,
      "ancient": 32544,
      "divine": 26351
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.492,
      "crusader": 0.485,
      "archon": 0.496,
      "legend": 0.495,
      "ancient": 0.509,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 2040,
      "guardian": 7221,
      "crusader": 14449,
      "archon": 23992,
      "legend": 28001,
      "ancient": 18159,
      "divine": 16770
    },
    "counters": [
      "shadow-shaman",
      "weaver",
      "muerta",
      "queen-of-pain",
      "warlock",
      "centaur-warrunner"
    ],
    "weakAgainst": [
      "largo",
      "shadow-demon",
      "clockwerk",
      "kez",
      "chen",
      "razor"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Observer Ward",
      "Magic Stick",
      "Quelling Blade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Mithril Hammer",
      "Blink Dagger",
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.458,
      "crusader": 0.451,
      "archon": 0.464,
      "legend": 0.473,
      "ancient": 0.487,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 1732,
      "guardian": 5132,
      "crusader": 10422,
      "archon": 18716,
      "legend": 26498,
      "ancient": 17760,
      "divine": 15081
    },
    "counters": [
      "silencer",
      "marci",
      "weaver",
      "lina",
      "bristleback",
      "terrorblade"
    ],
    "weakAgainst": [
      "huskar",
      "nyx-assassin",
      "bane",
      "centaur-warrunner",
      "night-stalker",
      "morphling"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Circlet",
      "Magic Stick"
    ],
    "coreItems": [
      "Witch Blade",
      "Oblivion Staff",
      "Blink Dagger",
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.531,
      "guardian": 0.525,
      "crusader": 0.522,
      "archon": 0.515,
      "legend": 0.508,
      "ancient": 0.5,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 15691,
      "guardian": 60821,
      "crusader": 132543,
      "archon": 232390,
      "legend": 259952,
      "ancient": 139035,
      "divine": 99107
    },
    "counters": [
      "morphling",
      "gyrocopter",
      "lina",
      "dark-willow",
      "clinkz",
      "wraith-king"
    ],
    "weakAgainst": [
      "drow-ranger",
      "earth-spirit",
      "phoenix",
      "largo",
      "doom",
      "terrorblade"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Observer and Sentry Wards",
      "Blood Grenade"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.471,
      "crusader": 0.479,
      "archon": 0.492,
      "legend": 0.495,
      "ancient": 0.505,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 3989,
      "guardian": 13643,
      "crusader": 26448,
      "archon": 43762,
      "legend": 51845,
      "ancient": 29456,
      "divine": 19275
    },
    "counters": [
      "ogre-magi",
      "dragon-knight",
      "mars",
      "disruptor",
      "timbersaw",
      "tusk"
    ],
    "weakAgainst": [
      "shadow-demon",
      "shadow-fiend",
      "snapfire",
      "jakiro",
      "windranger"
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
      "Glimmer Cape",
      "Aether Lens",
      "Staff of Wizardry",
      "Vitality Booster"
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.481,
      "crusader": 0.48,
      "archon": 0.475,
      "legend": 0.475,
      "ancient": 0.477,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 4940,
      "guardian": 17897,
      "crusader": 38141,
      "archon": 71651,
      "legend": 93893,
      "ancient": 53164,
      "divine": 33686
    },
    "counters": [
      "timbersaw",
      "sand-king",
      "ursa",
      "marci",
      "sven",
      "witch-doctor"
    ],
    "weakAgainst": [
      "chen",
      "largo",
      "keeper-of-the-light",
      "treant-protector",
      "earth-spirit",
      "enchantress"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Sentry Ward",
      "Circlet"
    ],
    "coreItems": [
      "Ogre Axe",
      "Staff of Wizardry",
      "Kaya",
      "Point Booster",
      "Blade of Alacrity"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.496,
      "crusader": 0.503,
      "archon": 0.509,
      "legend": 0.507,
      "ancient": 0.5,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 6245,
      "guardian": 17759,
      "crusader": 31654,
      "archon": 52376,
      "legend": 63208,
      "ancient": 35453,
      "divine": 20778
    },
    "counters": [
      "gyrocopter",
      "skywrath-mage",
      "marci",
      "warlock",
      "tidehunter",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "treant-protector",
      "phoenix",
      "doom",
      "shadow-shaman",
      "lion",
      "hoodwink"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Faerie Fire",
      "Magic Stick",
      "Slippers of Agility"
    ],
    "coreItems": [
      "Ogre Axe",
      "Yasha",
      "Blade of Alacrity",
      "Mithril Hammer",
      "Black King Bar"
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
    "overallWin": 0.534,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.526,
      "crusader": 0.527,
      "archon": 0.534,
      "legend": 0.537,
      "ancient": 0.541,
      "divine": 0.534
    },
    "pickByBracket": {
      "herald": 6100,
      "guardian": 18837,
      "crusader": 33773,
      "archon": 52901,
      "legend": 57708,
      "ancient": 30503,
      "divine": 17772
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.469,
      "crusader": 0.476,
      "archon": 0.477,
      "legend": 0.482,
      "ancient": 0.496,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 2059,
      "guardian": 7762,
      "crusader": 17429,
      "archon": 33238,
      "legend": 45061,
      "ancient": 31020,
      "divine": 27165
    },
    "counters": [
      "skywrath-mage",
      "timbersaw",
      "viper",
      "sven",
      "brewmaster",
      "muerta"
    ],
    "weakAgainst": [
      "alchemist",
      "chen",
      "keeper-of-the-light",
      "shadow-demon",
      "treant-protector",
      "invoker"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Tango",
      "Blood Grenade",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Blink Dagger",
      "Staff of Wizardry",
      "Essence Distiller",
      "Eul's Scepter of Divinity"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.491,
      "crusader": 0.491,
      "archon": 0.49,
      "legend": 0.495,
      "ancient": 0.499,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 7145,
      "guardian": 29286,
      "crusader": 68766,
      "archon": 142918,
      "legend": 210787,
      "ancient": 134854,
      "divine": 96024
    },
    "counters": [
      "medusa",
      "weaver",
      "phantom-assassin",
      "magnus",
      "ancient-apparition",
      "undying"
    ],
    "weakAgainst": [
      "earth-spirit",
      "enigma",
      "lone-druid",
      "bane",
      "lycan",
      "mirana"
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
      "Essence Distiller",
      "Blink Dagger",
      "Aghanim's Shard",
      "Arcane Boots",
      "Staff of Wizardry"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.519,
      "crusader": 0.506,
      "archon": 0.5,
      "legend": 0.494,
      "ancient": 0.49,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 3877,
      "guardian": 12631,
      "crusader": 23760,
      "archon": 36459,
      "legend": 41552,
      "ancient": 22460,
      "divine": 14784
    },
    "counters": [
      "disruptor",
      "lion",
      "jakiro",
      "underlord",
      "mars",
      "void-spirit"
    ],
    "weakAgainst": [
      "dragon-knight",
      "snapfire",
      "phoenix",
      "queen-of-pain",
      "invoker",
      "slardar"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Sentry Ward",
      "Faerie Fire",
      "Quelling Blade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Staff of Wizardry",
      "Point Booster",
      "Blink Dagger",
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
    "overallWin": 0.45,
    "winByBracket": {
      "herald": 0.381,
      "guardian": 0.411,
      "crusader": 0.435,
      "archon": 0.451,
      "legend": 0.453,
      "ancient": 0.459,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 1426,
      "guardian": 4254,
      "crusader": 8420,
      "archon": 14372,
      "legend": 18877,
      "ancient": 12133,
      "divine": 9055
    },
    "counters": [
      "weaver",
      "dazzle",
      "primal-beast",
      "ring-master",
      "gyrocopter",
      "mars"
    ],
    "weakAgainst": [
      "bane",
      "techies",
      "phoenix",
      "crystal-maiden",
      "pangolier",
      "chen"
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
      "Blink Dagger",
      "Aghanim's Shard",
      "Glimmer Cape",
      "Vitality Booster"
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
    "overallWin": 0.437,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.45,
      "crusader": 0.451,
      "archon": 0.443,
      "legend": 0.431,
      "ancient": 0.421,
      "divine": 0.405
    },
    "pickByBracket": {
      "herald": 9309,
      "guardian": 27720,
      "crusader": 51546,
      "archon": 80005,
      "legend": 82900,
      "ancient": 40154,
      "divine": 21199
    },
    "counters": [
      "medusa",
      "night-stalker",
      "earthshaker",
      "pugna",
      "death-prophet",
      "undying"
    ],
    "weakAgainst": [
      "enigma",
      "lone-druid",
      "venomancer",
      "monkey-king",
      "mirana",
      "phoenix"
    ],
    "startItems": [
      "Faerie Fire",
      "Iron Branch",
      "Tango",
      "Magic Wand",
      "Circlet",
      "Magic Stick"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Dragon Lance",
      "Yasha",
      "Staff of Wizardry",
      "Manta Style"
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.518,
      "crusader": 0.521,
      "archon": 0.518,
      "legend": 0.517,
      "ancient": 0.515,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 11743,
      "guardian": 41168,
      "crusader": 80260,
      "archon": 129635,
      "legend": 141740,
      "ancient": 71702,
      "divine": 38885
    },
    "counters": [
      "kunkka",
      "sven",
      "razor",
      "ring-master",
      "crystal-maiden",
      "zeus"
    ],
    "weakAgainst": [
      "dawnbreaker",
      "batrider",
      "hoodwink",
      "beastmaster",
      "primal-beast",
      "juggernaut"
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.54,
      "guardian": 0.53,
      "crusader": 0.515,
      "archon": 0.509,
      "legend": 0.501,
      "ancient": 0.498,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 6243,
      "guardian": 24804,
      "crusader": 52372,
      "archon": 91013,
      "legend": 104554,
      "ancient": 52583,
      "divine": 29456
    },
    "counters": [
      "ursa",
      "lina",
      "void-spirit",
      "timbersaw",
      "jakiro",
      "phoenix"
    ],
    "weakAgainst": [
      "largo",
      "puck",
      "spirit-breaker",
      "keeper-of-the-light",
      "doom",
      "terrorblade"
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
      "herald": 0.507,
      "guardian": 0.506,
      "crusader": 0.5,
      "archon": 0.5,
      "legend": 0.496,
      "ancient": 0.495,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 9213,
      "guardian": 32149,
      "crusader": 62003,
      "archon": 100161,
      "legend": 109607,
      "ancient": 57494,
      "divine": 35988
    },
    "counters": [
      "ancient-apparition",
      "terrorblade",
      "queen-of-pain",
      "witch-doctor",
      "dragon-knight",
      "nature-s-prophet"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "clinkz",
      "kunkka",
      "nyx-assassin",
      "phoenix"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Mantle of Intelligence"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Vitality Booster",
      "Arcane Boots",
      "Rod of Atos",
      "Aghanim's Shard"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.5,
      "crusader": 0.505,
      "archon": 0.496,
      "legend": 0.487,
      "ancient": 0.486,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 4839,
      "guardian": 16887,
      "crusader": 31817,
      "archon": 50361,
      "legend": 56387,
      "ancient": 29981,
      "divine": 17211
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Observer Ward",
      "Faerie Fire"
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.536,
      "guardian": 0.518,
      "crusader": 0.504,
      "archon": 0.495,
      "legend": 0.489,
      "ancient": 0.491,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 7022,
      "guardian": 26350,
      "crusader": 56500,
      "archon": 105773,
      "legend": 139433,
      "ancient": 83848,
      "divine": 61839
    },
    "counters": [
      "warlock",
      "beastmaster",
      "earth-spirit",
      "dark-willow",
      "hoodwink",
      "storm-spirit"
    ],
    "weakAgainst": [
      "leshrac",
      "witch-doctor",
      "mars",
      "treant-protector",
      "techies",
      "shadow-demon"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Faerie Fire",
      "Tango",
      "Magic Stick",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Ogre Axe",
      "Diffusal Blade",
      "Staff of Wizardry",
      "Point Booster"
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
      "herald": 0.472,
      "guardian": 0.485,
      "crusader": 0.488,
      "archon": 0.489,
      "legend": 0.492,
      "ancient": 0.491,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 3634,
      "guardian": 13359,
      "crusader": 30880,
      "archon": 62068,
      "legend": 90464,
      "ancient": 60340,
      "divine": 43464
    },
    "counters": [
      "sand-king",
      "phantom-lancer",
      "death-prophet",
      "tidehunter",
      "earthshaker",
      "medusa"
    ],
    "weakAgainst": [
      "bane",
      "kunkka",
      "treant-protector",
      "clinkz",
      "keeper-of-the-light",
      "marci"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Blood Grenade",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Blink Dagger",
      "Staff of Wizardry",
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.511,
      "crusader": 0.501,
      "archon": 0.497,
      "legend": 0.49,
      "ancient": 0.48,
      "divine": 0.467
    },
    "pickByBracket": {
      "herald": 17562,
      "guardian": 58552,
      "crusader": 111698,
      "archon": 181168,
      "legend": 189154,
      "ancient": 82623,
      "divine": 35741
    },
    "counters": [
      "sven",
      "morphling",
      "ursa",
      "lich",
      "tiny",
      "zeus"
    ],
    "weakAgainst": [
      "warlock",
      "doom",
      "tidehunter",
      "axe",
      "nature-s-prophet",
      "rubick"
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
      "Mithril Hammer",
      "Dragon Lance",
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
    "overallWin": 0.531,
    "winByBracket": {
      "herald": 0.553,
      "guardian": 0.536,
      "crusader": 0.533,
      "archon": 0.532,
      "legend": 0.531,
      "ancient": 0.526,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 5610,
      "guardian": 22560,
      "crusader": 47931,
      "archon": 79992,
      "legend": 88540,
      "ancient": 41916,
      "divine": 23009
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.519,
      "crusader": 0.514,
      "archon": 0.517,
      "legend": 0.519,
      "ancient": 0.518,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 11414,
      "guardian": 39243,
      "crusader": 80010,
      "archon": 135264,
      "legend": 165787,
      "ancient": 92335,
      "divine": 61908
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.472,
      "crusader": 0.472,
      "archon": 0.472,
      "legend": 0.472,
      "ancient": 0.478,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 3541,
      "guardian": 11820,
      "crusader": 23750,
      "archon": 39724,
      "legend": 48941,
      "ancient": 30474,
      "divine": 20467
    },
    "counters": [
      "templar-assassin",
      "alchemist",
      "dark-seer",
      "troll-warlord",
      "lich",
      "void-spirit"
    ],
    "weakAgainst": [
      "mirana",
      "treant-protector",
      "huskar",
      "sniper",
      "slark",
      "dawnbreaker"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Circlet",
      "Magic Stick"
    ],
    "coreItems": [
      "Ogre Axe",
      "Staff of Wizardry",
      "Kaya",
      "Blitz Knuckles",
      "Oblivion Staff"
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.505,
      "crusader": 0.509,
      "archon": 0.517,
      "legend": 0.517,
      "ancient": 0.522,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 6937,
      "guardian": 23072,
      "crusader": 45186,
      "archon": 75617,
      "legend": 90229,
      "ancient": 54352,
      "divine": 43458
    },
    "counters": [
      "dark-seer",
      "skywrath-mage",
      "ursa",
      "centaur-warrunner",
      "lina",
      "crystal-maiden"
    ],
    "weakAgainst": [
      "sniper",
      "lion",
      "brewmaster",
      "shadow-shaman",
      "invoker",
      "tiny"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Quelling Blade",
      "Magic Stick",
      "Tango",
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.51,
      "crusader": 0.512,
      "archon": 0.511,
      "legend": 0.51,
      "ancient": 0.51,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 9061,
      "guardian": 32147,
      "crusader": 65772,
      "archon": 109198,
      "legend": 128171,
      "ancient": 73329,
      "divine": 53657
    },
    "counters": [
      "disruptor",
      "viper",
      "crystal-maiden",
      "undying",
      "luna",
      "shadow-demon"
    ],
    "weakAgainst": [
      "phoenix",
      "monkey-king",
      "juggernaut",
      "muerta",
      "bane",
      "enchantress"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Vitality Booster",
      "Consecrated Wraps",
      "Staff of Wizardry",
      "Pavise"
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
    "overallWin": 0.458,
    "winByBracket": {
      "herald": 0.451,
      "guardian": 0.443,
      "crusader": 0.458,
      "archon": 0.457,
      "legend": 0.461,
      "ancient": 0.463,
      "divine": 0.463
    },
    "pickByBracket": {
      "herald": 3921,
      "guardian": 12747,
      "crusader": 24861,
      "archon": 37878,
      "legend": 40588,
      "ancient": 22327,
      "divine": 15649
    },
    "counters": [
      "crystal-maiden",
      "lion",
      "kunkka",
      "clinkz",
      "void-spirit",
      "timbersaw"
    ],
    "weakAgainst": [
      "monkey-king",
      "treant-protector",
      "storm-spirit",
      "largo",
      "underlord",
      "kez"
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
      "Blink Dagger",
      "Desolator",
      "Dragon Lance",
      "Blade of Alacrity"
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
    "overallWin": 0.456,
    "winByBracket": {
      "herald": 0.463,
      "guardian": 0.459,
      "crusader": 0.457,
      "archon": 0.449,
      "legend": 0.451,
      "ancient": 0.458,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 3022,
      "guardian": 9371,
      "crusader": 17476,
      "archon": 26745,
      "legend": 28059,
      "ancient": 16864,
      "divine": 14478
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.5,
      "crusader": 0.505,
      "archon": 0.499,
      "legend": 0.492,
      "ancient": 0.482,
      "divine": 0.474
    },
    "pickByBracket": {
      "herald": 5021,
      "guardian": 18830,
      "crusader": 42312,
      "archon": 80516,
      "legend": 100575,
      "ancient": 56610,
      "divine": 33607
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Quelling Blade",
      "Circlet"
    ],
    "coreItems": [
      "Blink Dagger",
      "Staff of Wizardry",
      "Ogre Axe",
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
    "overallWin": 0.46,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.468,
      "crusader": 0.467,
      "archon": 0.459,
      "legend": 0.459,
      "ancient": 0.46,
      "divine": 0.452
    },
    "pickByBracket": {
      "herald": 3135,
      "guardian": 11219,
      "crusader": 24115,
      "archon": 43573,
      "legend": 55606,
      "ancient": 35239,
      "divine": 29538
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Magic Stick",
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.46,
      "crusader": 0.459,
      "archon": 0.468,
      "legend": 0.477,
      "ancient": 0.483,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 3386,
      "guardian": 11824,
      "crusader": 24513,
      "archon": 40718,
      "legend": 48389,
      "ancient": 29102,
      "divine": 21501
    },
    "counters": [],
    "weakAgainst": [
      "jakiro",
      "lion",
      "shadow-fiend",
      "rubick"
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
      "Blink Dagger",
      "Blade of Alacrity"
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
    "overallWin": 0.453,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.453,
      "crusader": 0.454,
      "archon": 0.45,
      "legend": 0.449,
      "ancient": 0.458,
      "divine": 0.457
    },
    "pickByBracket": {
      "herald": 3685,
      "guardian": 10742,
      "crusader": 18783,
      "archon": 28342,
      "legend": 33784,
      "ancient": 21406,
      "divine": 17583
    },
    "counters": [
      "weaver",
      "bristleback",
      "sven",
      "void-spirit",
      "sand-king",
      "enchantress"
    ],
    "weakAgainst": [
      "enigma",
      "bane",
      "sniper",
      "keeper-of-the-light",
      "treant-protector",
      "kez"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Magic Stick",
      "Tango",
      "Circlet",
      "Faerie Fire"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Echo Sabre",
      "Mithril Hammer",
      "Broadsword"
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
    "overallWin": 0.456,
    "winByBracket": {
      "herald": 0.448,
      "guardian": 0.449,
      "crusader": 0.461,
      "archon": 0.458,
      "legend": 0.453,
      "ancient": 0.455,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 1811,
      "guardian": 5381,
      "crusader": 10180,
      "archon": 15351,
      "legend": 15589,
      "ancient": 7773,
      "divine": 4354
    },
    "counters": [
      "gyrocopter",
      "invoker",
      "skywrath-mage",
      "spirit-breaker",
      "dawnbreaker",
      "razor"
    ],
    "weakAgainst": [
      "enchantress"
    ],
    "startItems": [
      "Boots of Speed",
      "Blood Grenade",
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
      "Solar Crest"
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.526,
      "crusader": 0.524,
      "archon": 0.522,
      "legend": 0.514,
      "ancient": 0.521,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 4365,
      "guardian": 11629,
      "crusader": 17925,
      "archon": 24127,
      "legend": 22460,
      "ancient": 11316,
      "divine": 6801
    },
    "counters": [
      "slardar",
      "shadow-fiend",
      "silencer",
      "skywrath-mage",
      "rubick"
    ],
    "weakAgainst": [
      "storm-spirit",
      "lion",
      "dragon-knight",
      "windranger",
      "disruptor",
      "warlock"
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
    "overallWin": 0.479,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.442,
      "crusader": 0.463,
      "archon": 0.471,
      "legend": 0.479,
      "ancient": 0.491,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 1973,
      "guardian": 7087,
      "crusader": 15565,
      "archon": 29502,
      "legend": 42871,
      "ancient": 31274,
      "divine": 26493
    },
    "counters": [
      "vengeful-spirit",
      "marci",
      "void-spirit",
      "magnus",
      "ancient-apparition",
      "pudge"
    ],
    "weakAgainst": [
      "treant-protector",
      "muerta",
      "phoenix",
      "venomancer",
      "clinkz",
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
      "Blink Dagger",
      "Phase Boots",
      "Ogre Axe",
      "Staff of Wizardry",
      "Mithril Hammer"
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.515,
      "crusader": 0.505,
      "archon": 0.495,
      "legend": 0.48,
      "ancient": 0.475,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 2200,
      "guardian": 8876,
      "crusader": 19993,
      "archon": 38520,
      "legend": 47124,
      "ancient": 25074,
      "divine": 13662
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.499,
      "crusader": 0.501,
      "archon": 0.5,
      "legend": 0.498,
      "ancient": 0.493,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 6897,
      "guardian": 25731,
      "crusader": 53881,
      "archon": 92869,
      "legend": 105015,
      "ancient": 54623,
      "divine": 34197
    },
    "counters": [
      "lion",
      "luna",
      "invoker",
      "void-spirit",
      "dragon-knight",
      "warlock"
    ],
    "weakAgainst": [
      "treant-protector",
      "winter-wyvern",
      "jakiro",
      "spirit-breaker",
      "pangolier",
      "beastmaster"
    ],
    "startItems": [
      "Iron Branch",
      "Enchanted Mango",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Blink Dagger",
      "Vitality Booster",
      "Point Booster",
      "Tiara of Selemene"
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.443,
      "guardian": 0.459,
      "crusader": 0.47,
      "archon": 0.487,
      "legend": 0.491,
      "ancient": 0.495,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 5367,
      "guardian": 16371,
      "crusader": 31217,
      "archon": 53712,
      "legend": 68690,
      "ancient": 41351,
      "divine": 28837
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.53,
      "crusader": 0.527,
      "archon": 0.525,
      "legend": 0.524,
      "ancient": 0.516,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 6227,
      "guardian": 21344,
      "crusader": 43229,
      "archon": 75248,
      "legend": 88112,
      "ancient": 46666,
      "divine": 24313
    },
    "counters": [
      "lich",
      "disruptor",
      "ursa",
      "hoodwink",
      "lina",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "tusk",
      "rubick",
      "doom",
      "luna",
      "ogre-magi",
      "crystal-maiden"
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
      "Staff of Wizardry",
      "Specialist's Array",
      "Ogre Axe",
      "Broadsword"
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.488,
      "crusader": 0.488,
      "archon": 0.488,
      "legend": 0.487,
      "ancient": 0.485,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 5900,
      "guardian": 19644,
      "crusader": 39144,
      "archon": 64743,
      "legend": 70554,
      "ancient": 35411,
      "divine": 18796
    },
    "counters": [
      "dragon-knight",
      "warlock",
      "shadow-fiend",
      "zeus",
      "tusk",
      "storm-spirit"
    ],
    "weakAgainst": [
      "ember-spirit",
      "doom",
      "invoker",
      "pudge",
      "batrider",
      "slardar"
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
      "Force Staff"
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
      "herald": 0.485,
      "guardian": 0.476,
      "crusader": 0.476,
      "archon": 0.482,
      "legend": 0.486,
      "ancient": 0.492,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 10840,
      "guardian": 30014,
      "crusader": 47651,
      "archon": 67325,
      "legend": 69547,
      "ancient": 33520,
      "divine": 21031
    },
    "counters": [
      "ancient-apparition",
      "bristleback",
      "dragon-knight",
      "skywrath-mage",
      "silencer",
      "pangolier"
    ],
    "weakAgainst": [
      "techies",
      "axe",
      "beastmaster",
      "treant-protector",
      "windranger",
      "dawnbreaker"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Enchanted Mango"
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
    "overallWin": 0.532,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.494,
      "crusader": 0.52,
      "archon": 0.518,
      "legend": 0.539,
      "ancient": 0.548,
      "divine": 0.558
    },
    "pickByBracket": {
      "herald": 1319,
      "guardian": 4155,
      "crusader": 7972,
      "archon": 12340,
      "legend": 13946,
      "ancient": 8279,
      "divine": 8533
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Enchanted Mango",
      "Tango",
      "Faerie Fire",
      "Magic Stick"
    ],
    "coreItems": [
      "Drum of Endurance",
      "Vladmir's Offering",
      "Ring of Tarrasque",
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.488,
      "crusader": 0.489,
      "archon": 0.5,
      "legend": 0.504,
      "ancient": 0.504,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 2260,
      "guardian": 7036,
      "crusader": 14191,
      "archon": 24599,
      "legend": 33623,
      "ancient": 23381,
      "divine": 19266
    },
    "counters": [
      "zeus",
      "dragon-knight",
      "weaver",
      "pudge",
      "viper",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "terrorblade",
      "brewmaster",
      "phoenix",
      "treant-protector",
      "enchantress"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Circlet",
      "Faerie Fire",
      "Quelling Blade"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Spirit Vessel",
      "Aghanim's Shard",
      "Blade of Alacrity",
      "Kaya"
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
      "herald": 0.506,
      "guardian": 0.514,
      "crusader": 0.506,
      "archon": 0.502,
      "legend": 0.493,
      "ancient": 0.485,
      "divine": 0.478
    },
    "pickByBracket": {
      "herald": 4064,
      "guardian": 14907,
      "crusader": 30359,
      "archon": 51805,
      "legend": 57376,
      "ancient": 27171,
      "divine": 15785
    },
    "counters": [
      "sniper",
      "techies",
      "night-stalker",
      "faceless-void",
      "doom",
      "crystal-maiden"
    ],
    "weakAgainst": [
      "bane",
      "keeper-of-the-light",
      "treant-protector",
      "venomancer",
      "slark",
      "kunkka"
    ],
    "startItems": [
      "Iron Branch",
      "Blood Grenade",
      "Tango",
      "Observer and Sentry Wards",
      "Smoke of Deceit",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Glimmer Cape",
      "Pavise",
      "Solar Crest",
      "Staff of Wizardry"
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.481,
      "crusader": 0.474,
      "archon": 0.473,
      "legend": 0.479,
      "ancient": 0.477,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 6113,
      "guardian": 17750,
      "crusader": 29762,
      "archon": 44380,
      "legend": 47248,
      "ancient": 24736,
      "divine": 16038
    },
    "counters": [
      "gyrocopter",
      "ancient-apparition",
      "brewmaster",
      "queen-of-pain",
      "lion",
      "snapfire"
    ],
    "weakAgainst": [
      "morphling",
      "tiny",
      "shadow-demon",
      "centaur-warrunner",
      "rubick",
      "windranger"
    ],
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.483,
      "crusader": 0.481,
      "archon": 0.481,
      "legend": 0.482,
      "ancient": 0.486,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 11491,
      "guardian": 37996,
      "crusader": 73189,
      "archon": 124225,
      "legend": 157403,
      "ancient": 92724,
      "divine": 67506
    },
    "counters": [
      "grimstroke",
      "zeus",
      "weaver",
      "sand-king",
      "lifestealer",
      "medusa"
    ],
    "weakAgainst": [
      "treant-protector",
      "enigma",
      "lone-druid",
      "ember-spirit",
      "bane",
      "alchemist"
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
      "Essence Distiller",
      "Vitality Booster",
      "Maelstrom",
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
      "herald": 0.491,
      "guardian": 0.482,
      "crusader": 0.486,
      "archon": 0.492,
      "legend": 0.497,
      "ancient": 0.508,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 3232,
      "guardian": 11506,
      "crusader": 23690,
      "archon": 40119,
      "legend": 49269,
      "ancient": 31122,
      "divine": 31576
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.529,
      "crusader": 0.525,
      "archon": 0.525,
      "legend": 0.523,
      "ancient": 0.513,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 11423,
      "guardian": 43226,
      "crusader": 89320,
      "archon": 155334,
      "legend": 177636,
      "ancient": 90106,
      "divine": 55602
    },
    "counters": [
      "dazzle",
      "outworld-devourer",
      "centaur-warrunner",
      "slark",
      "crystal-maiden",
      "pudge"
    ],
    "weakAgainst": [
      "earthshaker",
      "snapfire",
      "ember-spirit",
      "clockwerk",
      "largo",
      "mirana"
    ],
    "startItems": [
      "Iron Branch",
      "Observer and Sentry Wards",
      "Tango",
      "Blood Grenade",
      "Smoke of Deceit",
      "Enchanted Mango"
    ],
    "coreItems": [
      "Arcane Boots",
      "Pavise",
      "Vitality Booster",
      "Blink Dagger",
      "Ghost Scepter"
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
    "overallWin": 0.552,
    "winByBracket": {
      "herald": 0.567,
      "guardian": 0.565,
      "crusader": 0.566,
      "archon": 0.558,
      "legend": 0.548,
      "ancient": 0.541,
      "divine": 0.526
    },
    "pickByBracket": {
      "herald": 8628,
      "guardian": 32076,
      "crusader": 67665,
      "archon": 120376,
      "legend": 143639,
      "ancient": 71791,
      "divine": 35913
    },
    "counters": [
      "lion",
      "chaos-knight"
    ],
    "weakAgainst": [
      "pudge",
      "ogre-magi",
      "invoker",
      "skywrath-mage",
      "disruptor",
      "luna"
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
      "Sacred Relic",
      "Radiance",
      "Talisman of Evasion",
      "Blink Dagger",
      "Mithril Hammer"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.497,
      "crusader": 0.503,
      "archon": 0.506,
      "legend": 0.502,
      "ancient": 0.499,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 9691,
      "guardian": 32264,
      "crusader": 63130,
      "archon": 107649,
      "legend": 126962,
      "ancient": 68166,
      "divine": 40825
    },
    "counters": [
      "mars",
      "disruptor",
      "necrophos",
      "dawnbreaker",
      "dragon-knight",
      "invoker"
    ],
    "weakAgainst": [
      "void-spirit",
      "juggernaut",
      "windranger",
      "grimstroke",
      "sniper",
      "centaur-warrunner"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Enchanted Mango",
      "Faerie Fire",
      "Blood Grenade"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Point Booster",
      "Blade of Alacrity",
      "Aghanim's Shard"
    ]
  }
];

export const HERO_DATA_BY_ID: Record<string, HeroData> = Object.fromEntries(
  HERO_DATA.map((h) => [h.id, h]),
);
