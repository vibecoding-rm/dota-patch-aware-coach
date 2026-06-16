// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-06-16
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.516,
      "crusader": 0.507,
      "archon": 0.522,
      "legend": 0.524,
      "ancient": 0.523,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 10067,
      "guardian": 18721,
      "crusader": 21204,
      "archon": 19791,
      "legend": 15203,
      "ancient": 9624,
      "divine": 9150
    },
    "counters": [
      "troll-warlord",
      "legion-commander",
      "sand-king",
      "terrorblade",
      "axe",
      "lion"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "clinkz",
      "underlord",
      "marci",
      "naga-siren",
      "lycan"
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.476,
      "crusader": 0.478,
      "archon": 0.476,
      "legend": 0.473,
      "ancient": 0.47,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 12631,
      "guardian": 26889,
      "crusader": 31241,
      "archon": 29224,
      "legend": 21697,
      "ancient": 13766,
      "divine": 13216
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.518,
      "crusader": 0.513,
      "archon": 0.514,
      "legend": 0.511,
      "ancient": 0.504,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 19647,
      "guardian": 36801,
      "crusader": 39527,
      "archon": 35429,
      "legend": 26221,
      "ancient": 16280,
      "divine": 15266
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.499,
      "crusader": 0.496,
      "archon": 0.498,
      "legend": 0.498,
      "ancient": 0.494,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 43177,
      "guardian": 83699,
      "crusader": 83432,
      "archon": 67952,
      "legend": 46364,
      "ancient": 27668,
      "divine": 25128
    },
    "counters": [
      "sven",
      "lich",
      "silencer",
      "dragon-knight",
      "dark-willow",
      "mars"
    ],
    "weakAgainst": [
      "timbersaw",
      "ember-spirit",
      "templar-assassin",
      "shadow-fiend",
      "abaddon",
      "ogre-magi"
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.505,
      "crusader": 0.508,
      "archon": 0.501,
      "legend": 0.512,
      "ancient": 0.52,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 11405,
      "guardian": 21930,
      "crusader": 21017,
      "archon": 15689,
      "legend": 10961,
      "ancient": 7222,
      "divine": 7839
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.536,
      "guardian": 0.53,
      "crusader": 0.524,
      "archon": 0.52,
      "legend": 0.514,
      "ancient": 0.51,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 54239,
      "guardian": 111558,
      "crusader": 122581,
      "archon": 111458,
      "legend": 84052,
      "ancient": 54776,
      "divine": 57438
    },
    "counters": [
      "winter-wyvern",
      "faceless-void",
      "drow-ranger",
      "techies",
      "morphling",
      "death-prophet"
    ],
    "weakAgainst": [
      "bane",
      "lycan",
      "naga-siren",
      "treant-protector",
      "abaddon",
      "huskar"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Ring of Protection",
      "Circlet",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blink Dagger",
      "Blade Mail",
      "Broadsword",
      "Ogre Axe",
      "Aghanim's Shard"
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.497,
      "crusader": 0.499,
      "archon": 0.514,
      "legend": 0.509,
      "ancient": 0.508,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 8813,
      "guardian": 16575,
      "crusader": 18308,
      "archon": 16999,
      "legend": 13268,
      "ancient": 9627,
      "divine": 13251
    },
    "counters": [
      "axe",
      "tiny",
      "sven",
      "hoodwink",
      "bristleback",
      "templar-assassin"
    ],
    "weakAgainst": [
      "monkey-king",
      "skywrath-mage",
      "primal-beast",
      "dark-willow",
      "mars"
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
      "Aether Lens",
      "Arcane Boots",
      "Staff of Wizardry",
      "Ogre Axe",
      "Point Booster"
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
      "herald": 0.437,
      "guardian": 0.433,
      "crusader": 0.43,
      "archon": 0.441,
      "legend": 0.442,
      "ancient": 0.451,
      "divine": 0.438
    },
    "pickByBracket": {
      "herald": 3475,
      "guardian": 7251,
      "crusader": 8090,
      "archon": 7441,
      "legend": 5999,
      "ancient": 4492,
      "divine": 5569
    },
    "counters": [
      "death-prophet",
      "magnus",
      "bristleback",
      "weaver",
      "vengeful-spirit",
      "hoodwink"
    ],
    "weakAgainst": [
      "oracle",
      "naga-siren",
      "templar-assassin",
      "marci",
      "bane",
      "lycan"
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
    "overallWin": 0.447,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.44,
      "crusader": 0.451,
      "archon": 0.438,
      "legend": 0.447,
      "ancient": 0.455,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 10109,
      "guardian": 19333,
      "crusader": 19887,
      "archon": 16678,
      "legend": 11965,
      "ancient": 7916,
      "divine": 9451
    },
    "counters": [
      "chaos-knight",
      "vengeful-spirit",
      "zeus",
      "shadow-shaman",
      "undying",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "slark",
      "bounty-hunter",
      "batrider",
      "dazzle",
      "pugna",
      "clinkz"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Quelling Blade",
      "Circlet",
      "Sage's Mask"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blink Dagger",
      "Ultimate Orb",
      "Helm of the Overlord",
      "Blade of Alacrity"
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
      "herald": 0.519,
      "guardian": 0.521,
      "crusader": 0.519,
      "archon": 0.516,
      "legend": 0.52,
      "ancient": 0.525,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 22695,
      "guardian": 29587,
      "crusader": 22672,
      "archon": 16661,
      "legend": 11260,
      "ancient": 6634,
      "divine": 5702
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.499,
      "crusader": 0.509,
      "archon": 0.516,
      "legend": 0.522,
      "ancient": 0.528,
      "divine": 0.549
    },
    "pickByBracket": {
      "herald": 17759,
      "guardian": 30311,
      "crusader": 29947,
      "archon": 25322,
      "legend": 20065,
      "ancient": 12985,
      "divine": 16540
    },
    "counters": [
      "dragon-knight",
      "ursa",
      "snapfire",
      "queen-of-pain",
      "timbersaw",
      "beastmaster"
    ],
    "weakAgainst": [
      "storm-spirit",
      "tusk",
      "hoodwink",
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.509,
      "crusader": 0.508,
      "archon": 0.514,
      "legend": 0.521,
      "ancient": 0.508,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 3392,
      "guardian": 6160,
      "crusader": 6911,
      "archon": 6780,
      "legend": 5847,
      "ancient": 4356,
      "divine": 6127
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
      "dawnbreaker",
      "rubick",
      "puck"
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
      "Blade of Alacrity",
      "Staff of Wizardry",
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.533,
      "guardian": 0.506,
      "crusader": 0.483,
      "archon": 0.471,
      "legend": 0.466,
      "ancient": 0.463,
      "divine": 0.458
    },
    "pickByBracket": {
      "herald": 43023,
      "guardian": 63977,
      "crusader": 53772,
      "archon": 40051,
      "legend": 26212,
      "ancient": 15570,
      "divine": 14268
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.49,
      "crusader": 0.494,
      "archon": 0.494,
      "legend": 0.505,
      "ancient": 0.484,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 13644,
      "guardian": 20289,
      "crusader": 16721,
      "archon": 11472,
      "legend": 7117,
      "ancient": 4184,
      "divine": 4994
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
      "Blade of Alacrity",
      "Yasha",
      "Oblivion Staff"
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.514,
      "crusader": 0.512,
      "archon": 0.505,
      "legend": 0.497,
      "ancient": 0.505,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 12798,
      "guardian": 27731,
      "crusader": 32537,
      "archon": 30994,
      "legend": 23447,
      "ancient": 14828,
      "divine": 14504
    },
    "counters": [
      "weaver",
      "medusa",
      "silencer",
      "lich",
      "witch-doctor",
      "vengeful-spirit"
    ],
    "weakAgainst": [
      "treant-protector",
      "brewmaster",
      "bounty-hunter",
      "timbersaw",
      "marci",
      "grimstroke"
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.523,
      "guardian": 0.517,
      "crusader": 0.495,
      "archon": 0.496,
      "legend": 0.5,
      "ancient": 0.505,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 18568,
      "guardian": 27724,
      "crusader": 24067,
      "archon": 17703,
      "legend": 11622,
      "ancient": 6622,
      "divine": 5744
    },
    "counters": [
      "lich",
      "earthshaker",
      "centaur-warrunner",
      "templar-assassin",
      "ursa"
    ],
    "weakAgainst": [
      "beastmaster",
      "jakiro",
      "mars",
      "windranger",
      "invoker",
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
    "overallWin": 0.448,
    "winByBracket": {
      "herald": 0.419,
      "guardian": 0.447,
      "crusader": 0.423,
      "archon": 0.451,
      "legend": 0.453,
      "ancient": 0.459,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 1753,
      "guardian": 2701,
      "crusader": 2620,
      "archon": 2419,
      "legend": 1597,
      "ancient": 1205,
      "divine": 1822
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
      "herald": 0.489,
      "guardian": 0.491,
      "crusader": 0.493,
      "archon": 0.504,
      "legend": 0.505,
      "ancient": 0.524,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 24428,
      "guardian": 32290,
      "crusader": 27531,
      "archon": 20991,
      "legend": 14723,
      "ancient": 9421,
      "divine": 10448
    },
    "counters": [
      "ancient-apparition",
      "clockwerk",
      "skywrath-mage",
      "tidehunter",
      "dragon-knight",
      "abaddon"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "dazzle",
      "pudge",
      "hoodwink",
      "templar-assassin",
      "slardar"
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.481,
      "crusader": 0.483,
      "archon": 0.485,
      "legend": 0.49,
      "ancient": 0.497,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 7700,
      "guardian": 17708,
      "crusader": 22360,
      "archon": 23885,
      "legend": 21623,
      "ancient": 16684,
      "divine": 22386
    },
    "counters": [
      "dark-seer",
      "luna",
      "tidehunter",
      "death-prophet",
      "witch-doctor",
      "silencer"
    ],
    "weakAgainst": [
      "venomancer",
      "clinkz",
      "monkey-king",
      "beastmaster",
      "abaddon",
      "storm-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Observer and Sentry Wards",
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
      "Force Staff"
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
      "herald": 0.537,
      "guardian": 0.523,
      "crusader": 0.511,
      "archon": 0.506,
      "legend": 0.508,
      "ancient": 0.501,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 44741,
      "guardian": 76777,
      "crusader": 75610,
      "archon": 64199,
      "legend": 46410,
      "ancient": 29207,
      "divine": 27906
    },
    "counters": [
      "drow-ranger",
      "oracle",
      "sniper",
      "storm-spirit",
      "pugna",
      "chaos-knight"
    ],
    "weakAgainst": [
      "razor",
      "mirana",
      "batrider",
      "keeper-of-the-light",
      "puck",
      "kez"
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
      "herald": 0.49,
      "guardian": 0.494,
      "crusader": 0.485,
      "archon": 0.492,
      "legend": 0.502,
      "ancient": 0.491,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 6193,
      "guardian": 11964,
      "crusader": 12467,
      "archon": 11456,
      "legend": 9822,
      "ancient": 6846,
      "divine": 9159
    },
    "counters": [
      "queen-of-pain",
      "puck",
      "tusk",
      "undying",
      "slardar",
      "terrorblade"
    ],
    "weakAgainst": [
      "phoenix",
      "clockwerk",
      "templar-assassin",
      "ember-spirit",
      "marci",
      "snapfire"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Circlet",
      "Clarity",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Guardian Greaves",
      "Mekansm",
      "Blink Dagger",
      "Platemail",
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.477,
      "crusader": 0.478,
      "archon": 0.484,
      "legend": 0.49,
      "ancient": 0.49,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 13097,
      "guardian": 22524,
      "crusader": 23212,
      "archon": 21120,
      "legend": 17166,
      "ancient": 12033,
      "divine": 13894
    },
    "counters": [
      "weaver",
      "witch-doctor",
      "luna",
      "jakiro",
      "storm-spirit",
      "bane"
    ],
    "weakAgainst": [
      "treant-protector",
      "brewmaster",
      "ring-master",
      "phantom-lancer",
      "night-stalker",
      "pugna"
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
      "Staff of Wizardry",
      "Eul's Scepter of Divinity",
      "Blink Dagger",
      "Arcane Boots",
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.513,
      "crusader": 0.518,
      "archon": 0.519,
      "legend": 0.524,
      "ancient": 0.518,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 16655,
      "guardian": 38233,
      "crusader": 49909,
      "archon": 52384,
      "legend": 45723,
      "ancient": 33400,
      "divine": 39712
    },
    "counters": [
      "tinker",
      "outworld-devourer",
      "phantom-lancer",
      "vengeful-spirit",
      "death-prophet",
      "earthshaker"
    ],
    "weakAgainst": [
      "chen",
      "treant-protector",
      "kez",
      "bane",
      "morphling",
      "venomancer"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Circlet",
      "Tango",
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.501,
      "crusader": 0.509,
      "archon": 0.51,
      "legend": 0.51,
      "ancient": 0.521,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 12987,
      "guardian": 26050,
      "crusader": 27933,
      "archon": 23231,
      "legend": 15818,
      "ancient": 9545,
      "divine": 9321
    },
    "counters": [
      "magnus",
      "clinkz",
      "skywrath-mage",
      "morphling",
      "warlock",
      "underlord"
    ],
    "weakAgainst": [
      "pugna",
      "slardar",
      "void-spirit",
      "doom",
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.472,
      "crusader": 0.469,
      "archon": 0.482,
      "legend": 0.471,
      "ancient": 0.479,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 16648,
      "guardian": 24045,
      "crusader": 24110,
      "archon": 21131,
      "legend": 16497,
      "ancient": 11214,
      "divine": 12814
    },
    "counters": [
      "viper",
      "slardar",
      "shadow-shaman",
      "shadow-demon",
      "lifestealer",
      "ogre-magi"
    ],
    "weakAgainst": [
      "terrorblade",
      "batrider",
      "monkey-king",
      "clockwerk",
      "marci",
      "tiny"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.491,
      "crusader": 0.499,
      "archon": 0.5,
      "legend": 0.502,
      "ancient": 0.505,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 12921,
      "guardian": 31044,
      "crusader": 39668,
      "archon": 40873,
      "legend": 34177,
      "ancient": 24172,
      "divine": 27758
    },
    "counters": [
      "outworld-devourer",
      "phantom-assassin",
      "chaos-knight",
      "phantom-lancer",
      "muerta",
      "weaver"
    ],
    "weakAgainst": [
      "broodmother",
      "kez",
      "chen",
      "drow-ranger",
      "enchantress",
      "io"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Sentry Ward",
      "Observer and Sentry Wards",
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
      "herald": 0.457,
      "guardian": 0.454,
      "crusader": 0.463,
      "archon": 0.465,
      "legend": 0.474,
      "ancient": 0.489,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 11712,
      "guardian": 25187,
      "crusader": 31114,
      "archon": 31102,
      "legend": 26734,
      "ancient": 19390,
      "divine": 25223
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
      "herald": 0.499,
      "guardian": 0.495,
      "crusader": 0.491,
      "archon": 0.494,
      "legend": 0.488,
      "ancient": 0.485,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 16675,
      "guardian": 27871,
      "crusader": 26719,
      "archon": 20708,
      "legend": 13660,
      "ancient": 7374,
      "divine": 6119
    },
    "counters": [
      "drow-ranger",
      "phantom-lancer",
      "morphling",
      "troll-warlord",
      "legion-commander",
      "pangolier"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "venomancer",
      "clinkz",
      "treant-protector",
      "keeper-of-the-light",
      "largo"
    ],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Gauntlets of Strength",
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
      "herald": 0.5,
      "guardian": 0.503,
      "crusader": 0.511,
      "archon": 0.511,
      "legend": 0.514,
      "ancient": 0.516,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 52137,
      "guardian": 93166,
      "crusader": 99627,
      "archon": 90193,
      "legend": 70211,
      "ancient": 47010,
      "divine": 51256
    },
    "counters": [
      "disruptor",
      "underlord",
      "tidehunter",
      "death-prophet",
      "necrophos",
      "lich"
    ],
    "weakAgainst": [
      "crystal-maiden",
      "dragon-knight",
      "treant-protector",
      "warlock",
      "mars",
      "beastmaster"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Magic Wand",
      "Tango",
      "Circlet",
      "Slippers of Agility"
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.485,
      "crusader": 0.5,
      "archon": 0.515,
      "legend": 0.516,
      "ancient": 0.527,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 5858,
      "guardian": 14497,
      "crusader": 18865,
      "archon": 19831,
      "legend": 18449,
      "ancient": 14007,
      "divine": 19262
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.496,
      "crusader": 0.501,
      "archon": 0.503,
      "legend": 0.504,
      "ancient": 0.509,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 38403,
      "guardian": 71224,
      "crusader": 77156,
      "archon": 68588,
      "legend": 52149,
      "ancient": 33690,
      "divine": 33660
    },
    "counters": [
      "primal-beast",
      "wraith-king",
      "sven",
      "sniper",
      "undying",
      "axe"
    ],
    "weakAgainst": [
      "monkey-king",
      "huskar",
      "chaos-knight",
      "bane",
      "spirit-breaker",
      "void-spirit"
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
      "herald": 0.485,
      "guardian": 0.495,
      "crusader": 0.511,
      "archon": 0.518,
      "legend": 0.51,
      "ancient": 0.537,
      "divine": 0.534
    },
    "pickByBracket": {
      "herald": 3161,
      "guardian": 5437,
      "crusader": 5463,
      "archon": 4515,
      "legend": 3262,
      "ancient": 2326,
      "divine": 3303
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.455,
      "guardian": 0.475,
      "crusader": 0.482,
      "archon": 0.49,
      "legend": 0.499,
      "ancient": 0.507,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 11475,
      "guardian": 25528,
      "crusader": 32931,
      "archon": 34517,
      "legend": 30434,
      "ancient": 22867,
      "divine": 28825
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.481,
      "crusader": 0.485,
      "archon": 0.476,
      "legend": 0.482,
      "ancient": 0.475,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 12512,
      "guardian": 15922,
      "crusader": 13335,
      "archon": 10716,
      "legend": 7887,
      "ancient": 5125,
      "divine": 6753
    },
    "counters": [
      "disruptor",
      "ursa",
      "earthshaker",
      "terrorblade",
      "underlord",
      "dark-willow"
    ],
    "weakAgainst": [
      "marci",
      "slardar",
      "juggernaut",
      "bane",
      "doom",
      "venomancer"
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.495,
      "crusader": 0.494,
      "archon": 0.501,
      "legend": 0.512,
      "ancient": 0.526,
      "divine": 0.547
    },
    "pickByBracket": {
      "herald": 11428,
      "guardian": 20760,
      "crusader": 20967,
      "archon": 17072,
      "legend": 11696,
      "ancient": 7567,
      "divine": 8486
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.489,
      "crusader": 0.492,
      "archon": 0.498,
      "legend": 0.499,
      "ancient": 0.505,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 35984,
      "guardian": 71608,
      "crusader": 79005,
      "archon": 72021,
      "legend": 56045,
      "ancient": 37046,
      "divine": 39856
    },
    "counters": [
      "templar-assassin",
      "dragon-knight",
      "dawnbreaker",
      "storm-spirit",
      "abaddon",
      "silencer"
    ],
    "weakAgainst": [
      "muerta",
      "keeper-of-the-light",
      "sniper",
      "tidehunter",
      "axe",
      "juggernaut"
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.511,
      "crusader": 0.518,
      "archon": 0.53,
      "legend": 0.524,
      "ancient": 0.529,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 13060,
      "guardian": 28060,
      "crusader": 34290,
      "archon": 33255,
      "legend": 26760,
      "ancient": 18905,
      "divine": 22087
    },
    "counters": [
      "muerta",
      "templar-assassin",
      "leshrac",
      "necrophos",
      "ring-master",
      "wraith-king"
    ],
    "weakAgainst": [
      "sniper",
      "monkey-king",
      "techies",
      "snapfire",
      "timbersaw",
      "lifestealer"
    ],
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
      "Glimmer Cape",
      "Staff of Wizardry",
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
    "overallWin": 0.424,
    "winByBracket": {
      "herald": 0.423,
      "guardian": 0.423,
      "crusader": 0.419,
      "archon": 0.427,
      "legend": 0.428,
      "ancient": 0.421,
      "divine": 0.427
    },
    "pickByBracket": {
      "herald": 7475,
      "guardian": 13554,
      "crusader": 15932,
      "archon": 14973,
      "legend": 11524,
      "ancient": 6972,
      "divine": 6227
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
      "herald": 0.474,
      "guardian": 0.479,
      "crusader": 0.481,
      "archon": 0.483,
      "legend": 0.486,
      "ancient": 0.479,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 29388,
      "guardian": 56270,
      "crusader": 62450,
      "archon": 57677,
      "legend": 45981,
      "ancient": 31794,
      "divine": 36383
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
      "broodmother",
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
      "herald": 0.445,
      "guardian": 0.442,
      "crusader": 0.445,
      "archon": 0.452,
      "legend": 0.458,
      "ancient": 0.457,
      "divine": 0.458
    },
    "pickByBracket": {
      "herald": 22844,
      "guardian": 31439,
      "crusader": 29272,
      "archon": 24306,
      "legend": 17382,
      "ancient": 11418,
      "divine": 13519
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.496,
      "crusader": 0.503,
      "archon": 0.502,
      "legend": 0.508,
      "ancient": 0.513,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 41616,
      "guardian": 95436,
      "crusader": 113402,
      "archon": 107871,
      "legend": 84880,
      "ancient": 57142,
      "divine": 63237
    },
    "counters": [
      "lina",
      "weaver",
      "troll-warlord",
      "lich",
      "chaos-knight",
      "magnus"
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
      "Mantle of Intelligence",
      "Tango"
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
      "herald": 0.495,
      "guardian": 0.496,
      "crusader": 0.499,
      "archon": 0.501,
      "legend": 0.499,
      "ancient": 0.512,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 10433,
      "guardian": 19900,
      "crusader": 19740,
      "archon": 16260,
      "legend": 12203,
      "ancient": 8332,
      "divine": 10719
    },
    "counters": [
      "ember-spirit",
      "disruptor",
      "snapfire",
      "jakiro",
      "shadow-fiend",
      "hoodwink"
    ],
    "weakAgainst": [
      "pudge",
      "rubick",
      "lion",
      "axe"
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.485,
      "crusader": 0.475,
      "archon": 0.469,
      "legend": 0.468,
      "ancient": 0.465,
      "divine": 0.459
    },
    "pickByBracket": {
      "herald": 20881,
      "guardian": 43837,
      "crusader": 51148,
      "archon": 46712,
      "legend": 33723,
      "ancient": 20985,
      "divine": 17551
    },
    "counters": [
      "chaos-knight",
      "omniknight",
      "tinker",
      "broodmother",
      "weaver",
      "anti-mage"
    ],
    "weakAgainst": [
      "treant-protector",
      "io",
      "lone-druid",
      "clinkz",
      "bane",
      "bounty-hunter"
    ],
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.516,
      "crusader": 0.521,
      "archon": 0.52,
      "legend": 0.522,
      "ancient": 0.523,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 48346,
      "guardian": 91474,
      "crusader": 98235,
      "archon": 86137,
      "legend": 64587,
      "ancient": 39975,
      "divine": 38112
    },
    "counters": [
      "zeus",
      "pangolier",
      "techies",
      "phoenix",
      "faceless-void",
      "magnus"
    ],
    "weakAgainst": [
      "abaddon",
      "nyx-assassin",
      "venomancer",
      "sniper",
      "kez",
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.504,
      "crusader": 0.509,
      "archon": 0.515,
      "legend": 0.521,
      "ancient": 0.525,
      "divine": 0.535
    },
    "pickByBracket": {
      "herald": 15948,
      "guardian": 30099,
      "crusader": 31844,
      "archon": 27022,
      "legend": 21216,
      "ancient": 14826,
      "divine": 20986
    },
    "counters": [
      "warlock",
      "spirit-breaker",
      "hoodwink",
      "bristleback",
      "abaddon",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "treant-protector",
      "batrider",
      "monkey-king",
      "viper",
      "slardar",
      "primal-beast"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Circlet",
      "Observer Ward",
      "Blood Grenade"
    ],
    "coreItems": [
      "Holy Locket",
      "Point Booster",
      "Staff of Wizardry",
      "Boots of Travel",
      "Vitality Booster"
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
      "herald": 0.454,
      "guardian": 0.455,
      "crusader": 0.445,
      "archon": 0.444,
      "legend": 0.443,
      "ancient": 0.436,
      "divine": 0.437
    },
    "pickByBracket": {
      "herald": 12432,
      "guardian": 23325,
      "crusader": 27697,
      "archon": 27462,
      "legend": 23816,
      "ancient": 17500,
      "divine": 22178
    },
    "counters": [
      "lifestealer",
      "disruptor",
      "dawnbreaker",
      "lich",
      "silencer",
      "tiny"
    ],
    "weakAgainst": [
      "treant-protector",
      "largo",
      "batrider",
      "windranger",
      "razor",
      "faceless-void"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Magic Wand",
      "Tango",
      "Circlet",
      "Quelling Blade"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.481,
      "crusader": 0.488,
      "archon": 0.494,
      "legend": 0.502,
      "ancient": 0.502,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 13891,
      "guardian": 25924,
      "crusader": 29000,
      "archon": 26604,
      "legend": 21303,
      "ancient": 13900,
      "divine": 14369
    },
    "counters": [
      "sven",
      "weaver",
      "bristleback",
      "hoodwink",
      "morphling",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "ancient-apparition",
      "terrorblade",
      "monkey-king",
      "templar-assassin",
      "batrider",
      "shadow-demon"
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
      "Blade of Alacrity",
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.479,
      "crusader": 0.472,
      "archon": 0.482,
      "legend": 0.485,
      "ancient": 0.483,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 3886,
      "guardian": 7807,
      "crusader": 9216,
      "archon": 9560,
      "legend": 8037,
      "ancient": 5642,
      "divine": 7333
    },
    "counters": [
      "pangolier",
      "queen-of-pain",
      "primal-beast",
      "timbersaw",
      "pudge",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "sniper",
      "axe",
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
      "Blood Grenade"
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
      "herald": 0.521,
      "guardian": 0.531,
      "crusader": 0.529,
      "archon": 0.528,
      "legend": 0.526,
      "ancient": 0.519,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 44536,
      "guardian": 92742,
      "crusader": 97860,
      "archon": 83994,
      "legend": 59697,
      "ancient": 35878,
      "divine": 32925
    },
    "counters": [
      "venomancer",
      "luna",
      "bristleback",
      "medusa",
      "doom",
      "magnus"
    ],
    "weakAgainst": [
      "storm-spirit",
      "tusk",
      "abaddon",
      "juggernaut",
      "slardar",
      "phoenix"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.494,
      "crusader": 0.489,
      "archon": 0.499,
      "legend": 0.505,
      "ancient": 0.502,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 6034,
      "guardian": 10737,
      "crusader": 10833,
      "archon": 9617,
      "legend": 7659,
      "ancient": 5502,
      "divine": 6810
    },
    "counters": [
      "muerta",
      "silencer",
      "slark",
      "lina",
      "lycan",
      "doom"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.522,
      "crusader": 0.523,
      "archon": 0.523,
      "legend": 0.518,
      "ancient": 0.516,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 27970,
      "guardian": 55286,
      "crusader": 65112,
      "archon": 63160,
      "legend": 51623,
      "ancient": 35797,
      "divine": 37456
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.51,
      "crusader": 0.521,
      "archon": 0.526,
      "legend": 0.526,
      "ancient": 0.526,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 22372,
      "guardian": 49309,
      "crusader": 57664,
      "archon": 54453,
      "legend": 43027,
      "ancient": 29118,
      "divine": 29364
    },
    "counters": [
      "phantom-assassin",
      "weaver",
      "night-stalker",
      "witch-doctor",
      "grimstroke",
      "vengeful-spirit"
    ],
    "weakAgainst": [
      "kez",
      "alchemist",
      "phoenix",
      "doom",
      "slardar",
      "morphling"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.472,
      "guardian": 0.488,
      "crusader": 0.495,
      "archon": 0.5,
      "legend": 0.504,
      "ancient": 0.506,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 44856,
      "guardian": 76303,
      "crusader": 80708,
      "archon": 71794,
      "legend": 53873,
      "ancient": 35194,
      "divine": 36407
    },
    "counters": [
      "underlord",
      "abaddon",
      "phoenix",
      "axe",
      "storm-spirit",
      "warlock"
    ],
    "weakAgainst": [
      "invoker",
      "monkey-king",
      "timbersaw",
      "pangolier",
      "slardar",
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.492,
      "crusader": 0.49,
      "archon": 0.487,
      "legend": 0.487,
      "ancient": 0.486,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 75041,
      "guardian": 155439,
      "crusader": 173022,
      "archon": 156734,
      "legend": 118626,
      "ancient": 77507,
      "divine": 79201
    },
    "counters": [],
    "weakAgainst": [],
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
      "Ghost Scepter",
      "Blitz Knuckles",
      "Staff of Wizardry",
      "Claymore"
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
      "guardian": 0.494,
      "crusader": 0.494,
      "archon": 0.487,
      "legend": 0.482,
      "ancient": 0.482,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 7246,
      "guardian": 15469,
      "crusader": 17346,
      "archon": 14861,
      "legend": 11765,
      "ancient": 8105,
      "divine": 10119
    },
    "counters": [
      "shadow-fiend",
      "hoodwink",
      "windranger",
      "tiny",
      "jakiro",
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
      "Hyperstone",
      "Maelstrom",
      "Mjollnir",
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.498,
      "crusader": 0.493,
      "archon": 0.495,
      "legend": 0.488,
      "ancient": 0.488,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 22132,
      "guardian": 38534,
      "crusader": 40969,
      "archon": 37966,
      "legend": 30725,
      "ancient": 21282,
      "divine": 25233
    },
    "counters": [
      "morphling",
      "sand-king",
      "phantom-assassin",
      "sniper",
      "alchemist",
      "dragon-knight"
    ],
    "weakAgainst": [
      "clockwerk",
      "monkey-king",
      "legion-commander",
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
      "Mask of Madness"
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.459,
      "crusader": 0.484,
      "archon": 0.491,
      "legend": 0.503,
      "ancient": 0.493,
      "divine": 0.531
    },
    "pickByBracket": {
      "herald": 4047,
      "guardian": 7254,
      "crusader": 7605,
      "archon": 6599,
      "legend": 5215,
      "ancient": 3621,
      "divine": 5101
    },
    "counters": [
      "skywrath-mage",
      "sven",
      "lion",
      "axe",
      "ursa",
      "pudge"
    ],
    "weakAgainst": [
      "leshrac",
      "beastmaster",
      "terrorblade",
      "ogre-magi",
      "tusk",
      "bane"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Sage's Mask",
      "Magic Stick",
      "Magic Wand"
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
      "herald": 0.469,
      "guardian": 0.478,
      "crusader": 0.488,
      "archon": 0.493,
      "legend": 0.496,
      "ancient": 0.501,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 14403,
      "guardian": 41390,
      "crusader": 58454,
      "archon": 61727,
      "legend": 51874,
      "ancient": 35881,
      "divine": 36718
    },
    "counters": [
      "void-spirit",
      "phoenix",
      "bristleback",
      "doom",
      "warlock",
      "hoodwink"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.488,
      "crusader": 0.491,
      "archon": 0.494,
      "legend": 0.491,
      "ancient": 0.499,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 12100,
      "guardian": 19757,
      "crusader": 20737,
      "archon": 18435,
      "legend": 13862,
      "ancient": 9605,
      "divine": 10800
    },
    "counters": [
      "death-prophet",
      "witch-doctor",
      "void-spirit",
      "enchantress",
      "ursa",
      "storm-spirit"
    ],
    "weakAgainst": [
      "dazzle",
      "ancient-apparition",
      "phoenix",
      "rubick",
      "lycan",
      "puck"
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.461,
      "guardian": 0.459,
      "crusader": 0.46,
      "archon": 0.463,
      "legend": 0.468,
      "ancient": 0.464,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 10187,
      "guardian": 23486,
      "crusader": 31593,
      "archon": 33325,
      "legend": 29850,
      "ancient": 22199,
      "divine": 25440
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
      "ancient-apparition",
      "phoenix",
      "shadow-demon",
      "huskar"
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
      "guardian": 0.502,
      "crusader": 0.502,
      "archon": 0.498,
      "legend": 0.488,
      "ancient": 0.495,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 12775,
      "guardian": 23440,
      "crusader": 24223,
      "archon": 21115,
      "legend": 14721,
      "ancient": 8938,
      "divine": 8049
    },
    "counters": [
      "dark-willow",
      "weaver",
      "warlock",
      "templar-assassin",
      "sand-king",
      "undying"
    ],
    "weakAgainst": [
      "shadow-demon",
      "shadow-shaman",
      "ogre-magi",
      "necrophos",
      "centaur-warrunner",
      "dawnbreaker"
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.509,
      "crusader": 0.508,
      "archon": 0.513,
      "legend": 0.506,
      "ancient": 0.518,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 7744,
      "guardian": 11666,
      "crusader": 10620,
      "archon": 8048,
      "legend": 5296,
      "ancient": 3289,
      "divine": 3833
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
      "herald": 0.511,
      "guardian": 0.511,
      "crusader": 0.512,
      "archon": 0.51,
      "legend": 0.516,
      "ancient": 0.51,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 19199,
      "guardian": 37342,
      "crusader": 41547,
      "archon": 36088,
      "legend": 26917,
      "ancient": 16907,
      "divine": 16997
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
      "tidehunter",
      "tusk",
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
      "Ogre Axe"
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
      "herald": 0.434,
      "guardian": 0.434,
      "crusader": 0.437,
      "archon": 0.448,
      "legend": 0.453,
      "ancient": 0.451,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 19679,
      "guardian": 33567,
      "crusader": 35217,
      "archon": 32862,
      "legend": 25738,
      "ancient": 16813,
      "divine": 19641
    },
    "counters": [
      "undying",
      "earthshaker",
      "death-prophet",
      "weaver",
      "clockwerk",
      "underlord"
    ],
    "weakAgainst": [
      "treant-protector",
      "chen",
      "naga-siren",
      "crystal-maiden",
      "zeus",
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.484,
      "crusader": 0.488,
      "archon": 0.485,
      "legend": 0.488,
      "ancient": 0.494,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 12879,
      "guardian": 25367,
      "crusader": 26430,
      "archon": 22375,
      "legend": 17182,
      "ancient": 11970,
      "divine": 14276
    },
    "counters": [
      "weaver",
      "terrorblade",
      "lifestealer",
      "dawnbreaker",
      "void-spirit",
      "anti-mage"
    ],
    "weakAgainst": [
      "luna",
      "doom",
      "dazzle",
      "viper",
      "timbersaw",
      "pudge"
    ],
    "startItems": [
      "Iron Branch",
      "Magic Wand",
      "Circlet",
      "Tango",
      "Slippers of Agility",
      "Faerie Fire"
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.483,
      "crusader": 0.471,
      "archon": 0.467,
      "legend": 0.47,
      "ancient": 0.466,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 13759,
      "guardian": 22831,
      "crusader": 25148,
      "archon": 24023,
      "legend": 19621,
      "ancient": 13695,
      "divine": 15145
    },
    "counters": [
      "techies",
      "faceless-void",
      "lich",
      "bristleback",
      "luna",
      "sven"
    ],
    "weakAgainst": [
      "slark",
      "grimstroke",
      "leshrac",
      "huskar",
      "primal-beast",
      "sand-king"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.495,
      "crusader": 0.496,
      "archon": 0.487,
      "legend": 0.5,
      "ancient": 0.503,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 10197,
      "guardian": 13296,
      "crusader": 10102,
      "archon": 6997,
      "legend": 4542,
      "ancient": 2725,
      "divine": 3328
    },
    "counters": [
      "void-spirit",
      "windranger",
      "hoodwink",
      "puck",
      "pangolier",
      "axe"
    ],
    "weakAgainst": [
      "storm-spirit",
      "sand-king",
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
      "Blitz Knuckles",
      "Claymore",
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
    "overallWin": 0.433,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.434,
      "crusader": 0.429,
      "archon": 0.43,
      "legend": 0.428,
      "ancient": 0.432,
      "divine": 0.437
    },
    "pickByBracket": {
      "herald": 32142,
      "guardian": 57599,
      "crusader": 59326,
      "archon": 51366,
      "legend": 38096,
      "ancient": 24834,
      "divine": 27185
    },
    "counters": [
      "razor",
      "phantom-lancer",
      "pangolier",
      "doom",
      "huskar",
      "sniper"
    ],
    "weakAgainst": [
      "kez",
      "morphling",
      "nyx-assassin",
      "bane",
      "luna",
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.545,
      "guardian": 0.535,
      "crusader": 0.527,
      "archon": 0.521,
      "legend": 0.519,
      "ancient": 0.513,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 51356,
      "guardian": 101679,
      "crusader": 111027,
      "archon": 100929,
      "legend": 77366,
      "ancient": 50552,
      "divine": 53327
    },
    "counters": [
      "underlord",
      "sven",
      "witch-doctor",
      "medusa",
      "void-spirit",
      "bristleback"
    ],
    "weakAgainst": [
      "grimstroke",
      "drow-ranger",
      "beastmaster",
      "ring-master",
      "muerta",
      "keeper-of-the-light"
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
      "Aghanim's Shard",
      "Talisman of Evasion",
      "Boots of Travel",
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.508,
      "crusader": 0.522,
      "archon": 0.528,
      "legend": 0.536,
      "ancient": 0.536,
      "divine": 0.545
    },
    "pickByBracket": {
      "herald": 12958,
      "guardian": 29901,
      "crusader": 38970,
      "archon": 40185,
      "legend": 33896,
      "ancient": 24253,
      "divine": 30261
    },
    "counters": [
      "dark-willow",
      "ancient-apparition",
      "zeus",
      "tidehunter",
      "troll-warlord",
      "storm-spirit"
    ],
    "weakAgainst": [
      "lifestealer",
      "pugna",
      "undying",
      "beastmaster",
      "crystal-maiden",
      "rubick"
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
      "herald": 0.512,
      "guardian": 0.515,
      "crusader": 0.522,
      "archon": 0.523,
      "legend": 0.523,
      "ancient": 0.522,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 19200,
      "guardian": 39207,
      "crusader": 44273,
      "archon": 42298,
      "legend": 34069,
      "ancient": 23046,
      "divine": 25285
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
      "clockwerk"
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
      "herald": 0.521,
      "guardian": 0.512,
      "crusader": 0.505,
      "archon": 0.502,
      "legend": 0.499,
      "ancient": 0.495,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 57765,
      "guardian": 108252,
      "crusader": 108094,
      "archon": 88671,
      "legend": 60502,
      "ancient": 35025,
      "divine": 28533
    },
    "counters": [
      "medusa",
      "winter-wyvern",
      "ancient-apparition",
      "bristleback",
      "anti-mage",
      "phantom-lancer"
    ],
    "weakAgainst": [
      "phoenix",
      "mirana",
      "naga-siren",
      "pugna",
      "bounty-hunter",
      "treant-protector"
    ],
    "startItems": [
      "Tango",
      "Observer and Sentry Wards",
      "Iron Branch",
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
      "herald": 0.484,
      "guardian": 0.495,
      "crusader": 0.492,
      "archon": 0.506,
      "legend": 0.51,
      "ancient": 0.519,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 7500,
      "guardian": 13549,
      "crusader": 14137,
      "archon": 13063,
      "legend": 9647,
      "ancient": 6600,
      "divine": 7278
    },
    "counters": [
      "tiny",
      "shadow-fiend",
      "skywrath-mage",
      "mars"
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.463,
      "guardian": 0.483,
      "crusader": 0.497,
      "archon": 0.506,
      "legend": 0.517,
      "ancient": 0.51,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 6432,
      "guardian": 14602,
      "crusader": 18759,
      "archon": 18338,
      "legend": 15313,
      "ancient": 10809,
      "divine": 12821
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.495,
      "crusader": 0.504,
      "archon": 0.501,
      "legend": 0.507,
      "ancient": 0.511,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 11172,
      "guardian": 22328,
      "crusader": 25790,
      "archon": 23932,
      "legend": 18372,
      "ancient": 11551,
      "divine": 11399
    },
    "counters": [
      "jakiro",
      "lion"
    ],
    "weakAgainst": [
      "shadow-demon",
      "dawnbreaker",
      "mars",
      "disruptor",
      "timbersaw",
      "queen-of-pain"
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
    "overallWin": 0.457,
    "winByBracket": {
      "herald": 0.436,
      "guardian": 0.454,
      "crusader": 0.45,
      "archon": 0.46,
      "legend": 0.459,
      "ancient": 0.462,
      "divine": 0.463
    },
    "pickByBracket": {
      "herald": 6450,
      "guardian": 14486,
      "crusader": 19967,
      "archon": 22339,
      "legend": 20529,
      "ancient": 16236,
      "divine": 21817
    },
    "counters": [
      "lina",
      "sven",
      "jakiro",
      "drow-ranger",
      "beastmaster",
      "earth-spirit"
    ],
    "weakAgainst": [
      "largo",
      "naga-siren",
      "treant-protector",
      "nature-s-prophet",
      "juggernaut",
      "kunkka"
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
      "Blink Dagger",
      "Blade of Alacrity",
      "Diffusal Blade",
      "Point Booster",
      "Staff of Wizardry"
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.514,
      "crusader": 0.504,
      "archon": 0.505,
      "legend": 0.497,
      "ancient": 0.492,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 59338,
      "guardian": 95654,
      "crusader": 88617,
      "archon": 69516,
      "legend": 46153,
      "ancient": 26571,
      "divine": 22930
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
      "ursa",
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
    "overallWin": 0.528,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.528,
      "crusader": 0.531,
      "archon": 0.527,
      "legend": 0.531,
      "ancient": 0.531,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 37440,
      "guardian": 67406,
      "crusader": 64283,
      "archon": 50743,
      "legend": 36072,
      "ancient": 23655,
      "divine": 27571
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
      "terrorblade",
      "nature-s-prophet",
      "windranger"
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.505,
      "crusader": 0.505,
      "archon": 0.501,
      "legend": 0.504,
      "ancient": 0.498,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 10380,
      "guardian": 26252,
      "crusader": 33717,
      "archon": 34093,
      "legend": 29113,
      "ancient": 21292,
      "divine": 26632
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.479,
      "crusader": 0.484,
      "archon": 0.481,
      "legend": 0.495,
      "ancient": 0.496,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 10725,
      "guardian": 21241,
      "crusader": 22282,
      "archon": 19961,
      "legend": 15229,
      "ancient": 10856,
      "divine": 12845
    },
    "counters": [
      "muerta",
      "gyrocopter",
      "terrorblade",
      "viper",
      "puck",
      "dark-willow"
    ],
    "weakAgainst": [
      "largo",
      "earthshaker",
      "shadow-demon",
      "razor",
      "invoker",
      "slardar"
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.445,
      "guardian": 0.445,
      "crusader": 0.465,
      "archon": 0.467,
      "legend": 0.476,
      "ancient": 0.487,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 8728,
      "guardian": 18285,
      "crusader": 23080,
      "archon": 23813,
      "legend": 19905,
      "ancient": 14512,
      "divine": 18984
    },
    "counters": [
      "weaver",
      "sven",
      "dark-willow",
      "crystal-maiden",
      "invoker",
      "underlord"
    ],
    "weakAgainst": [
      "naga-siren",
      "dark-seer",
      "clinkz",
      "bounty-hunter",
      "nyx-assassin",
      "huskar"
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
      "Witch Blade",
      "Blink Dagger",
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.513,
      "crusader": 0.513,
      "archon": 0.513,
      "legend": 0.511,
      "ancient": 0.506,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 75333,
      "guardian": 161261,
      "crusader": 170974,
      "archon": 144774,
      "legend": 106575,
      "ancient": 70376,
      "divine": 80390
    },
    "counters": [
      "io",
      "clinkz",
      "wraith-king",
      "morphling",
      "phantom-assassin",
      "warlock"
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.487,
      "crusader": 0.5,
      "archon": 0.507,
      "legend": 0.508,
      "ancient": 0.502,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 14372,
      "guardian": 25069,
      "crusader": 25218,
      "archon": 21651,
      "legend": 16438,
      "ancient": 10540,
      "divine": 10103
    },
    "counters": [
      "night-stalker",
      "dark-willow",
      "dazzle",
      "beastmaster",
      "muerta",
      "tusk"
    ],
    "weakAgainst": [
      "chen",
      "naga-siren",
      "crystal-maiden",
      "shadow-fiend",
      "terrorblade",
      "centaur-warrunner"
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
      "herald": 0.461,
      "guardian": 0.461,
      "crusader": 0.464,
      "archon": 0.464,
      "legend": 0.465,
      "ancient": 0.459,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 26934,
      "guardian": 58961,
      "crusader": 72984,
      "archon": 69322,
      "legend": 54627,
      "ancient": 35871,
      "divine": 37464
    },
    "counters": [
      "phantom-lancer",
      "phantom-assassin",
      "tinker",
      "sand-king",
      "drow-ranger",
      "chaos-knight"
    ],
    "weakAgainst": [
      "largo",
      "keeper-of-the-light",
      "chen",
      "treant-protector",
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.504,
      "crusader": 0.505,
      "archon": 0.506,
      "legend": 0.505,
      "ancient": 0.505,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 21753,
      "guardian": 32564,
      "crusader": 32722,
      "archon": 27417,
      "legend": 20738,
      "ancient": 13131,
      "divine": 12474
    },
    "counters": [
      "witch-doctor",
      "silencer",
      "crystal-maiden",
      "primal-beast",
      "tidehunter",
      "warlock"
    ],
    "weakAgainst": [
      "treant-protector",
      "nature-s-prophet",
      "terrorblade",
      "phoenix",
      "kunkka",
      "sniper"
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.526,
      "crusader": 0.527,
      "archon": 0.524,
      "legend": 0.525,
      "ancient": 0.527,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 25672,
      "guardian": 41985,
      "crusader": 37473,
      "archon": 29023,
      "legend": 20502,
      "ancient": 12348,
      "divine": 11233
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
      "herald": 0.463,
      "guardian": 0.474,
      "crusader": 0.475,
      "archon": 0.48,
      "legend": 0.485,
      "ancient": 0.481,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 7807,
      "guardian": 16971,
      "crusader": 20254,
      "archon": 20697,
      "legend": 17866,
      "ancient": 13405,
      "divine": 16870
    },
    "counters": [
      "troll-warlord",
      "dark-willow",
      "skywrath-mage",
      "vengeful-spirit",
      "earth-spirit",
      "necrophos"
    ],
    "weakAgainst": [
      "alchemist",
      "chen",
      "grimstroke",
      "bane",
      "dazzle",
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
      "herald": 0.483,
      "guardian": 0.483,
      "crusader": 0.489,
      "archon": 0.492,
      "legend": 0.497,
      "ancient": 0.502,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 34740,
      "guardian": 87739,
      "crusader": 116266,
      "archon": 121548,
      "legend": 102645,
      "ancient": 72241,
      "divine": 80165
    },
    "counters": [
      "phantom-assassin",
      "phantom-lancer",
      "sven",
      "weaver",
      "magnus",
      "chaos-knight"
    ],
    "weakAgainst": [
      "lone-druid",
      "lycan",
      "broodmother",
      "leshrac",
      "visage",
      "bane"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Sentry Ward",
      "Faerie Fire",
      "Magic Stick"
    ],
    "coreItems": [
      "Blink Dagger",
      "Staff of Wizardry",
      "Arcane Boots",
      "Essence Distiller",
      "Point Booster"
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
      "herald": 0.506,
      "guardian": 0.497,
      "crusader": 0.481,
      "archon": 0.481,
      "legend": 0.472,
      "ancient": 0.472,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 14812,
      "guardian": 25562,
      "crusader": 25126,
      "archon": 21188,
      "legend": 15399,
      "ancient": 9894,
      "divine": 8901
    },
    "counters": [
      "muerta",
      "underlord",
      "ursa",
      "void-spirit",
      "lion",
      "beastmaster"
    ],
    "weakAgainst": [
      "warlock",
      "phoenix",
      "luna",
      "abaddon",
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
    "overallWin": 0.452,
    "winByBracket": {
      "herald": 0.433,
      "guardian": 0.436,
      "crusader": 0.446,
      "archon": 0.458,
      "legend": 0.461,
      "ancient": 0.46,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 4944,
      "guardian": 9511,
      "crusader": 11810,
      "archon": 11713,
      "legend": 10023,
      "ancient": 7228,
      "divine": 8831
    },
    "counters": [
      "medusa",
      "phantom-lancer",
      "outworld-devourer",
      "weaver",
      "primal-beast",
      "warlock"
    ],
    "weakAgainst": [
      "wraith-king",
      "naga-siren",
      "zeus",
      "alchemist",
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.493,
      "crusader": 0.488,
      "archon": 0.489,
      "legend": 0.487,
      "ancient": 0.485,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 40666,
      "guardian": 78869,
      "crusader": 85962,
      "archon": 78058,
      "legend": 60079,
      "ancient": 40591,
      "divine": 47311
    },
    "counters": [
      "winter-wyvern",
      "anti-mage",
      "pugna",
      "morphling",
      "night-stalker",
      "legion-commander"
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
      "Tango",
      "Magic Wand",
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.518,
      "crusader": 0.523,
      "archon": 0.521,
      "legend": 0.52,
      "ancient": 0.525,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 51192,
      "guardian": 92326,
      "crusader": 93861,
      "archon": 78948,
      "legend": 56602,
      "ancient": 35130,
      "divine": 34716
    },
    "counters": [
      "medusa",
      "huskar",
      "tinker",
      "phantom-assassin",
      "morphling",
      "bristleback"
    ],
    "weakAgainst": [
      "oracle",
      "bane",
      "beastmaster",
      "naga-siren",
      "treant-protector",
      "phantom-lancer"
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.523,
      "guardian": 0.515,
      "crusader": 0.511,
      "archon": 0.507,
      "legend": 0.506,
      "ancient": 0.5,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 33865,
      "guardian": 71073,
      "crusader": 76673,
      "archon": 68103,
      "legend": 50816,
      "ancient": 32249,
      "divine": 32390
    },
    "counters": [
      "death-prophet",
      "vengeful-spirit",
      "timbersaw",
      "lina",
      "chaos-knight",
      "ursa"
    ],
    "weakAgainst": [
      "huskar",
      "razor",
      "viper",
      "leshrac",
      "clockwerk",
      "kez"
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
      "Staff of Wizardry",
      "Arcane Boots",
      "Force Staff",
      "Glimmer Cape",
      "Drum of Endurance"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.503,
      "crusader": 0.504,
      "archon": 0.496,
      "legend": 0.497,
      "ancient": 0.498,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 39313,
      "guardian": 72496,
      "crusader": 76089,
      "archon": 65576,
      "legend": 49489,
      "ancient": 32107,
      "divine": 32355
    },
    "counters": [
      "death-prophet",
      "ancient-apparition",
      "witch-doctor",
      "dragon-knight",
      "necrophos",
      "bane"
    ],
    "weakAgainst": [
      "treant-protector",
      "lycan",
      "dazzle",
      "clinkz",
      "monkey-king",
      "ring-master"
    ],
    "startItems": [
      "Tango",
      "Circlet",
      "Mantle of Intelligence",
      "Blood Grenade",
      "Iron Branch",
      "Sentry Ward"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Arcane Boots",
      "Vitality Booster",
      "Aghanim's Shard",
      "Rod of Atos"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.504,
      "guardian": 0.495,
      "crusader": 0.495,
      "archon": 0.496,
      "legend": 0.492,
      "ancient": 0.495,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 24315,
      "guardian": 46236,
      "crusader": 49256,
      "archon": 44768,
      "legend": 34678,
      "ancient": 22883,
      "divine": 24697
    },
    "counters": [
      "weaver",
      "lina",
      "lifestealer",
      "sand-king",
      "viper",
      "enchantress"
    ],
    "weakAgainst": [
      "earth-spirit",
      "vengeful-spirit",
      "marci",
      "winter-wyvern",
      "zeus",
      "phantom-lancer"
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
      "herald": 0.511,
      "guardian": 0.499,
      "crusader": 0.492,
      "archon": 0.498,
      "legend": 0.496,
      "ancient": 0.495,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 29525,
      "guardian": 63326,
      "crusader": 72158,
      "archon": 65608,
      "legend": 49190,
      "ancient": 30884,
      "divine": 31434
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
      "snapfire",
      "dawnbreaker"
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
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.521,
      "crusader": 0.524,
      "archon": 0.528,
      "legend": 0.524,
      "ancient": 0.525,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 34791,
      "guardian": 85815,
      "crusader": 113783,
      "archon": 119983,
      "legend": 101720,
      "ancient": 72400,
      "divine": 81880
    },
    "counters": [
      "tinker",
      "winter-wyvern",
      "death-prophet",
      "witch-doctor",
      "phantom-lancer",
      "grimstroke"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "io",
      "clinkz",
      "treant-protector",
      "broodmother",
      "chen"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Blood Grenade",
      "Observer Ward",
      "Magic Stick"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Staff of Wizardry",
      "Blink Dagger",
      "Kaya",
      "Blade of Alacrity"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.506,
      "crusader": 0.504,
      "archon": 0.498,
      "legend": 0.491,
      "ancient": 0.489,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 74339,
      "guardian": 136891,
      "crusader": 139943,
      "archon": 115686,
      "legend": 78529,
      "ancient": 45198,
      "divine": 37492
    },
    "counters": [
      "weaver",
      "witch-doctor",
      "faceless-void",
      "grimstroke",
      "lich",
      "death-prophet"
    ],
    "weakAgainst": [
      "ember-spirit",
      "nature-s-prophet",
      "crystal-maiden",
      "earthshaker",
      "luna",
      "ring-master"
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
    "overallWin": 0.547,
    "winByBracket": {
      "herald": 0.559,
      "guardian": 0.552,
      "crusader": 0.549,
      "archon": 0.543,
      "legend": 0.545,
      "ancient": 0.537,
      "divine": 0.532
    },
    "pickByBracket": {
      "herald": 36162,
      "guardian": 70744,
      "crusader": 72406,
      "archon": 62527,
      "legend": 45177,
      "ancient": 29010,
      "divine": 28557
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.517,
      "crusader": 0.517,
      "archon": 0.517,
      "legend": 0.512,
      "ancient": 0.517,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 47477,
      "guardian": 86728,
      "crusader": 90762,
      "archon": 80852,
      "legend": 60199,
      "ancient": 38486,
      "divine": 39249
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
      "herald": 0.471,
      "guardian": 0.465,
      "crusader": 0.47,
      "archon": 0.47,
      "legend": 0.477,
      "ancient": 0.477,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 20816,
      "guardian": 41645,
      "crusader": 46640,
      "archon": 43104,
      "legend": 34575,
      "ancient": 24033,
      "divine": 27906
    },
    "counters": [
      "legion-commander",
      "bounty-hunter",
      "techies",
      "sven",
      "naga-siren",
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
      "Circlet",
      "Magic Wand"
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.498,
      "crusader": 0.504,
      "archon": 0.501,
      "legend": 0.511,
      "ancient": 0.507,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 18407,
      "guardian": 30274,
      "crusader": 28558,
      "archon": 22320,
      "legend": 16003,
      "ancient": 9795,
      "divine": 9512
    },
    "counters": [
      "morphling",
      "phantom-lancer",
      "skywrath-mage",
      "chaos-knight",
      "legion-commander",
      "zeus"
    ],
    "weakAgainst": [
      "kunkka",
      "brewmaster",
      "lycan",
      "bane",
      "earthshaker",
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.514,
      "crusader": 0.51,
      "archon": 0.507,
      "legend": 0.504,
      "ancient": 0.505,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 34529,
      "guardian": 62280,
      "crusader": 63635,
      "archon": 54984,
      "legend": 41164,
      "ancient": 27385,
      "divine": 29191
    },
    "counters": [
      "vengeful-spirit",
      "grimstroke",
      "luna",
      "dragon-knight",
      "disruptor",
      "shadow-demon"
    ],
    "weakAgainst": [
      "phoenix",
      "muerta",
      "storm-spirit",
      "juggernaut",
      "beastmaster",
      "clockwerk"
    ],
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
    "overallWin": 0.46,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.451,
      "crusader": 0.458,
      "archon": 0.462,
      "legend": 0.468,
      "ancient": 0.473,
      "divine": 0.467
    },
    "pickByBracket": {
      "herald": 13812,
      "guardian": 25750,
      "crusader": 26289,
      "archon": 22946,
      "legend": 17605,
      "ancient": 11925,
      "divine": 13943
    },
    "counters": [
      "weaver",
      "dark-seer",
      "kunkka",
      "anti-mage",
      "winter-wyvern",
      "sven"
    ],
    "weakAgainst": [
      "grimstroke",
      "treant-protector",
      "naga-siren",
      "huskar",
      "bane",
      "bristleback"
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.457,
      "crusader": 0.474,
      "archon": 0.484,
      "legend": 0.475,
      "ancient": 0.482,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 12812,
      "guardian": 21221,
      "crusader": 20032,
      "archon": 16684,
      "legend": 12472,
      "ancient": 8557,
      "divine": 12405
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
      "herald": 0.503,
      "guardian": 0.505,
      "crusader": 0.5,
      "archon": 0.5,
      "legend": 0.496,
      "ancient": 0.498,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 22340,
      "guardian": 46747,
      "crusader": 53885,
      "archon": 49952,
      "legend": 39239,
      "ancient": 26540,
      "divine": 29351
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.444,
    "winByBracket": {
      "herald": 0.447,
      "guardian": 0.446,
      "crusader": 0.449,
      "archon": 0.438,
      "legend": 0.445,
      "ancient": 0.441,
      "divine": 0.446
    },
    "pickByBracket": {
      "herald": 10535,
      "guardian": 21721,
      "crusader": 25057,
      "archon": 24646,
      "legend": 20399,
      "ancient": 14689,
      "divine": 17840
    },
    "counters": [
      "morphling",
      "lina",
      "anti-mage",
      "witch-doctor",
      "centaur-warrunner",
      "troll-warlord"
    ],
    "weakAgainst": [
      "largo",
      "nyx-assassin",
      "bounty-hunter",
      "bane",
      "treant-protector",
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
      "Staff of Wizardry",
      "Kaya",
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.444,
      "guardian": 0.459,
      "crusader": 0.472,
      "archon": 0.476,
      "legend": 0.482,
      "ancient": 0.488,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 14934,
      "guardian": 27895,
      "crusader": 27833,
      "archon": 23267,
      "legend": 17944,
      "ancient": 11853,
      "divine": 13816
    },
    "counters": [
      "invoker",
      "beastmaster",
      "dragon-knight"
    ],
    "weakAgainst": [
      "dawnbreaker",
      "snapfire",
      "queen-of-pain",
      "shadow-shaman",
      "tusk",
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
    "overallWin": 0.447,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.443,
      "crusader": 0.447,
      "archon": 0.444,
      "legend": 0.449,
      "ancient": 0.443,
      "divine": 0.455
    },
    "pickByBracket": {
      "herald": 16501,
      "guardian": 29615,
      "crusader": 32666,
      "archon": 31712,
      "legend": 26170,
      "ancient": 19231,
      "divine": 23403
    },
    "counters": [
      "death-prophet",
      "weaver",
      "tinker",
      "bristleback",
      "void-spirit",
      "sand-king"
    ],
    "weakAgainst": [
      "bane",
      "naga-siren",
      "lycan",
      "enigma",
      "kez",
      "largo"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Quelling Blade",
      "Circlet",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Claymore",
      "Blitz Knuckles",
      "Shadow Blade",
      "Echo Sabre",
      "Ogre Axe"
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
      "herald": 0.483,
      "guardian": 0.484,
      "crusader": 0.49,
      "archon": 0.503,
      "legend": 0.504,
      "ancient": 0.514,
      "divine": 0.534
    },
    "pickByBracket": {
      "herald": 9783,
      "guardian": 18854,
      "crusader": 21123,
      "archon": 20578,
      "legend": 16722,
      "ancient": 12797,
      "divine": 19814
    },
    "counters": [
      "monkey-king",
      "invoker",
      "razor",
      "spirit-breaker",
      "gyrocopter",
      "centaur-warrunner"
    ],
    "weakAgainst": [],
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
      "Pavise",
      "Essence Distiller",
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.517,
      "crusader": 0.521,
      "archon": 0.499,
      "legend": 0.503,
      "ancient": 0.502,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 15801,
      "guardian": 19599,
      "crusader": 16357,
      "archon": 12266,
      "legend": 8324,
      "ancient": 5145,
      "divine": 4452
    },
    "counters": [
      "silencer",
      "medusa",
      "dark-willow",
      "lifestealer",
      "tidehunter",
      "bristleback"
    ],
    "weakAgainst": [
      "ring-master",
      "abaddon",
      "invoker",
      "pudge",
      "timbersaw",
      "lion"
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.459,
      "crusader": 0.472,
      "archon": 0.484,
      "legend": 0.489,
      "ancient": 0.493,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 8797,
      "guardian": 19106,
      "crusader": 26358,
      "archon": 28369,
      "legend": 26106,
      "ancient": 20330,
      "divine": 26158
    },
    "counters": [
      "legion-commander",
      "wraith-king",
      "ancient-apparition",
      "magnus",
      "tinker",
      "lifestealer"
    ],
    "weakAgainst": [
      "treant-protector",
      "broodmother",
      "dark-seer",
      "venomancer",
      "pugna",
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
      "Staff of Wizardry",
      "Phase Boots",
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
      "herald": 0.514,
      "guardian": 0.514,
      "crusader": 0.506,
      "archon": 0.501,
      "legend": 0.494,
      "ancient": 0.487,
      "divine": 0.467
    },
    "pickByBracket": {
      "herald": 14706,
      "guardian": 32200,
      "crusader": 39334,
      "archon": 39613,
      "legend": 32913,
      "ancient": 23101,
      "divine": 24814
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.517,
      "crusader": 0.523,
      "archon": 0.519,
      "legend": 0.527,
      "ancient": 0.526,
      "divine": 0.525
    },
    "pickByBracket": {
      "herald": 31028,
      "guardian": 60632,
      "crusader": 65530,
      "archon": 56624,
      "legend": 41291,
      "ancient": 27449,
      "divine": 30705
    },
    "counters": [
      "death-prophet",
      "weaver",
      "phantom-lancer",
      "night-stalker",
      "lion",
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
      "Observer and Sentry Wards",
      "Magic Stick"
    ],
    "coreItems": [
      "Arcane Boots",
      "Mekansm",
      "Staff of Wizardry",
      "Ogre Axe",
      "Guardian Greaves"
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
    "overallWin": 0.468,
    "winByBracket": {
      "herald": 0.445,
      "guardian": 0.464,
      "crusader": 0.468,
      "archon": 0.471,
      "legend": 0.472,
      "ancient": 0.477,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 19491,
      "guardian": 36635,
      "crusader": 40605,
      "archon": 37242,
      "legend": 28653,
      "ancient": 18550,
      "divine": 19332
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
    "overallWin": 0.533,
    "winByBracket": {
      "herald": 0.535,
      "guardian": 0.537,
      "crusader": 0.536,
      "archon": 0.536,
      "legend": 0.531,
      "ancient": 0.534,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 24519,
      "guardian": 50883,
      "crusader": 60017,
      "archon": 58575,
      "legend": 47160,
      "ancient": 31717,
      "divine": 31783
    },
    "counters": [
      "void-spirit",
      "slardar",
      "lich",
      "morphling",
      "timbersaw",
      "warlock"
    ],
    "weakAgainst": [
      "techies",
      "beastmaster",
      "phoenix",
      "ring-master",
      "dawnbreaker",
      "batrider"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Blood Grenade",
      "Circlet",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Staff of Wizardry",
      "Ogre Axe",
      "Broadsword",
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
    "overallWin": 0.468,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.468,
      "crusader": 0.468,
      "archon": 0.47,
      "legend": 0.469,
      "ancient": 0.463,
      "divine": 0.46
    },
    "pickByBracket": {
      "herald": 29058,
      "guardian": 54126,
      "crusader": 58276,
      "archon": 50977,
      "legend": 36991,
      "ancient": 22821,
      "divine": 21114
    },
    "counters": [
      "dragon-knight",
      "weaver",
      "clockwerk",
      "warlock",
      "zeus",
      "storm-spirit"
    ],
    "weakAgainst": [
      "ember-spirit",
      "legion-commander",
      "batrider",
      "invoker",
      "pudge",
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.476,
      "crusader": 0.486,
      "archon": 0.485,
      "legend": 0.482,
      "ancient": 0.49,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 38580,
      "guardian": 53593,
      "crusader": 49745,
      "archon": 40530,
      "legend": 28417,
      "ancient": 17560,
      "divine": 18514
    },
    "counters": [
      "silencer",
      "bristleback",
      "morphling",
      "ancient-apparition",
      "tidehunter",
      "dragon-knight"
    ],
    "weakAgainst": [
      "death-prophet",
      "slardar",
      "dazzle",
      "primal-beast",
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.51,
      "crusader": 0.517,
      "archon": 0.532,
      "legend": 0.537,
      "ancient": 0.53,
      "divine": 0.543
    },
    "pickByBracket": {
      "herald": 4793,
      "guardian": 8478,
      "crusader": 8283,
      "archon": 7156,
      "legend": 5412,
      "ancient": 3743,
      "divine": 5190
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.489,
      "crusader": 0.496,
      "archon": 0.501,
      "legend": 0.506,
      "ancient": 0.501,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 9593,
      "guardian": 19043,
      "crusader": 24083,
      "archon": 25462,
      "legend": 22863,
      "ancient": 17293,
      "divine": 22441
    },
    "counters": [
      "zeus",
      "weaver",
      "earthshaker",
      "sven",
      "dazzle",
      "muerta"
    ],
    "weakAgainst": [
      "naga-siren",
      "nyx-assassin",
      "phoenix",
      "treant-protector",
      "alchemist",
      "magnus"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.507,
      "crusader": 0.501,
      "archon": 0.496,
      "legend": 0.493,
      "ancient": 0.491,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 20825,
      "guardian": 40412,
      "crusader": 42716,
      "archon": 36886,
      "legend": 26208,
      "ancient": 16135,
      "divine": 15730
    },
    "counters": [
      "sand-king",
      "drow-ranger",
      "ancient-apparition",
      "alchemist",
      "axe",
      "troll-warlord"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "treant-protector",
      "slark",
      "dazzle",
      "venomancer",
      "pudge"
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.466,
      "crusader": 0.472,
      "archon": 0.47,
      "legend": 0.47,
      "ancient": 0.467,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 25628,
      "guardian": 41161,
      "crusader": 40855,
      "archon": 33923,
      "legend": 24905,
      "ancient": 15111,
      "divine": 15595
    },
    "counters": [
      "sven",
      "crystal-maiden",
      "gyrocopter",
      "brewmaster",
      "lich",
      "lina"
    ],
    "weakAgainst": [
      "morphling",
      "puck",
      "templar-assassin",
      "venomancer",
      "monkey-king",
      "centaur-warrunner"
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.477,
      "crusader": 0.475,
      "archon": 0.483,
      "legend": 0.48,
      "ancient": 0.488,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 41324,
      "guardian": 72918,
      "crusader": 79682,
      "archon": 73807,
      "legend": 57306,
      "ancient": 39541,
      "divine": 44036
    },
    "counters": [
      "oracle",
      "phantom-lancer",
      "chaos-knight",
      "morphling",
      "sand-king",
      "lina"
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
      "Magic Stick"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Blade of Alacrity",
      "Maelstrom",
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.479,
      "crusader": 0.487,
      "archon": 0.494,
      "legend": 0.5,
      "ancient": 0.512,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 12164,
      "guardian": 22844,
      "crusader": 24406,
      "archon": 22376,
      "legend": 18410,
      "ancient": 12832,
      "divine": 17421
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
      "herald": 0.529,
      "guardian": 0.524,
      "crusader": 0.517,
      "archon": 0.51,
      "legend": 0.502,
      "ancient": 0.501,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 50991,
      "guardian": 101995,
      "crusader": 107669,
      "archon": 90977,
      "legend": 63513,
      "ancient": 37549,
      "divine": 32421
    },
    "counters": [
      "gyrocopter",
      "vengeful-spirit",
      "tidehunter",
      "ursa",
      "lion",
      "lich"
    ],
    "weakAgainst": [
      "ember-spirit",
      "razor",
      "necrophos",
      "lifestealer",
      "snapfire",
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
      "Staff of Wizardry",
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
      "herald": 0.559,
      "guardian": 0.557,
      "crusader": 0.552,
      "archon": 0.546,
      "legend": 0.541,
      "ancient": 0.534,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 36910,
      "guardian": 73792,
      "crusader": 77434,
      "archon": 65767,
      "legend": 45887,
      "ancient": 26723,
      "divine": 20965
    },
    "counters": [
      "shadow-demon",
      "zeus",
      "tiny",
      "silencer",
      "abaddon",
      "shadow-shaman"
    ],
    "weakAgainst": [
      "earthshaker",
      "tusk",
      "pudge",
      "grimstroke",
      "necrophos",
      "lich"
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
      "herald": 0.518,
      "guardian": 0.518,
      "crusader": 0.517,
      "archon": 0.515,
      "legend": 0.513,
      "ancient": 0.513,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 53209,
      "guardian": 106781,
      "crusader": 121439,
      "archon": 115440,
      "legend": 90626,
      "ancient": 61494,
      "divine": 67812
    },
    "counters": [
      "mirana",
      "shadow-demon",
      "slardar",
      "medusa",
      "kunkka",
      "undying"
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
      "Circlet",
      "Mantle of Intelligence"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Ogre Axe",
      "Point Booster",
      "Arcane Boots",
      "Kaya"
    ]
  }
];

export const HERO_DATA_BY_ID: Record<string, HeroData> = Object.fromEntries(
  HERO_DATA.map((h) => [h.id, h]),
);
