// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-11-23
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
    "overallWin": 0.548,
    "winByBracket": {
      "herald": 0.551,
      "guardian": 0.545,
      "crusader": 0.546,
      "archon": 0.551,
      "legend": 0.55,
      "ancient": 0.551,
      "divine": 0.542
    },
    "pickByBracket": {
      "herald": 3472,
      "guardian": 12600,
      "crusader": 30211,
      "archon": 62815,
      "legend": 89990,
      "ancient": 59569,
      "divine": 46650
    },
    "counters": [
      "lion",
      "disruptor",
      "dragon-knight",
      "void-spirit",
      "axe",
      "windranger"
    ],
    "weakAgainst": [
      "hoodwink",
      "gyrocopter",
      "shadow-demon",
      "pudge",
      "ember-spirit",
      "tiny"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Circlet",
      "Quelling Blade",
      "Sentry Ward"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Sacred Relic",
      "Radiance",
      "Talisman of Evasion",
      "Diadem"
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.487,
      "crusader": 0.487,
      "archon": 0.477,
      "legend": 0.475,
      "ancient": 0.47,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 2249,
      "guardian": 7596,
      "crusader": 15742,
      "archon": 25646,
      "legend": 27917,
      "ancient": 15040,
      "divine": 8446
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
    "overallWin": 0.527,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.528,
      "crusader": 0.532,
      "archon": 0.535,
      "legend": 0.532,
      "ancient": 0.521,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 4933,
      "guardian": 19319,
      "crusader": 42641,
      "archon": 81344,
      "legend": 103233,
      "ancient": 61820,
      "divine": 41408
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.493,
      "crusader": 0.494,
      "archon": 0.49,
      "legend": 0.488,
      "ancient": 0.488,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 8963,
      "guardian": 32271,
      "crusader": 68761,
      "archon": 119587,
      "legend": 137060,
      "ancient": 74974,
      "divine": 50625
    },
    "counters": [
      "disruptor",
      "dark-willow",
      "rubick",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "lion",
      "ember-spirit",
      "skywrath-mage",
      "windranger",
      "storm-spirit",
      "ogre-magi"
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.501,
      "crusader": 0.51,
      "archon": 0.515,
      "legend": 0.518,
      "ancient": 0.517,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 3791,
      "guardian": 13266,
      "crusader": 27472,
      "archon": 43703,
      "legend": 44358,
      "ancient": 24284,
      "divine": 16791
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
      "Mithril Hammer",
      "Mjollnir",
      "Blitz Knuckles"
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.519,
      "crusader": 0.513,
      "archon": 0.508,
      "legend": 0.498,
      "ancient": 0.491,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 10098,
      "guardian": 36685,
      "crusader": 78735,
      "archon": 138631,
      "legend": 158664,
      "ancient": 85526,
      "divine": 50000
    },
    "counters": [
      "void-spirit",
      "ursa",
      "viper",
      "techies",
      "bristleback",
      "puck"
    ],
    "weakAgainst": [
      "bane",
      "monkey-king",
      "keeper-of-the-light",
      "treant-protector",
      "abaddon",
      "huskar"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.475,
      "crusader": 0.486,
      "archon": 0.489,
      "legend": 0.505,
      "ancient": 0.495,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 1983,
      "guardian": 6171,
      "crusader": 12135,
      "archon": 19367,
      "legend": 21311,
      "ancient": 12244,
      "divine": 9270
    },
    "counters": [
      "warlock",
      "axe",
      "timbersaw",
      "snapfire",
      "dawnbreaker",
      "phoenix"
    ],
    "weakAgainst": [
      "centaur-warrunner",
      "beastmaster",
      "dark-willow",
      "largo",
      "treant-protector",
      "winter-wyvern"
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
      "Point Booster",
      "Ogre Axe",
      "Arcane Boots",
      "Staff of Wizardry",
      "Aether Lens"
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.433,
      "guardian": 0.462,
      "crusader": 0.468,
      "archon": 0.459,
      "legend": 0.455,
      "ancient": 0.465,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 936,
      "guardian": 2808,
      "crusader": 6195,
      "archon": 11632,
      "legend": 14962,
      "ancient": 10937,
      "divine": 12742
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.475,
      "crusader": 0.481,
      "archon": 0.482,
      "legend": 0.494,
      "ancient": 0.509,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 2018,
      "guardian": 7372,
      "crusader": 16679,
      "archon": 31947,
      "legend": 44069,
      "ancient": 31377,
      "divine": 30148
    },
    "counters": [
      "lifestealer",
      "undying",
      "shadow-shaman",
      "clockwerk",
      "ursa",
      "viper"
    ],
    "weakAgainst": [
      "juggernaut",
      "slark",
      "grimstroke",
      "terrorblade",
      "batrider",
      "doom"
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
      "Ogre Axe",
      "Blink Dagger",
      "Ultimate Orb",
      "Helm of the Overlord",
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.506,
      "crusader": 0.51,
      "archon": 0.514,
      "legend": 0.519,
      "ancient": 0.524,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 5995,
      "guardian": 14696,
      "crusader": 22147,
      "archon": 30133,
      "legend": 26880,
      "ancient": 12706,
      "divine": 7430
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.48,
      "crusader": 0.485,
      "archon": 0.49,
      "legend": 0.502,
      "ancient": 0.512,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 4501,
      "guardian": 15008,
      "crusader": 27484,
      "archon": 43264,
      "legend": 49583,
      "ancient": 30838,
      "divine": 28857
    },
    "counters": [
      "dark-willow",
      "dragon-knight",
      "rubick",
      "tiny"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "windranger"
    ],
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.494,
      "crusader": 0.488,
      "archon": 0.506,
      "legend": 0.509,
      "ancient": 0.517,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 983,
      "guardian": 3465,
      "crusader": 7295,
      "archon": 13043,
      "legend": 16630,
      "ancient": 11883,
      "divine": 11329
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
      "herald": 0.531,
      "guardian": 0.52,
      "crusader": 0.503,
      "archon": 0.489,
      "legend": 0.475,
      "ancient": 0.461,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 8896,
      "guardian": 28421,
      "crusader": 47767,
      "archon": 63683,
      "legend": 54509,
      "ancient": 23784,
      "divine": 12797
    },
    "counters": [
      "brewmaster",
      "razor",
      "templar-assassin",
      "skywrath-mage",
      "techies",
      "sand-king"
    ],
    "weakAgainst": [
      "batrider",
      "keeper-of-the-light",
      "clockwerk",
      "phoenix",
      "ogre-magi",
      "viper"
    ],
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.519,
      "crusader": 0.525,
      "archon": 0.525,
      "legend": 0.525,
      "ancient": 0.528,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 3627,
      "guardian": 11028,
      "crusader": 20258,
      "archon": 30167,
      "legend": 29122,
      "ancient": 15722,
      "divine": 12127
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.51,
      "crusader": 0.492,
      "archon": 0.488,
      "legend": 0.476,
      "ancient": 0.47,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 2529,
      "guardian": 8645,
      "crusader": 19533,
      "archon": 36116,
      "legend": 41806,
      "ancient": 22277,
      "divine": 11292
    },
    "counters": [
      "bane",
      "terrorblade",
      "weaver",
      "dazzle",
      "puck",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "treant-protector",
      "brewmaster",
      "sniper",
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.503,
      "crusader": 0.491,
      "archon": 0.482,
      "legend": 0.474,
      "ancient": 0.473,
      "divine": 0.471
    },
    "pickByBracket": {
      "herald": 7789,
      "guardian": 28078,
      "crusader": 56633,
      "archon": 92349,
      "legend": 99077,
      "ancient": 53238,
      "divine": 32563
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.474,
      "crusader": 0.465,
      "archon": 0.476,
      "legend": 0.488,
      "ancient": 0.503,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 595,
      "guardian": 1991,
      "crusader": 4605,
      "archon": 7783,
      "legend": 9385,
      "ancient": 6351,
      "divine": 7372
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.5,
      "crusader": 0.501,
      "archon": 0.506,
      "legend": 0.508,
      "ancient": 0.514,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 6191,
      "guardian": 17554,
      "crusader": 27786,
      "archon": 38165,
      "legend": 38157,
      "ancient": 19825,
      "divine": 13619
    },
    "counters": [
      "clockwerk",
      "skywrath-mage",
      "snapfire",
      "jakiro",
      "lion",
      "gyrocopter"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "pangolier",
      "pudge",
      "kez",
      "templar-assassin",
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.503,
      "crusader": 0.487,
      "archon": 0.486,
      "legend": 0.489,
      "ancient": 0.487,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 1468,
      "guardian": 5314,
      "crusader": 10971,
      "archon": 20234,
      "legend": 25056,
      "ancient": 16467,
      "divine": 11967
    },
    "counters": [
      "tidehunter",
      "bristleback",
      "primal-beast",
      "underlord",
      "dawnbreaker",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "clinkz",
      "shadow-demon",
      "beastmaster",
      "keeper-of-the-light",
      "monkey-king",
      "treant-protector"
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
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.542,
      "guardian": 0.54,
      "crusader": 0.535,
      "archon": 0.527,
      "legend": 0.52,
      "ancient": 0.508,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 12271,
      "guardian": 42586,
      "crusader": 82186,
      "archon": 130345,
      "legend": 137794,
      "ancient": 73227,
      "divine": 42212
    },
    "counters": [
      "timbersaw",
      "slardar",
      "underlord",
      "mars",
      "chaos-knight",
      "enchantress"
    ],
    "weakAgainst": [
      "templar-assassin",
      "techies",
      "windranger",
      "witch-doctor",
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
      "Staff of Wizardry",
      "Glimmer Cape",
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.482,
      "crusader": 0.493,
      "archon": 0.489,
      "legend": 0.504,
      "ancient": 0.506,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 1536,
      "guardian": 5592,
      "crusader": 11870,
      "archon": 21493,
      "legend": 26607,
      "ancient": 18261,
      "divine": 17312
    },
    "counters": [
      "underlord",
      "mars",
      "tusk",
      "rubick"
    ],
    "weakAgainst": [
      "phoenix",
      "ember-spirit",
      "sven",
      "winter-wyvern",
      "mirana",
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.472,
      "crusader": 0.476,
      "archon": 0.481,
      "legend": 0.488,
      "ancient": 0.498,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 4112,
      "guardian": 14301,
      "crusader": 27678,
      "archon": 47263,
      "legend": 58518,
      "ancient": 38664,
      "divine": 32436
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.508,
      "crusader": 0.513,
      "archon": 0.516,
      "legend": 0.516,
      "ancient": 0.517,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 2860,
      "guardian": 10546,
      "crusader": 24826,
      "archon": 51213,
      "legend": 72245,
      "ancient": 48165,
      "divine": 35396
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.537,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.522,
      "crusader": 0.527,
      "archon": 0.534,
      "legend": 0.542,
      "ancient": 0.541,
      "divine": 0.543
    },
    "pickByBracket": {
      "herald": 4507,
      "guardian": 17844,
      "crusader": 40839,
      "archon": 77214,
      "legend": 95776,
      "ancient": 59681,
      "divine": 46848
    },
    "counters": [
      "ogre-magi",
      "beastmaster",
      "tiny",
      "shadow-fiend",
      "warlock",
      "snapfire"
    ],
    "weakAgainst": [
      "shadow-demon",
      "terrorblade",
      "centaur-warrunner",
      "witch-doctor",
      "ember-spirit",
      "slardar"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Smoke of Deceit",
      "Sentry Ward"
    ],
    "coreItems": [
      "Holy Locket",
      "Arcane Boots",
      "Blink Dagger",
      "Staff of Wizardry",
      "Mekansm"
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
    "overallWin": 0.456,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.462,
      "crusader": 0.465,
      "archon": 0.46,
      "legend": 0.454,
      "ancient": 0.45,
      "divine": 0.45
    },
    "pickByBracket": {
      "herald": 6332,
      "guardian": 19740,
      "crusader": 39695,
      "archon": 73438,
      "legend": 94742,
      "ancient": 59816,
      "divine": 43871
    },
    "counters": [
      "ogre-magi",
      "dragon-knight"
    ],
    "weakAgainst": [
      "snapfire",
      "hoodwink",
      "lion",
      "jakiro",
      "rubick",
      "shadow-fiend"
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
      "Eul's Scepter of Divinity",
      "Vitality Booster",
      "Mithril Hammer"
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.499,
      "crusader": 0.508,
      "archon": 0.507,
      "legend": 0.512,
      "ancient": 0.523,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 2862,
      "guardian": 11413,
      "crusader": 27822,
      "archon": 59240,
      "legend": 83492,
      "ancient": 52984,
      "divine": 40110
    },
    "counters": [
      "phantom-assassin",
      "bristleback",
      "weaver",
      "grimstroke",
      "leshrac",
      "night-stalker"
    ],
    "weakAgainst": [
      "abaddon",
      "ancient-apparition",
      "kez",
      "sand-king",
      "treant-protector",
      "drow-ranger"
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
      "Staff of Wizardry",
      "Ghost Scepter",
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
    "overallWin": 0.469,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.457,
      "crusader": 0.461,
      "archon": 0.458,
      "legend": 0.467,
      "ancient": 0.478,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 2509,
      "guardian": 8442,
      "crusader": 18514,
      "archon": 36106,
      "legend": 47689,
      "ancient": 31143,
      "divine": 25153
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.512,
      "crusader": 0.516,
      "archon": 0.513,
      "legend": 0.51,
      "ancient": 0.504,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 6052,
      "guardian": 22585,
      "crusader": 50261,
      "archon": 94394,
      "legend": 117074,
      "ancient": 70167,
      "divine": 50901
    },
    "counters": [
      "sand-king",
      "dazzle",
      "troll-warlord",
      "morphling",
      "chen",
      "doom"
    ],
    "weakAgainst": [
      "venomancer",
      "pugna",
      "viper",
      "abaddon",
      "marci",
      "void-spirit"
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.485,
      "crusader": 0.483,
      "archon": 0.477,
      "legend": 0.476,
      "ancient": 0.478,
      "divine": 0.463
    },
    "pickByBracket": {
      "herald": 11054,
      "guardian": 33509,
      "crusader": 63590,
      "archon": 102114,
      "legend": 108006,
      "ancient": 54108,
      "divine": 28625
    },
    "counters": [
      "pudge",
      "underlord",
      "spirit-breaker",
      "disruptor",
      "bristleback",
      "phoenix"
    ],
    "weakAgainst": [
      "treant-protector",
      "largo",
      "timbersaw",
      "shadow-demon",
      "hoodwink",
      "dark-willow"
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.418,
      "guardian": 0.464,
      "crusader": 0.46,
      "archon": 0.471,
      "legend": 0.479,
      "ancient": 0.484,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 1238,
      "guardian": 4419,
      "crusader": 10293,
      "archon": 21387,
      "legend": 29607,
      "ancient": 20918,
      "divine": 18894
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.501,
      "crusader": 0.502,
      "archon": 0.509,
      "legend": 0.516,
      "ancient": 0.517,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 11631,
      "guardian": 41168,
      "crusader": 86096,
      "archon": 153089,
      "legend": 188149,
      "ancient": 112513,
      "divine": 78379
    },
    "counters": [
      "witch-doctor",
      "dragon-knight"
    ],
    "weakAgainst": [
      "snapfire",
      "pangolier",
      "shadow-fiend",
      "hoodwink",
      "tusk",
      "rubick"
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
      "Blink Dagger",
      "Staff of Wizardry",
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.482,
      "crusader": 0.493,
      "archon": 0.495,
      "legend": 0.505,
      "ancient": 0.52,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 1320,
      "guardian": 4599,
      "crusader": 9717,
      "archon": 16104,
      "legend": 18449,
      "ancient": 11554,
      "divine": 9499
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
    "overallWin": 0.479,
    "winByBracket": {
      "herald": 0.465,
      "guardian": 0.452,
      "crusader": 0.459,
      "archon": 0.474,
      "legend": 0.481,
      "ancient": 0.492,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 2388,
      "guardian": 8333,
      "crusader": 18719,
      "archon": 34575,
      "legend": 46331,
      "ancient": 31175,
      "divine": 25372
    },
    "counters": [
      "dark-seer",
      "void-spirit",
      "terrorblade",
      "venomancer",
      "dazzle",
      "mars"
    ],
    "weakAgainst": [
      "clinkz",
      "treant-protector",
      "slark",
      "lone-druid",
      "alchemist",
      "leshrac"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Quelling Blade",
      "Sentry Ward"
    ],
    "coreItems": [
      "Spirit Vessel",
      "Ogre Axe",
      "Diadem",
      "Mithril Hammer",
      "Aghanim's Shard"
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.494,
      "crusader": 0.495,
      "archon": 0.494,
      "legend": 0.491,
      "ancient": 0.5,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 3393,
      "guardian": 9046,
      "crusader": 14200,
      "archon": 18965,
      "legend": 19870,
      "ancient": 12334,
      "divine": 10801
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.484,
      "crusader": 0.47,
      "archon": 0.49,
      "legend": 0.495,
      "ancient": 0.51,
      "divine": 0.536
    },
    "pickByBracket": {
      "herald": 3087,
      "guardian": 9437,
      "crusader": 18845,
      "archon": 29716,
      "legend": 31523,
      "ancient": 17578,
      "divine": 13941
    },
    "counters": [
      "shadow-fiend",
      "tiny",
      "windranger",
      "gyrocopter",
      "rubick",
      "tusk"
    ],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.483,
      "crusader": 0.482,
      "archon": 0.485,
      "legend": 0.486,
      "ancient": 0.488,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 5681,
      "guardian": 19412,
      "crusader": 37851,
      "archon": 60752,
      "legend": 63868,
      "ancient": 31848,
      "divine": 17290
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
      "lion",
      "warlock",
      "rubick",
      "ogre-magi",
      "pangolier",
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
    "overallWin": 0.53,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.522,
      "crusader": 0.524,
      "archon": 0.532,
      "legend": 0.528,
      "ancient": 0.533,
      "divine": 0.535
    },
    "pickByBracket": {
      "herald": 2864,
      "guardian": 11347,
      "crusader": 26954,
      "archon": 57170,
      "legend": 80400,
      "ancient": 53735,
      "divine": 43457
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.45,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.455,
      "crusader": 0.447,
      "archon": 0.452,
      "legend": 0.45,
      "ancient": 0.452,
      "divine": 0.442
    },
    "pickByBracket": {
      "herald": 2032,
      "guardian": 7114,
      "crusader": 17161,
      "archon": 35692,
      "legend": 48359,
      "ancient": 29420,
      "divine": 19826
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.472,
      "crusader": 0.475,
      "archon": 0.474,
      "legend": 0.476,
      "ancient": 0.475,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 6940,
      "guardian": 23284,
      "crusader": 47796,
      "archon": 81920,
      "legend": 92709,
      "ancient": 54035,
      "divine": 39343
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.432,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.439,
      "crusader": 0.434,
      "archon": 0.429,
      "legend": 0.427,
      "ancient": 0.432,
      "divine": 0.427
    },
    "pickByBracket": {
      "herald": 6674,
      "guardian": 17130,
      "crusader": 27499,
      "archon": 38178,
      "legend": 40213,
      "ancient": 22811,
      "divine": 16135
    },
    "counters": [
      "tidehunter",
      "puck",
      "storm-spirit",
      "phoenix",
      "underlord",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "hoodwink",
      "rubick",
      "lina"
    ],
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
      "Blade of Alacrity",
      "Mithril Hammer",
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.491,
      "crusader": 0.498,
      "archon": 0.497,
      "legend": 0.501,
      "ancient": 0.505,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 7602,
      "guardian": 28738,
      "crusader": 68470,
      "archon": 136402,
      "legend": 179806,
      "ancient": 110873,
      "divine": 77641
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.48,
      "crusader": 0.48,
      "archon": 0.476,
      "legend": 0.477,
      "ancient": 0.481,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 2438,
      "guardian": 8685,
      "crusader": 17963,
      "archon": 29545,
      "legend": 33253,
      "ancient": 20673,
      "divine": 16831
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
      "Aghanim's Scepter",
      "Mithril Hammer",
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.507,
      "crusader": 0.507,
      "archon": 0.495,
      "legend": 0.487,
      "ancient": 0.484,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 5499,
      "guardian": 18699,
      "crusader": 38500,
      "archon": 66094,
      "legend": 76151,
      "ancient": 39964,
      "divine": 21137
    },
    "counters": [
      "undying",
      "tinker",
      "chaos-knight",
      "weaver",
      "techies",
      "death-prophet"
    ],
    "weakAgainst": [
      "treant-protector",
      "pangolier",
      "sand-king",
      "clinkz",
      "enchantress",
      "huskar"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.498,
      "crusader": 0.499,
      "archon": 0.496,
      "legend": 0.493,
      "ancient": 0.488,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 11606,
      "guardian": 39453,
      "crusader": 80608,
      "archon": 142220,
      "legend": 171641,
      "ancient": 98463,
      "divine": 60079
    },
    "counters": [
      "zeus",
      "pangolier",
      "phoenix",
      "beastmaster",
      "techies",
      "nature-s-prophet"
    ],
    "weakAgainst": [
      "sniper",
      "snapfire",
      "puck",
      "rubick",
      "lich",
      "tiny"
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.464,
      "crusader": 0.468,
      "archon": 0.481,
      "legend": 0.489,
      "ancient": 0.491,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 3520,
      "guardian": 10905,
      "crusader": 20191,
      "archon": 30070,
      "legend": 30585,
      "ancient": 16881,
      "divine": 13261
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
      "earth-spirit",
      "slardar"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Blood Grenade"
    ],
    "coreItems": [
      "Boots of Travel",
      "Point Booster",
      "Staff of Wizardry",
      "Vitality Booster",
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
    "overallWin": 0.46,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.465,
      "crusader": 0.458,
      "archon": 0.46,
      "legend": 0.454,
      "ancient": 0.464,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 2784,
      "guardian": 8302,
      "crusader": 16964,
      "archon": 27850,
      "legend": 32975,
      "ancient": 21115,
      "divine": 17858
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.491,
      "crusader": 0.502,
      "archon": 0.503,
      "legend": 0.513,
      "ancient": 0.515,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 3370,
      "guardian": 10609,
      "crusader": 21654,
      "archon": 38000,
      "legend": 49413,
      "ancient": 31079,
      "divine": 19688
    },
    "counters": [
      "skywrath-mage",
      "snapfire",
      "warlock",
      "disruptor",
      "tiny",
      "pudge"
    ],
    "weakAgainst": [
      "shadow-demon",
      "shadow-shaman",
      "templar-assassin",
      "rubick",
      "storm-spirit",
      "invoker"
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
      "Point Booster",
      "Blade of Alacrity",
      "Black King Bar"
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.458,
      "guardian": 0.443,
      "crusader": 0.473,
      "archon": 0.471,
      "legend": 0.484,
      "ancient": 0.492,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 914,
      "guardian": 3096,
      "crusader": 6647,
      "archon": 12066,
      "legend": 15596,
      "ancient": 11002,
      "divine": 10553
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.526,
      "crusader": 0.529,
      "archon": 0.523,
      "legend": 0.524,
      "ancient": 0.52,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 8816,
      "guardian": 33672,
      "crusader": 71489,
      "archon": 127051,
      "legend": 143833,
      "ancient": 73767,
      "divine": 40726
    },
    "counters": [
      "bristleback",
      "ogre-magi",
      "pudge",
      "disruptor"
    ],
    "weakAgainst": [
      "shadow-fiend"
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
      "Ogre Axe",
      "Broadsword",
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.491,
      "crusader": 0.479,
      "archon": 0.489,
      "legend": 0.493,
      "ancient": 0.495,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 1620,
      "guardian": 5425,
      "crusader": 10814,
      "archon": 18456,
      "legend": 23064,
      "ancient": 15598,
      "divine": 14233
    },
    "counters": [
      "slark",
      "skywrath-mage",
      "lion",
      "ember-spirit",
      "timbersaw",
      "underlord"
    ],
    "weakAgainst": [
      "tiny",
      "shadow-demon",
      "invoker",
      "disruptor",
      "centaur-warrunner",
      "snapfire"
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
    "overallWin": 0.527,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.523,
      "crusader": 0.524,
      "archon": 0.532,
      "legend": 0.532,
      "ancient": 0.524,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 6308,
      "guardian": 22113,
      "crusader": 45855,
      "archon": 82638,
      "legend": 109647,
      "ancient": 69027,
      "divine": 48095
    },
    "counters": [
      "ursa",
      "necrophos",
      "ring-master",
      "razor",
      "beastmaster",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "treant-protector",
      "kez",
      "sniper",
      "vengeful-spirit",
      "keeper-of-the-light",
      "phoenix"
    ],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.493,
      "crusader": 0.496,
      "archon": 0.498,
      "legend": 0.503,
      "ancient": 0.503,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 6152,
      "guardian": 23195,
      "crusader": 52448,
      "archon": 99416,
      "legend": 124958,
      "ancient": 72216,
      "divine": 45343
    },
    "counters": [
      "muerta",
      "dragon-knight",
      "dawnbreaker",
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
    "overallWin": 0.449,
    "winByBracket": {
      "herald": 0.438,
      "guardian": 0.44,
      "crusader": 0.448,
      "archon": 0.449,
      "legend": 0.452,
      "ancient": 0.454,
      "divine": 0.447
    },
    "pickByBracket": {
      "herald": 10528,
      "guardian": 30358,
      "crusader": 55265,
      "archon": 86370,
      "legend": 92342,
      "ancient": 46575,
      "divine": 24790
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
      "pangolier",
      "pudge",
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.494,
      "crusader": 0.49,
      "archon": 0.49,
      "legend": 0.488,
      "ancient": 0.491,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 14926,
      "guardian": 53488,
      "crusader": 113854,
      "archon": 202361,
      "legend": 236698,
      "ancient": 129243,
      "divine": 75054
    },
    "counters": [
      "anti-mage",
      "grimstroke",
      "death-prophet",
      "sven",
      "morphling",
      "tinker"
    ],
    "weakAgainst": [
      "abaddon",
      "treant-protector",
      "pangolier",
      "undying",
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
    "overallWin": 0.469,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.477,
      "crusader": 0.462,
      "archon": 0.462,
      "legend": 0.47,
      "ancient": 0.477,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 1386,
      "guardian": 4626,
      "crusader": 10043,
      "archon": 16575,
      "legend": 17263,
      "ancient": 10354,
      "divine": 7712
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.506,
      "crusader": 0.5,
      "archon": 0.489,
      "legend": 0.486,
      "ancient": 0.485,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 8286,
      "guardian": 28804,
      "crusader": 59788,
      "archon": 106182,
      "legend": 123473,
      "ancient": 71944,
      "divine": 50323
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
      "magnus",
      "undying",
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.511,
      "crusader": 0.516,
      "archon": 0.517,
      "legend": 0.519,
      "ancient": 0.522,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 1763,
      "guardian": 6640,
      "crusader": 16512,
      "archon": 32521,
      "legend": 44977,
      "ancient": 31870,
      "divine": 29859
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.486,
      "crusader": 0.498,
      "archon": 0.506,
      "legend": 0.512,
      "ancient": 0.517,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 2892,
      "guardian": 12013,
      "crusader": 33144,
      "archon": 78329,
      "legend": 119572,
      "ancient": 79241,
      "divine": 53856
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
      "lion",
      "templar-assassin",
      "mars"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Gauntlets of Strength"
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.496,
      "crusader": 0.503,
      "archon": 0.508,
      "legend": 0.51,
      "ancient": 0.515,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 4531,
      "guardian": 13174,
      "crusader": 23366,
      "archon": 35332,
      "legend": 38947,
      "ancient": 23650,
      "divine": 17823
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.483,
      "crusader": 0.481,
      "archon": 0.489,
      "legend": 0.49,
      "ancient": 0.487,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 1836,
      "guardian": 6677,
      "crusader": 15431,
      "archon": 31857,
      "legend": 47522,
      "ancient": 34706,
      "divine": 27533
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.52,
      "crusader": 0.517,
      "archon": 0.515,
      "legend": 0.516,
      "ancient": 0.506,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 2296,
      "guardian": 7772,
      "crusader": 15290,
      "archon": 26369,
      "legend": 28893,
      "ancient": 14370,
      "divine": 8166
    },
    "counters": [],
    "weakAgainst": [
      "shadow-fiend",
      "rubick",
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
    "overallWin": 0.555,
    "winByBracket": {
      "herald": 0.544,
      "guardian": 0.546,
      "crusader": 0.548,
      "archon": 0.557,
      "legend": 0.558,
      "ancient": 0.558,
      "divine": 0.562
    },
    "pickByBracket": {
      "herald": 2371,
      "guardian": 7280,
      "crusader": 13287,
      "archon": 20148,
      "legend": 21976,
      "ancient": 12416,
      "divine": 9263
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.523,
      "guardian": 0.517,
      "crusader": 0.513,
      "archon": 0.508,
      "legend": 0.509,
      "ancient": 0.507,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 4291,
      "guardian": 16626,
      "crusader": 37425,
      "archon": 71226,
      "legend": 88113,
      "ancient": 51696,
      "divine": 35454
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
      "keeper-of-the-light",
      "timbersaw",
      "tidehunter",
      "ember-spirit",
      "slark",
      "beastmaster"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.484,
      "crusader": 0.481,
      "archon": 0.489,
      "legend": 0.495,
      "ancient": 0.513,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 4877,
      "guardian": 15251,
      "crusader": 30050,
      "archon": 50937,
      "legend": 62788,
      "ancient": 41400,
      "divine": 32645
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.476,
      "crusader": 0.472,
      "archon": 0.459,
      "legend": 0.461,
      "ancient": 0.459,
      "divine": 0.46
    },
    "pickByBracket": {
      "herald": 2612,
      "guardian": 9330,
      "crusader": 20297,
      "archon": 36943,
      "legend": 45245,
      "ancient": 27650,
      "divine": 20426
    },
    "counters": [
      "weaver",
      "queen-of-pain",
      "invoker",
      "razor",
      "mars",
      "warlock"
    ],
    "weakAgainst": [
      "sniper",
      "luna",
      "pudge",
      "treant-protector",
      "ursa",
      "lion"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.497,
      "crusader": 0.502,
      "archon": 0.501,
      "legend": 0.502,
      "ancient": 0.497,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 2728,
      "guardian": 7384,
      "crusader": 13420,
      "archon": 20759,
      "legend": 23540,
      "ancient": 13515,
      "divine": 9392
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.483,
      "crusader": 0.473,
      "archon": 0.47,
      "legend": 0.46,
      "ancient": 0.469,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 2964,
      "guardian": 9212,
      "crusader": 16136,
      "archon": 21685,
      "legend": 19514,
      "ancient": 9465,
      "divine": 6058
    },
    "counters": [
      "tusk"
    ],
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
    "overallWin": 0.418,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.437,
      "crusader": 0.419,
      "archon": 0.411,
      "legend": 0.409,
      "ancient": 0.417,
      "divine": 0.433
    },
    "pickByBracket": {
      "herald": 6833,
      "guardian": 23515,
      "crusader": 45162,
      "archon": 71418,
      "legend": 74685,
      "ancient": 39667,
      "divine": 27871
    },
    "counters": [
      "pangolier",
      "undying",
      "queen-of-pain",
      "clockwerk",
      "silencer",
      "slardar"
    ],
    "weakAgainst": [
      "juggernaut",
      "timbersaw",
      "kez",
      "pudge",
      "ember-spirit",
      "shadow-shaman"
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.496,
      "crusader": 0.489,
      "archon": 0.486,
      "legend": 0.481,
      "ancient": 0.478,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 9256,
      "guardian": 32241,
      "crusader": 63926,
      "archon": 107928,
      "legend": 122793,
      "ancient": 65387,
      "divine": 39581
    },
    "counters": [
      "underlord",
      "disruptor",
      "void-spirit",
      "timbersaw",
      "bristleback",
      "ursa"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "invoker",
      "lich",
      "muerta",
      "kez",
      "windranger"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Faerie Fire",
      "Tango",
      "Magic Stick",
      "Magic Wand"
    ],
    "coreItems": [
      "Radiance",
      "Talisman of Evasion",
      "Sacred Relic",
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.482,
      "crusader": 0.492,
      "archon": 0.505,
      "legend": 0.516,
      "ancient": 0.514,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 3044,
      "guardian": 11405,
      "crusader": 26461,
      "archon": 53637,
      "legend": 74775,
      "ancient": 47079,
      "divine": 35801
    },
    "counters": [
      "puck",
      "snapfire",
      "luna"
    ],
    "weakAgainst": [
      "shadow-fiend",
      "warlock",
      "invoker",
      "hoodwink",
      "disruptor",
      "rubick"
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.516,
      "crusader": 0.518,
      "archon": 0.518,
      "legend": 0.52,
      "ancient": 0.523,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 4245,
      "guardian": 16714,
      "crusader": 38133,
      "archon": 74731,
      "legend": 101500,
      "ancient": 66336,
      "divine": 50304
    },
    "counters": [
      "void-spirit",
      "puck",
      "timbersaw",
      "skywrath-mage",
      "hoodwink",
      "tidehunter"
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
      "herald": 0.519,
      "guardian": 0.519,
      "crusader": 0.509,
      "archon": 0.503,
      "legend": 0.496,
      "ancient": 0.491,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 12186,
      "guardian": 44891,
      "crusader": 92080,
      "archon": 151058,
      "legend": 156413,
      "ancient": 74975,
      "divine": 36886
    },
    "counters": [
      "bristleback",
      "medusa",
      "phantom-lancer",
      "zeus",
      "terrorblade",
      "chaos-knight"
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
    "overallWin": 0.541,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.525,
      "crusader": 0.529,
      "archon": 0.534,
      "legend": 0.542,
      "ancient": 0.554,
      "divine": 0.554
    },
    "pickByBracket": {
      "herald": 1765,
      "guardian": 6240,
      "crusader": 12964,
      "archon": 24135,
      "legend": 32565,
      "ancient": 21429,
      "divine": 17201
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
      "Harpoon",
      "Diadem"
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.467,
      "crusader": 0.494,
      "archon": 0.506,
      "legend": 0.513,
      "ancient": 0.51,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 1721,
      "guardian": 6773,
      "crusader": 15264,
      "archon": 29345,
      "legend": 39490,
      "ancient": 25446,
      "divine": 20216
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Arcane Boots",
      "Blink Dagger",
      "Ghost Scepter",
      "Glimmer Cape",
      "Mekansm"
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.469,
      "crusader": 0.484,
      "archon": 0.493,
      "legend": 0.501,
      "ancient": 0.503,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 5356,
      "guardian": 18014,
      "crusader": 37737,
      "archon": 70859,
      "legend": 92370,
      "ancient": 54815,
      "divine": 37917
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.464,
    "winByBracket": {
      "herald": 0.44,
      "guardian": 0.446,
      "crusader": 0.453,
      "archon": 0.462,
      "legend": 0.462,
      "ancient": 0.468,
      "divine": 0.474
    },
    "pickByBracket": {
      "herald": 1472,
      "guardian": 4504,
      "crusader": 10059,
      "archon": 19091,
      "legend": 26589,
      "ancient": 20074,
      "divine": 20090
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.542,
    "winByBracket": {
      "herald": 0.537,
      "guardian": 0.534,
      "crusader": 0.541,
      "archon": 0.544,
      "legend": 0.544,
      "ancient": 0.542,
      "divine": 0.538
    },
    "pickByBracket": {
      "herald": 15137,
      "guardian": 51127,
      "crusader": 98851,
      "archon": 157791,
      "legend": 170283,
      "ancient": 92402,
      "divine": 61178
    },
    "counters": [
      "ogre-magi",
      "dragon-knight",
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
      "Ogre Axe",
      "Desolator"
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.511,
      "crusader": 0.507,
      "archon": 0.502,
      "legend": 0.507,
      "ancient": 0.506,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 11258,
      "guardian": 39867,
      "crusader": 81564,
      "archon": 136445,
      "legend": 149770,
      "ancient": 79079,
      "divine": 52208
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
      "Circlet",
      "Tango",
      "Quelling Blade",
      "Faerie Fire",
      "Magic Stick"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Ogre Axe",
      "Manta Style",
      "Staff of Wizardry",
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.497,
      "crusader": 0.503,
      "archon": 0.503,
      "legend": 0.503,
      "ancient": 0.508,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 1702,
      "guardian": 6068,
      "crusader": 14535,
      "archon": 28656,
      "legend": 39180,
      "ancient": 25462,
      "divine": 20438
    },
    "counters": [
      "dark-seer",
      "marci",
      "razor",
      "ogre-magi",
      "void-spirit",
      "pudge"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "juggernaut",
      "bane",
      "huskar",
      "doom",
      "earth-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Blood Grenade",
      "Smoke of Deceit",
      "Sentry Ward"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Platemail",
      "Spirit Vessel",
      "Diadem",
      "Staff of Wizardry"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.483,
      "crusader": 0.49,
      "archon": 0.501,
      "legend": 0.502,
      "ancient": 0.508,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 2339,
      "guardian": 8432,
      "crusader": 17824,
      "archon": 31097,
      "legend": 37377,
      "ancient": 25529,
      "divine": 24337
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.43,
      "guardian": 0.466,
      "crusader": 0.459,
      "archon": 0.472,
      "legend": 0.485,
      "ancient": 0.492,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 1665,
      "guardian": 5307,
      "crusader": 10780,
      "archon": 20440,
      "legend": 28721,
      "ancient": 19859,
      "divine": 17036
    },
    "counters": [
      "silencer",
      "marci",
      "weaver",
      "lina",
      "ursa",
      "bristleback"
    ],
    "weakAgainst": [
      "huskar",
      "nyx-assassin",
      "bane",
      "centaur-warrunner",
      "night-stalker",
      "faceless-void"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Magic Stick",
      "Sentry Ward"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.515,
      "crusader": 0.511,
      "archon": 0.501,
      "legend": 0.494,
      "ancient": 0.486,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 15327,
      "guardian": 59274,
      "crusader": 133902,
      "archon": 240437,
      "legend": 270331,
      "ancient": 150465,
      "divine": 104847
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
      "magnus"
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
    "overallWin": 0.464,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.452,
      "crusader": 0.458,
      "archon": 0.461,
      "legend": 0.464,
      "ancient": 0.469,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 4929,
      "guardian": 17909,
      "crusader": 37632,
      "archon": 66733,
      "legend": 78727,
      "ancient": 45841,
      "divine": 29265
    },
    "counters": [
      "ogre-magi",
      "dragon-knight",
      "disruptor",
      "timbersaw",
      "mars",
      "tusk"
    ],
    "weakAgainst": [
      "shadow-demon",
      "shadow-fiend",
      "snapfire",
      "jakiro",
      "windranger",
      "tiny"
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.487,
      "crusader": 0.487,
      "archon": 0.483,
      "legend": 0.486,
      "ancient": 0.488,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 4940,
      "guardian": 18263,
      "crusader": 40146,
      "archon": 77069,
      "legend": 99584,
      "ancient": 59148,
      "divine": 39487
    },
    "counters": [
      "timbersaw",
      "ursa",
      "sand-king",
      "ring-master",
      "marci",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "chen",
      "keeper-of-the-light",
      "largo",
      "treant-protector",
      "earth-spirit",
      "pangolier"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.496,
      "crusader": 0.499,
      "archon": 0.505,
      "legend": 0.5,
      "ancient": 0.494,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 6034,
      "guardian": 17158,
      "crusader": 30584,
      "archon": 50708,
      "legend": 58187,
      "ancient": 32408,
      "divine": 19020
    },
    "counters": [
      "gyrocopter",
      "marci",
      "skywrath-mage",
      "ancient-apparition",
      "warlock",
      "tidehunter"
    ],
    "weakAgainst": [
      "treant-protector",
      "phoenix",
      "doom",
      "shadow-shaman",
      "hoodwink",
      "lion"
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
    "overallWin": 0.567,
    "winByBracket": {
      "herald": 0.546,
      "guardian": 0.556,
      "crusader": 0.562,
      "archon": 0.571,
      "legend": 0.572,
      "ancient": 0.567,
      "divine": 0.56
    },
    "pickByBracket": {
      "herald": 7716,
      "guardian": 26237,
      "crusader": 54519,
      "archon": 97647,
      "legend": 120555,
      "ancient": 73104,
      "divine": 51796
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Circlet",
      "Observer Ward",
      "Slippers of Agility"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Diffusal Blade",
      "Yasha",
      "Diadem",
      "Power Treads"
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.477,
      "crusader": 0.486,
      "archon": 0.485,
      "legend": 0.489,
      "ancient": 0.495,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 2090,
      "guardian": 7769,
      "crusader": 18118,
      "archon": 34815,
      "legend": 47262,
      "ancient": 33279,
      "divine": 29238
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.485,
      "crusader": 0.486,
      "archon": 0.485,
      "legend": 0.49,
      "ancient": 0.495,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 7064,
      "guardian": 28932,
      "crusader": 68331,
      "archon": 143772,
      "legend": 207996,
      "ancient": 134600,
      "divine": 95850
    },
    "counters": [
      "medusa",
      "weaver",
      "phantom-assassin",
      "phantom-lancer",
      "undying",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "earth-spirit",
      "enigma",
      "lone-druid",
      "bane",
      "lycan",
      "alchemist"
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
      "Vitality Booster"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.529,
      "crusader": 0.521,
      "archon": 0.522,
      "legend": 0.516,
      "ancient": 0.518,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 4003,
      "guardian": 14390,
      "crusader": 30422,
      "archon": 55738,
      "legend": 74765,
      "ancient": 50193,
      "divine": 39567
    },
    "counters": [
      "disruptor",
      "lion",
      "jakiro",
      "mars",
      "underlord",
      "void-spirit"
    ],
    "weakAgainst": [
      "dragon-knight",
      "phoenix",
      "snapfire",
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
      "Blade of Alacrity",
      "Aghanim's Scepter"
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.416,
      "guardian": 0.437,
      "crusader": 0.453,
      "archon": 0.473,
      "legend": 0.479,
      "ancient": 0.486,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 1643,
      "guardian": 5853,
      "crusader": 13151,
      "archon": 25280,
      "legend": 34589,
      "ancient": 24834,
      "divine": 22205
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.467,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.47,
      "crusader": 0.473,
      "archon": 0.472,
      "legend": 0.466,
      "ancient": 0.462,
      "divine": 0.447
    },
    "pickByBracket": {
      "herald": 8712,
      "guardian": 26076,
      "crusader": 50325,
      "archon": 79831,
      "legend": 81594,
      "ancient": 40203,
      "divine": 21779
    },
    "counters": [
      "medusa",
      "night-stalker",
      "earthshaker",
      "undying",
      "pugna",
      "death-prophet"
    ],
    "weakAgainst": [
      "enigma",
      "lone-druid",
      "venomancer",
      "mirana",
      "monkey-king",
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
    "overallWin": 0.528,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.526,
      "crusader": 0.529,
      "archon": 0.529,
      "legend": 0.53,
      "ancient": 0.526,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 11560,
      "guardian": 40831,
      "crusader": 81021,
      "archon": 132503,
      "legend": 141185,
      "ancient": 72941,
      "divine": 40632
    },
    "counters": [
      "kunkka",
      "razor",
      "ring-master",
      "nature-s-prophet",
      "crystal-maiden",
      "grimstroke"
    ],
    "weakAgainst": [
      "dawnbreaker",
      "batrider",
      "hoodwink",
      "beastmaster",
      "juggernaut",
      "primal-beast"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.545,
      "guardian": 0.538,
      "crusader": 0.528,
      "archon": 0.52,
      "legend": 0.514,
      "ancient": 0.51,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 6165,
      "guardian": 25029,
      "crusader": 53927,
      "archon": 96144,
      "legend": 108116,
      "ancient": 56161,
      "divine": 31986
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.499,
      "crusader": 0.501,
      "archon": 0.496,
      "legend": 0.495,
      "ancient": 0.496,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 8848,
      "guardian": 31060,
      "crusader": 60962,
      "archon": 99291,
      "legend": 105860,
      "ancient": 58066,
      "divine": 37056
    },
    "counters": [
      "ancient-apparition",
      "terrorblade",
      "queen-of-pain",
      "witch-doctor",
      "dragon-knight",
      "death-prophet"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "clinkz",
      "kunkka",
      "phoenix",
      "grimstroke"
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
      "Arcane Boots",
      "Vitality Booster",
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.509,
      "crusader": 0.508,
      "archon": 0.504,
      "legend": 0.495,
      "ancient": 0.492,
      "divine": 0.478
    },
    "pickByBracket": {
      "herald": 4677,
      "guardian": 16037,
      "crusader": 31003,
      "archon": 49487,
      "legend": 54119,
      "ancient": 29670,
      "divine": 16924
    },
    "counters": [
      "lifestealer",
      "void-spirit",
      "ogre-magi",
      "dazzle",
      "grimstroke",
      "lich"
    ],
    "weakAgainst": [
      "mirana",
      "earth-spirit",
      "marci",
      "winter-wyvern",
      "crystal-maiden",
      "brewmaster"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Faerie Fire",
      "Observer Ward"
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.53,
      "guardian": 0.52,
      "crusader": 0.504,
      "archon": 0.491,
      "legend": 0.487,
      "ancient": 0.487,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 6671,
      "guardian": 24444,
      "crusader": 52352,
      "archon": 97650,
      "legend": 125739,
      "ancient": 75399,
      "divine": 53652
    },
    "counters": [
      "warlock",
      "beastmaster",
      "earth-spirit",
      "dark-willow",
      "hoodwink",
      "ember-spirit"
    ],
    "weakAgainst": [
      "leshrac",
      "techies",
      "witch-doctor",
      "mars",
      "treant-protector",
      "spirit-breaker"
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
    "overallWin": 0.467,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.468,
      "crusader": 0.464,
      "archon": 0.468,
      "legend": 0.468,
      "ancient": 0.466,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 3399,
      "guardian": 12044,
      "crusader": 27501,
      "archon": 55260,
      "legend": 75902,
      "ancient": 49636,
      "divine": 33203
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.512,
      "crusader": 0.505,
      "archon": 0.501,
      "legend": 0.498,
      "ancient": 0.489,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 17344,
      "guardian": 58001,
      "crusader": 112621,
      "archon": 183292,
      "legend": 184558,
      "ancient": 82414,
      "divine": 36005
    },
    "counters": [
      "morphling",
      "sven",
      "lich",
      "ursa",
      "tiny",
      "zeus"
    ],
    "weakAgainst": [
      "doom",
      "warlock",
      "tidehunter",
      "axe",
      "rubick",
      "vengeful-spirit"
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
      "Staff of Wizardry",
      "Maelstrom"
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
    "overallWin": 0.533,
    "winByBracket": {
      "herald": 0.538,
      "guardian": 0.53,
      "crusader": 0.533,
      "archon": 0.537,
      "legend": 0.532,
      "ancient": 0.527,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 5483,
      "guardian": 21495,
      "crusader": 46818,
      "archon": 77206,
      "legend": 80311,
      "ancient": 37155,
      "divine": 19868
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.504,
      "guardian": 0.495,
      "crusader": 0.495,
      "archon": 0.492,
      "legend": 0.491,
      "ancient": 0.489,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 10922,
      "guardian": 37931,
      "crusader": 76853,
      "archon": 129975,
      "legend": 152165,
      "ancient": 83883,
      "divine": 53897
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.47,
      "crusader": 0.474,
      "archon": 0.482,
      "legend": 0.484,
      "ancient": 0.494,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 3669,
      "guardian": 12511,
      "crusader": 25986,
      "archon": 44899,
      "legend": 55303,
      "ancient": 35215,
      "divine": 25379
    },
    "counters": [
      "templar-assassin",
      "void-spirit",
      "dark-seer",
      "alchemist",
      "lich",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "mirana",
      "treant-protector",
      "huskar",
      "sniper",
      "dawnbreaker",
      "slark"
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
    "overallWin": 0.53,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.512,
      "crusader": 0.521,
      "archon": 0.531,
      "legend": 0.531,
      "ancient": 0.536,
      "divine": 0.538
    },
    "pickByBracket": {
      "herald": 7368,
      "guardian": 25893,
      "crusader": 53984,
      "archon": 94866,
      "legend": 115140,
      "ancient": 72570,
      "divine": 54697
    },
    "counters": [
      "dark-seer",
      "skywrath-mage",
      "ursa",
      "centaur-warrunner",
      "crystal-maiden",
      "lina"
    ],
    "weakAgainst": [
      "sniper",
      "lion",
      "brewmaster",
      "invoker",
      "tiny",
      "techies"
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.505,
      "crusader": 0.506,
      "archon": 0.507,
      "legend": 0.507,
      "ancient": 0.508,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 7817,
      "guardian": 28130,
      "crusader": 56966,
      "archon": 95526,
      "legend": 109034,
      "ancient": 61551,
      "divine": 42972
    },
    "counters": [
      "disruptor",
      "undying",
      "slark",
      "ogre-magi",
      "crystal-maiden",
      "viper"
    ],
    "weakAgainst": [
      "monkey-king",
      "phoenix",
      "juggernaut",
      "bane",
      "muerta",
      "jakiro"
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
    "overallWin": 0.46,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.452,
      "crusader": 0.449,
      "archon": 0.455,
      "legend": 0.468,
      "ancient": 0.465,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 3544,
      "guardian": 11471,
      "crusader": 22039,
      "archon": 33735,
      "legend": 34708,
      "ancient": 18709,
      "divine": 12442
    },
    "counters": [
      "crystal-maiden",
      "kunkka",
      "lion",
      "clinkz",
      "void-spirit",
      "timbersaw"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "storm-spirit",
      "largo",
      "underlord",
      "gyrocopter"
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
    "overallWin": 0.459,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.456,
      "crusader": 0.458,
      "archon": 0.455,
      "legend": 0.456,
      "ancient": 0.463,
      "divine": 0.471
    },
    "pickByBracket": {
      "herald": 3259,
      "guardian": 10079,
      "crusader": 19010,
      "archon": 28415,
      "legend": 29425,
      "ancient": 17428,
      "divine": 14663
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Faerie Fire",
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
      "herald": 0.503,
      "guardian": 0.505,
      "crusader": 0.505,
      "archon": 0.509,
      "legend": 0.5,
      "ancient": 0.494,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 4797,
      "guardian": 17648,
      "crusader": 40967,
      "archon": 79120,
      "legend": 95496,
      "ancient": 54067,
      "divine": 31168
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
    "overallWin": 0.454,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.463,
      "crusader": 0.453,
      "archon": 0.452,
      "legend": 0.454,
      "ancient": 0.452,
      "divine": 0.454
    },
    "pickByBracket": {
      "herald": 2681,
      "guardian": 9556,
      "crusader": 20702,
      "archon": 36432,
      "legend": 44971,
      "ancient": 28482,
      "divine": 22319
    },
    "counters": [
      "dawnbreaker",
      "nature-s-prophet",
      "drow-ranger",
      "lina",
      "techies",
      "centaur-warrunner"
    ],
    "weakAgainst": [
      "bane",
      "queen-of-pain",
      "largo",
      "doom",
      "nyx-assassin",
      "ursa"
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
    "overallWin": 0.465,
    "winByBracket": {
      "herald": 0.443,
      "guardian": 0.459,
      "crusader": 0.453,
      "archon": 0.455,
      "legend": 0.471,
      "ancient": 0.474,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 2842,
      "guardian": 10026,
      "crusader": 20562,
      "archon": 34621,
      "legend": 39844,
      "ancient": 23807,
      "divine": 16693
    },
    "counters": [],
    "weakAgainst": [
      "jakiro",
      "lion",
      "rubick",
      "shadow-fiend"
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
    "overallWin": 0.46,
    "winByBracket": {
      "herald": 0.461,
      "guardian": 0.454,
      "crusader": 0.453,
      "archon": 0.458,
      "legend": 0.456,
      "ancient": 0.472,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 3399,
      "guardian": 10176,
      "crusader": 18087,
      "archon": 27758,
      "legend": 32690,
      "ancient": 21299,
      "divine": 18091
    },
    "counters": [
      "weaver",
      "bristleback",
      "leshrac",
      "enchantress",
      "void-spirit",
      "sand-king"
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
      "Faerie Fire",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Echo Sabre",
      "Mithril Hammer",
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.47,
      "crusader": 0.46,
      "archon": 0.464,
      "legend": 0.462,
      "ancient": 0.46,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 1761,
      "guardian": 5636,
      "crusader": 10694,
      "archon": 16731,
      "legend": 17303,
      "ancient": 9032,
      "divine": 5658
    },
    "counters": [
      "gyrocopter",
      "invoker",
      "skywrath-mage",
      "spirit-breaker",
      "dawnbreaker",
      "razor"
    ],
    "weakAgainst": [],
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
    "overallWin": 0.544,
    "winByBracket": {
      "herald": 0.549,
      "guardian": 0.541,
      "crusader": 0.547,
      "archon": 0.542,
      "legend": 0.547,
      "ancient": 0.54,
      "divine": 0.548
    },
    "pickByBracket": {
      "herald": 4537,
      "guardian": 12124,
      "crusader": 19585,
      "archon": 27927,
      "legend": 29493,
      "ancient": 16871,
      "divine": 12280
    },
    "counters": [
      "slardar",
      "shadow-fiend",
      "skywrath-mage",
      "rubick"
    ],
    "weakAgainst": [
      "lion",
      "dragon-knight",
      "disruptor",
      "warlock",
      "luna",
      "windranger"
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.457,
      "crusader": 0.463,
      "archon": 0.479,
      "legend": 0.486,
      "ancient": 0.495,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 1930,
      "guardian": 6873,
      "crusader": 15098,
      "archon": 28887,
      "legend": 41084,
      "ancient": 30770,
      "divine": 25781
    },
    "counters": [
      "vengeful-spirit",
      "marci",
      "void-spirit",
      "ancient-apparition",
      "undying",
      "pudge"
    ],
    "weakAgainst": [
      "treant-protector",
      "muerta",
      "phoenix",
      "venomancer",
      "batrider",
      "windranger"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.519,
      "crusader": 0.511,
      "archon": 0.502,
      "legend": 0.496,
      "ancient": 0.494,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 2284,
      "guardian": 8598,
      "crusader": 19058,
      "archon": 36313,
      "legend": 42363,
      "ancient": 22305,
      "divine": 11998
    },
    "counters": [
      "templar-assassin",
      "mars",
      "razor",
      "batrider",
      "void-spirit",
      "warlock"
    ],
    "weakAgainst": [
      "treant-protector",
      "lone-druid",
      "drow-ranger",
      "mirana",
      "winter-wyvern",
      "kez"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Circlet",
      "Enchanted Mango"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Blade of Alacrity",
      "Point Booster",
      "Aghanim's Shard"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.496,
      "crusader": 0.5,
      "archon": 0.498,
      "legend": 0.495,
      "ancient": 0.493,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 7284,
      "guardian": 28251,
      "crusader": 61639,
      "archon": 109995,
      "legend": 126665,
      "ancient": 70108,
      "divine": 43926
    },
    "counters": [
      "lion",
      "luna",
      "invoker",
      "lich",
      "warlock",
      "dragon-knight"
    ],
    "weakAgainst": [
      "treant-protector",
      "jakiro",
      "winter-wyvern",
      "pangolier",
      "spirit-breaker",
      "beastmaster"
    ],
    "startItems": [
      "Iron Branch",
      "Enchanted Mango",
      "Tango",
      "Gauntlets of Strength",
      "Observer and Sentry Wards",
      "Blood Grenade"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Blink Dagger",
      "Vitality Booster",
      "Point Booster",
      "Soul Booster"
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.462,
      "crusader": 0.466,
      "archon": 0.484,
      "legend": 0.489,
      "ancient": 0.491,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 5194,
      "guardian": 15083,
      "crusader": 28070,
      "archon": 47549,
      "legend": 57496,
      "ancient": 34641,
      "divine": 23325
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
    "overallWin": 0.528,
    "winByBracket": {
      "herald": 0.533,
      "guardian": 0.531,
      "crusader": 0.531,
      "archon": 0.531,
      "legend": 0.528,
      "ancient": 0.522,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 6017,
      "guardian": 21045,
      "crusader": 42986,
      "archon": 74079,
      "legend": 85234,
      "ancient": 45613,
      "divine": 24141
    },
    "counters": [
      "lich",
      "disruptor",
      "ursa",
      "sniper",
      "lina",
      "hoodwink"
    ],
    "weakAgainst": [
      "tusk",
      "rubick",
      "doom",
      "luna",
      "crystal-maiden",
      "ogre-magi"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.501,
      "crusader": 0.499,
      "archon": 0.491,
      "legend": 0.491,
      "ancient": 0.491,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 5952,
      "guardian": 20764,
      "crusader": 43262,
      "archon": 75469,
      "legend": 86391,
      "ancient": 47377,
      "divine": 29230
    },
    "counters": [
      "dragon-knight",
      "warlock",
      "shadow-fiend",
      "zeus",
      "tusk",
      "void-spirit"
    ],
    "weakAgainst": [
      "ember-spirit",
      "doom",
      "invoker",
      "slardar",
      "pudge",
      "monkey-king"
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.478,
      "crusader": 0.482,
      "archon": 0.482,
      "legend": 0.489,
      "ancient": 0.488,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 10624,
      "guardian": 29201,
      "crusader": 47043,
      "archon": 65710,
      "legend": 64712,
      "ancient": 31708,
      "divine": 19085
    },
    "counters": [
      "dragon-knight",
      "bristleback",
      "silencer",
      "skywrath-mage",
      "pangolier",
      "ogre-magi"
    ],
    "weakAgainst": [
      "beastmaster",
      "techies",
      "axe",
      "dawnbreaker",
      "treant-protector",
      "windranger"
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
    "overallWin": 0.544,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.515,
      "crusader": 0.538,
      "archon": 0.533,
      "legend": 0.548,
      "ancient": 0.562,
      "divine": 0.559
    },
    "pickByBracket": {
      "herald": 1323,
      "guardian": 4530,
      "crusader": 9075,
      "archon": 14344,
      "legend": 15979,
      "ancient": 10210,
      "divine": 10215
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.484,
      "crusader": 0.491,
      "archon": 0.506,
      "legend": 0.509,
      "ancient": 0.511,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 2234,
      "guardian": 7741,
      "crusader": 16572,
      "archon": 30726,
      "legend": 42796,
      "ancient": 30886,
      "divine": 27878
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.503,
      "crusader": 0.497,
      "archon": 0.492,
      "legend": 0.486,
      "ancient": 0.478,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 3923,
      "guardian": 14651,
      "crusader": 30470,
      "archon": 54022,
      "legend": 58131,
      "ancient": 29192,
      "divine": 18086
    },
    "counters": [
      "sniper",
      "faceless-void",
      "night-stalker",
      "techies",
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
      "Pavise",
      "Glimmer Cape",
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.491,
      "crusader": 0.488,
      "archon": 0.488,
      "legend": 0.49,
      "ancient": 0.489,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 6229,
      "guardian": 17942,
      "crusader": 30924,
      "archon": 46696,
      "legend": 50043,
      "ancient": 26809,
      "divine": 18932
    },
    "counters": [
      "gyrocopter",
      "ancient-apparition",
      "brewmaster",
      "lion",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "morphling",
      "tiny",
      "rubick",
      "shadow-demon",
      "centaur-warrunner",
      "batrider"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Circlet",
      "Magic Stick",
      "Magic Wand"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Aghanim's Shard",
      "Blade of Alacrity",
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.491,
      "crusader": 0.487,
      "archon": 0.487,
      "legend": 0.492,
      "ancient": 0.495,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 10973,
      "guardian": 36078,
      "crusader": 70720,
      "archon": 120472,
      "legend": 145708,
      "ancient": 86986,
      "divine": 63085
    },
    "counters": [
      "grimstroke",
      "zeus",
      "weaver",
      "lifestealer",
      "crystal-maiden",
      "viper"
    ],
    "weakAgainst": [
      "treant-protector",
      "enigma",
      "lone-druid",
      "ember-spirit",
      "bane",
      "io"
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
      "Maelstrom",
      "Vitality Booster",
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.492,
      "crusader": 0.492,
      "archon": 0.497,
      "legend": 0.504,
      "ancient": 0.516,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 2981,
      "guardian": 10879,
      "crusader": 21996,
      "archon": 37795,
      "legend": 45034,
      "ancient": 28656,
      "divine": 27663
    },
    "counters": [
      "underlord",
      "dawnbreaker",
      "void-spirit",
      "undying",
      "dark-seer",
      "slardar"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "beastmaster",
      "snapfire",
      "lone-druid",
      "doom",
      "axe"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Blink Dagger",
      "Power Treads",
      "Arcane Boots",
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.527,
      "crusader": 0.522,
      "archon": 0.524,
      "legend": 0.517,
      "ancient": 0.509,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 11083,
      "guardian": 42052,
      "crusader": 88999,
      "archon": 156044,
      "legend": 174656,
      "ancient": 89575,
      "divine": 53381
    },
    "counters": [
      "dazzle",
      "outworld-devourer",
      "centaur-warrunner",
      "crystal-maiden",
      "slark",
      "kez"
    ],
    "weakAgainst": [
      "earthshaker",
      "snapfire",
      "ember-spirit",
      "clockwerk",
      "largo",
      "mirana"
    ],
    "startItems": [],
    "coreItems": []
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
      "herald": 0.566,
      "guardian": 0.566,
      "crusader": 0.562,
      "archon": 0.558,
      "legend": 0.55,
      "ancient": 0.542,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 8425,
      "guardian": 31325,
      "crusader": 68014,
      "archon": 123551,
      "legend": 144863,
      "ancient": 75811,
      "divine": 40226
    },
    "counters": [
      "lion",
      "chaos-knight",
      "rubick"
    ],
    "weakAgainst": [
      "pudge",
      "ogre-magi",
      "invoker",
      "skywrath-mage"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.491,
      "crusader": 0.493,
      "archon": 0.501,
      "legend": 0.496,
      "ancient": 0.49,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 9368,
      "guardian": 30601,
      "crusader": 60241,
      "archon": 103467,
      "legend": 116818,
      "ancient": 62812,
      "divine": 37365
    },
    "counters": [
      "disruptor",
      "mars",
      "invoker",
      "dragon-knight",
      "necrophos",
      "ursa"
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
