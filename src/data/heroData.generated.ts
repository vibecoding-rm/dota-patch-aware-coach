// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-07-30
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
      "herald": 0.494,
      "guardian": 0.509,
      "crusader": 0.516,
      "archon": 0.512,
      "legend": 0.512,
      "ancient": 0.516,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 7636,
      "guardian": 22182,
      "crusader": 31717,
      "archon": 35946,
      "legend": 30662,
      "ancient": 18617,
      "divine": 12789
    },
    "counters": [
      "troll-warlord",
      "legion-commander",
      "terrorblade",
      "sand-king",
      "axe",
      "dark-willow"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "kunkka",
      "underlord",
      "marci",
      "faceless-void",
      "clinkz"
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
      "herald": 0.477,
      "guardian": 0.476,
      "crusader": 0.476,
      "archon": 0.467,
      "legend": 0.464,
      "ancient": 0.469,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 6278,
      "guardian": 20231,
      "crusader": 29888,
      "archon": 33438,
      "legend": 27483,
      "ancient": 16687,
      "divine": 11449
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.518,
      "crusader": 0.515,
      "archon": 0.516,
      "legend": 0.51,
      "ancient": 0.496,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 9809,
      "guardian": 30988,
      "crusader": 46053,
      "archon": 53006,
      "legend": 43817,
      "ancient": 25806,
      "divine": 17123
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.496,
      "crusader": 0.496,
      "archon": 0.494,
      "legend": 0.495,
      "ancient": 0.494,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 20529,
      "guardian": 65083,
      "crusader": 92618,
      "archon": 97363,
      "legend": 73312,
      "ancient": 41529,
      "divine": 27734
    },
    "counters": [
      "silencer",
      "lich",
      "dragon-knight",
      "mars",
      "dark-willow",
      "doom"
    ],
    "weakAgainst": [
      "timbersaw",
      "ember-spirit",
      "morphling",
      "templar-assassin",
      "ogre-magi",
      "jakiro"
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.496,
      "crusader": 0.497,
      "archon": 0.508,
      "legend": 0.508,
      "ancient": 0.512,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 6371,
      "guardian": 19688,
      "crusader": 26865,
      "archon": 28602,
      "legend": 21308,
      "ancient": 12519,
      "divine": 9670
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.539,
      "guardian": 0.533,
      "crusader": 0.529,
      "archon": 0.522,
      "legend": 0.517,
      "ancient": 0.51,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 25225,
      "guardian": 85778,
      "crusader": 129578,
      "archon": 151727,
      "legend": 129147,
      "ancient": 80445,
      "divine": 61641
    },
    "counters": [
      "death-prophet",
      "morphling",
      "terrorblade",
      "winter-wyvern",
      "techies",
      "faceless-void"
    ],
    "weakAgainst": [
      "bane",
      "naga-siren",
      "lycan",
      "chen",
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.486,
      "crusader": 0.49,
      "archon": 0.497,
      "legend": 0.512,
      "ancient": 0.512,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 5905,
      "guardian": 17957,
      "crusader": 25470,
      "archon": 28807,
      "legend": 24751,
      "ancient": 16677,
      "divine": 16404
    },
    "counters": [
      "axe",
      "earthshaker",
      "tiny",
      "dawnbreaker",
      "templar-assassin",
      "techies"
    ],
    "weakAgainst": [
      "monkey-king",
      "primal-beast",
      "mars",
      "skywrath-mage",
      "beastmaster",
      "marci"
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
      "Glimmer Cape"
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
    "overallWin": 0.431,
    "winByBracket": {
      "herald": 0.424,
      "guardian": 0.427,
      "crusader": 0.43,
      "archon": 0.434,
      "legend": 0.422,
      "ancient": 0.433,
      "divine": 0.449
    },
    "pickByBracket": {
      "herald": 2343,
      "guardian": 6984,
      "crusader": 10149,
      "archon": 10772,
      "legend": 8667,
      "ancient": 5542,
      "divine": 4867
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
    "overallWin": 0.441,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.435,
      "crusader": 0.435,
      "archon": 0.438,
      "legend": 0.439,
      "ancient": 0.446,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 5239,
      "guardian": 15182,
      "crusader": 21664,
      "archon": 23610,
      "legend": 18660,
      "ancient": 11779,
      "divine": 10274
    },
    "counters": [
      "shadow-shaman",
      "lycan",
      "vengeful-spirit",
      "zeus",
      "clockwerk",
      "morphling"
    ],
    "weakAgainst": [
      "batrider",
      "slark",
      "juggernaut",
      "pugna",
      "dazzle",
      "grimstroke"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Sage's Mask",
      "Faerie Fire",
      "Magic Stick",
      "Circlet"
    ],
    "coreItems": [
      "Ultimate Orb",
      "Helm of the Overlord",
      "Ogre Axe",
      "Blink Dagger",
      "Helm of the Dominator"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.52,
      "crusader": 0.52,
      "archon": 0.519,
      "legend": 0.521,
      "ancient": 0.518,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 13171,
      "guardian": 29715,
      "crusader": 32042,
      "archon": 28011,
      "legend": 19111,
      "ancient": 10304,
      "divine": 6278
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.493,
      "crusader": 0.508,
      "archon": 0.511,
      "legend": 0.525,
      "ancient": 0.533,
      "divine": 0.556
    },
    "pickByBracket": {
      "herald": 9414,
      "guardian": 25413,
      "crusader": 32385,
      "archon": 35294,
      "legend": 28854,
      "ancient": 19658,
      "divine": 18783
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.497,
      "crusader": 0.5,
      "archon": 0.51,
      "legend": 0.506,
      "ancient": 0.522,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 2216,
      "guardian": 6551,
      "crusader": 9341,
      "archon": 11008,
      "legend": 9916,
      "ancient": 7566,
      "divine": 7474
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
      "herald": 0.53,
      "guardian": 0.513,
      "crusader": 0.49,
      "archon": 0.475,
      "legend": 0.464,
      "ancient": 0.463,
      "divine": 0.451
    },
    "pickByBracket": {
      "herald": 21186,
      "guardian": 57176,
      "crusader": 65789,
      "archon": 60952,
      "legend": 41224,
      "ancient": 21065,
      "divine": 13786
    },
    "counters": [
      "brewmaster",
      "templar-assassin",
      "pugna",
      "techies",
      "sand-king",
      "razor"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "terrorblade",
      "viper",
      "chen",
      "batrider",
      "necrophos"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.495,
      "crusader": 0.496,
      "archon": 0.497,
      "legend": 0.508,
      "ancient": 0.504,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 5884,
      "guardian": 13796,
      "crusader": 15731,
      "archon": 13857,
      "legend": 9383,
      "ancient": 5406,
      "divine": 4221
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
      "herald": 0.518,
      "guardian": 0.517,
      "crusader": 0.513,
      "archon": 0.51,
      "legend": 0.507,
      "ancient": 0.504,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 8029,
      "guardian": 29121,
      "crusader": 50172,
      "archon": 64566,
      "legend": 59090,
      "ancient": 39084,
      "divine": 32234
    },
    "counters": [
      "medusa",
      "weaver",
      "terrorblade",
      "silencer",
      "morphling",
      "techies"
    ],
    "weakAgainst": [
      "treant-protector",
      "brewmaster",
      "marci",
      "timbersaw",
      "grimstroke",
      "necrophos"
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.512,
      "crusader": 0.505,
      "archon": 0.504,
      "legend": 0.495,
      "ancient": 0.496,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 11349,
      "guardian": 30437,
      "crusader": 36043,
      "archon": 34556,
      "legend": 24511,
      "ancient": 13242,
      "divine": 8257
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
    "overallWin": 0.446,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.425,
      "crusader": 0.424,
      "archon": 0.457,
      "legend": 0.445,
      "ancient": 0.446,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 952,
      "guardian": 2433,
      "crusader": 3165,
      "archon": 3331,
      "legend": 2496,
      "ancient": 1573,
      "divine": 1759
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.491,
      "crusader": 0.489,
      "archon": 0.491,
      "legend": 0.497,
      "ancient": 0.504,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 13150,
      "guardian": 31271,
      "crusader": 36192,
      "archon": 35598,
      "legend": 27707,
      "ancient": 17789,
      "divine": 14821
    },
    "counters": [
      "ancient-apparition",
      "skywrath-mage",
      "snapfire",
      "clockwerk",
      "dragon-knight",
      "ember-spirit"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "pudge",
      "slardar",
      "hoodwink",
      "templar-assassin",
      "luna"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Magic Wand",
      "Tango",
      "Magic Stick",
      "Observer Ward"
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.474,
      "crusader": 0.479,
      "archon": 0.478,
      "legend": 0.487,
      "ancient": 0.496,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 4273,
      "guardian": 13793,
      "crusader": 22042,
      "archon": 28014,
      "legend": 26671,
      "ancient": 20105,
      "divine": 20398
    },
    "counters": [
      "vengeful-spirit",
      "tidehunter",
      "luna",
      "silencer",
      "witch-doctor",
      "drow-ranger"
    ],
    "weakAgainst": [
      "venomancer",
      "clinkz",
      "monkey-king",
      "beastmaster",
      "leshrac",
      "bane"
    ],
    "startItems": [
      "Tango",
      "Iron Branch",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Smoke of Deceit",
      "Sentry Ward"
    ],
    "coreItems": [
      "Essence Distiller",
      "Staff of Wizardry",
      "Blink Dagger",
      "Eul's Scepter of Divinity",
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.537,
      "guardian": 0.53,
      "crusader": 0.518,
      "archon": 0.514,
      "legend": 0.509,
      "ancient": 0.503,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 23239,
      "guardian": 68736,
      "crusader": 91696,
      "archon": 98924,
      "legend": 78811,
      "ancient": 47718,
      "divine": 33998
    },
    "counters": [
      "pugna",
      "sniper",
      "necrophos",
      "luna",
      "legion-commander",
      "lich"
    ],
    "weakAgainst": [
      "razor",
      "batrider",
      "mirana",
      "techies",
      "kunkka",
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.487,
      "crusader": 0.484,
      "archon": 0.484,
      "legend": 0.487,
      "ancient": 0.488,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 4125,
      "guardian": 13069,
      "crusader": 18568,
      "archon": 20908,
      "legend": 19213,
      "ancient": 13658,
      "divine": 13568
    },
    "counters": [
      "queen-of-pain",
      "tusk",
      "puck",
      "jakiro",
      "dark-willow",
      "disruptor"
    ],
    "weakAgainst": [
      "phoenix",
      "ember-spirit",
      "templar-assassin",
      "tiny",
      "marci",
      "pudge"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Clarity",
      "Sage's Mask"
    ],
    "coreItems": [
      "Platemail",
      "Arcane Boots",
      "Blink Dagger",
      "Aghanim's Shard",
      "Guardian Greaves"
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.471,
      "crusader": 0.471,
      "archon": 0.47,
      "legend": 0.482,
      "ancient": 0.485,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 8671,
      "guardian": 23701,
      "crusader": 32788,
      "archon": 37698,
      "legend": 32533,
      "ancient": 21893,
      "divine": 19957
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.517,
      "crusader": 0.518,
      "archon": 0.519,
      "legend": 0.52,
      "ancient": 0.519,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 8100,
      "guardian": 27449,
      "crusader": 46876,
      "archon": 63261,
      "legend": 63082,
      "ancient": 44829,
      "divine": 39000
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.497,
      "crusader": 0.502,
      "archon": 0.509,
      "legend": 0.514,
      "ancient": 0.511,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 8006,
      "guardian": 26247,
      "crusader": 37587,
      "archon": 39748,
      "legend": 30005,
      "ancient": 17026,
      "divine": 11195
    },
    "counters": [
      "skywrath-mage",
      "dark-willow",
      "underlord",
      "ring-master",
      "warlock",
      "windranger"
    ],
    "weakAgainst": [
      "slardar",
      "shadow-demon",
      "void-spirit",
      "pugna",
      "weaver",
      "abaddon"
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.471,
      "crusader": 0.466,
      "archon": 0.47,
      "legend": 0.474,
      "ancient": 0.466,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 9361,
      "guardian": 21439,
      "crusader": 26549,
      "archon": 29208,
      "legend": 23875,
      "ancient": 14980,
      "divine": 12242
    },
    "counters": [
      "shadow-shaman",
      "slardar",
      "ogre-magi",
      "zeus",
      "dragon-knight"
    ],
    "weakAgainst": [
      "sniper",
      "marci",
      "spirit-breaker",
      "axe",
      "tiny",
      "hoodwink"
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
      "Blade of Alacrity"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.485,
      "crusader": 0.495,
      "archon": 0.497,
      "legend": 0.498,
      "ancient": 0.503,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 7196,
      "guardian": 26018,
      "crusader": 45224,
      "archon": 59359,
      "legend": 55705,
      "ancient": 38020,
      "divine": 31309
    },
    "counters": [
      "chaos-knight",
      "sven",
      "phantom-assassin",
      "outworld-devourer",
      "muerta",
      "phantom-lancer"
    ],
    "weakAgainst": [
      "broodmother",
      "kez",
      "io",
      "chen",
      "treant-protector",
      "drow-ranger"
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
      "herald": 0.446,
      "guardian": 0.446,
      "crusader": 0.451,
      "archon": 0.46,
      "legend": 0.471,
      "ancient": 0.478,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 6891,
      "guardian": 21898,
      "crusader": 32683,
      "archon": 40793,
      "legend": 37682,
      "ancient": 26655,
      "divine": 25094
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.499,
      "crusader": 0.496,
      "archon": 0.49,
      "legend": 0.487,
      "ancient": 0.482,
      "divine": 0.481
    },
    "pickByBracket": {
      "herald": 8203,
      "guardian": 23308,
      "crusader": 29551,
      "archon": 29712,
      "legend": 20825,
      "ancient": 10844,
      "divine": 6342
    },
    "counters": [
      "drow-ranger",
      "morphling",
      "troll-warlord",
      "naga-siren",
      "wraith-king",
      "pangolier"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "venomancer",
      "keeper-of-the-light",
      "treant-protector",
      "clinkz",
      "techies"
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
      "Claymore",
      "Blink Dagger",
      "Mithril Hammer",
      "Mask of Madness",
      "Broadsword"
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.507,
      "crusader": 0.508,
      "archon": 0.512,
      "legend": 0.514,
      "ancient": 0.519,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 26389,
      "guardian": 77125,
      "crusader": 109288,
      "archon": 124069,
      "legend": 106824,
      "ancient": 67772,
      "divine": 52780
    },
    "counters": [
      "underlord",
      "kez",
      "bristleback",
      "disruptor",
      "pudge",
      "spirit-breaker"
    ],
    "weakAgainst": [
      "dragon-knight",
      "treant-protector",
      "warlock",
      "slardar",
      "queen-of-pain",
      "shadow-demon"
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.477,
      "crusader": 0.49,
      "archon": 0.496,
      "legend": 0.506,
      "ancient": 0.516,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 3211,
      "guardian": 12279,
      "crusader": 22741,
      "archon": 32504,
      "legend": 36170,
      "ancient": 29134,
      "divine": 29978
    },
    "counters": [
      "timbersaw",
      "rubick",
      "pudge",
      "lion",
      "queen-of-pain",
      "lina"
    ],
    "weakAgainst": [
      "ember-spirit",
      "ring-master",
      "puck",
      "snapfire",
      "luna",
      "gyrocopter"
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
      "Black King Bar",
      "Spirit Vessel",
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.493,
      "crusader": 0.501,
      "archon": 0.501,
      "legend": 0.506,
      "ancient": 0.506,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 21527,
      "guardian": 64964,
      "crusader": 92861,
      "archon": 107643,
      "legend": 92386,
      "ancient": 59236,
      "divine": 44534
    },
    "counters": [
      "sven",
      "primal-beast",
      "wraith-king",
      "sniper",
      "undying",
      "axe"
    ],
    "weakAgainst": [
      "monkey-king",
      "bane",
      "enchantress",
      "necrophos",
      "void-spirit",
      "spirit-breaker"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Circlet",
      "Gauntlets of Strength",
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.498,
      "crusader": 0.489,
      "archon": 0.496,
      "legend": 0.517,
      "ancient": 0.523,
      "divine": 0.537
    },
    "pickByBracket": {
      "herald": 1836,
      "guardian": 5387,
      "crusader": 7032,
      "archon": 7377,
      "legend": 6044,
      "ancient": 3961,
      "divine": 3804
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Smoke of Deceit",
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.451,
      "guardian": 0.468,
      "crusader": 0.482,
      "archon": 0.494,
      "legend": 0.496,
      "ancient": 0.508,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 5912,
      "guardian": 19493,
      "crusader": 32125,
      "archon": 44173,
      "legend": 46126,
      "ancient": 34873,
      "divine": 33934
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Quelling Blade",
      "Blood Grenade"
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
      "herald": 0.483,
      "guardian": 0.482,
      "crusader": 0.474,
      "archon": 0.478,
      "legend": 0.471,
      "ancient": 0.476,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 7863,
      "guardian": 17247,
      "crusader": 17987,
      "archon": 16284,
      "legend": 12086,
      "ancient": 7631,
      "divine": 6572
    },
    "counters": [
      "earthshaker",
      "ursa",
      "disruptor",
      "clockwerk",
      "void-spirit",
      "lifestealer"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "marci",
      "slardar",
      "juggernaut",
      "gyrocopter",
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.486,
      "crusader": 0.491,
      "archon": 0.491,
      "legend": 0.504,
      "ancient": 0.518,
      "divine": 0.545
    },
    "pickByBracket": {
      "herald": 7232,
      "guardian": 20518,
      "crusader": 27410,
      "archon": 27456,
      "legend": 20393,
      "ancient": 11963,
      "divine": 10122
    },
    "counters": [
      "shadow-fiend",
      "ursa",
      "windranger",
      "jakiro",
      "disruptor",
      "mars"
    ],
    "weakAgainst": [
      "hoodwink",
      "tusk"
    ],
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
      "herald": 0.501,
      "guardian": 0.489,
      "crusader": 0.488,
      "archon": 0.493,
      "legend": 0.499,
      "ancient": 0.493,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 14805,
      "guardian": 47426,
      "crusader": 68451,
      "archon": 77689,
      "legend": 64411,
      "ancient": 40222,
      "divine": 31458
    },
    "counters": [
      "templar-assassin",
      "dawnbreaker",
      "primal-beast",
      "storm-spirit",
      "abaddon",
      "ursa"
    ],
    "weakAgainst": [
      "tidehunter",
      "sniper",
      "juggernaut",
      "muerta",
      "keeper-of-the-light",
      "axe"
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.515,
      "crusader": 0.514,
      "archon": 0.516,
      "legend": 0.516,
      "ancient": 0.514,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 6898,
      "guardian": 24510,
      "crusader": 39666,
      "archon": 49121,
      "legend": 44817,
      "ancient": 29973,
      "divine": 24752
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
    "overallWin": 0.429,
    "winByBracket": {
      "herald": 0.421,
      "guardian": 0.431,
      "crusader": 0.429,
      "archon": 0.425,
      "legend": 0.431,
      "ancient": 0.425,
      "divine": 0.437
    },
    "pickByBracket": {
      "herald": 4676,
      "guardian": 13742,
      "crusader": 20395,
      "archon": 23758,
      "legend": 20202,
      "ancient": 12277,
      "divine": 8159
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.476,
      "crusader": 0.479,
      "archon": 0.481,
      "legend": 0.48,
      "ancient": 0.484,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 14290,
      "guardian": 41750,
      "crusader": 60370,
      "archon": 70993,
      "legend": 61733,
      "ancient": 40734,
      "divine": 34835
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
    "overallWin": 0.445,
    "winByBracket": {
      "herald": 0.444,
      "guardian": 0.435,
      "crusader": 0.441,
      "archon": 0.447,
      "legend": 0.455,
      "ancient": 0.452,
      "divine": 0.45
    },
    "pickByBracket": {
      "herald": 11972,
      "guardian": 25581,
      "crusader": 27958,
      "archon": 26215,
      "legend": 20273,
      "ancient": 12382,
      "divine": 9657
    },
    "counters": [
      "silencer",
      "storm-spirit",
      "tidehunter",
      "razor",
      "spirit-breaker",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "nature-s-prophet",
      "hoodwink",
      "marci",
      "beastmaster",
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.497,
      "crusader": 0.508,
      "archon": 0.508,
      "legend": 0.517,
      "ancient": 0.518,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 18929,
      "guardian": 65458,
      "crusader": 109621,
      "archon": 139390,
      "legend": 128276,
      "ancient": 86437,
      "divine": 72842
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.5,
      "crusader": 0.506,
      "archon": 0.504,
      "legend": 0.509,
      "ancient": 0.515,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 6914,
      "guardian": 21272,
      "crusader": 31165,
      "archon": 34969,
      "legend": 28127,
      "ancient": 18429,
      "divine": 15489
    },
    "counters": [
      "disruptor",
      "jakiro",
      "ember-spirit",
      "hoodwink",
      "snapfire",
      "luna"
    ],
    "weakAgainst": [
      "pudge",
      "lion",
      "rubick"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Ring of Regen",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Headdress"
    ],
    "coreItems": [
      "Mekansm",
      "Holy Locket",
      "Ogre Axe",
      "Point Booster",
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.487,
      "crusader": 0.484,
      "archon": 0.477,
      "legend": 0.468,
      "ancient": 0.462,
      "divine": 0.451
    },
    "pickByBracket": {
      "herald": 16143,
      "guardian": 51441,
      "crusader": 75537,
      "archon": 85869,
      "legend": 69279,
      "ancient": 39985,
      "divine": 26485
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.51,
      "crusader": 0.516,
      "archon": 0.519,
      "legend": 0.521,
      "ancient": 0.519,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 25046,
      "guardian": 76711,
      "crusader": 111742,
      "archon": 128763,
      "legend": 107826,
      "ancient": 63679,
      "divine": 43412
    },
    "counters": [
      "zeus",
      "magnus",
      "legion-commander",
      "pangolier",
      "faceless-void",
      "phoenix"
    ],
    "weakAgainst": [
      "sniper",
      "abaddon",
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.492,
      "crusader": 0.492,
      "archon": 0.503,
      "legend": 0.509,
      "ancient": 0.522,
      "divine": 0.536
    },
    "pickByBracket": {
      "herald": 11647,
      "guardian": 33962,
      "crusader": 47299,
      "archon": 52900,
      "legend": 44929,
      "ancient": 29471,
      "divine": 26946
    },
    "counters": [
      "warlock",
      "kez",
      "phoenix",
      "queen-of-pain",
      "abaddon",
      "silencer"
    ],
    "weakAgainst": [
      "treant-protector",
      "batrider",
      "monkey-king",
      "primal-beast",
      "pudge",
      "slardar"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Circlet"
    ],
    "coreItems": [
      "Holy Locket",
      "Staff of Wizardry",
      "Force Staff",
      "Glimmer Cape",
      "Point Booster"
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
      "herald": 0.467,
      "guardian": 0.451,
      "crusader": 0.449,
      "archon": 0.443,
      "legend": 0.445,
      "ancient": 0.448,
      "divine": 0.443
    },
    "pickByBracket": {
      "herald": 6513,
      "guardian": 17597,
      "crusader": 25097,
      "archon": 30003,
      "legend": 27900,
      "ancient": 19422,
      "divine": 18673
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.48,
      "crusader": 0.486,
      "archon": 0.495,
      "legend": 0.5,
      "ancient": 0.493,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 7811,
      "guardian": 21900,
      "crusader": 31079,
      "archon": 37181,
      "legend": 33645,
      "ancient": 21309,
      "divine": 16320
    },
    "counters": [
      "bristleback",
      "abaddon",
      "weaver",
      "hoodwink",
      "tiny",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "templar-assassin",
      "shadow-shaman",
      "necrophos",
      "shadow-demon",
      "storm-spirit",
      "phoenix"
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
      "herald": 0.464,
      "guardian": 0.452,
      "crusader": 0.465,
      "archon": 0.474,
      "legend": 0.481,
      "ancient": 0.484,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 2442,
      "guardian": 7180,
      "crusader": 10864,
      "archon": 13761,
      "legend": 12915,
      "ancient": 9088,
      "divine": 9004
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.532,
      "guardian": 0.531,
      "crusader": 0.525,
      "archon": 0.528,
      "legend": 0.521,
      "ancient": 0.521,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 21027,
      "guardian": 71883,
      "crusader": 106832,
      "archon": 119634,
      "legend": 96085,
      "ancient": 55587,
      "divine": 36850
    },
    "counters": [
      "luna",
      "timbersaw",
      "bristleback",
      "shadow-shaman",
      "silencer",
      "ursa"
    ],
    "weakAgainst": [
      "tusk",
      "abaddon",
      "juggernaut",
      "vengeful-spirit",
      "shadow-fiend",
      "hoodwink"
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.509,
      "crusader": 0.514,
      "archon": 0.517,
      "legend": 0.512,
      "ancient": 0.516,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 4074,
      "guardian": 11940,
      "crusader": 17893,
      "archon": 21098,
      "legend": 18105,
      "ancient": 11722,
      "divine": 9584
    },
    "counters": [
      "silencer",
      "lina",
      "lycan",
      "slark",
      "clockwerk",
      "muerta"
    ],
    "weakAgainst": [
      "magnus",
      "bane",
      "dawnbreaker",
      "dazzle",
      "abaddon",
      "batrider"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Circlet",
      "Mantle of Intelligence"
    ],
    "coreItems": [
      "Kaya",
      "Staff of Wizardry",
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
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.523,
      "guardian": 0.525,
      "crusader": 0.523,
      "archon": 0.527,
      "legend": 0.526,
      "ancient": 0.519,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 13555,
      "guardian": 42011,
      "crusader": 64408,
      "archon": 79707,
      "legend": 72403,
      "ancient": 48795,
      "divine": 38318
    },
    "counters": [
      "sven",
      "ursa",
      "ring-master",
      "sand-king",
      "wraith-king",
      "winter-wyvern"
    ],
    "weakAgainst": [
      "treant-protector",
      "kez",
      "sniper",
      "keeper-of-the-light",
      "muerta",
      "monkey-king"
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
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.515,
      "crusader": 0.519,
      "archon": 0.522,
      "legend": 0.53,
      "ancient": 0.53,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 12325,
      "guardian": 41576,
      "crusader": 67366,
      "archon": 85090,
      "legend": 78294,
      "ancient": 50976,
      "divine": 39489
    },
    "counters": [
      "witch-doctor",
      "night-stalker",
      "dark-willow",
      "phantom-assassin",
      "muerta",
      "vengeful-spirit"
    ],
    "weakAgainst": [
      "morphling",
      "alchemist",
      "kez",
      "doom",
      "slardar",
      "phoenix"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Quelling Blade",
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Magic Stick"
    ],
    "coreItems": [
      "Sacred Relic",
      "Radiance",
      "Talisman of Evasion",
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.484,
      "crusader": 0.491,
      "archon": 0.494,
      "legend": 0.503,
      "ancient": 0.501,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 26615,
      "guardian": 74411,
      "crusader": 108638,
      "archon": 130467,
      "legend": 115678,
      "ancient": 74814,
      "divine": 60936
    },
    "counters": [
      "underlord",
      "abaddon",
      "dark-willow",
      "phoenix",
      "axe",
      "death-prophet"
    ],
    "weakAgainst": [
      "pangolier",
      "monkey-king",
      "leshrac",
      "invoker",
      "timbersaw",
      "slardar"
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.49,
      "crusader": 0.488,
      "archon": 0.486,
      "legend": 0.484,
      "ancient": 0.484,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 33098,
      "guardian": 109960,
      "crusader": 168185,
      "archon": 197897,
      "legend": 169350,
      "ancient": 104859,
      "divine": 77153
    },
    "counters": [
      "sven",
      "dark-willow",
      "grimstroke",
      "troll-warlord",
      "razor",
      "tinker"
    ],
    "weakAgainst": [
      "lycan",
      "treant-protector",
      "undying",
      "monkey-king",
      "earth-spirit",
      "abaddon"
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
      "Mithril Hammer"
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.481,
      "crusader": 0.479,
      "archon": 0.48,
      "legend": 0.49,
      "ancient": 0.492,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 2928,
      "guardian": 9069,
      "crusader": 13582,
      "archon": 15828,
      "legend": 13683,
      "ancient": 8847,
      "divine": 8500
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.511,
      "crusader": 0.505,
      "archon": 0.498,
      "legend": 0.494,
      "ancient": 0.496,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 15191,
      "guardian": 45001,
      "crusader": 65457,
      "archon": 76775,
      "legend": 69375,
      "ancient": 47107,
      "divine": 40539
    },
    "counters": [
      "morphling",
      "sand-king",
      "phantom-assassin",
      "earthshaker",
      "sniper",
      "mars"
    ],
    "weakAgainst": [
      "clockwerk",
      "legion-commander",
      "techies",
      "keeper-of-the-light",
      "monkey-king",
      "abaddon"
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
      "Diadem",
      "Manta Style",
      "Yasha",
      "Dragon Lance"
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.465,
      "crusader": 0.47,
      "archon": 0.477,
      "legend": 0.491,
      "ancient": 0.495,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 2449,
      "guardian": 7248,
      "crusader": 9738,
      "archon": 10621,
      "legend": 9166,
      "ancient": 6083,
      "divine": 6188
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.474,
      "crusader": 0.473,
      "archon": 0.481,
      "legend": 0.489,
      "ancient": 0.491,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 7562,
      "guardian": 32127,
      "crusader": 63275,
      "archon": 90572,
      "legend": 89061,
      "ancient": 60620,
      "divine": 47430
    },
    "counters": [
      "phoenix",
      "leshrac",
      "pudge",
      "void-spirit",
      "faceless-void",
      "weaver"
    ],
    "weakAgainst": [
      "juggernaut",
      "beastmaster",
      "rubick",
      "invoker",
      "shadow-shaman",
      "tusk"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Quelling Blade",
      "Faerie Fire",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ogre Axe",
      "Broadsword",
      "Echo Sabre",
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.484,
      "crusader": 0.485,
      "archon": 0.495,
      "legend": 0.504,
      "ancient": 0.508,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 7173,
      "guardian": 19100,
      "crusader": 24716,
      "archon": 27962,
      "legend": 23913,
      "ancient": 15930,
      "divine": 13922
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
    "overallWin": 0.466,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.467,
      "crusader": 0.462,
      "archon": 0.47,
      "legend": 0.467,
      "ancient": 0.466,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 4709,
      "guardian": 14857,
      "crusader": 25173,
      "archon": 34191,
      "legend": 34660,
      "ancient": 25452,
      "divine": 22462
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.501,
      "crusader": 0.499,
      "archon": 0.5,
      "legend": 0.493,
      "ancient": 0.482,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 5817,
      "guardian": 18354,
      "crusader": 25921,
      "archon": 28475,
      "legend": 22828,
      "ancient": 12630,
      "divine": 8394
    },
    "counters": [
      "weaver",
      "undying",
      "warlock",
      "templar-assassin",
      "sand-king",
      "beastmaster"
    ],
    "weakAgainst": [
      "shadow-demon",
      "ogre-magi",
      "shadow-shaman",
      "centaur-warrunner",
      "dawnbreaker",
      "troll-warlord"
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.496,
      "crusader": 0.498,
      "archon": 0.508,
      "legend": 0.512,
      "ancient": 0.527,
      "divine": 0.54
    },
    "pickByBracket": {
      "herald": 3909,
      "guardian": 9868,
      "crusader": 11979,
      "archon": 11380,
      "legend": 8418,
      "ancient": 5104,
      "divine": 4139
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.516,
      "crusader": 0.513,
      "archon": 0.51,
      "legend": 0.513,
      "ancient": 0.508,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 10417,
      "guardian": 36436,
      "crusader": 56517,
      "archon": 67011,
      "legend": 59665,
      "ancient": 40017,
      "divine": 33046
    },
    "counters": [
      "storm-spirit",
      "crystal-maiden",
      "ogre-magi",
      "queen-of-pain",
      "lion",
      "lifestealer"
    ],
    "weakAgainst": [
      "tusk",
      "sniper",
      "tidehunter",
      "jakiro",
      "templar-assassin"
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
      "Mekansm",
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
    "overallWin": 0.442,
    "winByBracket": {
      "herald": 0.444,
      "guardian": 0.433,
      "crusader": 0.433,
      "archon": 0.439,
      "legend": 0.446,
      "ancient": 0.454,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 9928,
      "guardian": 27445,
      "crusader": 36016,
      "archon": 40074,
      "legend": 34890,
      "ancient": 23074,
      "divine": 18981
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.466,
      "crusader": 0.472,
      "archon": 0.469,
      "legend": 0.468,
      "ancient": 0.471,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 5496,
      "guardian": 17647,
      "crusader": 24981,
      "archon": 28194,
      "legend": 23254,
      "ancient": 15718,
      "divine": 13143
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
      "doom",
      "windranger",
      "sniper",
      "axe",
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
    "overallWin": 0.465,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.476,
      "crusader": 0.466,
      "archon": 0.463,
      "legend": 0.459,
      "ancient": 0.463,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 7689,
      "guardian": 19056,
      "crusader": 25345,
      "archon": 27496,
      "legend": 23486,
      "ancient": 15415,
      "divine": 12671
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.481,
      "crusader": 0.468,
      "archon": 0.465,
      "legend": 0.473,
      "ancient": 0.479,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 6431,
      "guardian": 15659,
      "crusader": 16541,
      "archon": 13005,
      "legend": 8646,
      "ancient": 4519,
      "divine": 3218
    },
    "counters": [
      "axe",
      "hoodwink",
      "pangolier",
      "puck",
      "pudge",
      "tiny"
    ],
    "weakAgainst": [
      "storm-spirit",
      "terrorblade",
      "sand-king",
      "ember-spirit",
      "dragon-knight",
      "queen-of-pain"
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
    "overallWin": 0.428,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.435,
      "crusader": 0.424,
      "archon": 0.42,
      "legend": 0.423,
      "ancient": 0.434,
      "divine": 0.438
    },
    "pickByBracket": {
      "herald": 16315,
      "guardian": 47315,
      "crusader": 62476,
      "archon": 66167,
      "legend": 52811,
      "ancient": 32429,
      "divine": 25380
    },
    "counters": [
      "razor",
      "huskar",
      "sniper",
      "pangolier",
      "bristleback",
      "witch-doctor"
    ],
    "weakAgainst": [
      "bane",
      "nyx-assassin",
      "zeus",
      "timbersaw",
      "naga-siren",
      "juggernaut"
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
      "Mjollnir",
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.551,
      "guardian": 0.535,
      "crusader": 0.531,
      "archon": 0.524,
      "legend": 0.519,
      "ancient": 0.515,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 23139,
      "guardian": 75216,
      "crusader": 111609,
      "archon": 130026,
      "legend": 111675,
      "ancient": 69769,
      "divine": 53844
    },
    "counters": [
      "void-spirit",
      "witch-doctor",
      "underlord",
      "bristleback",
      "earthshaker",
      "kunkka"
    ],
    "weakAgainst": [
      "beastmaster",
      "crystal-maiden",
      "pangolier",
      "keeper-of-the-light",
      "grimstroke",
      "invoker"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Circlet",
      "Tango",
      "Magic Stick",
      "Observer Ward"
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.499,
      "crusader": 0.511,
      "archon": 0.524,
      "legend": 0.533,
      "ancient": 0.541,
      "divine": 0.542
    },
    "pickByBracket": {
      "herald": 6626,
      "guardian": 22028,
      "crusader": 37388,
      "archon": 52047,
      "legend": 53210,
      "ancient": 37534,
      "divine": 33943
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.515,
      "crusader": 0.519,
      "archon": 0.522,
      "legend": 0.521,
      "ancient": 0.521,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 8334,
      "guardian": 26943,
      "crusader": 41608,
      "archon": 50924,
      "legend": 46024,
      "ancient": 30846,
      "divine": 25664
    },
    "counters": [
      "bristleback",
      "void-spirit",
      "dark-willow",
      "timbersaw",
      "puck",
      "tidehunter"
    ],
    "weakAgainst": [
      "largo",
      "pudge",
      "pangolier",
      "terrorblade",
      "phoenix"
    ],
    "startItems": [
      "Iron Branch",
      "Blood Grenade",
      "Tango",
      "Boots of Speed",
      "Observer and Sentry Wards",
      "Sentry Ward"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Blink Dagger",
      "Eul's Scepter of Divinity",
      "Arcane Boots",
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
      "herald": 0.534,
      "guardian": 0.517,
      "crusader": 0.514,
      "archon": 0.507,
      "legend": 0.504,
      "ancient": 0.498,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 27250,
      "guardian": 90247,
      "crusader": 127657,
      "archon": 138525,
      "legend": 107543,
      "ancient": 60006,
      "divine": 37794
    },
    "counters": [
      "medusa",
      "winter-wyvern",
      "bristleback",
      "primal-beast",
      "phantom-lancer",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "pugna",
      "phoenix",
      "mirana",
      "treant-protector",
      "alchemist",
      "leshrac"
    ],
    "startItems": [
      "Tango",
      "Iron Branch",
      "Gauntlets of Strength",
      "Observer and Sentry Wards",
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.488,
      "crusader": 0.495,
      "archon": 0.504,
      "legend": 0.5,
      "ancient": 0.513,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 5106,
      "guardian": 14869,
      "crusader": 20329,
      "archon": 22050,
      "legend": 18164,
      "ancient": 11396,
      "divine": 8671
    },
    "counters": [
      "tiny",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "windranger",
      "pudge",
      "rubick",
      "ember-spirit"
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.463,
      "crusader": 0.479,
      "archon": 0.49,
      "legend": 0.502,
      "ancient": 0.5,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 4872,
      "guardian": 15897,
      "crusader": 25673,
      "archon": 31854,
      "legend": 29392,
      "ancient": 20477,
      "divine": 17610
    },
    "counters": [
      "batrider",
      "invoker",
      "puck",
      "tiny",
      "mars",
      "ursa"
    ],
    "weakAgainst": [
      "windranger",
      "jakiro",
      "tusk",
      "snapfire",
      "queen-of-pain",
      "pudge"
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
      "herald": 0.462,
      "guardian": 0.482,
      "crusader": 0.498,
      "archon": 0.505,
      "legend": 0.501,
      "ancient": 0.495,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 6402,
      "guardian": 18708,
      "crusader": 27447,
      "archon": 33508,
      "legend": 28605,
      "ancient": 17635,
      "divine": 12390
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
    "overallWin": 0.455,
    "winByBracket": {
      "herald": 0.44,
      "guardian": 0.434,
      "crusader": 0.455,
      "archon": 0.453,
      "legend": 0.456,
      "ancient": 0.465,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 2957,
      "guardian": 9293,
      "crusader": 14792,
      "archon": 20127,
      "legend": 21062,
      "ancient": 16614,
      "divine": 17087
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.517,
      "crusader": 0.511,
      "archon": 0.508,
      "legend": 0.498,
      "ancient": 0.493,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 31276,
      "guardian": 88254,
      "crusader": 110968,
      "archon": 109550,
      "legend": 78800,
      "ancient": 42900,
      "divine": 26097
    },
    "counters": [
      "ogre-magi",
      "dragon-knight",
      "lion",
      "tiny"
    ],
    "weakAgainst": [
      "rubick",
      "pudge",
      "lifestealer",
      "queen-of-pain",
      "luna",
      "disruptor"
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.516,
      "crusader": 0.513,
      "archon": 0.515,
      "legend": 0.517,
      "ancient": 0.518,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 17987,
      "guardian": 53137,
      "crusader": 71688,
      "archon": 74803,
      "legend": 58233,
      "ancient": 35536,
      "divine": 29485
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
      "hoodwink",
      "windranger",
      "rubick",
      "dawnbreaker"
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.503,
      "crusader": 0.512,
      "archon": 0.508,
      "legend": 0.5,
      "ancient": 0.504,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 4961,
      "guardian": 17871,
      "crusader": 30507,
      "archon": 39707,
      "legend": 37452,
      "ancient": 25531,
      "divine": 24479
    },
    "counters": [
      "dark-seer",
      "sand-king",
      "void-spirit",
      "underlord",
      "techies",
      "razor"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "magnus",
      "juggernaut",
      "dazzle",
      "bane",
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
      "Solar Crest",
      "Pavise",
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.483,
      "crusader": 0.476,
      "archon": 0.472,
      "legend": 0.479,
      "ancient": 0.493,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 4473,
      "guardian": 13807,
      "crusader": 19256,
      "archon": 21365,
      "legend": 17877,
      "ancient": 12353,
      "divine": 11519
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.437,
      "guardian": 0.453,
      "crusader": 0.456,
      "archon": 0.465,
      "legend": 0.476,
      "ancient": 0.484,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 4233,
      "guardian": 13413,
      "crusader": 21109,
      "archon": 27461,
      "legend": 26849,
      "ancient": 19770,
      "divine": 19976
    },
    "counters": [
      "weaver",
      "dark-willow",
      "silencer",
      "razor",
      "sven",
      "underlord"
    ],
    "weakAgainst": [
      "naga-siren",
      "nyx-assassin",
      "bounty-hunter",
      "dark-seer",
      "morphling",
      "oracle"
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
      "herald": 0.52,
      "guardian": 0.521,
      "crusader": 0.516,
      "archon": 0.517,
      "legend": 0.509,
      "ancient": 0.511,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 35378,
      "guardian": 124713,
      "crusader": 194126,
      "archon": 219838,
      "legend": 179511,
      "ancient": 111802,
      "divine": 90907
    },
    "counters": [
      "io",
      "wraith-king",
      "clinkz",
      "phantom-assassin",
      "morphling",
      "warlock"
    ],
    "weakAgainst": [
      "largo",
      "lycan",
      "earth-spirit",
      "naga-siren",
      "batrider",
      "slark"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Gauntlets of Strength",
      "Boots of Speed",
      "Observer and Sentry Wards",
      "Blood Grenade"
    ],
    "coreItems": [
      "Blink Dagger",
      "Aether Lens",
      "Staff of Wizardry",
      "Ogre Axe",
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.487,
      "crusader": 0.487,
      "archon": 0.497,
      "legend": 0.506,
      "ancient": 0.503,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 7158,
      "guardian": 20069,
      "crusader": 27366,
      "archon": 29569,
      "legend": 24647,
      "ancient": 15451,
      "divine": 11360
    },
    "counters": [
      "dark-willow",
      "ogre-magi",
      "night-stalker",
      "tusk",
      "beastmaster",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "terrorblade",
      "bristleback",
      "crystal-maiden",
      "naga-siren",
      "centaur-warrunner",
      "clockwerk"
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
    "overallWin": 0.464,
    "winByBracket": {
      "herald": 0.463,
      "guardian": 0.465,
      "crusader": 0.464,
      "archon": 0.462,
      "legend": 0.463,
      "ancient": 0.464,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 12950,
      "guardian": 41935,
      "crusader": 65670,
      "archon": 81502,
      "legend": 71754,
      "ancient": 46062,
      "divine": 35519
    },
    "counters": [
      "phantom-lancer",
      "drow-ranger",
      "chaos-knight",
      "phantom-assassin",
      "timbersaw",
      "sand-king"
    ],
    "weakAgainst": [
      "largo",
      "keeper-of-the-light",
      "treant-protector",
      "chen",
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.502,
      "crusader": 0.501,
      "archon": 0.497,
      "legend": 0.5,
      "ancient": 0.5,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 12742,
      "guardian": 32135,
      "crusader": 41078,
      "archon": 44293,
      "legend": 36938,
      "ancient": 22631,
      "divine": 15999
    },
    "counters": [
      "crystal-maiden",
      "gyrocopter",
      "silencer",
      "primal-beast",
      "tidehunter",
      "warlock"
    ],
    "weakAgainst": [
      "treant-protector",
      "phoenix",
      "huskar",
      "nature-s-prophet",
      "doom",
      "pudge"
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
      "Yasha",
      "Ogre Axe",
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.515,
      "crusader": 0.521,
      "archon": 0.523,
      "legend": 0.518,
      "ancient": 0.515,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 13159,
      "guardian": 33626,
      "crusader": 41740,
      "archon": 42546,
      "legend": 31485,
      "ancient": 18754,
      "divine": 12753
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.472,
      "crusader": 0.471,
      "archon": 0.477,
      "legend": 0.48,
      "ancient": 0.477,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 4691,
      "guardian": 16881,
      "crusader": 27500,
      "archon": 36674,
      "legend": 36570,
      "ancient": 26467,
      "divine": 25575
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.484,
      "crusader": 0.485,
      "archon": 0.491,
      "legend": 0.495,
      "ancient": 0.494,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 15306,
      "guardian": 55690,
      "crusader": 99022,
      "archon": 137288,
      "legend": 137265,
      "ancient": 95788,
      "divine": 80542
    },
    "counters": [
      "phantom-assassin",
      "phantom-lancer",
      "weaver",
      "magnus",
      "sven",
      "brewmaster"
    ],
    "weakAgainst": [
      "earth-spirit",
      "lone-druid",
      "broodmother",
      "lycan",
      "leshrac",
      "abaddon"
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.504,
      "crusader": 0.492,
      "archon": 0.48,
      "legend": 0.47,
      "ancient": 0.465,
      "divine": 0.459
    },
    "pickByBracket": {
      "herald": 8501,
      "guardian": 24214,
      "crusader": 31879,
      "archon": 33013,
      "legend": 26104,
      "ancient": 15505,
      "divine": 10387
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
      "phoenix",
      "warlock",
      "luna",
      "alchemist",
      "abaddon",
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
    "overallWin": 0.444,
    "winByBracket": {
      "herald": 0.419,
      "guardian": 0.43,
      "crusader": 0.436,
      "archon": 0.444,
      "legend": 0.448,
      "ancient": 0.458,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 3189,
      "guardian": 9708,
      "crusader": 14125,
      "archon": 17193,
      "legend": 15673,
      "ancient": 10851,
      "divine": 9306
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
      "herald": 0.493,
      "guardian": 0.491,
      "crusader": 0.489,
      "archon": 0.484,
      "legend": 0.482,
      "ancient": 0.481,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 24467,
      "guardian": 75319,
      "crusader": 112823,
      "archon": 132029,
      "legend": 113987,
      "ancient": 74982,
      "divine": 64113
    },
    "counters": [
      "night-stalker",
      "morphling",
      "legion-commander",
      "medusa",
      "tinker",
      "undying"
    ],
    "weakAgainst": [
      "enigma",
      "lone-druid",
      "alchemist",
      "monkey-king",
      "phoenix",
      "venomancer"
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.518,
      "crusader": 0.518,
      "archon": 0.518,
      "legend": 0.518,
      "ancient": 0.517,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 25986,
      "guardian": 80297,
      "crusader": 111223,
      "archon": 121571,
      "legend": 97134,
      "ancient": 57310,
      "divine": 39437
    },
    "counters": [
      "medusa",
      "kunkka",
      "grimstroke",
      "morphling",
      "magnus",
      "bristleback"
    ],
    "weakAgainst": [
      "beastmaster",
      "wraith-king",
      "death-prophet",
      "lycan",
      "dazzle",
      "hoodwink"
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.525,
      "guardian": 0.521,
      "crusader": 0.514,
      "archon": 0.509,
      "legend": 0.504,
      "ancient": 0.506,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 15319,
      "guardian": 53902,
      "crusader": 81006,
      "archon": 92397,
      "legend": 77482,
      "ancient": 47052,
      "divine": 33551
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
      "crusader": 0.504,
      "archon": 0.5,
      "legend": 0.5,
      "ancient": 0.497,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 20099,
      "guardian": 62213,
      "crusader": 87949,
      "archon": 96987,
      "legend": 79624,
      "ancient": 48972,
      "divine": 37118
    },
    "counters": [
      "death-prophet",
      "witch-doctor",
      "ancient-apparition",
      "dragon-knight",
      "phantom-lancer",
      "bane"
    ],
    "weakAgainst": [
      "treant-protector",
      "lycan",
      "monkey-king",
      "dazzle",
      "clinkz",
      "phoenix"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.507,
      "crusader": 0.505,
      "archon": 0.498,
      "legend": 0.496,
      "ancient": 0.495,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 12720,
      "guardian": 38988,
      "crusader": 53606,
      "archon": 60725,
      "legend": 51453,
      "ancient": 31839,
      "divine": 24461
    },
    "counters": [
      "drow-ranger",
      "lifestealer",
      "lina",
      "weaver",
      "grimstroke",
      "viper"
    ],
    "weakAgainst": [
      "marci",
      "vengeful-spirit",
      "faceless-void",
      "phantom-lancer",
      "treant-protector",
      "naga-siren"
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.501,
      "crusader": 0.496,
      "archon": 0.488,
      "legend": 0.489,
      "ancient": 0.492,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 13081,
      "guardian": 44100,
      "crusader": 68266,
      "archon": 81984,
      "legend": 70822,
      "ancient": 45019,
      "divine": 33774
    },
    "counters": [
      "warlock",
      "beastmaster",
      "pudge",
      "tidehunter",
      "storm-spirit",
      "ogre-magi"
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
      "Quelling Blade",
      "Magic Stick",
      "Faerie Fire",
      "Circlet"
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
    "overallWin": 0.533,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.523,
      "crusader": 0.532,
      "archon": 0.536,
      "legend": 0.536,
      "ancient": 0.535,
      "divine": 0.531
    },
    "pickByBracket": {
      "herald": 17400,
      "guardian": 63209,
      "crusader": 111398,
      "archon": 152375,
      "legend": 147847,
      "ancient": 101726,
      "divine": 85242
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.512,
      "crusader": 0.506,
      "archon": 0.5,
      "legend": 0.492,
      "ancient": 0.489,
      "divine": 0.478
    },
    "pickByBracket": {
      "herald": 37935,
      "guardian": 112059,
      "crusader": 155508,
      "archon": 167327,
      "legend": 127903,
      "ancient": 69354,
      "divine": 40651
    },
    "counters": [
      "death-prophet",
      "weaver",
      "witch-doctor",
      "morphling",
      "lich",
      "sven"
    ],
    "weakAgainst": [
      "ember-spirit",
      "nature-s-prophet",
      "earthshaker",
      "crystal-maiden",
      "ring-master",
      "luna"
    ],
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
      "herald": 0.557,
      "guardian": 0.55,
      "crusader": 0.544,
      "archon": 0.541,
      "legend": 0.539,
      "ancient": 0.537,
      "divine": 0.535
    },
    "pickByBracket": {
      "herald": 17335,
      "guardian": 59798,
      "crusader": 88371,
      "archon": 101821,
      "legend": 85814,
      "ancient": 54284,
      "divine": 42634
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.517,
      "crusader": 0.518,
      "archon": 0.517,
      "legend": 0.517,
      "ancient": 0.521,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 24014,
      "guardian": 72444,
      "crusader": 100398,
      "archon": 113836,
      "legend": 96093,
      "ancient": 59749,
      "divine": 45841
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.465,
      "crusader": 0.466,
      "archon": 0.469,
      "legend": 0.471,
      "ancient": 0.478,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 9277,
      "guardian": 27840,
      "crusader": 41009,
      "archon": 48283,
      "legend": 43494,
      "ancient": 30714,
      "divine": 25745
    },
    "counters": [
      "naga-siren",
      "sven",
      "techies",
      "templar-assassin",
      "death-prophet",
      "medusa"
    ],
    "weakAgainst": [
      "mirana",
      "chen",
      "treant-protector",
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.503,
      "crusader": 0.506,
      "archon": 0.501,
      "legend": 0.502,
      "ancient": 0.504,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 13434,
      "guardian": 36319,
      "crusader": 47774,
      "archon": 50407,
      "legend": 39822,
      "ancient": 24954,
      "divine": 17907
    },
    "counters": [
      "phantom-lancer",
      "skywrath-mage",
      "dark-seer",
      "legion-commander",
      "zeus",
      "axe"
    ],
    "weakAgainst": [
      "earthshaker",
      "lycan",
      "void-spirit",
      "lich",
      "sniper",
      "gyrocopter"
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.51,
      "crusader": 0.51,
      "archon": 0.504,
      "legend": 0.503,
      "ancient": 0.498,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 15463,
      "guardian": 46549,
      "crusader": 64645,
      "archon": 69423,
      "legend": 58113,
      "ancient": 35472,
      "divine": 28203
    },
    "counters": [
      "viper",
      "vengeful-spirit",
      "luna",
      "grimstroke",
      "dragon-knight",
      "crystal-maiden"
    ],
    "weakAgainst": [
      "phoenix",
      "muerta",
      "bane",
      "keeper-of-the-light",
      "monkey-king",
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
      "Arcane Boots",
      "Staff of Wizardry",
      "Glimmer Cape",
      "Essence Distiller",
      "Aether Lens"
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
    "overallWin": 0.459,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.446,
      "crusader": 0.452,
      "archon": 0.464,
      "legend": 0.467,
      "ancient": 0.463,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 7268,
      "guardian": 19757,
      "crusader": 27634,
      "archon": 29371,
      "legend": 24481,
      "ancient": 15651,
      "divine": 12350
    },
    "counters": [
      "kunkka",
      "dark-seer",
      "anti-mage",
      "weaver",
      "invoker",
      "sven"
    ],
    "weakAgainst": [
      "treant-protector",
      "grimstroke",
      "bristleback",
      "faceless-void",
      "bane",
      "monkey-king"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Magic Wand",
      "Circlet",
      "Slippers of Agility"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Desolator",
      "Blink Dagger",
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
    "overallWin": 0.469,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.469,
      "crusader": 0.458,
      "archon": 0.463,
      "legend": 0.47,
      "ancient": 0.479,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 6244,
      "guardian": 16628,
      "crusader": 21167,
      "archon": 21265,
      "legend": 16715,
      "ancient": 10792,
      "divine": 11168
    },
    "counters": [
      "bristleback",
      "pugna",
      "medusa",
      "sand-king",
      "phantom-lancer",
      "lycan"
    ],
    "weakAgainst": [
      "morphling",
      "abaddon",
      "axe",
      "centaur-warrunner",
      "primal-beast",
      "dawnbreaker"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.508,
      "crusader": 0.505,
      "archon": 0.502,
      "legend": 0.493,
      "ancient": 0.492,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 10801,
      "guardian": 36116,
      "crusader": 55259,
      "archon": 65900,
      "legend": 57206,
      "ancient": 36895,
      "divine": 28355
    },
    "counters": [
      "faceless-void",
      "spirit-breaker",
      "necrophos",
      "medusa",
      "mirana",
      "templar-assassin"
    ],
    "weakAgainst": [
      "treant-protector",
      "clockwerk",
      "huskar",
      "ember-spirit",
      "nyx-assassin",
      "razor"
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
    "overallWin": 0.445,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.452,
      "crusader": 0.449,
      "archon": 0.45,
      "legend": 0.441,
      "ancient": 0.439,
      "divine": 0.437
    },
    "pickByBracket": {
      "herald": 5860,
      "guardian": 17551,
      "crusader": 25897,
      "archon": 31194,
      "legend": 28406,
      "ancient": 19477,
      "divine": 18204
    },
    "counters": [
      "anti-mage",
      "lina",
      "morphling",
      "witch-doctor",
      "troll-warlord",
      "centaur-warrunner"
    ],
    "weakAgainst": [
      "largo",
      "earth-spirit",
      "legion-commander",
      "nyx-assassin",
      "bounty-hunter",
      "bane"
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
      "Staff of Wizardry",
      "Sange",
      "Kaya and Sange"
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
    "overallWin": 0.467,
    "winByBracket": {
      "herald": 0.447,
      "guardian": 0.448,
      "crusader": 0.457,
      "archon": 0.465,
      "legend": 0.48,
      "ancient": 0.479,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 8169,
      "guardian": 25177,
      "crusader": 35173,
      "archon": 38711,
      "legend": 32099,
      "ancient": 20842,
      "divine": 17456
    },
    "counters": [
      "invoker",
      "axe",
      "ogre-magi",
      "dragon-knight"
    ],
    "weakAgainst": [
      "snapfire",
      "shadow-demon",
      "lion",
      "tusk",
      "shadow-fiend",
      "queen-of-pain"
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
    "overallWin": 0.447,
    "winByBracket": {
      "herald": 0.448,
      "guardian": 0.446,
      "crusader": 0.448,
      "archon": 0.442,
      "legend": 0.448,
      "ancient": 0.443,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 10060,
      "guardian": 27435,
      "crusader": 37218,
      "archon": 43073,
      "legend": 39634,
      "ancient": 27953,
      "divine": 26913
    },
    "counters": [
      "death-prophet",
      "weaver",
      "bristleback",
      "dark-seer",
      "sven",
      "void-spirit"
    ],
    "weakAgainst": [
      "bane",
      "lone-druid",
      "kez",
      "treant-protector",
      "largo",
      "kunkka"
    ],
    "startItems": [
      "Iron Branch",
      "Magic Stick",
      "Tango",
      "Gauntlets of Strength",
      "Faerie Fire",
      "Quelling Blade"
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
      "herald": 0.499,
      "guardian": 0.493,
      "crusader": 0.49,
      "archon": 0.501,
      "legend": 0.508,
      "ancient": 0.517,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 4995,
      "guardian": 15669,
      "crusader": 23234,
      "archon": 27815,
      "legend": 26270,
      "ancient": 19251,
      "divine": 23072
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.512,
      "crusader": 0.504,
      "archon": 0.501,
      "legend": 0.496,
      "ancient": 0.496,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 8759,
      "guardian": 18698,
      "crusader": 20505,
      "archon": 19129,
      "legend": 13234,
      "ancient": 7796,
      "divine": 5125
    },
    "counters": [
      "medusa",
      "silencer",
      "bristleback",
      "lifestealer",
      "tidehunter",
      "void-spirit"
    ],
    "weakAgainst": [
      "abaddon",
      "invoker",
      "sniper",
      "timbersaw",
      "pudge",
      "lion"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Magic Stick",
      "Tango",
      "Circlet",
      "Faerie Fire"
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.439,
      "guardian": 0.448,
      "crusader": 0.459,
      "archon": 0.471,
      "legend": 0.478,
      "ancient": 0.487,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 5377,
      "guardian": 17095,
      "crusader": 27607,
      "archon": 36617,
      "legend": 38336,
      "ancient": 29633,
      "divine": 28396
    },
    "counters": [
      "legion-commander",
      "ancient-apparition",
      "mirana",
      "vengeful-spirit",
      "lifestealer",
      "void-spirit"
    ],
    "weakAgainst": [
      "treant-protector",
      "broodmother",
      "muerta",
      "pugna",
      "venomancer",
      "dark-seer"
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
      "Pavise",
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.51,
      "crusader": 0.512,
      "archon": 0.503,
      "legend": 0.496,
      "ancient": 0.488,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 6513,
      "guardian": 23175,
      "crusader": 39254,
      "archon": 51746,
      "legend": 48278,
      "ancient": 31985,
      "divine": 24431
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
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.52,
      "crusader": 0.522,
      "archon": 0.524,
      "legend": 0.526,
      "ancient": 0.525,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 15659,
      "guardian": 54385,
      "crusader": 83434,
      "archon": 98257,
      "legend": 83429,
      "ancient": 53181,
      "divine": 45800
    },
    "counters": [
      "lion",
      "underlord",
      "morphling",
      "luna",
      "shadow-shaman",
      "night-stalker"
    ],
    "weakAgainst": [
      "monkey-king",
      "treant-protector",
      "marci",
      "alchemist",
      "earthshaker",
      "medusa"
    ],
    "startItems": [
      "Iron Branch",
      "Enchanted Mango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Magic Stick",
      "Tango"
    ],
    "coreItems": [
      "Blink Dagger",
      "Aghanim's Shard",
      "Arcane Boots",
      "Platemail",
      "Ogre Axe"
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
      "herald": 0.452,
      "guardian": 0.454,
      "crusader": 0.472,
      "archon": 0.476,
      "legend": 0.477,
      "ancient": 0.478,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 11912,
      "guardian": 31897,
      "crusader": 44507,
      "archon": 50871,
      "legend": 42705,
      "ancient": 26811,
      "divine": 20062
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
    "overallWin": 0.532,
    "winByBracket": {
      "herald": 0.538,
      "guardian": 0.538,
      "crusader": 0.538,
      "archon": 0.536,
      "legend": 0.53,
      "ancient": 0.524,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 15688,
      "guardian": 52617,
      "crusader": 83870,
      "archon": 103671,
      "legend": 93683,
      "ancient": 58650,
      "divine": 42948
    },
    "counters": [
      "morphling",
      "slardar",
      "legion-commander",
      "lich",
      "warlock",
      "lina"
    ],
    "weakAgainst": [
      "clockwerk",
      "beastmaster",
      "techies",
      "dawnbreaker",
      "ring-master",
      "phoenix"
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.474,
      "crusader": 0.477,
      "archon": 0.476,
      "legend": 0.469,
      "ancient": 0.47,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 13325,
      "guardian": 40186,
      "crusader": 55755,
      "archon": 61072,
      "legend": 47720,
      "ancient": 27285,
      "divine": 18066
    },
    "counters": [
      "warlock",
      "clockwerk",
      "dragon-knight",
      "weaver",
      "dawnbreaker",
      "tusk"
    ],
    "weakAgainst": [
      "ember-spirit",
      "invoker",
      "batrider",
      "pudge",
      "queen-of-pain",
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
      "herald": 0.48,
      "guardian": 0.48,
      "crusader": 0.483,
      "archon": 0.485,
      "legend": 0.48,
      "ancient": 0.485,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 21975,
      "guardian": 51208,
      "crusader": 59311,
      "archon": 57395,
      "legend": 42342,
      "ancient": 23251,
      "divine": 16660
    },
    "counters": [
      "bristleback",
      "silencer",
      "morphling",
      "ancient-apparition",
      "dragon-knight",
      "tidehunter"
    ],
    "weakAgainst": [
      "techies",
      "bane",
      "slardar",
      "zeus",
      "primal-beast",
      "windranger"
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
      "Staff of Wizardry",
      "Dragon Lance",
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.496,
      "crusader": 0.509,
      "archon": 0.518,
      "legend": 0.53,
      "ancient": 0.538,
      "divine": 0.544
    },
    "pickByBracket": {
      "herald": 2457,
      "guardian": 6791,
      "crusader": 9241,
      "archon": 10281,
      "legend": 8685,
      "ancient": 5932,
      "divine": 6326
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.486,
      "crusader": 0.485,
      "archon": 0.496,
      "legend": 0.503,
      "ancient": 0.496,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 5048,
      "guardian": 14936,
      "crusader": 22720,
      "archon": 29667,
      "legend": 30554,
      "ancient": 22232,
      "divine": 22249
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.502,
      "crusader": 0.498,
      "archon": 0.49,
      "legend": 0.483,
      "ancient": 0.478,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 10205,
      "guardian": 33648,
      "crusader": 49165,
      "archon": 55854,
      "legend": 44188,
      "ancient": 24792,
      "divine": 17146
    },
    "counters": [
      "sand-king",
      "drow-ranger",
      "ancient-apparition",
      "grimstroke",
      "troll-warlord",
      "sniper"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "slark",
      "venomancer",
      "treant-protector",
      "pudge",
      "largo"
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
      "Glimmer Cape",
      "Arcane Boots",
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.475,
      "crusader": 0.473,
      "archon": 0.467,
      "legend": 0.472,
      "ancient": 0.473,
      "divine": 0.472
    },
    "pickByBracket": {
      "herald": 13268,
      "guardian": 34475,
      "crusader": 42933,
      "archon": 44724,
      "legend": 35136,
      "ancient": 20744,
      "divine": 15914
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.477,
      "crusader": 0.478,
      "archon": 0.476,
      "legend": 0.481,
      "ancient": 0.486,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 22700,
      "guardian": 65293,
      "crusader": 92575,
      "archon": 106039,
      "legend": 93531,
      "ancient": 60983,
      "divine": 50932
    },
    "counters": [
      "morphling",
      "oracle",
      "phantom-lancer",
      "templar-assassin",
      "chaos-knight",
      "grimstroke"
    ],
    "weakAgainst": [
      "treant-protector",
      "enigma",
      "bane",
      "dazzle",
      "alchemist",
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
      "Blade of Alacrity",
      "Hyperstone",
      "Mjollnir"
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.476,
      "crusader": 0.485,
      "archon": 0.484,
      "legend": 0.491,
      "ancient": 0.503,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 6970,
      "guardian": 20917,
      "crusader": 28435,
      "archon": 31185,
      "legend": 25451,
      "ancient": 17224,
      "divine": 16710
    },
    "counters": [],
    "weakAgainst": [],
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
      "herald": 0.525,
      "guardian": 0.527,
      "crusader": 0.521,
      "archon": 0.52,
      "legend": 0.511,
      "ancient": 0.511,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 22775,
      "guardian": 76739,
      "crusader": 112640,
      "archon": 125591,
      "legend": 98277,
      "ancient": 55546,
      "divine": 35860
    },
    "counters": [
      "undying",
      "vengeful-spirit",
      "lich",
      "zeus",
      "ursa",
      "tidehunter"
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
      "Magic Stick"
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
    "overallWin": 0.546,
    "winByBracket": {
      "herald": 0.558,
      "guardian": 0.561,
      "crusader": 0.554,
      "archon": 0.546,
      "legend": 0.541,
      "ancient": 0.534,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 18769,
      "guardian": 61511,
      "crusader": 90320,
      "archon": 103622,
      "legend": 83239,
      "ancient": 47689,
      "divine": 28546
    },
    "counters": [
      "zeus",
      "silencer",
      "shadow-shaman",
      "lion",
      "templar-assassin",
      "tiny"
    ],
    "weakAgainst": [
      "earthshaker",
      "pudge",
      "necrophos",
      "lich",
      "dragon-knight",
      "snapfire"
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.519,
      "crusader": 0.519,
      "archon": 0.52,
      "legend": 0.517,
      "ancient": 0.513,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 26028,
      "guardian": 82165,
      "crusader": 125912,
      "archon": 152602,
      "legend": 137986,
      "ancient": 90286,
      "divine": 73290
    },
    "counters": [
      "viper",
      "vengeful-spirit",
      "medusa",
      "dawnbreaker",
      "axe",
      "nature-s-prophet"
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
