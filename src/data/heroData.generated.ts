// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-08-13
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.51,
      "crusader": 0.514,
      "archon": 0.515,
      "legend": 0.513,
      "ancient": 0.519,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 5935,
      "guardian": 16928,
      "crusader": 25979,
      "archon": 31663,
      "legend": 28996,
      "ancient": 17865,
      "divine": 13203
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.482,
      "crusader": 0.478,
      "archon": 0.473,
      "legend": 0.465,
      "ancient": 0.461,
      "divine": 0.454
    },
    "pickByBracket": {
      "herald": 5214,
      "guardian": 16931,
      "crusader": 26323,
      "archon": 31175,
      "legend": 26682,
      "ancient": 15766,
      "divine": 11184
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
      "herald": 0.519,
      "guardian": 0.521,
      "crusader": 0.523,
      "archon": 0.526,
      "legend": 0.519,
      "ancient": 0.508,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 9116,
      "guardian": 29830,
      "crusader": 48847,
      "archon": 61519,
      "legend": 55287,
      "ancient": 32484,
      "divine": 22851
    },
    "counters": [
      "mars",
      "disruptor",
      "hoodwink",
      "tiny",
      "pugna",
      "tidehunter"
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
      "herald": 0.5,
      "guardian": 0.504,
      "crusader": 0.497,
      "archon": 0.496,
      "legend": 0.495,
      "ancient": 0.498,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 18666,
      "guardian": 60163,
      "crusader": 91973,
      "archon": 103303,
      "legend": 83880,
      "ancient": 47201,
      "divine": 32139
    },
    "counters": [
      "lich",
      "silencer",
      "dragon-knight",
      "doom",
      "disruptor",
      "mars"
    ],
    "weakAgainst": [
      "timbersaw",
      "ember-spirit",
      "morphling",
      "jakiro",
      "ogre-magi",
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.516,
      "crusader": 0.516,
      "archon": 0.52,
      "legend": 0.522,
      "ancient": 0.522,
      "divine": 0.532
    },
    "pickByBracket": {
      "herald": 5791,
      "guardian": 18970,
      "crusader": 29816,
      "archon": 33396,
      "legend": 27021,
      "ancient": 16025,
      "divine": 13324
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
      "herald": 0.52,
      "guardian": 0.514,
      "crusader": 0.51,
      "archon": 0.503,
      "legend": 0.496,
      "ancient": 0.491,
      "divine": 0.481
    },
    "pickByBracket": {
      "herald": 21637,
      "guardian": 74505,
      "crusader": 120369,
      "archon": 150178,
      "legend": 136785,
      "ancient": 85590,
      "divine": 67279
    },
    "counters": [
      "morphling",
      "terrorblade",
      "death-prophet",
      "techies",
      "winter-wyvern",
      "pangolier"
    ],
    "weakAgainst": [
      "bane",
      "chen",
      "monkey-king",
      "huskar",
      "abaddon",
      "ember-spirit"
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
      "herald": 0.469,
      "guardian": 0.484,
      "crusader": 0.487,
      "archon": 0.49,
      "legend": 0.497,
      "ancient": 0.512,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 5181,
      "guardian": 16283,
      "crusader": 25094,
      "archon": 29495,
      "legend": 27659,
      "ancient": 19325,
      "divine": 22100
    },
    "counters": [
      "axe",
      "templar-assassin",
      "tiny",
      "earthshaker",
      "timbersaw",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "monkey-king",
      "centaur-warrunner",
      "marci",
      "mars",
      "skywrath-mage",
      "lich"
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
    "overallWin": 0.437,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.425,
      "crusader": 0.432,
      "archon": 0.423,
      "legend": 0.44,
      "ancient": 0.445,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 1736,
      "guardian": 5141,
      "crusader": 7952,
      "archon": 9017,
      "legend": 7762,
      "ancient": 5185,
      "divine": 5702
    },
    "counters": [
      "bristleback",
      "grimstroke",
      "beastmaster",
      "tiny",
      "weaver",
      "sand-king"
    ],
    "weakAgainst": [
      "oracle",
      "bane",
      "monkey-king",
      "chen",
      "nyx-assassin",
      "sven"
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
      "herald": 0.445,
      "guardian": 0.44,
      "crusader": 0.441,
      "archon": 0.437,
      "legend": 0.449,
      "ancient": 0.444,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 4431,
      "guardian": 13147,
      "crusader": 19609,
      "archon": 22502,
      "legend": 18902,
      "ancient": 11797,
      "divine": 12825
    },
    "counters": [
      "zeus",
      "shadow-shaman",
      "vengeful-spirit",
      "morphling",
      "lycan",
      "clockwerk"
    ],
    "weakAgainst": [
      "dazzle",
      "grimstroke",
      "juggernaut",
      "batrider",
      "pangolier",
      "slark"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Magic Stick",
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.517,
      "crusader": 0.521,
      "archon": 0.518,
      "legend": 0.52,
      "ancient": 0.515,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 12371,
      "guardian": 27784,
      "crusader": 32285,
      "archon": 29332,
      "legend": 21411,
      "ancient": 11488,
      "divine": 7265
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.497,
      "crusader": 0.502,
      "archon": 0.512,
      "legend": 0.528,
      "ancient": 0.538,
      "divine": 0.558
    },
    "pickByBracket": {
      "herald": 7626,
      "guardian": 22996,
      "crusader": 32547,
      "archon": 37910,
      "legend": 34234,
      "ancient": 24486,
      "divine": 27773
    },
    "counters": [
      "dragon-knight",
      "timbersaw",
      "snapfire",
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
      "herald": 0.496,
      "guardian": 0.489,
      "crusader": 0.493,
      "archon": 0.51,
      "legend": 0.502,
      "ancient": 0.519,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 2126,
      "guardian": 6111,
      "crusader": 9506,
      "archon": 11478,
      "legend": 11608,
      "ancient": 9176,
      "divine": 11148
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
      "puck",
      "largo"
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
      "herald": 0.532,
      "guardian": 0.519,
      "crusader": 0.496,
      "archon": 0.48,
      "legend": 0.467,
      "ancient": 0.471,
      "divine": 0.458
    },
    "pickByBracket": {
      "herald": 19187,
      "guardian": 52530,
      "crusader": 65983,
      "archon": 62796,
      "legend": 44482,
      "ancient": 23307,
      "divine": 15498
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.502,
      "crusader": 0.498,
      "archon": 0.496,
      "legend": 0.493,
      "ancient": 0.519,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 5218,
      "guardian": 13258,
      "crusader": 16451,
      "archon": 15506,
      "legend": 11262,
      "ancient": 6531,
      "divine": 5751
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.512,
      "crusader": 0.509,
      "archon": 0.509,
      "legend": 0.507,
      "ancient": 0.5,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 6890,
      "guardian": 27220,
      "crusader": 50021,
      "archon": 70441,
      "legend": 69894,
      "ancient": 46416,
      "divine": 38924
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.524,
      "crusader": 0.519,
      "archon": 0.513,
      "legend": 0.513,
      "ancient": 0.515,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 9810,
      "guardian": 28564,
      "crusader": 37617,
      "archon": 38518,
      "legend": 28958,
      "ancient": 16030,
      "divine": 10674
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
      "disruptor"
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
    "overallWin": 0.454,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.445,
      "crusader": 0.433,
      "archon": 0.447,
      "legend": 0.457,
      "ancient": 0.489,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 812,
      "guardian": 2248,
      "crusader": 3153,
      "archon": 3319,
      "legend": 2777,
      "ancient": 1870,
      "divine": 2015
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.491,
      "crusader": 0.488,
      "archon": 0.49,
      "legend": 0.499,
      "ancient": 0.507,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 11977,
      "guardian": 29223,
      "crusader": 35688,
      "archon": 36248,
      "legend": 30709,
      "ancient": 19740,
      "divine": 18318
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.481,
      "crusader": 0.473,
      "archon": 0.481,
      "legend": 0.479,
      "ancient": 0.492,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 3005,
      "guardian": 10672,
      "crusader": 18737,
      "archon": 24621,
      "legend": 25547,
      "ancient": 19231,
      "divine": 22304
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
      "herald": 0.534,
      "guardian": 0.529,
      "crusader": 0.521,
      "archon": 0.515,
      "legend": 0.509,
      "ancient": 0.505,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 21470,
      "guardian": 66451,
      "crusader": 96075,
      "archon": 108987,
      "legend": 93213,
      "ancient": 56736,
      "divine": 42336
    },
    "counters": [
      "pugna",
      "necrophos",
      "sniper",
      "slardar",
      "luna",
      "underlord"
    ],
    "weakAgainst": [
      "razor",
      "kunkka",
      "techies",
      "puck",
      "hoodwink",
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.49,
      "crusader": 0.484,
      "archon": 0.49,
      "legend": 0.49,
      "ancient": 0.508,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 3350,
      "guardian": 10865,
      "crusader": 16668,
      "archon": 21361,
      "legend": 21358,
      "ancient": 16042,
      "divine": 20075
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.458,
      "guardian": 0.474,
      "crusader": 0.474,
      "archon": 0.488,
      "legend": 0.492,
      "ancient": 0.502,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 7223,
      "guardian": 21152,
      "crusader": 30684,
      "archon": 37279,
      "legend": 34795,
      "ancient": 25142,
      "divine": 25936
    },
    "counters": [
      "weaver",
      "witch-doctor",
      "luna",
      "templar-assassin",
      "skywrath-mage",
      "storm-spirit"
    ],
    "weakAgainst": [
      "treant-protector",
      "lifestealer",
      "pugna",
      "nyx-assassin",
      "ember-spirit",
      "dazzle"
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
      "Staff of Wizardry",
      "Eul's Scepter of Divinity",
      "Blink Dagger",
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.517,
      "crusader": 0.519,
      "archon": 0.524,
      "legend": 0.527,
      "ancient": 0.523,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 7543,
      "guardian": 27013,
      "crusader": 49771,
      "archon": 72159,
      "legend": 77571,
      "ancient": 55649,
      "divine": 54458
    },
    "counters": [
      "vengeful-spirit",
      "medusa",
      "terrorblade",
      "death-prophet",
      "underlord",
      "earthshaker"
    ],
    "weakAgainst": [
      "treant-protector",
      "lone-druid",
      "bane",
      "alchemist",
      "lycan",
      "morphling"
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
      "herald": 0.483,
      "guardian": 0.502,
      "crusader": 0.499,
      "archon": 0.508,
      "legend": 0.518,
      "ancient": 0.521,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 7142,
      "guardian": 23655,
      "crusader": 35081,
      "archon": 40594,
      "legend": 32659,
      "ancient": 19785,
      "divine": 14885
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.472,
      "crusader": 0.485,
      "archon": 0.484,
      "legend": 0.489,
      "ancient": 0.484,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 8268,
      "guardian": 19767,
      "crusader": 26481,
      "archon": 30379,
      "legend": 26982,
      "ancient": 17542,
      "divine": 16386
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.496,
      "crusader": 0.494,
      "archon": 0.5,
      "legend": 0.502,
      "ancient": 0.502,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 6188,
      "guardian": 23460,
      "crusader": 43043,
      "archon": 61501,
      "legend": 63298,
      "ancient": 44012,
      "divine": 40361
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.464,
      "crusader": 0.454,
      "archon": 0.462,
      "legend": 0.472,
      "ancient": 0.476,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 5235,
      "guardian": 17236,
      "crusader": 29308,
      "archon": 40704,
      "legend": 41856,
      "ancient": 30719,
      "divine": 32435
    },
    "counters": [
      "lifestealer",
      "razor",
      "gyrocopter",
      "winter-wyvern",
      "phoenix",
      "pangolier"
    ],
    "weakAgainst": [
      "shadow-demon",
      "keeper-of-the-light",
      "treant-protector",
      "bane",
      "nature-s-prophet",
      "largo"
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.511,
      "crusader": 0.502,
      "archon": 0.498,
      "legend": 0.501,
      "ancient": 0.494,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 7477,
      "guardian": 23087,
      "crusader": 31847,
      "archon": 34956,
      "legend": 27195,
      "ancient": 15152,
      "divine": 10539
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
    "overallWin": 0.464,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.469,
      "crusader": 0.465,
      "archon": 0.466,
      "legend": 0.461,
      "ancient": 0.455,
      "divine": 0.459
    },
    "pickByBracket": {
      "herald": 21982,
      "guardian": 62718,
      "crusader": 88959,
      "archon": 101810,
      "legend": 87317,
      "ancient": 52168,
      "divine": 38919
    },
    "counters": [
      "underlord",
      "disruptor",
      "kez",
      "bristleback",
      "spirit-breaker",
      "zeus"
    ],
    "weakAgainst": [
      "dragon-knight",
      "treant-protector",
      "largo",
      "slardar",
      "queen-of-pain",
      "nature-s-prophet"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.458,
      "guardian": 0.471,
      "crusader": 0.485,
      "archon": 0.493,
      "legend": 0.496,
      "ancient": 0.51,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 3305,
      "guardian": 13088,
      "crusader": 26431,
      "archon": 40740,
      "legend": 46273,
      "ancient": 37201,
      "divine": 42677
    },
    "counters": [
      "timbersaw",
      "rubick",
      "lion",
      "pudge",
      "queen-of-pain",
      "slardar"
    ],
    "weakAgainst": [
      "ember-spirit",
      "ring-master",
      "gyrocopter",
      "lich",
      "puck",
      "snapfire"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Circlet",
      "Blood Grenade"
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.497,
      "crusader": 0.501,
      "archon": 0.503,
      "legend": 0.507,
      "ancient": 0.51,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 19978,
      "guardian": 61149,
      "crusader": 96266,
      "archon": 120029,
      "legend": 113152,
      "ancient": 73549,
      "divine": 59854
    },
    "counters": [
      "primal-beast",
      "sven",
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
      "Faerie Fire"
    ],
    "coreItems": [
      "Blink Dagger",
      "Staff of Wizardry",
      "Aghanim's Shard",
      "Blade of Alacrity",
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.493,
      "crusader": 0.49,
      "archon": 0.499,
      "legend": 0.52,
      "ancient": 0.533,
      "divine": 0.538
    },
    "pickByBracket": {
      "herald": 1736,
      "guardian": 5255,
      "crusader": 7362,
      "archon": 8535,
      "legend": 7238,
      "ancient": 5120,
      "divine": 5330
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
      "herald": 0.455,
      "guardian": 0.465,
      "crusader": 0.479,
      "archon": 0.49,
      "legend": 0.498,
      "ancient": 0.503,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 5657,
      "guardian": 19178,
      "crusader": 33634,
      "archon": 47835,
      "legend": 52970,
      "ancient": 40552,
      "divine": 46758
    },
    "counters": [
      "witch-doctor",
      "dark-seer",
      "venomancer",
      "sniper",
      "void-spirit",
      "anti-mage"
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
      "Faerie Fire",
      "Observer Ward",
      "Quelling Blade",
      "Circlet"
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
    "overallWin": 0.479,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.481,
      "crusader": 0.478,
      "archon": 0.477,
      "legend": 0.472,
      "ancient": 0.481,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 6879,
      "guardian": 15900,
      "crusader": 18843,
      "archon": 19287,
      "legend": 15982,
      "ancient": 11090,
      "divine": 11682
    },
    "counters": [
      "earthshaker",
      "ursa",
      "disruptor",
      "void-spirit",
      "clockwerk",
      "dark-willow"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "marci",
      "slardar",
      "pugna",
      "gyrocopter",
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.493,
      "crusader": 0.497,
      "archon": 0.504,
      "legend": 0.508,
      "ancient": 0.536,
      "divine": 0.565
    },
    "pickByBracket": {
      "herald": 5935,
      "guardian": 18506,
      "crusader": 27266,
      "archon": 29586,
      "legend": 24894,
      "ancient": 15976,
      "divine": 18127
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
      "Magic Wand"
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.487,
      "crusader": 0.484,
      "archon": 0.489,
      "legend": 0.493,
      "ancient": 0.494,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 13049,
      "guardian": 44521,
      "crusader": 68227,
      "archon": 81957,
      "legend": 71965,
      "ancient": 43858,
      "divine": 33644
    },
    "counters": [
      "templar-assassin",
      "abaddon",
      "dragon-knight",
      "dawnbreaker",
      "primal-beast",
      "ursa"
    ],
    "weakAgainst": [
      "tidehunter",
      "sniper",
      "juggernaut",
      "muerta",
      "earthshaker",
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.511,
      "crusader": 0.516,
      "archon": 0.515,
      "legend": 0.519,
      "ancient": 0.518,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 6117,
      "guardian": 21359,
      "crusader": 37643,
      "archon": 51404,
      "legend": 52231,
      "ancient": 36878,
      "divine": 33613
    },
    "counters": [
      "muerta",
      "templar-assassin",
      "ring-master",
      "beastmaster",
      "skywrath-mage",
      "tidehunter"
    ],
    "weakAgainst": [
      "windranger",
      "batrider",
      "shadow-shaman",
      "lion",
      "sniper",
      "slardar"
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
    "overallWin": 0.451,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.447,
      "crusader": 0.454,
      "archon": 0.452,
      "legend": 0.449,
      "ancient": 0.448,
      "divine": 0.451
    },
    "pickByBracket": {
      "herald": 3931,
      "guardian": 11746,
      "crusader": 19154,
      "archon": 25230,
      "legend": 23764,
      "ancient": 14801,
      "divine": 12276
    },
    "counters": [
      "sven",
      "templar-assassin",
      "earthshaker",
      "viper",
      "earth-spirit",
      "lion"
    ],
    "weakAgainst": [
      "treant-protector",
      "razor",
      "keeper-of-the-light",
      "doom",
      "shadow-demon",
      "ember-spirit"
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.47,
      "crusader": 0.473,
      "archon": 0.474,
      "legend": 0.483,
      "ancient": 0.48,
      "divine": 0.481
    },
    "pickByBracket": {
      "herald": 13336,
      "guardian": 40251,
      "crusader": 64066,
      "archon": 79418,
      "legend": 73153,
      "ancient": 49630,
      "divine": 48709
    },
    "counters": [
      "underlord",
      "death-prophet",
      "phantom-lancer",
      "huskar",
      "shadow-shaman",
      "drow-ranger"
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
      "Observer and Sentry Wards",
      "Tango",
      "Faerie Fire",
      "Blood Grenade",
      "Circlet"
    ],
    "coreItems": [
      "Essence Distiller",
      "Arcane Boots",
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
    "overallWin": 0.45,
    "winByBracket": {
      "herald": 0.448,
      "guardian": 0.439,
      "crusader": 0.447,
      "archon": 0.451,
      "legend": 0.45,
      "ancient": 0.464,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 10474,
      "guardian": 23061,
      "crusader": 26885,
      "archon": 26676,
      "legend": 21282,
      "ancient": 13264,
      "divine": 11475
    },
    "counters": [
      "storm-spirit",
      "tidehunter",
      "axe",
      "spirit-breaker",
      "templar-assassin",
      "skywrath-mage"
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
      "herald": 0.493,
      "guardian": 0.498,
      "crusader": 0.498,
      "archon": 0.504,
      "legend": 0.505,
      "ancient": 0.513,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 17600,
      "guardian": 63508,
      "crusader": 112414,
      "archon": 150418,
      "legend": 146519,
      "ancient": 100499,
      "divine": 88691
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
      "nyx-assassin",
      "tinker",
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.491,
      "crusader": 0.492,
      "archon": 0.483,
      "legend": 0.489,
      "ancient": 0.486,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 7371,
      "guardian": 23790,
      "crusader": 38093,
      "archon": 45311,
      "legend": 41256,
      "ancient": 27953,
      "divine": 30178
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.496,
      "crusader": 0.492,
      "archon": 0.484,
      "legend": 0.48,
      "ancient": 0.473,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 12969,
      "guardian": 42342,
      "crusader": 66437,
      "archon": 80287,
      "legend": 69718,
      "ancient": 41404,
      "divine": 27191
    },
    "counters": [
      "chaos-knight",
      "weaver",
      "anti-mage",
      "winter-wyvern",
      "sven",
      "undying"
    ],
    "weakAgainst": [
      "treant-protector",
      "io",
      "clinkz",
      "lycan",
      "alchemist",
      "dazzle"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.515,
      "crusader": 0.515,
      "archon": 0.521,
      "legend": 0.523,
      "ancient": 0.522,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 22092,
      "guardian": 70739,
      "crusader": 109445,
      "archon": 135284,
      "legend": 120466,
      "ancient": 73312,
      "divine": 51716
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
      "sniper",
      "venomancer",
      "abaddon",
      "timbersaw",
      "kez",
      "primal-beast"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.483,
      "crusader": 0.487,
      "archon": 0.494,
      "legend": 0.507,
      "ancient": 0.514,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 9636,
      "guardian": 28804,
      "crusader": 43348,
      "archon": 50136,
      "legend": 45121,
      "ancient": 31164,
      "divine": 34461
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
      "herald": 0.472,
      "guardian": 0.455,
      "crusader": 0.452,
      "archon": 0.448,
      "legend": 0.439,
      "ancient": 0.449,
      "divine": 0.455
    },
    "pickByBracket": {
      "herald": 6440,
      "guardian": 18042,
      "crusader": 27123,
      "archon": 32924,
      "legend": 30899,
      "ancient": 21004,
      "divine": 22279
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
      "drow-ranger",
      "largo",
      "windranger",
      "centaur-warrunner"
    ],
    "startItems": [
      "Faerie Fire",
      "Iron Branch",
      "Magic Wand",
      "Tango",
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.48,
      "crusader": 0.492,
      "archon": 0.495,
      "legend": 0.502,
      "ancient": 0.499,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 6536,
      "guardian": 19930,
      "crusader": 30379,
      "archon": 39062,
      "legend": 38332,
      "ancient": 24766,
      "divine": 19207
    },
    "counters": [
      "bristleback",
      "crystal-maiden",
      "hoodwink",
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
    "overallWin": 0.479,
    "winByBracket": {
      "herald": 0.461,
      "guardian": 0.47,
      "crusader": 0.47,
      "archon": 0.468,
      "legend": 0.484,
      "ancient": 0.488,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 1878,
      "guardian": 6088,
      "crusader": 10306,
      "archon": 13661,
      "legend": 14334,
      "ancient": 10760,
      "divine": 12813
    },
    "counters": [
      "silencer",
      "queen-of-pain",
      "pangolier",
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
      "Blood Grenade"
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
    "overallWin": 0.529,
    "winByBracket": {
      "herald": 0.523,
      "guardian": 0.53,
      "crusader": 0.531,
      "archon": 0.531,
      "legend": 0.529,
      "ancient": 0.525,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 18027,
      "guardian": 63887,
      "crusader": 103218,
      "archon": 124603,
      "legend": 108313,
      "ancient": 62224,
      "divine": 42200
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.5,
      "crusader": 0.505,
      "archon": 0.508,
      "legend": 0.509,
      "ancient": 0.515,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 3207,
      "guardian": 9928,
      "crusader": 14800,
      "archon": 17987,
      "legend": 16816,
      "ancient": 12135,
      "divine": 12860
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
      "herald": 0.531,
      "guardian": 0.524,
      "crusader": 0.528,
      "archon": 0.525,
      "legend": 0.528,
      "ancient": 0.525,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 12723,
      "guardian": 41211,
      "crusader": 66298,
      "archon": 87192,
      "legend": 87136,
      "ancient": 59433,
      "divine": 50198
    },
    "counters": [
      "sven",
      "ursa",
      "sand-king",
      "wraith-king",
      "ring-master",
      "winter-wyvern"
    ],
    "weakAgainst": [
      "treant-protector",
      "kez",
      "sniper",
      "phoenix",
      "keeper-of-the-light",
      "muerta"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Smoke of Deceit",
      "Enchanted Mango",
      "Faerie Fire"
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.517,
      "crusader": 0.519,
      "archon": 0.525,
      "legend": 0.531,
      "ancient": 0.533,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 10547,
      "guardian": 38981,
      "crusader": 71069,
      "archon": 97430,
      "legend": 97872,
      "ancient": 65533,
      "divine": 55478
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.477,
      "crusader": 0.492,
      "archon": 0.496,
      "legend": 0.499,
      "ancient": 0.502,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 25203,
      "guardian": 74066,
      "crusader": 115765,
      "archon": 148691,
      "legend": 141382,
      "ancient": 93419,
      "divine": 83775
    },
    "counters": [
      "underlord",
      "dark-willow",
      "abaddon",
      "phoenix",
      "warlock",
      "storm-spirit"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "pangolier",
      "leshrac",
      "timbersaw",
      "pudge",
      "invoker"
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
      "herald": 0.488,
      "guardian": 0.488,
      "crusader": 0.49,
      "archon": 0.486,
      "legend": 0.486,
      "ancient": 0.488,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 31296,
      "guardian": 106186,
      "crusader": 172388,
      "archon": 215890,
      "legend": 197270,
      "ancient": 123418,
      "divine": 94655
    },
    "counters": [
      "sven",
      "grimstroke",
      "razor",
      "dark-willow",
      "troll-warlord",
      "storm-spirit"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "earth-spirit",
      "abaddon",
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
      "Ogre Axe",
      "Ghost Scepter",
      "Force Staff"
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.489,
      "crusader": 0.484,
      "archon": 0.479,
      "legend": 0.474,
      "ancient": 0.479,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 2601,
      "guardian": 9257,
      "crusader": 15352,
      "archon": 18223,
      "legend": 16679,
      "ancient": 11172,
      "divine": 11676
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
      "Orb of Blight",
      "Tango",
      "Magic Stick"
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
      "herald": 0.511,
      "guardian": 0.51,
      "crusader": 0.508,
      "archon": 0.497,
      "legend": 0.497,
      "ancient": 0.494,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 13144,
      "guardian": 40654,
      "crusader": 63402,
      "archon": 79457,
      "legend": 78875,
      "ancient": 55660,
      "divine": 56961
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
      "herald": 0.475,
      "guardian": 0.453,
      "crusader": 0.461,
      "archon": 0.482,
      "legend": 0.488,
      "ancient": 0.502,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 1942,
      "guardian": 5697,
      "crusader": 8669,
      "archon": 10284,
      "legend": 9872,
      "ancient": 6869,
      "divine": 8850
    },
    "counters": [
      "sven",
      "skywrath-mage",
      "void-spirit",
      "hoodwink",
      "dawnbreaker",
      "silencer"
    ],
    "weakAgainst": [
      "beastmaster",
      "terrorblade",
      "bane",
      "tusk",
      "tidehunter",
      "pugna"
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
      "herald": 0.482,
      "guardian": 0.471,
      "crusader": 0.481,
      "archon": 0.488,
      "legend": 0.492,
      "ancient": 0.497,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 6659,
      "guardian": 28372,
      "crusader": 60289,
      "archon": 93379,
      "legend": 99917,
      "ancient": 69375,
      "divine": 56297
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.483,
      "crusader": 0.493,
      "archon": 0.498,
      "legend": 0.502,
      "ancient": 0.513,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 6806,
      "guardian": 18433,
      "crusader": 26760,
      "archon": 31035,
      "legend": 28100,
      "ancient": 19103,
      "divine": 18035
    },
    "counters": [
      "undying",
      "ursa",
      "pangolier",
      "void-spirit",
      "centaur-warrunner",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "phoenix",
      "razor",
      "dazzle",
      "magnus",
      "rubick",
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
      "guardian": 0.463,
      "crusader": 0.468,
      "archon": 0.47,
      "legend": 0.472,
      "ancient": 0.471,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 3757,
      "guardian": 12954,
      "crusader": 23680,
      "archon": 35130,
      "legend": 38911,
      "ancient": 29065,
      "divine": 27942
    },
    "counters": [
      "chaos-knight",
      "medusa",
      "outworld-devourer",
      "drow-ranger",
      "dawnbreaker",
      "weaver"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "oracle",
      "ancient-apparition",
      "nyx-assassin",
      "phoenix"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.502,
      "crusader": 0.503,
      "archon": 0.501,
      "legend": 0.498,
      "ancient": 0.498,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 5259,
      "guardian": 16547,
      "crusader": 25222,
      "archon": 29409,
      "legend": 25874,
      "ancient": 14830,
      "divine": 9559
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.514,
      "crusader": 0.519,
      "archon": 0.528,
      "legend": 0.524,
      "ancient": 0.536,
      "divine": 0.551
    },
    "pickByBracket": {
      "herald": 3730,
      "guardian": 9268,
      "crusader": 12657,
      "archon": 13177,
      "legend": 10349,
      "ancient": 6342,
      "divine": 6346
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.52,
      "crusader": 0.515,
      "archon": 0.515,
      "legend": 0.516,
      "ancient": 0.517,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 8592,
      "guardian": 33222,
      "crusader": 56870,
      "archon": 74209,
      "legend": 71915,
      "ancient": 49253,
      "divine": 49420
    },
    "counters": [
      "storm-spirit",
      "ogre-magi",
      "queen-of-pain",
      "undying",
      "lion",
      "dragon-knight"
    ],
    "weakAgainst": [
      "templar-assassin",
      "tusk",
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
    "overallWin": 0.452,
    "winByBracket": {
      "herald": 0.443,
      "guardian": 0.444,
      "crusader": 0.441,
      "archon": 0.448,
      "legend": 0.455,
      "ancient": 0.462,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 8321,
      "guardian": 23104,
      "crusader": 32910,
      "archon": 37896,
      "legend": 35073,
      "ancient": 23684,
      "divine": 19949
    },
    "counters": [
      "earthshaker",
      "undying",
      "bane",
      "skywrath-mage",
      "weaver",
      "underlord"
    ],
    "weakAgainst": [
      "treant-protector",
      "dawnbreaker",
      "marci",
      "zeus",
      "slardar",
      "crystal-maiden"
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
      "Broadsword",
      "Desolator",
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.468,
      "crusader": 0.47,
      "archon": 0.469,
      "legend": 0.474,
      "ancient": 0.475,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 5019,
      "guardian": 16766,
      "crusader": 26534,
      "archon": 32639,
      "legend": 30812,
      "ancient": 20913,
      "divine": 20440
    },
    "counters": [
      "weaver",
      "terrorblade",
      "lifestealer",
      "dawnbreaker",
      "puck",
      "void-spirit"
    ],
    "weakAgainst": [
      "luna",
      "sniper",
      "axe",
      "windranger",
      "pudge",
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
      "herald": 0.483,
      "guardian": 0.488,
      "crusader": 0.471,
      "archon": 0.473,
      "legend": 0.469,
      "ancient": 0.47,
      "divine": 0.474
    },
    "pickByBracket": {
      "herald": 6258,
      "guardian": 15711,
      "crusader": 22256,
      "archon": 26170,
      "legend": 23970,
      "ancient": 16122,
      "divine": 15123
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
      "leshrac",
      "pugna",
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
      "herald": 0.518,
      "guardian": 0.495,
      "crusader": 0.478,
      "archon": 0.481,
      "legend": 0.488,
      "ancient": 0.493,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 5314,
      "guardian": 12856,
      "crusader": 15423,
      "archon": 13681,
      "legend": 9174,
      "ancient": 5404,
      "divine": 4561
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.431,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.435,
      "crusader": 0.425,
      "archon": 0.425,
      "legend": 0.427,
      "ancient": 0.435,
      "divine": 0.44
    },
    "pickByBracket": {
      "herald": 13652,
      "guardian": 41015,
      "crusader": 58338,
      "archon": 62950,
      "legend": 53293,
      "ancient": 32325,
      "divine": 26747
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.53,
      "guardian": 0.525,
      "crusader": 0.516,
      "archon": 0.509,
      "legend": 0.506,
      "ancient": 0.499,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 20489,
      "guardian": 68729,
      "crusader": 108905,
      "archon": 133165,
      "legend": 122472,
      "ancient": 77386,
      "divine": 65154
    },
    "counters": [
      "void-spirit",
      "underlord",
      "witch-doctor",
      "bristleback",
      "sven",
      "kunkka"
    ],
    "weakAgainst": [
      "beastmaster",
      "crystal-maiden",
      "invoker",
      "keeper-of-the-light",
      "grimstroke",
      "clockwerk"
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.494,
      "crusader": 0.505,
      "archon": 0.519,
      "legend": 0.526,
      "ancient": 0.534,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 5758,
      "guardian": 20480,
      "crusader": 38034,
      "archon": 55757,
      "legend": 60633,
      "ancient": 44985,
      "divine": 44614
    },
    "counters": [
      "storm-spirit",
      "dark-willow",
      "zeus",
      "silencer",
      "tiny",
      "troll-warlord"
    ],
    "weakAgainst": [
      "lifestealer",
      "pugna",
      "shadow-shaman",
      "shadow-fiend",
      "undying",
      "beastmaster"
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
      "herald": 0.52,
      "guardian": 0.519,
      "crusader": 0.52,
      "archon": 0.52,
      "legend": 0.525,
      "ancient": 0.525,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 7183,
      "guardian": 23831,
      "crusader": 40173,
      "archon": 52488,
      "legend": 52751,
      "ancient": 35622,
      "divine": 30532
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
      "axe",
      "doom"
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
      "herald": 0.53,
      "guardian": 0.516,
      "crusader": 0.513,
      "archon": 0.507,
      "legend": 0.502,
      "ancient": 0.496,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 24180,
      "guardian": 83804,
      "crusader": 128755,
      "archon": 147761,
      "legend": 122071,
      "ancient": 68630,
      "divine": 43926
    },
    "counters": [
      "winter-wyvern",
      "medusa",
      "bristleback",
      "troll-warlord",
      "phantom-lancer",
      "anti-mage"
    ],
    "weakAgainst": [
      "pugna",
      "treant-protector",
      "phoenix",
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.495,
      "crusader": 0.498,
      "archon": 0.511,
      "legend": 0.509,
      "ancient": 0.518,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 4067,
      "guardian": 11830,
      "crusader": 17356,
      "archon": 20323,
      "legend": 18337,
      "ancient": 12004,
      "divine": 10245
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
      "herald": 0.451,
      "guardian": 0.476,
      "crusader": 0.484,
      "archon": 0.493,
      "legend": 0.502,
      "ancient": 0.518,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 3576,
      "guardian": 12924,
      "crusader": 22419,
      "archon": 29817,
      "legend": 30327,
      "ancient": 21493,
      "divine": 20791
    },
    "counters": [
      "batrider",
      "puck",
      "invoker",
      "mars",
      "tiny",
      "ursa"
    ],
    "weakAgainst": [
      "windranger",
      "tusk",
      "jakiro",
      "shadow-fiend",
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
    "overallWin": 0.528,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.505,
      "crusader": 0.52,
      "archon": 0.533,
      "legend": 0.533,
      "ancient": 0.538,
      "divine": 0.53
    },
    "pickByBracket": {
      "herald": 6370,
      "guardian": 21017,
      "crusader": 35981,
      "archon": 52165,
      "legend": 51960,
      "ancient": 34820,
      "divine": 28387
    },
    "counters": [
      "lion",
      "jakiro"
    ],
    "weakAgainst": [
      "invoker",
      "pudge",
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
    "overallWin": 0.462,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.448,
      "crusader": 0.451,
      "archon": 0.457,
      "legend": 0.465,
      "ancient": 0.464,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 2725,
      "guardian": 8325,
      "crusader": 14838,
      "archon": 21081,
      "legend": 23252,
      "ancient": 18524,
      "divine": 21913
    },
    "counters": [
      "lina",
      "beastmaster",
      "lion",
      "silencer",
      "sven",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "naga-siren",
      "largo",
      "treant-protector",
      "bane",
      "marci",
      "pugna"
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
      "Diffusal Blade",
      "Blade of Alacrity",
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.532,
      "guardian": 0.519,
      "crusader": 0.517,
      "archon": 0.512,
      "legend": 0.508,
      "ancient": 0.501,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 28741,
      "guardian": 84293,
      "crusader": 114562,
      "archon": 120372,
      "legend": 92429,
      "ancient": 49861,
      "divine": 30935
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.523,
      "crusader": 0.524,
      "archon": 0.528,
      "legend": 0.529,
      "ancient": 0.53,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 17216,
      "guardian": 54634,
      "crusader": 83038,
      "archon": 95694,
      "legend": 82617,
      "ancient": 52370,
      "divine": 49322
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
      "herald": 0.504,
      "guardian": 0.507,
      "crusader": 0.512,
      "archon": 0.511,
      "legend": 0.516,
      "ancient": 0.506,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 4183,
      "guardian": 16709,
      "crusader": 30618,
      "archon": 42852,
      "legend": 44533,
      "ancient": 30679,
      "divine": 32333
    },
    "counters": [
      "dark-seer",
      "sand-king",
      "techies",
      "vengeful-spirit",
      "void-spirit",
      "underlord"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "magnus",
      "bane",
      "juggernaut",
      "doom",
      "dazzle"
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.482,
      "crusader": 0.491,
      "archon": 0.487,
      "legend": 0.486,
      "ancient": 0.494,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 4308,
      "guardian": 13195,
      "crusader": 20579,
      "archon": 24068,
      "legend": 21282,
      "ancient": 14855,
      "divine": 16058
    },
    "counters": [
      "terrorblade",
      "shadow-shaman",
      "muerta",
      "puck",
      "viper",
      "gyrocopter"
    ],
    "weakAgainst": [
      "earthshaker",
      "largo",
      "razor",
      "faceless-void",
      "shadow-demon",
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
    "overallWin": 0.465,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.444,
      "crusader": 0.458,
      "archon": 0.46,
      "legend": 0.464,
      "ancient": 0.468,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 3909,
      "guardian": 12216,
      "crusader": 20559,
      "archon": 28819,
      "legend": 29664,
      "ancient": 21877,
      "divine": 25795
    },
    "counters": [
      "weaver",
      "invoker",
      "terrorblade",
      "razor",
      "dark-willow",
      "silencer"
    ],
    "weakAgainst": [
      "naga-siren",
      "nyx-assassin",
      "oracle",
      "morphling",
      "bane",
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
      "herald": 0.523,
      "guardian": 0.522,
      "crusader": 0.52,
      "archon": 0.514,
      "legend": 0.51,
      "ancient": 0.508,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 31367,
      "guardian": 114482,
      "crusader": 191177,
      "archon": 230070,
      "legend": 199479,
      "ancient": 124384,
      "divine": 111235
    },
    "counters": [
      "io",
      "clinkz",
      "wraith-king",
      "morphling",
      "phantom-assassin",
      "sand-king"
    ],
    "weakAgainst": [
      "largo",
      "lycan",
      "naga-siren",
      "earth-spirit",
      "magnus",
      "monkey-king"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.487,
      "crusader": 0.499,
      "archon": 0.505,
      "legend": 0.507,
      "ancient": 0.517,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 6457,
      "guardian": 19541,
      "crusader": 28605,
      "archon": 34030,
      "legend": 30415,
      "ancient": 19641,
      "divine": 15754
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.472,
      "crusader": 0.468,
      "archon": 0.471,
      "legend": 0.471,
      "ancient": 0.469,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 11262,
      "guardian": 37940,
      "crusader": 64329,
      "archon": 86392,
      "legend": 83241,
      "ancient": 52856,
      "divine": 43183
    },
    "counters": [
      "phantom-lancer",
      "drow-ranger",
      "timbersaw",
      "chaos-knight",
      "tinker",
      "sand-king"
    ],
    "weakAgainst": [
      "largo",
      "keeper-of-the-light",
      "treant-protector",
      "chen",
      "bounty-hunter",
      "pugna"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.499,
      "crusader": 0.504,
      "archon": 0.505,
      "legend": 0.507,
      "ancient": 0.5,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 11838,
      "guardian": 30961,
      "crusader": 43664,
      "archon": 51017,
      "legend": 46605,
      "ancient": 29036,
      "divine": 22405
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
      "lion",
      "puck",
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.519,
      "crusader": 0.526,
      "archon": 0.53,
      "legend": 0.529,
      "ancient": 0.532,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 11262,
      "guardian": 31398,
      "crusader": 42647,
      "archon": 46696,
      "legend": 38488,
      "ancient": 23613,
      "divine": 16489
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.476,
      "crusader": 0.473,
      "archon": 0.479,
      "legend": 0.48,
      "ancient": 0.486,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 3972,
      "guardian": 14719,
      "crusader": 26729,
      "archon": 37812,
      "legend": 41054,
      "ancient": 30524,
      "divine": 34641
    },
    "counters": [
      "skywrath-mage",
      "vengeful-spirit",
      "dark-willow",
      "earth-spirit",
      "terrorblade",
      "timbersaw"
    ],
    "weakAgainst": [
      "alchemist",
      "chen",
      "grimstroke",
      "dazzle",
      "keeper-of-the-light",
      "treant-protector"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.484,
      "crusader": 0.491,
      "archon": 0.495,
      "legend": 0.495,
      "ancient": 0.499,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 13821,
      "guardian": 53210,
      "crusader": 101359,
      "archon": 149926,
      "legend": 161403,
      "ancient": 114609,
      "divine": 102221
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
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Faerie Fire",
      "Sentry Ward"
    ],
    "coreItems": [
      "Essence Distiller",
      "Blink Dagger",
      "Arcane Boots",
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.525,
      "guardian": 0.509,
      "crusader": 0.5,
      "archon": 0.49,
      "legend": 0.476,
      "ancient": 0.472,
      "divine": 0.472
    },
    "pickByBracket": {
      "herald": 8051,
      "guardian": 23313,
      "crusader": 34222,
      "archon": 37689,
      "legend": 31744,
      "ancient": 19050,
      "divine": 13767
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
    "overallWin": 0.45,
    "winByBracket": {
      "herald": 0.405,
      "guardian": 0.425,
      "crusader": 0.444,
      "archon": 0.448,
      "legend": 0.45,
      "ancient": 0.47,
      "divine": 0.467
    },
    "pickByBracket": {
      "herald": 2697,
      "guardian": 7705,
      "crusader": 12651,
      "archon": 16070,
      "legend": 16173,
      "ancient": 11522,
      "divine": 11415
    },
    "counters": [
      "medusa",
      "phantom-lancer",
      "weaver",
      "dazzle",
      "warlock",
      "drow-ranger"
    ],
    "weakAgainst": [
      "naga-siren",
      "alchemist",
      "grimstroke",
      "monkey-king",
      "chen",
      "techies"
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.484,
      "crusader": 0.486,
      "archon": 0.485,
      "legend": 0.48,
      "ancient": 0.479,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 22894,
      "guardian": 71366,
      "crusader": 113947,
      "archon": 140313,
      "legend": 128928,
      "ancient": 84312,
      "divine": 78909
    },
    "counters": [
      "night-stalker",
      "medusa",
      "morphling",
      "undying",
      "pugna",
      "tinker"
    ],
    "weakAgainst": [
      "lone-druid",
      "enigma",
      "monkey-king",
      "alchemist",
      "phoenix",
      "omniknight"
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.516,
      "crusader": 0.519,
      "archon": 0.52,
      "legend": 0.52,
      "ancient": 0.515,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 24132,
      "guardian": 75368,
      "crusader": 113718,
      "archon": 131888,
      "legend": 112720,
      "ancient": 66203,
      "divine": 47553
    },
    "counters": [
      "medusa",
      "morphling",
      "grimstroke",
      "kunkka",
      "chaos-knight",
      "night-stalker"
    ],
    "weakAgainst": [
      "death-prophet",
      "beastmaster",
      "wraith-king",
      "leshrac",
      "hoodwink",
      "primal-beast"
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.519,
      "crusader": 0.513,
      "archon": 0.505,
      "legend": 0.502,
      "ancient": 0.499,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 13143,
      "guardian": 49514,
      "crusader": 80298,
      "archon": 99666,
      "legend": 88204,
      "ancient": 53734,
      "divine": 39197
    },
    "counters": [
      "timbersaw",
      "lina",
      "vengeful-spirit",
      "ursa",
      "chaos-knight",
      "jakiro"
    ],
    "weakAgainst": [
      "largo",
      "treant-protector",
      "leshrac",
      "spirit-breaker",
      "keeper-of-the-light",
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.5,
      "crusader": 0.501,
      "archon": 0.502,
      "legend": 0.498,
      "ancient": 0.491,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 18286,
      "guardian": 58100,
      "crusader": 87001,
      "archon": 102549,
      "legend": 89202,
      "ancient": 54839,
      "divine": 44374
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.507,
      "crusader": 0.505,
      "archon": 0.504,
      "legend": 0.499,
      "ancient": 0.499,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 10845,
      "guardian": 34792,
      "crusader": 52843,
      "archon": 63127,
      "legend": 56358,
      "ancient": 35665,
      "divine": 29700
    },
    "counters": [
      "weaver",
      "drow-ranger",
      "viper",
      "sand-king",
      "lifestealer",
      "grimstroke"
    ],
    "weakAgainst": [
      "vengeful-spirit",
      "death-prophet",
      "naga-siren",
      "zeus",
      "crystal-maiden",
      "marci"
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
      "herald": 0.514,
      "guardian": 0.505,
      "crusader": 0.497,
      "archon": 0.493,
      "legend": 0.492,
      "ancient": 0.494,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 11394,
      "guardian": 39560,
      "crusader": 65805,
      "archon": 84649,
      "legend": 79388,
      "ancient": 50726,
      "divine": 39919
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.49,
      "crusader": 0.496,
      "archon": 0.495,
      "legend": 0.491,
      "ancient": 0.494,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 11660,
      "guardian": 41271,
      "crusader": 75054,
      "archon": 107678,
      "legend": 112594,
      "ancient": 80156,
      "divine": 74102
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.515,
      "crusader": 0.507,
      "archon": 0.503,
      "legend": 0.498,
      "ancient": 0.491,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 33572,
      "guardian": 103223,
      "crusader": 153121,
      "archon": 177103,
      "legend": 143604,
      "ancient": 76862,
      "divine": 44301
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
      "herald": 0.553,
      "guardian": 0.547,
      "crusader": 0.544,
      "archon": 0.54,
      "legend": 0.542,
      "ancient": 0.538,
      "divine": 0.536
    },
    "pickByBracket": {
      "herald": 15997,
      "guardian": 56977,
      "crusader": 91939,
      "archon": 111765,
      "legend": 100770,
      "ancient": 63815,
      "divine": 55765
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
      "herald": 0.514,
      "guardian": 0.517,
      "crusader": 0.521,
      "archon": 0.522,
      "legend": 0.521,
      "ancient": 0.524,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 21393,
      "guardian": 66676,
      "crusader": 103236,
      "archon": 124336,
      "legend": 113759,
      "ancient": 72002,
      "divine": 59383
    },
    "counters": [
      "clinkz",
      "ancient-apparition",
      "silencer",
      "death-prophet",
      "slark",
      "phantom-lancer"
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
    "overallWin": 0.465,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.463,
      "crusader": 0.46,
      "archon": 0.462,
      "legend": 0.462,
      "ancient": 0.472,
      "divine": 0.471
    },
    "pickByBracket": {
      "herald": 8192,
      "guardian": 25534,
      "crusader": 39102,
      "archon": 49270,
      "legend": 48317,
      "ancient": 33540,
      "divine": 32051
    },
    "counters": [
      "naga-siren",
      "templar-assassin",
      "sven",
      "medusa",
      "techies",
      "death-prophet"
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.509,
      "crusader": 0.51,
      "archon": 0.509,
      "legend": 0.509,
      "ancient": 0.518,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 11877,
      "guardian": 35774,
      "crusader": 53114,
      "archon": 62365,
      "legend": 57115,
      "ancient": 37972,
      "divine": 34185
    },
    "counters": [
      "phantom-lancer",
      "dark-seer",
      "undying",
      "skywrath-mage",
      "zeus",
      "axe"
    ],
    "weakAgainst": [
      "lycan",
      "earthshaker",
      "void-spirit",
      "gyrocopter",
      "necrophos",
      "lich"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Quelling Blade",
      "Tango",
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
      "guardian": 0.511,
      "crusader": 0.509,
      "archon": 0.511,
      "legend": 0.506,
      "ancient": 0.507,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 13878,
      "guardian": 44644,
      "crusader": 66834,
      "archon": 78481,
      "legend": 68371,
      "ancient": 42409,
      "divine": 36290
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
      "herald": 0.458,
      "guardian": 0.465,
      "crusader": 0.456,
      "archon": 0.463,
      "legend": 0.468,
      "ancient": 0.462,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 6596,
      "guardian": 19383,
      "crusader": 28679,
      "archon": 32951,
      "legend": 29536,
      "ancient": 18789,
      "divine": 16663
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
    "overallWin": 0.467,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.46,
      "crusader": 0.456,
      "archon": 0.46,
      "legend": 0.465,
      "ancient": 0.477,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 5866,
      "guardian": 16186,
      "crusader": 22773,
      "archon": 24331,
      "legend": 20556,
      "ancient": 13759,
      "divine": 17301
    },
    "counters": [
      "bristleback",
      "pugna",
      "dragon-knight",
      "sand-king",
      "medusa",
      "shadow-shaman"
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
      "Faerie Fire",
      "Circlet",
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
      "herald": 0.497,
      "guardian": 0.506,
      "crusader": 0.505,
      "archon": 0.502,
      "legend": 0.499,
      "ancient": 0.502,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 9513,
      "guardian": 33041,
      "crusader": 54566,
      "archon": 69451,
      "legend": 64252,
      "ancient": 41029,
      "divine": 34206
    },
    "counters": [
      "faceless-void",
      "necrophos",
      "spirit-breaker",
      "templar-assassin",
      "dark-willow",
      "dragon-knight"
    ],
    "weakAgainst": [
      "treant-protector",
      "clockwerk",
      "huskar",
      "ember-spirit",
      "keeper-of-the-light",
      "nyx-assassin"
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
      "Aghanim's Shard",
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
    "overallWin": 0.446,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.457,
      "crusader": 0.445,
      "archon": 0.45,
      "legend": 0.442,
      "ancient": 0.437,
      "divine": 0.443
    },
    "pickByBracket": {
      "herald": 5189,
      "guardian": 16051,
      "crusader": 26001,
      "archon": 33132,
      "legend": 33241,
      "ancient": 22953,
      "divine": 24517
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
      "herald": 0.456,
      "guardian": 0.458,
      "crusader": 0.458,
      "archon": 0.464,
      "legend": 0.48,
      "ancient": 0.478,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 7221,
      "guardian": 22739,
      "crusader": 34692,
      "archon": 40202,
      "legend": 36283,
      "ancient": 23905,
      "divine": 22343
    },
    "counters": [
      "invoker",
      "axe",
      "ogre-magi",
      "luna",
      "dragon-knight"
    ],
    "weakAgainst": [
      "snapfire",
      "tusk",
      "shadow-demon",
      "queen-of-pain",
      "lion",
      "jakiro"
    ],
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
    "overallWin": 0.445,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.447,
      "crusader": 0.444,
      "archon": 0.443,
      "legend": 0.445,
      "ancient": 0.44,
      "divine": 0.449
    },
    "pickByBracket": {
      "herald": 7575,
      "guardian": 21675,
      "crusader": 31551,
      "archon": 38139,
      "legend": 36539,
      "ancient": 25518,
      "divine": 27466
    },
    "counters": [
      "weaver",
      "death-prophet",
      "sven",
      "bristleback",
      "dark-seer",
      "void-spirit"
    ],
    "weakAgainst": [
      "bane",
      "kez",
      "chen",
      "batrider",
      "treant-protector",
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.482,
      "crusader": 0.489,
      "archon": 0.491,
      "legend": 0.501,
      "ancient": 0.497,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 4118,
      "guardian": 13369,
      "crusader": 21898,
      "archon": 27827,
      "legend": 27561,
      "ancient": 20722,
      "divine": 33361
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
      "Observer and Sentry Wards",
      "Boots of Speed",
      "Blood Grenade",
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.521,
      "guardian": 0.522,
      "crusader": 0.526,
      "archon": 0.517,
      "legend": 0.515,
      "ancient": 0.511,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 8162,
      "guardian": 18473,
      "crusader": 22232,
      "archon": 23046,
      "legend": 17908,
      "ancient": 10158,
      "divine": 8057
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
    "overallWin": 0.479,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.449,
      "crusader": 0.461,
      "archon": 0.474,
      "legend": 0.482,
      "ancient": 0.491,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 4355,
      "guardian": 14595,
      "crusader": 25584,
      "archon": 37084,
      "legend": 43192,
      "ancient": 34570,
      "divine": 40145
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
      "herald": 0.523,
      "guardian": 0.514,
      "crusader": 0.517,
      "archon": 0.505,
      "legend": 0.501,
      "ancient": 0.487,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 5741,
      "guardian": 21848,
      "crusader": 39550,
      "archon": 57057,
      "legend": 57316,
      "ancient": 38421,
      "divine": 31959
    },
    "counters": [
      "ancient-apparition",
      "abaddon",
      "gyrocopter",
      "zeus",
      "kunkka",
      "void-spirit"
    ],
    "weakAgainst": [
      "lone-druid",
      "treant-protector",
      "necrophos",
      "ursa",
      "monkey-king",
      "drow-ranger"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Faerie Fire"
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.515,
      "crusader": 0.514,
      "archon": 0.518,
      "legend": 0.52,
      "ancient": 0.515,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 14183,
      "guardian": 51002,
      "crusader": 83565,
      "archon": 105513,
      "legend": 96870,
      "ancient": 62093,
      "divine": 59661
    },
    "counters": [
      "shadow-shaman",
      "lion",
      "night-stalker",
      "weaver",
      "windranger",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "monkey-king",
      "treant-protector",
      "marci",
      "alchemist",
      "ember-spirit",
      "pugna"
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
      "Blink Dagger",
      "Arcane Boots",
      "Platemail",
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.455,
      "crusader": 0.468,
      "archon": 0.477,
      "legend": 0.477,
      "ancient": 0.48,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 10166,
      "guardian": 28331,
      "crusader": 42221,
      "archon": 50882,
      "legend": 46480,
      "ancient": 29321,
      "divine": 23255
    },
    "counters": [
      "underlord",
      "muerta",
      "dark-willow",
      "timbersaw",
      "grimstroke",
      "sven"
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
    "overallWin": 0.531,
    "winByBracket": {
      "herald": 0.538,
      "guardian": 0.543,
      "crusader": 0.536,
      "archon": 0.533,
      "legend": 0.532,
      "ancient": 0.524,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 13737,
      "guardian": 47970,
      "crusader": 80235,
      "archon": 105953,
      "legend": 101534,
      "ancient": 64884,
      "divine": 47788
    },
    "counters": [
      "morphling",
      "legion-commander",
      "slardar",
      "lich",
      "lina",
      "warlock"
    ],
    "weakAgainst": [
      "clockwerk",
      "dawnbreaker",
      "phoenix",
      "tusk",
      "witch-doctor",
      "beastmaster"
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
      "herald": 0.477,
      "guardian": 0.473,
      "crusader": 0.479,
      "archon": 0.479,
      "legend": 0.475,
      "ancient": 0.468,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 11930,
      "guardian": 38319,
      "crusader": 57691,
      "archon": 67470,
      "legend": 56865,
      "ancient": 32342,
      "divine": 22040
    },
    "counters": [
      "warlock",
      "dragon-knight",
      "weaver",
      "clockwerk",
      "dawnbreaker",
      "tusk"
    ],
    "weakAgainst": [
      "ember-spirit",
      "batrider",
      "invoker",
      "pudge",
      "ogre-magi",
      "doom"
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.48,
      "crusader": 0.483,
      "archon": 0.481,
      "legend": 0.489,
      "ancient": 0.491,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 19846,
      "guardian": 48010,
      "crusader": 58755,
      "archon": 59985,
      "legend": 46857,
      "ancient": 26179,
      "divine": 20419
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
      "herald": 0.487,
      "guardian": 0.506,
      "crusader": 0.517,
      "archon": 0.528,
      "legend": 0.542,
      "ancient": 0.543,
      "divine": 0.548
    },
    "pickByBracket": {
      "herald": 2147,
      "guardian": 6035,
      "crusader": 9097,
      "archon": 10379,
      "legend": 9705,
      "ancient": 6812,
      "divine": 8485
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.474,
      "crusader": 0.491,
      "archon": 0.501,
      "legend": 0.503,
      "ancient": 0.498,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 4663,
      "guardian": 13972,
      "crusader": 23635,
      "archon": 32319,
      "legend": 34427,
      "ancient": 25344,
      "divine": 28120
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
      "herald": 0.502,
      "guardian": 0.514,
      "crusader": 0.501,
      "archon": 0.499,
      "legend": 0.493,
      "ancient": 0.485,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 8782,
      "guardian": 30655,
      "crusader": 47518,
      "archon": 56145,
      "legend": 48185,
      "ancient": 27467,
      "divine": 20154
    },
    "counters": [
      "sand-king",
      "ancient-apparition",
      "troll-warlord",
      "alchemist",
      "grimstroke",
      "axe"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "treant-protector",
      "slark",
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.473,
      "crusader": 0.476,
      "archon": 0.471,
      "legend": 0.471,
      "ancient": 0.47,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 11586,
      "guardian": 30363,
      "crusader": 40800,
      "archon": 44476,
      "legend": 38882,
      "ancient": 22920,
      "divine": 18943
    },
    "counters": [
      "sven",
      "ancient-apparition",
      "brewmaster",
      "crystal-maiden",
      "gyrocopter",
      "dazzle"
    ],
    "weakAgainst": [
      "morphling",
      "monkey-king",
      "sniper",
      "rubick",
      "venomancer",
      "tiny"
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.489,
      "crusader": 0.48,
      "archon": 0.481,
      "legend": 0.485,
      "ancient": 0.49,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 20414,
      "guardian": 61889,
      "crusader": 94025,
      "archon": 117814,
      "legend": 111850,
      "ancient": 73955,
      "divine": 68521
    },
    "counters": [
      "phantom-lancer",
      "morphling",
      "grimstroke",
      "oracle",
      "chaos-knight",
      "weaver"
    ],
    "weakAgainst": [
      "treant-protector",
      "lone-druid",
      "enigma",
      "bane",
      "ember-spirit",
      "dazzle"
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
      "guardian": 0.479,
      "crusader": 0.487,
      "archon": 0.491,
      "legend": 0.503,
      "ancient": 0.506,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 5620,
      "guardian": 17710,
      "crusader": 26889,
      "archon": 31333,
      "legend": 28761,
      "ancient": 19969,
      "divine": 25853
    },
    "counters": [
      "void-spirit",
      "slardar",
      "clockwerk",
      "centaur-warrunner",
      "pangolier"
    ],
    "weakAgainst": [
      "ogre-magi",
      "snapfire",
      "ember-spirit",
      "axe",
      "beastmaster",
      "jakiro"
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
      "herald": 0.531,
      "guardian": 0.526,
      "crusader": 0.524,
      "archon": 0.523,
      "legend": 0.516,
      "ancient": 0.51,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 21419,
      "guardian": 73197,
      "crusader": 114378,
      "archon": 137792,
      "legend": 116073,
      "ancient": 65050,
      "divine": 43292
    },
    "counters": [
      "vengeful-spirit",
      "lich",
      "ursa",
      "zeus",
      "tidehunter",
      "undying"
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
      "Faerie Fire",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Arcane Boots",
      "Glimmer Cape",
      "Aghanim's Shard",
      "Staff of Wizardry",
      "Mekansm"
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
      "herald": 0.557,
      "guardian": 0.56,
      "crusader": 0.556,
      "archon": 0.551,
      "legend": 0.543,
      "ancient": 0.538,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 16660,
      "guardian": 56423,
      "crusader": 90889,
      "archon": 112070,
      "legend": 98128,
      "ancient": 56237,
      "divine": 33809
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.503,
      "crusader": 0.507,
      "archon": 0.501,
      "legend": 0.502,
      "ancient": 0.501,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 20483,
      "guardian": 64739,
      "crusader": 101317,
      "archon": 125336,
      "legend": 113665,
      "ancient": 71470,
      "divine": 56459
    },
    "counters": [
      "viper",
      "vengeful-spirit",
      "medusa",
      "slardar",
      "dawnbreaker",
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
