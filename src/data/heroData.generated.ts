// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-09-14
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
      "herald": 0.504,
      "guardian": 0.517,
      "crusader": 0.51,
      "archon": 0.514,
      "legend": 0.517,
      "ancient": 0.514,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 4690,
      "guardian": 13592,
      "crusader": 21924,
      "archon": 29873,
      "legend": 30193,
      "ancient": 19373,
      "divine": 11518
    },
    "counters": [
      "troll-warlord",
      "clockwerk",
      "terrorblade",
      "doom",
      "lion",
      "sand-king"
    ],
    "weakAgainst": [
      "marci",
      "underlord",
      "gyrocopter",
      "shadow-demon",
      "nature-s-prophet",
      "grimstroke"
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
      "herald": 0.48,
      "guardian": 0.48,
      "crusader": 0.478,
      "archon": 0.468,
      "legend": 0.467,
      "ancient": 0.463,
      "divine": 0.454
    },
    "pickByBracket": {
      "herald": 4185,
      "guardian": 13401,
      "crusader": 22445,
      "archon": 28769,
      "legend": 27419,
      "ancient": 16957,
      "divine": 9436
    },
    "counters": [
      "ring-master",
      "lifestealer",
      "dawnbreaker",
      "sand-king",
      "timbersaw",
      "shadow-demon"
    ],
    "weakAgainst": [
      "luna",
      "storm-spirit",
      "warlock",
      "monkey-king",
      "doom",
      "slardar"
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
      "Blink Dagger"
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.522,
      "crusader": 0.523,
      "archon": 0.523,
      "legend": 0.518,
      "ancient": 0.511,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 7502,
      "guardian": 25641,
      "crusader": 46475,
      "archon": 64478,
      "legend": 67501,
      "ancient": 41298,
      "divine": 21327
    },
    "counters": [
      "disruptor",
      "mars",
      "pugna",
      "tiny",
      "dark-willow",
      "hoodwink"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "underlord",
      "tusk",
      "viper",
      "snapfire",
      "largo"
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
      "herald": 0.491,
      "guardian": 0.498,
      "crusader": 0.502,
      "archon": 0.5,
      "legend": 0.495,
      "ancient": 0.496,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 15151,
      "guardian": 49621,
      "crusader": 82655,
      "archon": 105926,
      "legend": 97161,
      "ancient": 56078,
      "divine": 28787
    },
    "counters": [
      "disruptor",
      "ursa",
      "mars",
      "tusk",
      "queen-of-pain",
      "storm-spirit"
    ],
    "weakAgainst": [
      "jakiro",
      "ember-spirit",
      "abaddon",
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.518,
      "crusader": 0.518,
      "archon": 0.528,
      "legend": 0.529,
      "ancient": 0.527,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 5070,
      "guardian": 18144,
      "crusader": 31218,
      "archon": 41031,
      "legend": 38434,
      "ancient": 25365,
      "divine": 16413
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
      "herald": 0.525,
      "guardian": 0.515,
      "crusader": 0.512,
      "archon": 0.504,
      "legend": 0.5,
      "ancient": 0.496,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 19411,
      "guardian": 68991,
      "crusader": 121801,
      "archon": 169473,
      "legend": 177123,
      "ancient": 115823,
      "divine": 71755
    },
    "counters": [
      "morphling",
      "death-prophet",
      "terrorblade",
      "faceless-void",
      "winter-wyvern",
      "brewmaster"
    ],
    "weakAgainst": [
      "bane",
      "monkey-king",
      "chen",
      "treant-protector",
      "abaddon",
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.48,
      "crusader": 0.49,
      "archon": 0.493,
      "legend": 0.502,
      "ancient": 0.516,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 4275,
      "guardian": 13757,
      "crusader": 23462,
      "archon": 32600,
      "legend": 34248,
      "ancient": 24616,
      "divine": 21589
    },
    "counters": [
      "axe",
      "timbersaw",
      "phoenix",
      "lion",
      "tiny",
      "earthshaker"
    ],
    "weakAgainst": [
      "centaur-warrunner",
      "storm-spirit",
      "lich",
      "marci",
      "beastmaster",
      "skywrath-mage"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Arcane Boots",
      "Aether Lens",
      "Ogre Axe",
      "Point Booster",
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
    "overallWin": 0.439,
    "winByBracket": {
      "herald": 0.432,
      "guardian": 0.432,
      "crusader": 0.441,
      "archon": 0.426,
      "legend": 0.438,
      "ancient": 0.443,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 1425,
      "guardian": 4087,
      "crusader": 6653,
      "archon": 8111,
      "legend": 8015,
      "ancient": 5382,
      "divine": 4404
    },
    "counters": [
      "grimstroke",
      "bristleback",
      "weaver",
      "beastmaster",
      "medusa",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "oracle",
      "bane",
      "primal-beast",
      "chen",
      "underlord",
      "ember-spirit"
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
    "overallWin": 0.447,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.444,
      "crusader": 0.444,
      "archon": 0.433,
      "legend": 0.447,
      "ancient": 0.45,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 2959,
      "guardian": 8876,
      "crusader": 14525,
      "archon": 18850,
      "legend": 17555,
      "ancient": 11868,
      "divine": 9296
    },
    "counters": [
      "vengeful-spirit",
      "shadow-shaman",
      "zeus",
      "winter-wyvern",
      "clockwerk",
      "lycan"
    ],
    "weakAgainst": [
      "grimstroke",
      "dazzle",
      "batrider",
      "pangolier",
      "juggernaut",
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.51,
      "crusader": 0.512,
      "archon": 0.51,
      "legend": 0.518,
      "ancient": 0.512,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 10235,
      "guardian": 23650,
      "crusader": 29589,
      "archon": 31034,
      "legend": 26016,
      "ancient": 14063,
      "divine": 7086
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [
      "Iron Branch",
      "Quelling Blade",
      "Tango",
      "Circlet",
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
    "overallWin": 0.536,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.509,
      "crusader": 0.514,
      "archon": 0.524,
      "legend": 0.541,
      "ancient": 0.552,
      "divine": 0.565
    },
    "pickByBracket": {
      "herald": 9014,
      "guardian": 30797,
      "crusader": 55091,
      "archon": 76918,
      "legend": 87088,
      "ancient": 68721,
      "divine": 66187
    },
    "counters": [
      "dragon-knight",
      "centaur-warrunner",
      "ursa",
      "queen-of-pain",
      "ogre-magi",
      "timbersaw"
    ],
    "weakAgainst": [
      "chen",
      "hoodwink"
    ],
    "startItems": [
      "Iron Branch",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Tango",
      "Faerie Fire",
      "Wind Lace"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Eul's Scepter of Divinity",
      "Essence Distiller",
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.503,
      "guardian": 0.495,
      "crusader": 0.503,
      "archon": 0.511,
      "legend": 0.522,
      "ancient": 0.532,
      "divine": 0.526
    },
    "pickByBracket": {
      "herald": 1573,
      "guardian": 4609,
      "crusader": 7771,
      "archon": 11236,
      "legend": 13441,
      "ancient": 10926,
      "divine": 10712
    },
    "counters": [
      "centaur-warrunner",
      "void-spirit",
      "slardar",
      "warlock",
      "mars",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "bristleback",
      "rubick",
      "axe",
      "treant-protector",
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.53,
      "guardian": 0.514,
      "crusader": 0.493,
      "archon": 0.482,
      "legend": 0.469,
      "ancient": 0.459,
      "divine": 0.459
    },
    "pickByBracket": {
      "herald": 15898,
      "guardian": 46985,
      "crusader": 63694,
      "archon": 67180,
      "legend": 51786,
      "ancient": 25186,
      "divine": 12274
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
      "keeper-of-the-light",
      "batrider",
      "necrophos"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.507,
      "crusader": 0.496,
      "archon": 0.497,
      "legend": 0.498,
      "ancient": 0.502,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 4062,
      "guardian": 10835,
      "crusader": 15168,
      "archon": 16189,
      "legend": 13500,
      "ancient": 7511,
      "divine": 5078
    },
    "counters": [
      "tusk",
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.521,
      "guardian": 0.516,
      "crusader": 0.511,
      "archon": 0.509,
      "legend": 0.504,
      "ancient": 0.497,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 5779,
      "guardian": 24453,
      "crusader": 49740,
      "archon": 77081,
      "legend": 86128,
      "ancient": 58375,
      "divine": 36991
    },
    "counters": [
      "medusa",
      "terrorblade",
      "weaver",
      "faceless-void",
      "zeus",
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
      "Magic Stick"
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.516,
      "crusader": 0.516,
      "archon": 0.517,
      "legend": 0.514,
      "ancient": 0.503,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 8532,
      "guardian": 26834,
      "crusader": 39213,
      "archon": 43517,
      "legend": 37002,
      "ancient": 20464,
      "divine": 11438
    },
    "counters": [
      "templar-assassin",
      "dragon-knight",
      "ursa",
      "tiny",
      "pudge"
    ],
    "weakAgainst": [
      "mars",
      "jakiro",
      "invoker",
      "windranger",
      "queen-of-pain",
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
    "overallWin": 0.449,
    "winByBracket": {
      "herald": 0.427,
      "guardian": 0.443,
      "crusader": 0.455,
      "archon": 0.442,
      "legend": 0.431,
      "ancient": 0.446,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 677,
      "guardian": 1946,
      "crusader": 2868,
      "archon": 3610,
      "legend": 3253,
      "ancient": 2105,
      "divine": 1988
    },
    "counters": [
      "ursa",
      "queen-of-pain",
      "ring-master",
      "disruptor",
      "storm-spirit",
      "bristleback"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.488,
      "crusader": 0.489,
      "archon": 0.496,
      "legend": 0.502,
      "ancient": 0.504,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 10154,
      "guardian": 26573,
      "crusader": 36055,
      "archon": 40941,
      "legend": 38163,
      "ancient": 24551,
      "divine": 17051
    },
    "counters": [
      "skywrath-mage",
      "clockwerk",
      "snapfire",
      "dragon-knight",
      "jakiro",
      "dark-willow"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "pudge",
      "templar-assassin",
      "razor",
      "slardar",
      "crystal-maiden"
    ],
    "startItems": [
      "Faerie Fire",
      "Iron Branch",
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
      "herald": 0.485,
      "guardian": 0.471,
      "crusader": 0.474,
      "archon": 0.474,
      "legend": 0.478,
      "ancient": 0.486,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 3977,
      "guardian": 13906,
      "crusader": 26064,
      "archon": 38725,
      "legend": 44565,
      "ancient": 34610,
      "divine": 29863
    },
    "counters": [
      "tidehunter",
      "luna",
      "underlord",
      "pugna",
      "pangolier",
      "silencer"
    ],
    "weakAgainst": [
      "venomancer",
      "abaddon",
      "clinkz",
      "leshrac",
      "monkey-king",
      "nature-s-prophet"
    ],
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
      "Blink Dagger",
      "Essence Distiller",
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
      "herald": 0.544,
      "guardian": 0.534,
      "crusader": 0.523,
      "archon": 0.513,
      "legend": 0.512,
      "ancient": 0.506,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 18982,
      "guardian": 62296,
      "crusader": 99366,
      "archon": 126058,
      "legend": 124750,
      "ancient": 80733,
      "divine": 48899
    },
    "counters": [
      "necrophos",
      "slardar",
      "timbersaw",
      "underlord",
      "sniper",
      "luna"
    ],
    "weakAgainst": [
      "techies",
      "puck",
      "hoodwink",
      "venomancer",
      "earthshaker",
      "leshrac"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.489,
      "crusader": 0.49,
      "archon": 0.485,
      "legend": 0.494,
      "ancient": 0.498,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 4358,
      "guardian": 15371,
      "crusader": 28784,
      "archon": 42877,
      "legend": 51022,
      "ancient": 42952,
      "divine": 43952
    },
    "counters": [
      "terrorblade",
      "disruptor",
      "slardar",
      "underlord",
      "tusk",
      "ring-master"
    ],
    "weakAgainst": [
      "phoenix",
      "ember-spirit",
      "sven",
      "lion",
      "tiny",
      "storm-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Mantle of Intelligence",
      "Sage's Mask",
      "Magic Stick"
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.471,
      "crusader": 0.479,
      "archon": 0.481,
      "legend": 0.495,
      "ancient": 0.492,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 7102,
      "guardian": 22999,
      "crusader": 38724,
      "archon": 54229,
      "legend": 61837,
      "ancient": 47543,
      "divine": 40113
    },
    "counters": [
      "weaver",
      "earthshaker",
      "drow-ranger",
      "templar-assassin",
      "luna",
      "ogre-magi"
    ],
    "weakAgainst": [
      "treant-protector",
      "dazzle",
      "nyx-assassin",
      "night-stalker",
      "winter-wyvern",
      "muerta"
    ],
    "startItems": [
      "Iron Branch",
      "Observer and Sentry Wards",
      "Tango",
      "Blood Grenade",
      "Faerie Fire",
      "Circlet"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Essence Distiller",
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.516,
      "crusader": 0.522,
      "archon": 0.522,
      "legend": 0.522,
      "ancient": 0.524,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 6172,
      "guardian": 22505,
      "crusader": 44650,
      "archon": 74212,
      "legend": 92723,
      "ancient": 72817,
      "divine": 55110
    },
    "counters": [
      "shadow-shaman",
      "vengeful-spirit",
      "medusa",
      "monkey-king",
      "sven",
      "underlord"
    ],
    "weakAgainst": [
      "treant-protector",
      "alchemist",
      "spirit-breaker",
      "venomancer",
      "bane",
      "faceless-void"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Quelling Blade",
      "Magic Stick",
      "Faerie Fire"
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
      "herald": 0.489,
      "guardian": 0.498,
      "crusader": 0.506,
      "archon": 0.51,
      "legend": 0.514,
      "ancient": 0.52,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 5994,
      "guardian": 20641,
      "crusader": 33847,
      "archon": 44067,
      "legend": 42004,
      "ancient": 25446,
      "divine": 15947
    },
    "counters": [
      "dark-willow",
      "skywrath-mage",
      "beastmaster",
      "ring-master",
      "warlock",
      "windranger"
    ],
    "weakAgainst": [
      "gyrocopter",
      "shadow-demon",
      "abaddon",
      "lion",
      "slardar",
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.478,
      "crusader": 0.481,
      "archon": 0.481,
      "legend": 0.486,
      "ancient": 0.487,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 7195,
      "guardian": 18308,
      "crusader": 25690,
      "archon": 32060,
      "legend": 32355,
      "ancient": 21389,
      "divine": 15590
    },
    "counters": [
      "slardar",
      "ogre-magi",
      "shadow-shaman",
      "dragon-knight"
    ],
    "weakAgainst": [
      "pudge",
      "spirit-breaker",
      "hoodwink",
      "axe",
      "snapfire",
      "tusk"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.499,
      "crusader": 0.494,
      "archon": 0.493,
      "legend": 0.501,
      "ancient": 0.503,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 5114,
      "guardian": 21061,
      "crusader": 41338,
      "archon": 68081,
      "legend": 81641,
      "ancient": 62154,
      "divine": 45962
    },
    "counters": [
      "phantom-assassin",
      "chaos-knight",
      "muerta",
      "bristleback",
      "phantom-lancer",
      "grimstroke"
    ],
    "weakAgainst": [
      "chen",
      "io",
      "kez",
      "enigma",
      "drow-ranger",
      "treant-protector"
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
      "Glimmer Cape",
      "Staff of Wizardry",
      "Point Booster"
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.464,
      "crusader": 0.467,
      "archon": 0.469,
      "legend": 0.471,
      "ancient": 0.48,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 4472,
      "guardian": 15797,
      "crusader": 29391,
      "archon": 45871,
      "legend": 55197,
      "ancient": 42809,
      "divine": 37027
    },
    "counters": [
      "lifestealer",
      "winter-wyvern",
      "ring-master",
      "pudge",
      "lion",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "abaddon",
      "largo",
      "keeper-of-the-light",
      "treant-protector",
      "kez",
      "shadow-demon"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Circlet",
      "Quelling Blade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Blink Dagger",
      "Mithril Hammer",
      "Aghanim's Shard",
      "Black King Bar"
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.523,
      "crusader": 0.513,
      "archon": 0.51,
      "legend": 0.511,
      "ancient": 0.513,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 7179,
      "guardian": 24703,
      "crusader": 41596,
      "archon": 57647,
      "legend": 60929,
      "ancient": 42993,
      "divine": 32743
    },
    "counters": [
      "drow-ranger",
      "morphling",
      "troll-warlord",
      "magnus",
      "sand-king",
      "tusk"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "venomancer",
      "keeper-of-the-light",
      "monkey-king",
      "phoenix",
      "clinkz"
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
      "Blink Dagger",
      "Mithril Hammer",
      "Ogre Axe",
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
    "overallWin": 0.462,
    "winByBracket": {
      "herald": 0.472,
      "guardian": 0.47,
      "crusader": 0.465,
      "archon": 0.462,
      "legend": 0.46,
      "ancient": 0.456,
      "divine": 0.455
    },
    "pickByBracket": {
      "herald": 18735,
      "guardian": 55388,
      "crusader": 84510,
      "archon": 106141,
      "legend": 101001,
      "ancient": 61672,
      "divine": 34908
    },
    "counters": [
      "underlord",
      "pudge",
      "disruptor",
      "spirit-breaker",
      "lich",
      "phoenix"
    ],
    "weakAgainst": [
      "treant-protector",
      "largo",
      "dragon-knight",
      "slardar",
      "hoodwink",
      "shadow-demon"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Circlet",
      "Magic Wand",
      "Tango",
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.455,
      "guardian": 0.473,
      "crusader": 0.481,
      "archon": 0.489,
      "legend": 0.496,
      "ancient": 0.508,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 4082,
      "guardian": 16007,
      "crusader": 34195,
      "archon": 55237,
      "legend": 70871,
      "ancient": 57822,
      "divine": 50152
    },
    "counters": [
      "timbersaw",
      "rubick",
      "lion",
      "pudge",
      "slardar",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "ember-spirit",
      "necrophos",
      "bane",
      "storm-spirit",
      "luna",
      "largo"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Blood Grenade"
    ],
    "coreItems": [
      "Ogre Axe",
      "Spirit Vessel",
      "Mithril Hammer",
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.495,
      "crusader": 0.498,
      "archon": 0.505,
      "legend": 0.507,
      "ancient": 0.508,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 17631,
      "guardian": 56426,
      "crusader": 96617,
      "archon": 133880,
      "legend": 143993,
      "ancient": 99619,
      "divine": 64048
    },
    "counters": [
      "sven",
      "wraith-king",
      "axe",
      "pugna",
      "troll-warlord",
      "invoker"
    ],
    "weakAgainst": [
      "bane",
      "ember-spirit",
      "gyrocopter",
      "void-spirit",
      "timbersaw",
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
      "Ogre Axe",
      "Aghanim's Shard",
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.476,
      "crusader": 0.481,
      "archon": 0.513,
      "legend": 0.519,
      "ancient": 0.525,
      "divine": 0.537
    },
    "pickByBracket": {
      "herald": 1542,
      "guardian": 4406,
      "crusader": 7143,
      "archon": 9078,
      "legend": 8934,
      "ancient": 6374,
      "divine": 5615
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.473,
      "crusader": 0.479,
      "archon": 0.489,
      "legend": 0.498,
      "ancient": 0.502,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 5613,
      "guardian": 19903,
      "crusader": 39378,
      "archon": 64222,
      "legend": 81131,
      "ancient": 65543,
      "divine": 57229
    },
    "counters": [
      "sniper",
      "witch-doctor",
      "dark-seer",
      "void-spirit",
      "medusa",
      "undying"
    ],
    "weakAgainst": [
      "io",
      "clinkz",
      "treant-protector",
      "bane",
      "alchemist",
      "chen"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Quelling Blade",
      "Magic Stick"
    ],
    "coreItems": [
      "Ogre Axe",
      "Spirit Vessel",
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.482,
      "crusader": 0.478,
      "archon": 0.473,
      "legend": 0.481,
      "ancient": 0.475,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 6000,
      "guardian": 14421,
      "crusader": 18830,
      "archon": 20888,
      "legend": 19782,
      "ancient": 13803,
      "divine": 11739
    },
    "counters": [
      "ursa",
      "disruptor",
      "void-spirit",
      "clockwerk",
      "queen-of-pain",
      "invoker"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "marci",
      "slardar",
      "gyrocopter",
      "doom",
      "templar-assassin"
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
      "herald": 0.47,
      "guardian": 0.489,
      "crusader": 0.497,
      "archon": 0.497,
      "legend": 0.507,
      "ancient": 0.538,
      "divine": 0.562
    },
    "pickByBracket": {
      "herald": 5184,
      "guardian": 16507,
      "crusader": 27736,
      "archon": 36222,
      "legend": 36547,
      "ancient": 25781,
      "divine": 24314
    },
    "counters": [
      "shadow-fiend",
      "windranger",
      "disruptor",
      "centaur-warrunner",
      "mars"
    ],
    "weakAgainst": [
      "snapfire",
      "hoodwink"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Magic Stick",
      "Circlet",
      "Ring of Regen"
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.485,
      "crusader": 0.482,
      "archon": 0.481,
      "legend": 0.487,
      "ancient": 0.491,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 11189,
      "guardian": 37917,
      "crusader": 63878,
      "archon": 83462,
      "legend": 82301,
      "ancient": 51351,
      "divine": 29475
    },
    "counters": [
      "dawnbreaker",
      "dragon-knight",
      "ursa",
      "primal-beast",
      "marci",
      "razor"
    ],
    "weakAgainst": [
      "tidehunter",
      "skywrath-mage",
      "keeper-of-the-light",
      "centaur-warrunner",
      "axe",
      "muerta"
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
      "Ogre Axe"
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.508,
      "crusader": 0.513,
      "archon": 0.516,
      "legend": 0.519,
      "ancient": 0.523,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 5149,
      "guardian": 18456,
      "crusader": 34844,
      "archon": 54763,
      "legend": 62475,
      "ancient": 45667,
      "divine": 32963
    },
    "counters": [
      "muerta",
      "beastmaster",
      "templar-assassin",
      "ring-master",
      "skywrath-mage",
      "shadow-demon"
    ],
    "weakAgainst": [
      "windranger",
      "batrider",
      "slardar",
      "lion",
      "sniper",
      "ursa"
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
      "Blink Dagger",
      "Ogre Axe",
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
    "overallWin": 0.453,
    "winByBracket": {
      "herald": 0.455,
      "guardian": 0.446,
      "crusader": 0.443,
      "archon": 0.455,
      "legend": 0.452,
      "ancient": 0.462,
      "divine": 0.459
    },
    "pickByBracket": {
      "herald": 3047,
      "guardian": 9840,
      "crusader": 17151,
      "archon": 25034,
      "legend": 27322,
      "ancient": 18986,
      "divine": 12019
    },
    "counters": [
      "earthshaker",
      "templar-assassin",
      "sven",
      "dazzle",
      "luna",
      "abaddon"
    ],
    "weakAgainst": [
      "treant-protector",
      "razor",
      "keeper-of-the-light",
      "ember-spirit",
      "pudge",
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
      "Staff of Wizardry",
      "Claymore",
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.472,
      "crusader": 0.473,
      "archon": 0.475,
      "legend": 0.478,
      "ancient": 0.475,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 13168,
      "guardian": 44857,
      "crusader": 78733,
      "archon": 113059,
      "legend": 123193,
      "ancient": 88344,
      "divine": 66957
    },
    "counters": [
      "death-prophet",
      "shadow-shaman",
      "phantom-lancer",
      "huskar",
      "underlord",
      "silencer"
    ],
    "weakAgainst": [
      "naga-siren",
      "keeper-of-the-light",
      "lycan",
      "treant-protector",
      "ember-spirit",
      "lone-druid"
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
      "Staff of Wizardry",
      "Arcane Boots",
      "Blink Dagger",
      "Force Staff"
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
      "herald": 0.462,
      "guardian": 0.44,
      "crusader": 0.448,
      "archon": 0.445,
      "legend": 0.457,
      "ancient": 0.455,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 9657,
      "guardian": 22747,
      "crusader": 28812,
      "archon": 32591,
      "legend": 29653,
      "ancient": 19388,
      "divine": 13422
    },
    "counters": [
      "storm-spirit",
      "tidehunter",
      "spirit-breaker",
      "ring-master",
      "phoenix",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "hoodwink",
      "marci",
      "nature-s-prophet",
      "shadow-shaman",
      "abaddon",
      "beastmaster"
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
      "Mithril Hammer",
      "Blade of Alacrity",
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.496,
      "crusader": 0.494,
      "archon": 0.498,
      "legend": 0.503,
      "ancient": 0.513,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 16240,
      "guardian": 59497,
      "crusader": 114646,
      "archon": 174607,
      "legend": 198280,
      "ancient": 143982,
      "divine": 101780
    },
    "counters": [
      "chaos-knight",
      "troll-warlord",
      "ring-master",
      "venomancer",
      "weaver",
      "night-stalker"
    ],
    "weakAgainst": [
      "treant-protector",
      "tinker",
      "monkey-king",
      "undying",
      "puck",
      "nyx-assassin"
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
      "Aghanim's Shard",
      "Ogre Axe",
      "Meteor Hammer",
      "Mithril Hammer"
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.484,
      "crusader": 0.494,
      "archon": 0.484,
      "legend": 0.486,
      "ancient": 0.487,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 4905,
      "guardian": 16071,
      "crusader": 29477,
      "archon": 39170,
      "legend": 39817,
      "ancient": 29135,
      "divine": 23902
    },
    "counters": [
      "disruptor",
      "ember-spirit",
      "jakiro",
      "queen-of-pain",
      "snapfire",
      "mars"
    ],
    "weakAgainst": [
      "windranger",
      "rubick"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Gauntlets of Strength",
      "Magic Stick",
      "Faerie Fire",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Ogre Axe",
      "Mithril Hammer",
      "Blade of Alacrity",
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
      "herald": 0.503,
      "guardian": 0.497,
      "crusader": 0.501,
      "archon": 0.487,
      "legend": 0.479,
      "ancient": 0.472,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 10308,
      "guardian": 35202,
      "crusader": 60072,
      "archon": 81519,
      "legend": 81446,
      "ancient": 49852,
      "divine": 25980
    },
    "counters": [
      "chaos-knight",
      "undying",
      "anti-mage",
      "weaver",
      "techies",
      "sven"
    ],
    "weakAgainst": [
      "treant-protector",
      "io",
      "clinkz",
      "alchemist",
      "dazzle",
      "pangolier"
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.515,
      "crusader": 0.515,
      "archon": 0.52,
      "legend": 0.524,
      "ancient": 0.525,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 21000,
      "guardian": 68525,
      "crusader": 116328,
      "archon": 161576,
      "legend": 173262,
      "ancient": 116226,
      "divine": 70651
    },
    "counters": [
      "zeus",
      "pangolier",
      "phoenix",
      "techies",
      "underlord",
      "beastmaster"
    ],
    "weakAgainst": [
      "abaddon",
      "sniper",
      "timbersaw",
      "kez",
      "dawnbreaker",
      "snapfire"
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
      "herald": 0.472,
      "guardian": 0.48,
      "crusader": 0.488,
      "archon": 0.5,
      "legend": 0.505,
      "ancient": 0.518,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 8822,
      "guardian": 27638,
      "crusader": 43741,
      "archon": 55414,
      "legend": 54893,
      "ancient": 38447,
      "divine": 31955
    },
    "counters": [
      "warlock",
      "queen-of-pain",
      "lina",
      "silencer",
      "phoenix",
      "bristleback"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "batrider",
      "earth-spirit",
      "pudge",
      "viper"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Blood Grenade"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Force Staff",
      "Holy Locket",
      "Point Booster",
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
    "overallWin": 0.449,
    "winByBracket": {
      "herald": 0.472,
      "guardian": 0.46,
      "crusader": 0.449,
      "archon": 0.45,
      "legend": 0.445,
      "ancient": 0.443,
      "divine": 0.449
    },
    "pickByBracket": {
      "herald": 5399,
      "guardian": 15845,
      "crusader": 26683,
      "archon": 36715,
      "legend": 41859,
      "ancient": 31540,
      "divine": 25361
    },
    "counters": [
      "disruptor",
      "lich",
      "underlord",
      "lifestealer",
      "tiny",
      "silencer"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "treant-protector",
      "drow-ranger",
      "largo",
      "windranger",
      "earthshaker"
    ],
    "startItems": [
      "Faerie Fire",
      "Iron Branch",
      "Circlet",
      "Tango",
      "Magic Wand",
      "Quelling Blade"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Ogre Axe",
      "Mage Slayer",
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.487,
      "crusader": 0.491,
      "archon": 0.49,
      "legend": 0.497,
      "ancient": 0.498,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 5119,
      "guardian": 16380,
      "crusader": 26638,
      "archon": 37631,
      "legend": 42317,
      "ancient": 29433,
      "divine": 17951
    },
    "counters": [
      "bristleback",
      "tiny",
      "skywrath-mage",
      "pangolier",
      "hoodwink",
      "warlock"
    ],
    "weakAgainst": [
      "templar-assassin",
      "shadow-demon",
      "shadow-shaman",
      "storm-spirit",
      "jakiro",
      "ring-master"
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
      "Staff of Wizardry",
      "Claymore"
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
      "herald": 0.465,
      "guardian": 0.468,
      "crusader": 0.455,
      "archon": 0.477,
      "legend": 0.473,
      "ancient": 0.496,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 1580,
      "guardian": 5103,
      "crusader": 9062,
      "archon": 13585,
      "legend": 15859,
      "ancient": 13069,
      "divine": 13167
    },
    "counters": [
      "silencer",
      "queen-of-pain",
      "primal-beast",
      "pangolier",
      "pudge",
      "templar-assassin"
    ],
    "weakAgainst": [
      "sniper",
      "treant-protector",
      "shadow-demon",
      "beastmaster",
      "batrider",
      "clinkz"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Faerie Fire",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Aghanim's Shard",
      "Ogre Axe",
      "Kaya",
      "Point Booster"
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
    "overallWin": 0.528,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.529,
      "crusader": 0.529,
      "archon": 0.528,
      "legend": 0.529,
      "ancient": 0.528,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 15167,
      "guardian": 56428,
      "crusader": 99434,
      "archon": 136966,
      "legend": 136385,
      "ancient": 83339,
      "divine": 44280
    },
    "counters": [
      "luna",
      "shadow-shaman",
      "bristleback",
      "pudge",
      "skywrath-mage",
      "ursa"
    ],
    "weakAgainst": [
      "hoodwink",
      "sniper",
      "lifestealer",
      "snapfire",
      "crystal-maiden",
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.504,
      "crusader": 0.496,
      "archon": 0.502,
      "legend": 0.497,
      "ancient": 0.514,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 2492,
      "guardian": 7577,
      "crusader": 12397,
      "archon": 15842,
      "legend": 15970,
      "ancient": 12035,
      "divine": 10610
    },
    "counters": [
      "clockwerk",
      "slark",
      "primal-beast",
      "troll-warlord",
      "rubick",
      "pugna"
    ],
    "weakAgainst": [
      "dawnbreaker",
      "terrorblade",
      "abaddon",
      "weaver",
      "tiny",
      "void-spirit"
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.527,
      "crusader": 0.533,
      "archon": 0.531,
      "legend": 0.525,
      "ancient": 0.523,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 10744,
      "guardian": 36446,
      "crusader": 63540,
      "archon": 92365,
      "legend": 104971,
      "ancient": 75171,
      "divine": 50559
    },
    "counters": [
      "sven",
      "ursa",
      "zeus",
      "ring-master",
      "razor",
      "winter-wyvern"
    ],
    "weakAgainst": [
      "treant-protector",
      "kez",
      "sniper",
      "witch-doctor",
      "keeper-of-the-light",
      "muerta"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Enchanted Mango",
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
    "overallWin": 0.531,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.525,
      "crusader": 0.529,
      "archon": 0.532,
      "legend": 0.534,
      "ancient": 0.533,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 13761,
      "guardian": 55855,
      "crusader": 110281,
      "archon": 172378,
      "legend": 197660,
      "ancient": 140854,
      "divine": 98672
    },
    "counters": [
      "phantom-assassin",
      "vengeful-spirit",
      "night-stalker",
      "medusa",
      "muerta",
      "dark-willow"
    ],
    "weakAgainst": [
      "doom",
      "alchemist",
      "morphling",
      "kez",
      "timbersaw",
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.481,
      "crusader": 0.492,
      "archon": 0.497,
      "legend": 0.501,
      "ancient": 0.504,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 24604,
      "guardian": 78491,
      "crusader": 134713,
      "archon": 193723,
      "legend": 211543,
      "ancient": 146069,
      "divine": 102145
    },
    "counters": [
      "viper",
      "luna",
      "underlord",
      "storm-spirit",
      "phoenix",
      "warlock"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "pangolier",
      "timbersaw",
      "pudge",
      "silencer",
      "earth-spirit"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Observer Ward",
      "Circlet",
      "Observer and Sentry Wards"
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.489,
      "crusader": 0.489,
      "archon": 0.489,
      "legend": 0.487,
      "ancient": 0.485,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 26332,
      "guardian": 93420,
      "crusader": 165819,
      "archon": 236014,
      "legend": 250243,
      "ancient": 164404,
      "divine": 99448
    },
    "counters": [
      "sven",
      "grimstroke",
      "razor",
      "troll-warlord",
      "bristleback",
      "death-prophet"
    ],
    "weakAgainst": [
      "treant-protector",
      "bane",
      "earth-spirit",
      "abaddon",
      "wraith-king",
      "pangolier"
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
      "Force Staff",
      "Glimmer Cape",
      "Ogre Axe"
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
    "overallWin": 0.481,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.493,
      "crusader": 0.485,
      "archon": 0.48,
      "legend": 0.479,
      "ancient": 0.473,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 3560,
      "guardian": 12936,
      "crusader": 23362,
      "archon": 31761,
      "legend": 32210,
      "ancient": 21810,
      "divine": 16855
    },
    "counters": [
      "underlord",
      "pangolier",
      "shadow-fiend",
      "windranger",
      "rubick",
      "hoodwink"
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
      "Blade of Alacrity",
      "Hyperstone",
      "Staff of Wizardry",
      "Mjollnir"
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
      "herald": 0.509,
      "guardian": 0.51,
      "crusader": 0.512,
      "archon": 0.506,
      "legend": 0.504,
      "ancient": 0.498,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 11885,
      "guardian": 37471,
      "crusader": 62136,
      "archon": 85969,
      "legend": 95125,
      "ancient": 71041,
      "divine": 58610
    },
    "counters": [
      "morphling",
      "sand-king",
      "earthshaker",
      "phantom-assassin",
      "alchemist",
      "mars"
    ],
    "weakAgainst": [
      "legion-commander",
      "clockwerk",
      "monkey-king",
      "bane",
      "keeper-of-the-light",
      "gyrocopter"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Circlet",
      "Magic Stick",
      "Quelling Blade"
    ],
    "coreItems": [
      "Blade of Alacrity",
      "Manta Style",
      "Diadem",
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.457,
      "crusader": 0.471,
      "archon": 0.472,
      "legend": 0.482,
      "ancient": 0.494,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 1701,
      "guardian": 4808,
      "crusader": 7864,
      "archon": 10154,
      "legend": 10259,
      "ancient": 7527,
      "divine": 6593
    },
    "counters": [
      "hoodwink",
      "rubick",
      "silencer",
      "lion",
      "mars",
      "pangolier"
    ],
    "weakAgainst": [
      "terrorblade",
      "beastmaster",
      "tusk",
      "bane",
      "snapfire",
      "ember-spirit"
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.471,
      "crusader": 0.478,
      "archon": 0.491,
      "legend": 0.494,
      "ancient": 0.496,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 5756,
      "guardian": 24756,
      "crusader": 56595,
      "archon": 98038,
      "legend": 123102,
      "ancient": 92599,
      "divine": 59032
    },
    "counters": [
      "phoenix",
      "pudge",
      "skywrath-mage",
      "puck",
      "luna",
      "silencer"
    ],
    "weakAgainst": [
      "ember-spirit",
      "rubick",
      "tusk",
      "nature-s-prophet",
      "beastmaster",
      "invoker"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Gauntlets of Strength",
      "Quelling Blade",
      "Faerie Fire"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.483,
      "crusader": 0.488,
      "archon": 0.494,
      "legend": 0.499,
      "ancient": 0.512,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 6109,
      "guardian": 16125,
      "crusader": 24669,
      "archon": 32230,
      "legend": 32022,
      "ancient": 23788,
      "divine": 18108
    },
    "counters": [
      "pangolier",
      "undying",
      "shadow-shaman",
      "abaddon",
      "ursa",
      "centaur-warrunner"
    ],
    "weakAgainst": [
      "phoenix",
      "razor",
      "rubick",
      "faceless-void",
      "ember-spirit",
      "puck"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Sentry Ward",
      "Magic Stick",
      "Faerie Fire"
    ],
    "coreItems": [
      "Ogre Axe",
      "Phase Boots",
      "Mithril Hammer",
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.457,
      "crusader": 0.474,
      "archon": 0.473,
      "legend": 0.47,
      "ancient": 0.471,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 3291,
      "guardian": 10665,
      "crusader": 21097,
      "archon": 34417,
      "legend": 42792,
      "ancient": 34561,
      "divine": 25523
    },
    "counters": [
      "chaos-knight",
      "medusa",
      "drow-ranger",
      "weaver",
      "tinker",
      "slark"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "oracle",
      "keeper-of-the-light",
      "phoenix",
      "chen"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.493,
      "crusader": 0.498,
      "archon": 0.497,
      "legend": 0.496,
      "ancient": 0.493,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 3985,
      "guardian": 12240,
      "crusader": 21153,
      "archon": 27497,
      "legend": 27718,
      "ancient": 16971,
      "divine": 8253
    },
    "counters": [
      "templar-assassin",
      "warlock",
      "slardar",
      "sand-king",
      "skywrath-mage",
      "beastmaster"
    ],
    "weakAgainst": [
      "shadow-demon",
      "shadow-shaman",
      "centaur-warrunner",
      "ogre-magi",
      "ember-spirit",
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.513,
      "crusader": 0.506,
      "archon": 0.525,
      "legend": 0.523,
      "ancient": 0.534,
      "divine": 0.542
    },
    "pickByBracket": {
      "herald": 3139,
      "guardian": 8382,
      "crusader": 12097,
      "archon": 13978,
      "legend": 12618,
      "ancient": 8198,
      "divine": 5840
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.52,
      "crusader": 0.518,
      "archon": 0.521,
      "legend": 0.518,
      "ancient": 0.517,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 8957,
      "guardian": 35411,
      "crusader": 71305,
      "archon": 112837,
      "legend": 134052,
      "ancient": 102887,
      "divine": 81954
    },
    "counters": [
      "storm-spirit",
      "slardar",
      "underlord",
      "nature-s-prophet",
      "lifestealer",
      "undying"
    ],
    "weakAgainst": [
      "tidehunter",
      "luna",
      "centaur-warrunner",
      "keeper-of-the-light",
      "ember-spirit",
      "tusk"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Faerie Fire",
      "Observer and Sentry Wards",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Essence Distiller",
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
    "overallWin": 0.451,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.444,
      "crusader": 0.447,
      "archon": 0.447,
      "legend": 0.451,
      "ancient": 0.458,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 7492,
      "guardian": 21421,
      "crusader": 31771,
      "archon": 39842,
      "legend": 40621,
      "ancient": 27982,
      "divine": 18953
    },
    "counters": [
      "skywrath-mage",
      "undying",
      "underlord",
      "weaver",
      "axe",
      "templar-assassin"
    ],
    "weakAgainst": [
      "dawnbreaker",
      "slardar",
      "shadow-shaman",
      "marci"
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
      "Desolator",
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.471,
      "crusader": 0.476,
      "archon": 0.476,
      "legend": 0.477,
      "ancient": 0.48,
      "divine": 0.478
    },
    "pickByBracket": {
      "herald": 3882,
      "guardian": 12204,
      "crusader": 21300,
      "archon": 30197,
      "legend": 32575,
      "ancient": 23822,
      "divine": 18519
    },
    "counters": [
      "weaver",
      "lifestealer",
      "terrorblade",
      "puck",
      "pangolier",
      "dawnbreaker"
    ],
    "weakAgainst": [
      "sniper",
      "pudge",
      "luna",
      "axe",
      "treant-protector",
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
    "overallWin": 0.477,
    "winByBracket": {
      "herald": 0.485,
      "guardian": 0.48,
      "crusader": 0.482,
      "archon": 0.472,
      "legend": 0.48,
      "ancient": 0.475,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 5048,
      "guardian": 13010,
      "crusader": 19391,
      "archon": 25219,
      "legend": 25713,
      "ancient": 17716,
      "divine": 12358
    },
    "counters": [
      "techies",
      "lich",
      "bristleback",
      "dark-willow",
      "tusk",
      "necrophos"
    ],
    "weakAgainst": [
      "grimstroke",
      "primal-beast",
      "lifestealer",
      "ursa",
      "shadow-demon",
      "queen-of-pain"
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
    "overallWin": 0.485,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.494,
      "crusader": 0.482,
      "archon": 0.48,
      "legend": 0.479,
      "ancient": 0.481,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 4016,
      "guardian": 10518,
      "crusader": 13419,
      "archon": 13395,
      "legend": 10123,
      "ancient": 5390,
      "divine": 3766
    },
    "counters": [
      "hoodwink",
      "pangolier",
      "puck",
      "ursa",
      "pudge",
      "slardar"
    ],
    "weakAgainst": [
      "queen-of-pain",
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
      "Diadem",
      "Manta Style",
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
    "overallWin": 0.427,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.438,
      "crusader": 0.426,
      "archon": 0.421,
      "legend": 0.423,
      "ancient": 0.424,
      "divine": 0.436
    },
    "pickByBracket": {
      "herald": 13215,
      "guardian": 43481,
      "crusader": 70204,
      "archon": 89221,
      "legend": 88653,
      "ancient": 56929,
      "divine": 39542
    },
    "counters": [
      "troll-warlord",
      "pangolier",
      "puck",
      "clockwerk",
      "bristleback",
      "terrorblade"
    ],
    "weakAgainst": [
      "mirana",
      "primal-beast",
      "zeus",
      "timbersaw",
      "juggernaut",
      "enchantress"
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
      "Maelstrom",
      "Hyperstone",
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.537,
      "guardian": 0.526,
      "crusader": 0.519,
      "archon": 0.514,
      "legend": 0.509,
      "ancient": 0.505,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 18371,
      "guardian": 63749,
      "crusader": 110187,
      "archon": 151156,
      "legend": 159851,
      "ancient": 105895,
      "divine": 69869
    },
    "counters": [
      "underlord",
      "witch-doctor",
      "void-spirit",
      "bristleback",
      "dark-willow",
      "earth-spirit"
    ],
    "weakAgainst": [
      "crystal-maiden",
      "windranger",
      "muerta",
      "grimstroke",
      "keeper-of-the-light",
      "beastmaster"
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.489,
      "crusader": 0.498,
      "archon": 0.512,
      "legend": 0.522,
      "ancient": 0.528,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 5595,
      "guardian": 20504,
      "crusader": 39214,
      "archon": 64421,
      "legend": 80956,
      "ancient": 60102,
      "divine": 46236
    },
    "counters": [
      "silencer",
      "ursa",
      "zeus",
      "dark-willow",
      "troll-warlord",
      "storm-spirit"
    ],
    "weakAgainst": [
      "lifestealer",
      "shadow-fiend",
      "invoker",
      "slardar",
      "rubick",
      "beastmaster"
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
      "Black King Bar"
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
      "herald": 0.524,
      "guardian": 0.516,
      "crusader": 0.52,
      "archon": 0.522,
      "legend": 0.522,
      "ancient": 0.526,
      "divine": 0.53
    },
    "pickByBracket": {
      "herald": 5072,
      "guardian": 18490,
      "crusader": 34745,
      "archon": 50547,
      "legend": 57405,
      "ancient": 42230,
      "divine": 28769
    },
    "counters": [
      "void-spirit",
      "bristleback",
      "dark-willow",
      "timbersaw",
      "puck",
      "tidehunter"
    ],
    "weakAgainst": [
      "largo",
      "doom",
      "axe",
      "pangolier",
      "rubick"
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
      "Aghanim's Shard"
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.525,
      "guardian": 0.521,
      "crusader": 0.511,
      "archon": 0.507,
      "legend": 0.502,
      "ancient": 0.495,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 21347,
      "guardian": 76093,
      "crusader": 128380,
      "archon": 167908,
      "legend": 159748,
      "ancient": 92791,
      "divine": 46862
    },
    "counters": [
      "medusa",
      "winter-wyvern",
      "bristleback",
      "zeus",
      "troll-warlord",
      "venomancer"
    ],
    "weakAgainst": [
      "phoenix",
      "pugna",
      "bounty-hunter",
      "treant-protector",
      "alchemist",
      "viper"
    ],
    "startItems": [
      "Tango",
      "Observer and Sentry Wards",
      "Iron Branch",
      "Blood Grenade",
      "Gauntlets of Strength",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Hand of Midas",
      "Pavise",
      "Staff of Wizardry",
      "Solar Crest"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.472,
      "guardian": 0.479,
      "crusader": 0.497,
      "archon": 0.505,
      "legend": 0.508,
      "ancient": 0.516,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 3223,
      "guardian": 9489,
      "crusader": 15049,
      "archon": 19305,
      "legend": 19598,
      "ancient": 13548,
      "divine": 9163
    },
    "counters": [
      "disruptor",
      "shadow-fiend"
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.472,
      "crusader": 0.49,
      "archon": 0.496,
      "legend": 0.508,
      "ancient": 0.514,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 2917,
      "guardian": 10252,
      "crusader": 19464,
      "archon": 29918,
      "legend": 35090,
      "ancient": 26325,
      "divine": 21771
    },
    "counters": [
      "batrider",
      "mars"
    ],
    "weakAgainst": [
      "shadow-fiend",
      "jakiro",
      "rubick"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Magic Stick",
      "Smoke of Deceit"
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
    "overallWin": 0.529,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.496,
      "crusader": 0.515,
      "archon": 0.528,
      "legend": 0.538,
      "ancient": 0.54,
      "divine": 0.538
    },
    "pickByBracket": {
      "herald": 7199,
      "guardian": 23533,
      "crusader": 44704,
      "archon": 70452,
      "legend": 83956,
      "ancient": 62092,
      "divine": 46161
    },
    "counters": [
      "lion"
    ],
    "weakAgainst": [
      "pudge",
      "snapfire",
      "rubick",
      "disruptor",
      "shadow-fiend"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Observer Ward",
      "Mantle of Intelligence",
      "Faerie Fire"
    ],
    "coreItems": [
      "Staff of Wizardry",
      "Blade of Alacrity",
      "Witch Blade",
      "Blink Dagger",
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
    "overallWin": 0.464,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.447,
      "crusader": 0.453,
      "archon": 0.468,
      "legend": 0.467,
      "ancient": 0.465,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 2575,
      "guardian": 8459,
      "crusader": 16787,
      "archon": 27219,
      "legend": 34072,
      "ancient": 28902,
      "divine": 27167
    },
    "counters": [
      "lina",
      "beastmaster",
      "lion",
      "sven",
      "medusa",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "naga-siren",
      "lone-druid",
      "largo",
      "marci",
      "juggernaut",
      "nature-s-prophet"
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
      "Blink Dagger",
      "Diffusal Blade",
      "Blade of Alacrity",
      "Aghanim's Shard",
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.528,
      "guardian": 0.521,
      "crusader": 0.516,
      "archon": 0.514,
      "legend": 0.505,
      "ancient": 0.5,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 24771,
      "guardian": 76457,
      "crusader": 113399,
      "archon": 132078,
      "legend": 112076,
      "ancient": 59215,
      "divine": 27798
    },
    "counters": [
      "dragon-knight",
      "ogre-magi"
    ],
    "weakAgainst": [
      "rubick",
      "lifestealer",
      "pudge",
      "disruptor",
      "luna",
      "ursa"
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
    "overallWin": 0.527,
    "winByBracket": {
      "herald": 0.532,
      "guardian": 0.524,
      "crusader": 0.524,
      "archon": 0.529,
      "legend": 0.527,
      "ancient": 0.529,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 15162,
      "guardian": 49801,
      "crusader": 83339,
      "archon": 109140,
      "legend": 109312,
      "ancient": 72973,
      "divine": 52952
    },
    "counters": [
      "slardar",
      "mars",
      "jakiro",
      "lion"
    ],
    "weakAgainst": [
      "queen-of-pain",
      "hoodwink",
      "rubick",
      "shadow-demon",
      "snapfire",
      "tusk"
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
      "Ogre Axe",
      "Staff of Wizardry",
      "Diadem",
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.52,
      "crusader": 0.515,
      "archon": 0.514,
      "legend": 0.515,
      "ancient": 0.512,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 3386,
      "guardian": 13583,
      "crusader": 28290,
      "archon": 44407,
      "legend": 52206,
      "ancient": 39593,
      "divine": 31919
    },
    "counters": [
      "dark-seer",
      "vengeful-spirit",
      "sand-king",
      "razor",
      "marci",
      "void-spirit"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "magnus",
      "bane",
      "juggernaut",
      "drow-ranger",
      "huskar"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Blood Grenade",
      "Sentry Ward",
      "Smoke of Deceit"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Spirit Vessel",
      "Platemail",
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.481,
      "crusader": 0.487,
      "archon": 0.487,
      "legend": 0.49,
      "ancient": 0.502,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 3160,
      "guardian": 10053,
      "crusader": 17417,
      "archon": 22380,
      "legend": 23336,
      "ancient": 16833,
      "divine": 14249
    },
    "counters": [
      "terrorblade",
      "shadow-shaman",
      "nature-s-prophet",
      "muerta",
      "pugna",
      "weaver"
    ],
    "weakAgainst": [
      "largo",
      "razor",
      "leshrac",
      "shadow-demon",
      "clockwerk",
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
    "overallWin": 0.464,
    "winByBracket": {
      "herald": 0.435,
      "guardian": 0.438,
      "crusader": 0.447,
      "archon": 0.459,
      "legend": 0.463,
      "ancient": 0.475,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 3397,
      "guardian": 10313,
      "crusader": 18417,
      "archon": 26457,
      "legend": 31174,
      "ancient": 23239,
      "divine": 20739
    },
    "counters": [
      "silencer",
      "weaver",
      "dark-willow",
      "invoker",
      "crystal-maiden",
      "razor"
    ],
    "weakAgainst": [
      "naga-siren",
      "nyx-assassin",
      "bane",
      "morphling",
      "nature-s-prophet",
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
      "herald": 0.524,
      "guardian": 0.523,
      "crusader": 0.521,
      "archon": 0.515,
      "legend": 0.51,
      "ancient": 0.503,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 27071,
      "guardian": 103412,
      "crusader": 193300,
      "archon": 268274,
      "legend": 270321,
      "ancient": 176426,
      "divine": 127088
    },
    "counters": [
      "death-prophet",
      "morphling",
      "wraith-king",
      "warlock",
      "clinkz",
      "outworld-devourer"
    ],
    "weakAgainst": [
      "largo",
      "drow-ranger",
      "magnus",
      "earth-spirit",
      "monkey-king",
      "naga-siren"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Gauntlets of Strength",
      "Observer and Sentry Wards",
      "Blood Grenade",
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.487,
      "crusader": 0.494,
      "archon": 0.498,
      "legend": 0.516,
      "ancient": 0.516,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 5457,
      "guardian": 17353,
      "crusader": 27390,
      "archon": 36381,
      "legend": 37794,
      "ancient": 25972,
      "divine": 15369
    },
    "counters": [
      "ogre-magi",
      "storm-spirit",
      "pangolier",
      "queen-of-pain",
      "sven",
      "dark-willow"
    ],
    "weakAgainst": [
      "terrorblade",
      "primal-beast",
      "earthshaker",
      "clockwerk",
      "shadow-fiend",
      "leshrac"
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
      "herald": 0.465,
      "guardian": 0.473,
      "crusader": 0.474,
      "archon": 0.472,
      "legend": 0.473,
      "ancient": 0.468,
      "divine": 0.467
    },
    "pickByBracket": {
      "herald": 8775,
      "guardian": 31039,
      "crusader": 57158,
      "archon": 85839,
      "legend": 95118,
      "ancient": 64106,
      "divine": 40579
    },
    "counters": [
      "phantom-lancer",
      "chaos-knight",
      "medusa",
      "naga-siren",
      "muerta",
      "tinker"
    ],
    "weakAgainst": [
      "largo",
      "keeper-of-the-light",
      "chen",
      "bounty-hunter",
      "treant-protector",
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.504,
      "crusader": 0.497,
      "archon": 0.505,
      "legend": 0.503,
      "ancient": 0.498,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 10034,
      "guardian": 27726,
      "crusader": 41469,
      "archon": 55076,
      "legend": 57827,
      "ancient": 40070,
      "divine": 23761
    },
    "counters": [
      "gyrocopter",
      "primal-beast",
      "skywrath-mage",
      "marci",
      "tidehunter",
      "spirit-breaker"
    ],
    "weakAgainst": [
      "treant-protector",
      "phoenix",
      "dawnbreaker",
      "lion",
      "pudge",
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.518,
      "crusader": 0.52,
      "archon": 0.521,
      "legend": 0.522,
      "ancient": 0.525,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 9521,
      "guardian": 26407,
      "crusader": 39408,
      "archon": 48076,
      "legend": 42849,
      "ancient": 26544,
      "divine": 15056
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.475,
      "crusader": 0.477,
      "archon": 0.479,
      "legend": 0.488,
      "ancient": 0.487,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 3521,
      "guardian": 13053,
      "crusader": 25280,
      "archon": 39361,
      "legend": 48870,
      "ancient": 38098,
      "divine": 33043
    },
    "counters": [
      "skywrath-mage",
      "vengeful-spirit",
      "brewmaster",
      "medusa",
      "silencer",
      "dark-willow"
    ],
    "weakAgainst": [
      "alchemist",
      "chen",
      "grimstroke",
      "keeper-of-the-light",
      "treant-protector",
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.492,
      "crusader": 0.493,
      "archon": 0.499,
      "legend": 0.496,
      "ancient": 0.503,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 12348,
      "guardian": 49869,
      "crusader": 104195,
      "archon": 174328,
      "legend": 219417,
      "ancient": 168869,
      "divine": 121924
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
      "abaddon",
      "leshrac",
      "lycan",
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
      "Force Staff"
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.506,
      "crusader": 0.499,
      "archon": 0.493,
      "legend": 0.478,
      "ancient": 0.477,
      "divine": 0.463
    },
    "pickByBracket": {
      "herald": 6323,
      "guardian": 19810,
      "crusader": 30815,
      "archon": 39466,
      "legend": 37671,
      "ancient": 23217,
      "divine": 13179
    },
    "counters": [
      "templar-assassin",
      "lion",
      "ursa",
      "void-spirit",
      "sven",
      "underlord"
    ],
    "weakAgainst": [
      "warlock",
      "phoenix",
      "alchemist",
      "luna",
      "abaddon",
      "bristleback"
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
    "overallWin": 0.449,
    "winByBracket": {
      "herald": 0.42,
      "guardian": 0.424,
      "crusader": 0.437,
      "archon": 0.448,
      "legend": 0.455,
      "ancient": 0.458,
      "divine": 0.463
    },
    "pickByBracket": {
      "herald": 2491,
      "guardian": 7050,
      "crusader": 12255,
      "archon": 17630,
      "legend": 20945,
      "ancient": 15686,
      "divine": 12486
    },
    "counters": [
      "medusa",
      "weaver",
      "kunkka",
      "tinker",
      "dazzle",
      "phantom-lancer"
    ],
    "weakAgainst": [
      "alchemist",
      "grimstroke",
      "naga-siren",
      "monkey-king",
      "zeus",
      "techies"
    ],
    "startItems": [
      "Iron Branch",
      "Blood Grenade",
      "Tango",
      "Observer and Sentry Wards",
      "Faerie Fire",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Blink Dagger",
      "Aghanim's Shard",
      "Glimmer Cape",
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
      "herald": 0.484,
      "guardian": 0.487,
      "crusader": 0.487,
      "archon": 0.484,
      "legend": 0.481,
      "ancient": 0.479,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 24230,
      "guardian": 81863,
      "crusader": 145790,
      "archon": 206972,
      "legend": 223963,
      "ancient": 155371,
      "divine": 113129
    },
    "counters": [
      "night-stalker",
      "pugna",
      "medusa",
      "oracle",
      "void-spirit",
      "sven"
    ],
    "weakAgainst": [
      "enigma",
      "lone-druid",
      "alchemist",
      "phoenix",
      "venomancer",
      "monkey-king"
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
      "herald": 0.52,
      "guardian": 0.515,
      "crusader": 0.518,
      "archon": 0.518,
      "legend": 0.518,
      "ancient": 0.518,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 20347,
      "guardian": 67986,
      "crusader": 110052,
      "archon": 143726,
      "legend": 140780,
      "ancient": 86616,
      "divine": 47292
    },
    "counters": [
      "medusa",
      "troll-warlord",
      "kunkka",
      "chaos-knight",
      "razor",
      "bristleback"
    ],
    "weakAgainst": [
      "undying",
      "dawnbreaker",
      "hoodwink",
      "marci",
      "primal-beast",
      "beastmaster"
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.517,
      "crusader": 0.509,
      "archon": 0.505,
      "legend": 0.501,
      "ancient": 0.496,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 10634,
      "guardian": 40882,
      "crusader": 72791,
      "archon": 100545,
      "legend": 100996,
      "ancient": 61341,
      "divine": 33663
    },
    "counters": [
      "lina",
      "timbersaw",
      "dark-willow",
      "chaos-knight",
      "vengeful-spirit",
      "medusa"
    ],
    "weakAgainst": [
      "largo",
      "keeper-of-the-light",
      "spirit-breaker",
      "puck",
      "viper",
      "night-stalker"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.502,
      "crusader": 0.506,
      "archon": 0.501,
      "legend": 0.5,
      "ancient": 0.495,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 15516,
      "guardian": 52079,
      "crusader": 85819,
      "archon": 110914,
      "legend": 110539,
      "ancient": 69402,
      "divine": 44002
    },
    "counters": [
      "faceless-void",
      "witch-doctor",
      "ancient-apparition",
      "death-prophet",
      "dragon-knight",
      "necrophos"
    ],
    "weakAgainst": [
      "treant-protector",
      "monkey-king",
      "dazzle",
      "clinkz",
      "phoenix",
      "magnus"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.509,
      "crusader": 0.506,
      "archon": 0.503,
      "legend": 0.501,
      "ancient": 0.492,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 10064,
      "guardian": 34439,
      "crusader": 56947,
      "archon": 77135,
      "legend": 79252,
      "ancient": 53344,
      "divine": 34798
    },
    "counters": [
      "grimstroke",
      "weaver",
      "lifestealer",
      "underlord",
      "drow-ranger",
      "viper"
    ],
    "weakAgainst": [
      "mirana",
      "phantom-lancer",
      "dark-seer",
      "death-prophet",
      "vengeful-spirit",
      "earth-spirit"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.51,
      "crusader": 0.501,
      "archon": 0.492,
      "legend": 0.493,
      "ancient": 0.501,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 10115,
      "guardian": 35802,
      "crusader": 63501,
      "archon": 92655,
      "legend": 102747,
      "ancient": 71844,
      "divine": 47785
    },
    "counters": [
      "warlock",
      "puck",
      "beastmaster",
      "hoodwink",
      "tidehunter",
      "void-spirit"
    ],
    "weakAgainst": [
      "leshrac",
      "spirit-breaker",
      "treant-protector",
      "snapfire",
      "shadow-demon",
      "lion"
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
      "Ogre Axe",
      "Diffusal Blade",
      "Blade of Alacrity",
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.483,
      "crusader": 0.49,
      "archon": 0.493,
      "legend": 0.489,
      "ancient": 0.489,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 8193,
      "guardian": 30122,
      "crusader": 59088,
      "archon": 96613,
      "legend": 118931,
      "ancient": 91546,
      "divine": 66084
    },
    "counters": [
      "tinker",
      "winter-wyvern",
      "witch-doctor",
      "death-prophet",
      "ancient-apparition",
      "outworld-devourer"
    ],
    "weakAgainst": [
      "clinkz",
      "bounty-hunter",
      "treant-protector",
      "bane",
      "io",
      "keeper-of-the-light"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Blood Grenade",
      "Observer and Sentry Wards"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.512,
      "crusader": 0.507,
      "archon": 0.5,
      "legend": 0.495,
      "ancient": 0.487,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 29729,
      "guardian": 96120,
      "crusader": 156765,
      "archon": 204278,
      "legend": 193911,
      "ancient": 106777,
      "divine": 49052
    },
    "counters": [
      "witch-doctor",
      "morphling",
      "lich",
      "grimstroke",
      "sven",
      "bristleback"
    ],
    "weakAgainst": [
      "ember-spirit",
      "doom",
      "crystal-maiden",
      "nature-s-prophet",
      "axe",
      "earthshaker"
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
    "overallWin": 0.54,
    "winByBracket": {
      "herald": 0.558,
      "guardian": 0.548,
      "crusader": 0.543,
      "archon": 0.539,
      "legend": 0.54,
      "ancient": 0.537,
      "divine": 0.534
    },
    "pickByBracket": {
      "herald": 12701,
      "guardian": 48447,
      "crusader": 85966,
      "archon": 117058,
      "legend": 120577,
      "ancient": 78462,
      "divine": 48391
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.517,
      "crusader": 0.517,
      "archon": 0.52,
      "legend": 0.52,
      "ancient": 0.523,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 18977,
      "guardian": 62374,
      "crusader": 104084,
      "archon": 142474,
      "legend": 150181,
      "ancient": 100821,
      "divine": 68428
    },
    "counters": [
      "ancient-apparition",
      "clinkz",
      "death-prophet",
      "silencer",
      "dawnbreaker",
      "slark"
    ],
    "weakAgainst": [
      "treant-protector",
      "keeper-of-the-light",
      "drow-ranger",
      "huskar",
      "razor",
      "largo"
    ],
    "startItems": [
      "Tango",
      "Boots of Speed",
      "Sentry Ward",
      "Blood Grenade",
      "Iron Branch",
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
    "overallWin": 0.464,
    "winByBracket": {
      "herald": 0.465,
      "guardian": 0.46,
      "crusader": 0.456,
      "archon": 0.461,
      "legend": 0.466,
      "ancient": 0.467,
      "divine": 0.471
    },
    "pickByBracket": {
      "herald": 6857,
      "guardian": 21470,
      "crusader": 37025,
      "archon": 51383,
      "legend": 57112,
      "ancient": 42539,
      "divine": 32135
    },
    "counters": [
      "templar-assassin",
      "medusa",
      "death-prophet",
      "queen-of-pain",
      "sand-king",
      "techies"
    ],
    "weakAgainst": [
      "mirana",
      "chen",
      "treant-protector",
      "huskar",
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
      "Kaya",
      "Staff of Wizardry",
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
      "crusader": 0.504,
      "archon": 0.506,
      "legend": 0.508,
      "ancient": 0.509,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 10595,
      "guardian": 34061,
      "crusader": 55187,
      "archon": 73541,
      "legend": 77140,
      "ancient": 54300,
      "divine": 40157
    },
    "counters": [
      "skywrath-mage",
      "dark-seer",
      "zeus",
      "ember-spirit",
      "axe",
      "lina"
    ],
    "weakAgainst": [
      "lich",
      "earthshaker",
      "lion",
      "gyrocopter",
      "dawnbreaker",
      "sniper"
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
      "herald": 0.514,
      "guardian": 0.514,
      "crusader": 0.506,
      "archon": 0.507,
      "legend": 0.504,
      "ancient": 0.499,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 14328,
      "guardian": 49175,
      "crusader": 81939,
      "archon": 107173,
      "legend": 106809,
      "ancient": 69352,
      "divine": 46357
    },
    "counters": [
      "viper",
      "disruptor",
      "crystal-maiden",
      "undying",
      "shadow-demon",
      "luna"
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
      "Faerie Fire",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Staff of Wizardry",
      "Glimmer Cape",
      "Pavise",
      "Force Staff"
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
    "overallWin": 0.454,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.45,
      "crusader": 0.455,
      "archon": 0.454,
      "legend": 0.455,
      "ancient": 0.459,
      "divine": 0.449
    },
    "pickByBracket": {
      "herald": 6929,
      "guardian": 21388,
      "crusader": 35847,
      "archon": 47148,
      "legend": 47567,
      "ancient": 31952,
      "divine": 20948
    },
    "counters": [
      "kunkka",
      "weaver",
      "clinkz",
      "sven",
      "troll-warlord",
      "lion"
    ],
    "weakAgainst": [
      "treant-protector",
      "bristleback",
      "grimstroke",
      "monkey-king",
      "sand-king",
      "largo"
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
      "Blink Dagger",
      "Desolator",
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
    "overallWin": 0.468,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.468,
      "crusader": 0.465,
      "archon": 0.462,
      "legend": 0.468,
      "ancient": 0.47,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 6518,
      "guardian": 19386,
      "crusader": 30752,
      "archon": 40013,
      "legend": 40330,
      "ancient": 29714,
      "divine": 28691
    },
    "counters": [
      "bristleback",
      "medusa",
      "pugna",
      "void-spirit",
      "dragon-knight",
      "lycan"
    ],
    "weakAgainst": [
      "dark-seer",
      "abaddon",
      "centaur-warrunner",
      "primal-beast",
      "morphling",
      "axe"
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
      "herald": 0.5,
      "guardian": 0.502,
      "crusader": 0.504,
      "archon": 0.501,
      "legend": 0.495,
      "ancient": 0.496,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 7732,
      "guardian": 26462,
      "crusader": 47837,
      "archon": 67984,
      "legend": 72824,
      "ancient": 48396,
      "divine": 30649
    },
    "counters": [
      "faceless-void",
      "undying",
      "necrophos",
      "sniper",
      "templar-assassin",
      "mirana"
    ],
    "weakAgainst": [
      "clockwerk",
      "treant-protector",
      "huskar",
      "keeper-of-the-light",
      "ember-spirit",
      "razor"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Circlet",
      "Faerie Fire",
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
    "overallWin": 0.451,
    "winByBracket": {
      "herald": 0.455,
      "guardian": 0.452,
      "crusader": 0.453,
      "archon": 0.453,
      "legend": 0.448,
      "ancient": 0.448,
      "divine": 0.452
    },
    "pickByBracket": {
      "herald": 5218,
      "guardian": 17134,
      "crusader": 29788,
      "archon": 42050,
      "legend": 45926,
      "ancient": 33097,
      "divine": 26503
    },
    "counters": [
      "lina",
      "lifestealer",
      "witch-doctor",
      "earthshaker",
      "morphling",
      "nature-s-prophet"
    ],
    "weakAgainst": [
      "bane",
      "nyx-assassin",
      "alchemist",
      "earth-spirit",
      "largo",
      "bounty-hunter"
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.454,
      "crusader": 0.454,
      "archon": 0.462,
      "legend": 0.476,
      "ancient": 0.483,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 5617,
      "guardian": 18551,
      "crusader": 31011,
      "archon": 42001,
      "legend": 43334,
      "ancient": 30315,
      "divine": 22001
    },
    "counters": [
      "invoker",
      "ogre-magi",
      "disruptor",
      "dragon-knight"
    ],
    "weakAgainst": [
      "snapfire",
      "shadow-demon",
      "queen-of-pain",
      "pudge",
      "shadow-fiend",
      "lion"
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
    "overallWin": 0.442,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.455,
      "crusader": 0.442,
      "archon": 0.44,
      "legend": 0.442,
      "ancient": 0.438,
      "divine": 0.442
    },
    "pickByBracket": {
      "herald": 6418,
      "guardian": 18301,
      "crusader": 28451,
      "archon": 37132,
      "legend": 40425,
      "ancient": 30221,
      "divine": 25123
    },
    "counters": [
      "weaver",
      "bristleback",
      "sven",
      "void-spirit",
      "mars",
      "leshrac"
    ],
    "weakAgainst": [
      "bane",
      "kez",
      "chen",
      "kunkka",
      "wraith-king",
      "treant-protector"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Tango",
      "Magic Stick",
      "Quelling Blade",
      "Faerie Fire"
    ],
    "coreItems": [
      "Echo Sabre",
      "Blink Dagger",
      "Ogre Axe",
      "Blitz Knuckles",
      "Claymore"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.483,
      "crusader": 0.487,
      "archon": 0.493,
      "legend": 0.495,
      "ancient": 0.505,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 5375,
      "guardian": 18936,
      "crusader": 34677,
      "archon": 49615,
      "legend": 56547,
      "ancient": 43302,
      "divine": 43965
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
    "overallWin": 0.515,
    "winByBracket": {
      "herald": 0.53,
      "guardian": 0.523,
      "crusader": 0.517,
      "archon": 0.515,
      "legend": 0.514,
      "ancient": 0.505,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 6837,
      "guardian": 16705,
      "crusader": 22006,
      "archon": 23928,
      "legend": 20914,
      "ancient": 12733,
      "divine": 7934
    },
    "counters": [
      "silencer",
      "sven",
      "lifestealer",
      "shadow-fiend",
      "queen-of-pain",
      "pugna"
    ],
    "weakAgainst": [
      "abaddon",
      "nature-s-prophet",
      "leshrac",
      "pudge",
      "sniper",
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
      "herald": 0.456,
      "guardian": 0.458,
      "crusader": 0.464,
      "archon": 0.471,
      "legend": 0.481,
      "ancient": 0.496,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 4357,
      "guardian": 15438,
      "crusader": 29109,
      "archon": 45992,
      "legend": 58457,
      "ancient": 49816,
      "divine": 45113
    },
    "counters": [
      "vengeful-spirit",
      "ancient-apparition",
      "death-prophet",
      "lifestealer",
      "magnus",
      "lycan"
    ],
    "weakAgainst": [
      "treant-protector",
      "broodmother",
      "venomancer",
      "muerta",
      "bane",
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
      "Arcane Boots",
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.519,
      "guardian": 0.524,
      "crusader": 0.515,
      "archon": 0.507,
      "legend": 0.498,
      "ancient": 0.49,
      "divine": 0.476
    },
    "pickByBracket": {
      "herald": 6743,
      "guardian": 29248,
      "crusader": 62463,
      "archon": 105660,
      "legend": 129913,
      "ancient": 94964,
      "divine": 68011
    },
    "counters": [
      "ancient-apparition",
      "abaddon",
      "templar-assassin",
      "batrider",
      "mars",
      "kunkka"
    ],
    "weakAgainst": [
      "treant-protector",
      "necrophos",
      "drow-ranger",
      "mirana",
      "lone-druid",
      "monkey-king"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Tango",
      "Magic Stick",
      "Quelling Blade",
      "Enchanted Mango"
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
    "overallWin": 0.507,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.511,
      "crusader": 0.512,
      "archon": 0.511,
      "legend": 0.508,
      "ancient": 0.503,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 13491,
      "guardian": 51833,
      "crusader": 95747,
      "archon": 138223,
      "legend": 149408,
      "ancient": 102076,
      "divine": 74149
    },
    "counters": [
      "shadow-shaman",
      "invoker",
      "dragon-knight",
      "lion",
      "silencer",
      "warlock"
    ],
    "weakAgainst": [
      "monkey-king",
      "treant-protector",
      "jakiro",
      "marci",
      "ember-spirit",
      "rubick"
    ],
    "startItems": [
      "Iron Branch",
      "Enchanted Mango",
      "Gauntlets of Strength",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Tango"
    ],
    "coreItems": [
      "Aghanim's Shard",
      "Point Booster",
      "Vitality Booster",
      "Blink Dagger",
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.458,
      "crusader": 0.469,
      "archon": 0.473,
      "legend": 0.472,
      "ancient": 0.476,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 7915,
      "guardian": 22548,
      "crusader": 35873,
      "archon": 47940,
      "legend": 50489,
      "ancient": 33270,
      "divine": 19942
    },
    "counters": [
      "underlord",
      "grimstroke",
      "timbersaw",
      "muerta",
      "dark-willow",
      "phantom-assassin"
    ],
    "weakAgainst": [
      "chen",
      "treant-protector",
      "bounty-hunter",
      "naga-siren",
      "alchemist",
      "marci"
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
      "Battle Fury",
      "Blink Dagger",
      "Mithril Hammer",
      "Ogre Axe"
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
    "overallWin": 0.529,
    "winByBracket": {
      "herald": 0.537,
      "guardian": 0.534,
      "crusader": 0.536,
      "archon": 0.535,
      "legend": 0.526,
      "ancient": 0.524,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 11443,
      "guardian": 40334,
      "crusader": 72104,
      "archon": 104231,
      "legend": 112947,
      "ancient": 73185,
      "divine": 40020
    },
    "counters": [
      "slardar",
      "lich",
      "underlord",
      "lina",
      "shadow-shaman",
      "disruptor"
    ],
    "weakAgainst": [
      "phoenix",
      "tusk",
      "dawnbreaker",
      "beastmaster",
      "lifestealer",
      "ring-master"
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.477,
      "crusader": 0.473,
      "archon": 0.478,
      "legend": 0.474,
      "ancient": 0.466,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 9932,
      "guardian": 32174,
      "crusader": 53835,
      "archon": 69874,
      "legend": 66611,
      "ancient": 38322,
      "divine": 19224
    },
    "counters": [
      "clockwerk",
      "dragon-knight",
      "warlock",
      "dawnbreaker",
      "tusk",
      "weaver"
    ],
    "weakAgainst": [
      "ember-spirit",
      "invoker",
      "batrider",
      "pudge",
      "doom",
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.479,
      "crusader": 0.479,
      "archon": 0.483,
      "legend": 0.485,
      "ancient": 0.483,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 17338,
      "guardian": 44692,
      "crusader": 61154,
      "archon": 70183,
      "legend": 62589,
      "ancient": 36011,
      "divine": 20845
    },
    "counters": [
      "bristleback",
      "silencer",
      "ancient-apparition",
      "morphling",
      "dragon-knight",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "techies",
      "bane",
      "dazzle",
      "slardar",
      "treant-protector",
      "lina"
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
      "herald": 0.484,
      "guardian": 0.503,
      "crusader": 0.502,
      "archon": 0.528,
      "legend": 0.54,
      "ancient": 0.546,
      "divine": 0.558
    },
    "pickByBracket": {
      "herald": 1995,
      "guardian": 6003,
      "crusader": 9535,
      "archon": 11988,
      "legend": 12518,
      "ancient": 9121,
      "divine": 8258
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.484,
      "crusader": 0.495,
      "archon": 0.498,
      "legend": 0.503,
      "ancient": 0.499,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 4197,
      "guardian": 12893,
      "crusader": 22721,
      "archon": 33541,
      "legend": 39239,
      "ancient": 31128,
      "divine": 26030
    },
    "counters": [
      "zeus",
      "weaver",
      "earthshaker",
      "shadow-shaman",
      "leshrac",
      "dragon-knight"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "necrophos",
      "treant-protector",
      "phoenix",
      "ember-spirit",
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
      "Spirit Vessel",
      "Ogre Axe",
      "Blade of Alacrity"
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.505,
      "crusader": 0.502,
      "archon": 0.498,
      "legend": 0.492,
      "ancient": 0.486,
      "divine": 0.46
    },
    "pickByBracket": {
      "herald": 7195,
      "guardian": 25263,
      "crusader": 41876,
      "archon": 55767,
      "legend": 53467,
      "ancient": 31430,
      "divine": 16442
    },
    "counters": [
      "sand-king",
      "troll-warlord",
      "grimstroke",
      "ancient-apparition",
      "techies",
      "sniper"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "treant-protector",
      "slark",
      "venomancer",
      "pudge",
      "bane"
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
    "overallWin": 0.469,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.471,
      "crusader": 0.467,
      "archon": 0.468,
      "legend": 0.47,
      "ancient": 0.466,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 10069,
      "guardian": 26680,
      "crusader": 38330,
      "archon": 47354,
      "legend": 44818,
      "ancient": 27380,
      "divine": 17625
    },
    "counters": [
      "gyrocopter",
      "ancient-apparition",
      "leshrac",
      "brewmaster",
      "queen-of-pain",
      "sven"
    ],
    "weakAgainst": [
      "morphling",
      "monkey-king",
      "tiny",
      "puck",
      "rubick",
      "shadow-demon"
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
      "Desolator",
      "Dragon Lance"
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.487,
      "crusader": 0.481,
      "archon": 0.48,
      "legend": 0.482,
      "ancient": 0.487,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 19130,
      "guardian": 61134,
      "crusader": 103000,
      "archon": 145018,
      "legend": 160281,
      "ancient": 113698,
      "divine": 83249
    },
    "counters": [
      "grimstroke",
      "chaos-knight",
      "weaver",
      "necrophos",
      "morphling",
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
      "Tango",
      "Circlet",
      "Faerie Fire",
      "Blood Grenade",
      "Sentry Ward"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Maelstrom",
      "Ogre Axe",
      "Essence Distiller",
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.488,
      "crusader": 0.491,
      "archon": 0.494,
      "legend": 0.502,
      "ancient": 0.51,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 5997,
      "guardian": 21033,
      "crusader": 37827,
      "archon": 53663,
      "legend": 61356,
      "ancient": 47883,
      "divine": 47452
    },
    "counters": [
      "underlord",
      "dark-willow",
      "void-spirit",
      "slardar",
      "undying",
      "centaur-warrunner"
    ],
    "weakAgainst": [
      "ogre-magi",
      "snapfire",
      "doom",
      "beastmaster",
      "axe",
      "ember-spirit"
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
      "Staff of Wizardry",
      "Glimmer Cape",
      "Power Treads"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.531,
      "crusader": 0.526,
      "archon": 0.523,
      "legend": 0.516,
      "ancient": 0.511,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 18182,
      "guardian": 66835,
      "crusader": 115566,
      "archon": 155634,
      "legend": 150778,
      "ancient": 87510,
      "divine": 43074
    },
    "counters": [
      "lich",
      "tiny",
      "tidehunter",
      "ursa",
      "shadow-fiend",
      "axe"
    ],
    "weakAgainst": [
      "sniper",
      "necrophos",
      "ember-spirit",
      "timbersaw",
      "snapfire",
      "skywrath-mage"
    ],
    "startItems": [
      "Iron Branch",
      "Blood Grenade",
      "Tango",
      "Smoke of Deceit",
      "Faerie Fire",
      "Observer and Sentry Wards"
    ],
    "coreItems": [
      "Arcane Boots",
      "Glimmer Cape",
      "Blink Dagger",
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
    "overallWin": 0.546,
    "winByBracket": {
      "herald": 0.558,
      "guardian": 0.554,
      "crusader": 0.557,
      "archon": 0.547,
      "legend": 0.542,
      "ancient": 0.537,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 14350,
      "guardian": 50551,
      "crusader": 87860,
      "archon": 122112,
      "legend": 121299,
      "ancient": 72075,
      "divine": 33121
    },
    "counters": [
      "zeus",
      "lion",
      "tiny",
      "templar-assassin",
      "shadow-shaman",
      "mars"
    ],
    "weakAgainst": [
      "earthshaker",
      "pudge",
      "snapfire",
      "invoker",
      "crystal-maiden",
      "axe"
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
      "herald": 0.495,
      "guardian": 0.501,
      "crusader": 0.504,
      "archon": 0.503,
      "legend": 0.499,
      "ancient": 0.493,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 16757,
      "guardian": 54373,
      "crusader": 90686,
      "archon": 124919,
      "legend": 128445,
      "ancient": 82559,
      "divine": 50595
    },
    "counters": [
      "nature-s-prophet",
      "slardar",
      "vengeful-spirit",
      "medusa",
      "pangolier",
      "gyrocopter"
    ],
    "weakAgainst": [
      "juggernaut",
      "void-spirit",
      "wraith-king",
      "beastmaster",
      "night-stalker",
      "sniper"
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
