// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-08-17
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.503,
      "guardian": 0.511,
      "crusader": 0.515,
      "archon": 0.518,
      "legend": 0.512,
      "ancient": 0.507,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 5637,
      "guardian": 15756,
      "crusader": 24051,
      "archon": 29292,
      "legend": 26802,
      "ancient": 16903,
      "divine": 11492
    },
    "counters": [
      "troll-warlord",
      "legion-commander",
      "sand-king",
      "terrorblade",
      "lion",
      "axe"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "underlord",
      "faceless-void",
      "marci",
      "wraith-king",
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
    "overallWin": 0.468,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.478,
      "crusader": 0.469,
      "archon": 0.469,
      "legend": 0.461,
      "ancient": 0.466,
      "divine": 0.457
    },
    "pickByBracket": {
      "herald": 5008,
      "guardian": 16258,
      "crusader": 25943,
      "archon": 29957,
      "legend": 25987,
      "ancient": 15366,
      "divine": 10116
    },
    "counters": [
      "ring-master",
      "lifestealer",
      "void-spirit",
      "ursa",
      "sand-king",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "storm-spirit",
      "luna",
      "warlock",
      "monkey-king",
      "skywrath-mage",
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
      "Blade of Alacrity"
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
      "herald": 0.521,
      "guardian": 0.522,
      "crusader": 0.522,
      "archon": 0.518,
      "legend": 0.519,
      "ancient": 0.517,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 8546,
      "guardian": 28035,
      "crusader": 45762,
      "archon": 58799,
      "legend": 52515,
      "ancient": 30970,
      "divine": 20079
    },
    "counters": [
      "mars",
      "pugna",
      "disruptor",
      "tiny",
      "hoodwink",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "underlord",
      "clinkz",
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.501,
      "crusader": 0.5,
      "archon": 0.498,
      "legend": 0.498,
      "ancient": 0.498,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 17591,
      "guardian": 56857,
      "crusader": 86388,
      "archon": 97598,
      "legend": 78797,
      "ancient": 44097,
      "divine": 27338
    },
    "counters": [
      "silencer",
      "lich",
      "dragon-knight",
      "mars",
      "doom",
      "storm-spirit"
    ],
    "weakAgainst": [
      "timbersaw",
      "ember-spirit",
      "morphling",
      "jakiro",
      "abaddon",
      "juggernaut"
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
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.515,
      "crusader": 0.519,
      "archon": 0.521,
      "legend": 0.53,
      "ancient": 0.535,
      "divine": 0.53
    },
    "pickByBracket": {
      "herald": 5340,
      "guardian": 17680,
      "crusader": 28165,
      "archon": 32146,
      "legend": 26359,
      "ancient": 15713,
      "divine": 12457
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.52,
      "crusader": 0.509,
      "archon": 0.504,
      "legend": 0.498,
      "ancient": 0.493,
      "divine": 0.481
    },
    "pickByBracket": {
      "herald": 20177,
      "guardian": 70027,
      "crusader": 113961,
      "archon": 144382,
      "legend": 130969,
      "ancient": 81958,
      "divine": 60205
    },
    "counters": [
      "morphling",
      "terrorblade",
      "death-prophet",
      "techies",
      "winter-wyvern",
      "faceless-void"
    ],
    "weakAgainst": [
      "bane",
      "lycan",
      "chen",
      "monkey-king",
      "huskar",
      "ember-spirit"
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
      "Ogre Axe",
      "Blade Mail",
      "Mithril Hammer",
      "Broadsword"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.48,
      "crusader": 0.488,
      "archon": 0.495,
      "legend": 0.502,
      "ancient": 0.514,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 4783,
      "guardian": 15091,
      "crusader": 23351,
      "archon": 28308,
      "legend": 25890,
      "ancient": 18160,
      "divine": 19204
    },
    "counters": [
      "axe",
      "templar-assassin",
      "timbersaw",
      "earthshaker",
      "tiny",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "monkey-king",
      "marci",
      "centaur-warrunner",
      "mars",
      "undying",
      "skywrath-mage"
    ],
    "startItems": [
      "Iron Branch",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Blood Grenade",
      "Tango",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Aether Lens",
      "Arcane Boots",
      "Point Booster",
      "Ogre Axe",
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
    "overallWin": 0.435,
    "winByBracket": {
      "herald": 0.458,
      "guardian": 0.425,
      "crusader": 0.429,
      "archon": 0.424,
      "legend": 0.432,
      "ancient": 0.449,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 1582,
      "guardian": 4779,
      "crusader": 7492,
      "archon": 8475,
      "legend": 7301,
      "ancient": 4892,
      "divine": 4779
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
    "overallWin": 0.444,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.441,
      "crusader": 0.436,
      "archon": 0.439,
      "legend": 0.44,
      "ancient": 0.451,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 4166,
      "guardian": 12368,
      "crusader": 18552,
      "archon": 21337,
      "legend": 17890,
      "ancient": 11095,
      "divine": 11125
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.513,
      "crusader": 0.518,
      "archon": 0.528,
      "legend": 0.52,
      "ancient": 0.524,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 11695,
      "guardian": 26683,
      "crusader": 31061,
      "archon": 30015,
      "legend": 21558,
      "ancient": 11572,
      "divine": 6815
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.497,
      "crusader": 0.504,
      "archon": 0.512,
      "legend": 0.529,
      "ancient": 0.535,
      "divine": 0.563
    },
    "pickByBracket": {
      "herald": 7506,
      "guardian": 22666,
      "crusader": 33287,
      "archon": 39514,
      "legend": 36591,
      "ancient": 25799,
      "divine": 28299
    },
    "counters": [
      "dragon-knight",
      "timbersaw",
      "snapfire",
      "queen-of-pain",
      "ursa",
      "centaur-warrunner"
    ],
    "weakAgainst": [
      "ember-spirit",
      "chen"
    ],
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.491,
      "crusader": 0.499,
      "archon": 0.496,
      "legend": 0.498,
      "ancient": 0.511,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 1966,
      "guardian": 5737,
      "crusader": 8797,
      "archon": 10593,
      "legend": 10776,
      "ancient": 8568,
      "divine": 9452
    },
    "counters": [
      "centaur-warrunner",
      "void-spirit",
      "warlock",
      "timbersaw",
      "slardar",
      "gyrocopter"
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
      "herald": 0.531,
      "guardian": 0.513,
      "crusader": 0.494,
      "archon": 0.481,
      "legend": 0.472,
      "ancient": 0.464,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 17811,
      "guardian": 49652,
      "crusader": 61669,
      "archon": 58701,
      "legend": 41487,
      "ancient": 20982,
      "divine": 12783
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
      "viper",
      "batrider",
      "necrophos",
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.498,
      "crusader": 0.504,
      "archon": 0.5,
      "legend": 0.502,
      "ancient": 0.519,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 4890,
      "guardian": 12234,
      "crusader": 15128,
      "archon": 14510,
      "legend": 10385,
      "ancient": 5956,
      "divine": 5006
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.515,
      "crusader": 0.507,
      "archon": 0.507,
      "legend": 0.503,
      "ancient": 0.494,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 7188,
      "guardian": 28934,
      "crusader": 55220,
      "archon": 80001,
      "legend": 80556,
      "ancient": 54365,
      "divine": 42908
    },
    "counters": [
      "medusa",
      "weaver",
      "terrorblade",
      "silencer",
      "techies",
      "faceless-void"
    ],
    "weakAgainst": [
      "treant-protector",
      "brewmaster",
      "bounty-hunter",
      "marci",
      "timbersaw",
      "earth-spirit"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Ring of Protection",
      "Tango",
      "Faerie Fire",
      "Observer Ward"
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
      "herald": 0.52,
      "guardian": 0.522,
      "crusader": 0.517,
      "archon": 0.515,
      "legend": 0.516,
      "ancient": 0.516,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 9168,
      "guardian": 26210,
      "crusader": 35110,
      "archon": 35776,
      "legend": 26644,
      "ancient": 14676,
      "divine": 9346
    },
    "counters": [
      "templar-assassin",
      "nature-s-prophet",
      "tiny",
      "dragon-knight",
      "ursa"
    ],
    "weakAgainst": [
      "jakiro",
      "mars",
      "windranger",
      "invoker",
      "shadow-shaman",
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
    "overallWin": 0.451,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.448,
      "crusader": 0.423,
      "archon": 0.442,
      "legend": 0.448,
      "ancient": 0.466,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 714,
      "guardian": 2016,
      "crusader": 3045,
      "archon": 3145,
      "legend": 2730,
      "ancient": 1743,
      "divine": 1771
    },
    "counters": [
      "ring-master",
      "ursa",
      "storm-spirit",
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.492,
      "crusader": 0.484,
      "archon": 0.491,
      "legend": 0.495,
      "ancient": 0.503,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 11818,
      "guardian": 29898,
      "crusader": 37764,
      "archon": 40375,
      "legend": 34175,
      "ancient": 22142,
      "divine": 19047
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Magic Wand",
      "Tango",
      "Magic Stick",
      "Slippers of Agility"
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.472,
      "crusader": 0.474,
      "archon": 0.475,
      "legend": 0.482,
      "ancient": 0.486,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 2975,
      "guardian": 10699,
      "crusader": 18511,
      "archon": 25343,
      "legend": 26375,
      "ancient": 19978,
      "divine": 21133
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.538,
      "guardian": 0.533,
      "crusader": 0.522,
      "archon": 0.516,
      "legend": 0.511,
      "ancient": 0.506,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 20677,
      "guardian": 64201,
      "crusader": 93585,
      "archon": 108611,
      "legend": 93663,
      "ancient": 57539,
      "divine": 40993
    },
    "counters": [
      "pugna",
      "sniper",
      "legion-commander",
      "underlord",
      "slardar",
      "necrophos"
    ],
    "weakAgainst": [
      "razor",
      "techies",
      "kunkka",
      "puck",
      "ember-spirit",
      "earthshaker"
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.489,
      "crusader": 0.478,
      "archon": 0.482,
      "legend": 0.49,
      "ancient": 0.497,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 3479,
      "guardian": 11679,
      "crusader": 18808,
      "archon": 24710,
      "legend": 25005,
      "ancient": 18890,
      "divine": 21214
    },
    "counters": [
      "puck",
      "queen-of-pain",
      "terrorblade",
      "disruptor",
      "tusk",
      "slardar"
    ],
    "weakAgainst": [
      "phoenix",
      "ember-spirit",
      "tiny",
      "lion",
      "storm-spirit",
      "sven"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Clarity",
      "Faerie Fire",
      "Sage's Mask"
    ],
    "coreItems": [
      "Platemail",
      "Arcane Boots",
      "Aghanim's Shard",
      "Shiva's Guard",
      "Blink Dagger"
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.472,
      "crusader": 0.474,
      "archon": 0.483,
      "legend": 0.492,
      "ancient": 0.494,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 7687,
      "guardian": 23202,
      "crusader": 35004,
      "archon": 45283,
      "legend": 43323,
      "ancient": 31274,
      "divine": 30206
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.517,
      "crusader": 0.523,
      "archon": 0.525,
      "legend": 0.522,
      "ancient": 0.52,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 7325,
      "guardian": 25927,
      "crusader": 48340,
      "archon": 71051,
      "legend": 77298,
      "ancient": 54970,
      "divine": 50193
    },
    "counters": [
      "vengeful-spirit",
      "medusa",
      "terrorblade",
      "lina",
      "death-prophet",
      "underlord"
    ],
    "weakAgainst": [
      "treant-protector",
      "lone-druid",
      "bane",
      "venomancer",
      "morphling",
      "alchemist"
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
      "herald": 0.492,
      "guardian": 0.496,
      "crusader": 0.507,
      "archon": 0.51,
      "legend": 0.512,
      "ancient": 0.516,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 6703,
      "guardian": 22162,
      "crusader": 33714,
      "archon": 39442,
      "legend": 31929,
      "ancient": 19223,
      "divine": 14449
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.472,
      "crusader": 0.481,
      "archon": 0.482,
      "legend": 0.484,
      "ancient": 0.49,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 7919,
      "guardian": 18621,
      "crusader": 25217,
      "archon": 28754,
      "legend": 25534,
      "ancient": 16549,
      "divine": 14364
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.496,
      "crusader": 0.493,
      "archon": 0.502,
      "legend": 0.501,
      "ancient": 0.5,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 5681,
      "guardian": 21826,
      "crusader": 39655,
      "archon": 57492,
      "legend": 60308,
      "ancient": 42039,
      "divine": 35854
    },
    "counters": [
      "chaos-knight",
      "phantom-assassin",
      "phantom-lancer",
      "outworld-devourer",
      "sven",
      "muerta"
    ],
    "weakAgainst": [
      "broodmother",
      "io",
      "kez",
      "drow-ranger",
      "chen",
      "enigma"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Sentry Ward",
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.462,
      "crusader": 0.462,
      "archon": 0.465,
      "legend": 0.473,
      "ancient": 0.481,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 5009,
      "guardian": 16398,
      "crusader": 28164,
      "archon": 39125,
      "legend": 40486,
      "ancient": 29833,
      "divine": 29634
    },
    "counters": [
      "lifestealer",
      "razor",
      "gyrocopter",
      "ring-master",
      "lion",
      "phoenix"
    ],
    "weakAgainst": [
      "pugna",
      "shadow-demon",
      "treant-protector",
      "abaddon",
      "bane",
      "keeper-of-the-light"
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.508,
      "crusader": 0.505,
      "archon": 0.501,
      "legend": 0.505,
      "ancient": 0.506,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 7340,
      "guardian": 23046,
      "crusader": 33287,
      "archon": 38534,
      "legend": 32458,
      "ancient": 19134,
      "divine": 13894
    },
    "counters": [
      "drow-ranger",
      "morphling",
      "troll-warlord",
      "naga-siren",
      "magnus",
      "pangolier"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "venomancer",
      "clinkz",
      "keeper-of-the-light",
      "treant-protector",
      "terrorblade"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Quelling Blade",
      "Tango",
      "Circlet",
      "Magic Stick"
    ],
    "coreItems": [
      "Blink Dagger",
      "Claymore",
      "Mithril Hammer",
      "Mask of Madness",
      "Crystalys"
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
      "herald": 0.471,
      "guardian": 0.47,
      "crusader": 0.466,
      "archon": 0.467,
      "legend": 0.461,
      "ancient": 0.459,
      "divine": 0.457
    },
    "pickByBracket": {
      "herald": 22425,
      "guardian": 65226,
      "crusader": 95450,
      "archon": 110189,
      "legend": 95102,
      "ancient": 57327,
      "divine": 40402
    },
    "counters": [
      "underlord",
      "disruptor",
      "bristleback",
      "spirit-breaker",
      "pudge",
      "phoenix"
    ],
    "weakAgainst": [
      "treant-protector",
      "dragon-knight",
      "nature-s-prophet",
      "hoodwink",
      "slardar",
      "largo"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Circlet",
      "Magic Wand",
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.466,
      "crusader": 0.466,
      "archon": 0.474,
      "legend": 0.48,
      "ancient": 0.493,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 4865,
      "guardian": 20316,
      "crusader": 42701,
      "archon": 65492,
      "legend": 71487,
      "ancient": 53639,
      "divine": 53030
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
      "herald": 0.504,
      "guardian": 0.499,
      "crusader": 0.503,
      "archon": 0.503,
      "legend": 0.509,
      "ancient": 0.511,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 18739,
      "guardian": 58163,
      "crusader": 91006,
      "archon": 114308,
      "legend": 108749,
      "ancient": 70196,
      "divine": 53718
    },
    "counters": [
      "primal-beast",
      "sven",
      "wraith-king",
      "sniper",
      "axe",
      "faceless-void"
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
      "Faerie Fire",
      "Circlet",
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.479,
      "crusader": 0.484,
      "archon": 0.503,
      "legend": 0.521,
      "ancient": 0.539,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 1713,
      "guardian": 5059,
      "crusader": 7116,
      "archon": 8424,
      "legend": 7482,
      "ancient": 5131,
      "divine": 5290
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.445,
      "guardian": 0.468,
      "crusader": 0.474,
      "archon": 0.487,
      "legend": 0.494,
      "ancient": 0.5,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 6210,
      "guardian": 21373,
      "crusader": 38229,
      "archon": 54533,
      "legend": 58656,
      "ancient": 44467,
      "divine": 45996
    },
    "counters": [
      "witch-doctor",
      "dark-seer",
      "sniper",
      "venomancer",
      "void-spirit",
      "tidehunter"
    ],
    "weakAgainst": [
      "io",
      "clinkz",
      "bane",
      "treant-protector",
      "alchemist",
      "faceless-void"
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
      "Spirit Vessel",
      "Ogre Axe",
      "Diadem",
      "Mithril Hammer",
      "Staff of Wizardry"
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.483,
      "crusader": 0.476,
      "archon": 0.471,
      "legend": 0.477,
      "ancient": 0.479,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 6629,
      "guardian": 15551,
      "crusader": 18744,
      "archon": 19677,
      "legend": 16167,
      "ancient": 11298,
      "divine": 11039
    },
    "counters": [
      "earthshaker",
      "ursa",
      "disruptor",
      "void-spirit",
      "clockwerk",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "slardar",
      "marci",
      "pugna",
      "gyrocopter",
      "templar-assassin"
    ],
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.49,
      "crusader": 0.494,
      "archon": 0.502,
      "legend": 0.511,
      "ancient": 0.535,
      "divine": 0.562
    },
    "pickByBracket": {
      "herald": 5590,
      "guardian": 17739,
      "crusader": 26187,
      "archon": 29410,
      "legend": 24889,
      "ancient": 16368,
      "divine": 17126
    },
    "counters": [
      "shadow-fiend",
      "windranger",
      "disruptor",
      "jakiro"
    ],
    "weakAgainst": [
      "hoodwink",
      "snapfire",
      "tusk"
    ],
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.484,
      "crusader": 0.487,
      "archon": 0.492,
      "legend": 0.492,
      "ancient": 0.494,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 12134,
      "guardian": 40753,
      "crusader": 62732,
      "archon": 75111,
      "legend": 65390,
      "ancient": 39502,
      "divine": 28239
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.511,
      "crusader": 0.521,
      "archon": 0.517,
      "legend": 0.519,
      "ancient": 0.516,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 5588,
      "guardian": 19894,
      "crusader": 35538,
      "archon": 48603,
      "legend": 50115,
      "ancient": 34497,
      "divine": 29270
    },
    "counters": [
      "muerta",
      "templar-assassin",
      "beastmaster",
      "ring-master",
      "skywrath-mage",
      "tidehunter"
    ],
    "weakAgainst": [
      "windranger",
      "batrider",
      "lion",
      "shadow-shaman",
      "slardar",
      "sniper"
    ],
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
    "overallWin": 0.454,
    "winByBracket": {
      "herald": 0.442,
      "guardian": 0.452,
      "crusader": 0.457,
      "archon": 0.449,
      "legend": 0.458,
      "ancient": 0.458,
      "divine": 0.452
    },
    "pickByBracket": {
      "herald": 3606,
      "guardian": 10900,
      "crusader": 17810,
      "archon": 23510,
      "legend": 22474,
      "ancient": 14114,
      "divine": 10750
    },
    "counters": [
      "sven",
      "templar-assassin",
      "earthshaker",
      "earth-spirit",
      "viper",
      "luna"
    ],
    "weakAgainst": [
      "treant-protector",
      "razor",
      "keeper-of-the-light",
      "doom",
      "ember-spirit",
      "shadow-demon"
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.468,
      "crusader": 0.474,
      "archon": 0.474,
      "legend": 0.476,
      "ancient": 0.477,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 13409,
      "guardian": 42088,
      "crusader": 67405,
      "archon": 85535,
      "legend": 79560,
      "ancient": 53954,
      "divine": 48849
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
    "overallWin": 0.452,
    "winByBracket": {
      "herald": 0.448,
      "guardian": 0.449,
      "crusader": 0.444,
      "archon": 0.447,
      "legend": 0.456,
      "ancient": 0.47,
      "divine": 0.457
    },
    "pickByBracket": {
      "herald": 10582,
      "guardian": 23154,
      "crusader": 27378,
      "archon": 28164,
      "legend": 22609,
      "ancient": 14145,
      "divine": 11828
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.501,
      "crusader": 0.499,
      "archon": 0.505,
      "legend": 0.507,
      "ancient": 0.513,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 16657,
      "guardian": 60129,
      "crusader": 108033,
      "archon": 146989,
      "legend": 145505,
      "ancient": 99213,
      "divine": 82918
    },
    "counters": [
      "troll-warlord",
      "weaver",
      "chaos-knight",
      "lina",
      "outworld-devourer",
      "ring-master"
    ],
    "weakAgainst": [
      "treant-protector",
      "tinker",
      "nyx-assassin",
      "monkey-king",
      "puck",
      "earthshaker"
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.488,
      "crusader": 0.487,
      "archon": 0.478,
      "legend": 0.478,
      "ancient": 0.475,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 7077,
      "guardian": 23913,
      "crusader": 39895,
      "archon": 49467,
      "legend": 46036,
      "ancient": 31191,
      "divine": 31005
    },
    "counters": [
      "disruptor",
      "ember-spirit",
      "jakiro",
      "snapfire",
      "hoodwink",
      "mars"
    ],
    "weakAgainst": [
      "rubick"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Ring of Regen",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Headdress"
    ],
    "coreItems": [
      "Mekansm",
      "Holy Locket",
      "Ogre Axe",
      "Aghanim's Scepter",
      "Mithril Hammer"
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
      "guardian": 0.498,
      "crusader": 0.493,
      "archon": 0.487,
      "legend": 0.477,
      "ancient": 0.475,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 12303,
      "guardian": 40522,
      "crusader": 63857,
      "archon": 78146,
      "legend": 68388,
      "ancient": 40725,
      "divine": 25778
    },
    "counters": [
      "chaos-knight",
      "winter-wyvern",
      "weaver",
      "anti-mage",
      "oracle",
      "sven"
    ],
    "weakAgainst": [
      "treant-protector",
      "io",
      "clinkz",
      "alchemist",
      "lycan",
      "enigma"
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.514,
      "crusader": 0.516,
      "archon": 0.522,
      "legend": 0.526,
      "ancient": 0.529,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 21026,
      "guardian": 67396,
      "crusader": 105480,
      "archon": 131858,
      "legend": 119837,
      "ancient": 74448,
      "divine": 49686
    },
    "counters": [
      "zeus",
      "magnus",
      "beastmaster",
      "pangolier",
      "techies",
      "phoenix"
    ],
    "weakAgainst": [
      "sniper",
      "timbersaw",
      "abaddon",
      "kez",
      "primal-beast",
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.472,
      "guardian": 0.486,
      "crusader": 0.493,
      "archon": 0.498,
      "legend": 0.51,
      "ancient": 0.512,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 8969,
      "guardian": 26670,
      "crusader": 40485,
      "archon": 47558,
      "legend": 42367,
      "ancient": 28930,
      "divine": 30521
    },
    "counters": [
      "lina",
      "warlock",
      "phoenix",
      "kez",
      "queen-of-pain",
      "abaddon"
    ],
    "weakAgainst": [
      "treant-protector",
      "pudge",
      "monkey-king",
      "batrider",
      "slardar",
      "viper"
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
      "Holy Locket",
      "Staff of Wizardry",
      "Force Staff",
      "Glimmer Cape",
      "Essence Distiller"
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
    "overallWin": 0.448,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.453,
      "crusader": 0.446,
      "archon": 0.443,
      "legend": 0.447,
      "ancient": 0.447,
      "divine": 0.454
    },
    "pickByBracket": {
      "herald": 6537,
      "guardian": 18530,
      "crusader": 29061,
      "archon": 36028,
      "legend": 33780,
      "ancient": 23850,
      "divine": 22962
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.483,
      "crusader": 0.489,
      "archon": 0.496,
      "legend": 0.504,
      "ancient": 0.501,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 6149,
      "guardian": 18282,
      "crusader": 28222,
      "archon": 36157,
      "legend": 35220,
      "ancient": 23115,
      "divine": 16959
    },
    "counters": [
      "bristleback",
      "hoodwink",
      "tiny",
      "crystal-maiden",
      "skywrath-mage",
      "warlock"
    ],
    "weakAgainst": [
      "shadow-shaman",
      "necrophos",
      "templar-assassin",
      "shadow-demon",
      "storm-spirit",
      "zeus"
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.468,
      "crusader": 0.463,
      "archon": 0.471,
      "legend": 0.479,
      "ancient": 0.476,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 1884,
      "guardian": 6209,
      "crusader": 10914,
      "archon": 14677,
      "legend": 15572,
      "ancient": 12300,
      "divine": 13287
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
    "overallWin": 0.53,
    "winByBracket": {
      "herald": 0.531,
      "guardian": 0.531,
      "crusader": 0.531,
      "archon": 0.53,
      "legend": 0.532,
      "ancient": 0.527,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 17206,
      "guardian": 60812,
      "crusader": 98934,
      "archon": 121292,
      "legend": 104890,
      "ancient": 59984,
      "divine": 38518
    },
    "counters": [
      "luna",
      "bristleback",
      "lina",
      "skywrath-mage",
      "silencer",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "abaddon",
      "vengeful-spirit",
      "dawnbreaker",
      "crystal-maiden",
      "hoodwink",
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.511,
      "crusader": 0.509,
      "archon": 0.506,
      "legend": 0.517,
      "ancient": 0.513,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 3010,
      "guardian": 9017,
      "crusader": 13675,
      "archon": 16095,
      "legend": 14964,
      "ancient": 10460,
      "divine": 10830
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
    "overallWin": 0.527,
    "winByBracket": {
      "herald": 0.525,
      "guardian": 0.529,
      "crusader": 0.53,
      "archon": 0.529,
      "legend": 0.528,
      "ancient": 0.523,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 11952,
      "guardian": 38892,
      "crusader": 62711,
      "archon": 83061,
      "legend": 83282,
      "ancient": 57015,
      "divine": 45102
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.53,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.519,
      "crusader": 0.524,
      "archon": 0.525,
      "legend": 0.538,
      "ancient": 0.536,
      "divine": 0.534
    },
    "pickByBracket": {
      "herald": 10385,
      "guardian": 38411,
      "crusader": 69054,
      "archon": 96198,
      "legend": 97848,
      "ancient": 66090,
      "divine": 53487
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Gauntlets of Strength",
      "Quelling Blade",
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Magic Stick"
    ],
    "coreItems": [
      "Sacred Relic",
      "Radiance",
      "Talisman of Evasion",
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.472,
      "guardian": 0.482,
      "crusader": 0.492,
      "archon": 0.498,
      "legend": 0.501,
      "ancient": 0.501,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 25309,
      "guardian": 76820,
      "crusader": 122542,
      "archon": 160995,
      "legend": 156106,
      "ancient": 102685,
      "divine": 86680
    },
    "counters": [
      "underlord",
      "dark-willow",
      "phoenix",
      "gyrocopter",
      "warlock",
      "abaddon"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "pangolier",
      "timbersaw",
      "pudge",
      "leshrac",
      "dawnbreaker"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Observer Ward",
      "Circlet",
      "Magic Wand"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Blade of Alacrity",
      "Ogre Axe",
      "Boots of Travel",
      "Mithril Hammer"
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.491,
      "crusader": 0.489,
      "archon": 0.489,
      "legend": 0.487,
      "ancient": 0.489,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 29885,
      "guardian": 101955,
      "crusader": 166966,
      "archon": 211550,
      "legend": 194850,
      "ancient": 121786,
      "divine": 87598
    },
    "counters": [
      "grimstroke",
      "sven",
      "troll-warlord",
      "razor",
      "dark-willow",
      "tinker"
    ],
    "weakAgainst": [
      "treant-protector",
      "earth-spirit",
      "abaddon",
      "monkey-king",
      "wraith-king",
      "undying"
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
      "Staff of Wizardry",
      "Ghost Scepter",
      "Ogre Axe",
      "Aether Lens"
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.486,
      "crusader": 0.474,
      "archon": 0.469,
      "legend": 0.469,
      "ancient": 0.48,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 3589,
      "guardian": 12985,
      "crusader": 22207,
      "archon": 27310,
      "legend": 24697,
      "ancient": 15822,
      "divine": 14620
    },
    "counters": [
      "underlord",
      "shadow-fiend",
      "dawnbreaker",
      "windranger",
      "rubick",
      "tiny"
    ],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Quelling Blade",
      "Tango",
      "Orb of Blight",
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.508,
      "crusader": 0.511,
      "archon": 0.503,
      "legend": 0.501,
      "ancient": 0.497,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 12489,
      "guardian": 38278,
      "crusader": 60065,
      "archon": 75439,
      "legend": 73978,
      "ancient": 52431,
      "divine": 50933
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.457,
      "crusader": 0.462,
      "archon": 0.476,
      "legend": 0.493,
      "ancient": 0.499,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 1887,
      "guardian": 5739,
      "crusader": 9248,
      "archon": 11214,
      "legend": 10608,
      "ancient": 7241,
      "divine": 8702
    },
    "counters": [
      "sven",
      "axe",
      "skywrath-mage",
      "void-spirit",
      "hoodwink",
      "silencer"
    ],
    "weakAgainst": [
      "beastmaster",
      "terrorblade",
      "tusk",
      "bane",
      "pugna",
      "tidehunter"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.477,
      "crusader": 0.481,
      "archon": 0.49,
      "legend": 0.493,
      "ancient": 0.5,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 6478,
      "guardian": 27213,
      "crusader": 57993,
      "archon": 90571,
      "legend": 98763,
      "ancient": 68367,
      "divine": 53351
    },
    "counters": [
      "phoenix",
      "pudge",
      "bristleback",
      "puck",
      "skywrath-mage",
      "ogre-magi"
    ],
    "weakAgainst": [
      "juggernaut",
      "beastmaster",
      "ember-spirit",
      "shadow-shaman",
      "rubick",
      "invoker"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.484,
      "crusader": 0.496,
      "archon": 0.494,
      "legend": 0.499,
      "ancient": 0.506,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 6742,
      "guardian": 18119,
      "crusader": 25519,
      "archon": 30144,
      "legend": 27613,
      "ancient": 18486,
      "divine": 16736
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.466,
      "crusader": 0.466,
      "archon": 0.476,
      "legend": 0.474,
      "ancient": 0.472,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 3656,
      "guardian": 12012,
      "crusader": 22923,
      "archon": 33600,
      "legend": 37423,
      "ancient": 28224,
      "divine": 25187
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.499,
      "crusader": 0.503,
      "archon": 0.503,
      "legend": 0.497,
      "ancient": 0.497,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 4792,
      "guardian": 14986,
      "crusader": 23490,
      "archon": 27316,
      "legend": 23832,
      "ancient": 13737,
      "divine": 8171
    },
    "counters": [
      "templar-assassin",
      "weaver",
      "warlock",
      "sand-king",
      "skywrath-mage",
      "undying"
    ],
    "weakAgainst": [
      "shadow-shaman",
      "shadow-demon",
      "ogre-magi",
      "centaur-warrunner",
      "dawnbreaker",
      "ember-spirit"
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
      "Yasha",
      "Eaglesong"
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
      "herald": 0.507,
      "guardian": 0.501,
      "crusader": 0.516,
      "archon": 0.528,
      "legend": 0.533,
      "ancient": 0.533,
      "divine": 0.538
    },
    "pickByBracket": {
      "herald": 3564,
      "guardian": 8852,
      "crusader": 11818,
      "archon": 12714,
      "legend": 10149,
      "ancient": 5968,
      "divine": 5648
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.518,
      "crusader": 0.517,
      "archon": 0.516,
      "legend": 0.518,
      "ancient": 0.517,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 8890,
      "guardian": 34356,
      "crusader": 60988,
      "archon": 83837,
      "legend": 84156,
      "ancient": 59230,
      "divine": 55017
    },
    "counters": [
      "storm-spirit",
      "ogre-magi",
      "queen-of-pain",
      "lion",
      "undying",
      "lifestealer"
    ],
    "weakAgainst": [
      "jakiro",
      "tusk",
      "centaur-warrunner",
      "skywrath-mage",
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
      "Essence Distiller",
      "Staff of Wizardry",
      "Arcane Boots",
      "Eul's Scepter of Divinity",
      "Point Booster"
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
    "overallWin": 0.455,
    "winByBracket": {
      "herald": 0.445,
      "guardian": 0.446,
      "crusader": 0.447,
      "archon": 0.452,
      "legend": 0.458,
      "ancient": 0.462,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 8066,
      "guardian": 22247,
      "crusader": 31503,
      "archon": 36616,
      "legend": 33574,
      "ancient": 22763,
      "divine": 18468
    },
    "counters": [],
    "weakAgainst": [],
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
      "Blade of Alacrity"
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.471,
      "crusader": 0.468,
      "archon": 0.468,
      "legend": 0.473,
      "ancient": 0.483,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 4647,
      "guardian": 15095,
      "crusader": 24116,
      "archon": 28974,
      "legend": 27054,
      "ancient": 18461,
      "divine": 16789
    },
    "counters": [
      "weaver",
      "terrorblade",
      "lifestealer",
      "void-spirit",
      "dawnbreaker",
      "puck"
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.484,
      "crusader": 0.473,
      "archon": 0.477,
      "legend": 0.474,
      "ancient": 0.466,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 5681,
      "guardian": 14837,
      "crusader": 21160,
      "archon": 24619,
      "legend": 22566,
      "ancient": 15290,
      "divine": 13203
    },
    "counters": [
      "techies",
      "tusk",
      "faceless-void",
      "bristleback",
      "lich",
      "dark-willow"
    ],
    "weakAgainst": [
      "grimstroke",
      "lifestealer",
      "ursa",
      "pugna",
      "leshrac",
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.489,
      "crusader": 0.481,
      "archon": 0.485,
      "legend": 0.489,
      "ancient": 0.489,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 5069,
      "guardian": 11916,
      "crusader": 14101,
      "archon": 12447,
      "legend": 8385,
      "ancient": 4681,
      "divine": 3848
    },
    "counters": [
      "puck",
      "pangolier",
      "hoodwink",
      "pudge",
      "ursa",
      "shadow-demon"
    ],
    "weakAgainst": [
      "storm-spirit",
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
    "overallWin": 0.425,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.434,
      "crusader": 0.423,
      "archon": 0.417,
      "legend": 0.42,
      "ancient": 0.425,
      "divine": 0.435
    },
    "pickByBracket": {
      "herald": 13948,
      "guardian": 42853,
      "crusader": 63923,
      "archon": 73574,
      "legend": 63666,
      "ancient": 39272,
      "divine": 31491
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Circlet",
      "Tango",
      "Magic Wand",
      "Blood Grenade"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Blade of Alacrity",
      "Hyperstone",
      "Dragon Lance",
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.535,
      "guardian": 0.522,
      "crusader": 0.521,
      "archon": 0.511,
      "legend": 0.507,
      "ancient": 0.504,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 19909,
      "guardian": 66963,
      "crusader": 106578,
      "archon": 133552,
      "legend": 123938,
      "ancient": 78887,
      "divine": 62356
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.492,
      "crusader": 0.506,
      "archon": 0.516,
      "legend": 0.526,
      "ancient": 0.527,
      "divine": 0.531
    },
    "pickByBracket": {
      "herald": 5725,
      "guardian": 21039,
      "crusader": 38857,
      "archon": 56819,
      "legend": 61426,
      "ancient": 45248,
      "divine": 41421
    },
    "counters": [
      "storm-spirit",
      "silencer",
      "dark-willow",
      "zeus",
      "troll-warlord",
      "tiny"
    ],
    "weakAgainst": [
      "lifestealer",
      "pugna",
      "shadow-shaman",
      "shadow-fiend",
      "invoker",
      "beastmaster"
    ],
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
      "herald": 0.523,
      "guardian": 0.524,
      "crusader": 0.52,
      "archon": 0.522,
      "legend": 0.521,
      "ancient": 0.525,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 6500,
      "guardian": 22000,
      "crusader": 37105,
      "archon": 48778,
      "legend": 48608,
      "ancient": 33171,
      "divine": 27395
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
      "pangolier",
      "pudge",
      "doom",
      "axe"
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.517,
      "crusader": 0.512,
      "archon": 0.51,
      "legend": 0.507,
      "ancient": 0.501,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 23090,
      "guardian": 79748,
      "crusader": 123236,
      "archon": 143453,
      "legend": 117676,
      "ancient": 66083,
      "divine": 39327
    },
    "counters": [
      "winter-wyvern",
      "medusa",
      "bristleback",
      "troll-warlord",
      "terrorblade",
      "phantom-lancer"
    ],
    "weakAgainst": [
      "pugna",
      "phoenix",
      "treant-protector",
      "mirana",
      "alchemist",
      "bounty-hunter"
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.489,
      "crusader": 0.5,
      "archon": 0.513,
      "legend": 0.516,
      "ancient": 0.515,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 3712,
      "guardian": 10908,
      "crusader": 15902,
      "archon": 18878,
      "legend": 16737,
      "ancient": 10884,
      "divine": 9026
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.479,
      "crusader": 0.489,
      "archon": 0.498,
      "legend": 0.507,
      "ancient": 0.516,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 3409,
      "guardian": 12073,
      "crusader": 20942,
      "archon": 28282,
      "legend": 28266,
      "ancient": 20609,
      "divine": 18552
    },
    "counters": [
      "puck",
      "batrider",
      "mars",
      "tiny",
      "disruptor"
    ],
    "weakAgainst": [
      "windranger",
      "tusk",
      "jakiro",
      "shadow-fiend",
      "snapfire",
      "queen-of-pain"
    ],
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
    "overallWin": 0.528,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.502,
      "crusader": 0.516,
      "archon": 0.532,
      "legend": 0.536,
      "ancient": 0.538,
      "divine": 0.536
    },
    "pickByBracket": {
      "herald": 6131,
      "guardian": 19953,
      "crusader": 34873,
      "archon": 49710,
      "legend": 49885,
      "ancient": 33808,
      "divine": 26369
    },
    "counters": [
      "lion",
      "jakiro"
    ],
    "weakAgainst": [
      "pudge",
      "invoker",
      "mars",
      "snapfire",
      "disruptor",
      "shadow-fiend"
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
    "overallWin": 0.461,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.44,
      "crusader": 0.449,
      "archon": 0.458,
      "legend": 0.464,
      "ancient": 0.464,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 2735,
      "guardian": 9013,
      "crusader": 15726,
      "archon": 22576,
      "legend": 24887,
      "ancient": 19224,
      "divine": 21110
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.521,
      "crusader": 0.52,
      "archon": 0.514,
      "legend": 0.511,
      "ancient": 0.502,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 27340,
      "guardian": 79477,
      "crusader": 109248,
      "archon": 115161,
      "legend": 87534,
      "ancient": 46184,
      "divine": 26528
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
    "overallWin": 0.529,
    "winByBracket": {
      "herald": 0.531,
      "guardian": 0.528,
      "crusader": 0.525,
      "archon": 0.527,
      "legend": 0.534,
      "ancient": 0.532,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 16990,
      "guardian": 53852,
      "crusader": 81947,
      "archon": 96244,
      "legend": 83494,
      "ancient": 51969,
      "divine": 45782
    },
    "counters": [
      "slardar",
      "jakiro",
      "mars"
    ],
    "weakAgainst": [
      "queen-of-pain",
      "shadow-demon",
      "windranger",
      "hoodwink",
      "rubick",
      "spirit-breaker"
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.514,
      "crusader": 0.52,
      "archon": 0.511,
      "legend": 0.512,
      "ancient": 0.513,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 3876,
      "guardian": 15350,
      "crusader": 28846,
      "archon": 41121,
      "legend": 42712,
      "ancient": 29731,
      "divine": 29168
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.48,
      "crusader": 0.485,
      "archon": 0.488,
      "legend": 0.488,
      "ancient": 0.493,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 3819,
      "guardian": 12096,
      "crusader": 19010,
      "archon": 22593,
      "legend": 19808,
      "ancient": 13699,
      "divine": 14374
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
    "overallWin": 0.462,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.437,
      "crusader": 0.458,
      "archon": 0.452,
      "legend": 0.464,
      "ancient": 0.463,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 3792,
      "guardian": 11868,
      "crusader": 19827,
      "archon": 27775,
      "legend": 28354,
      "ancient": 20338,
      "divine": 22303
    },
    "counters": [
      "weaver",
      "invoker",
      "razor",
      "silencer",
      "crystal-maiden",
      "terrorblade"
    ],
    "weakAgainst": [
      "naga-siren",
      "oracle",
      "nyx-assassin",
      "morphling",
      "dark-seer",
      "bane"
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.524,
      "crusader": 0.52,
      "archon": 0.515,
      "legend": 0.51,
      "ancient": 0.509,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 30348,
      "guardian": 110308,
      "crusader": 187128,
      "archon": 228224,
      "legend": 198768,
      "ancient": 124116,
      "divine": 105580
    },
    "counters": [
      "clinkz",
      "wraith-king",
      "morphling",
      "sand-king",
      "lina",
      "warlock"
    ],
    "weakAgainst": [
      "largo",
      "lycan",
      "naga-siren",
      "magnus",
      "monkey-king",
      "alchemist"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Gauntlets of Strength",
      "Boots of Speed",
      "Blood Grenade",
      "Observer and Sentry Wards"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.482,
      "crusader": 0.497,
      "archon": 0.498,
      "legend": 0.511,
      "ancient": 0.513,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 6321,
      "guardian": 18742,
      "crusader": 27193,
      "archon": 32525,
      "legend": 28874,
      "ancient": 18595,
      "divine": 14049
    },
    "counters": [
      "ogre-magi",
      "dark-willow",
      "pangolier",
      "night-stalker",
      "undying",
      "tusk"
    ],
    "weakAgainst": [
      "terrorblade",
      "clockwerk",
      "crystal-maiden",
      "ancient-apparition",
      "shadow-fiend",
      "centaur-warrunner"
    ],
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.473,
      "crusader": 0.472,
      "archon": 0.473,
      "legend": 0.471,
      "ancient": 0.473,
      "divine": 0.472
    },
    "pickByBracket": {
      "herald": 10292,
      "guardian": 34980,
      "crusader": 59540,
      "archon": 81068,
      "legend": 78617,
      "ancient": 49704,
      "divine": 38312
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.504,
      "guardian": 0.503,
      "crusader": 0.503,
      "archon": 0.504,
      "legend": 0.503,
      "ancient": 0.505,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 11323,
      "guardian": 29116,
      "crusader": 40723,
      "archon": 47495,
      "legend": 42975,
      "ancient": 27324,
      "divine": 19690
    },
    "counters": [
      "crystal-maiden",
      "gyrocopter",
      "silencer",
      "primal-beast",
      "marci",
      "tidehunter"
    ],
    "weakAgainst": [
      "treant-protector",
      "phoenix",
      "doom",
      "puck",
      "pudge",
      "lion"
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.516,
      "crusader": 0.524,
      "archon": 0.529,
      "legend": 0.529,
      "ancient": 0.527,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 10683,
      "guardian": 29120,
      "crusader": 40546,
      "archon": 44476,
      "legend": 37820,
      "ancient": 22772,
      "divine": 14754
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
    "overallWin": 0.479,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.469,
      "crusader": 0.478,
      "archon": 0.475,
      "legend": 0.482,
      "ancient": 0.483,
      "divine": 0.481
    },
    "pickByBracket": {
      "herald": 4153,
      "guardian": 14931,
      "crusader": 28193,
      "archon": 40182,
      "legend": 43714,
      "ancient": 32459,
      "divine": 33448
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.485,
      "crusader": 0.492,
      "archon": 0.495,
      "legend": 0.495,
      "ancient": 0.497,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 13450,
      "guardian": 51998,
      "crusader": 100160,
      "archon": 149798,
      "legend": 162708,
      "ancient": 115823,
      "divine": 97713
    },
    "counters": [
      "phantom-assassin",
      "weaver",
      "brewmaster",
      "phantom-lancer",
      "magnus",
      "sven"
    ],
    "weakAgainst": [
      "earth-spirit",
      "lone-druid",
      "leshrac",
      "abaddon",
      "broodmother",
      "alchemist"
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
      "Essence Distiller",
      "Arcane Boots",
      "Blink Dagger",
      "Aghanim's Shard",
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.508,
      "crusader": 0.495,
      "archon": 0.486,
      "legend": 0.477,
      "ancient": 0.474,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 7296,
      "guardian": 21699,
      "crusader": 32130,
      "archon": 36366,
      "legend": 30683,
      "ancient": 18248,
      "divine": 12571
    },
    "counters": [
      "templar-assassin",
      "void-spirit",
      "underlord",
      "ursa",
      "beastmaster",
      "lion"
    ],
    "weakAgainst": [
      "phoenix",
      "warlock",
      "pudge",
      "alchemist",
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
    "overallWin": 0.449,
    "winByBracket": {
      "herald": 0.416,
      "guardian": 0.426,
      "crusader": 0.448,
      "archon": 0.446,
      "legend": 0.454,
      "ancient": 0.461,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 2736,
      "guardian": 8660,
      "crusader": 14595,
      "archon": 19124,
      "legend": 19119,
      "ancient": 13654,
      "divine": 12480
    },
    "counters": [
      "medusa",
      "phantom-lancer",
      "weaver",
      "dazzle",
      "warlock",
      "primal-beast"
    ],
    "weakAgainst": [
      "alchemist",
      "naga-siren",
      "grimstroke",
      "monkey-king",
      "chen",
      "zeus"
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.486,
      "crusader": 0.486,
      "archon": 0.486,
      "legend": 0.48,
      "ancient": 0.48,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 22848,
      "guardian": 72265,
      "crusader": 117368,
      "archon": 147967,
      "legend": 137755,
      "ancient": 90479,
      "divine": 79640
    },
    "counters": [
      "night-stalker",
      "medusa",
      "undying",
      "terrorblade",
      "morphling",
      "pugna"
    ],
    "weakAgainst": [
      "lone-druid",
      "enigma",
      "monkey-king",
      "alchemist",
      "batrider",
      "phoenix"
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
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Dragon Lance",
      "Yasha",
      "Ogre Axe"
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.519,
      "crusader": 0.521,
      "archon": 0.519,
      "legend": 0.524,
      "ancient": 0.52,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 23097,
      "guardian": 72484,
      "crusader": 108860,
      "archon": 127427,
      "legend": 108870,
      "ancient": 64095,
      "divine": 42897
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.517,
      "crusader": 0.514,
      "archon": 0.504,
      "legend": 0.5,
      "ancient": 0.502,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 12028,
      "guardian": 45379,
      "crusader": 74797,
      "archon": 93096,
      "legend": 82582,
      "ancient": 49929,
      "divine": 34192
    },
    "counters": [
      "timbersaw",
      "lina",
      "vengeful-spirit",
      "chaos-knight",
      "ursa",
      "grimstroke"
    ],
    "weakAgainst": [
      "largo",
      "treant-protector",
      "leshrac",
      "keeper-of-the-light",
      "spirit-breaker",
      "clockwerk"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.5,
      "crusader": 0.499,
      "archon": 0.502,
      "legend": 0.501,
      "ancient": 0.492,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 17429,
      "guardian": 54933,
      "crusader": 82674,
      "archon": 98009,
      "legend": 85335,
      "ancient": 52503,
      "divine": 39661
    },
    "counters": [
      "death-prophet",
      "witch-doctor",
      "ancient-apparition",
      "dragon-knight",
      "phantom-lancer",
      "faceless-void"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "lycan",
      "dazzle",
      "clinkz",
      "phoenix"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.505,
      "crusader": 0.51,
      "archon": 0.505,
      "legend": 0.5,
      "ancient": 0.502,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 10261,
      "guardian": 33185,
      "crusader": 50797,
      "archon": 60626,
      "legend": 54630,
      "ancient": 34569,
      "divine": 26734
    },
    "counters": [
      "weaver",
      "grimstroke",
      "lifestealer",
      "drow-ranger",
      "viper",
      "sand-king"
    ],
    "weakAgainst": [
      "vengeful-spirit",
      "death-prophet",
      "naga-siren",
      "earth-spirit",
      "marci",
      "crystal-maiden"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.508,
      "crusader": 0.497,
      "archon": 0.492,
      "legend": 0.492,
      "ancient": 0.496,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 10737,
      "guardian": 36512,
      "crusader": 60793,
      "archon": 78083,
      "legend": 74183,
      "ancient": 47786,
      "divine": 35234
    },
    "counters": [
      "warlock",
      "beastmaster",
      "pudge",
      "tidehunter",
      "ogre-magi",
      "void-spirit"
    ],
    "weakAgainst": [
      "leshrac",
      "spirit-breaker",
      "treant-protector",
      "snapfire",
      "shadow-fiend",
      "lion"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Circlet",
      "Quelling Blade",
      "Magic Stick"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blade of Alacrity",
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.494,
      "crusader": 0.494,
      "archon": 0.493,
      "legend": 0.492,
      "ancient": 0.493,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 10642,
      "guardian": 37697,
      "crusader": 69367,
      "archon": 101266,
      "legend": 106962,
      "ancient": 76867,
      "divine": 67431
    },
    "counters": [
      "tinker",
      "death-prophet",
      "witch-doctor",
      "winter-wyvern",
      "skywrath-mage",
      "phantom-lancer"
    ],
    "weakAgainst": [
      "broodmother",
      "clinkz",
      "bounty-hunter",
      "treant-protector",
      "io",
      "bane"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Gauntlets of Strength",
      "Observer and Sentry Wards"
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
      "herald": 0.516,
      "guardian": 0.515,
      "crusader": 0.509,
      "archon": 0.506,
      "legend": 0.497,
      "ancient": 0.491,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 31738,
      "guardian": 97920,
      "crusader": 146277,
      "archon": 170387,
      "legend": 138098,
      "ancient": 73444,
      "divine": 39854
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
    "overallWin": 0.543,
    "winByBracket": {
      "herald": 0.558,
      "guardian": 0.548,
      "crusader": 0.545,
      "archon": 0.542,
      "legend": 0.542,
      "ancient": 0.539,
      "divine": 0.534
    },
    "pickByBracket": {
      "herald": 15169,
      "guardian": 54363,
      "crusader": 88412,
      "archon": 108971,
      "legend": 98365,
      "ancient": 61604,
      "divine": 49623
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.518,
      "crusader": 0.519,
      "archon": 0.522,
      "legend": 0.519,
      "ancient": 0.526,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 20314,
      "guardian": 63686,
      "crusader": 99304,
      "archon": 121380,
      "legend": 112036,
      "ancient": 70384,
      "divine": 55086
    },
    "counters": [
      "clinkz",
      "ancient-apparition",
      "silencer",
      "death-prophet",
      "phantom-lancer",
      "slark"
    ],
    "weakAgainst": [
      "treant-protector",
      "huskar",
      "keeper-of-the-light",
      "drow-ranger",
      "largo",
      "razor"
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.466,
      "crusader": 0.458,
      "archon": 0.462,
      "legend": 0.461,
      "ancient": 0.472,
      "divine": 0.467
    },
    "pickByBracket": {
      "herald": 8303,
      "guardian": 25745,
      "crusader": 39444,
      "archon": 49346,
      "legend": 47460,
      "ancient": 32340,
      "divine": 28417
    },
    "counters": [
      "naga-siren",
      "templar-assassin",
      "sven",
      "techies",
      "death-prophet",
      "medusa"
    ],
    "weakAgainst": [
      "mirana",
      "treant-protector",
      "huskar",
      "chen",
      "night-stalker",
      "lycan"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Magic Stick",
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.503,
      "guardian": 0.509,
      "crusader": 0.515,
      "archon": 0.512,
      "legend": 0.512,
      "ancient": 0.514,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 11792,
      "guardian": 35980,
      "crusader": 54566,
      "archon": 65688,
      "legend": 61043,
      "ancient": 40664,
      "divine": 35242
    },
    "counters": [
      "undying",
      "phantom-lancer",
      "axe",
      "skywrath-mage",
      "zeus",
      "dark-seer"
    ],
    "weakAgainst": [
      "lycan",
      "earthshaker",
      "void-spirit",
      "lich",
      "gyrocopter",
      "tiny"
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
      "herald": 0.521,
      "guardian": 0.512,
      "crusader": 0.512,
      "archon": 0.51,
      "legend": 0.506,
      "ancient": 0.506,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 13677,
      "guardian": 43555,
      "crusader": 66814,
      "archon": 77969,
      "legend": 68372,
      "ancient": 42479,
      "divine": 33636
    },
    "counters": [
      "viper",
      "luna",
      "crystal-maiden",
      "vengeful-spirit",
      "grimstroke",
      "disruptor"
    ],
    "weakAgainst": [
      "phoenix",
      "muerta",
      "keeper-of-the-light",
      "juggernaut",
      "bristleback",
      "monkey-king"
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
      "Glimmer Cape",
      "Essence Distiller",
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
    "overallWin": 0.462,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.453,
      "crusader": 0.46,
      "archon": 0.461,
      "legend": 0.465,
      "ancient": 0.469,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 6380,
      "guardian": 18915,
      "crusader": 28242,
      "archon": 33375,
      "legend": 29939,
      "ancient": 19104,
      "divine": 16284
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
    "overallWin": 0.468,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.46,
      "crusader": 0.459,
      "archon": 0.463,
      "legend": 0.47,
      "ancient": 0.472,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 5601,
      "guardian": 15686,
      "crusader": 21641,
      "archon": 23690,
      "legend": 19680,
      "ancient": 13145,
      "divine": 14705
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.503,
      "crusader": 0.509,
      "archon": 0.507,
      "legend": 0.505,
      "ancient": 0.502,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 8797,
      "guardian": 29789,
      "crusader": 50144,
      "archon": 64578,
      "legend": 60747,
      "ancient": 38229,
      "divine": 29916
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
      "herald": 0.454,
      "guardian": 0.454,
      "crusader": 0.447,
      "archon": 0.453,
      "legend": 0.442,
      "ancient": 0.442,
      "divine": 0.441
    },
    "pickByBracket": {
      "herald": 5058,
      "guardian": 16342,
      "crusader": 26482,
      "archon": 34875,
      "legend": 35030,
      "ancient": 24167,
      "divine": 23670
    },
    "counters": [
      "anti-mage",
      "morphling",
      "lina",
      "troll-warlord",
      "witch-doctor",
      "grimstroke"
    ],
    "weakAgainst": [
      "bane",
      "largo",
      "nyx-assassin",
      "bounty-hunter",
      "alchemist",
      "silencer"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Magic Stick",
      "Circlet",
      "Faerie Fire"
    ],
    "coreItems": [
      "Ogre Axe",
      "Sange",
      "Kaya",
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
      "herald": 0.457,
      "guardian": 0.459,
      "crusader": 0.46,
      "archon": 0.461,
      "legend": 0.476,
      "ancient": 0.479,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 6712,
      "guardian": 21744,
      "crusader": 33199,
      "archon": 38863,
      "legend": 35298,
      "ancient": 23471,
      "divine": 20618
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
    "overallWin": 0.442,
    "winByBracket": {
      "herald": 0.46,
      "guardian": 0.447,
      "crusader": 0.442,
      "archon": 0.439,
      "legend": 0.437,
      "ancient": 0.442,
      "divine": 0.447
    },
    "pickByBracket": {
      "herald": 7514,
      "guardian": 20927,
      "crusader": 30775,
      "archon": 37658,
      "legend": 36505,
      "ancient": 25332,
      "divine": 25084
    },
    "counters": [
      "weaver",
      "sven",
      "bristleback",
      "death-prophet",
      "dark-seer",
      "void-spirit"
    ],
    "weakAgainst": [
      "bane",
      "kez",
      "chen",
      "treant-protector",
      "kunkka",
      "keeper-of-the-light"
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
      "Blink Dagger"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.477,
      "crusader": 0.491,
      "archon": 0.49,
      "legend": 0.494,
      "ancient": 0.503,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 4132,
      "guardian": 13928,
      "crusader": 23131,
      "archon": 30684,
      "legend": 31111,
      "ancient": 23520,
      "divine": 33344
    },
    "counters": [
      "invoker",
      "monkey-king",
      "gyrocopter",
      "spirit-breaker",
      "razor",
      "silencer"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.526,
      "crusader": 0.521,
      "archon": 0.519,
      "legend": 0.514,
      "ancient": 0.508,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 7585,
      "guardian": 17700,
      "crusader": 20892,
      "archon": 21466,
      "legend": 16871,
      "ancient": 9572,
      "divine": 6706
    },
    "counters": [
      "silencer",
      "lifestealer",
      "tidehunter",
      "medusa",
      "sven",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "abaddon",
      "invoker",
      "nature-s-prophet",
      "pudge",
      "spirit-breaker",
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.455,
      "guardian": 0.459,
      "crusader": 0.463,
      "archon": 0.475,
      "legend": 0.482,
      "ancient": 0.491,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 4198,
      "guardian": 14268,
      "crusader": 25587,
      "archon": 37390,
      "legend": 43434,
      "ancient": 34675,
      "divine": 37448
    },
    "counters": [
      "vengeful-spirit",
      "ancient-apparition",
      "tinker",
      "oracle",
      "void-spirit",
      "lifestealer"
    ],
    "weakAgainst": [
      "treant-protector",
      "broodmother",
      "venomancer",
      "muerta",
      "pugna",
      "bane"
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
      "Blink Dagger",
      "Phase Boots",
      "Staff of Wizardry",
      "Aghanim's Shard",
      "Ogre Axe"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.516,
      "crusader": 0.514,
      "archon": 0.508,
      "legend": 0.499,
      "ancient": 0.491,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 6005,
      "guardian": 23741,
      "crusader": 46232,
      "archon": 68596,
      "legend": 70740,
      "ancient": 47922,
      "divine": 38847
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.512,
      "crusader": 0.517,
      "archon": 0.519,
      "legend": 0.516,
      "ancient": 0.515,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 13919,
      "guardian": 50197,
      "crusader": 84439,
      "archon": 109342,
      "legend": 101698,
      "ancient": 65850,
      "divine": 58959
    },
    "counters": [
      "lion",
      "weaver",
      "shadow-shaman",
      "windranger",
      "ursa",
      "dragon-knight"
    ],
    "weakAgainst": [
      "monkey-king",
      "treant-protector",
      "marci",
      "pugna",
      "ember-spirit",
      "batrider"
    ],
    "startItems": [
      "Iron Branch",
      "Enchanted Mango",
      "Blood Grenade",
      "Smoke of Deceit",
      "Observer and Sentry Wards",
      "Magic Stick"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Arcane Boots",
      "Blink Dagger",
      "Pavise",
      "Phase Boots"
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
      "herald": 0.449,
      "guardian": 0.459,
      "crusader": 0.471,
      "archon": 0.475,
      "legend": 0.478,
      "ancient": 0.481,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 9480,
      "guardian": 25846,
      "crusader": 38304,
      "archon": 47124,
      "legend": 42433,
      "ancient": 27052,
      "divine": 20073
    },
    "counters": [
      "underlord",
      "muerta",
      "timbersaw",
      "dark-willow",
      "grimstroke",
      "weaver"
    ],
    "weakAgainst": [
      "treant-protector",
      "chen",
      "alchemist",
      "marci",
      "bounty-hunter",
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
    "overallWin": 0.532,
    "winByBracket": {
      "herald": 0.537,
      "guardian": 0.537,
      "crusader": 0.538,
      "archon": 0.536,
      "legend": 0.53,
      "ancient": 0.525,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 13009,
      "guardian": 45221,
      "crusader": 76629,
      "archon": 100800,
      "legend": 97056,
      "ancient": 61200,
      "divine": 42745
    },
    "counters": [
      "slardar",
      "morphling",
      "legion-commander",
      "lich",
      "lina",
      "warlock"
    ],
    "weakAgainst": [
      "clockwerk",
      "dawnbreaker",
      "phoenix",
      "tusk",
      "beastmaster",
      "witch-doctor"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Faerie Fire",
      "Magic Stick",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Specialist's Array",
      "Broadsword",
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.476,
      "crusader": 0.478,
      "archon": 0.478,
      "legend": 0.479,
      "ancient": 0.47,
      "divine": 0.463
    },
    "pickByBracket": {
      "herald": 11305,
      "guardian": 35593,
      "crusader": 53455,
      "archon": 63200,
      "legend": 52964,
      "ancient": 29923,
      "divine": 19030
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.48,
      "crusader": 0.483,
      "archon": 0.481,
      "legend": 0.487,
      "ancient": 0.489,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 19016,
      "guardian": 45717,
      "crusader": 56239,
      "archon": 57143,
      "legend": 45214,
      "ancient": 24829,
      "divine": 18070
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
    "overallWin": 0.53,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.51,
      "crusader": 0.51,
      "archon": 0.526,
      "legend": 0.543,
      "ancient": 0.55,
      "divine": 0.558
    },
    "pickByBracket": {
      "herald": 2078,
      "guardian": 5770,
      "crusader": 8518,
      "archon": 10071,
      "legend": 8962,
      "ancient": 6215,
      "divine": 7527
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.48,
      "crusader": 0.492,
      "archon": 0.496,
      "legend": 0.508,
      "ancient": 0.499,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 4516,
      "guardian": 13569,
      "crusader": 22709,
      "archon": 30958,
      "legend": 33334,
      "ancient": 24521,
      "divine": 25194
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
      "nyx-assassin",
      "necrophos",
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
      "Aghanim's Shard",
      "Blade of Alacrity",
      "Spirit Vessel",
      "Ogre Axe"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.515,
      "crusader": 0.508,
      "archon": 0.501,
      "legend": 0.491,
      "ancient": 0.492,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 8096,
      "guardian": 28584,
      "crusader": 44112,
      "archon": 52531,
      "legend": 45011,
      "ancient": 25383,
      "divine": 17134
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.476,
      "crusader": 0.476,
      "archon": 0.468,
      "legend": 0.47,
      "ancient": 0.472,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 10701,
      "guardian": 28295,
      "crusader": 37759,
      "archon": 42091,
      "legend": 35860,
      "ancient": 21182,
      "divine": 16544
    },
    "counters": [
      "sven",
      "dazzle",
      "ancient-apparition",
      "brewmaster",
      "gyrocopter",
      "earthshaker"
    ],
    "weakAgainst": [
      "morphling",
      "monkey-king",
      "venomancer",
      "tiny",
      "rubick",
      "shadow-demon"
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.485,
      "crusader": 0.483,
      "archon": 0.482,
      "legend": 0.483,
      "ancient": 0.488,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 20361,
      "guardian": 62135,
      "crusader": 96709,
      "archon": 123833,
      "legend": 119809,
      "ancient": 80011,
      "divine": 69495
    },
    "counters": [
      "phantom-lancer",
      "grimstroke",
      "morphling",
      "chaos-knight",
      "weaver",
      "oracle"
    ],
    "weakAgainst": [
      "treant-protector",
      "enigma",
      "lone-druid",
      "bane",
      "ember-spirit",
      "largo"
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
      "Hyperstone",
      "Mjollnir",
      "Ogre Axe"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.477,
      "crusader": 0.482,
      "archon": 0.492,
      "legend": 0.504,
      "ancient": 0.507,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 5982,
      "guardian": 19500,
      "crusader": 30522,
      "archon": 37218,
      "legend": 35851,
      "ancient": 24928,
      "divine": 28760
    },
    "counters": [
      "dark-willow",
      "void-spirit",
      "clockwerk",
      "slardar",
      "centaur-warrunner",
      "undying"
    ],
    "weakAgainst": [
      "ogre-magi",
      "snapfire",
      "ember-spirit",
      "jakiro",
      "axe",
      "beastmaster"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.529,
      "crusader": 0.522,
      "archon": 0.524,
      "legend": 0.52,
      "ancient": 0.509,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 20523,
      "guardian": 69916,
      "crusader": 110843,
      "archon": 134737,
      "legend": 114259,
      "ancient": 64312,
      "divine": 39253
    },
    "counters": [
      "vengeful-spirit",
      "lich",
      "ursa",
      "tidehunter",
      "zeus",
      "undying"
    ],
    "weakAgainst": [
      "ember-spirit",
      "sniper",
      "necrophos",
      "lifestealer",
      "snapfire",
      "nature-s-prophet"
    ],
    "startItems": [
      "Iron Branch",
      "Blood Grenade",
      "Tango",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Arcane Boots",
      "Glimmer Cape",
      "Aghanim's Shard",
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
      "herald": 0.556,
      "guardian": 0.556,
      "crusader": 0.553,
      "archon": 0.551,
      "legend": 0.542,
      "ancient": 0.542,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 15531,
      "guardian": 52356,
      "crusader": 85228,
      "archon": 104846,
      "legend": 92335,
      "ancient": 52630,
      "divine": 29586
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.503,
      "crusader": 0.504,
      "archon": 0.503,
      "legend": 0.5,
      "ancient": 0.498,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 19118,
      "guardian": 60080,
      "crusader": 95191,
      "archon": 118097,
      "legend": 107646,
      "ancient": 67431,
      "divine": 50750
    },
    "counters": [
      "viper",
      "medusa",
      "vengeful-spirit",
      "undying",
      "slardar",
      "dawnbreaker"
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
