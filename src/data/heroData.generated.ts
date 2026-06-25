// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-06-25
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
      "herald": 0.504,
      "guardian": 0.51,
      "crusader": 0.513,
      "archon": 0.511,
      "legend": 0.515,
      "ancient": 0.507,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 8606,
      "guardian": 17936,
      "crusader": 20439,
      "archon": 19122,
      "legend": 14398,
      "ancient": 8944,
      "divine": 8612
    },
    "counters": [
      "troll-warlord",
      "legion-commander",
      "sand-king",
      "axe",
      "terrorblade",
      "lion"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "underlord",
      "clinkz",
      "naga-siren",
      "marci",
      "faceless-void"
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.482,
      "crusader": 0.477,
      "archon": 0.473,
      "legend": 0.469,
      "ancient": 0.473,
      "divine": 0.45
    },
    "pickByBracket": {
      "herald": 9762,
      "guardian": 23475,
      "crusader": 27859,
      "archon": 25467,
      "legend": 19348,
      "ancient": 12189,
      "divine": 10800
    },
    "counters": [
      "ring-master",
      "ursa",
      "lifestealer",
      "void-spirit",
      "gyrocopter",
      "sand-king"
    ],
    "weakAgainst": [
      "monkey-king",
      "luna",
      "storm-spirit",
      "warlock",
      "phoenix",
      "puck"
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.526,
      "crusader": 0.518,
      "archon": 0.511,
      "legend": 0.506,
      "ancient": 0.5,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 16695,
      "guardian": 35945,
      "crusader": 39091,
      "archon": 35300,
      "legend": 26482,
      "ancient": 16027,
      "divine": 14164
    },
    "counters": [
      "mars",
      "disruptor",
      "marci",
      "earthshaker",
      "hoodwink",
      "pugna"
    ],
    "weakAgainst": [
      "underlord",
      "spirit-breaker",
      "clinkz",
      "largo",
      "viper",
      "tusk"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Sentry Ward",
      "Faerie Fire",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Arcane Boots",
      "Staff of Wizardry",
      "Vitality Booster",
      "Rod of Atos",
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.5,
      "crusader": 0.498,
      "archon": 0.498,
      "legend": 0.49,
      "ancient": 0.494,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 36579,
      "guardian": 79742,
      "crusader": 82255,
      "archon": 66814,
      "legend": 45267,
      "ancient": 26387,
      "divine": 23233
    },
    "counters": [
      "sven",
      "lich",
      "dark-willow",
      "silencer",
      "dragon-knight",
      "mars"
    ],
    "weakAgainst": [
      "timbersaw",
      "ember-spirit",
      "abaddon",
      "templar-assassin",
      "morphling",
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.504,
      "crusader": 0.51,
      "archon": 0.514,
      "legend": 0.517,
      "ancient": 0.52,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 9773,
      "guardian": 21567,
      "crusader": 22374,
      "archon": 16998,
      "legend": 11742,
      "ancient": 7553,
      "divine": 7767
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.537,
      "guardian": 0.533,
      "crusader": 0.524,
      "archon": 0.518,
      "legend": 0.515,
      "ancient": 0.516,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 35107,
      "guardian": 80030,
      "crusader": 91478,
      "archon": 83265,
      "legend": 62934,
      "ancient": 40693,
      "divine": 41051
    },
    "counters": [
      "winter-wyvern",
      "death-prophet",
      "drow-ranger",
      "faceless-void",
      "morphling",
      "techies"
    ],
    "weakAgainst": [
      "bane",
      "naga-siren",
      "lycan",
      "chen",
      "abaddon",
      "huskar"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Ring of Protection",
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.489,
      "crusader": 0.504,
      "archon": 0.502,
      "legend": 0.511,
      "ancient": 0.518,
      "divine": 0.531
    },
    "pickByBracket": {
      "herald": 7324,
      "guardian": 15457,
      "crusader": 17102,
      "archon": 15965,
      "legend": 12709,
      "ancient": 8924,
      "divine": 11627
    },
    "counters": [
      "axe",
      "tiny",
      "hoodwink",
      "bristleback",
      "templar-assassin",
      "void-spirit"
    ],
    "weakAgainst": [
      "monkey-king",
      "skywrath-mage",
      "primal-beast",
      "mars",
      "dark-willow",
      "beastmaster"
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
      "Staff of Wizardry",
      "Point Booster",
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
    "overallWin": 0.438,
    "winByBracket": {
      "herald": 0.443,
      "guardian": 0.431,
      "crusader": 0.421,
      "archon": 0.437,
      "legend": 0.445,
      "ancient": 0.458,
      "divine": 0.453
    },
    "pickByBracket": {
      "herald": 2851,
      "guardian": 6751,
      "crusader": 7465,
      "archon": 6967,
      "legend": 5168,
      "ancient": 3745,
      "divine": 4360
    },
    "counters": [
      "death-prophet",
      "vengeful-spirit",
      "bristleback",
      "magnus",
      "crystal-maiden",
      "hoodwink"
    ],
    "weakAgainst": [
      "oracle",
      "naga-siren",
      "sniper",
      "marci",
      "templar-assassin",
      "bane"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Faerie Fire",
      "Blood Grenade",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Blink Dagger",
      "Ring of Tarrasque",
      "Boots of Bearing",
      "Ogre Axe",
      "Drum of Endurance"
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
    "overallWin": 0.45,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.445,
      "crusader": 0.445,
      "archon": 0.448,
      "legend": 0.449,
      "ancient": 0.459,
      "divine": 0.472
    },
    "pickByBracket": {
      "herald": 8001,
      "guardian": 16921,
      "crusader": 17900,
      "archon": 15159,
      "legend": 10832,
      "ancient": 7302,
      "divine": 8583
    },
    "counters": [
      "chaos-knight",
      "vengeful-spirit",
      "shadow-shaman",
      "zeus",
      "undying",
      "techies"
    ],
    "weakAgainst": [
      "slark",
      "bounty-hunter",
      "batrider",
      "pugna",
      "dazzle",
      "pangolier"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Sage's Mask",
      "Circlet",
      "Magic Wand"
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.523,
      "guardian": 0.518,
      "crusader": 0.52,
      "archon": 0.521,
      "legend": 0.524,
      "ancient": 0.518,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 20439,
      "guardian": 29334,
      "crusader": 23363,
      "archon": 16551,
      "legend": 10652,
      "ancient": 6280,
      "divine": 5078
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.503,
      "crusader": 0.506,
      "archon": 0.516,
      "legend": 0.523,
      "ancient": 0.533,
      "divine": 0.549
    },
    "pickByBracket": {
      "herald": 14172,
      "guardian": 26611,
      "crusader": 27184,
      "archon": 23094,
      "legend": 17943,
      "ancient": 12370,
      "divine": 15251
    },
    "counters": [
      "dragon-knight",
      "snapfire",
      "ursa",
      "queen-of-pain",
      "timbersaw",
      "beastmaster"
    ],
    "weakAgainst": [
      "tusk",
      "ember-spirit",
      "hoodwink",
      "chen"
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.511,
      "crusader": 0.513,
      "archon": 0.505,
      "legend": 0.511,
      "ancient": 0.514,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 2985,
      "guardian": 6299,
      "crusader": 7432,
      "archon": 6979,
      "legend": 6005,
      "ancient": 4468,
      "divine": 6043
    },
    "counters": [
      "sven",
      "centaur-warrunner",
      "dark-willow",
      "void-spirit",
      "warlock",
      "terrorblade"
    ],
    "weakAgainst": [
      "bristleback",
      "largo",
      "beastmaster",
      "rubick",
      "ring-master",
      "invoker"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.536,
      "guardian": 0.509,
      "crusader": 0.484,
      "archon": 0.475,
      "legend": 0.463,
      "ancient": 0.455,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 36600,
      "guardian": 62300,
      "crusader": 53287,
      "archon": 38280,
      "legend": 24029,
      "ancient": 13559,
      "divine": 12172
    },
    "counters": [
      "brewmaster",
      "templar-assassin",
      "sand-king",
      "techies",
      "razor",
      "pugna"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "chen",
      "viper",
      "terrorblade",
      "bane",
      "keeper-of-the-light"
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
      "Consecrated Wraps"
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
      "herald": 0.487,
      "guardian": 0.494,
      "crusader": 0.493,
      "archon": 0.503,
      "legend": 0.497,
      "ancient": 0.506,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 10244,
      "guardian": 17653,
      "crusader": 15514,
      "archon": 11136,
      "legend": 6737,
      "ancient": 4002,
      "divine": 4439
    },
    "counters": [
      "disruptor",
      "tusk",
      "hoodwink",
      "snapfire",
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.507,
      "crusader": 0.504,
      "archon": 0.505,
      "legend": 0.498,
      "ancient": 0.504,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 11263,
      "guardian": 26420,
      "crusader": 32879,
      "archon": 31928,
      "legend": 24435,
      "ancient": 15355,
      "divine": 14647
    },
    "counters": [
      "weaver",
      "medusa",
      "silencer",
      "lich",
      "vengeful-spirit",
      "witch-doctor"
    ],
    "weakAgainst": [
      "treant-protector",
      "brewmaster",
      "marci",
      "timbersaw",
      "grimstroke",
      "nyx-assassin"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Ring of Protection",
      "Tango",
      "Circlet",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blink Dagger",
      "Blade Mail",
      "Broadsword",
      "Ring of Tarrasque",
      "Crimson Guard"
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.511,
      "crusader": 0.513,
      "archon": 0.501,
      "legend": 0.509,
      "ancient": 0.525,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 16367,
      "guardian": 28311,
      "crusader": 24199,
      "archon": 17761,
      "legend": 11522,
      "ancient": 6836,
      "divine": 5646
    },
    "counters": [
      "lich",
      "earthshaker",
      "centaur-warrunner",
      "templar-assassin"
    ],
    "weakAgainst": [
      "beastmaster",
      "jakiro",
      "mars",
      "windranger",
      "invoker",
      "disruptor"
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
    "overallWin": 0.451,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.442,
      "crusader": 0.437,
      "archon": 0.427,
      "legend": 0.466,
      "ancient": 0.456,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 1383,
      "guardian": 2603,
      "crusader": 2555,
      "archon": 2097,
      "legend": 1512,
      "ancient": 1092,
      "divine": 1567
    },
    "counters": [
      "monkey-king",
      "bristleback",
      "storm-spirit",
      "dawnbreaker",
      "terrorblade",
      "ring-master"
    ],
    "weakAgainst": [
      "nature-s-prophet"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Sentry Ward",
      "Observer and Sentry Wards",
      "Smoke of Deceit"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.487,
      "crusader": 0.496,
      "archon": 0.501,
      "legend": 0.514,
      "ancient": 0.517,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 20884,
      "guardian": 30939,
      "crusader": 26706,
      "archon": 21039,
      "legend": 14913,
      "ancient": 9743,
      "divine": 10239
    },
    "counters": [
      "clockwerk",
      "ancient-apparition",
      "skywrath-mage",
      "tidehunter",
      "snapfire",
      "dragon-knight"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "pudge",
      "hoodwink",
      "templar-assassin",
      "slardar",
      "razor"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Magic Wand",
      "Magic Stick",
      "Blades of Attack"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Desolator",
      "Blade of Alacrity",
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
      "guardian": 0.477,
      "crusader": 0.484,
      "archon": 0.484,
      "legend": 0.483,
      "ancient": 0.495,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 6304,
      "guardian": 15622,
      "crusader": 20381,
      "archon": 22108,
      "legend": 19883,
      "ancient": 15562,
      "divine": 20037
    },
    "counters": [
      "death-prophet",
      "luna",
      "tidehunter",
      "dark-seer",
      "witch-doctor",
      "silencer"
    ],
    "weakAgainst": [
      "clinkz",
      "venomancer",
      "monkey-king",
      "beastmaster",
      "leshrac",
      "abaddon"
    ],
    "startItems": [
      "Observer and Sentry Wards",
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Sentry Ward",
      "Boots of Speed"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Essence Distiller",
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.535,
      "guardian": 0.523,
      "crusader": 0.511,
      "archon": 0.505,
      "legend": 0.507,
      "ancient": 0.502,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 37640,
      "guardian": 72626,
      "crusader": 72575,
      "archon": 61309,
      "legend": 44087,
      "ancient": 27236,
      "divine": 25370
    },
    "counters": [
      "drow-ranger",
      "sniper",
      "pugna",
      "chaos-knight",
      "storm-spirit",
      "mars"
    ],
    "weakAgainst": [
      "razor",
      "mirana",
      "batrider",
      "keeper-of-the-light",
      "puck",
      "weaver"
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.483,
      "crusader": 0.487,
      "archon": 0.494,
      "legend": 0.506,
      "ancient": 0.501,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 4904,
      "guardian": 10284,
      "crusader": 11107,
      "archon": 10726,
      "legend": 8753,
      "ancient": 6425,
      "divine": 8409
    },
    "counters": [
      "puck",
      "queen-of-pain",
      "tusk",
      "undying",
      "terrorblade",
      "silencer"
    ],
    "weakAgainst": [
      "phoenix",
      "clockwerk",
      "templar-assassin",
      "marci",
      "ember-spirit",
      "tiny"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Clarity",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Guardian Greaves",
      "Mekansm",
      "Platemail",
      "Blink Dagger",
      "Vitality Booster"
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
      "herald": 0.474,
      "guardian": 0.473,
      "crusader": 0.48,
      "archon": 0.487,
      "legend": 0.495,
      "ancient": 0.501,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 11231,
      "guardian": 21050,
      "crusader": 22703,
      "archon": 20614,
      "legend": 16635,
      "ancient": 11115,
      "divine": 12870
    },
    "counters": [
      "witch-doctor",
      "weaver",
      "storm-spirit",
      "luna",
      "zeus",
      "faceless-void"
    ],
    "weakAgainst": [
      "treant-protector",
      "ring-master",
      "brewmaster",
      "pugna",
      "phantom-lancer",
      "terrorblade"
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
      "Staff of Wizardry",
      "Eul's Scepter of Divinity",
      "Blink Dagger",
      "Arcane Boots",
      "Essence Distiller"
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.515,
      "crusader": 0.521,
      "archon": 0.517,
      "legend": 0.517,
      "ancient": 0.516,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 13891,
      "guardian": 35712,
      "crusader": 48435,
      "archon": 49793,
      "legend": 42627,
      "ancient": 30064,
      "divine": 34862
    },
    "counters": [
      "tinker",
      "death-prophet",
      "phantom-lancer",
      "vengeful-spirit",
      "medusa",
      "earthshaker"
    ],
    "weakAgainst": [
      "treant-protector",
      "chen",
      "kez",
      "bane",
      "alchemist",
      "morphling"
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
      "Ogre Axe",
      "Broadsword",
      "Echo Sabre",
      "Aghanim's Shard",
      "Mithril Hammer"
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.5,
      "crusader": 0.511,
      "archon": 0.516,
      "legend": 0.512,
      "ancient": 0.523,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 11336,
      "guardian": 26612,
      "crusader": 29501,
      "archon": 25297,
      "legend": 17876,
      "ancient": 11176,
      "divine": 10802
    },
    "counters": [
      "magnus",
      "skywrath-mage",
      "morphling",
      "warlock",
      "underlord",
      "marci"
    ],
    "weakAgainst": [
      "pugna",
      "slardar",
      "doom",
      "void-spirit",
      "monkey-king",
      "shadow-demon"
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.473,
      "crusader": 0.47,
      "archon": 0.473,
      "legend": 0.475,
      "ancient": 0.472,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 13650,
      "guardian": 22041,
      "crusader": 22152,
      "archon": 19614,
      "legend": 15278,
      "ancient": 10227,
      "divine": 11471
    },
    "counters": [
      "viper",
      "slardar",
      "zeus",
      "shadow-shaman",
      "timbersaw",
      "ogre-magi"
    ],
    "weakAgainst": [
      "terrorblade",
      "batrider",
      "monkey-king",
      "clockwerk",
      "sniper",
      "spirit-breaker"
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
      "Blade of Alacrity",
      "Kaya"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.495,
      "crusader": 0.492,
      "archon": 0.497,
      "legend": 0.501,
      "ancient": 0.505,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 10581,
      "guardian": 28645,
      "crusader": 38729,
      "archon": 40013,
      "legend": 33400,
      "ancient": 23039,
      "divine": 25394
    },
    "counters": [
      "outworld-devourer",
      "chaos-knight",
      "phantom-assassin",
      "muerta",
      "phantom-lancer",
      "death-prophet"
    ],
    "weakAgainst": [
      "broodmother",
      "kez",
      "chen",
      "enchantress",
      "drow-ranger",
      "io"
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.455,
      "crusader": 0.46,
      "archon": 0.469,
      "legend": 0.481,
      "ancient": 0.491,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 9486,
      "guardian": 23490,
      "crusader": 30307,
      "archon": 30999,
      "legend": 26040,
      "ancient": 19165,
      "divine": 23954
    },
    "counters": [
      "sven",
      "morphling",
      "lifestealer",
      "weaver",
      "dazzle",
      "chaos-knight"
    ],
    "weakAgainst": [
      "nature-s-prophet",
      "bane",
      "keeper-of-the-light",
      "legion-commander",
      "magnus",
      "leshrac"
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.492,
      "crusader": 0.496,
      "archon": 0.482,
      "legend": 0.481,
      "ancient": 0.475,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 14030,
      "guardian": 26607,
      "crusader": 26240,
      "archon": 20458,
      "legend": 13106,
      "ancient": 6965,
      "divine": 5517
    },
    "counters": [
      "drow-ranger",
      "phantom-lancer",
      "morphling",
      "troll-warlord",
      "legion-commander",
      "wraith-king"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "venomancer",
      "treant-protector",
      "clinkz",
      "keeper-of-the-light",
      "largo"
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.504,
      "crusader": 0.508,
      "archon": 0.511,
      "legend": 0.513,
      "ancient": 0.515,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 44575,
      "guardian": 89200,
      "crusader": 96784,
      "archon": 88532,
      "legend": 67877,
      "ancient": 44479,
      "divine": 46718
    },
    "counters": [
      "kez",
      "underlord",
      "necrophos",
      "disruptor",
      "tidehunter",
      "bristleback"
    ],
    "weakAgainst": [
      "crystal-maiden",
      "dragon-knight",
      "treant-protector",
      "warlock",
      "axe",
      "clockwerk"
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.492,
      "crusader": 0.49,
      "archon": 0.51,
      "legend": 0.521,
      "ancient": 0.521,
      "divine": 0.53
    },
    "pickByBracket": {
      "herald": 5365,
      "guardian": 14046,
      "crusader": 18778,
      "archon": 20303,
      "legend": 18537,
      "ancient": 13714,
      "divine": 19342
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.494,
      "crusader": 0.5,
      "archon": 0.501,
      "legend": 0.503,
      "ancient": 0.506,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 32463,
      "guardian": 69118,
      "crusader": 75310,
      "archon": 67965,
      "legend": 51748,
      "ancient": 33468,
      "divine": 32010
    },
    "counters": [
      "wraith-king",
      "primal-beast",
      "sven",
      "sniper",
      "undying",
      "axe"
    ],
    "weakAgainst": [
      "monkey-king",
      "huskar",
      "bane",
      "chaos-knight",
      "spirit-breaker",
      "necrophos"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Gauntlets of Strength",
      "Circlet",
      "Observer and Sentry Wards",
      "Observer Ward"
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.491,
      "crusader": 0.503,
      "archon": 0.525,
      "legend": 0.522,
      "ancient": 0.522,
      "divine": 0.539
    },
    "pickByBracket": {
      "herald": 2811,
      "guardian": 5254,
      "crusader": 5198,
      "archon": 4335,
      "legend": 3327,
      "ancient": 2358,
      "divine": 2918
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Wind Lace",
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.461,
      "guardian": 0.473,
      "crusader": 0.486,
      "archon": 0.498,
      "legend": 0.5,
      "ancient": 0.504,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 9741,
      "guardian": 22842,
      "crusader": 30369,
      "archon": 32788,
      "legend": 28406,
      "ancient": 21247,
      "divine": 26087
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.478,
      "crusader": 0.478,
      "archon": 0.477,
      "legend": 0.471,
      "ancient": 0.477,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 10557,
      "guardian": 14948,
      "crusader": 12808,
      "archon": 9985,
      "legend": 7160,
      "ancient": 4897,
      "divine": 6028
    },
    "counters": [
      "disruptor",
      "ursa",
      "earthshaker",
      "terrorblade",
      "techies",
      "void-spirit"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "marci",
      "slardar",
      "juggernaut",
      "bane",
      "doom"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Blood Grenade",
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.493,
      "crusader": 0.495,
      "archon": 0.505,
      "legend": 0.509,
      "ancient": 0.517,
      "divine": 0.545
    },
    "pickByBracket": {
      "herald": 9629,
      "guardian": 19884,
      "crusader": 20159,
      "archon": 16568,
      "legend": 11558,
      "ancient": 7179,
      "divine": 8001
    },
    "counters": [
      "ursa",
      "windranger",
      "tiny",
      "shadow-fiend",
      "disruptor",
      "jakiro"
    ],
    "weakAgainst": [
      "pudge",
      "queen-of-pain",
      "centaur-warrunner",
      "rubick",
      "gyrocopter",
      "hoodwink"
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
      "Ogre Axe",
      "Mithril Hammer",
      "Aghanim's Shard",
      "Ring of Tarrasque"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.49,
      "crusader": 0.494,
      "archon": 0.496,
      "legend": 0.496,
      "ancient": 0.502,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 29189,
      "guardian": 64294,
      "crusader": 71179,
      "archon": 65309,
      "legend": 49374,
      "ancient": 32218,
      "divine": 33218
    },
    "counters": [
      "templar-assassin",
      "abaddon",
      "dragon-knight",
      "dawnbreaker",
      "storm-spirit",
      "primal-beast"
    ],
    "weakAgainst": [
      "sniper",
      "keeper-of-the-light",
      "muerta",
      "juggernaut",
      "tidehunter",
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.513,
      "crusader": 0.516,
      "archon": 0.511,
      "legend": 0.517,
      "ancient": 0.518,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 11233,
      "guardian": 27099,
      "crusader": 34438,
      "archon": 33250,
      "legend": 26913,
      "ancient": 18688,
      "divine": 20533
    },
    "counters": [
      "muerta",
      "leshrac",
      "templar-assassin",
      "ring-master",
      "necrophos",
      "tidehunter"
    ],
    "weakAgainst": [
      "sniper",
      "techies",
      "monkey-king",
      "snapfire",
      "shadow-shaman",
      "timbersaw"
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
      "Glimmer Cape",
      "Aether Lens"
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
    "overallWin": 0.426,
    "winByBracket": {
      "herald": 0.43,
      "guardian": 0.42,
      "crusader": 0.424,
      "archon": 0.433,
      "legend": 0.43,
      "ancient": 0.428,
      "divine": 0.411
    },
    "pickByBracket": {
      "herald": 6382,
      "guardian": 12981,
      "crusader": 15864,
      "archon": 15267,
      "legend": 11820,
      "ancient": 7336,
      "divine": 6417
    },
    "counters": [
      "templar-assassin",
      "techies",
      "lion",
      "earth-spirit",
      "sven",
      "troll-warlord"
    ],
    "weakAgainst": [
      "treant-protector",
      "nyx-assassin",
      "witch-doctor",
      "naga-siren",
      "alchemist",
      "bane"
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
      "Point Booster"
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
    "overallWin": 0.479,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.479,
      "crusader": 0.478,
      "archon": 0.476,
      "legend": 0.479,
      "ancient": 0.482,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 24588,
      "guardian": 52200,
      "crusader": 58709,
      "archon": 54417,
      "legend": 42466,
      "ancient": 28831,
      "divine": 31855
    },
    "counters": [
      "phantom-lancer",
      "death-prophet",
      "underlord",
      "huskar",
      "clinkz",
      "silencer"
    ],
    "weakAgainst": [
      "naga-siren",
      "bane",
      "keeper-of-the-light",
      "lone-druid",
      "treant-protector",
      "batrider"
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
      "Essence Distiller",
      "Staff of Wizardry",
      "Vitality Booster",
      "Rod of Atos"
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
      "herald": 0.446,
      "guardian": 0.438,
      "crusader": 0.446,
      "archon": 0.456,
      "legend": 0.457,
      "ancient": 0.468,
      "divine": 0.457
    },
    "pickByBracket": {
      "herald": 18558,
      "guardian": 27619,
      "crusader": 25806,
      "archon": 21375,
      "legend": 14952,
      "ancient": 9773,
      "divine": 10407
    },
    "counters": [
      "silencer",
      "earthshaker",
      "storm-spirit",
      "spirit-breaker",
      "tidehunter",
      "templar-assassin"
    ],
    "weakAgainst": [
      "nature-s-prophet",
      "hoodwink",
      "shadow-shaman",
      "beastmaster",
      "marci",
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.499,
      "crusader": 0.5,
      "archon": 0.507,
      "legend": 0.511,
      "ancient": 0.513,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 33676,
      "guardian": 86448,
      "crusader": 105917,
      "archon": 102508,
      "legend": 79970,
      "ancient": 53471,
      "divine": 57263
    },
    "counters": [
      "lina",
      "weaver",
      "troll-warlord",
      "chaos-knight",
      "ancient-apparition",
      "magnus"
    ],
    "weakAgainst": [
      "treant-protector",
      "nyx-assassin",
      "tinker",
      "naga-siren",
      "oracle",
      "lycan"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Observer Ward",
      "Faerie Fire",
      "Tango",
      "Mantle of Intelligence"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Boots of Travel",
      "Point Booster",
      "Ogre Axe",
      "Aghanim's Shard"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.499,
      "crusader": 0.502,
      "archon": 0.501,
      "legend": 0.501,
      "ancient": 0.508,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 8879,
      "guardian": 20092,
      "crusader": 21309,
      "archon": 17722,
      "legend": 13262,
      "ancient": 9047,
      "divine": 10911
    },
    "counters": [
      "ember-spirit",
      "disruptor",
      "jakiro",
      "snapfire",
      "hoodwink",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "pudge",
      "axe",
      "rubick",
      "lion"
    ],
    "startItems": [
      "Tango",
      "Iron Branch",
      "Ring of Regen",
      "Blood Grenade",
      "Headdress",
      "Observer and Sentry Wards"
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.483,
      "crusader": 0.482,
      "archon": 0.472,
      "legend": 0.469,
      "ancient": 0.46,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 18001,
      "guardian": 41182,
      "crusader": 48845,
      "archon": 45170,
      "legend": 32337,
      "ancient": 19226,
      "divine": 15855
    },
    "counters": [
      "chaos-knight",
      "omniknight",
      "tinker",
      "broodmother",
      "weaver",
      "oracle"
    ],
    "weakAgainst": [
      "treant-protector",
      "io",
      "lone-druid",
      "clinkz",
      "bane",
      "naga-siren"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.515,
      "crusader": 0.517,
      "archon": 0.524,
      "legend": 0.523,
      "ancient": 0.521,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 39728,
      "guardian": 84544,
      "crusader": 93072,
      "archon": 84720,
      "legend": 61599,
      "ancient": 38036,
      "divine": 34936
    },
    "counters": [
      "zeus",
      "pangolier",
      "techies",
      "phoenix",
      "legion-commander",
      "faceless-void"
    ],
    "weakAgainst": [
      "abaddon",
      "venomancer",
      "sniper",
      "kez",
      "snapfire",
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.499,
      "crusader": 0.51,
      "archon": 0.515,
      "legend": 0.524,
      "ancient": 0.529,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 13386,
      "guardian": 28383,
      "crusader": 30571,
      "archon": 26610,
      "legend": 20976,
      "ancient": 14429,
      "divine": 18311
    },
    "counters": [
      "warlock",
      "bristleback",
      "hoodwink",
      "abaddon",
      "spirit-breaker",
      "phoenix"
    ],
    "weakAgainst": [
      "treant-protector",
      "bane",
      "batrider",
      "viper",
      "pudge",
      "monkey-king"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Blood Grenade",
      "Circlet",
      "Sentry Ward"
    ],
    "coreItems": [
      "Holy Locket",
      "Staff of Wizardry",
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
    "overallWin": 0.452,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.454,
      "crusader": 0.453,
      "archon": 0.453,
      "legend": 0.449,
      "ancient": 0.454,
      "divine": 0.446
    },
    "pickByBracket": {
      "herald": 9724,
      "guardian": 20038,
      "crusader": 23361,
      "archon": 23456,
      "legend": 20292,
      "ancient": 14922,
      "divine": 17533
    },
    "counters": [
      "disruptor",
      "lifestealer",
      "dawnbreaker",
      "lich",
      "tiny",
      "weaver"
    ],
    "weakAgainst": [
      "drow-ranger",
      "treant-protector",
      "largo",
      "windranger",
      "batrider",
      "razor"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Magic Wand",
      "Quelling Blade",
      "Circlet"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Blade of Alacrity",
      "Mage Slayer",
      "Desolator",
      "Ogre Axe"
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.484,
      "crusader": 0.488,
      "archon": 0.494,
      "legend": 0.502,
      "ancient": 0.505,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 12123,
      "guardian": 25565,
      "crusader": 29145,
      "archon": 27923,
      "legend": 22697,
      "ancient": 14761,
      "divine": 14920
    },
    "counters": [
      "sven",
      "morphling",
      "bristleback",
      "weaver",
      "skywrath-mage",
      "hoodwink"
    ],
    "weakAgainst": [
      "terrorblade",
      "templar-assassin",
      "monkey-king",
      "shadow-demon",
      "dazzle",
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.477,
      "crusader": 0.481,
      "archon": 0.478,
      "legend": 0.483,
      "ancient": 0.491,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 3346,
      "guardian": 7192,
      "crusader": 8956,
      "archon": 9197,
      "legend": 7637,
      "ancient": 5565,
      "divine": 6618
    },
    "counters": [
      "queen-of-pain",
      "primal-beast",
      "pangolier",
      "pudge",
      "timbersaw",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "sniper",
      "treant-protector",
      "beastmaster",
      "shadow-demon",
      "batrider",
      "axe"
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
      "Sange",
      "Kaya and Sange"
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
      "herald": 0.528,
      "guardian": 0.529,
      "crusader": 0.527,
      "archon": 0.528,
      "legend": 0.518,
      "ancient": 0.526,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 37829,
      "guardian": 88794,
      "crusader": 97010,
      "archon": 83894,
      "legend": 58948,
      "ancient": 34701,
      "divine": 31257
    },
    "counters": [
      "luna",
      "medusa",
      "doom",
      "bristleback",
      "lina",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "storm-spirit",
      "tusk",
      "abaddon",
      "juggernaut",
      "slardar",
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.491,
      "crusader": 0.496,
      "archon": 0.504,
      "legend": 0.5,
      "ancient": 0.5,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 4851,
      "guardian": 9707,
      "crusader": 10301,
      "archon": 9381,
      "legend": 7209,
      "ancient": 5145,
      "divine": 6171
    },
    "counters": [
      "muerta",
      "silencer",
      "lina",
      "slark",
      "lycan",
      "axe"
    ],
    "weakAgainst": [
      "grimstroke",
      "bane",
      "naga-siren",
      "chen",
      "dawnbreaker",
      "abaddon"
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.527,
      "crusader": 0.524,
      "archon": 0.523,
      "legend": 0.523,
      "ancient": 0.517,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 23431,
      "guardian": 51108,
      "crusader": 61744,
      "archon": 60413,
      "legend": 48614,
      "ancient": 32999,
      "divine": 33205
    },
    "counters": [
      "sven",
      "ring-master",
      "ursa",
      "wraith-king",
      "sand-king",
      "tidehunter"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "treant-protector",
      "chaos-knight",
      "kez",
      "muerta",
      "sniper"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Sentry Ward",
      "Faerie Fire",
      "Enchanted Mango"
    ],
    "coreItems": [
      "Glimmer Cape",
      "Aghanim's Shard",
      "Blink Dagger",
      "Staff of Wizardry",
      "Pavise"
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.51,
      "crusader": 0.517,
      "archon": 0.521,
      "legend": 0.523,
      "ancient": 0.52,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 18439,
      "guardian": 45105,
      "crusader": 55157,
      "archon": 52341,
      "legend": 40795,
      "ancient": 26941,
      "divine": 26893
    },
    "counters": [
      "witch-doctor",
      "phantom-assassin",
      "weaver",
      "night-stalker",
      "grimstroke",
      "vengeful-spirit"
    ],
    "weakAgainst": [
      "kez",
      "alchemist",
      "morphling",
      "phoenix",
      "slardar",
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.485,
      "crusader": 0.493,
      "archon": 0.5,
      "legend": 0.499,
      "ancient": 0.503,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 38902,
      "guardian": 72817,
      "crusader": 79434,
      "archon": 71732,
      "legend": 53582,
      "ancient": 34844,
      "divine": 34324
    },
    "counters": [
      "underlord",
      "death-prophet",
      "warlock",
      "axe",
      "troll-warlord",
      "dark-willow"
    ],
    "weakAgainst": [
      "invoker",
      "pangolier",
      "monkey-king",
      "slardar",
      "timbersaw",
      "leshrac"
    ],
    "startItems": [
      "Iron Branch",
      "Observer Ward",
      "Tango",
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
      "guardian": 0.49,
      "crusader": 0.489,
      "archon": 0.488,
      "legend": 0.489,
      "ancient": 0.491,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 62368,
      "guardian": 145121,
      "crusader": 165799,
      "archon": 151453,
      "legend": 113569,
      "ancient": 73533,
      "divine": 72081
    },
    "counters": [
      "troll-warlord",
      "tinker",
      "grimstroke",
      "death-prophet",
      "dark-willow",
      "sven"
    ],
    "weakAgainst": [
      "lycan",
      "treant-protector",
      "monkey-king",
      "undying",
      "abaddon",
      "kunkka"
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
      "Ghost Scepter",
      "Blitz Knuckles",
      "Glimmer Cape"
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.488,
      "crusader": 0.482,
      "archon": 0.5,
      "legend": 0.491,
      "ancient": 0.473,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 5373,
      "guardian": 12703,
      "crusader": 14113,
      "archon": 12134,
      "legend": 9316,
      "ancient": 6306,
      "divine": 7210
    },
    "counters": [
      "shadow-fiend",
      "windranger",
      "hoodwink",
      "tiny",
      "rubick",
      "jakiro"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.5,
      "crusader": 0.499,
      "archon": 0.493,
      "legend": 0.491,
      "ancient": 0.496,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 19153,
      "guardian": 36631,
      "crusader": 41445,
      "archon": 40022,
      "legend": 31748,
      "ancient": 21639,
      "divine": 25538
    },
    "counters": [
      "morphling",
      "sand-king",
      "phantom-assassin",
      "sniper",
      "earthshaker",
      "alchemist"
    ],
    "weakAgainst": [
      "clockwerk",
      "legion-commander",
      "monkey-king",
      "techies",
      "keeper-of-the-light",
      "muerta"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Magic Wand",
      "Magic Stick",
      "Tango",
      "Circlet"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Yasha",
      "Diadem",
      "Manta Style",
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.46,
      "guardian": 0.462,
      "crusader": 0.473,
      "archon": 0.482,
      "legend": 0.495,
      "ancient": 0.486,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 3682,
      "guardian": 7684,
      "crusader": 7883,
      "archon": 6764,
      "legend": 5362,
      "ancient": 3645,
      "divine": 5039
    },
    "counters": [
      "skywrath-mage",
      "sven",
      "axe",
      "lion",
      "pudge",
      "ursa"
    ],
    "weakAgainst": [
      "leshrac",
      "beastmaster",
      "terrorblade",
      "tusk",
      "ogre-magi",
      "bane"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Sage's Mask",
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.485,
      "crusader": 0.488,
      "archon": 0.496,
      "legend": 0.499,
      "ancient": 0.494,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 11247,
      "guardian": 36139,
      "crusader": 53815,
      "archon": 58385,
      "legend": 49452,
      "ancient": 33690,
      "divine": 33866
    },
    "counters": [
      "void-spirit",
      "bristleback",
      "phoenix",
      "doom",
      "warlock",
      "pudge"
    ],
    "weakAgainst": [
      "dazzle",
      "batrider",
      "terrorblade",
      "juggernaut",
      "tusk",
      "invoker"
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
      "Diadem",
      "Broadsword",
      "Echo Sabre"
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.48,
      "crusader": 0.488,
      "archon": 0.493,
      "legend": 0.491,
      "ancient": 0.497,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 10235,
      "guardian": 18207,
      "crusader": 19693,
      "archon": 17774,
      "legend": 13646,
      "ancient": 9297,
      "divine": 10412
    },
    "counters": [
      "death-prophet",
      "winter-wyvern",
      "dark-seer",
      "witch-doctor",
      "ursa",
      "void-spirit"
    ],
    "weakAgainst": [
      "dazzle",
      "ancient-apparition",
      "phoenix",
      "puck",
      "lycan",
      "viper"
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
      "herald": 0.464,
      "guardian": 0.464,
      "crusader": 0.467,
      "archon": 0.466,
      "legend": 0.465,
      "ancient": 0.47,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 7824,
      "guardian": 20424,
      "crusader": 28377,
      "archon": 31145,
      "legend": 27506,
      "ancient": 20565,
      "divine": 22908
    },
    "counters": [
      "chaos-knight",
      "outworld-devourer",
      "drow-ranger",
      "medusa",
      "weaver",
      "spectre"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "phoenix",
      "ancient-apparition",
      "shadow-demon",
      "alchemist"
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
      "Mithril Hammer",
      "Aghanim's Shard",
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.5,
      "crusader": 0.498,
      "archon": 0.501,
      "legend": 0.493,
      "ancient": 0.492,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 10672,
      "guardian": 22475,
      "crusader": 22706,
      "archon": 20277,
      "legend": 14067,
      "ancient": 8447,
      "divine": 7414
    },
    "counters": [
      "weaver",
      "undying",
      "warlock",
      "dark-willow",
      "slardar",
      "sand-king"
    ],
    "weakAgainst": [
      "shadow-demon",
      "ogre-magi",
      "shadow-shaman",
      "centaur-warrunner",
      "troll-warlord",
      "sniper"
    ],
    "startItems": [
      "Iron Branch",
      "Magic Stick",
      "Enchanted Mango",
      "Circlet",
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.519,
      "crusader": 0.501,
      "archon": 0.524,
      "legend": 0.526,
      "ancient": 0.542,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 6253,
      "guardian": 11128,
      "crusader": 10355,
      "archon": 8220,
      "legend": 5164,
      "ancient": 3158,
      "divine": 3668
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
      "herald": 0.509,
      "guardian": 0.51,
      "crusader": 0.515,
      "archon": 0.515,
      "legend": 0.505,
      "ancient": 0.506,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 15730,
      "guardian": 34649,
      "crusader": 38886,
      "archon": 35304,
      "legend": 26300,
      "ancient": 16166,
      "divine": 15852
    },
    "counters": [
      "ursa",
      "storm-spirit",
      "crystal-maiden",
      "shadow-shaman",
      "ogre-magi",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "zeus",
      "tusk",
      "tidehunter",
      "mars",
      "jakiro",
      "luna"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Faerie Fire",
      "Circlet",
      "Sentry Ward"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Arcane Boots",
      "Blade of Alacrity",
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
    "overallWin": 0.444,
    "winByBracket": {
      "herald": 0.437,
      "guardian": 0.436,
      "crusader": 0.437,
      "archon": 0.446,
      "legend": 0.448,
      "ancient": 0.459,
      "divine": 0.458
    },
    "pickByBracket": {
      "herald": 15684,
      "guardian": 29433,
      "crusader": 31510,
      "archon": 28955,
      "legend": 23055,
      "ancient": 15257,
      "divine": 16676
    },
    "counters": [
      "undying",
      "earthshaker",
      "death-prophet",
      "weaver",
      "bane",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "treant-protector",
      "chen",
      "zeus",
      "crystal-maiden",
      "dawnbreaker",
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
      "Broadsword",
      "Echo Sabre",
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.483,
      "crusader": 0.482,
      "archon": 0.486,
      "legend": 0.489,
      "ancient": 0.488,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 10140,
      "guardian": 22440,
      "crusader": 24985,
      "archon": 21963,
      "legend": 16219,
      "ancient": 11344,
      "divine": 12690
    },
    "counters": [
      "weaver",
      "lifestealer",
      "terrorblade",
      "dawnbreaker",
      "void-spirit",
      "anti-mage"
    ],
    "weakAgainst": [
      "luna",
      "doom",
      "dazzle",
      "timbersaw",
      "kunkka",
      "pudge"
    ],
    "startItems": [
      "Iron Branch",
      "Magic Wand",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Slippers of Agility"
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
    "overallWin": 0.469,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.469,
      "crusader": 0.468,
      "archon": 0.471,
      "legend": 0.462,
      "ancient": 0.471,
      "divine": 0.472
    },
    "pickByBracket": {
      "herald": 11179,
      "guardian": 20058,
      "crusader": 22470,
      "archon": 21849,
      "legend": 17562,
      "ancient": 12390,
      "divine": 13053
    },
    "counters": [
      "techies",
      "lich",
      "bristleback",
      "faceless-void",
      "tusk",
      "luna"
    ],
    "weakAgainst": [
      "slark",
      "grimstroke",
      "leshrac",
      "primal-beast",
      "huskar",
      "sand-king"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.498,
      "crusader": 0.489,
      "archon": 0.49,
      "legend": 0.492,
      "ancient": 0.487,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 8337,
      "guardian": 12798,
      "crusader": 9733,
      "archon": 6577,
      "legend": 4137,
      "ancient": 2391,
      "divine": 2798
    },
    "counters": [
      "void-spirit",
      "windranger",
      "axe",
      "puck",
      "hoodwink",
      "templar-assassin"
    ],
    "weakAgainst": [
      "storm-spirit",
      "sand-king",
      "dragon-knight",
      "shadow-fiend",
      "ember-spirit"
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
      "Oblivion Staff",
      "Diadem",
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
    "overallWin": 0.431,
    "winByBracket": {
      "herald": 0.447,
      "guardian": 0.43,
      "crusader": 0.43,
      "archon": 0.423,
      "legend": 0.432,
      "ancient": 0.43,
      "divine": 0.441
    },
    "pickByBracket": {
      "herald": 25842,
      "guardian": 51754,
      "crusader": 53669,
      "archon": 46337,
      "legend": 34198,
      "ancient": 22028,
      "divine": 22620
    },
    "counters": [
      "razor",
      "phantom-lancer",
      "doom",
      "huskar",
      "pangolier",
      "sniper"
    ],
    "weakAgainst": [
      "kez",
      "naga-siren",
      "morphling",
      "nyx-assassin",
      "bane",
      "tidehunter"
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
      "Blade of Alacrity",
      "Mithril Hammer",
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
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.538,
      "guardian": 0.533,
      "crusader": 0.525,
      "archon": 0.521,
      "legend": 0.521,
      "ancient": 0.514,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 42505,
      "guardian": 94613,
      "crusader": 105026,
      "archon": 96296,
      "legend": 72962,
      "ancient": 47359,
      "divine": 47700
    },
    "counters": [
      "underlord",
      "sven",
      "witch-doctor",
      "bristleback",
      "void-spirit",
      "earthshaker"
    ],
    "weakAgainst": [
      "grimstroke",
      "drow-ranger",
      "beastmaster",
      "clockwerk",
      "ring-master",
      "invoker"
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
      "Radiance",
      "Aghanim's Shard",
      "Boots of Travel",
      "Sacred Relic",
      "Talisman of Evasion"
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
      "herald": 0.491,
      "guardian": 0.508,
      "crusader": 0.522,
      "archon": 0.533,
      "legend": 0.533,
      "ancient": 0.534,
      "divine": 0.539
    },
    "pickByBracket": {
      "herald": 11820,
      "guardian": 30819,
      "crusader": 41407,
      "archon": 41890,
      "legend": 35362,
      "ancient": 24630,
      "divine": 29272
    },
    "counters": [
      "dark-willow",
      "ancient-apparition",
      "timbersaw",
      "zeus",
      "storm-spirit",
      "tidehunter"
    ],
    "weakAgainst": [
      "lifestealer",
      "pugna",
      "undying",
      "beastmaster",
      "terrorblade",
      "invoker"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Circlet",
      "Tango",
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
      "herald": 0.514,
      "guardian": 0.52,
      "crusader": 0.522,
      "archon": 0.522,
      "legend": 0.519,
      "ancient": 0.525,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 15279,
      "guardian": 35632,
      "crusader": 42204,
      "archon": 40911,
      "legend": 33593,
      "ancient": 22219,
      "divine": 23996
    },
    "counters": [
      "lich",
      "bristleback",
      "gyrocopter",
      "void-spirit",
      "sven",
      "invoker"
    ],
    "weakAgainst": [
      "pangolier",
      "pudge",
      "phoenix",
      "terrorblade",
      "abaddon",
      "rubick"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Boots of Speed",
      "Sentry Ward",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Eul's Scepter of Divinity",
      "Point Booster",
      "Arcane Boots",
      "Blink Dagger"
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.51,
      "crusader": 0.506,
      "archon": 0.502,
      "legend": 0.502,
      "ancient": 0.493,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 47777,
      "guardian": 101273,
      "crusader": 103775,
      "archon": 85963,
      "legend": 57965,
      "ancient": 32831,
      "divine": 25902
    },
    "counters": [
      "medusa",
      "winter-wyvern",
      "bristleback",
      "ancient-apparition",
      "anti-mage",
      "phantom-lancer"
    ],
    "weakAgainst": [
      "phoenix",
      "pugna",
      "mirana",
      "treant-protector",
      "bounty-hunter",
      "alchemist"
    ],
    "startItems": [
      "Tango",
      "Iron Branch",
      "Observer and Sentry Wards",
      "Gauntlets of Strength",
      "Blood Grenade",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Hand of Midas",
      "Aether Lens",
      "Staff of Wizardry",
      "Ogre Axe"
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.484,
      "crusader": 0.502,
      "archon": 0.507,
      "legend": 0.511,
      "ancient": 0.508,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 6415,
      "guardian": 12599,
      "crusader": 13734,
      "archon": 12443,
      "legend": 9377,
      "ancient": 6310,
      "divine": 6390
    },
    "counters": [
      "tiny",
      "shadow-fiend",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "jakiro",
      "windranger",
      "pudge",
      "rubick"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.479,
      "crusader": 0.492,
      "archon": 0.501,
      "legend": 0.505,
      "ancient": 0.519,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 5639,
      "guardian": 13122,
      "crusader": 18173,
      "archon": 18168,
      "legend": 14902,
      "ancient": 10183,
      "divine": 11987
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.493,
      "crusader": 0.498,
      "archon": 0.503,
      "legend": 0.508,
      "ancient": 0.503,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 9574,
      "guardian": 20404,
      "crusader": 24536,
      "archon": 22747,
      "legend": 17521,
      "ancient": 10492,
      "divine": 10245
    },
    "counters": [
      "jakiro",
      "lion"
    ],
    "weakAgainst": [
      "timbersaw",
      "mars",
      "disruptor",
      "invoker",
      "queen-of-pain",
      "tusk"
    ],
    "startItems": [
      "Iron Branch",
      "Mantle of Intelligence",
      "Tango",
      "Observer Ward",
      "Circlet",
      "Faerie Fire"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Witch Blade",
      "Dragon Lance",
      "Oblivion Staff"
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
      "herald": 0.448,
      "guardian": 0.445,
      "crusader": 0.46,
      "archon": 0.463,
      "legend": 0.47,
      "ancient": 0.465,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 5561,
      "guardian": 12886,
      "crusader": 17744,
      "archon": 19917,
      "legend": 18665,
      "ancient": 14243,
      "divine": 18749
    },
    "counters": [
      "lina",
      "sven",
      "beastmaster",
      "lion",
      "jakiro",
      "death-prophet"
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
      "Circlet",
      "Faerie Fire",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Blink Dagger",
      "Diffusal Blade",
      "Staff of Wizardry",
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.515,
      "crusader": 0.51,
      "archon": 0.504,
      "legend": 0.501,
      "ancient": 0.496,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 49968,
      "guardian": 92108,
      "crusader": 86486,
      "archon": 68045,
      "legend": 44840,
      "ancient": 25092,
      "divine": 20841
    },
    "counters": [
      "ogre-magi",
      "dragon-knight",
      "lion"
    ],
    "weakAgainst": [
      "rubick",
      "lifestealer",
      "pudge",
      "queen-of-pain",
      "templar-assassin",
      "shadow-shaman"
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.523,
      "crusader": 0.527,
      "archon": 0.527,
      "legend": 0.524,
      "ancient": 0.523,
      "divine": 0.534
    },
    "pickByBracket": {
      "herald": 32495,
      "guardian": 65697,
      "crusader": 65400,
      "archon": 51011,
      "legend": 35730,
      "ancient": 22504,
      "divine": 24938
    },
    "counters": [
      "dark-willow",
      "shadow-shaman",
      "slardar",
      "jakiro",
      "templar-assassin",
      "invoker"
    ],
    "weakAgainst": [
      "shadow-demon",
      "queen-of-pain",
      "hoodwink",
      "nature-s-prophet",
      "spirit-breaker",
      "terrorblade"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.507,
      "crusader": 0.499,
      "archon": 0.508,
      "legend": 0.505,
      "ancient": 0.504,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 9022,
      "guardian": 24840,
      "crusader": 32448,
      "archon": 32519,
      "legend": 27213,
      "ancient": 19567,
      "divine": 24250
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.482,
      "crusader": 0.484,
      "archon": 0.48,
      "legend": 0.493,
      "ancient": 0.493,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 8141,
      "guardian": 18082,
      "crusader": 19903,
      "archon": 18091,
      "legend": 13867,
      "ancient": 9606,
      "divine": 11475
    },
    "counters": [
      "muerta",
      "gyrocopter",
      "viper",
      "puck",
      "dark-willow",
      "terrorblade"
    ],
    "weakAgainst": [
      "earthshaker",
      "largo",
      "shadow-demon",
      "razor",
      "clockwerk",
      "invoker"
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.453,
      "crusader": 0.463,
      "archon": 0.474,
      "legend": 0.473,
      "ancient": 0.479,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 7134,
      "guardian": 17045,
      "crusader": 22009,
      "archon": 22672,
      "legend": 19402,
      "ancient": 14013,
      "divine": 17455
    },
    "counters": [
      "weaver",
      "sven",
      "crystal-maiden",
      "dark-willow",
      "silencer",
      "invoker"
    ],
    "weakAgainst": [
      "naga-siren",
      "dark-seer",
      "bounty-hunter",
      "huskar",
      "nyx-assassin",
      "oracle"
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
      "Blink Dagger",
      "Witch Blade",
      "Oblivion Staff",
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.513,
      "crusader": 0.513,
      "archon": 0.51,
      "legend": 0.507,
      "ancient": 0.508,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 62741,
      "guardian": 151201,
      "crusader": 165214,
      "archon": 140967,
      "legend": 101104,
      "ancient": 66125,
      "divine": 72995
    },
    "counters": [
      "io",
      "clinkz",
      "wraith-king",
      "morphling",
      "warlock",
      "phantom-assassin"
    ],
    "weakAgainst": [
      "largo",
      "lycan",
      "earth-spirit",
      "naga-siren",
      "kez",
      "bane"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Gauntlets of Strength",
      "Observer Ward",
      "Boots of Speed",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Blink Dagger",
      "Aether Lens",
      "Staff of Wizardry",
      "Blade of Alacrity",
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.493,
      "crusader": 0.497,
      "archon": 0.501,
      "legend": 0.506,
      "ancient": 0.495,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 12197,
      "guardian": 23276,
      "crusader": 24472,
      "archon": 21160,
      "legend": 15843,
      "ancient": 10002,
      "divine": 9285
    },
    "counters": [
      "dark-willow",
      "night-stalker",
      "beastmaster",
      "ogre-magi",
      "dazzle",
      "pangolier"
    ],
    "weakAgainst": [
      "chen",
      "naga-siren",
      "crystal-maiden",
      "terrorblade",
      "shadow-fiend",
      "bristleback"
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
    "overallWin": 0.462,
    "winByBracket": {
      "herald": 0.463,
      "guardian": 0.463,
      "crusader": 0.462,
      "archon": 0.461,
      "legend": 0.465,
      "ancient": 0.462,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 22530,
      "guardian": 53469,
      "crusader": 66648,
      "archon": 64670,
      "legend": 50807,
      "ancient": 33008,
      "divine": 32927
    },
    "counters": [
      "phantom-lancer",
      "phantom-assassin",
      "tinker",
      "sand-king",
      "chaos-knight",
      "drow-ranger"
    ],
    "weakAgainst": [
      "largo",
      "keeper-of-the-light",
      "chen",
      "bounty-hunter",
      "dark-seer",
      "treant-protector"
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
      "Point Booster",
      "Kaya",
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.503,
      "guardian": 0.5,
      "crusader": 0.503,
      "archon": 0.507,
      "legend": 0.506,
      "ancient": 0.498,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 19236,
      "guardian": 32027,
      "crusader": 32018,
      "archon": 27497,
      "legend": 20326,
      "ancient": 12608,
      "divine": 11621
    },
    "counters": [
      "crystal-maiden",
      "silencer",
      "primal-beast",
      "gyrocopter",
      "skywrath-mage",
      "warlock"
    ],
    "weakAgainst": [
      "treant-protector",
      "nature-s-prophet",
      "phoenix",
      "terrorblade",
      "huskar",
      "kunkka"
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.524,
      "crusader": 0.527,
      "archon": 0.526,
      "legend": 0.531,
      "ancient": 0.525,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 21029,
      "guardian": 38254,
      "crusader": 35851,
      "archon": 28757,
      "legend": 19730,
      "ancient": 12034,
      "divine": 10469
    },
    "counters": [
      "puck"
    ],
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.473,
      "crusader": 0.478,
      "archon": 0.48,
      "legend": 0.484,
      "ancient": 0.48,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 7314,
      "guardian": 17129,
      "crusader": 20848,
      "archon": 21000,
      "legend": 18153,
      "ancient": 13021,
      "divine": 15675
    },
    "counters": [
      "dark-willow",
      "earth-spirit",
      "skywrath-mage",
      "vengeful-spirit",
      "sven",
      "terrorblade"
    ],
    "weakAgainst": [
      "alchemist",
      "chen",
      "grimstroke",
      "lich",
      "bane",
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
      "Arcane Boots",
      "Staff of Wizardry",
      "Vitality Booster",
      "Rod of Atos",
      "Blink Dagger"
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
      "herald": 0.488,
      "guardian": 0.485,
      "crusader": 0.486,
      "archon": 0.492,
      "legend": 0.495,
      "ancient": 0.498,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 28789,
      "guardian": 79281,
      "crusader": 109206,
      "archon": 115718,
      "legend": 96995,
      "ancient": 66833,
      "divine": 72179
    },
    "counters": [
      "phantom-assassin",
      "weaver",
      "sven",
      "phantom-lancer",
      "magnus",
      "techies"
    ],
    "weakAgainst": [
      "lone-druid",
      "broodmother",
      "lycan",
      "leshrac",
      "visage",
      "bane"
    ],
    "startItems": [
      "Iron Branch",
      "Blood Grenade",
      "Tango",
      "Sentry Ward",
      "Faerie Fire",
      "Observer and Sentry Wards"
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.503,
      "crusader": 0.49,
      "archon": 0.486,
      "legend": 0.474,
      "ancient": 0.463,
      "divine": 0.46
    },
    "pickByBracket": {
      "herald": 12348,
      "guardian": 24285,
      "crusader": 24020,
      "archon": 20680,
      "legend": 14780,
      "ancient": 9320,
      "divine": 8278
    },
    "counters": [
      "underlord",
      "muerta",
      "ursa",
      "void-spirit",
      "lion",
      "templar-assassin"
    ],
    "weakAgainst": [
      "warlock",
      "phoenix",
      "luna",
      "abaddon",
      "alchemist",
      "terrorblade"
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
    "overallWin": 0.451,
    "winByBracket": {
      "herald": 0.424,
      "guardian": 0.439,
      "crusader": 0.449,
      "archon": 0.447,
      "legend": 0.456,
      "ancient": 0.467,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 3916,
      "guardian": 8886,
      "crusader": 10954,
      "archon": 10994,
      "legend": 9372,
      "ancient": 6849,
      "divine": 7940
    },
    "counters": [
      "phantom-lancer",
      "medusa",
      "weaver",
      "primal-beast",
      "warlock",
      "gyrocopter"
    ],
    "weakAgainst": [
      "naga-siren",
      "alchemist",
      "grimstroke",
      "zeus",
      "techies",
      "chen"
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
      "Aether Lens",
      "Aghanim's Shard",
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
      "herald": 0.487,
      "guardian": 0.488,
      "crusader": 0.488,
      "archon": 0.485,
      "legend": 0.482,
      "ancient": 0.483,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 34801,
      "guardian": 74540,
      "crusader": 84849,
      "archon": 76579,
      "legend": 58619,
      "ancient": 39259,
      "divine": 44666
    },
    "counters": [
      "winter-wyvern",
      "morphling",
      "anti-mage",
      "pugna",
      "legion-commander",
      "medusa"
    ],
    "weakAgainst": [
      "lone-druid",
      "enigma",
      "alchemist",
      "phoenix",
      "io",
      "omniknight"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Magic Wand",
      "Tango",
      "Observer Ward",
      "Magic Stick"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Claymore",
      "Yasha",
      "Dragon Lance",
      "Staff of Wizardry"
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
      "herald": 0.521,
      "guardian": 0.521,
      "crusader": 0.521,
      "archon": 0.522,
      "legend": 0.519,
      "ancient": 0.52,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 43115,
      "guardian": 87749,
      "crusader": 91471,
      "archon": 77461,
      "legend": 54085,
      "ancient": 33250,
      "divine": 31004
    },
    "counters": [
      "medusa",
      "morphling",
      "huskar",
      "phantom-assassin",
      "tinker",
      "grimstroke"
    ],
    "weakAgainst": [
      "naga-siren",
      "oracle",
      "beastmaster",
      "bane",
      "phantom-lancer",
      "treant-protector"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Magic Stick",
      "Observer and Sentry Wards",
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.512,
      "crusader": 0.506,
      "archon": 0.509,
      "legend": 0.502,
      "ancient": 0.501,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 27846,
      "guardian": 65476,
      "crusader": 73424,
      "archon": 65546,
      "legend": 47604,
      "ancient": 30212,
      "divine": 29132
    },
    "counters": [
      "death-prophet",
      "vengeful-spirit",
      "timbersaw",
      "lina",
      "chaos-knight",
      "grimstroke"
    ],
    "weakAgainst": [
      "huskar",
      "razor",
      "leshrac",
      "viper",
      "spirit-breaker",
      "keeper-of-the-light"
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
      "Arcane Boots",
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
      "herald": 0.506,
      "guardian": 0.505,
      "crusader": 0.501,
      "archon": 0.499,
      "legend": 0.494,
      "ancient": 0.494,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 33439,
      "guardian": 69230,
      "crusader": 73868,
      "archon": 64773,
      "legend": 47527,
      "ancient": 30065,
      "divine": 29611
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.497,
      "crusader": 0.499,
      "archon": 0.498,
      "legend": 0.495,
      "ancient": 0.489,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 20470,
      "guardian": 43522,
      "crusader": 47511,
      "archon": 42582,
      "legend": 32422,
      "ancient": 21077,
      "divine": 21505
    },
    "counters": [
      "lina",
      "lifestealer",
      "weaver",
      "sand-king",
      "viper",
      "void-spirit"
    ],
    "weakAgainst": [
      "vengeful-spirit",
      "earth-spirit",
      "marci",
      "zeus",
      "winter-wyvern",
      "phantom-lancer"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Circlet",
      "Observer Ward",
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.496,
      "crusader": 0.49,
      "archon": 0.493,
      "legend": 0.494,
      "ancient": 0.497,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 23800,
      "guardian": 56975,
      "crusader": 66841,
      "archon": 61658,
      "legend": 46301,
      "ancient": 29345,
      "divine": 28202
    },
    "counters": [
      "muerta",
      "warlock",
      "beastmaster",
      "pudge",
      "storm-spirit",
      "tidehunter"
    ],
    "weakAgainst": [
      "leshrac",
      "spirit-breaker",
      "treant-protector",
      "lion",
      "jakiro",
      "snapfire"
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.517,
      "crusader": 0.529,
      "archon": 0.528,
      "legend": 0.532,
      "ancient": 0.529,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 31371,
      "guardian": 84335,
      "crusader": 115380,
      "archon": 119141,
      "legend": 98596,
      "ancient": 68547,
      "divine": 74015
    },
    "counters": [
      "tinker",
      "winter-wyvern",
      "witch-doctor",
      "death-prophet",
      "phantom-lancer",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "clinkz",
      "io",
      "broodmother",
      "treant-protector",
      "chen"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Gauntlets of Strength",
      "Circlet"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.507,
      "crusader": 0.503,
      "archon": 0.497,
      "legend": 0.493,
      "ancient": 0.493,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 62536,
      "guardian": 128274,
      "crusader": 134230,
      "archon": 112695,
      "legend": 76535,
      "ancient": 43267,
      "divine": 35078
    },
    "counters": [
      "death-prophet",
      "witch-doctor",
      "weaver",
      "grimstroke",
      "faceless-void",
      "lich"
    ],
    "weakAgainst": [
      "ember-spirit",
      "nature-s-prophet",
      "earthshaker",
      "crystal-maiden",
      "drow-ranger",
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
    "overallWin": 0.542,
    "winByBracket": {
      "herald": 0.551,
      "guardian": 0.549,
      "crusader": 0.544,
      "archon": 0.537,
      "legend": 0.542,
      "ancient": 0.533,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 32920,
      "guardian": 72960,
      "crusader": 76447,
      "archon": 65113,
      "legend": 47565,
      "ancient": 29811,
      "divine": 29901
    },
    "counters": [],
    "weakAgainst": [
      "mars"
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
      "Sacred Relic",
      "Talisman of Evasion",
      "Yasha",
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
      "herald": 0.516,
      "guardian": 0.521,
      "crusader": 0.517,
      "archon": 0.517,
      "legend": 0.518,
      "ancient": 0.515,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 40384,
      "guardian": 81993,
      "crusader": 88065,
      "archon": 78829,
      "legend": 58745,
      "ancient": 36955,
      "divine": 37047
    },
    "counters": [
      "clinkz",
      "ancient-apparition",
      "death-prophet",
      "phantom-lancer",
      "silencer",
      "earthshaker"
    ],
    "weakAgainst": [
      "treant-protector",
      "keeper-of-the-light",
      "huskar",
      "marci",
      "drow-ranger",
      "monkey-king"
    ],
    "startItems": [
      "Tango",
      "Iron Branch",
      "Boots of Speed",
      "Blood Grenade",
      "Sentry Ward",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Blitz Knuckles",
      "Claymore",
      "Phase Boots",
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
    "overallWin": 0.469,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.459,
      "crusader": 0.462,
      "archon": 0.466,
      "legend": 0.479,
      "ancient": 0.478,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 18500,
      "guardian": 39765,
      "crusader": 45202,
      "archon": 42673,
      "legend": 33358,
      "ancient": 22756,
      "divine": 25370
    },
    "counters": [
      "legion-commander",
      "naga-siren",
      "techies",
      "sven",
      "templar-assassin",
      "void-spirit"
    ],
    "weakAgainst": [
      "mirana",
      "chen",
      "treant-protector",
      "huskar",
      "lycan",
      "marci"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Mantle of Intelligence",
      "Magic Stick"
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
      "herald": 0.493,
      "guardian": 0.502,
      "crusader": 0.503,
      "archon": 0.503,
      "legend": 0.507,
      "ancient": 0.509,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 16094,
      "guardian": 29917,
      "crusader": 28650,
      "archon": 22972,
      "legend": 16017,
      "ancient": 9551,
      "divine": 9175
    },
    "counters": [
      "morphling",
      "phantom-lancer",
      "skywrath-mage",
      "bristleback",
      "legion-commander",
      "zeus"
    ],
    "weakAgainst": [
      "brewmaster",
      "lycan",
      "kunkka",
      "earthshaker",
      "nyx-assassin",
      "necrophos"
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
      "Broadsword",
      "Ogre Axe",
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
      "herald": 0.515,
      "guardian": 0.513,
      "crusader": 0.506,
      "archon": 0.507,
      "legend": 0.501,
      "ancient": 0.498,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 28719,
      "guardian": 58337,
      "crusader": 60987,
      "archon": 52992,
      "legend": 39167,
      "ancient": 25699,
      "divine": 26339
    },
    "counters": [
      "vengeful-spirit",
      "luna",
      "dark-willow",
      "grimstroke",
      "dragon-knight",
      "disruptor"
    ],
    "weakAgainst": [
      "phoenix",
      "muerta",
      "beastmaster",
      "juggernaut",
      "storm-spirit",
      "clockwerk"
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
      "Aether Lens",
      "Glimmer Cape",
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
    "overallWin": 0.461,
    "winByBracket": {
      "herald": 0.451,
      "guardian": 0.459,
      "crusader": 0.456,
      "archon": 0.461,
      "legend": 0.466,
      "ancient": 0.463,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 11362,
      "guardian": 22860,
      "crusader": 24853,
      "archon": 21228,
      "legend": 16173,
      "ancient": 10589,
      "divine": 11575
    },
    "counters": [
      "weaver",
      "dark-seer",
      "kunkka",
      "phantom-assassin",
      "anti-mage",
      "muerta"
    ],
    "weakAgainst": [
      "grimstroke",
      "treant-protector",
      "naga-siren",
      "bristleback",
      "bane",
      "monkey-king"
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.468,
      "crusader": 0.468,
      "archon": 0.472,
      "legend": 0.476,
      "ancient": 0.483,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 11041,
      "guardian": 21528,
      "crusader": 20682,
      "archon": 17360,
      "legend": 13007,
      "ancient": 9075,
      "divine": 11829
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.506,
      "crusader": 0.5,
      "archon": 0.499,
      "legend": 0.499,
      "ancient": 0.496,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 19028,
      "guardian": 43804,
      "crusader": 51798,
      "archon": 48936,
      "legend": 37440,
      "ancient": 25254,
      "divine": 26645
    },
    "counters": [
      "faceless-void",
      "spirit-breaker",
      "dark-willow",
      "mirana",
      "necrophos",
      "sven"
    ],
    "weakAgainst": [
      "treant-protector",
      "clockwerk",
      "huskar",
      "grimstroke",
      "clinkz",
      "bane"
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
    "overallWin": 0.443,
    "winByBracket": {
      "herald": 0.443,
      "guardian": 0.446,
      "crusader": 0.442,
      "archon": 0.448,
      "legend": 0.441,
      "ancient": 0.441,
      "divine": 0.44
    },
    "pickByBracket": {
      "herald": 9039,
      "guardian": 19564,
      "crusader": 23533,
      "archon": 23093,
      "legend": 19004,
      "ancient": 13518,
      "divine": 15820
    },
    "counters": [
      "morphling",
      "lina",
      "anti-mage",
      "outworld-devourer",
      "witch-doctor",
      "medusa"
    ],
    "weakAgainst": [
      "largo",
      "nyx-assassin",
      "bounty-hunter",
      "bane",
      "night-stalker",
      "treant-protector"
    ],
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.445,
      "guardian": 0.456,
      "crusader": 0.469,
      "archon": 0.477,
      "legend": 0.477,
      "ancient": 0.484,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 12934,
      "guardian": 26660,
      "crusader": 28409,
      "archon": 23916,
      "legend": 17913,
      "ancient": 12031,
      "divine": 13925
    },
    "counters": [
      "invoker",
      "beastmaster",
      "dragon-knight",
      "axe",
      "ogre-magi"
    ],
    "weakAgainst": [
      "snapfire",
      "dawnbreaker",
      "queen-of-pain",
      "tiny",
      "shadow-shaman",
      "jakiro"
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
    "overallWin": 0.449,
    "winByBracket": {
      "herald": 0.453,
      "guardian": 0.445,
      "crusader": 0.447,
      "archon": 0.446,
      "legend": 0.448,
      "ancient": 0.45,
      "divine": 0.457
    },
    "pickByBracket": {
      "herald": 14257,
      "guardian": 28316,
      "crusader": 32188,
      "archon": 31411,
      "legend": 26033,
      "ancient": 18922,
      "divine": 22164
    },
    "counters": [
      "death-prophet",
      "weaver",
      "tinker",
      "bristleback",
      "dark-seer",
      "void-spirit"
    ],
    "weakAgainst": [
      "bane",
      "naga-siren",
      "enigma",
      "oracle",
      "lone-druid",
      "lycan"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Magic Stick",
      "Circlet",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Claymore",
      "Echo Sabre",
      "Blitz Knuckles",
      "Ogre Axe",
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.48,
      "crusader": 0.498,
      "archon": 0.496,
      "legend": 0.502,
      "ancient": 0.518,
      "divine": 0.534
    },
    "pickByBracket": {
      "herald": 7860,
      "guardian": 16870,
      "crusader": 19082,
      "archon": 18300,
      "legend": 15330,
      "ancient": 11478,
      "divine": 17229
    },
    "counters": [
      "monkey-king",
      "invoker",
      "razor",
      "spirit-breaker",
      "gyrocopter",
      "windranger"
    ],
    "weakAgainst": [
      "enchantress"
    ],
    "startItems": [
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Boots of Speed",
      "Iron Branch",
      "Smoke of Deceit",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Blink Dagger",
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.521,
      "crusader": 0.509,
      "archon": 0.507,
      "legend": 0.505,
      "ancient": 0.499,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 13382,
      "guardian": 19329,
      "crusader": 16032,
      "archon": 11790,
      "legend": 7970,
      "ancient": 4799,
      "divine": 4129
    },
    "counters": [
      "medusa",
      "silencer",
      "lifestealer",
      "dark-willow",
      "tidehunter",
      "bristleback"
    ],
    "weakAgainst": [
      "abaddon",
      "invoker",
      "pudge",
      "timbersaw",
      "lion",
      "nature-s-prophet"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Magic Stick",
      "Tango",
      "Circlet",
      "Magic Wand"
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
      "herald": 0.452,
      "guardian": 0.46,
      "crusader": 0.47,
      "archon": 0.481,
      "legend": 0.486,
      "ancient": 0.493,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 7508,
      "guardian": 17674,
      "crusader": 23852,
      "archon": 26868,
      "legend": 24662,
      "ancient": 18857,
      "divine": 23950
    },
    "counters": [
      "legion-commander",
      "ancient-apparition",
      "lifestealer",
      "magnus",
      "techies",
      "tinker"
    ],
    "weakAgainst": [
      "treant-protector",
      "broodmother",
      "dark-seer",
      "pugna",
      "venomancer",
      "muerta"
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
      "Blink Dagger",
      "Phase Boots",
      "Staff of Wizardry",
      "Ogre Axe",
      "Force Staff"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.512,
      "crusader": 0.506,
      "archon": 0.499,
      "legend": 0.493,
      "ancient": 0.487,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 11870,
      "guardian": 29535,
      "crusader": 37458,
      "archon": 38280,
      "legend": 31251,
      "ancient": 21758,
      "divine": 22298
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.515,
      "crusader": 0.522,
      "archon": 0.521,
      "legend": 0.525,
      "ancient": 0.525,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 26312,
      "guardian": 59112,
      "crusader": 64798,
      "archon": 57843,
      "legend": 42130,
      "ancient": 27993,
      "divine": 29259
    },
    "counters": [
      "death-prophet",
      "weaver",
      "morphling",
      "lion",
      "void-spirit",
      "underlord"
    ],
    "weakAgainst": [
      "monkey-king",
      "naga-siren",
      "beastmaster",
      "dark-seer",
      "marci",
      "earthshaker"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Enchanted Mango",
      "Blood Grenade",
      "Gauntlets of Strength",
      "Magic Stick"
    ],
    "coreItems": [
      "Arcane Boots",
      "Mekansm",
      "Ogre Axe",
      "Staff of Wizardry",
      "Platemail"
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
    "overallWin": 0.469,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.456,
      "crusader": 0.472,
      "archon": 0.471,
      "legend": 0.479,
      "ancient": 0.473,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 16867,
      "guardian": 34354,
      "crusader": 39364,
      "archon": 35361,
      "legend": 27247,
      "ancient": 17368,
      "divine": 17499
    },
    "counters": [
      "underlord",
      "muerta",
      "phantom-assassin",
      "timbersaw",
      "grimstroke",
      "morphling"
    ],
    "weakAgainst": [
      "mirana",
      "enigma",
      "treant-protector",
      "alchemist",
      "lycan",
      "bounty-hunter"
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
      "Blink Dagger",
      "Battle Fury",
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
      "guardian": 0.538,
      "crusader": 0.542,
      "archon": 0.533,
      "legend": 0.533,
      "ancient": 0.529,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 22446,
      "guardian": 53016,
      "crusader": 65475,
      "archon": 66802,
      "legend": 53033,
      "ancient": 35480,
      "divine": 35345
    },
    "counters": [
      "void-spirit",
      "slardar",
      "lich",
      "morphling",
      "warlock",
      "timbersaw"
    ],
    "weakAgainst": [
      "techies",
      "beastmaster",
      "batrider",
      "phoenix",
      "ring-master",
      "dawnbreaker"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Blood Grenade",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Ogre Axe",
      "Broadsword",
      "Point Booster"
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
    "overallWin": 0.465,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.471,
      "crusader": 0.462,
      "archon": 0.467,
      "legend": 0.462,
      "ancient": 0.461,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 24360,
      "guardian": 50329,
      "crusader": 54788,
      "archon": 48061,
      "legend": 34381,
      "ancient": 21314,
      "divine": 18646
    },
    "counters": [
      "dragon-knight",
      "weaver",
      "clockwerk",
      "warlock",
      "zeus",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "ember-spirit",
      "batrider",
      "invoker",
      "pudge",
      "slardar",
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
      "Spirit Vessel",
      "Diadem",
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
      "herald": 0.479,
      "guardian": 0.476,
      "crusader": 0.483,
      "archon": 0.486,
      "legend": 0.485,
      "ancient": 0.49,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 32922,
      "guardian": 51060,
      "crusader": 47976,
      "archon": 39064,
      "legend": 26579,
      "ancient": 16758,
      "divine": 16876
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
      "death-prophet",
      "slardar",
      "primal-beast",
      "dazzle",
      "nyx-assassin",
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
    "overallWin": 0.527,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.503,
      "crusader": 0.528,
      "archon": 0.523,
      "legend": 0.545,
      "ancient": 0.545,
      "divine": 0.567
    },
    "pickByBracket": {
      "herald": 4177,
      "guardian": 8277,
      "crusader": 8445,
      "archon": 7429,
      "legend": 5306,
      "ancient": 3739,
      "divine": 5109
    },
    "counters": [
      "rubick"
    ],
    "weakAgainst": [
      "shadow-fiend"
    ],
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
      "Boots of Bearing",
      "Aghanim's Shard"
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
      "herald": 0.468,
      "guardian": 0.481,
      "crusader": 0.494,
      "archon": 0.5,
      "legend": 0.499,
      "ancient": 0.503,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 8132,
      "guardian": 17532,
      "crusader": 21987,
      "archon": 23055,
      "legend": 20962,
      "ancient": 15774,
      "divine": 19315
    },
    "counters": [
      "zeus",
      "weaver",
      "sven",
      "earthshaker",
      "dazzle",
      "pangolier"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "naga-siren",
      "phoenix",
      "bane",
      "treant-protector",
      "lycan"
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
      "Diadem",
      "Spirit Vessel"
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
      "guardian": 0.509,
      "crusader": 0.501,
      "archon": 0.492,
      "legend": 0.49,
      "ancient": 0.479,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 17112,
      "guardian": 37751,
      "crusader": 41754,
      "archon": 36163,
      "legend": 25302,
      "ancient": 14969,
      "divine": 14169
    },
    "counters": [
      "sand-king",
      "drow-ranger",
      "ancient-apparition",
      "alchemist",
      "axe",
      "pangolier"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "slark",
      "treant-protector",
      "pudge",
      "dazzle",
      "venomancer"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Magic Stick",
      "Sentry Ward",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Glimmer Cape",
      "Arcane Boots",
      "Aghanim's Shard",
      "Staff of Wizardry",
      "Point Booster"
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.468,
      "crusader": 0.464,
      "archon": 0.466,
      "legend": 0.474,
      "ancient": 0.475,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 21602,
      "guardian": 37942,
      "crusader": 38168,
      "archon": 32557,
      "legend": 23585,
      "ancient": 14048,
      "divine": 13893
    },
    "counters": [
      "crystal-maiden",
      "sven",
      "brewmaster",
      "lina",
      "gyrocopter",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "morphling",
      "monkey-king",
      "puck",
      "venomancer",
      "centaur-warrunner",
      "invoker"
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.478,
      "crusader": 0.475,
      "archon": 0.48,
      "legend": 0.483,
      "ancient": 0.485,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 34469,
      "guardian": 67500,
      "crusader": 74587,
      "archon": 69652,
      "legend": 53749,
      "ancient": 36232,
      "divine": 39236
    },
    "counters": [
      "oracle",
      "phantom-lancer",
      "chaos-knight",
      "morphling",
      "lina",
      "sand-king"
    ],
    "weakAgainst": [
      "treant-protector",
      "naga-siren",
      "enigma",
      "lone-druid",
      "bane",
      "clockwerk"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Blood Grenade",
      "Sentry Ward"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.484,
      "crusader": 0.497,
      "archon": 0.497,
      "legend": 0.5,
      "ancient": 0.503,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 9845,
      "guardian": 20591,
      "crusader": 22266,
      "archon": 19977,
      "legend": 15755,
      "ancient": 10815,
      "divine": 14652
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.523,
      "crusader": 0.516,
      "archon": 0.512,
      "legend": 0.51,
      "ancient": 0.504,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 42851,
      "guardian": 95163,
      "crusader": 103979,
      "archon": 89225,
      "legend": 60576,
      "ancient": 35570,
      "divine": 29531
    },
    "counters": [
      "gyrocopter",
      "tidehunter",
      "vengeful-spirit",
      "ursa",
      "undying",
      "lich"
    ],
    "weakAgainst": [
      "necrophos",
      "ember-spirit",
      "sniper",
      "snapfire",
      "lifestealer",
      "clockwerk"
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
      "herald": 0.56,
      "guardian": 0.556,
      "crusader": 0.554,
      "archon": 0.545,
      "legend": 0.535,
      "ancient": 0.534,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 31585,
      "guardian": 70619,
      "crusader": 76303,
      "archon": 65772,
      "legend": 45595,
      "ancient": 26368,
      "divine": 20549
    },
    "counters": [
      "zeus",
      "silencer",
      "tiny",
      "shadow-shaman",
      "abaddon",
      "tidehunter"
    ],
    "weakAgainst": [
      "earthshaker",
      "pudge",
      "lich",
      "necrophos",
      "snapfire",
      "dragon-knight"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Tango",
      "Magic Stick",
      "Gauntlets of Strength",
      "Circlet"
    ],
    "coreItems": [
      "Talisman of Evasion",
      "Radiance",
      "Sacred Relic",
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.519,
      "crusader": 0.519,
      "archon": 0.515,
      "legend": 0.514,
      "ancient": 0.51,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 44151,
      "guardian": 99226,
      "crusader": 116216,
      "archon": 111192,
      "legend": 87509,
      "ancient": 58549,
      "divine": 62721
    },
    "counters": [
      "mirana",
      "slardar",
      "medusa",
      "shadow-demon",
      "primal-beast",
      "monkey-king"
    ],
    "weakAgainst": [
      "juggernaut",
      "void-spirit",
      "wraith-king",
      "keeper-of-the-light",
      "beastmaster",
      "venomancer"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Null Talisman",
      "Enchanted Mango",
      "Mantle of Intelligence"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Point Booster",
      "Kaya",
      "Blade of Alacrity"
    ]
  }
];

export const HERO_DATA_BY_ID: Record<string, HeroData> = Object.fromEntries(
  HERO_DATA.map((h) => [h.id, h]),
);
