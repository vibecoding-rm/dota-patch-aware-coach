// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-08-03
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
      "herald": 0.5,
      "guardian": 0.515,
      "crusader": 0.508,
      "archon": 0.514,
      "legend": 0.513,
      "ancient": 0.515,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 6783,
      "guardian": 19792,
      "crusader": 28790,
      "archon": 33701,
      "legend": 29093,
      "ancient": 18092,
      "divine": 13195
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
      "kunkka",
      "keeper-of-the-light",
      "underlord",
      "marci",
      "faceless-void",
      "wraith-king"
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.485,
      "crusader": 0.476,
      "archon": 0.474,
      "legend": 0.465,
      "ancient": 0.461,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 5914,
      "guardian": 18423,
      "crusader": 27909,
      "archon": 31487,
      "legend": 26133,
      "ancient": 15894,
      "divine": 11646
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
      "herald": 0.511,
      "guardian": 0.524,
      "crusader": 0.524,
      "archon": 0.52,
      "legend": 0.519,
      "ancient": 0.508,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 9818,
      "guardian": 31318,
      "crusader": 49122,
      "archon": 57877,
      "legend": 49229,
      "ancient": 29761,
      "divine": 21790
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
      "herald": 0.497,
      "guardian": 0.499,
      "crusader": 0.498,
      "archon": 0.497,
      "legend": 0.498,
      "ancient": 0.495,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 20604,
      "guardian": 65134,
      "crusader": 94629,
      "archon": 101315,
      "legend": 78052,
      "ancient": 43869,
      "divine": 31133
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.505,
      "crusader": 0.505,
      "archon": 0.516,
      "legend": 0.521,
      "ancient": 0.531,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 6126,
      "guardian": 19203,
      "crusader": 27511,
      "archon": 29412,
      "legend": 23169,
      "ancient": 13762,
      "divine": 11538
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.521,
      "crusader": 0.517,
      "archon": 0.509,
      "legend": 0.504,
      "ancient": 0.502,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 24720,
      "guardian": 84316,
      "crusader": 130227,
      "archon": 154927,
      "legend": 133998,
      "ancient": 83757,
      "divine": 68929
    },
    "counters": [
      "death-prophet",
      "terrorblade",
      "winter-wyvern",
      "morphling",
      "techies",
      "pangolier"
    ],
    "weakAgainst": [
      "bane",
      "lycan",
      "chen",
      "monkey-king",
      "abaddon",
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.486,
      "crusader": 0.487,
      "archon": 0.492,
      "legend": 0.509,
      "ancient": 0.512,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 5688,
      "guardian": 17904,
      "crusader": 25944,
      "archon": 29218,
      "legend": 26100,
      "ancient": 17906,
      "divine": 20684
    },
    "counters": [
      "axe",
      "earthshaker",
      "techies",
      "templar-assassin",
      "tiny",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "monkey-king",
      "primal-beast",
      "skywrath-mage",
      "mars",
      "lich",
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
    "overallWin": 0.433,
    "winByBracket": {
      "herald": 0.428,
      "guardian": 0.421,
      "crusader": 0.433,
      "archon": 0.433,
      "legend": 0.422,
      "ancient": 0.44,
      "divine": 0.455
    },
    "pickByBracket": {
      "herald": 2039,
      "guardian": 6173,
      "crusader": 9126,
      "archon": 9811,
      "legend": 8109,
      "ancient": 5325,
      "divine": 5410
    },
    "counters": [
      "crystal-maiden",
      "bristleback",
      "beastmaster",
      "pudge",
      "grimstroke",
      "weaver"
    ],
    "weakAgainst": [
      "oracle",
      "monkey-king",
      "bane",
      "ember-spirit",
      "chen",
      "templar-assassin"
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
    "overallWin": 0.446,
    "winByBracket": {
      "herald": 0.443,
      "guardian": 0.441,
      "crusader": 0.439,
      "archon": 0.439,
      "legend": 0.442,
      "ancient": 0.455,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 4881,
      "guardian": 14178,
      "crusader": 20975,
      "archon": 22528,
      "legend": 18235,
      "ancient": 11598,
      "divine": 12457
    },
    "counters": [
      "shadow-shaman",
      "vengeful-spirit",
      "zeus",
      "morphling",
      "lycan",
      "clockwerk"
    ],
    "weakAgainst": [
      "dazzle",
      "batrider",
      "slark",
      "juggernaut",
      "grimstroke",
      "pugna"
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
      "Blink Dagger",
      "Ogre Axe",
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
      "herald": 0.509,
      "guardian": 0.518,
      "crusader": 0.518,
      "archon": 0.526,
      "legend": 0.521,
      "ancient": 0.522,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 12965,
      "guardian": 29329,
      "crusader": 31894,
      "archon": 28229,
      "legend": 19886,
      "ancient": 10781,
      "divine": 6992
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
      "herald": 0.492,
      "guardian": 0.491,
      "crusader": 0.508,
      "archon": 0.512,
      "legend": 0.524,
      "ancient": 0.534,
      "divine": 0.552
    },
    "pickByBracket": {
      "herald": 8782,
      "guardian": 23824,
      "crusader": 31955,
      "archon": 34846,
      "legend": 29761,
      "ancient": 20395,
      "divine": 21740
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.478,
      "crusader": 0.501,
      "archon": 0.5,
      "legend": 0.519,
      "ancient": 0.526,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 2258,
      "guardian": 6567,
      "crusader": 9308,
      "archon": 11333,
      "legend": 10646,
      "ancient": 8072,
      "divine": 9509
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
      "herald": 0.534,
      "guardian": 0.515,
      "crusader": 0.493,
      "archon": 0.478,
      "legend": 0.469,
      "ancient": 0.466,
      "divine": 0.452
    },
    "pickByBracket": {
      "herald": 20646,
      "guardian": 56861,
      "crusader": 67069,
      "archon": 62180,
      "legend": 42620,
      "ancient": 22172,
      "divine": 15388
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
      "kunkka",
      "chen",
      "batrider"
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.5,
      "crusader": 0.498,
      "archon": 0.504,
      "legend": 0.509,
      "ancient": 0.513,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 5724,
      "guardian": 13825,
      "crusader": 16443,
      "archon": 14810,
      "legend": 10653,
      "ancient": 5970,
      "divine": 5471
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.525,
      "guardian": 0.515,
      "crusader": 0.51,
      "archon": 0.511,
      "legend": 0.504,
      "ancient": 0.504,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 7723,
      "guardian": 28876,
      "crusader": 51103,
      "archon": 67839,
      "legend": 63436,
      "ancient": 41483,
      "divine": 36986
    },
    "counters": [
      "medusa",
      "weaver",
      "terrorblade",
      "silencer",
      "techies",
      "morphling"
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.519,
      "crusader": 0.516,
      "archon": 0.511,
      "legend": 0.503,
      "ancient": 0.506,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 10939,
      "guardian": 29753,
      "crusader": 36693,
      "archon": 35751,
      "legend": 25758,
      "ancient": 14240,
      "divine": 9802
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
    "overallWin": 0.449,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.434,
      "crusader": 0.421,
      "archon": 0.448,
      "legend": 0.436,
      "ancient": 0.458,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 927,
      "guardian": 2260,
      "crusader": 3044,
      "archon": 3368,
      "legend": 2701,
      "ancient": 1723,
      "divine": 2040
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.493,
      "crusader": 0.489,
      "archon": 0.496,
      "legend": 0.5,
      "ancient": 0.509,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 12696,
      "guardian": 30837,
      "crusader": 35716,
      "archon": 36026,
      "legend": 28501,
      "ancient": 18263,
      "divine": 17707
    },
    "counters": [
      "ancient-apparition",
      "skywrath-mage",
      "snapfire",
      "dragon-knight",
      "ember-spirit",
      "clockwerk"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "pudge",
      "slardar",
      "templar-assassin",
      "hoodwink",
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.471,
      "crusader": 0.481,
      "archon": 0.478,
      "legend": 0.48,
      "ancient": 0.491,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 3835,
      "guardian": 13094,
      "crusader": 21142,
      "archon": 27258,
      "legend": 26595,
      "ancient": 19625,
      "divine": 22524
    },
    "counters": [
      "vengeful-spirit",
      "tidehunter",
      "luna",
      "silencer",
      "witch-doctor",
      "pugna"
    ],
    "weakAgainst": [
      "venomancer",
      "beastmaster",
      "monkey-king",
      "clinkz",
      "leshrac",
      "abaddon"
    ],
    "startItems": [
      "Tango",
      "Iron Branch",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Smoke of Deceit",
      "Boots of Speed"
    ],
    "coreItems": [
      "Blink Dagger",
      "Essence Distiller",
      "Staff of Wizardry",
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.538,
      "guardian": 0.528,
      "crusader": 0.521,
      "archon": 0.513,
      "legend": 0.507,
      "ancient": 0.505,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 23021,
      "guardian": 69645,
      "crusader": 95456,
      "archon": 104609,
      "legend": 84979,
      "ancient": 52140,
      "divine": 39981
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
      "mirana",
      "kunkka",
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.488,
      "crusader": 0.482,
      "archon": 0.485,
      "legend": 0.483,
      "ancient": 0.489,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 3959,
      "guardian": 12329,
      "crusader": 18609,
      "archon": 21738,
      "legend": 20551,
      "ancient": 15041,
      "divine": 17794
    },
    "counters": [
      "puck",
      "queen-of-pain",
      "jakiro",
      "terrorblade",
      "disruptor",
      "tusk"
    ],
    "weakAgainst": [
      "phoenix",
      "ember-spirit",
      "sven",
      "templar-assassin",
      "tiny",
      "storm-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Clarity",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Platemail",
      "Arcane Boots",
      "Aghanim's Shard",
      "Blink Dagger",
      "Shiva's Guard"
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.472,
      "guardian": 0.477,
      "crusader": 0.473,
      "archon": 0.479,
      "legend": 0.484,
      "ancient": 0.492,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 8429,
      "guardian": 23243,
      "crusader": 32216,
      "archon": 37785,
      "legend": 33373,
      "ancient": 22674,
      "divine": 24129
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
      "herald": 0.513,
      "guardian": 0.517,
      "crusader": 0.522,
      "archon": 0.518,
      "legend": 0.521,
      "ancient": 0.519,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 8180,
      "guardian": 27990,
      "crusader": 48643,
      "archon": 66948,
      "legend": 67854,
      "ancient": 48541,
      "divine": 48841
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.489,
      "crusader": 0.505,
      "archon": 0.511,
      "legend": 0.513,
      "ancient": 0.514,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 7708,
      "guardian": 25273,
      "crusader": 37275,
      "archon": 39702,
      "legend": 30631,
      "ancient": 17778,
      "divine": 13200
    },
    "counters": [
      "skywrath-mage",
      "underlord",
      "beastmaster",
      "marci",
      "dark-willow",
      "ring-master"
    ],
    "weakAgainst": [
      "slardar",
      "shadow-demon",
      "void-spirit",
      "centaur-warrunner",
      "weaver",
      "ember-spirit"
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.479,
      "crusader": 0.474,
      "archon": 0.478,
      "legend": 0.484,
      "ancient": 0.479,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 9296,
      "guardian": 21223,
      "crusader": 26803,
      "archon": 29795,
      "legend": 24945,
      "ancient": 16189,
      "divine": 15265
    },
    "counters": [
      "shadow-shaman",
      "slardar",
      "ogre-magi",
      "dragon-knight",
      "zeus"
    ],
    "weakAgainst": [
      "sniper",
      "snapfire",
      "hoodwink",
      "spirit-breaker",
      "marci",
      "axe"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.491,
      "crusader": 0.495,
      "archon": 0.498,
      "legend": 0.499,
      "ancient": 0.502,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 6719,
      "guardian": 25848,
      "crusader": 45091,
      "archon": 61187,
      "legend": 58983,
      "ancient": 41031,
      "divine": 37642
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
    "overallWin": 0.466,
    "winByBracket": {
      "herald": 0.438,
      "guardian": 0.444,
      "crusader": 0.456,
      "archon": 0.459,
      "legend": 0.47,
      "ancient": 0.479,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 6362,
      "guardian": 19799,
      "crusader": 30870,
      "archon": 39992,
      "legend": 38417,
      "ancient": 27553,
      "divine": 29060
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.497,
      "crusader": 0.501,
      "archon": 0.496,
      "legend": 0.493,
      "ancient": 0.494,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 7977,
      "guardian": 22704,
      "crusader": 30401,
      "archon": 31319,
      "legend": 22708,
      "ancient": 12441,
      "divine": 7457
    },
    "counters": [
      "drow-ranger",
      "morphling",
      "troll-warlord",
      "naga-siren",
      "pangolier",
      "legion-commander"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "venomancer",
      "keeper-of-the-light",
      "treant-protector",
      "clinkz",
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.486,
      "crusader": 0.485,
      "archon": 0.487,
      "legend": 0.484,
      "ancient": 0.483,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 25812,
      "guardian": 75333,
      "crusader": 107773,
      "archon": 123212,
      "legend": 104687,
      "ancient": 66158,
      "divine": 54847
    },
    "counters": [
      "underlord",
      "kez",
      "bristleback",
      "disruptor",
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.477,
      "crusader": 0.484,
      "archon": 0.494,
      "legend": 0.499,
      "ancient": 0.509,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 3322,
      "guardian": 12652,
      "crusader": 24264,
      "archon": 35539,
      "legend": 39379,
      "ancient": 31769,
      "divine": 37486
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.496,
      "crusader": 0.5,
      "archon": 0.502,
      "legend": 0.508,
      "ancient": 0.509,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 21819,
      "guardian": 65391,
      "crusader": 96532,
      "archon": 113489,
      "legend": 100622,
      "ancient": 64823,
      "divine": 52580
    },
    "counters": [
      "sven",
      "primal-beast",
      "wraith-king",
      "sniper",
      "faceless-void",
      "undying"
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
      "Gauntlets of Strength",
      "Observer and Sentry Wards"
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
      "herald": 0.496,
      "guardian": 0.491,
      "crusader": 0.493,
      "archon": 0.506,
      "legend": 0.522,
      "ancient": 0.532,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 1938,
      "guardian": 5468,
      "crusader": 7162,
      "archon": 7782,
      "legend": 6364,
      "ancient": 4213,
      "divine": 4734
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.46,
      "guardian": 0.465,
      "crusader": 0.481,
      "archon": 0.491,
      "legend": 0.5,
      "ancient": 0.504,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 5913,
      "guardian": 19224,
      "crusader": 32615,
      "archon": 45489,
      "legend": 48061,
      "ancient": 36351,
      "divine": 42178
    },
    "counters": [
      "witch-doctor",
      "dark-seer",
      "venomancer",
      "void-spirit",
      "anti-mage",
      "winter-wyvern"
    ],
    "weakAgainst": [
      "bane",
      "clinkz",
      "io",
      "treant-protector",
      "alchemist",
      "lone-druid"
    ],
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
    "overallWin": 0.479,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.488,
      "crusader": 0.476,
      "archon": 0.477,
      "legend": 0.474,
      "ancient": 0.482,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 7252,
      "guardian": 16293,
      "crusader": 17493,
      "archon": 16308,
      "legend": 12596,
      "ancient": 8006,
      "divine": 8049
    },
    "counters": [
      "earthshaker",
      "ursa",
      "lifestealer",
      "void-spirit",
      "disruptor",
      "clockwerk"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "slardar",
      "marci",
      "juggernaut",
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.495,
      "crusader": 0.492,
      "archon": 0.504,
      "legend": 0.507,
      "ancient": 0.528,
      "divine": 0.559
    },
    "pickByBracket": {
      "herald": 6680,
      "guardian": 19675,
      "crusader": 26814,
      "archon": 27263,
      "legend": 21104,
      "ancient": 13143,
      "divine": 12911
    },
    "counters": [],
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.49,
      "crusader": 0.488,
      "archon": 0.491,
      "legend": 0.494,
      "ancient": 0.495,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 14672,
      "guardian": 47027,
      "crusader": 69593,
      "archon": 79926,
      "legend": 67437,
      "ancient": 41893,
      "divine": 35073
    },
    "counters": [
      "templar-assassin",
      "dawnbreaker",
      "primal-beast",
      "dragon-knight",
      "storm-spirit",
      "terrorblade"
    ],
    "weakAgainst": [
      "tidehunter",
      "sniper",
      "juggernaut",
      "muerta",
      "magnus",
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
      "herald": 0.52,
      "guardian": 0.512,
      "crusader": 0.516,
      "archon": 0.514,
      "legend": 0.513,
      "ancient": 0.522,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 6641,
      "guardian": 23894,
      "crusader": 40191,
      "archon": 50855,
      "legend": 47348,
      "ancient": 32732,
      "divine": 30187
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
    "overallWin": 0.44,
    "winByBracket": {
      "herald": 0.428,
      "guardian": 0.433,
      "crusader": 0.437,
      "archon": 0.443,
      "legend": 0.444,
      "ancient": 0.441,
      "divine": 0.441
    },
    "pickByBracket": {
      "herald": 4438,
      "guardian": 13036,
      "crusader": 19916,
      "archon": 24434,
      "legend": 21694,
      "ancient": 13311,
      "divine": 10283
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.472,
      "crusader": 0.48,
      "archon": 0.479,
      "legend": 0.476,
      "ancient": 0.481,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 13945,
      "guardian": 42875,
      "crusader": 63247,
      "archon": 75334,
      "legend": 66418,
      "ancient": 43676,
      "divine": 43372
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
      "herald": 0.456,
      "guardian": 0.438,
      "crusader": 0.442,
      "archon": 0.448,
      "legend": 0.454,
      "ancient": 0.46,
      "divine": 0.451
    },
    "pickByBracket": {
      "herald": 11774,
      "guardian": 24749,
      "crusader": 27442,
      "archon": 26420,
      "legend": 20792,
      "ancient": 13021,
      "divine": 10887
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.499,
      "crusader": 0.503,
      "archon": 0.504,
      "legend": 0.511,
      "ancient": 0.517,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 19109,
      "guardian": 67758,
      "crusader": 115097,
      "archon": 147648,
      "legend": 138612,
      "ancient": 93063,
      "divine": 85007
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.503,
      "crusader": 0.506,
      "archon": 0.506,
      "legend": 0.515,
      "ancient": 0.513,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 6693,
      "guardian": 20567,
      "crusader": 31083,
      "archon": 35185,
      "legend": 29826,
      "ancient": 19455,
      "divine": 19935
    },
    "counters": [
      "disruptor",
      "jakiro",
      "ember-spirit",
      "snapfire",
      "hoodwink",
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.491,
      "crusader": 0.486,
      "archon": 0.477,
      "legend": 0.471,
      "ancient": 0.464,
      "divine": 0.457
    },
    "pickByBracket": {
      "herald": 15087,
      "guardian": 47944,
      "crusader": 71854,
      "archon": 83898,
      "legend": 69521,
      "ancient": 40206,
      "divine": 28418
    },
    "counters": [
      "chaos-knight",
      "weaver",
      "broodmother",
      "oracle",
      "tinker",
      "anti-mage"
    ],
    "weakAgainst": [
      "treant-protector",
      "lone-druid",
      "io",
      "enigma",
      "clinkz",
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
      "herald": 0.513,
      "guardian": 0.514,
      "crusader": 0.516,
      "archon": 0.516,
      "legend": 0.522,
      "ancient": 0.522,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 24556,
      "guardian": 76151,
      "crusader": 112893,
      "archon": 132388,
      "legend": 113974,
      "ancient": 68041,
      "divine": 49802
    },
    "counters": [
      "zeus",
      "magnus",
      "pangolier",
      "faceless-void",
      "beastmaster",
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.489,
      "crusader": 0.493,
      "archon": 0.499,
      "legend": 0.51,
      "ancient": 0.517,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 10701,
      "guardian": 32948,
      "crusader": 46695,
      "archon": 51892,
      "legend": 45626,
      "ancient": 30852,
      "divine": 33265
    },
    "counters": [
      "warlock",
      "phoenix",
      "lina",
      "kez",
      "queen-of-pain",
      "abaddon"
    ],
    "weakAgainst": [
      "treant-protector",
      "batrider",
      "monkey-king",
      "pudge",
      "slardar",
      "bane"
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
    "overallWin": 0.44,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.446,
      "crusader": 0.444,
      "archon": 0.439,
      "legend": 0.432,
      "ancient": 0.442,
      "divine": 0.436
    },
    "pickByBracket": {
      "herald": 6847,
      "guardian": 19310,
      "crusader": 28229,
      "archon": 34011,
      "legend": 30962,
      "ancient": 21458,
      "divine": 22579
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.487,
      "crusader": 0.485,
      "archon": 0.49,
      "legend": 0.499,
      "ancient": 0.496,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 7518,
      "guardian": 21152,
      "crusader": 30806,
      "archon": 37992,
      "legend": 34976,
      "ancient": 22571,
      "divine": 18542
    },
    "counters": [
      "abaddon",
      "weaver",
      "bristleback",
      "hoodwink",
      "crystal-maiden",
      "tiny"
    ],
    "weakAgainst": [
      "necrophos",
      "templar-assassin",
      "shadow-shaman",
      "storm-spirit",
      "shadow-demon",
      "slardar"
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
      "herald": 0.463,
      "guardian": 0.464,
      "crusader": 0.475,
      "archon": 0.483,
      "legend": 0.478,
      "ancient": 0.485,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 2330,
      "guardian": 6532,
      "crusader": 10516,
      "archon": 13742,
      "legend": 12905,
      "ancient": 9437,
      "divine": 10622
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
    "overallWin": 0.528,
    "winByBracket": {
      "herald": 0.532,
      "guardian": 0.53,
      "crusader": 0.528,
      "archon": 0.531,
      "legend": 0.528,
      "ancient": 0.527,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 20272,
      "guardian": 70185,
      "crusader": 107264,
      "archon": 123133,
      "legend": 100407,
      "ancient": 58135,
      "divine": 41232
    },
    "counters": [
      "luna",
      "timbersaw",
      "bristleback",
      "shadow-shaman",
      "silencer",
      "lina"
    ],
    "weakAgainst": [
      "tusk",
      "abaddon",
      "hoodwink",
      "vengeful-spirit",
      "crystal-maiden",
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.506,
      "crusader": 0.515,
      "archon": 0.514,
      "legend": 0.519,
      "ancient": 0.521,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 3824,
      "guardian": 11487,
      "crusader": 17829,
      "archon": 20859,
      "legend": 18982,
      "ancient": 12173,
      "divine": 11522
    },
    "counters": [
      "silencer",
      "lycan",
      "lina",
      "slark",
      "muerta",
      "clockwerk"
    ],
    "weakAgainst": [
      "magnus",
      "dawnbreaker",
      "dazzle",
      "bane",
      "abaddon",
      "batrider"
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.527,
      "crusader": 0.528,
      "archon": 0.528,
      "legend": 0.527,
      "ancient": 0.523,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 13554,
      "guardian": 42701,
      "crusader": 66653,
      "archon": 83125,
      "legend": 78310,
      "ancient": 52311,
      "divine": 46150
    },
    "counters": [
      "sven",
      "ursa",
      "sand-king",
      "ring-master",
      "wraith-king",
      "winter-wyvern"
    ],
    "weakAgainst": [
      "treant-protector",
      "kez",
      "sniper",
      "monkey-king",
      "keeper-of-the-light",
      "muerta"
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
    "overallWin": 0.527,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.515,
      "crusader": 0.525,
      "archon": 0.527,
      "legend": 0.532,
      "ancient": 0.532,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 11919,
      "guardian": 40959,
      "crusader": 69060,
      "archon": 89312,
      "legend": 84656,
      "ancient": 55756,
      "divine": 47079
    },
    "counters": [
      "witch-doctor",
      "night-stalker",
      "dark-willow",
      "muerta",
      "phantom-assassin",
      "vengeful-spirit"
    ],
    "weakAgainst": [
      "morphling",
      "alchemist",
      "doom",
      "kez",
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.48,
      "crusader": 0.488,
      "archon": 0.495,
      "legend": 0.499,
      "ancient": 0.499,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 26309,
      "guardian": 75242,
      "crusader": 111468,
      "archon": 137343,
      "legend": 123646,
      "ancient": 80705,
      "divine": 72183
    },
    "counters": [
      "underlord",
      "abaddon",
      "phoenix",
      "spirit-breaker",
      "luna",
      "sniper"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "pangolier",
      "leshrac",
      "invoker",
      "monkey-king",
      "timbersaw"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Observer Ward",
      "Magic Stick",
      "Circlet"
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.489,
      "crusader": 0.489,
      "archon": 0.485,
      "legend": 0.486,
      "ancient": 0.487,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 33045,
      "guardian": 110917,
      "crusader": 173611,
      "archon": 208233,
      "legend": 181799,
      "ancient": 113340,
      "divine": 89579
    },
    "counters": [
      "sven",
      "grimstroke",
      "troll-warlord",
      "razor",
      "dark-willow",
      "io"
    ],
    "weakAgainst": [
      "treant-protector",
      "lycan",
      "undying",
      "monkey-king",
      "earth-spirit",
      "wraith-king"
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.478,
      "crusader": 0.486,
      "archon": 0.475,
      "legend": 0.489,
      "ancient": 0.488,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 2847,
      "guardian": 8961,
      "crusader": 13749,
      "archon": 16049,
      "legend": 14177,
      "ancient": 9195,
      "divine": 9821
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.509,
      "crusader": 0.507,
      "archon": 0.501,
      "legend": 0.497,
      "ancient": 0.492,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 14720,
      "guardian": 44553,
      "crusader": 66892,
      "archon": 80131,
      "legend": 74239,
      "ancient": 51670,
      "divine": 50882
    },
    "counters": [
      "morphling",
      "sand-king",
      "phantom-assassin",
      "mars",
      "earthshaker",
      "sniper"
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.473,
      "crusader": 0.468,
      "archon": 0.474,
      "legend": 0.499,
      "ancient": 0.497,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 2326,
      "guardian": 6943,
      "crusader": 9555,
      "archon": 10649,
      "legend": 9504,
      "ancient": 6695,
      "divine": 7856
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.465,
      "guardian": 0.47,
      "crusader": 0.476,
      "archon": 0.484,
      "legend": 0.49,
      "ancient": 0.492,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 7173,
      "guardian": 30408,
      "crusader": 62033,
      "archon": 90914,
      "legend": 91784,
      "ancient": 63510,
      "divine": 52277
    },
    "counters": [
      "phoenix",
      "void-spirit",
      "faceless-void",
      "leshrac",
      "pudge",
      "bristleback"
    ],
    "weakAgainst": [
      "juggernaut",
      "rubick",
      "beastmaster",
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.491,
      "crusader": 0.493,
      "archon": 0.499,
      "legend": 0.504,
      "ancient": 0.512,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 7285,
      "guardian": 19349,
      "crusader": 25688,
      "archon": 29244,
      "legend": 25279,
      "ancient": 17034,
      "divine": 16793
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
    "overallWin": 0.468,
    "winByBracket": {
      "herald": 0.461,
      "guardian": 0.468,
      "crusader": 0.47,
      "archon": 0.47,
      "legend": 0.469,
      "ancient": 0.468,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 4372,
      "guardian": 14743,
      "crusader": 25420,
      "archon": 35866,
      "legend": 37164,
      "ancient": 27542,
      "divine": 26784
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.507,
      "crusader": 0.497,
      "archon": 0.499,
      "legend": 0.495,
      "ancient": 0.497,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 5800,
      "guardian": 17833,
      "crusader": 25826,
      "archon": 29185,
      "legend": 23992,
      "ancient": 13370,
      "divine": 9239
    },
    "counters": [
      "weaver",
      "undying",
      "templar-assassin",
      "warlock",
      "sand-king",
      "faceless-void"
    ],
    "weakAgainst": [
      "ogre-magi",
      "shadow-demon",
      "centaur-warrunner",
      "shadow-shaman",
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.494,
      "crusader": 0.499,
      "archon": 0.518,
      "legend": 0.525,
      "ancient": 0.522,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 4135,
      "guardian": 10018,
      "crusader": 12678,
      "archon": 12375,
      "legend": 9186,
      "ancient": 5588,
      "divine": 5323
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.514,
      "crusader": 0.511,
      "archon": 0.514,
      "legend": 0.512,
      "ancient": 0.512,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 9660,
      "guardian": 34496,
      "crusader": 56136,
      "archon": 67796,
      "legend": 62036,
      "ancient": 41730,
      "divine": 38014
    },
    "counters": [
      "storm-spirit",
      "crystal-maiden",
      "ogre-magi",
      "queen-of-pain",
      "lion",
      "dragon-knight"
    ],
    "weakAgainst": [
      "zeus",
      "tusk",
      "sniper",
      "tidehunter",
      "jakiro",
      "templar-assassin"
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
    "overallWin": 0.448,
    "winByBracket": {
      "herald": 0.448,
      "guardian": 0.441,
      "crusader": 0.437,
      "archon": 0.446,
      "legend": 0.45,
      "ancient": 0.459,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 9456,
      "guardian": 25482,
      "crusader": 35136,
      "archon": 39472,
      "legend": 34883,
      "ancient": 23555,
      "divine": 20440
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.467,
      "crusader": 0.471,
      "archon": 0.471,
      "legend": 0.475,
      "ancient": 0.471,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 5599,
      "guardian": 17859,
      "crusader": 26229,
      "archon": 30282,
      "legend": 26293,
      "ancient": 17992,
      "divine": 17110
    },
    "counters": [
      "weaver",
      "lifestealer",
      "dawnbreaker",
      "terrorblade",
      "void-spirit",
      "anti-mage"
    ],
    "weakAgainst": [
      "luna",
      "windranger",
      "sniper",
      "pudge",
      "viper",
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.476,
      "crusader": 0.47,
      "archon": 0.471,
      "legend": 0.466,
      "ancient": 0.466,
      "divine": 0.472
    },
    "pickByBracket": {
      "herald": 7246,
      "guardian": 18211,
      "crusader": 24287,
      "archon": 27009,
      "legend": 23823,
      "ancient": 15906,
      "divine": 14356
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.487,
      "crusader": 0.475,
      "archon": 0.475,
      "legend": 0.475,
      "ancient": 0.486,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 6050,
      "guardian": 14616,
      "crusader": 16108,
      "archon": 12755,
      "legend": 8618,
      "ancient": 4723,
      "divine": 3631
    },
    "counters": [
      "pangolier",
      "puck",
      "hoodwink",
      "pudge",
      "nature-s-prophet",
      "tiny"
    ],
    "weakAgainst": [
      "storm-spirit",
      "ember-spirit",
      "dragon-knight",
      "terrorblade",
      "queen-of-pain",
      "sand-king"
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
    "overallWin": 0.431,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.435,
      "crusader": 0.426,
      "archon": 0.425,
      "legend": 0.427,
      "ancient": 0.434,
      "divine": 0.439
    },
    "pickByBracket": {
      "herald": 15292,
      "guardian": 45033,
      "crusader": 60885,
      "archon": 65469,
      "legend": 53154,
      "ancient": 32682,
      "divine": 27633
    },
    "counters": [
      "razor",
      "sniper",
      "huskar",
      "drow-ranger",
      "pangolier",
      "bristleback"
    ],
    "weakAgainst": [
      "naga-siren",
      "nyx-assassin",
      "timbersaw",
      "zeus",
      "juggernaut",
      "clinkz"
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.535,
      "guardian": 0.527,
      "crusader": 0.523,
      "archon": 0.515,
      "legend": 0.511,
      "ancient": 0.504,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 22854,
      "guardian": 75523,
      "crusader": 114387,
      "archon": 135309,
      "legend": 117913,
      "ancient": 73746,
      "divine": 61366
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
      "clockwerk",
      "pangolier",
      "crystal-maiden",
      "keeper-of-the-light",
      "grimstroke"
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
      "Aghanim's Shard",
      "Radiance",
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
      "herald": 0.484,
      "guardian": 0.491,
      "crusader": 0.511,
      "archon": 0.522,
      "legend": 0.526,
      "ancient": 0.532,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 6372,
      "guardian": 21873,
      "crusader": 38296,
      "archon": 54378,
      "legend": 56944,
      "ancient": 40108,
      "divine": 41315
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
      "pugna",
      "oracle",
      "beastmaster",
      "shadow-shaman"
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
      "herald": 0.515,
      "guardian": 0.518,
      "crusader": 0.52,
      "archon": 0.521,
      "legend": 0.52,
      "ancient": 0.52,
      "divine": 0.526
    },
    "pickByBracket": {
      "herald": 7828,
      "guardian": 25610,
      "crusader": 41378,
      "archon": 51533,
      "legend": 47924,
      "ancient": 32334,
      "divine": 28611
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
      "terrorblade",
      "pudge",
      "pangolier",
      "doom",
      "phoenix"
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
      "herald": 0.533,
      "guardian": 0.52,
      "crusader": 0.514,
      "archon": 0.507,
      "legend": 0.503,
      "ancient": 0.5,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 26847,
      "guardian": 89655,
      "crusader": 130656,
      "archon": 143202,
      "legend": 112850,
      "ancient": 63554,
      "divine": 41718
    },
    "counters": [
      "medusa",
      "winter-wyvern",
      "bristleback",
      "primal-beast",
      "phantom-lancer",
      "anti-mage"
    ],
    "weakAgainst": [
      "pugna",
      "phoenix",
      "treant-protector",
      "alchemist",
      "leshrac",
      "mirana"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.49,
      "crusader": 0.495,
      "archon": 0.508,
      "legend": 0.508,
      "ancient": 0.508,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 4725,
      "guardian": 14107,
      "crusader": 19355,
      "archon": 21405,
      "legend": 18432,
      "ancient": 11797,
      "divine": 10031
    },
    "counters": [
      "tiny",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "pudge",
      "windranger",
      "ember-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Observer and Sentry Wards",
      "Magic Stick",
      "Faerie Fire"
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.455,
      "guardian": 0.468,
      "crusader": 0.477,
      "archon": 0.497,
      "legend": 0.502,
      "ancient": 0.509,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 4459,
      "guardian": 15058,
      "crusader": 24626,
      "archon": 31893,
      "legend": 30196,
      "ancient": 21055,
      "divine": 21030
    },
    "counters": [
      "batrider",
      "night-stalker",
      "invoker",
      "puck",
      "tiny",
      "mars"
    ],
    "weakAgainst": [
      "windranger",
      "tusk",
      "jakiro",
      "snapfire",
      "shadow-fiend",
      "pudge"
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.493,
      "crusader": 0.51,
      "archon": 0.517,
      "legend": 0.531,
      "ancient": 0.527,
      "divine": 0.526
    },
    "pickByBracket": {
      "herald": 6420,
      "guardian": 19333,
      "crusader": 29974,
      "archon": 38520,
      "legend": 35152,
      "ancient": 22100,
      "divine": 17669
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
    "overallWin": 0.459,
    "winByBracket": {
      "herald": 0.441,
      "guardian": 0.444,
      "crusader": 0.45,
      "archon": 0.46,
      "legend": 0.46,
      "ancient": 0.467,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 2876,
      "guardian": 9175,
      "crusader": 15023,
      "archon": 20631,
      "legend": 22148,
      "ancient": 17641,
      "divine": 20815
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.517,
      "crusader": 0.514,
      "archon": 0.509,
      "legend": 0.5,
      "ancient": 0.502,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 30901,
      "guardian": 88625,
      "crusader": 114704,
      "archon": 115532,
      "legend": 84702,
      "ancient": 46268,
      "divine": 29692
    },
    "counters": [
      "ogre-magi",
      "dragon-knight",
      "lion"
    ],
    "weakAgainst": [
      "pudge",
      "rubick",
      "lifestealer",
      "luna",
      "disruptor",
      "queen-of-pain"
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
      "herald": 0.522,
      "guardian": 0.52,
      "crusader": 0.522,
      "archon": 0.527,
      "legend": 0.529,
      "ancient": 0.532,
      "divine": 0.532
    },
    "pickByBracket": {
      "herald": 17989,
      "guardian": 54463,
      "crusader": 75154,
      "archon": 81010,
      "legend": 64818,
      "ancient": 40093,
      "divine": 38036
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
      "rubick",
      "snapfire"
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.507,
      "crusader": 0.511,
      "archon": 0.508,
      "legend": 0.513,
      "ancient": 0.507,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 4741,
      "guardian": 17520,
      "crusader": 31093,
      "archon": 41311,
      "legend": 39981,
      "ancient": 27710,
      "divine": 29751
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.476,
      "crusader": 0.483,
      "archon": 0.481,
      "legend": 0.485,
      "ancient": 0.492,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 4538,
      "guardian": 14211,
      "crusader": 20288,
      "archon": 22947,
      "legend": 19680,
      "ancient": 13459,
      "divine": 14644
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
    "overallWin": 0.468,
    "winByBracket": {
      "herald": 0.441,
      "guardian": 0.449,
      "crusader": 0.457,
      "archon": 0.458,
      "legend": 0.472,
      "ancient": 0.481,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 4246,
      "guardian": 13167,
      "crusader": 20956,
      "archon": 27960,
      "legend": 28188,
      "ancient": 20236,
      "divine": 23974
    },
    "counters": [
      "weaver",
      "razor",
      "dark-willow",
      "crystal-maiden",
      "sven",
      "silencer"
    ],
    "weakAgainst": [
      "naga-siren",
      "nyx-assassin",
      "dark-seer",
      "morphling",
      "oracle",
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
      "herald": 0.519,
      "guardian": 0.522,
      "crusader": 0.516,
      "archon": 0.516,
      "legend": 0.511,
      "ancient": 0.512,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 34500,
      "guardian": 123160,
      "crusader": 196457,
      "archon": 226540,
      "legend": 187560,
      "ancient": 117269,
      "divine": 105388
    },
    "counters": [
      "io",
      "clinkz",
      "phantom-assassin",
      "wraith-king",
      "morphling",
      "warlock"
    ],
    "weakAgainst": [
      "largo",
      "lycan",
      "batrider",
      "naga-siren",
      "slark",
      "earth-spirit"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.488,
      "crusader": 0.496,
      "archon": 0.498,
      "legend": 0.507,
      "ancient": 0.515,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 7137,
      "guardian": 20318,
      "crusader": 28451,
      "archon": 31355,
      "legend": 27236,
      "ancient": 17282,
      "divine": 13728
    },
    "counters": [
      "ogre-magi",
      "dark-willow",
      "night-stalker",
      "tusk",
      "beastmaster",
      "muerta"
    ],
    "weakAgainst": [
      "terrorblade",
      "bristleback",
      "crystal-maiden",
      "clockwerk",
      "marci",
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
    "overallWin": 0.468,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.468,
      "crusader": 0.469,
      "archon": 0.468,
      "legend": 0.466,
      "ancient": 0.468,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 12556,
      "guardian": 41437,
      "crusader": 67326,
      "archon": 86654,
      "legend": 77773,
      "ancient": 50568,
      "divine": 43119
    },
    "counters": [
      "phantom-lancer",
      "drow-ranger",
      "chaos-knight",
      "timbersaw",
      "phantom-assassin",
      "sand-king"
    ],
    "weakAgainst": [
      "largo",
      "keeper-of-the-light",
      "treant-protector",
      "chen",
      "bounty-hunter",
      "earth-spirit"
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.502,
      "crusader": 0.501,
      "archon": 0.506,
      "legend": 0.504,
      "ancient": 0.503,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 12459,
      "guardian": 31307,
      "crusader": 40632,
      "archon": 45114,
      "legend": 38165,
      "ancient": 23581,
      "divine": 17702
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
      "nature-s-prophet",
      "phoenix",
      "huskar",
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.518,
      "crusader": 0.527,
      "archon": 0.524,
      "legend": 0.526,
      "ancient": 0.533,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 12565,
      "guardian": 32495,
      "crusader": 42410,
      "archon": 43602,
      "legend": 33726,
      "ancient": 20117,
      "divine": 14396
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.471,
      "crusader": 0.476,
      "archon": 0.478,
      "legend": 0.483,
      "ancient": 0.485,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 4415,
      "guardian": 16299,
      "crusader": 27606,
      "archon": 37730,
      "legend": 38288,
      "ancient": 28526,
      "divine": 32031
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.487,
      "crusader": 0.486,
      "archon": 0.494,
      "legend": 0.496,
      "ancient": 0.496,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 14878,
      "guardian": 55351,
      "crusader": 101585,
      "archon": 142904,
      "legend": 146786,
      "ancient": 103208,
      "divine": 94370
    },
    "counters": [
      "phantom-assassin",
      "phantom-lancer",
      "weaver",
      "brewmaster",
      "magnus",
      "sven"
    ],
    "weakAgainst": [
      "earth-spirit",
      "lone-druid",
      "broodmother",
      "leshrac",
      "abaddon",
      "bane"
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.505,
      "crusader": 0.496,
      "archon": 0.485,
      "legend": 0.481,
      "ancient": 0.469,
      "divine": 0.466
    },
    "pickByBracket": {
      "herald": 8242,
      "guardian": 23567,
      "crusader": 32019,
      "archon": 33751,
      "legend": 27544,
      "ancient": 16922,
      "divine": 12502
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
      "luna",
      "abaddon",
      "pudge"
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
      "herald": 0.416,
      "guardian": 0.431,
      "crusader": 0.442,
      "archon": 0.449,
      "legend": 0.445,
      "ancient": 0.45,
      "divine": 0.451
    },
    "pickByBracket": {
      "herald": 2891,
      "guardian": 8791,
      "crusader": 13449,
      "archon": 16588,
      "legend": 15795,
      "ancient": 11102,
      "divine": 10853
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.489,
      "crusader": 0.487,
      "archon": 0.482,
      "legend": 0.478,
      "ancient": 0.476,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 24620,
      "guardian": 76402,
      "crusader": 115975,
      "archon": 136827,
      "legend": 119677,
      "ancient": 78635,
      "divine": 75226
    },
    "counters": [
      "night-stalker",
      "morphling",
      "undying",
      "medusa",
      "legion-commander",
      "outworld-devourer"
    ],
    "weakAgainst": [
      "enigma",
      "lone-druid",
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
      "Magic Stick",
      "Quelling Blade"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.518,
      "crusader": 0.518,
      "archon": 0.52,
      "legend": 0.521,
      "ancient": 0.516,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 26068,
      "guardian": 80265,
      "crusader": 114235,
      "archon": 127845,
      "legend": 102814,
      "ancient": 61070,
      "divine": 45562
    },
    "counters": [
      "medusa",
      "grimstroke",
      "morphling",
      "bristleback",
      "kunkka",
      "magnus"
    ],
    "weakAgainst": [
      "death-prophet",
      "beastmaster",
      "wraith-king",
      "hoodwink",
      "undying",
      "treant-protector"
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
    "overallWin": 0.509,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.523,
      "crusader": 0.512,
      "archon": 0.508,
      "legend": 0.504,
      "ancient": 0.501,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 14822,
      "guardian": 52665,
      "crusader": 81613,
      "archon": 95613,
      "legend": 81030,
      "ancient": 49472,
      "divine": 36913
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.503,
      "crusader": 0.503,
      "archon": 0.501,
      "legend": 0.498,
      "ancient": 0.492,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 19788,
      "guardian": 61173,
      "crusader": 89767,
      "archon": 100639,
      "legend": 84542,
      "ancient": 52243,
      "divine": 42999
    },
    "counters": [
      "death-prophet",
      "witch-doctor",
      "ancient-apparition",
      "dragon-knight",
      "faceless-void",
      "phantom-lancer"
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
      "Vitality Booster",
      "Arcane Boots",
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.507,
      "crusader": 0.505,
      "archon": 0.504,
      "legend": 0.498,
      "ancient": 0.497,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 12230,
      "guardian": 37947,
      "crusader": 54450,
      "archon": 61389,
      "legend": 52999,
      "ancient": 33229,
      "divine": 28341
    },
    "counters": [
      "lifestealer",
      "drow-ranger",
      "grimstroke",
      "weaver",
      "viper",
      "sand-king"
    ],
    "weakAgainst": [
      "marci",
      "vengeful-spirit",
      "naga-siren",
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.505,
      "crusader": 0.493,
      "archon": 0.492,
      "legend": 0.493,
      "ancient": 0.497,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 12685,
      "guardian": 43319,
      "crusader": 68027,
      "archon": 82934,
      "legend": 73813,
      "ancient": 46877,
      "divine": 37495
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
      "windranger",
      "lion"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Faerie Fire",
      "Magic Stick",
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.509,
      "crusader": 0.519,
      "archon": 0.52,
      "legend": 0.516,
      "ancient": 0.516,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 15593,
      "guardian": 56054,
      "crusader": 100390,
      "archon": 139675,
      "legend": 137789,
      "ancient": 95173,
      "divine": 88250
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.512,
      "crusader": 0.505,
      "archon": 0.504,
      "legend": 0.497,
      "ancient": 0.491,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 37180,
      "guardian": 110454,
      "crusader": 157515,
      "archon": 172098,
      "legend": 134248,
      "ancient": 72914,
      "divine": 44354
    },
    "counters": [
      "death-prophet",
      "weaver",
      "witch-doctor",
      "morphling",
      "lich",
      "faceless-void"
    ],
    "weakAgainst": [
      "nature-s-prophet",
      "earthshaker",
      "ember-spirit",
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
    "overallWin": 0.543,
    "winByBracket": {
      "herald": 0.558,
      "guardian": 0.552,
      "crusader": 0.541,
      "archon": 0.541,
      "legend": 0.541,
      "ancient": 0.542,
      "divine": 0.539
    },
    "pickByBracket": {
      "herald": 17196,
      "guardian": 59773,
      "crusader": 90456,
      "archon": 105262,
      "legend": 90199,
      "ancient": 56741,
      "divine": 49368
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
      "herald": 0.516,
      "guardian": 0.519,
      "crusader": 0.517,
      "archon": 0.519,
      "legend": 0.519,
      "ancient": 0.516,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 23220,
      "guardian": 71435,
      "crusader": 102459,
      "archon": 118528,
      "legend": 103089,
      "ancient": 64357,
      "divine": 53142
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
    "overallWin": 0.465,
    "winByBracket": {
      "herald": 0.461,
      "guardian": 0.465,
      "crusader": 0.461,
      "archon": 0.459,
      "legend": 0.467,
      "ancient": 0.471,
      "divine": 0.474
    },
    "pickByBracket": {
      "herald": 9751,
      "guardian": 28943,
      "crusader": 43404,
      "archon": 52122,
      "legend": 47949,
      "ancient": 33167,
      "divine": 31123
    },
    "counters": [
      "naga-siren",
      "sven",
      "medusa",
      "templar-assassin",
      "alchemist",
      "techies"
    ],
    "weakAgainst": [
      "mirana",
      "treant-protector",
      "huskar",
      "chen",
      "lycan",
      "venomancer"
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.504,
      "crusader": 0.507,
      "archon": 0.507,
      "legend": 0.505,
      "ancient": 0.511,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 12898,
      "guardian": 36131,
      "crusader": 49239,
      "archon": 53572,
      "legend": 44107,
      "ancient": 28201,
      "divine": 23730
    },
    "counters": [
      "dark-seer",
      "phantom-lancer",
      "skywrath-mage",
      "legion-commander",
      "zeus",
      "axe"
    ],
    "weakAgainst": [
      "lycan",
      "earthshaker",
      "void-spirit",
      "lich",
      "gyrocopter",
      "necrophos"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Gauntlets of Strength",
      "Magic Stick",
      "Faerie Fire"
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
      "herald": 0.513,
      "guardian": 0.514,
      "crusader": 0.505,
      "archon": 0.508,
      "legend": 0.503,
      "ancient": 0.503,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 15264,
      "guardian": 47151,
      "crusader": 67259,
      "archon": 74820,
      "legend": 63420,
      "ancient": 38867,
      "divine": 34000
    },
    "counters": [
      "viper",
      "vengeful-spirit",
      "luna",
      "crystal-maiden",
      "grimstroke",
      "dragon-knight"
    ],
    "weakAgainst": [
      "phoenix",
      "bane",
      "muerta",
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
    "overallWin": 0.462,
    "winByBracket": {
      "herald": 0.461,
      "guardian": 0.453,
      "crusader": 0.454,
      "archon": 0.465,
      "legend": 0.469,
      "ancient": 0.463,
      "divine": 0.467
    },
    "pickByBracket": {
      "herald": 7169,
      "guardian": 19819,
      "crusader": 27594,
      "archon": 30518,
      "legend": 25880,
      "ancient": 16792,
      "divine": 15241
    },
    "counters": [
      "dark-seer",
      "kunkka",
      "weaver",
      "sven",
      "primal-beast",
      "anti-mage"
    ],
    "weakAgainst": [
      "treant-protector",
      "grimstroke",
      "bristleback",
      "bane",
      "faceless-void",
      "phantom-lancer"
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.468,
      "crusader": 0.461,
      "archon": 0.467,
      "legend": 0.47,
      "ancient": 0.481,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 6235,
      "guardian": 16760,
      "crusader": 21979,
      "archon": 21940,
      "legend": 17591,
      "ancient": 11530,
      "divine": 13711
    },
    "counters": [
      "bristleback",
      "pugna",
      "medusa",
      "sand-king",
      "phantom-lancer",
      "dragon-knight"
    ],
    "weakAgainst": [
      "morphling",
      "centaur-warrunner",
      "abaddon",
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.511,
      "crusader": 0.508,
      "archon": 0.503,
      "legend": 0.496,
      "ancient": 0.498,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 11012,
      "guardian": 36816,
      "crusader": 57630,
      "archon": 69538,
      "legend": 61152,
      "ancient": 39214,
      "divine": 33710
    },
    "counters": [
      "faceless-void",
      "spirit-breaker",
      "necrophos",
      "templar-assassin",
      "medusa",
      "dark-willow"
    ],
    "weakAgainst": [
      "treant-protector",
      "clockwerk",
      "huskar",
      "ember-spirit",
      "nyx-assassin",
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
    "overallWin": 0.446,
    "winByBracket": {
      "herald": 0.445,
      "guardian": 0.452,
      "crusader": 0.455,
      "archon": 0.446,
      "legend": 0.446,
      "ancient": 0.442,
      "divine": 0.438
    },
    "pickByBracket": {
      "herald": 5479,
      "guardian": 17166,
      "crusader": 26467,
      "archon": 32625,
      "legend": 30281,
      "ancient": 21183,
      "divine": 22342
    },
    "counters": [
      "anti-mage",
      "lina",
      "morphling",
      "witch-doctor",
      "troll-warlord",
      "medusa"
    ],
    "weakAgainst": [
      "largo",
      "earth-spirit",
      "nyx-assassin",
      "legion-commander",
      "bane",
      "bounty-hunter"
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.448,
      "guardian": 0.446,
      "crusader": 0.466,
      "archon": 0.469,
      "legend": 0.477,
      "ancient": 0.485,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 8210,
      "guardian": 25299,
      "crusader": 36615,
      "archon": 40547,
      "legend": 34384,
      "ancient": 22674,
      "divine": 21348
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
      "tusk",
      "lion",
      "jakiro",
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
    "overallWin": 0.446,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.447,
      "crusader": 0.444,
      "archon": 0.439,
      "legend": 0.446,
      "ancient": 0.447,
      "divine": 0.45
    },
    "pickByBracket": {
      "herald": 9139,
      "guardian": 25149,
      "crusader": 34485,
      "archon": 40288,
      "legend": 37652,
      "ancient": 26468,
      "divine": 28435
    },
    "counters": [
      "weaver",
      "death-prophet",
      "bristleback",
      "sven",
      "dark-seer",
      "void-spirit"
    ],
    "weakAgainst": [
      "bane",
      "lone-druid",
      "kez",
      "chen",
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
      "Claymore",
      "Shadow Blade",
      "Blitz Knuckles",
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
      "herald": 0.481,
      "guardian": 0.489,
      "crusader": 0.488,
      "archon": 0.492,
      "legend": 0.503,
      "ancient": 0.509,
      "divine": 0.526
    },
    "pickByBracket": {
      "herald": 4594,
      "guardian": 15273,
      "crusader": 23043,
      "archon": 28113,
      "legend": 26758,
      "ancient": 19712,
      "divine": 30883
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.523,
      "guardian": 0.52,
      "crusader": 0.511,
      "archon": 0.507,
      "legend": 0.507,
      "ancient": 0.491,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 8585,
      "guardian": 18800,
      "crusader": 21634,
      "archon": 20956,
      "legend": 15437,
      "ancient": 9474,
      "divine": 7053
    },
    "counters": [
      "medusa",
      "silencer",
      "bristleback",
      "lifestealer",
      "tidehunter",
      "sven"
    ],
    "weakAgainst": [
      "abaddon",
      "invoker",
      "sniper",
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.443,
      "guardian": 0.446,
      "crusader": 0.46,
      "archon": 0.474,
      "legend": 0.482,
      "ancient": 0.486,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 5026,
      "guardian": 16097,
      "crusader": 26859,
      "archon": 36988,
      "legend": 40144,
      "ancient": 31599,
      "divine": 36002
    },
    "counters": [
      "legion-commander",
      "ancient-apparition",
      "lifestealer",
      "void-spirit",
      "vengeful-spirit",
      "sven"
    ],
    "weakAgainst": [
      "treant-protector",
      "broodmother",
      "muerta",
      "pugna",
      "venomancer",
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
      "Ogre Axe",
      "Staff of Wizardry",
      "Ghost Scepter"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.513,
      "crusader": 0.512,
      "archon": 0.506,
      "legend": 0.497,
      "ancient": 0.488,
      "divine": 0.481
    },
    "pickByBracket": {
      "herald": 6304,
      "guardian": 22681,
      "crusader": 38933,
      "archon": 53391,
      "legend": 50421,
      "ancient": 33362,
      "divine": 28326
    },
    "counters": [
      "ancient-apparition",
      "abaddon",
      "gyrocopter",
      "mars",
      "primal-beast",
      "zeus"
    ],
    "weakAgainst": [
      "lone-druid",
      "treant-protector",
      "drow-ranger",
      "ursa",
      "necrophos",
      "monkey-king"
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.516,
      "crusader": 0.521,
      "archon": 0.522,
      "legend": 0.526,
      "ancient": 0.521,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 15511,
      "guardian": 54498,
      "crusader": 85201,
      "archon": 102785,
      "legend": 88776,
      "ancient": 57399,
      "divine": 55251
    },
    "counters": [
      "lion",
      "shadow-shaman",
      "morphling",
      "underlord",
      "night-stalker",
      "windranger"
    ],
    "weakAgainst": [
      "monkey-king",
      "treant-protector",
      "alchemist",
      "marci",
      "medusa",
      "witch-doctor"
    ],
    "startItems": [
      "Iron Branch",
      "Enchanted Mango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Magic Stick",
      "Smoke of Deceit"
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.456,
      "crusader": 0.473,
      "archon": 0.473,
      "legend": 0.478,
      "ancient": 0.478,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 11406,
      "guardian": 31200,
      "crusader": 44448,
      "archon": 51949,
      "legend": 44673,
      "ancient": 28201,
      "divine": 23419
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
    "overallWin": 0.534,
    "winByBracket": {
      "herald": 0.532,
      "guardian": 0.544,
      "crusader": 0.538,
      "archon": 0.538,
      "legend": 0.533,
      "ancient": 0.528,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 15056,
      "guardian": 51757,
      "crusader": 84327,
      "archon": 106154,
      "legend": 98093,
      "ancient": 62031,
      "divine": 48348
    },
    "counters": [
      "morphling",
      "slardar",
      "legion-commander",
      "lich",
      "lina",
      "warlock"
    ],
    "weakAgainst": [
      "clockwerk",
      "dawnbreaker",
      "techies",
      "beastmaster",
      "phoenix",
      "witch-doctor"
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.476,
      "crusader": 0.477,
      "archon": 0.476,
      "legend": 0.476,
      "ancient": 0.478,
      "divine": 0.467
    },
    "pickByBracket": {
      "herald": 13159,
      "guardian": 40328,
      "crusader": 57405,
      "archon": 64714,
      "legend": 51499,
      "ancient": 30138,
      "divine": 20980
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
      "pudge",
      "queen-of-pain",
      "batrider",
      "ogre-magi"
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.477,
      "crusader": 0.486,
      "archon": 0.483,
      "legend": 0.489,
      "ancient": 0.487,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 21647,
      "guardian": 50605,
      "crusader": 59548,
      "archon": 58729,
      "legend": 44129,
      "ancient": 24314,
      "divine": 18974
    },
    "counters": [
      "bristleback",
      "morphling",
      "silencer",
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
      "Enchanted Mango"
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
    "overallWin": 0.523,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.498,
      "crusader": 0.506,
      "archon": 0.523,
      "legend": 0.535,
      "ancient": 0.537,
      "divine": 0.551
    },
    "pickByBracket": {
      "herald": 2348,
      "guardian": 6511,
      "crusader": 9253,
      "archon": 10326,
      "legend": 9079,
      "ancient": 6253,
      "divine": 8094
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.472,
      "guardian": 0.487,
      "crusader": 0.487,
      "archon": 0.5,
      "legend": 0.502,
      "ancient": 0.493,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 5025,
      "guardian": 14417,
      "crusader": 22584,
      "archon": 30673,
      "legend": 31715,
      "ancient": 23038,
      "divine": 26825
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.509,
      "guardian": 0.506,
      "crusader": 0.502,
      "archon": 0.497,
      "legend": 0.488,
      "ancient": 0.479,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 9824,
      "guardian": 33284,
      "crusader": 48998,
      "archon": 56191,
      "legend": 45413,
      "ancient": 25733,
      "divine": 19378
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.478,
      "crusader": 0.477,
      "archon": 0.469,
      "legend": 0.477,
      "ancient": 0.473,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 12986,
      "guardian": 33623,
      "crusader": 42503,
      "archon": 45168,
      "legend": 37264,
      "ancient": 21658,
      "divine": 18028
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.476,
      "crusader": 0.477,
      "archon": 0.478,
      "legend": 0.48,
      "ancient": 0.486,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 22087,
      "guardian": 64266,
      "crusader": 92809,
      "archon": 109149,
      "legend": 97356,
      "ancient": 64334,
      "divine": 59405
    },
    "counters": [
      "morphling",
      "phantom-lancer",
      "oracle",
      "grimstroke",
      "templar-assassin",
      "chaos-knight"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.483,
      "crusader": 0.486,
      "archon": 0.488,
      "legend": 0.496,
      "ancient": 0.507,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 6241,
      "guardian": 19783,
      "crusader": 27716,
      "archon": 30795,
      "legend": 25742,
      "ancient": 17701,
      "divine": 20731
    },
    "counters": [
      "void-spirit",
      "slardar",
      "clockwerk",
      "pangolier",
      "storm-spirit"
    ],
    "weakAgainst": [
      "ogre-magi",
      "snapfire",
      "ember-spirit",
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
      "Arcane Boots",
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.523,
      "guardian": 0.524,
      "crusader": 0.521,
      "archon": 0.519,
      "legend": 0.515,
      "ancient": 0.508,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 22726,
      "guardian": 77469,
      "crusader": 115975,
      "archon": 132613,
      "legend": 106243,
      "ancient": 60152,
      "divine": 40716
    },
    "counters": [],
    "weakAgainst": [],
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
      "herald": 0.562,
      "guardian": 0.558,
      "crusader": 0.555,
      "archon": 0.547,
      "legend": 0.542,
      "ancient": 0.535,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 18516,
      "guardian": 61004,
      "crusader": 92397,
      "archon": 108724,
      "legend": 89975,
      "ancient": 51985,
      "divine": 32095
    },
    "counters": [
      "zeus",
      "shadow-shaman",
      "silencer",
      "templar-assassin",
      "lion",
      "abaddon"
    ],
    "weakAgainst": [
      "earthshaker",
      "pudge",
      "lich",
      "snapfire",
      "crystal-maiden",
      "dragon-knight"
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.511,
      "crusader": 0.514,
      "archon": 0.509,
      "legend": 0.508,
      "ancient": 0.504,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 24561,
      "guardian": 76712,
      "crusader": 117537,
      "archon": 141824,
      "legend": 127263,
      "ancient": 81773,
      "divine": 68827
    },
    "counters": [
      "viper",
      "medusa",
      "vengeful-spirit",
      "mirana",
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
