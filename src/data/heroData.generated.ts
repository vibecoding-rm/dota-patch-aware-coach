// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-07-13
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
      "herald": 0.511,
      "guardian": 0.514,
      "crusader": 0.513,
      "archon": 0.516,
      "legend": 0.512,
      "ancient": 0.517,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 10135,
      "guardian": 26696,
      "crusader": 34886,
      "archon": 35835,
      "legend": 28504,
      "ancient": 17362,
      "divine": 13131
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.473,
      "crusader": 0.473,
      "archon": 0.474,
      "legend": 0.466,
      "ancient": 0.459,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 8200,
      "guardian": 24691,
      "crusader": 32259,
      "archon": 33425,
      "legend": 25943,
      "ancient": 15807,
      "divine": 12495
    },
    "counters": [
      "ring-master",
      "ursa",
      "lifestealer",
      "void-spirit",
      "sand-king",
      "gyrocopter"
    ],
    "weakAgainst": [
      "monkey-king",
      "storm-spirit",
      "luna",
      "warlock",
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
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Point Booster",
      "Aghanim's Scepter"
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.519,
      "crusader": 0.516,
      "archon": 0.512,
      "legend": 0.507,
      "ancient": 0.5,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 11642,
      "guardian": 33890,
      "crusader": 45332,
      "archon": 46706,
      "legend": 36392,
      "ancient": 21949,
      "divine": 17185
    },
    "counters": [
      "mars",
      "disruptor",
      "marci",
      "earthshaker",
      "hoodwink",
      "luna"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "clinkz",
      "underlord",
      "largo",
      "viper",
      "tusk"
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
      "Vitality Booster",
      "Aghanim's Shard",
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
      "herald": 0.5,
      "guardian": 0.502,
      "crusader": 0.501,
      "archon": 0.499,
      "legend": 0.495,
      "ancient": 0.496,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 24778,
      "guardian": 71782,
      "crusader": 90179,
      "archon": 83680,
      "legend": 59459,
      "ancient": 34272,
      "divine": 26059
    },
    "counters": [
      "sven",
      "silencer",
      "lich",
      "dragon-knight",
      "mars",
      "dark-willow"
    ],
    "weakAgainst": [
      "timbersaw",
      "ember-spirit",
      "abaddon",
      "jakiro",
      "ogre-magi",
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.499,
      "crusader": 0.504,
      "archon": 0.505,
      "legend": 0.513,
      "ancient": 0.518,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 7324,
      "guardian": 20596,
      "crusader": 25852,
      "archon": 23918,
      "legend": 16536,
      "ancient": 10099,
      "divine": 9131
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.533,
      "guardian": 0.537,
      "crusader": 0.528,
      "archon": 0.524,
      "legend": 0.521,
      "ancient": 0.515,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 31395,
      "guardian": 95401,
      "crusader": 129265,
      "archon": 134869,
      "legend": 106704,
      "ancient": 66751,
      "divine": 59300
    },
    "counters": [
      "morphling",
      "death-prophet",
      "techies",
      "faceless-void",
      "drow-ranger",
      "winter-wyvern"
    ],
    "weakAgainst": [
      "bane",
      "lycan",
      "naga-siren",
      "abaddon",
      "treant-protector",
      "huskar"
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
      "herald": 0.467,
      "guardian": 0.484,
      "crusader": 0.492,
      "archon": 0.502,
      "legend": 0.5,
      "ancient": 0.514,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 6908,
      "guardian": 19993,
      "crusader": 26215,
      "archon": 26753,
      "legend": 22314,
      "ancient": 14904,
      "divine": 16368
    },
    "counters": [
      "axe",
      "techies",
      "templar-assassin",
      "earthshaker",
      "tiny",
      "ember-spirit"
    ],
    "weakAgainst": [
      "monkey-king",
      "skywrath-mage",
      "beastmaster",
      "primal-beast",
      "mars",
      "ogre-magi"
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
      "Aether Lens",
      "Arcane Boots",
      "Point Booster",
      "Glimmer Cape",
      "Blink Dagger"
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
    "overallWin": 0.424,
    "winByBracket": {
      "herald": 0.419,
      "guardian": 0.419,
      "crusader": 0.424,
      "archon": 0.422,
      "legend": 0.419,
      "ancient": 0.427,
      "divine": 0.442
    },
    "pickByBracket": {
      "herald": 2915,
      "guardian": 8171,
      "crusader": 10898,
      "archon": 10628,
      "legend": 8496,
      "ancient": 5562,
      "divine": 5347
    },
    "counters": [
      "death-prophet",
      "crystal-maiden",
      "bristleback",
      "magnus",
      "grimstroke",
      "hoodwink"
    ],
    "weakAgainst": [
      "oracle",
      "naga-siren",
      "marci",
      "templar-assassin",
      "bane",
      "chen"
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
      "Blink Dagger",
      "Ogre Axe",
      "Drum of Endurance",
      "Ring of Tarrasque",
      "Boots of Bearing"
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
    "overallWin": 0.438,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.439,
      "crusader": 0.434,
      "archon": 0.434,
      "legend": 0.438,
      "ancient": 0.434,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 6530,
      "guardian": 18059,
      "crusader": 23278,
      "archon": 22194,
      "legend": 16923,
      "ancient": 10340,
      "divine": 10282
    },
    "counters": [
      "phantom-assassin",
      "chaos-knight",
      "vengeful-spirit",
      "zeus",
      "shadow-shaman",
      "clockwerk"
    ],
    "weakAgainst": [
      "slark",
      "pugna",
      "batrider",
      "dazzle",
      "grimstroke",
      "juggernaut"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Sage's Mask",
      "Magic Stick",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Ogre Axe",
      "Ultimate Orb",
      "Helm of the Overlord",
      "Blink Dagger",
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
      "herald": 0.509,
      "guardian": 0.52,
      "crusader": 0.517,
      "archon": 0.522,
      "legend": 0.515,
      "ancient": 0.519,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 15633,
      "guardian": 31342,
      "crusader": 30581,
      "archon": 24741,
      "legend": 16549,
      "ancient": 9377,
      "divine": 6179
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.499,
      "crusader": 0.503,
      "archon": 0.511,
      "legend": 0.52,
      "ancient": 0.529,
      "divine": 0.552
    },
    "pickByBracket": {
      "herald": 11519,
      "guardian": 28432,
      "crusader": 32584,
      "archon": 30603,
      "legend": 23969,
      "ancient": 16182,
      "divine": 17524
    },
    "counters": [
      "dragon-knight",
      "timbersaw",
      "snapfire",
      "ursa",
      "puck",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "ember-spirit",
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
      "Ring of Tarrasque",
      "Staff of Wizardry",
      "Diadem",
      "Boots of Bearing"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.496,
      "crusader": 0.498,
      "archon": 0.498,
      "legend": 0.503,
      "ancient": 0.514,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 2629,
      "guardian": 7260,
      "crusader": 9643,
      "archon": 9525,
      "legend": 8672,
      "ancient": 6246,
      "divine": 7143
    },
    "counters": [
      "centaur-warrunner",
      "dark-willow",
      "void-spirit",
      "skywrath-mage",
      "warlock",
      "timbersaw"
    ],
    "weakAgainst": [
      "bristleback",
      "beastmaster",
      "largo",
      "rubick",
      "puck",
      "phoenix"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Gauntlets of Strength",
      "Magic Stick",
      "Faerie Fire"
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.532,
      "guardian": 0.511,
      "crusader": 0.493,
      "archon": 0.479,
      "legend": 0.471,
      "ancient": 0.456,
      "divine": 0.449
    },
    "pickByBracket": {
      "herald": 26678,
      "guardian": 64345,
      "crusader": 67326,
      "archon": 56869,
      "legend": 38194,
      "ancient": 20583,
      "divine": 15378
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.494,
      "crusader": 0.493,
      "archon": 0.497,
      "legend": 0.5,
      "ancient": 0.506,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 7196,
      "guardian": 15294,
      "crusader": 15643,
      "archon": 12959,
      "legend": 8401,
      "ancient": 4640,
      "divine": 4527
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.518,
      "crusader": 0.511,
      "archon": 0.51,
      "legend": 0.506,
      "ancient": 0.502,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 8349,
      "guardian": 26929,
      "crusader": 39837,
      "archon": 45453,
      "legend": 38790,
      "ancient": 25590,
      "divine": 23902
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.517,
      "crusader": 0.509,
      "archon": 0.503,
      "legend": 0.496,
      "ancient": 0.502,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 13772,
      "guardian": 32993,
      "crusader": 35487,
      "archon": 29608,
      "legend": 20128,
      "ancient": 10915,
      "divine": 7568
    },
    "counters": [
      "lich",
      "earthshaker",
      "templar-assassin",
      "tiny",
      "axe"
    ],
    "weakAgainst": [
      "beastmaster",
      "jakiro",
      "mars",
      "invoker",
      "windranger",
      "queen-of-pain"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Magic Stick",
      "Gauntlets of Strength",
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
    "overallWin": 0.455,
    "winByBracket": {
      "herald": 0.428,
      "guardian": 0.434,
      "crusader": 0.448,
      "archon": 0.456,
      "legend": 0.448,
      "ancient": 0.478,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 1060,
      "guardian": 2629,
      "crusader": 3164,
      "archon": 2967,
      "legend": 2074,
      "ancient": 1460,
      "divine": 1629
    },
    "counters": [
      "dawnbreaker",
      "bristleback",
      "storm-spirit",
      "ring-master",
      "disruptor",
      "pugna"
    ],
    "weakAgainst": [
      "nature-s-prophet",
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.491,
      "crusader": 0.486,
      "archon": 0.494,
      "legend": 0.508,
      "ancient": 0.502,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 15551,
      "guardian": 31822,
      "crusader": 32967,
      "archon": 28847,
      "legend": 21673,
      "ancient": 13810,
      "divine": 12857
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.477,
      "crusader": 0.475,
      "archon": 0.483,
      "legend": 0.483,
      "ancient": 0.495,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 5049,
      "guardian": 15964,
      "crusader": 23284,
      "archon": 26756,
      "legend": 24692,
      "ancient": 18638,
      "divine": 20591
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.535,
      "guardian": 0.531,
      "crusader": 0.521,
      "archon": 0.512,
      "legend": 0.505,
      "ancient": 0.503,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 27538,
      "guardian": 73254,
      "crusader": 88111,
      "archon": 84849,
      "legend": 63350,
      "ancient": 38348,
      "divine": 30864
    },
    "counters": [
      "drow-ranger",
      "sniper",
      "pugna",
      "chaos-knight",
      "legion-commander",
      "luna"
    ],
    "weakAgainst": [
      "razor",
      "batrider",
      "mirana",
      "kunkka",
      "puck",
      "techies"
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.482,
      "crusader": 0.487,
      "archon": 0.485,
      "legend": 0.484,
      "ancient": 0.497,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 4897,
      "guardian": 13630,
      "crusader": 17859,
      "archon": 18313,
      "legend": 15977,
      "ancient": 11418,
      "divine": 12360
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.464,
      "crusader": 0.469,
      "archon": 0.477,
      "legend": 0.484,
      "ancient": 0.486,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 9908,
      "guardian": 25766,
      "crusader": 32951,
      "archon": 33720,
      "legend": 27717,
      "ancient": 18366,
      "divine": 18440
    },
    "counters": [
      "witch-doctor",
      "weaver",
      "storm-spirit",
      "luna",
      "faceless-void",
      "doom"
    ],
    "weakAgainst": [
      "treant-protector",
      "brewmaster",
      "ring-master",
      "phantom-lancer",
      "huskar",
      "pugna"
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
      "Eul's Scepter of Divinity",
      "Blink Dagger",
      "Essence Distiller",
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.52,
      "crusader": 0.517,
      "archon": 0.517,
      "legend": 0.518,
      "ancient": 0.519,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 9652,
      "guardian": 30560,
      "crusader": 47318,
      "archon": 57297,
      "legend": 51998,
      "ancient": 36567,
      "divine": 37696
    },
    "counters": [
      "death-prophet",
      "vengeful-spirit",
      "medusa",
      "lina",
      "phantom-lancer",
      "leshrac"
    ],
    "weakAgainst": [
      "chen",
      "treant-protector",
      "morphling",
      "kez",
      "venomancer",
      "alchemist"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Quelling Blade",
      "Magic Stick"
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.498,
      "crusader": 0.5,
      "archon": 0.505,
      "legend": 0.504,
      "ancient": 0.513,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 10157,
      "guardian": 29640,
      "crusader": 38691,
      "archon": 36169,
      "legend": 25816,
      "ancient": 14956,
      "divine": 11756
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.47,
      "crusader": 0.474,
      "archon": 0.475,
      "legend": 0.478,
      "ancient": 0.471,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 11470,
      "guardian": 23856,
      "crusader": 27342,
      "archon": 26226,
      "legend": 20646,
      "ancient": 13335,
      "divine": 12253
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.493,
      "crusader": 0.493,
      "archon": 0.493,
      "legend": 0.501,
      "ancient": 0.502,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 9000,
      "guardian": 30672,
      "crusader": 47524,
      "archon": 55294,
      "legend": 48183,
      "ancient": 32372,
      "divine": 29655
    },
    "counters": [
      "outworld-devourer",
      "phantom-assassin",
      "chaos-knight",
      "phantom-lancer",
      "muerta",
      "lina"
    ],
    "weakAgainst": [
      "broodmother",
      "kez",
      "chen",
      "io",
      "drow-ranger",
      "treant-protector"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Sentry Ward",
      "Magic Stick"
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
    "overallWin": 0.465,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.449,
      "crusader": 0.455,
      "archon": 0.462,
      "legend": 0.47,
      "ancient": 0.476,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 9758,
      "guardian": 27260,
      "crusader": 38134,
      "archon": 42315,
      "legend": 36992,
      "ancient": 25908,
      "divine": 27655
    },
    "counters": [
      "sven",
      "morphling",
      "lifestealer",
      "dazzle",
      "weaver",
      "razor"
    ],
    "weakAgainst": [
      "nature-s-prophet",
      "bane",
      "keeper-of-the-light",
      "magnus",
      "treant-protector",
      "shadow-demon"
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
      "Black King Bar",
      "Sacred Relic"
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.499,
      "crusader": 0.493,
      "archon": 0.492,
      "legend": 0.49,
      "ancient": 0.489,
      "divine": 0.474
    },
    "pickByBracket": {
      "herald": 10216,
      "guardian": 25491,
      "crusader": 29417,
      "archon": 27171,
      "legend": 18061,
      "ancient": 9851,
      "divine": 6532
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.509,
      "crusader": 0.511,
      "archon": 0.516,
      "legend": 0.519,
      "ancient": 0.518,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 32711,
      "guardian": 86398,
      "crusader": 110684,
      "archon": 113304,
      "legend": 91479,
      "ancient": 58238,
      "divine": 53663
    },
    "counters": [
      "underlord",
      "bristleback",
      "disruptor",
      "kez",
      "terrorblade",
      "spirit-breaker"
    ],
    "weakAgainst": [
      "crystal-maiden",
      "warlock",
      "treant-protector",
      "dragon-knight",
      "clockwerk",
      "shadow-demon"
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
      "Dragon Lance",
      "Yasha",
      "Force Staff"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.461,
      "guardian": 0.489,
      "crusader": 0.485,
      "archon": 0.495,
      "legend": 0.511,
      "ancient": 0.517,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 3798,
      "guardian": 13355,
      "crusader": 21412,
      "archon": 27274,
      "legend": 28061,
      "ancient": 22140,
      "divine": 26571
    },
    "counters": [
      "timbersaw",
      "rubick",
      "pudge",
      "lion",
      "queen-of-pain",
      "hoodwink"
    ],
    "weakAgainst": [
      "ring-master",
      "gyrocopter",
      "ember-spirit",
      "snapfire",
      "puck",
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.498,
      "crusader": 0.498,
      "archon": 0.501,
      "legend": 0.511,
      "ancient": 0.511,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 24338,
      "guardian": 67454,
      "crusader": 86747,
      "archon": 89172,
      "legend": 71630,
      "ancient": 45333,
      "divine": 38369
    },
    "counters": [
      "wraith-king",
      "primal-beast",
      "sven",
      "undying",
      "sniper",
      "axe"
    ],
    "weakAgainst": [
      "monkey-king",
      "huskar",
      "bane",
      "chaos-knight",
      "void-spirit",
      "necrophos"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Gauntlets of Strength",
      "Circlet",
      "Observer Ward",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Blink Dagger",
      "Staff of Wizardry",
      "Blade of Alacrity",
      "Aghanim's Shard",
      "Ogre Axe"
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.504,
      "crusader": 0.501,
      "archon": 0.512,
      "legend": 0.514,
      "ancient": 0.545,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 2115,
      "guardian": 5526,
      "crusader": 6628,
      "archon": 6519,
      "legend": 5261,
      "ancient": 3431,
      "divine": 3608
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.458,
      "crusader": 0.476,
      "archon": 0.493,
      "legend": 0.505,
      "ancient": 0.506,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 7289,
      "guardian": 21887,
      "crusader": 32958,
      "archon": 40359,
      "legend": 38581,
      "ancient": 28301,
      "divine": 30704
    },
    "counters": [
      "witch-doctor",
      "sniper",
      "venomancer",
      "void-spirit",
      "anti-mage",
      "dark-seer"
    ],
    "weakAgainst": [
      "bane",
      "io",
      "treant-protector",
      "puck",
      "lycan",
      "clinkz"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Quelling Blade",
      "Boots of Speed"
    ],
    "coreItems": [
      "Spirit Vessel",
      "Ogre Axe",
      "Perseverance",
      "Mage Slayer",
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.484,
      "crusader": 0.476,
      "archon": 0.478,
      "legend": 0.466,
      "ancient": 0.481,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 8851,
      "guardian": 18123,
      "crusader": 17238,
      "archon": 14172,
      "legend": 10095,
      "ancient": 6462,
      "divine": 6687
    },
    "counters": [
      "disruptor",
      "ursa",
      "earthshaker",
      "terrorblade",
      "queen-of-pain",
      "lifestealer"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "slardar",
      "juggernaut",
      "marci",
      "shadow-fiend",
      "doom"
    ],
    "startItems": [
      "Iron Branch",
      "Observer and Sentry Wards",
      "Tango",
      "Faerie Fire",
      "Blood Grenade",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Drum of Endurance",
      "Staff of Wizardry",
      "Power Treads",
      "Blade of Alacrity",
      "Force Staff"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.482,
      "crusader": 0.491,
      "archon": 0.502,
      "legend": 0.512,
      "ancient": 0.522,
      "divine": 0.546
    },
    "pickByBracket": {
      "herald": 8718,
      "guardian": 23436,
      "crusader": 27497,
      "archon": 25037,
      "legend": 17996,
      "ancient": 10647,
      "divine": 9827
    },
    "counters": [
      "ursa",
      "shadow-fiend",
      "windranger",
      "tiny",
      "jakiro",
      "disruptor"
    ],
    "weakAgainst": [
      "pudge",
      "hoodwink",
      "queen-of-pain",
      "gyrocopter",
      "centaur-warrunner"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Faerie Fire",
      "Circlet",
      "Magic Wand"
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.488,
      "crusader": 0.492,
      "archon": 0.492,
      "legend": 0.496,
      "ancient": 0.498,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 18512,
      "guardian": 55538,
      "crusader": 71069,
      "archon": 72203,
      "legend": 56032,
      "ancient": 35575,
      "divine": 31660
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.51,
      "crusader": 0.514,
      "archon": 0.517,
      "legend": 0.518,
      "ancient": 0.52,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 8585,
      "guardian": 27617,
      "crusader": 39909,
      "archon": 44566,
      "legend": 37550,
      "ancient": 24912,
      "divine": 23353
    },
    "counters": [
      "templar-assassin",
      "muerta",
      "leshrac",
      "ring-master",
      "skywrath-mage",
      "tidehunter"
    ],
    "weakAgainst": [
      "techies",
      "sniper",
      "batrider",
      "snapfire",
      "shadow-shaman",
      "slardar"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Faerie Fire",
      "Magic Stick"
    ],
    "coreItems": [
      "Arcane Boots",
      "Blink Dagger",
      "Staff of Wizardry",
      "Glimmer Cape",
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
    "overallWin": 0.424,
    "winByBracket": {
      "herald": 0.434,
      "guardian": 0.421,
      "crusader": 0.427,
      "archon": 0.42,
      "legend": 0.425,
      "ancient": 0.429,
      "divine": 0.419
    },
    "pickByBracket": {
      "herald": 5759,
      "guardian": 15829,
      "crusader": 21646,
      "archon": 23110,
      "legend": 18681,
      "ancient": 11047,
      "divine": 8392
    },
    "counters": [
      "templar-assassin",
      "techies",
      "lion",
      "earth-spirit",
      "axe",
      "sven"
    ],
    "weakAgainst": [
      "treant-protector",
      "nyx-assassin",
      "razor",
      "bane",
      "keeper-of-the-light",
      "alchemist"
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.476,
      "crusader": 0.478,
      "archon": 0.478,
      "legend": 0.482,
      "ancient": 0.487,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 17462,
      "guardian": 47505,
      "crusader": 62331,
      "archon": 64338,
      "legend": 52034,
      "ancient": 34370,
      "divine": 33692
    },
    "counters": [
      "phantom-lancer",
      "underlord",
      "death-prophet",
      "huskar",
      "silencer",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "naga-siren",
      "keeper-of-the-light",
      "bane",
      "lycan",
      "treant-protector",
      "kunkka"
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
      "Arcane Boots",
      "Staff of Wizardry",
      "Essence Distiller",
      "Aghanim's Shard",
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
      "herald": 0.453,
      "guardian": 0.448,
      "crusader": 0.441,
      "archon": 0.447,
      "legend": 0.454,
      "ancient": 0.462,
      "divine": 0.457
    },
    "pickByBracket": {
      "herald": 13712,
      "guardian": 26451,
      "crusader": 26880,
      "archon": 24048,
      "legend": 17904,
      "ancient": 10883,
      "divine": 10005
    },
    "counters": [
      "silencer",
      "earthshaker",
      "storm-spirit",
      "tidehunter",
      "razor",
      "dark-willow"
    ],
    "weakAgainst": [
      "nature-s-prophet",
      "hoodwink",
      "beastmaster",
      "marci",
      "shadow-shaman",
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
      "Blink Dagger",
      "Mithril Hammer",
      "Sange"
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.499,
      "crusader": 0.502,
      "archon": 0.508,
      "legend": 0.509,
      "ancient": 0.519,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 21961,
      "guardian": 71503,
      "crusader": 105744,
      "archon": 117515,
      "legend": 99765,
      "ancient": 65993,
      "divine": 64078
    },
    "counters": [
      "lina",
      "weaver",
      "troll-warlord",
      "chaos-knight",
      "magnus",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "treant-protector",
      "nyx-assassin",
      "tinker",
      "oracle",
      "naga-siren",
      "monkey-king"
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
      "Staff of Wizardry",
      "Ogre Axe",
      "Aghanim's Shard",
      "Point Booster"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.497,
      "crusader": 0.489,
      "archon": 0.499,
      "legend": 0.495,
      "ancient": 0.501,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 7954,
      "guardian": 21620,
      "crusader": 27503,
      "archon": 26965,
      "legend": 20898,
      "ancient": 13598,
      "divine": 13947
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.485,
      "crusader": 0.483,
      "archon": 0.474,
      "legend": 0.462,
      "ancient": 0.457,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 20426,
      "guardian": 60549,
      "crusader": 80404,
      "archon": 82458,
      "legend": 63116,
      "ancient": 37239,
      "divine": 27590
    },
    "counters": [
      "chaos-knight",
      "broodmother",
      "weaver",
      "oracle",
      "sven",
      "anti-mage"
    ],
    "weakAgainst": [
      "treant-protector",
      "io",
      "lone-druid",
      "clinkz",
      "enigma",
      "venomancer"
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
      "herald": 0.518,
      "guardian": 0.511,
      "crusader": 0.517,
      "archon": 0.518,
      "legend": 0.526,
      "ancient": 0.522,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 28892,
      "guardian": 81573,
      "crusader": 105046,
      "archon": 107804,
      "legend": 83523,
      "ancient": 50461,
      "divine": 40273
    },
    "counters": [
      "zeus",
      "legion-commander",
      "pangolier",
      "magnus",
      "techies",
      "phoenix"
    ],
    "weakAgainst": [
      "venomancer",
      "abaddon",
      "sniper",
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.487,
      "crusader": 0.495,
      "archon": 0.507,
      "legend": 0.514,
      "ancient": 0.516,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 13181,
      "guardian": 34661,
      "crusader": 43428,
      "archon": 42984,
      "legend": 33851,
      "ancient": 21768,
      "divine": 23819
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
    "overallWin": 0.45,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.453,
      "crusader": 0.45,
      "archon": 0.448,
      "legend": 0.448,
      "ancient": 0.446,
      "divine": 0.449
    },
    "pickByBracket": {
      "herald": 7038,
      "guardian": 17685,
      "crusader": 22535,
      "archon": 24262,
      "legend": 21620,
      "ancient": 15670,
      "divine": 16457
    },
    "counters": [
      "disruptor",
      "lifestealer",
      "lich",
      "dawnbreaker",
      "tiny",
      "underlord"
    ],
    "weakAgainst": [
      "treant-protector",
      "drow-ranger",
      "largo",
      "windranger",
      "razor",
      "centaur-warrunner"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.483,
      "crusader": 0.486,
      "archon": 0.493,
      "legend": 0.498,
      "ancient": 0.496,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 9297,
      "guardian": 24992,
      "crusader": 31515,
      "archon": 33420,
      "legend": 27978,
      "ancient": 18030,
      "divine": 15548
    },
    "counters": [
      "bristleback",
      "weaver",
      "abaddon",
      "hoodwink",
      "pangolier",
      "tiny"
    ],
    "weakAgainst": [
      "shadow-shaman",
      "templar-assassin",
      "necrophos",
      "shadow-demon",
      "monkey-king",
      "phoenix"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.467,
      "crusader": 0.461,
      "archon": 0.469,
      "legend": 0.477,
      "ancient": 0.478,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 2645,
      "guardian": 7304,
      "crusader": 10743,
      "archon": 11852,
      "legend": 10935,
      "ancient": 7580,
      "divine": 8380
    },
    "counters": [
      "queen-of-pain",
      "pangolier",
      "primal-beast",
      "pudge",
      "timbersaw",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "sniper",
      "muerta",
      "beastmaster",
      "treant-protector",
      "shadow-demon",
      "batrider"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Magic Stick",
      "Faerie Fire",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Ogre Axe",
      "Staff of Wizardry",
      "Kaya",
      "Aghanim's Shard",
      "Sange"
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.528,
      "crusader": 0.527,
      "archon": 0.527,
      "legend": 0.523,
      "ancient": 0.522,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 25572,
      "guardian": 79876,
      "crusader": 104667,
      "archon": 104310,
      "legend": 77581,
      "ancient": 45256,
      "divine": 35335
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.486,
      "crusader": 0.489,
      "archon": 0.488,
      "legend": 0.504,
      "ancient": 0.498,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 4166,
      "guardian": 10212,
      "crusader": 12232,
      "archon": 12675,
      "legend": 10160,
      "ancient": 6834,
      "divine": 7189
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.528,
      "crusader": 0.524,
      "archon": 0.524,
      "legend": 0.524,
      "ancient": 0.52,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 16685,
      "guardian": 46984,
      "crusader": 64859,
      "archon": 71517,
      "legend": 60515,
      "ancient": 40832,
      "divine": 36357
    },
    "counters": [
      "sven",
      "ursa",
      "ring-master",
      "winter-wyvern",
      "sand-king",
      "wraith-king"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "chaos-knight",
      "treant-protector",
      "kez",
      "sniper",
      "muerta"
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
      "Aghanim's Shard",
      "Glimmer Cape",
      "Staff of Wizardry",
      "Blink Dagger",
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.514,
      "crusader": 0.519,
      "archon": 0.525,
      "legend": 0.527,
      "ancient": 0.528,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 13572,
      "guardian": 42266,
      "crusader": 60985,
      "archon": 68004,
      "legend": 57024,
      "ancient": 36392,
      "divine": 31370
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.481,
      "crusader": 0.494,
      "archon": 0.498,
      "legend": 0.504,
      "ancient": 0.511,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 29086,
      "guardian": 73153,
      "crusader": 93497,
      "archon": 97711,
      "legend": 78461,
      "ancient": 49588,
      "divine": 45054
    },
    "counters": [
      "underlord",
      "dark-willow",
      "axe",
      "warlock",
      "death-prophet",
      "phoenix"
    ],
    "weakAgainst": [
      "leshrac",
      "invoker",
      "pangolier",
      "monkey-king",
      "marci",
      "timbersaw"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Circlet",
      "Mantle of Intelligence",
      "Faerie Fire"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Ogre Axe",
      "Boots of Travel",
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.489,
      "crusader": 0.488,
      "archon": 0.488,
      "legend": 0.488,
      "ancient": 0.488,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 40277,
      "guardian": 122536,
      "crusader": 166230,
      "archon": 174480,
      "legend": 138701,
      "ancient": 86468,
      "divine": 73878
    },
    "counters": [
      "tinker",
      "sven",
      "troll-warlord",
      "io",
      "grimstroke",
      "razor"
    ],
    "weakAgainst": [
      "lycan",
      "treant-protector",
      "undying",
      "abaddon",
      "monkey-king",
      "earth-spirit"
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
      "Ogre Axe",
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.492,
      "crusader": 0.483,
      "archon": 0.494,
      "legend": 0.481,
      "ancient": 0.489,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 3510,
      "guardian": 9998,
      "crusader": 13261,
      "archon": 13851,
      "legend": 11306,
      "ancient": 7011,
      "divine": 8039
    },
    "counters": [
      "shadow-fiend",
      "windranger",
      "tiny",
      "rubick",
      "jakiro",
      "hoodwink"
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
      "Hyperstone",
      "Mjollnir",
      "Maelstrom",
      "Blade of Alacrity",
      "Ogre Axe"
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.498,
      "crusader": 0.495,
      "archon": 0.496,
      "legend": 0.498,
      "ancient": 0.497,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 17439,
      "guardian": 45705,
      "crusader": 59149,
      "archon": 61186,
      "legend": 51445,
      "ancient": 33901,
      "divine": 33431
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.463,
      "crusader": 0.48,
      "archon": 0.482,
      "legend": 0.492,
      "ancient": 0.504,
      "divine": 0.534
    },
    "pickByBracket": {
      "herald": 2795,
      "guardian": 7392,
      "crusader": 9467,
      "archon": 9319,
      "legend": 7777,
      "ancient": 5206,
      "divine": 6648
    },
    "counters": [
      "sven",
      "skywrath-mage",
      "axe",
      "lion",
      "pudge",
      "void-spirit"
    ],
    "weakAgainst": [
      "leshrac",
      "beastmaster",
      "ogre-magi",
      "terrorblade",
      "bane",
      "tusk"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Sage's Mask",
      "Quelling Blade",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Ultimate Orb",
      "Helm of the Overlord",
      "Aghanim's Shard",
      "Platemail",
      "Hyperstone"
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.476,
      "crusader": 0.487,
      "archon": 0.487,
      "legend": 0.496,
      "ancient": 0.497,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 7886,
      "guardian": 31106,
      "crusader": 54125,
      "archon": 68293,
      "legend": 62800,
      "ancient": 42683,
      "divine": 38446
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.488,
      "crusader": 0.488,
      "archon": 0.495,
      "legend": 0.499,
      "ancient": 0.502,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 8242,
      "guardian": 19764,
      "crusader": 24434,
      "archon": 25227,
      "legend": 20273,
      "ancient": 13711,
      "divine": 12954
    },
    "counters": [
      "dark-seer",
      "death-prophet",
      "ursa",
      "lina",
      "void-spirit",
      "slardar"
    ],
    "weakAgainst": [
      "dazzle",
      "puck",
      "ancient-apparition",
      "phoenix",
      "razor",
      "rubick"
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
      "Solar Crest"
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
    "overallWin": 0.466,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.458,
      "crusader": 0.465,
      "archon": 0.469,
      "legend": 0.469,
      "ancient": 0.468,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 5517,
      "guardian": 17221,
      "crusader": 27546,
      "archon": 33783,
      "legend": 31857,
      "ancient": 23344,
      "divine": 23475
    },
    "counters": [
      "chaos-knight",
      "outworld-devourer",
      "drow-ranger",
      "medusa",
      "dawnbreaker",
      "weaver"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "ancient-apparition",
      "phoenix",
      "alchemist",
      "shadow-demon"
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
      "Staff of Wizardry",
      "Ogre Axe"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.499,
      "crusader": 0.501,
      "archon": 0.502,
      "legend": 0.493,
      "ancient": 0.489,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 7805,
      "guardian": 21598,
      "crusader": 26666,
      "archon": 26476,
      "legend": 19869,
      "ancient": 11450,
      "divine": 8563
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.503,
      "crusader": 0.498,
      "archon": 0.51,
      "legend": 0.512,
      "ancient": 0.517,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 4869,
      "guardian": 10883,
      "crusader": 12137,
      "archon": 10420,
      "legend": 7465,
      "ancient": 4268,
      "divine": 3981
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Slippers of Agility",
      "Observer Ward",
      "Tango",
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.504,
      "crusader": 0.505,
      "archon": 0.507,
      "legend": 0.514,
      "ancient": 0.511,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 12132,
      "guardian": 37854,
      "crusader": 50555,
      "archon": 53318,
      "legend": 42516,
      "ancient": 26647,
      "divine": 23052
    },
    "counters": [
      "storm-spirit",
      "crystal-maiden",
      "ogre-magi",
      "queen-of-pain",
      "dragon-knight",
      "lifestealer"
    ],
    "weakAgainst": [
      "tusk",
      "zeus",
      "tidehunter",
      "sniper",
      "templar-assassin",
      "jakiro"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Circlet"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Arcane Boots",
      "Essence Distiller",
      "Eul's Scepter of Divinity",
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
    "overallWin": 0.443,
    "winByBracket": {
      "herald": 0.445,
      "guardian": 0.436,
      "crusader": 0.437,
      "archon": 0.441,
      "legend": 0.443,
      "ancient": 0.448,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 12751,
      "guardian": 31016,
      "crusader": 37716,
      "archon": 38354,
      "legend": 31202,
      "ancient": 20905,
      "divine": 18934
    },
    "counters": [
      "undying",
      "earthshaker",
      "weaver",
      "underlord",
      "skywrath-mage",
      "bane"
    ],
    "weakAgainst": [
      "treant-protector",
      "dawnbreaker",
      "crystal-maiden",
      "zeus",
      "slardar",
      "timbersaw"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Quelling Blade",
      "Slippers of Agility",
      "Faerie Fire"
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
      "herald": 0.473,
      "guardian": 0.476,
      "crusader": 0.476,
      "archon": 0.475,
      "legend": 0.473,
      "ancient": 0.47,
      "divine": 0.474
    },
    "pickByBracket": {
      "herald": 6821,
      "guardian": 19204,
      "crusader": 25404,
      "archon": 26087,
      "legend": 20506,
      "ancient": 13508,
      "divine": 13337
    },
    "counters": [
      "weaver",
      "lifestealer",
      "terrorblade",
      "dawnbreaker",
      "void-spirit",
      "puck"
    ],
    "weakAgainst": [
      "luna",
      "timbersaw",
      "doom",
      "sven",
      "dazzle",
      "treant-protector"
    ],
    "startItems": [
      "Iron Branch",
      "Magic Wand",
      "Circlet",
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
    "overallWin": 0.462,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.47,
      "crusader": 0.463,
      "archon": 0.462,
      "legend": 0.456,
      "ancient": 0.451,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 10401,
      "guardian": 24071,
      "crusader": 28969,
      "archon": 29061,
      "legend": 24033,
      "ancient": 15747,
      "divine": 14484
    },
    "counters": [
      "techies",
      "lich",
      "bristleback",
      "tusk",
      "faceless-void",
      "dark-willow"
    ],
    "weakAgainst": [
      "grimstroke",
      "leshrac",
      "huskar",
      "sand-king",
      "primal-beast",
      "ursa"
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
      "Maelstrom",
      "Blade of Alacrity",
      "Dragon Lance",
      "Hyperstone"
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.493,
      "crusader": 0.486,
      "archon": 0.481,
      "legend": 0.487,
      "ancient": 0.483,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 6753,
      "guardian": 14655,
      "crusader": 13516,
      "archon": 9747,
      "legend": 6121,
      "ancient": 3446,
      "divine": 2766
    },
    "counters": [
      "hoodwink",
      "windranger",
      "puck",
      "templar-assassin",
      "axe",
      "pangolier"
    ],
    "weakAgainst": [
      "storm-spirit",
      "sand-king",
      "shadow-fiend",
      "ember-spirit",
      "dragon-knight",
      "terrorblade"
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
    "overallWin": 0.429,
    "winByBracket": {
      "herald": 0.445,
      "guardian": 0.433,
      "crusader": 0.422,
      "archon": 0.426,
      "legend": 0.427,
      "ancient": 0.428,
      "divine": 0.438
    },
    "pickByBracket": {
      "herald": 19898,
      "guardian": 53445,
      "crusader": 63250,
      "archon": 61275,
      "legend": 46361,
      "ancient": 28283,
      "divine": 24824
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.548,
      "guardian": 0.538,
      "crusader": 0.531,
      "archon": 0.524,
      "legend": 0.521,
      "ancient": 0.512,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 28559,
      "guardian": 85284,
      "crusader": 111387,
      "archon": 115947,
      "legend": 93024,
      "ancient": 58167,
      "divine": 52140
    },
    "counters": [
      "witch-doctor",
      "void-spirit",
      "underlord",
      "sven",
      "bristleback",
      "earthshaker"
    ],
    "weakAgainst": [
      "beastmaster",
      "grimstroke",
      "clockwerk",
      "invoker",
      "keeper-of-the-light",
      "drow-ranger"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Circlet",
      "Tango",
      "Magic Stick",
      "Magic Wand"
    ],
    "coreItems": [
      "Radiance",
      "Aghanim's Shard",
      "Boots of Travel",
      "Talisman of Evasion",
      "Sacred Relic"
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.497,
      "crusader": 0.514,
      "archon": 0.525,
      "legend": 0.532,
      "ancient": 0.539,
      "divine": 0.539
    },
    "pickByBracket": {
      "herald": 7573,
      "guardian": 24047,
      "crusader": 36694,
      "archon": 45686,
      "legend": 41854,
      "ancient": 29458,
      "divine": 31071
    },
    "counters": [
      "dark-willow",
      "storm-spirit",
      "timbersaw",
      "zeus",
      "troll-warlord",
      "silencer"
    ],
    "weakAgainst": [
      "lifestealer",
      "oracle",
      "pugna",
      "undying",
      "windranger",
      "shadow-fiend"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Quelling Blade",
      "Magic Stick"
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.523,
      "crusader": 0.52,
      "archon": 0.52,
      "legend": 0.519,
      "ancient": 0.525,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 10621,
      "guardian": 32053,
      "crusader": 43363,
      "archon": 47627,
      "legend": 40845,
      "ancient": 27249,
      "divine": 25747
    },
    "counters": [
      "gyrocopter",
      "lich",
      "bristleback",
      "void-spirit",
      "invoker",
      "timbersaw"
    ],
    "weakAgainst": [
      "largo",
      "pudge",
      "pangolier",
      "terrorblade",
      "phoenix",
      "rubick"
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.517,
      "crusader": 0.513,
      "archon": 0.508,
      "legend": 0.498,
      "ancient": 0.5,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 33236,
      "guardian": 97582,
      "crusader": 122156,
      "archon": 118270,
      "legend": 85983,
      "ancient": 48898,
      "divine": 34620
    },
    "counters": [
      "medusa",
      "winter-wyvern",
      "bristleback",
      "ancient-apparition",
      "lycan",
      "primal-beast"
    ],
    "weakAgainst": [
      "phoenix",
      "pugna",
      "treant-protector",
      "mirana",
      "phantom-assassin",
      "leshrac"
    ],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.487,
      "crusader": 0.492,
      "archon": 0.502,
      "legend": 0.506,
      "ancient": 0.516,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 6354,
      "guardian": 17665,
      "crusader": 22499,
      "archon": 22198,
      "legend": 17000,
      "ancient": 10699,
      "divine": 8858
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.459,
      "crusader": 0.476,
      "archon": 0.486,
      "legend": 0.492,
      "ancient": 0.507,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 6736,
      "guardian": 20633,
      "crusader": 29981,
      "archon": 32610,
      "legend": 27273,
      "ancient": 18314,
      "divine": 17765
    },
    "counters": [
      "batrider",
      "invoker",
      "night-stalker",
      "tiny",
      "puck",
      "ursa"
    ],
    "weakAgainst": [
      "windranger",
      "jakiro",
      "queen-of-pain",
      "tusk",
      "pudge",
      "snapfire"
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.476,
      "crusader": 0.498,
      "archon": 0.503,
      "legend": 0.502,
      "ancient": 0.502,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 7763,
      "guardian": 21226,
      "crusader": 28649,
      "archon": 30497,
      "legend": 24259,
      "ancient": 14763,
      "divine": 11762
    },
    "counters": [
      "lion",
      "jakiro"
    ],
    "weakAgainst": [
      "mars",
      "timbersaw",
      "disruptor",
      "tusk",
      "invoker",
      "shadow-fiend"
    ],
    "startItems": [
      "Iron Branch",
      "Mantle of Intelligence",
      "Observer Ward",
      "Tango",
      "Circlet",
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
    "overallWin": 0.455,
    "winByBracket": {
      "herald": 0.432,
      "guardian": 0.445,
      "crusader": 0.441,
      "archon": 0.46,
      "legend": 0.458,
      "ancient": 0.459,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 3932,
      "guardian": 11249,
      "crusader": 16902,
      "archon": 20461,
      "legend": 19423,
      "ancient": 14950,
      "divine": 17297
    },
    "counters": [
      "lina",
      "silencer",
      "beastmaster",
      "lion",
      "death-prophet",
      "bloodseeker"
    ],
    "weakAgainst": [
      "largo",
      "naga-siren",
      "treant-protector",
      "nature-s-prophet",
      "juggernaut",
      "pugna"
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
      "Blade of Alacrity",
      "Diffusal Blade",
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.518,
      "crusader": 0.511,
      "archon": 0.504,
      "legend": 0.502,
      "ancient": 0.495,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 37426,
      "guardian": 94866,
      "crusader": 107389,
      "archon": 96472,
      "legend": 66696,
      "ancient": 37193,
      "divine": 26776
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.517,
      "crusader": 0.518,
      "archon": 0.517,
      "legend": 0.526,
      "ancient": 0.525,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 21930,
      "guardian": 58568,
      "crusader": 69045,
      "archon": 62746,
      "legend": 45380,
      "ancient": 27546,
      "divine": 26305
    },
    "counters": [
      "dark-willow",
      "shadow-shaman",
      "slardar",
      "jakiro",
      "templar-assassin",
      "mars"
    ],
    "weakAgainst": [
      "shadow-demon",
      "queen-of-pain",
      "hoodwink",
      "nature-s-prophet",
      "spirit-breaker",
      "dragon-knight"
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
      "Staff of Wizardry",
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.505,
      "crusader": 0.508,
      "archon": 0.507,
      "legend": 0.508,
      "ancient": 0.505,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 6075,
      "guardian": 20679,
      "crusader": 32876,
      "archon": 37421,
      "legend": 32678,
      "ancient": 23195,
      "divine": 24910
    },
    "counters": [
      "dark-seer",
      "sand-king",
      "techies",
      "void-spirit",
      "underlord",
      "bristleback"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "magnus",
      "juggernaut",
      "bane",
      "doom",
      "huskar"
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
      "Pavise",
      "Solar Crest",
      "Platemail"
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.474,
      "crusader": 0.477,
      "archon": 0.475,
      "legend": 0.484,
      "ancient": 0.499,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 5514,
      "guardian": 15485,
      "crusader": 19883,
      "archon": 19464,
      "legend": 15834,
      "ancient": 11352,
      "divine": 11876
    },
    "counters": [
      "muerta",
      "gyrocopter",
      "viper",
      "puck",
      "terrorblade",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "earthshaker",
      "largo",
      "razor",
      "clockwerk",
      "shadow-demon",
      "faceless-void"
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.444,
      "crusader": 0.459,
      "archon": 0.468,
      "legend": 0.479,
      "ancient": 0.484,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 5178,
      "guardian": 15158,
      "crusader": 21730,
      "archon": 25213,
      "legend": 22773,
      "ancient": 16670,
      "divine": 18125
    },
    "counters": [
      "weaver",
      "dark-willow",
      "sven",
      "silencer",
      "ursa",
      "medusa"
    ],
    "weakAgainst": [
      "naga-siren",
      "bounty-hunter",
      "oracle",
      "nyx-assassin",
      "huskar",
      "bane"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Circlet",
      "Sentry Ward"
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.523,
      "guardian": 0.517,
      "crusader": 0.518,
      "archon": 0.516,
      "legend": 0.513,
      "ancient": 0.512,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 43033,
      "guardian": 137779,
      "crusader": 190689,
      "archon": 192476,
      "legend": 148414,
      "ancient": 92959,
      "divine": 86297
    },
    "counters": [
      "io",
      "clinkz",
      "wraith-king",
      "phantom-assassin",
      "morphling",
      "warlock"
    ],
    "weakAgainst": [
      "lycan",
      "largo",
      "earth-spirit",
      "naga-siren",
      "slark",
      "bane"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Gauntlets of Strength",
      "Observer and Sentry Wards",
      "Boots of Speed",
      "Blood Grenade"
    ],
    "coreItems": [
      "Blink Dagger",
      "Aether Lens",
      "Staff of Wizardry",
      "Ogre Axe",
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.486,
      "crusader": 0.498,
      "archon": 0.503,
      "legend": 0.507,
      "ancient": 0.504,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 8277,
      "guardian": 21900,
      "crusader": 26861,
      "archon": 25905,
      "legend": 20305,
      "ancient": 12633,
      "divine": 10768
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.466,
      "crusader": 0.462,
      "archon": 0.461,
      "legend": 0.462,
      "ancient": 0.463,
      "divine": 0.46
    },
    "pickByBracket": {
      "herald": 16191,
      "guardian": 48955,
      "crusader": 70369,
      "archon": 78414,
      "legend": 64301,
      "ancient": 41315,
      "divine": 36345
    },
    "counters": [
      "phantom-lancer",
      "drow-ranger",
      "phantom-assassin",
      "chaos-knight",
      "sand-king",
      "timbersaw"
    ],
    "weakAgainst": [
      "largo",
      "keeper-of-the-light",
      "treant-protector",
      "chen",
      "dark-seer",
      "bounty-hunter"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.501,
      "crusader": 0.503,
      "archon": 0.504,
      "legend": 0.502,
      "ancient": 0.505,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 15119,
      "guardian": 33730,
      "crusader": 38367,
      "archon": 37105,
      "legend": 28742,
      "ancient": 17458,
      "divine": 14123
    },
    "counters": [
      "crystal-maiden",
      "silencer",
      "gyrocopter",
      "primal-beast",
      "warlock",
      "tidehunter"
    ],
    "weakAgainst": [
      "treant-protector",
      "nature-s-prophet",
      "terrorblade",
      "phoenix",
      "huskar",
      "puck"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Slippers of Agility",
      "Faerie Fire"
    ],
    "coreItems": [
      "Yasha",
      "Blade of Alacrity",
      "Ogre Axe",
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.53,
      "guardian": 0.519,
      "crusader": 0.525,
      "archon": 0.522,
      "legend": 0.524,
      "ancient": 0.52,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 15765,
      "guardian": 37384,
      "crusader": 41594,
      "archon": 38175,
      "legend": 27701,
      "ancient": 16351,
      "divine": 13033
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.469,
      "crusader": 0.477,
      "archon": 0.477,
      "legend": 0.479,
      "ancient": 0.485,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 6110,
      "guardian": 19838,
      "crusader": 29409,
      "archon": 34687,
      "legend": 31542,
      "ancient": 23153,
      "divine": 25161
    },
    "counters": [
      "dark-willow",
      "vengeful-spirit",
      "skywrath-mage",
      "earth-spirit",
      "terrorblade",
      "timbersaw"
    ],
    "weakAgainst": [
      "alchemist",
      "chen",
      "grimstroke",
      "dazzle",
      "lich",
      "invoker"
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
      "Arcane Boots",
      "Blink Dagger",
      "Staff of Wizardry",
      "Essence Distiller",
      "Aether Lens"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.485,
      "crusader": 0.486,
      "archon": 0.492,
      "legend": 0.497,
      "ancient": 0.499,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 19123,
      "guardian": 64636,
      "crusader": 101605,
      "archon": 123934,
      "legend": 112812,
      "ancient": 77913,
      "divine": 75375
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Faerie Fire",
      "Sentry Ward"
    ],
    "coreItems": [
      "Essence Distiller",
      "Arcane Boots",
      "Blink Dagger",
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.506,
      "crusader": 0.49,
      "archon": 0.478,
      "legend": 0.472,
      "ancient": 0.468,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 9999,
      "guardian": 25976,
      "crusader": 31022,
      "archon": 29662,
      "legend": 22384,
      "ancient": 13501,
      "divine": 9957
    },
    "counters": [
      "underlord",
      "muerta",
      "ursa",
      "void-spirit",
      "templar-assassin",
      "lion"
    ],
    "weakAgainst": [
      "warlock",
      "phoenix",
      "abaddon",
      "luna",
      "alchemist",
      "pudge"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Circlet",
      "Quelling Blade",
      "Faerie Fire"
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
    "overallWin": 0.445,
    "winByBracket": {
      "herald": 0.43,
      "guardian": 0.43,
      "crusader": 0.433,
      "archon": 0.45,
      "legend": 0.451,
      "ancient": 0.447,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 3790,
      "guardian": 10666,
      "crusader": 14134,
      "archon": 15776,
      "legend": 13341,
      "ancient": 9304,
      "divine": 9511
    },
    "counters": [
      "phantom-lancer",
      "medusa",
      "weaver",
      "primal-beast",
      "drow-ranger",
      "underlord"
    ],
    "weakAgainst": [
      "naga-siren",
      "alchemist",
      "grimstroke",
      "monkey-king",
      "chen",
      "lycan"
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.489,
      "crusader": 0.489,
      "archon": 0.487,
      "legend": 0.483,
      "ancient": 0.482,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 28457,
      "guardian": 80455,
      "crusader": 108267,
      "archon": 112951,
      "legend": 92113,
      "ancient": 61277,
      "divine": 60466
    },
    "counters": [
      "night-stalker",
      "winter-wyvern",
      "morphling",
      "medusa",
      "pugna",
      "legion-commander"
    ],
    "weakAgainst": [
      "lone-druid",
      "enigma",
      "alchemist",
      "phoenix",
      "venomancer",
      "omniknight"
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
      "herald": 0.52,
      "guardian": 0.521,
      "crusader": 0.523,
      "archon": 0.522,
      "legend": 0.522,
      "ancient": 0.517,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 31487,
      "guardian": 86384,
      "crusader": 107913,
      "archon": 106128,
      "legend": 79377,
      "ancient": 47279,
      "divine": 37201
    },
    "counters": [
      "medusa",
      "kunkka",
      "morphling",
      "grimstroke",
      "phantom-assassin",
      "tinker"
    ],
    "weakAgainst": [
      "phantom-lancer",
      "beastmaster",
      "death-prophet",
      "naga-siren",
      "lycan",
      "wraith-king"
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
      "Blink Dagger",
      "Arcane Boots",
      "Aether Lens",
      "Glimmer Cape",
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.521,
      "crusader": 0.515,
      "archon": 0.514,
      "legend": 0.507,
      "ancient": 0.501,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 19299,
      "guardian": 60764,
      "crusader": 82654,
      "archon": 83999,
      "legend": 65917,
      "ancient": 40326,
      "divine": 33708
    },
    "counters": [
      "death-prophet",
      "lina",
      "chaos-knight",
      "timbersaw",
      "vengeful-spirit",
      "ursa"
    ],
    "weakAgainst": [
      "treant-protector",
      "huskar",
      "razor",
      "leshrac",
      "spirit-breaker",
      "keeper-of-the-light"
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
      "herald": 0.511,
      "guardian": 0.503,
      "crusader": 0.502,
      "archon": 0.495,
      "legend": 0.496,
      "ancient": 0.497,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 24313,
      "guardian": 67615,
      "crusader": 86172,
      "archon": 84973,
      "legend": 65565,
      "ancient": 41281,
      "divine": 35173
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.5,
      "crusader": 0.499,
      "archon": 0.496,
      "legend": 0.498,
      "ancient": 0.494,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 14961,
      "guardian": 41557,
      "crusader": 51867,
      "archon": 52268,
      "legend": 41212,
      "ancient": 26082,
      "divine": 21879
    },
    "counters": [
      "lifestealer",
      "lina",
      "enchantress",
      "viper",
      "weaver",
      "sand-king"
    ],
    "weakAgainst": [
      "vengeful-spirit",
      "marci",
      "faceless-void",
      "winter-wyvern",
      "phantom-lancer",
      "crystal-maiden"
    ],
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.499,
      "crusader": 0.495,
      "archon": 0.49,
      "legend": 0.492,
      "ancient": 0.495,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 15789,
      "guardian": 47921,
      "crusader": 65775,
      "archon": 69721,
      "legend": 55875,
      "ancient": 35403,
      "divine": 29657
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
    "overallWin": 0.531,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.524,
      "crusader": 0.531,
      "archon": 0.534,
      "legend": 0.534,
      "ancient": 0.533,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 19649,
      "guardian": 67567,
      "crusader": 108933,
      "archon": 133612,
      "legend": 120467,
      "ancient": 83517,
      "divine": 80801
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
      "bounty-hunter",
      "clinkz",
      "broodmother",
      "treant-protector",
      "io",
      "chen"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.513,
      "crusader": 0.51,
      "archon": 0.505,
      "legend": 0.497,
      "ancient": 0.492,
      "divine": 0.481
    },
    "pickByBracket": {
      "herald": 45524,
      "guardian": 122527,
      "crusader": 152236,
      "archon": 146811,
      "legend": 105522,
      "ancient": 59027,
      "divine": 40974
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Slippers of Agility",
      "Circlet",
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
    "overallWin": 0.543,
    "winByBracket": {
      "herald": 0.561,
      "guardian": 0.549,
      "crusader": 0.544,
      "archon": 0.543,
      "legend": 0.538,
      "ancient": 0.534,
      "divine": 0.535
    },
    "pickByBracket": {
      "herald": 20043,
      "guardian": 62430,
      "crusader": 81353,
      "archon": 81088,
      "legend": 63129,
      "ancient": 39358,
      "divine": 35119
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
      "Yasha",
      "Talisman of Evasion",
      "Radiance"
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.518,
      "crusader": 0.519,
      "archon": 0.519,
      "legend": 0.516,
      "ancient": 0.517,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 28563,
      "guardian": 77734,
      "crusader": 97543,
      "archon": 98011,
      "legend": 78021,
      "ancient": 48998,
      "divine": 42279
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
      "marci",
      "monkey-king"
    ],
    "startItems": [
      "Tango",
      "Boots of Speed",
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.465,
      "guardian": 0.467,
      "crusader": 0.466,
      "archon": 0.471,
      "legend": 0.471,
      "ancient": 0.476,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 11590,
      "guardian": 33033,
      "crusader": 44182,
      "archon": 46687,
      "legend": 38903,
      "ancient": 26994,
      "divine": 26675
    },
    "counters": [
      "naga-siren",
      "sven",
      "techies",
      "void-spirit",
      "templar-assassin",
      "death-prophet"
    ],
    "weakAgainst": [
      "mirana",
      "treant-protector",
      "chen",
      "huskar",
      "lycan",
      "faceless-void"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Mantle of Intelligence",
      "Town Portal Scroll"
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.503,
      "crusader": 0.499,
      "archon": 0.505,
      "legend": 0.5,
      "ancient": 0.504,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 16596,
      "guardian": 41600,
      "crusader": 48418,
      "archon": 45153,
      "legend": 32427,
      "ancient": 19901,
      "divine": 17417
    },
    "counters": [
      "morphling",
      "legion-commander",
      "dark-seer",
      "phantom-lancer",
      "skywrath-mage",
      "zeus"
    ],
    "weakAgainst": [
      "lycan",
      "doom",
      "earthshaker",
      "necrophos",
      "void-spirit",
      "anti-mage"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Magic Stick",
      "Gauntlets of Strength",
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.512,
      "crusader": 0.511,
      "archon": 0.505,
      "legend": 0.501,
      "ancient": 0.502,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 19285,
      "guardian": 52252,
      "crusader": 63944,
      "archon": 62785,
      "legend": 47540,
      "ancient": 30683,
      "divine": 27798
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
    "overallWin": 0.461,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.455,
      "crusader": 0.458,
      "archon": 0.463,
      "legend": 0.462,
      "ancient": 0.46,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 8754,
      "guardian": 23099,
      "crusader": 28259,
      "archon": 26924,
      "legend": 20675,
      "ancient": 13473,
      "divine": 12370
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.467,
      "crusader": 0.465,
      "archon": 0.464,
      "legend": 0.472,
      "ancient": 0.479,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 7837,
      "guardian": 19365,
      "crusader": 21368,
      "archon": 19676,
      "legend": 15517,
      "ancient": 10245,
      "divine": 11989
    },
    "counters": [
      "magnus",
      "bristleback",
      "razor",
      "pugna",
      "dark-willow",
      "sand-king"
    ],
    "weakAgainst": [
      "morphling",
      "abaddon",
      "drow-ranger",
      "ring-master",
      "phoenix",
      "enchantress"
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
      "Diadem",
      "Yasha",
      "Manta Style",
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.507,
      "crusader": 0.506,
      "archon": 0.498,
      "legend": 0.493,
      "ancient": 0.492,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 12902,
      "guardian": 38640,
      "crusader": 54420,
      "archon": 58577,
      "legend": 47258,
      "ancient": 31125,
      "divine": 28306
    },
    "counters": [
      "faceless-void",
      "mirana",
      "spirit-breaker",
      "dark-willow",
      "necrophos",
      "templar-assassin"
    ],
    "weakAgainst": [
      "treant-protector",
      "clockwerk",
      "huskar",
      "ember-spirit",
      "grimstroke",
      "keeper-of-the-light"
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
    "overallWin": 0.442,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.448,
      "crusader": 0.449,
      "archon": 0.442,
      "legend": 0.438,
      "ancient": 0.432,
      "divine": 0.438
    },
    "pickByBracket": {
      "herald": 6929,
      "guardian": 19049,
      "crusader": 25896,
      "archon": 27604,
      "legend": 22931,
      "ancient": 15693,
      "divine": 15975
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
    "overallWin": 0.469,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.454,
      "crusader": 0.456,
      "archon": 0.471,
      "legend": 0.478,
      "ancient": 0.484,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 9711,
      "guardian": 27261,
      "crusader": 34385,
      "archon": 33314,
      "legend": 25979,
      "ancient": 16791,
      "divine": 16544
    },
    "counters": [
      "invoker",
      "timbersaw",
      "ogre-magi",
      "dragon-knight",
      "luna",
      "axe"
    ],
    "weakAgainst": [
      "snapfire",
      "lion",
      "shadow-shaman",
      "queen-of-pain",
      "tusk",
      "shadow-demon"
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
    "overallWin": 0.444,
    "winByBracket": {
      "herald": 0.447,
      "guardian": 0.446,
      "crusader": 0.442,
      "archon": 0.441,
      "legend": 0.44,
      "ancient": 0.444,
      "divine": 0.457
    },
    "pickByBracket": {
      "herald": 12316,
      "guardian": 31662,
      "crusader": 38490,
      "archon": 40589,
      "legend": 33858,
      "ancient": 23782,
      "divine": 23636
    },
    "counters": [
      "death-prophet",
      "weaver",
      "bristleback",
      "sven",
      "void-spirit",
      "sand-king"
    ],
    "weakAgainst": [
      "naga-siren",
      "bane",
      "lone-druid",
      "enigma",
      "kez",
      "largo"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Magic Stick",
      "Quelling Blade",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Echo Sabre",
      "Ogre Axe",
      "Claymore",
      "Shadow Blade",
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.488,
      "crusader": 0.498,
      "archon": 0.502,
      "legend": 0.507,
      "ancient": 0.519,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 5793,
      "guardian": 16831,
      "crusader": 22646,
      "archon": 24139,
      "legend": 20883,
      "ancient": 15171,
      "divine": 20876
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
      "Observer and Sentry Wards",
      "Boots of Speed",
      "Smoke of Deceit",
      "Sentry Ward",
      "Iron Branch"
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.51,
      "crusader": 0.51,
      "archon": 0.497,
      "legend": 0.499,
      "ancient": 0.493,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 10557,
      "guardian": 20141,
      "crusader": 20325,
      "archon": 16453,
      "legend": 11358,
      "ancient": 6705,
      "divine": 4908
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.46,
      "guardian": 0.446,
      "crusader": 0.457,
      "archon": 0.471,
      "legend": 0.485,
      "ancient": 0.484,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 6151,
      "guardian": 18574,
      "crusader": 27031,
      "archon": 33328,
      "legend": 31982,
      "ancient": 24036,
      "divine": 27043
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.515,
      "crusader": 0.509,
      "archon": 0.503,
      "legend": 0.49,
      "ancient": 0.493,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 8073,
      "guardian": 26719,
      "crusader": 40051,
      "archon": 46832,
      "legend": 40492,
      "ancient": 26806,
      "divine": 23820
    },
    "counters": [
      "ancient-apparition",
      "abaddon",
      "gyrocopter",
      "mars",
      "zeus",
      "primal-beast"
    ],
    "weakAgainst": [
      "treant-protector",
      "ursa",
      "necrophos",
      "monkey-king",
      "drow-ranger",
      "hoodwink"
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
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.52,
      "crusader": 0.521,
      "archon": 0.524,
      "legend": 0.528,
      "ancient": 0.525,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 18925,
      "guardian": 57339,
      "crusader": 76305,
      "archon": 78968,
      "legend": 62204,
      "ancient": 39826,
      "divine": 38026
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Enchanted Mango",
      "Gauntlets of Strength",
      "Blood Grenade",
      "Tango",
      "Magic Stick"
    ],
    "coreItems": [
      "Blink Dagger",
      "Arcane Boots",
      "Ogre Axe",
      "Platemail",
      "Lotus Orb"
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.456,
      "crusader": 0.469,
      "archon": 0.473,
      "legend": 0.476,
      "ancient": 0.48,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 14337,
      "guardian": 35928,
      "crusader": 45998,
      "archon": 46666,
      "legend": 37185,
      "ancient": 23150,
      "divine": 20109
    },
    "counters": [
      "underlord",
      "muerta",
      "phantom-assassin",
      "dark-willow",
      "timbersaw",
      "grimstroke"
    ],
    "weakAgainst": [
      "enigma",
      "treant-protector",
      "alchemist",
      "lycan",
      "marci",
      "chen"
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
    "overallWin": 0.535,
    "winByBracket": {
      "herald": 0.544,
      "guardian": 0.541,
      "crusader": 0.54,
      "archon": 0.539,
      "legend": 0.533,
      "ancient": 0.527,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 18433,
      "guardian": 58034,
      "crusader": 83883,
      "archon": 95863,
      "legend": 81649,
      "ancient": 52781,
      "divine": 45812
    },
    "counters": [
      "slardar",
      "morphling",
      "lich",
      "legion-commander",
      "warlock",
      "lina"
    ],
    "weakAgainst": [
      "beastmaster",
      "techies",
      "dawnbreaker",
      "ring-master",
      "phoenix",
      "clockwerk"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Faerie Fire",
      "Blood Grenade"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Broadsword",
      "Ogre Axe",
      "Specialist's Array"
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.474,
      "crusader": 0.477,
      "archon": 0.468,
      "legend": 0.471,
      "ancient": 0.464,
      "divine": 0.463
    },
    "pickByBracket": {
      "herald": 16427,
      "guardian": 44370,
      "crusader": 56080,
      "archon": 56077,
      "legend": 41295,
      "ancient": 24760,
      "divine": 18692
    },
    "counters": [
      "weaver",
      "dragon-knight",
      "warlock",
      "clockwerk",
      "dawnbreaker",
      "zeus"
    ],
    "weakAgainst": [
      "ember-spirit",
      "invoker",
      "batrider",
      "pudge",
      "queen-of-pain",
      "slardar"
    ],
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
      "herald": 0.485,
      "guardian": 0.482,
      "crusader": 0.487,
      "archon": 0.488,
      "legend": 0.488,
      "ancient": 0.49,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 25941,
      "guardian": 55051,
      "crusader": 58656,
      "archon": 53017,
      "legend": 37443,
      "ancient": 21580,
      "divine": 18104
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.488,
      "crusader": 0.521,
      "archon": 0.516,
      "legend": 0.527,
      "ancient": 0.54,
      "divine": 0.542
    },
    "pickByBracket": {
      "herald": 3227,
      "guardian": 7849,
      "crusader": 9496,
      "archon": 9355,
      "legend": 6904,
      "ancient": 4833,
      "divine": 5558
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.489,
      "crusader": 0.489,
      "archon": 0.493,
      "legend": 0.497,
      "ancient": 0.496,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 6487,
      "guardian": 17507,
      "crusader": 24943,
      "archon": 29320,
      "legend": 27234,
      "ancient": 20643,
      "divine": 22398
    },
    "counters": [
      "zeus",
      "sven",
      "weaver",
      "earthshaker",
      "dazzle",
      "pangolier"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "necrophos",
      "lycan",
      "alchemist",
      "treant-protector",
      "phoenix"
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.506,
      "crusader": 0.499,
      "archon": 0.493,
      "legend": 0.487,
      "ancient": 0.478,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 12632,
      "guardian": 37406,
      "crusader": 49194,
      "archon": 48341,
      "legend": 36829,
      "ancient": 21366,
      "divine": 17264
    },
    "counters": [
      "sand-king",
      "drow-ranger",
      "ancient-apparition",
      "troll-warlord",
      "grimstroke",
      "axe"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "slark",
      "treant-protector",
      "venomancer",
      "pudge",
      "largo"
    ],
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.472,
      "crusader": 0.47,
      "archon": 0.468,
      "legend": 0.473,
      "ancient": 0.466,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 16684,
      "guardian": 38886,
      "crusader": 43665,
      "archon": 41444,
      "legend": 31348,
      "ancient": 18406,
      "divine": 16192
    },
    "counters": [
      "sven",
      "ancient-apparition",
      "brewmaster",
      "crystal-maiden",
      "gyrocopter",
      "warlock"
    ],
    "weakAgainst": [
      "morphling",
      "monkey-king",
      "sniper",
      "venomancer",
      "centaur-warrunner",
      "invoker"
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.479,
      "crusader": 0.477,
      "archon": 0.477,
      "legend": 0.486,
      "ancient": 0.487,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 27593,
      "guardian": 72453,
      "crusader": 92378,
      "archon": 95395,
      "legend": 77995,
      "ancient": 51580,
      "divine": 49184
    },
    "counters": [
      "oracle",
      "morphling",
      "phantom-lancer",
      "chaos-knight",
      "zeus",
      "medusa"
    ],
    "weakAgainst": [
      "treant-protector",
      "naga-siren",
      "lone-druid",
      "enigma",
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
      "Maelstrom",
      "Blade of Alacrity",
      "Ogre Axe",
      "Hyperstone"
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.474,
      "crusader": 0.487,
      "archon": 0.483,
      "legend": 0.49,
      "ancient": 0.505,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 8394,
      "guardian": 23215,
      "crusader": 28758,
      "archon": 28405,
      "legend": 21894,
      "ancient": 14385,
      "divine": 15101
    },
    "counters": [
      "slardar",
      "shadow-shaman",
      "pangolier",
      "storm-spirit"
    ],
    "weakAgainst": [
      "ogre-magi",
      "snapfire",
      "ember-spirit",
      "windranger",
      "shadow-fiend",
      "lich"
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
      "Blink Dagger",
      "Arcane Boots",
      "Power Treads",
      "Glimmer Cape",
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
      "guardian": 0.527,
      "crusader": 0.525,
      "archon": 0.516,
      "legend": 0.512,
      "ancient": 0.505,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 27903,
      "guardian": 84231,
      "crusader": 108939,
      "archon": 107006,
      "legend": 78487,
      "ancient": 44983,
      "divine": 33261
    },
    "counters": [
      "gyrocopter",
      "ursa",
      "undying",
      "zeus",
      "pangolier",
      "tidehunter"
    ],
    "weakAgainst": [
      "ember-spirit",
      "necrophos",
      "sniper",
      "lifestealer",
      "clockwerk",
      "snapfire"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Magic Stick",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Arcane Boots",
      "Glimmer Cape",
      "Aghanim's Shard",
      "Pavise",
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
      "guardian": 0.558,
      "crusader": 0.554,
      "archon": 0.546,
      "legend": 0.538,
      "ancient": 0.535,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 23674,
      "guardian": 68247,
      "crusader": 89657,
      "archon": 89748,
      "legend": 67168,
      "ancient": 38712,
      "divine": 27229
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.522,
      "crusader": 0.521,
      "archon": 0.518,
      "legend": 0.517,
      "ancient": 0.514,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 30530,
      "guardian": 87847,
      "crusader": 119670,
      "archon": 130572,
      "legend": 108366,
      "ancient": 71294,
      "divine": 66719
    },
    "counters": [
      "mirana",
      "viper",
      "medusa",
      "monkey-king",
      "dawnbreaker",
      "dragon-knight"
    ],
    "weakAgainst": [
      "juggernaut",
      "void-spirit",
      "keeper-of-the-light",
      "wraith-king",
      "beastmaster",
      "windranger"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Enchanted Mango",
      "Blood Grenade"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Point Booster",
      "Blade of Alacrity",
      "Kaya"
    ]
  }
];

export const HERO_DATA_BY_ID: Record<string, HeroData> = Object.fromEntries(
  HERO_DATA.map((h) => [h.id, h]),
);
