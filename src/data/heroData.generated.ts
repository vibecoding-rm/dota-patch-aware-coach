// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-09-03
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.51,
      "crusader": 0.51,
      "archon": 0.518,
      "legend": 0.51,
      "ancient": 0.508,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 4593,
      "guardian": 13444,
      "crusader": 21577,
      "archon": 27921,
      "legend": 27585,
      "ancient": 17243,
      "divine": 11099
    },
    "counters": [
      "legion-commander",
      "troll-warlord",
      "terrorblade",
      "lion",
      "clockwerk",
      "sand-king"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "wraith-king",
      "underlord",
      "marci",
      "shadow-demon",
      "bane"
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.482,
      "crusader": 0.478,
      "archon": 0.467,
      "legend": 0.468,
      "ancient": 0.458,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 4273,
      "guardian": 13827,
      "crusader": 22365,
      "archon": 28556,
      "legend": 26215,
      "ancient": 16219,
      "divine": 9669
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.518,
      "crusader": 0.523,
      "archon": 0.523,
      "legend": 0.517,
      "ancient": 0.512,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 7420,
      "guardian": 26292,
      "crusader": 45344,
      "archon": 61297,
      "legend": 60306,
      "ancient": 35781,
      "divine": 20328
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.503,
      "crusader": 0.501,
      "archon": 0.5,
      "legend": 0.498,
      "ancient": 0.496,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 14975,
      "guardian": 48907,
      "crusader": 79086,
      "archon": 96401,
      "legend": 84146,
      "ancient": 46989,
      "divine": 25255
    },
    "counters": [
      "dragon-knight",
      "warlock",
      "storm-spirit",
      "disruptor",
      "doom",
      "mars"
    ],
    "weakAgainst": [
      "timbersaw",
      "jakiro",
      "ember-spirit",
      "ogre-magi",
      "skywrath-mage",
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
    "overallWin": 0.528,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.512,
      "crusader": 0.522,
      "archon": 0.532,
      "legend": 0.534,
      "ancient": 0.536,
      "divine": 0.537
    },
    "pickByBracket": {
      "herald": 5001,
      "guardian": 16619,
      "crusader": 27888,
      "archon": 34789,
      "legend": 32858,
      "ancient": 20076,
      "divine": 14705
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.52,
      "crusader": 0.513,
      "archon": 0.506,
      "legend": 0.498,
      "ancient": 0.491,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 19723,
      "guardian": 70026,
      "crusader": 121529,
      "archon": 164150,
      "legend": 163584,
      "ancient": 105513,
      "divine": 70038
    },
    "counters": [
      "morphling",
      "terrorblade",
      "faceless-void",
      "winter-wyvern",
      "troll-warlord",
      "death-prophet"
    ],
    "weakAgainst": [
      "bane",
      "monkey-king",
      "chen",
      "abaddon",
      "ember-spirit",
      "treant-protector"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Ring of Protection",
      "Tango",
      "Magic Stick",
      "Faerie Fire"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.48,
      "crusader": 0.49,
      "archon": 0.496,
      "legend": 0.5,
      "ancient": 0.505,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 4956,
      "guardian": 16602,
      "crusader": 27514,
      "archon": 36303,
      "legend": 35378,
      "ancient": 25164,
      "divine": 22267
    },
    "counters": [
      "axe",
      "templar-assassin",
      "timbersaw",
      "earthshaker",
      "tiny",
      "phoenix"
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
    "overallWin": 0.436,
    "winByBracket": {
      "herald": 0.414,
      "guardian": 0.433,
      "crusader": 0.43,
      "archon": 0.437,
      "legend": 0.432,
      "ancient": 0.436,
      "divine": 0.457
    },
    "pickByBracket": {
      "herald": 1482,
      "guardian": 4149,
      "crusader": 6502,
      "archon": 8009,
      "legend": 7286,
      "ancient": 5071,
      "divine": 4443
    },
    "counters": [
      "bristleback",
      "grimstroke",
      "beastmaster",
      "medusa",
      "dawnbreaker",
      "weaver"
    ],
    "weakAgainst": [
      "oracle",
      "bane",
      "primal-beast",
      "chen",
      "ember-spirit",
      "underlord"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Circlet",
      "Tango",
      "Magic Stick",
      "Observer and Sentry Wards"
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
    "overallWin": 0.448,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.447,
      "crusader": 0.444,
      "archon": 0.445,
      "legend": 0.443,
      "ancient": 0.451,
      "divine": 0.467
    },
    "pickByBracket": {
      "herald": 3231,
      "guardian": 9503,
      "crusader": 15276,
      "archon": 18385,
      "legend": 16580,
      "ancient": 10455,
      "divine": 8665
    },
    "counters": [
      "lycan",
      "vengeful-spirit",
      "zeus",
      "shadow-shaman",
      "necrophos",
      "clockwerk"
    ],
    "weakAgainst": [
      "dazzle",
      "grimstroke",
      "batrider",
      "pangolier",
      "slark",
      "juggernaut"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Sage's Mask",
      "Magic Stick",
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.508,
      "crusader": 0.513,
      "archon": 0.517,
      "legend": 0.521,
      "ancient": 0.529,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 9967,
      "guardian": 23574,
      "crusader": 28799,
      "archon": 28509,
      "legend": 22889,
      "ancient": 13416,
      "divine": 6996
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
    "overallWin": 0.537,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.514,
      "crusader": 0.517,
      "archon": 0.531,
      "legend": 0.541,
      "ancient": 0.554,
      "divine": 0.559
    },
    "pickByBracket": {
      "herald": 8489,
      "guardian": 28530,
      "crusader": 49367,
      "archon": 69342,
      "legend": 77626,
      "ancient": 60274,
      "divine": 59203
    },
    "counters": [
      "dragon-knight",
      "centaur-warrunner",
      "timbersaw",
      "ursa",
      "snapfire",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "chen",
      "ember-spirit"
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.488,
      "crusader": 0.499,
      "archon": 0.508,
      "legend": 0.503,
      "ancient": 0.513,
      "divine": 0.537
    },
    "pickByBracket": {
      "herald": 1567,
      "guardian": 4438,
      "crusader": 7679,
      "archon": 10748,
      "legend": 11217,
      "ancient": 9316,
      "divine": 9685
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.537,
      "guardian": 0.511,
      "crusader": 0.495,
      "archon": 0.477,
      "legend": 0.469,
      "ancient": 0.46,
      "divine": 0.455
    },
    "pickByBracket": {
      "herald": 15575,
      "guardian": 45331,
      "crusader": 59171,
      "archon": 59598,
      "legend": 43446,
      "ancient": 21195,
      "divine": 11009
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.491,
      "crusader": 0.492,
      "archon": 0.489,
      "legend": 0.498,
      "ancient": 0.52,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 4005,
      "guardian": 10445,
      "crusader": 14060,
      "archon": 14137,
      "legend": 11371,
      "ancient": 6436,
      "divine": 4694
    },
    "counters": [],
    "weakAgainst": [],
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
      "Blade of Alacrity",
      "Yasha",
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.518,
      "crusader": 0.51,
      "archon": 0.507,
      "legend": 0.501,
      "ancient": 0.499,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 6683,
      "guardian": 27783,
      "crusader": 54147,
      "archon": 82887,
      "legend": 90165,
      "ancient": 61462,
      "divine": 42531
    },
    "counters": [
      "medusa",
      "weaver",
      "terrorblade",
      "faceless-void",
      "troll-warlord",
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
      "Quelling Blade"
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.535,
      "guardian": 0.524,
      "crusader": 0.516,
      "archon": 0.511,
      "legend": 0.51,
      "ancient": 0.517,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 8397,
      "guardian": 25767,
      "crusader": 36223,
      "archon": 39261,
      "legend": 31192,
      "ancient": 17814,
      "divine": 10770
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
    "overallWin": 0.454,
    "winByBracket": {
      "herald": 0.419,
      "guardian": 0.444,
      "crusader": 0.437,
      "archon": 0.44,
      "legend": 0.449,
      "ancient": 0.476,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 666,
      "guardian": 1905,
      "crusader": 2918,
      "archon": 3340,
      "legend": 2911,
      "ancient": 2114,
      "divine": 1833
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.487,
      "crusader": 0.492,
      "archon": 0.494,
      "legend": 0.5,
      "ancient": 0.506,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 10223,
      "guardian": 26891,
      "crusader": 35852,
      "archon": 39881,
      "legend": 35755,
      "ancient": 22927,
      "divine": 17261
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.483,
      "crusader": 0.484,
      "archon": 0.48,
      "legend": 0.487,
      "ancient": 0.489,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 2973,
      "guardian": 10945,
      "crusader": 20549,
      "archon": 30453,
      "legend": 35416,
      "ancient": 28344,
      "divine": 26886
    },
    "counters": [
      "tidehunter",
      "silencer",
      "luna",
      "dark-willow",
      "pugna",
      "pangolier"
    ],
    "weakAgainst": [
      "venomancer",
      "leshrac",
      "clinkz",
      "abaddon",
      "keeper-of-the-light",
      "beastmaster"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Sentry Ward",
      "Boots of Speed"
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.54,
      "guardian": 0.534,
      "crusader": 0.521,
      "archon": 0.515,
      "legend": 0.513,
      "ancient": 0.505,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 19387,
      "guardian": 63236,
      "crusader": 97396,
      "archon": 120732,
      "legend": 113401,
      "ancient": 72244,
      "divine": 45992
    },
    "counters": [
      "slardar",
      "necrophos",
      "underlord",
      "sniper",
      "pugna",
      "mars"
    ],
    "weakAgainst": [
      "razor",
      "techies",
      "earthshaker",
      "hoodwink",
      "venomancer",
      "snapfire"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.486,
      "crusader": 0.481,
      "archon": 0.484,
      "legend": 0.49,
      "ancient": 0.495,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 4614,
      "guardian": 16561,
      "crusader": 30288,
      "archon": 43526,
      "legend": 48179,
      "ancient": 37070,
      "divine": 38854
    },
    "counters": [
      "terrorblade",
      "disruptor",
      "queen-of-pain",
      "puck",
      "slardar",
      "tusk"
    ],
    "weakAgainst": [
      "phoenix",
      "ember-spirit",
      "tiny",
      "lion",
      "storm-spirit",
      "hoodwink"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Mantle of Intelligence",
      "Faerie Fire",
      "Sage's Mask"
    ],
    "coreItems": [
      "Platemail",
      "Shiva's Guard",
      "Blink Dagger",
      "Aghanim's Shard",
      "Arcane Boots"
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.474,
      "crusader": 0.478,
      "archon": 0.479,
      "legend": 0.489,
      "ancient": 0.494,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 7760,
      "guardian": 25374,
      "crusader": 42344,
      "archon": 58601,
      "legend": 63881,
      "ancient": 48719,
      "divine": 42982
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.516,
      "crusader": 0.518,
      "archon": 0.52,
      "legend": 0.524,
      "ancient": 0.525,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 6231,
      "guardian": 23306,
      "crusader": 44145,
      "archon": 71322,
      "legend": 82708,
      "ancient": 63053,
      "divine": 51533
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.491,
      "crusader": 0.5,
      "archon": 0.51,
      "legend": 0.514,
      "ancient": 0.519,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 5862,
      "guardian": 19983,
      "crusader": 32824,
      "archon": 41324,
      "legend": 36492,
      "ancient": 22782,
      "divine": 15202
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
      "abaddon",
      "lion",
      "slardar",
      "gyrocopter",
      "ember-spirit"
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.475,
      "crusader": 0.475,
      "archon": 0.483,
      "legend": 0.488,
      "ancient": 0.497,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 7076,
      "guardian": 17628,
      "crusader": 24545,
      "archon": 30274,
      "legend": 28522,
      "ancient": 19311,
      "divine": 14106
    },
    "counters": [
      "shadow-shaman",
      "slardar",
      "ogre-magi",
      "zeus",
      "dragon-knight"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "pudge",
      "snapfire",
      "hoodwink",
      "tusk",
      "skywrath-mage"
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
      "herald": 0.496,
      "guardian": 0.492,
      "crusader": 0.497,
      "archon": 0.498,
      "legend": 0.5,
      "ancient": 0.505,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 5220,
      "guardian": 21406,
      "crusader": 42323,
      "archon": 66691,
      "legend": 75806,
      "ancient": 55699,
      "divine": 43577
    },
    "counters": [
      "phantom-assassin",
      "chaos-knight",
      "phantom-lancer",
      "muerta",
      "sven",
      "bristleback"
    ],
    "weakAgainst": [
      "broodmother",
      "kez",
      "io",
      "dark-seer",
      "treant-protector",
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.46,
      "crusader": 0.462,
      "archon": 0.466,
      "legend": 0.471,
      "ancient": 0.481,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 5147,
      "guardian": 18800,
      "crusader": 34287,
      "archon": 52770,
      "legend": 59849,
      "ancient": 45738,
      "divine": 40230
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.516,
      "crusader": 0.508,
      "archon": 0.513,
      "legend": 0.513,
      "ancient": 0.515,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 7249,
      "guardian": 24127,
      "crusader": 39568,
      "archon": 51489,
      "legend": 50282,
      "ancient": 33626,
      "divine": 25690
    },
    "counters": [
      "drow-ranger",
      "morphling",
      "troll-warlord",
      "pangolier",
      "magnus",
      "tusk"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "venomancer",
      "keeper-of-the-light",
      "terrorblade",
      "phoenix",
      "monkey-king"
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.472,
      "crusader": 0.468,
      "archon": 0.463,
      "legend": 0.461,
      "ancient": 0.457,
      "divine": 0.451
    },
    "pickByBracket": {
      "herald": 20089,
      "guardian": 61217,
      "crusader": 94715,
      "archon": 118139,
      "legend": 110564,
      "ancient": 68989,
      "divine": 43175
    },
    "counters": [
      "underlord",
      "pudge",
      "disruptor",
      "spirit-breaker",
      "bristleback",
      "lich"
    ],
    "weakAgainst": [
      "treant-protector",
      "largo",
      "dragon-knight",
      "shadow-demon",
      "slardar",
      "hoodwink"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.482,
      "crusader": 0.484,
      "archon": 0.488,
      "legend": 0.498,
      "ancient": 0.506,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 4072,
      "guardian": 16596,
      "crusader": 35701,
      "archon": 59077,
      "legend": 71673,
      "ancient": 57296,
      "divine": 52188
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Gauntlets of Strength",
      "Circlet"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.495,
      "crusader": 0.499,
      "archon": 0.502,
      "legend": 0.506,
      "ancient": 0.511,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 17208,
      "guardian": 55222,
      "crusader": 91167,
      "archon": 122111,
      "legend": 125401,
      "ancient": 84540,
      "divine": 56596
    },
    "counters": [
      "sven",
      "wraith-king",
      "pugna",
      "sniper",
      "invoker",
      "axe"
    ],
    "weakAgainst": [
      "monkey-king",
      "bane",
      "enchantress",
      "gyrocopter",
      "ember-spirit",
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
      "herald": 0.5,
      "guardian": 0.481,
      "crusader": 0.502,
      "archon": 0.504,
      "legend": 0.526,
      "ancient": 0.535,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 1373,
      "guardian": 4256,
      "crusader": 6490,
      "archon": 8261,
      "legend": 7991,
      "ancient": 5555,
      "divine": 5464
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.47,
      "crusader": 0.478,
      "archon": 0.484,
      "legend": 0.49,
      "ancient": 0.497,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 6481,
      "guardian": 23841,
      "crusader": 46041,
      "archon": 71137,
      "legend": 83591,
      "ancient": 64909,
      "divine": 59756
    },
    "counters": [
      "sniper",
      "witch-doctor",
      "dark-seer",
      "venomancer",
      "void-spirit",
      "medusa"
    ],
    "weakAgainst": [
      "io",
      "clinkz",
      "treant-protector",
      "bane",
      "alchemist",
      "lifestealer"
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
      "herald": 0.496,
      "guardian": 0.485,
      "crusader": 0.482,
      "archon": 0.481,
      "legend": 0.476,
      "ancient": 0.469,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 6191,
      "guardian": 15533,
      "crusader": 19963,
      "archon": 21921,
      "legend": 20035,
      "ancient": 13838,
      "divine": 12758
    },
    "counters": [
      "earthshaker",
      "ursa",
      "clockwerk",
      "disruptor",
      "void-spirit",
      "invoker"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "marci",
      "gyrocopter",
      "leshrac",
      "slardar",
      "templar-assassin"
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
      "Staff of Wizardry",
      "Drum of Endurance",
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.494,
      "crusader": 0.493,
      "archon": 0.501,
      "legend": 0.514,
      "ancient": 0.534,
      "divine": 0.56
    },
    "pickByBracket": {
      "herald": 5380,
      "guardian": 17088,
      "crusader": 28040,
      "archon": 35520,
      "legend": 32907,
      "ancient": 22392,
      "divine": 21125
    },
    "counters": [],
    "weakAgainst": [],
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
      "herald": 0.492,
      "guardian": 0.487,
      "crusader": 0.484,
      "archon": 0.484,
      "legend": 0.489,
      "ancient": 0.497,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 10985,
      "guardian": 37599,
      "crusader": 59984,
      "archon": 77307,
      "legend": 72794,
      "ancient": 45040,
      "divine": 27881
    },
    "counters": [
      "dragon-knight",
      "dawnbreaker",
      "primal-beast",
      "ursa",
      "razor",
      "void-spirit"
    ],
    "weakAgainst": [
      "tidehunter",
      "skywrath-mage",
      "axe",
      "centaur-warrunner",
      "muerta",
      "keeper-of-the-light"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.515,
      "crusader": 0.518,
      "archon": 0.518,
      "legend": 0.518,
      "ancient": 0.52,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 4605,
      "guardian": 17195,
      "crusader": 32547,
      "archon": 48511,
      "legend": 52862,
      "ancient": 37695,
      "divine": 29162
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
    "overallWin": 0.455,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.449,
      "crusader": 0.451,
      "archon": 0.457,
      "legend": 0.455,
      "ancient": 0.463,
      "divine": 0.454
    },
    "pickByBracket": {
      "herald": 3176,
      "guardian": 9641,
      "crusader": 15895,
      "archon": 22995,
      "legend": 22384,
      "ancient": 15023,
      "divine": 9612
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.471,
      "crusader": 0.474,
      "archon": 0.475,
      "legend": 0.475,
      "ancient": 0.475,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 14031,
      "guardian": 47980,
      "crusader": 82675,
      "archon": 116973,
      "legend": 120843,
      "ancient": 85249,
      "divine": 68761
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
    "overallWin": 0.448,
    "winByBracket": {
      "herald": 0.448,
      "guardian": 0.446,
      "crusader": 0.437,
      "archon": 0.448,
      "legend": 0.453,
      "ancient": 0.449,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 9584,
      "guardian": 22052,
      "crusader": 27214,
      "archon": 29978,
      "legend": 26470,
      "ancient": 16943,
      "divine": 12944
    },
    "counters": [
      "storm-spirit",
      "tidehunter",
      "spirit-breaker",
      "ring-master",
      "skywrath-mage",
      "phoenix"
    ],
    "weakAgainst": [
      "hoodwink",
      "marci",
      "nature-s-prophet",
      "abaddon",
      "beastmaster",
      "rubick"
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
      "Black King Bar",
      "Blink Dagger"
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.49,
      "crusader": 0.495,
      "archon": 0.499,
      "legend": 0.506,
      "ancient": 0.511,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 15946,
      "guardian": 58677,
      "crusader": 111734,
      "archon": 165001,
      "legend": 178820,
      "ancient": 127563,
      "divine": 95476
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.486,
      "crusader": 0.487,
      "archon": 0.477,
      "legend": 0.476,
      "ancient": 0.481,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 5246,
      "guardian": 17835,
      "crusader": 30633,
      "archon": 40574,
      "legend": 40425,
      "ancient": 28542,
      "divine": 24300
    },
    "counters": [
      "disruptor",
      "ember-spirit",
      "jakiro",
      "queen-of-pain",
      "snapfire",
      "hoodwink"
    ],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Gauntlets of Strength",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Magic Stick"
    ],
    "coreItems": [
      "Ogre Axe",
      "Mithril Hammer",
      "Mekansm",
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.494,
      "crusader": 0.489,
      "archon": 0.485,
      "legend": 0.479,
      "ancient": 0.474,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 10724,
      "guardian": 36301,
      "crusader": 61042,
      "archon": 80606,
      "legend": 75458,
      "ancient": 44970,
      "divine": 25036
    },
    "counters": [
      "chaos-knight",
      "anti-mage",
      "undying",
      "weaver",
      "winter-wyvern",
      "drow-ranger"
    ],
    "weakAgainst": [
      "treant-protector",
      "io",
      "clinkz",
      "dazzle",
      "alchemist",
      "bane"
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
      "Force Staff",
      "Eul's Scepter of Divinity"
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.511,
      "crusader": 0.521,
      "archon": 0.525,
      "legend": 0.526,
      "ancient": 0.531,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 20976,
      "guardian": 68454,
      "crusader": 114442,
      "archon": 158002,
      "legend": 156668,
      "ancient": 103571,
      "divine": 64616
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
      "dawnbreaker"
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.487,
      "crusader": 0.489,
      "archon": 0.496,
      "legend": 0.509,
      "ancient": 0.514,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 7779,
      "guardian": 24898,
      "crusader": 38855,
      "archon": 48970,
      "legend": 47606,
      "ancient": 32617,
      "divine": 30774
    },
    "counters": [
      "warlock",
      "queen-of-pain",
      "phoenix",
      "lina",
      "silencer",
      "kez"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "slardar",
      "batrider",
      "viper",
      "pudge"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Circlet",
      "Faerie Fire",
      "Blood Grenade"
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
    "overallWin": 0.447,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.46,
      "crusader": 0.455,
      "archon": 0.444,
      "legend": 0.438,
      "ancient": 0.44,
      "divine": 0.448
    },
    "pickByBracket": {
      "herald": 5832,
      "guardian": 17251,
      "crusader": 28548,
      "archon": 38699,
      "legend": 40714,
      "ancient": 29747,
      "divine": 25392
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.488,
      "crusader": 0.488,
      "archon": 0.499,
      "legend": 0.499,
      "ancient": 0.501,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 5389,
      "guardian": 16171,
      "crusader": 26562,
      "archon": 36610,
      "legend": 37831,
      "ancient": 25634,
      "divine": 16597
    },
    "counters": [
      "bristleback",
      "hoodwink",
      "pangolier",
      "tiny",
      "warlock",
      "skywrath-mage"
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
      "herald": 0.447,
      "guardian": 0.459,
      "crusader": 0.471,
      "archon": 0.476,
      "legend": 0.481,
      "ancient": 0.484,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 1735,
      "guardian": 5722,
      "crusader": 9879,
      "archon": 13960,
      "legend": 15639,
      "ancient": 12671,
      "divine": 12533
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
    "overallWin": 0.529,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.528,
      "crusader": 0.527,
      "archon": 0.53,
      "legend": 0.528,
      "ancient": 0.529,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 15381,
      "guardian": 56341,
      "crusader": 96718,
      "archon": 127840,
      "legend": 120957,
      "ancient": 71733,
      "divine": 40550
    },
    "counters": [
      "luna",
      "bristleback",
      "shadow-shaman",
      "skywrath-mage",
      "ursa",
      "silencer"
    ],
    "weakAgainst": [
      "abaddon",
      "hoodwink",
      "sniper",
      "lifestealer",
      "snapfire",
      "dawnbreaker"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.493,
      "crusader": 0.499,
      "archon": 0.5,
      "legend": 0.506,
      "ancient": 0.507,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 2701,
      "guardian": 7810,
      "crusader": 11865,
      "archon": 14995,
      "legend": 14944,
      "ancient": 10900,
      "divine": 9456
    },
    "counters": [
      "primal-beast",
      "clockwerk",
      "slark",
      "silencer",
      "rubick",
      "lich"
    ],
    "weakAgainst": [
      "terrorblade",
      "dawnbreaker",
      "abaddon",
      "void-spirit",
      "batrider",
      "phoenix"
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
      "Kaya",
      "Blink Dagger",
      "Ogre Axe",
      "Veil of Discord"
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
      "herald": 0.527,
      "guardian": 0.523,
      "crusader": 0.529,
      "archon": 0.533,
      "legend": 0.529,
      "ancient": 0.523,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 10891,
      "guardian": 35868,
      "crusader": 61528,
      "archon": 86393,
      "legend": 93478,
      "ancient": 65102,
      "divine": 45631
    },
    "counters": [],
    "weakAgainst": [],
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
      "herald": 0.51,
      "guardian": 0.521,
      "crusader": 0.528,
      "archon": 0.532,
      "legend": 0.536,
      "ancient": 0.535,
      "divine": 0.53
    },
    "pickByBracket": {
      "herald": 14237,
      "guardian": 55076,
      "crusader": 107088,
      "archon": 158740,
      "legend": 171395,
      "ancient": 118263,
      "divine": 87909
    },
    "counters": [
      "witch-doctor",
      "phantom-assassin",
      "night-stalker",
      "vengeful-spirit",
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.486,
      "crusader": 0.494,
      "archon": 0.499,
      "legend": 0.501,
      "ancient": 0.504,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 24941,
      "guardian": 79936,
      "crusader": 135452,
      "archon": 190059,
      "legend": 197359,
      "ancient": 134100,
      "divine": 99490
    },
    "counters": [
      "viper",
      "grimstroke",
      "storm-spirit",
      "underlord",
      "warlock",
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
      "Kaya",
      "Point Booster"
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
      "herald": 0.496,
      "guardian": 0.492,
      "crusader": 0.489,
      "archon": 0.489,
      "legend": 0.488,
      "ancient": 0.49,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 26784,
      "guardian": 94554,
      "crusader": 164261,
      "archon": 226454,
      "legend": 227731,
      "ancient": 146667,
      "divine": 94464
    },
    "counters": [
      "sven",
      "grimstroke",
      "troll-warlord",
      "razor",
      "dazzle",
      "tinker"
    ],
    "weakAgainst": [
      "treant-protector",
      "abaddon",
      "earth-spirit",
      "bane",
      "wraith-king",
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.485,
      "crusader": 0.476,
      "archon": 0.472,
      "legend": 0.473,
      "ancient": 0.472,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 4247,
      "guardian": 16015,
      "crusader": 27532,
      "archon": 35891,
      "legend": 35090,
      "ancient": 23420,
      "divine": 18621
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.512,
      "crusader": 0.508,
      "archon": 0.504,
      "legend": 0.502,
      "ancient": 0.5,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 12115,
      "guardian": 38164,
      "crusader": 60466,
      "archon": 79940,
      "legend": 84499,
      "ancient": 61071,
      "divine": 53280
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
      "legion-commander",
      "clockwerk",
      "keeper-of-the-light",
      "monkey-king",
      "bane",
      "gyrocopter"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Magic Wand"
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.452,
      "crusader": 0.458,
      "archon": 0.469,
      "legend": 0.479,
      "ancient": 0.499,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 1658,
      "guardian": 4752,
      "crusader": 7568,
      "archon": 9330,
      "legend": 9271,
      "ancient": 6643,
      "divine": 6762
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.479,
      "crusader": 0.477,
      "archon": 0.49,
      "legend": 0.496,
      "ancient": 0.495,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 6393,
      "guardian": 26897,
      "crusader": 58527,
      "archon": 95630,
      "legend": 111525,
      "ancient": 81313,
      "divine": 54101
    },
    "counters": [
      "pudge",
      "phoenix",
      "puck",
      "skywrath-mage",
      "storm-spirit",
      "silencer"
    ],
    "weakAgainst": [
      "juggernaut",
      "ember-spirit",
      "rubick",
      "invoker",
      "beastmaster",
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
      "herald": 0.476,
      "guardian": 0.484,
      "crusader": 0.495,
      "archon": 0.495,
      "legend": 0.508,
      "ancient": 0.503,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 5777,
      "guardian": 16011,
      "crusader": 23935,
      "archon": 29328,
      "legend": 29164,
      "ancient": 20614,
      "divine": 16540
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
      "herald": 0.466,
      "guardian": 0.469,
      "crusader": 0.464,
      "archon": 0.475,
      "legend": 0.474,
      "ancient": 0.469,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 3217,
      "guardian": 10936,
      "crusader": 20517,
      "archon": 32908,
      "legend": 39179,
      "ancient": 30469,
      "divine": 23632
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.502,
      "crusader": 0.502,
      "archon": 0.501,
      "legend": 0.496,
      "ancient": 0.498,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 4220,
      "guardian": 13641,
      "crusader": 21427,
      "archon": 26692,
      "legend": 25199,
      "ancient": 15022,
      "divine": 7880
    },
    "counters": [
      "templar-assassin",
      "underlord",
      "sand-king",
      "warlock",
      "beastmaster",
      "slardar"
    ],
    "weakAgainst": [
      "shadow-demon",
      "shadow-shaman",
      "ogre-magi",
      "centaur-warrunner",
      "morphling",
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.501,
      "crusader": 0.509,
      "archon": 0.523,
      "legend": 0.516,
      "ancient": 0.53,
      "divine": 0.539
    },
    "pickByBracket": {
      "herald": 3004,
      "guardian": 8143,
      "crusader": 11204,
      "archon": 12489,
      "legend": 10911,
      "ancient": 6956,
      "divine": 5307
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
      "herald": 0.523,
      "guardian": 0.521,
      "crusader": 0.522,
      "archon": 0.522,
      "legend": 0.522,
      "ancient": 0.514,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 9908,
      "guardian": 39886,
      "crusader": 77556,
      "archon": 119405,
      "legend": 135596,
      "ancient": 100925,
      "divine": 84601
    },
    "counters": [
      "storm-spirit",
      "slardar",
      "underlord",
      "nature-s-prophet",
      "undying",
      "lifestealer"
    ],
    "weakAgainst": [
      "luna",
      "centaur-warrunner",
      "ember-spirit",
      "tusk",
      "tidehunter"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Smoke of Deceit"
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
    "overallWin": 0.453,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.444,
      "crusader": 0.449,
      "archon": 0.45,
      "legend": 0.453,
      "ancient": 0.464,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 7118,
      "guardian": 20041,
      "crusader": 29625,
      "archon": 36723,
      "legend": 35888,
      "ancient": 24306,
      "divine": 17465
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.472,
      "crusader": 0.465,
      "archon": 0.474,
      "legend": 0.475,
      "ancient": 0.484,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 4106,
      "guardian": 12427,
      "crusader": 20650,
      "archon": 27489,
      "legend": 27144,
      "ancient": 19442,
      "divine": 15716
    },
    "counters": [
      "weaver",
      "terrorblade",
      "lifestealer",
      "medusa",
      "puck",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "luna",
      "sniper",
      "axe",
      "pudge",
      "timbersaw",
      "treant-protector"
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
      "herald": 0.488,
      "guardian": 0.485,
      "crusader": 0.473,
      "archon": 0.481,
      "legend": 0.474,
      "ancient": 0.47,
      "divine": 0.471
    },
    "pickByBracket": {
      "herald": 5365,
      "guardian": 13528,
      "crusader": 19634,
      "archon": 24744,
      "legend": 23762,
      "ancient": 16324,
      "divine": 11975
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.489,
      "crusader": 0.482,
      "archon": 0.482,
      "legend": 0.477,
      "ancient": 0.493,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 4171,
      "guardian": 10421,
      "crusader": 13280,
      "archon": 12683,
      "legend": 9097,
      "ancient": 5180,
      "divine": 3490
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
      "shadow-fiend",
      "dragon-knight"
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
      "herald": 0.455,
      "guardian": 0.438,
      "crusader": 0.424,
      "archon": 0.418,
      "legend": 0.421,
      "ancient": 0.424,
      "divine": 0.433
    },
    "pickByBracket": {
      "herald": 14680,
      "guardian": 48678,
      "crusader": 78370,
      "archon": 99495,
      "legend": 94622,
      "ancient": 61133,
      "divine": 45421
    },
    "counters": [
      "troll-warlord",
      "pangolier",
      "dark-willow",
      "sniper",
      "witch-doctor",
      "puck"
    ],
    "weakAgainst": [
      "mirana",
      "timbersaw",
      "juggernaut",
      "primal-beast",
      "zeus",
      "kez"
    ],
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
      "Hyperstone",
      "Maelstrom",
      "Dragon Lance"
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.543,
      "guardian": 0.527,
      "crusader": 0.52,
      "archon": 0.516,
      "legend": 0.512,
      "ancient": 0.506,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 18200,
      "guardian": 64629,
      "crusader": 107633,
      "archon": 145485,
      "legend": 145944,
      "ancient": 96196,
      "divine": 66577
    },
    "counters": [
      "underlord",
      "void-spirit",
      "witch-doctor",
      "bristleback",
      "earth-spirit",
      "dark-willow"
    ],
    "weakAgainst": [
      "beastmaster",
      "windranger",
      "crystal-maiden",
      "abaddon",
      "lifestealer",
      "muerta"
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
      "herald": 0.487,
      "guardian": 0.484,
      "crusader": 0.502,
      "archon": 0.514,
      "legend": 0.525,
      "ancient": 0.529,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 5231,
      "guardian": 19790,
      "crusader": 38638,
      "archon": 59165,
      "legend": 69959,
      "ancient": 52548,
      "divine": 42799
    },
    "counters": [
      "silencer",
      "storm-spirit",
      "ursa",
      "dark-willow",
      "zeus",
      "troll-warlord"
    ],
    "weakAgainst": [
      "lifestealer",
      "shadow-fiend",
      "pugna",
      "invoker",
      "rubick",
      "slardar"
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.519,
      "crusader": 0.522,
      "archon": 0.522,
      "legend": 0.525,
      "ancient": 0.521,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 5598,
      "guardian": 20078,
      "crusader": 36067,
      "archon": 50667,
      "legend": 53795,
      "ancient": 37677,
      "divine": 27320
    },
    "counters": [
      "void-spirit",
      "bristleback",
      "dark-willow",
      "timbersaw",
      "puck",
      "mars"
    ],
    "weakAgainst": [
      "terrorblade",
      "largo",
      "doom",
      "axe",
      "pangolier"
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
      "herald": 0.522,
      "guardian": 0.52,
      "crusader": 0.513,
      "archon": 0.508,
      "legend": 0.502,
      "ancient": 0.5,
      "divine": 0.481
    },
    "pickByBracket": {
      "herald": 21167,
      "guardian": 76068,
      "crusader": 124894,
      "archon": 157448,
      "legend": 141554,
      "ancient": 81408,
      "divine": 43621
    },
    "counters": [
      "winter-wyvern",
      "medusa",
      "bristleback",
      "zeus",
      "troll-warlord",
      "faceless-void"
    ],
    "weakAgainst": [
      "phoenix",
      "pugna",
      "treant-protector",
      "bounty-hunter",
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.487,
      "crusader": 0.494,
      "archon": 0.501,
      "legend": 0.514,
      "ancient": 0.514,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 3240,
      "guardian": 9906,
      "crusader": 14942,
      "archon": 19093,
      "legend": 17864,
      "ancient": 11900,
      "divine": 8748
    },
    "counters": [
      "shadow-fiend",
      "ogre-magi"
    ],
    "weakAgainst": [
      "ember-spirit",
      "pudge"
    ],
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.473,
      "crusader": 0.49,
      "archon": 0.504,
      "legend": 0.51,
      "ancient": 0.519,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 2906,
      "guardian": 10610,
      "crusader": 19166,
      "archon": 28464,
      "legend": 31354,
      "ancient": 23017,
      "divine": 19685
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.532,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.503,
      "crusader": 0.521,
      "archon": 0.533,
      "legend": 0.539,
      "ancient": 0.545,
      "divine": 0.538
    },
    "pickByBracket": {
      "herald": 6232,
      "guardian": 20648,
      "crusader": 37866,
      "archon": 61203,
      "legend": 68154,
      "ancient": 49431,
      "divine": 37137
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
    "overallWin": 0.462,
    "winByBracket": {
      "herald": 0.434,
      "guardian": 0.445,
      "crusader": 0.455,
      "archon": 0.461,
      "legend": 0.466,
      "ancient": 0.464,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 3115,
      "guardian": 10440,
      "crusader": 20061,
      "archon": 31217,
      "legend": 37672,
      "ancient": 30817,
      "divine": 29855
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.518,
      "crusader": 0.516,
      "archon": 0.512,
      "legend": 0.508,
      "ancient": 0.502,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 25026,
      "guardian": 75454,
      "crusader": 107519,
      "archon": 120338,
      "legend": 96755,
      "ancient": 51437,
      "divine": 24662
    },
    "counters": [
      "dragon-knight",
      "ogre-magi",
      "mars"
    ],
    "weakAgainst": [
      "rubick",
      "lifestealer",
      "pudge",
      "disruptor",
      "luna",
      "windranger"
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
    "overallWin": 0.531,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.525,
      "crusader": 0.526,
      "archon": 0.534,
      "legend": 0.53,
      "ancient": 0.538,
      "divine": 0.535
    },
    "pickByBracket": {
      "herald": 15671,
      "guardian": 50545,
      "crusader": 79469,
      "archon": 100799,
      "legend": 94688,
      "ancient": 60798,
      "divine": 47585
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
      "snapfire",
      "pudge"
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
      "herald": 0.497,
      "guardian": 0.517,
      "crusader": 0.513,
      "archon": 0.516,
      "legend": 0.514,
      "ancient": 0.513,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 3543,
      "guardian": 13902,
      "crusader": 27520,
      "archon": 41740,
      "legend": 46306,
      "ancient": 34237,
      "divine": 29471
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.485,
      "crusader": 0.481,
      "archon": 0.487,
      "legend": 0.496,
      "ancient": 0.499,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 3257,
      "guardian": 10255,
      "crusader": 16695,
      "archon": 20978,
      "legend": 20066,
      "ancient": 14129,
      "divine": 12998
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
    "overallWin": 0.466,
    "winByBracket": {
      "herald": 0.428,
      "guardian": 0.441,
      "crusader": 0.448,
      "archon": 0.465,
      "legend": 0.469,
      "ancient": 0.472,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 3175,
      "guardian": 9705,
      "crusader": 16990,
      "archon": 24761,
      "legend": 27928,
      "ancient": 20528,
      "divine": 19775
    },
    "counters": [
      "weaver",
      "silencer",
      "razor",
      "dark-willow",
      "invoker",
      "brewmaster"
    ],
    "weakAgainst": [
      "naga-siren",
      "nyx-assassin",
      "bane",
      "morphling",
      "magnus",
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
      "herald": 0.522,
      "guardian": 0.524,
      "crusader": 0.524,
      "archon": 0.514,
      "legend": 0.51,
      "ancient": 0.508,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 27616,
      "guardian": 104831,
      "crusader": 190505,
      "archon": 257036,
      "legend": 245608,
      "ancient": 160277,
      "divine": 121809
    },
    "counters": [
      "morphling",
      "death-prophet",
      "clinkz",
      "wraith-king",
      "lina",
      "warlock"
    ],
    "weakAgainst": [
      "largo",
      "drow-ranger",
      "magnus",
      "earth-spirit",
      "naga-siren",
      "monkey-king"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.478,
      "crusader": 0.496,
      "archon": 0.503,
      "legend": 0.509,
      "ancient": 0.516,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 5853,
      "guardian": 17199,
      "crusader": 26827,
      "archon": 34484,
      "legend": 33073,
      "ancient": 21460,
      "divine": 13751
    },
    "counters": [
      "ogre-magi",
      "dark-willow",
      "storm-spirit",
      "pangolier",
      "muerta",
      "gyrocopter"
    ],
    "weakAgainst": [
      "terrorblade",
      "earthshaker",
      "ancient-apparition",
      "clockwerk",
      "shadow-fiend",
      "primal-beast"
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
      "herald": 0.471,
      "guardian": 0.475,
      "crusader": 0.471,
      "archon": 0.471,
      "legend": 0.471,
      "ancient": 0.467,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 9181,
      "guardian": 31831,
      "crusader": 56837,
      "archon": 82297,
      "legend": 86741,
      "ancient": 56894,
      "divine": 38006
    },
    "counters": [
      "phantom-lancer",
      "tinker",
      "timbersaw",
      "medusa",
      "chaos-knight",
      "drow-ranger"
    ],
    "weakAgainst": [
      "largo",
      "keeper-of-the-light",
      "chen",
      "treant-protector",
      "bounty-hunter",
      "dark-seer"
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
      "herald": 0.508,
      "guardian": 0.501,
      "crusader": 0.509,
      "archon": 0.501,
      "legend": 0.502,
      "ancient": 0.502,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 9924,
      "guardian": 27658,
      "crusader": 40440,
      "archon": 51558,
      "legend": 51216,
      "ancient": 33980,
      "divine": 21530
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
      "herald": 0.508,
      "guardian": 0.519,
      "crusader": 0.52,
      "archon": 0.528,
      "legend": 0.523,
      "ancient": 0.525,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 8994,
      "guardian": 24919,
      "crusader": 37213,
      "archon": 43273,
      "legend": 37383,
      "ancient": 23083,
      "divine": 13888
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.472,
      "crusader": 0.478,
      "archon": 0.481,
      "legend": 0.486,
      "ancient": 0.488,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 3892,
      "guardian": 14236,
      "crusader": 27520,
      "archon": 41344,
      "legend": 47586,
      "ancient": 36722,
      "divine": 33401
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.483,
      "crusader": 0.489,
      "archon": 0.495,
      "legend": 0.497,
      "ancient": 0.502,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 12959,
      "guardian": 53060,
      "crusader": 105645,
      "archon": 171848,
      "legend": 202733,
      "ancient": 151633,
      "divine": 115273
    },
    "counters": [
      "phantom-assassin",
      "weaver",
      "phantom-lancer",
      "undying",
      "brewmaster",
      "magnus"
    ],
    "weakAgainst": [
      "earth-spirit",
      "lone-druid",
      "leshrac",
      "lycan",
      "abaddon",
      "broodmother"
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
      "Essence Distiller",
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.501,
      "crusader": 0.504,
      "archon": 0.49,
      "legend": 0.487,
      "ancient": 0.476,
      "divine": 0.474
    },
    "pickByBracket": {
      "herald": 6954,
      "guardian": 20874,
      "crusader": 32054,
      "archon": 39129,
      "legend": 36018,
      "ancient": 22059,
      "divine": 13392
    },
    "counters": [
      "templar-assassin",
      "ursa",
      "lion",
      "void-spirit",
      "beastmaster",
      "underlord"
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
    "overallWin": 0.454,
    "winByBracket": {
      "herald": 0.42,
      "guardian": 0.446,
      "crusader": 0.437,
      "archon": 0.448,
      "legend": 0.465,
      "ancient": 0.461,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 2491,
      "guardian": 7553,
      "crusader": 13114,
      "archon": 18163,
      "legend": 20144,
      "ancient": 14875,
      "divine": 12397
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.489,
      "crusader": 0.487,
      "archon": 0.485,
      "legend": 0.482,
      "ancient": 0.484,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 24484,
      "guardian": 82963,
      "crusader": 144595,
      "archon": 201339,
      "legend": 207930,
      "ancient": 143595,
      "divine": 111749
    },
    "counters": [
      "night-stalker",
      "pugna",
      "medusa",
      "undying",
      "tinker",
      "oracle"
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
      "guardian": 0.518,
      "crusader": 0.521,
      "archon": 0.522,
      "legend": 0.522,
      "ancient": 0.52,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 20653,
      "guardian": 68027,
      "crusader": 107694,
      "archon": 135365,
      "legend": 127122,
      "ancient": 76661,
      "divine": 44289
    },
    "counters": [
      "medusa",
      "kunkka",
      "chaos-knight",
      "grimstroke",
      "morphling",
      "troll-warlord"
    ],
    "weakAgainst": [
      "undying",
      "beastmaster",
      "death-prophet",
      "hoodwink",
      "void-spirit",
      "dawnbreaker"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.517,
      "crusader": 0.512,
      "archon": 0.504,
      "legend": 0.502,
      "ancient": 0.493,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 10924,
      "guardian": 41218,
      "crusader": 72004,
      "archon": 95484,
      "legend": 90233,
      "ancient": 54706,
      "divine": 32139
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.505,
      "crusader": 0.505,
      "archon": 0.498,
      "legend": 0.504,
      "ancient": 0.497,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 15897,
      "guardian": 51856,
      "crusader": 81707,
      "archon": 102985,
      "legend": 97380,
      "ancient": 61012,
      "divine": 40055
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.521,
      "guardian": 0.515,
      "crusader": 0.508,
      "archon": 0.51,
      "legend": 0.501,
      "ancient": 0.497,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 10270,
      "guardian": 35727,
      "crusader": 59831,
      "archon": 78741,
      "legend": 78561,
      "ancient": 51657,
      "divine": 36929
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.517,
      "crusader": 0.501,
      "archon": 0.495,
      "legend": 0.496,
      "ancient": 0.498,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 10232,
      "guardian": 36076,
      "crusader": 63452,
      "archon": 89040,
      "legend": 93381,
      "ancient": 63421,
      "divine": 43846
    },
    "counters": [
      "warlock",
      "beastmaster",
      "puck",
      "tidehunter",
      "pudge",
      "shadow-shaman"
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
      "Diffusal Blade",
      "Blade of Alacrity",
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.482,
      "crusader": 0.494,
      "archon": 0.495,
      "legend": 0.494,
      "ancient": 0.491,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 8598,
      "guardian": 31409,
      "crusader": 61201,
      "archon": 96657,
      "legend": 112818,
      "ancient": 84382,
      "divine": 65186
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.514,
      "crusader": 0.507,
      "archon": 0.502,
      "legend": 0.498,
      "ancient": 0.491,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 29657,
      "guardian": 95455,
      "crusader": 152307,
      "archon": 190178,
      "legend": 168063,
      "ancient": 91451,
      "divine": 43956
    },
    "counters": [
      "witch-doctor",
      "morphling",
      "sven",
      "lich",
      "grimstroke",
      "juggernaut"
    ],
    "weakAgainst": [
      "ember-spirit",
      "nature-s-prophet",
      "earthshaker",
      "axe",
      "crystal-maiden",
      "luna"
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
    "overallWin": 0.543,
    "winByBracket": {
      "herald": 0.557,
      "guardian": 0.551,
      "crusader": 0.544,
      "archon": 0.54,
      "legend": 0.543,
      "ancient": 0.539,
      "divine": 0.539
    },
    "pickByBracket": {
      "herald": 12662,
      "guardian": 47088,
      "crusader": 81357,
      "archon": 107481,
      "legend": 104345,
      "ancient": 66196,
      "divine": 44109
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.518,
      "crusader": 0.517,
      "archon": 0.52,
      "legend": 0.522,
      "ancient": 0.525,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 18806,
      "guardian": 61360,
      "crusader": 98962,
      "archon": 130998,
      "legend": 130079,
      "ancient": 85018,
      "divine": 59183
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
    "overallWin": 0.461,
    "winByBracket": {
      "herald": 0.46,
      "guardian": 0.463,
      "crusader": 0.466,
      "archon": 0.457,
      "legend": 0.456,
      "ancient": 0.466,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 7760,
      "guardian": 25044,
      "crusader": 42779,
      "archon": 59148,
      "legend": 62523,
      "ancient": 45272,
      "divine": 35448
    },
    "counters": [
      "templar-assassin",
      "sven",
      "death-prophet",
      "queen-of-pain",
      "void-spirit",
      "sand-king"
    ],
    "weakAgainst": [
      "mirana",
      "huskar",
      "chen",
      "treant-protector",
      "pugna",
      "night-stalker"
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.502,
      "crusader": 0.507,
      "archon": 0.508,
      "legend": 0.508,
      "ancient": 0.509,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 11000,
      "guardian": 34586,
      "crusader": 55473,
      "archon": 71156,
      "legend": 70068,
      "ancient": 47302,
      "divine": 36455
    },
    "counters": [
      "undying",
      "skywrath-mage",
      "axe",
      "dark-willow",
      "monkey-king",
      "zeus"
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
      "Quelling Blade",
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.511,
      "crusader": 0.507,
      "archon": 0.507,
      "legend": 0.503,
      "ancient": 0.503,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 13803,
      "guardian": 45425,
      "crusader": 73626,
      "archon": 93017,
      "legend": 87163,
      "ancient": 55560,
      "divine": 38528
    },
    "counters": [
      "viper",
      "disruptor",
      "crystal-maiden",
      "undying",
      "grimstroke",
      "dragon-knight"
    ],
    "weakAgainst": [
      "phoenix",
      "muerta",
      "keeper-of-the-light",
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
      "Pavise",
      "Eul's Scepter of Divinity"
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
    "overallWin": 0.456,
    "winByBracket": {
      "herald": 0.455,
      "guardian": 0.457,
      "crusader": 0.453,
      "archon": 0.457,
      "legend": 0.456,
      "ancient": 0.46,
      "divine": 0.45
    },
    "pickByBracket": {
      "herald": 7721,
      "guardian": 23620,
      "crusader": 37624,
      "archon": 48033,
      "legend": 46428,
      "ancient": 30445,
      "divine": 21454
    },
    "counters": [
      "kunkka",
      "dawnbreaker",
      "troll-warlord",
      "clinkz",
      "crystal-maiden",
      "weaver"
    ],
    "weakAgainst": [
      "bane",
      "treant-protector",
      "bristleback",
      "sand-king",
      "monkey-king",
      "grimstroke"
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
      "herald": 0.483,
      "guardian": 0.469,
      "crusader": 0.464,
      "archon": 0.462,
      "legend": 0.468,
      "ancient": 0.466,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 7823,
      "guardian": 23243,
      "crusader": 36857,
      "archon": 45798,
      "legend": 44165,
      "ancient": 30475,
      "divine": 29558
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.5,
      "crusader": 0.506,
      "archon": 0.505,
      "legend": 0.499,
      "ancient": 0.494,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 7750,
      "guardian": 26944,
      "crusader": 47735,
      "archon": 67468,
      "legend": 66753,
      "ancient": 43513,
      "divine": 30009
    },
    "counters": [
      "faceless-void",
      "undying",
      "necrophos",
      "sniper",
      "spirit-breaker",
      "templar-assassin"
    ],
    "weakAgainst": [
      "clockwerk",
      "treant-protector",
      "huskar",
      "ember-spirit",
      "keeper-of-the-light",
      "razor"
    ],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.449,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.452,
      "crusader": 0.451,
      "archon": 0.449,
      "legend": 0.448,
      "ancient": 0.447,
      "divine": 0.448
    },
    "pickByBracket": {
      "herald": 4998,
      "guardian": 17102,
      "crusader": 30232,
      "archon": 42294,
      "legend": 45551,
      "ancient": 32533,
      "divine": 28250
    },
    "counters": [
      "lina",
      "morphling",
      "anti-mage",
      "witch-doctor",
      "lifestealer",
      "nature-s-prophet"
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.445,
      "guardian": 0.449,
      "crusader": 0.451,
      "archon": 0.468,
      "legend": 0.478,
      "ancient": 0.486,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 5691,
      "guardian": 18260,
      "crusader": 30396,
      "archon": 39267,
      "legend": 38841,
      "ancient": 26169,
      "divine": 20723
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
      "tusk"
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
    "overallWin": 0.441,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.441,
      "crusader": 0.44,
      "archon": 0.441,
      "legend": 0.437,
      "ancient": 0.442,
      "divine": 0.447
    },
    "pickByBracket": {
      "herald": 6937,
      "guardian": 20440,
      "crusader": 31476,
      "archon": 40627,
      "legend": 41686,
      "ancient": 30453,
      "divine": 26375
    },
    "counters": [
      "weaver",
      "bristleback",
      "sven",
      "void-spirit",
      "dark-seer",
      "phantom-lancer"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.482,
      "crusader": 0.481,
      "archon": 0.491,
      "legend": 0.494,
      "ancient": 0.495,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 4546,
      "guardian": 16546,
      "crusader": 29827,
      "archon": 42265,
      "legend": 46672,
      "ancient": 35563,
      "divine": 41220
    },
    "counters": [
      "invoker",
      "gyrocopter",
      "skywrath-mage",
      "razor",
      "spirit-breaker",
      "underlord"
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
      "herald": 0.529,
      "guardian": 0.517,
      "crusader": 0.516,
      "archon": 0.518,
      "legend": 0.51,
      "ancient": 0.511,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 6745,
      "guardian": 16284,
      "crusader": 20422,
      "archon": 21511,
      "legend": 18026,
      "ancient": 10529,
      "divine": 6947
    },
    "counters": [
      "sven",
      "silencer",
      "medusa",
      "lifestealer",
      "pugna",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "abaddon",
      "nature-s-prophet",
      "invoker",
      "lion",
      "sniper",
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
      "herald": 0.467,
      "guardian": 0.461,
      "crusader": 0.465,
      "archon": 0.476,
      "legend": 0.481,
      "ancient": 0.489,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 3824,
      "guardian": 14339,
      "crusader": 27308,
      "archon": 43655,
      "legend": 53824,
      "ancient": 44533,
      "divine": 42133
    },
    "counters": [
      "vengeful-spirit",
      "death-prophet",
      "ancient-apparition",
      "void-spirit",
      "lifestealer",
      "magnus"
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
      "Phase Boots",
      "Staff of Wizardry",
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
      "herald": 0.525,
      "guardian": 0.522,
      "crusader": 0.522,
      "archon": 0.508,
      "legend": 0.499,
      "ancient": 0.492,
      "divine": 0.478
    },
    "pickByBracket": {
      "herald": 7623,
      "guardian": 32220,
      "crusader": 66990,
      "archon": 110389,
      "legend": 126077,
      "ancient": 90463,
      "divine": 69143
    },
    "counters": [
      "ancient-apparition",
      "abaddon",
      "templar-assassin",
      "kunkka",
      "batrider",
      "gyrocopter"
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.511,
      "crusader": 0.511,
      "archon": 0.508,
      "legend": 0.507,
      "ancient": 0.501,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 13729,
      "guardian": 52647,
      "crusader": 94184,
      "archon": 133913,
      "legend": 138720,
      "ancient": 94416,
      "divine": 73548
    },
    "counters": [
      "shadow-shaman",
      "lion",
      "invoker",
      "warlock",
      "void-spirit",
      "dragon-knight"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "alchemist",
      "marci",
      "mirana",
      "ember-spirit"
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.455,
      "guardian": 0.457,
      "crusader": 0.469,
      "archon": 0.474,
      "legend": 0.475,
      "ancient": 0.478,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 7919,
      "guardian": 22498,
      "crusader": 34881,
      "archon": 45803,
      "legend": 45190,
      "ancient": 29186,
      "divine": 18303
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
    "overallWin": 0.531,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.541,
      "crusader": 0.537,
      "archon": 0.537,
      "legend": 0.532,
      "ancient": 0.524,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 11193,
      "guardian": 40733,
      "crusader": 71525,
      "archon": 99958,
      "legend": 102544,
      "ancient": 65963,
      "divine": 39117
    },
    "counters": [
      "slardar",
      "lich",
      "underlord",
      "lina",
      "medusa",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "phoenix",
      "dawnbreaker",
      "tusk",
      "beastmaster",
      "lifestealer",
      "terrorblade"
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.479,
      "crusader": 0.481,
      "archon": 0.479,
      "legend": 0.473,
      "ancient": 0.468,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 10085,
      "guardian": 32774,
      "crusader": 52323,
      "archon": 65189,
      "legend": 58296,
      "ancient": 33570,
      "divine": 17875
    },
    "counters": [
      "dragon-knight",
      "dawnbreaker",
      "clockwerk",
      "weaver",
      "warlock",
      "tusk"
    ],
    "weakAgainst": [
      "ember-spirit",
      "invoker",
      "batrider",
      "pudge",
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.478,
      "crusader": 0.484,
      "archon": 0.483,
      "legend": 0.486,
      "ancient": 0.486,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 17540,
      "guardian": 43200,
      "crusader": 57123,
      "archon": 63593,
      "legend": 54049,
      "ancient": 30520,
      "divine": 19482
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
    "overallWin": 0.529,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.506,
      "crusader": 0.516,
      "archon": 0.53,
      "legend": 0.536,
      "ancient": 0.544,
      "divine": 0.545
    },
    "pickByBracket": {
      "herald": 1667,
      "guardian": 5285,
      "crusader": 8582,
      "archon": 10106,
      "legend": 9901,
      "ancient": 6668,
      "divine": 7212
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.459,
      "guardian": 0.479,
      "crusader": 0.487,
      "archon": 0.498,
      "legend": 0.503,
      "ancient": 0.503,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 4306,
      "guardian": 13443,
      "crusader": 22751,
      "archon": 32421,
      "legend": 36135,
      "ancient": 28592,
      "divine": 24504
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.5,
      "crusader": 0.5,
      "archon": 0.494,
      "legend": 0.488,
      "ancient": 0.477,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 7303,
      "guardian": 25914,
      "crusader": 42677,
      "archon": 53430,
      "legend": 48763,
      "ancient": 28166,
      "divine": 15576
    },
    "counters": [
      "sand-king",
      "grimstroke",
      "ancient-apparition",
      "troll-warlord",
      "sniper",
      "techies"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "slark",
      "treant-protector",
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.474,
      "crusader": 0.472,
      "archon": 0.473,
      "legend": 0.471,
      "ancient": 0.474,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 9871,
      "guardian": 26497,
      "crusader": 36546,
      "archon": 43610,
      "legend": 39327,
      "ancient": 23329,
      "divine": 16168
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Circlet",
      "Magic Wand",
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.49,
      "crusader": 0.485,
      "archon": 0.482,
      "legend": 0.485,
      "ancient": 0.486,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 18810,
      "guardian": 61445,
      "crusader": 102300,
      "archon": 140647,
      "legend": 147193,
      "ancient": 102982,
      "divine": 79389
    },
    "counters": [
      "grimstroke",
      "chaos-knight",
      "morphling",
      "oracle",
      "necrophos",
      "medusa"
    ],
    "weakAgainst": [
      "treant-protector",
      "enigma",
      "bane",
      "lone-druid",
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.486,
      "crusader": 0.496,
      "archon": 0.499,
      "legend": 0.504,
      "ancient": 0.51,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 6539,
      "guardian": 23654,
      "crusader": 40915,
      "archon": 56826,
      "legend": 61317,
      "ancient": 46461,
      "divine": 47190
    },
    "counters": [
      "underlord",
      "dark-willow",
      "void-spirit",
      "techies",
      "centaur-warrunner",
      "undying"
    ],
    "weakAgainst": [
      "ogre-magi",
      "snapfire",
      "doom",
      "axe",
      "beastmaster",
      "jakiro"
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
      "Arcane Boots",
      "Staff of Wizardry",
      "Power Treads",
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.53,
      "crusader": 0.527,
      "archon": 0.523,
      "legend": 0.518,
      "ancient": 0.513,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 18527,
      "guardian": 65985,
      "crusader": 111606,
      "archon": 145215,
      "legend": 132938,
      "ancient": 76513,
      "divine": 39705
    },
    "counters": [
      "lich",
      "vengeful-spirit",
      "tidehunter",
      "tiny",
      "undying",
      "ursa"
    ],
    "weakAgainst": [
      "ember-spirit",
      "sniper",
      "lifestealer",
      "necrophos",
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
    "overallWin": 0.546,
    "winByBracket": {
      "herald": 0.557,
      "guardian": 0.561,
      "crusader": 0.558,
      "archon": 0.55,
      "legend": 0.539,
      "ancient": 0.533,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 14102,
      "guardian": 49143,
      "crusader": 83868,
      "archon": 111233,
      "legend": 104271,
      "ancient": 60456,
      "divine": 29065
    },
    "counters": [
      "zeus",
      "abaddon",
      "lion",
      "templar-assassin",
      "silencer",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "earthshaker",
      "pudge",
      "snapfire",
      "invoker",
      "crystal-maiden",
      "disruptor"
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
      "herald": 0.497,
      "guardian": 0.501,
      "crusader": 0.503,
      "archon": 0.501,
      "legend": 0.498,
      "ancient": 0.495,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 16989,
      "guardian": 54374,
      "crusader": 89885,
      "archon": 119245,
      "legend": 117609,
      "ancient": 74635,
      "divine": 48741
    },
    "counters": [
      "slardar",
      "medusa",
      "vengeful-spirit",
      "faceless-void",
      "nature-s-prophet",
      "pangolier"
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
