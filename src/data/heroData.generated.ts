// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-07-06
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
      "herald": 0.517,
      "guardian": 0.517,
      "crusader": 0.508,
      "archon": 0.514,
      "legend": 0.511,
      "ancient": 0.513,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 13014,
      "guardian": 32275,
      "crusader": 39576,
      "archon": 38497,
      "legend": 29416,
      "ancient": 18121,
      "divine": 14451
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
      "herald": 0.485,
      "guardian": 0.475,
      "crusader": 0.475,
      "archon": 0.472,
      "legend": 0.464,
      "ancient": 0.46,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 9851,
      "guardian": 27952,
      "crusader": 35205,
      "archon": 35360,
      "legend": 27038,
      "ancient": 16570,
      "divine": 13597
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.514,
      "crusader": 0.517,
      "archon": 0.514,
      "legend": 0.509,
      "ancient": 0.502,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 14249,
      "guardian": 38137,
      "crusader": 48470,
      "archon": 47300,
      "legend": 35988,
      "ancient": 22505,
      "divine": 18455
    },
    "counters": [
      "mars",
      "disruptor",
      "marci",
      "earthshaker",
      "hoodwink",
      "clockwerk"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "underlord",
      "clinkz",
      "largo",
      "tusk",
      "viper"
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
      "Glimmer Cape",
      "Aghanim's Shard"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.501,
      "crusader": 0.504,
      "archon": 0.499,
      "legend": 0.498,
      "ancient": 0.496,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 28830,
      "guardian": 77904,
      "crusader": 91176,
      "archon": 81174,
      "legend": 57083,
      "ancient": 33472,
      "divine": 27606
    },
    "counters": [
      "sven",
      "lich",
      "silencer",
      "dragon-knight",
      "mars",
      "dark-willow"
    ],
    "weakAgainst": [
      "timbersaw",
      "ember-spirit",
      "abaddon",
      "templar-assassin",
      "jakiro",
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
      "herald": 0.482,
      "guardian": 0.489,
      "crusader": 0.504,
      "archon": 0.51,
      "legend": 0.512,
      "ancient": 0.514,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 8566,
      "guardian": 22824,
      "crusader": 26223,
      "archon": 22766,
      "legend": 15632,
      "ancient": 9836,
      "divine": 9821
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.543,
      "guardian": 0.536,
      "crusader": 0.529,
      "archon": 0.527,
      "legend": 0.517,
      "ancient": 0.515,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 35913,
      "guardian": 101385,
      "crusader": 129024,
      "archon": 128170,
      "legend": 99174,
      "ancient": 63565,
      "divine": 60272
    },
    "counters": [
      "morphling",
      "death-prophet",
      "winter-wyvern",
      "faceless-void",
      "drow-ranger",
      "techies"
    ],
    "weakAgainst": [
      "bane",
      "naga-siren",
      "lycan",
      "chen",
      "treant-protector",
      "abaddon"
    ],
    "startItems": [
      "Iron Branch",
      "Gauntlets of Strength",
      "Ring of Protection",
      "Tango",
      "Magic Stick",
      "Quelling Blade"
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
      "herald": 0.472,
      "guardian": 0.483,
      "crusader": 0.492,
      "archon": 0.504,
      "legend": 0.504,
      "ancient": 0.509,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 8395,
      "guardian": 22549,
      "crusader": 27930,
      "archon": 27075,
      "legend": 22151,
      "ancient": 14828,
      "divine": 16531
    },
    "counters": [
      "axe",
      "bristleback",
      "templar-assassin",
      "sven",
      "tiny",
      "earthshaker"
    ],
    "weakAgainst": [
      "monkey-king",
      "skywrath-mage",
      "mars",
      "primal-beast",
      "ogre-magi",
      "beastmaster"
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
      "Aether Lens",
      "Arcane Boots",
      "Blink Dagger",
      "Ghost Scepter",
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
    "overallWin": 0.42,
    "winByBracket": {
      "herald": 0.425,
      "guardian": 0.408,
      "crusader": 0.416,
      "archon": 0.415,
      "legend": 0.422,
      "ancient": 0.43,
      "divine": 0.439
    },
    "pickByBracket": {
      "herald": 3530,
      "guardian": 9969,
      "crusader": 11995,
      "archon": 11444,
      "legend": 8966,
      "ancient": 6028,
      "divine": 5895
    },
    "counters": [
      "death-prophet",
      "vengeful-spirit",
      "crystal-maiden",
      "bristleback",
      "beastmaster",
      "hoodwink"
    ],
    "weakAgainst": [
      "oracle",
      "naga-siren",
      "templar-assassin",
      "marci",
      "sniper",
      "chen"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Faerie Fire",
      "Blood Grenade",
      "Magic Stick"
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
    "overallWin": 0.431,
    "winByBracket": {
      "herald": 0.439,
      "guardian": 0.428,
      "crusader": 0.427,
      "archon": 0.428,
      "legend": 0.428,
      "ancient": 0.438,
      "divine": 0.446
    },
    "pickByBracket": {
      "herald": 7621,
      "guardian": 20626,
      "crusader": 24604,
      "archon": 22131,
      "legend": 16498,
      "ancient": 10453,
      "divine": 10471
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.528,
      "crusader": 0.524,
      "archon": 0.519,
      "legend": 0.522,
      "ancient": 0.515,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 18356,
      "guardian": 34921,
      "crusader": 32190,
      "archon": 25535,
      "legend": 16718,
      "ancient": 9333,
      "divine": 6677
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
      "herald": 0.481,
      "guardian": 0.497,
      "crusader": 0.502,
      "archon": 0.515,
      "legend": 0.525,
      "ancient": 0.528,
      "divine": 0.554
    },
    "pickByBracket": {
      "herald": 12874,
      "guardian": 29690,
      "crusader": 32378,
      "archon": 30182,
      "legend": 23792,
      "ancient": 15445,
      "divine": 17082
    },
    "counters": [
      "dragon-knight",
      "timbersaw",
      "snapfire",
      "queen-of-pain",
      "pangolier",
      "ursa"
    ],
    "weakAgainst": [
      "ember-spirit",
      "tusk",
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.49,
      "crusader": 0.484,
      "archon": 0.497,
      "legend": 0.499,
      "ancient": 0.508,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 3028,
      "guardian": 7421,
      "crusader": 9439,
      "archon": 9521,
      "legend": 8208,
      "ancient": 6052,
      "divine": 6980
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
      "invoker",
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.539,
      "guardian": 0.514,
      "crusader": 0.494,
      "archon": 0.48,
      "legend": 0.471,
      "ancient": 0.465,
      "divine": 0.459
    },
    "pickByBracket": {
      "herald": 30637,
      "guardian": 67347,
      "crusader": 67953,
      "archon": 55583,
      "legend": 36739,
      "ancient": 20809,
      "divine": 17543
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.494,
      "crusader": 0.494,
      "archon": 0.504,
      "legend": 0.502,
      "ancient": 0.499,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 8185,
      "guardian": 16311,
      "crusader": 15785,
      "archon": 12077,
      "legend": 7957,
      "ancient": 4393,
      "divine": 4628
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.516,
      "guardian": 0.507,
      "crusader": 0.504,
      "archon": 0.506,
      "legend": 0.503,
      "ancient": 0.509,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 9310,
      "guardian": 26347,
      "crusader": 36228,
      "archon": 38612,
      "legend": 32183,
      "ancient": 20572,
      "divine": 20216
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
      "herald": 0.523,
      "guardian": 0.514,
      "crusader": 0.508,
      "archon": 0.503,
      "legend": 0.496,
      "ancient": 0.501,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 16740,
      "guardian": 36908,
      "crusader": 37696,
      "archon": 30896,
      "legend": 20810,
      "ancient": 11598,
      "divine": 8671
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
      "abaddon"
    ],
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
    "overallWin": 0.453,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.442,
      "crusader": 0.433,
      "archon": 0.454,
      "legend": 0.451,
      "ancient": 0.47,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 1220,
      "guardian": 2764,
      "crusader": 3025,
      "archon": 2869,
      "legend": 2138,
      "ancient": 1421,
      "divine": 1667
    },
    "counters": [
      "dawnbreaker",
      "storm-spirit",
      "bristleback",
      "ring-master",
      "disruptor",
      "axe"
    ],
    "weakAgainst": [
      "nature-s-prophet"
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.487,
      "crusader": 0.489,
      "archon": 0.491,
      "legend": 0.499,
      "ancient": 0.506,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 17619,
      "guardian": 33696,
      "crusader": 32441,
      "archon": 26655,
      "legend": 18676,
      "ancient": 12029,
      "divine": 11673
    },
    "counters": [
      "ancient-apparition",
      "clockwerk",
      "skywrath-mage",
      "snapfire",
      "dragon-knight",
      "tidehunter"
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
      "Magic Wand",
      "Tango",
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.475,
      "crusader": 0.475,
      "archon": 0.48,
      "legend": 0.489,
      "ancient": 0.498,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 6188,
      "guardian": 17952,
      "crusader": 24417,
      "archon": 27071,
      "legend": 24064,
      "ancient": 17570,
      "divine": 20754
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
      "venomancer",
      "clinkz",
      "monkey-king",
      "beastmaster",
      "leshrac",
      "viper"
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
      "Pavise",
      "Blink Dagger",
      "Essence Distiller",
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.535,
      "guardian": 0.528,
      "crusader": 0.519,
      "archon": 0.515,
      "legend": 0.505,
      "ancient": 0.503,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 31480,
      "guardian": 76655,
      "crusader": 87115,
      "archon": 80387,
      "legend": 59389,
      "ancient": 36840,
      "divine": 31806
    },
    "counters": [
      "drow-ranger",
      "sniper",
      "pugna",
      "chaos-knight",
      "luna",
      "slardar"
    ],
    "weakAgainst": [
      "razor",
      "batrider",
      "mirana",
      "keeper-of-the-light",
      "puck",
      "kunkka"
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.502,
      "guardian": 0.478,
      "crusader": 0.483,
      "archon": 0.479,
      "legend": 0.487,
      "ancient": 0.496,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 5696,
      "guardian": 14542,
      "crusader": 17861,
      "archon": 17878,
      "legend": 15333,
      "ancient": 10683,
      "divine": 11758
    },
    "counters": [
      "terrorblade",
      "puck",
      "tusk",
      "queen-of-pain",
      "ogre-magi",
      "slardar"
    ],
    "weakAgainst": [
      "phoenix",
      "clockwerk",
      "templar-assassin",
      "marci",
      "ember-spirit",
      "sven"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Circlet",
      "Clarity",
      "Magic Stick",
      "Gauntlets of Strength"
    ],
    "coreItems": [
      "Guardian Greaves",
      "Platemail",
      "Mekansm",
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.462,
      "guardian": 0.467,
      "crusader": 0.468,
      "archon": 0.473,
      "legend": 0.478,
      "ancient": 0.49,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 12052,
      "guardian": 28897,
      "crusader": 34717,
      "archon": 34424,
      "legend": 27479,
      "ancient": 18539,
      "divine": 19213
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
      "beastmaster",
      "terrorblade",
      "phantom-lancer"
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
      "herald": 0.503,
      "guardian": 0.516,
      "crusader": 0.514,
      "archon": 0.52,
      "legend": 0.515,
      "ancient": 0.515,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 11605,
      "guardian": 35089,
      "crusader": 51369,
      "archon": 58225,
      "legend": 50793,
      "ancient": 36344,
      "divine": 40134
    },
    "counters": [
      "death-prophet",
      "vengeful-spirit",
      "lina",
      "phantom-lancer",
      "medusa",
      "tinker"
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.495,
      "crusader": 0.502,
      "archon": 0.506,
      "legend": 0.505,
      "ancient": 0.505,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 11561,
      "guardian": 32282,
      "crusader": 38974,
      "archon": 35361,
      "legend": 24339,
      "ancient": 14698,
      "divine": 12171
    },
    "counters": [
      "magnus",
      "skywrath-mage",
      "morphling",
      "underlord",
      "warlock",
      "marci"
    ],
    "weakAgainst": [
      "doom",
      "pugna",
      "slardar",
      "void-spirit",
      "shadow-demon",
      "monkey-king"
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
      "herald": 0.472,
      "guardian": 0.469,
      "crusader": 0.472,
      "archon": 0.471,
      "legend": 0.477,
      "ancient": 0.475,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 13471,
      "guardian": 26185,
      "crusader": 29435,
      "archon": 27169,
      "legend": 21346,
      "ancient": 13774,
      "divine": 13582
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.487,
      "guardian": 0.492,
      "crusader": 0.49,
      "archon": 0.495,
      "legend": 0.501,
      "ancient": 0.498,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 10928,
      "guardian": 34138,
      "crusader": 50206,
      "archon": 55410,
      "legend": 46911,
      "ancient": 31503,
      "divine": 30997
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.455,
      "guardian": 0.45,
      "crusader": 0.448,
      "archon": 0.46,
      "legend": 0.466,
      "ancient": 0.479,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 12067,
      "guardian": 32185,
      "crusader": 41718,
      "archon": 43352,
      "legend": 36795,
      "ancient": 26223,
      "divine": 28609
    },
    "counters": [
      "sven",
      "morphling",
      "dazzle",
      "weaver",
      "lifestealer",
      "chaos-knight"
    ],
    "weakAgainst": [
      "bane",
      "nature-s-prophet",
      "keeper-of-the-light",
      "magnus",
      "leshrac",
      "juggernaut"
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
      "Blink Dagger",
      "Ogre Axe",
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.497,
      "crusader": 0.491,
      "archon": 0.494,
      "legend": 0.484,
      "ancient": 0.492,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 11876,
      "guardian": 28390,
      "crusader": 31787,
      "archon": 27400,
      "legend": 18693,
      "ancient": 10420,
      "divine": 7237
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.511,
      "crusader": 0.515,
      "archon": 0.517,
      "legend": 0.519,
      "ancient": 0.521,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 36625,
      "guardian": 89846,
      "crusader": 108040,
      "archon": 105452,
      "legend": 82627,
      "ancient": 53768,
      "divine": 52167
    },
    "counters": [
      "underlord",
      "disruptor",
      "bristleback",
      "kez",
      "terrorblade",
      "spirit-breaker"
    ],
    "weakAgainst": [
      "crystal-maiden",
      "warlock",
      "dragon-knight",
      "treant-protector",
      "clockwerk",
      "mars"
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.482,
      "crusader": 0.494,
      "archon": 0.505,
      "legend": 0.516,
      "ancient": 0.523,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 4146,
      "guardian": 13087,
      "crusader": 19475,
      "archon": 23052,
      "legend": 22320,
      "ancient": 17403,
      "divine": 21974
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.5,
      "crusader": 0.502,
      "archon": 0.506,
      "legend": 0.51,
      "ancient": 0.51,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 26682,
      "guardian": 69646,
      "crusader": 84887,
      "archon": 84771,
      "legend": 66282,
      "ancient": 42843,
      "divine": 37990
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
      "spirit-breaker"
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.495,
      "crusader": 0.517,
      "archon": 0.509,
      "legend": 0.518,
      "ancient": 0.524,
      "divine": 0.544
    },
    "pickByBracket": {
      "herald": 2396,
      "guardian": 6059,
      "crusader": 6985,
      "archon": 6167,
      "legend": 5024,
      "ancient": 3192,
      "divine": 3786
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
      "herald": 0.464,
      "guardian": 0.465,
      "crusader": 0.48,
      "archon": 0.49,
      "legend": 0.501,
      "ancient": 0.502,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 8447,
      "guardian": 24129,
      "crusader": 34024,
      "archon": 39536,
      "legend": 36162,
      "ancient": 27351,
      "divine": 30674
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
      "herald": 0.483,
      "guardian": 0.485,
      "crusader": 0.474,
      "archon": 0.471,
      "legend": 0.473,
      "ancient": 0.476,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 10736,
      "guardian": 19470,
      "crusader": 17965,
      "archon": 14481,
      "legend": 9876,
      "ancient": 6429,
      "divine": 6856
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
      "slardar",
      "marci",
      "juggernaut",
      "bane",
      "shadow-fiend"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.486,
      "crusader": 0.495,
      "archon": 0.496,
      "legend": 0.504,
      "ancient": 0.524,
      "divine": 0.539
    },
    "pickByBracket": {
      "herald": 10195,
      "guardian": 25667,
      "crusader": 28830,
      "archon": 24794,
      "legend": 17715,
      "ancient": 10395,
      "divine": 10205
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.494,
      "crusader": 0.495,
      "archon": 0.496,
      "legend": 0.498,
      "ancient": 0.505,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 21684,
      "guardian": 59329,
      "crusader": 72682,
      "archon": 70629,
      "legend": 54657,
      "ancient": 35585,
      "divine": 33956
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.514,
      "crusader": 0.513,
      "archon": 0.514,
      "legend": 0.516,
      "ancient": 0.514,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 10261,
      "guardian": 29666,
      "crusader": 40592,
      "archon": 42890,
      "legend": 35276,
      "ancient": 23931,
      "divine": 24211
    },
    "counters": [
      "templar-assassin",
      "muerta",
      "leshrac",
      "ring-master",
      "tidehunter",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "techies",
      "sniper",
      "batrider",
      "snapfire",
      "monkey-king",
      "shadow-shaman"
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
      "herald": 0.429,
      "guardian": 0.421,
      "crusader": 0.426,
      "archon": 0.424,
      "legend": 0.418,
      "ancient": 0.429,
      "divine": 0.426
    },
    "pickByBracket": {
      "herald": 7052,
      "guardian": 17994,
      "crusader": 24452,
      "archon": 25502,
      "legend": 20190,
      "ancient": 12158,
      "divine": 9937
    },
    "counters": [
      "templar-assassin",
      "lion",
      "techies",
      "sven",
      "axe",
      "troll-warlord"
    ],
    "weakAgainst": [
      "treant-protector",
      "nyx-assassin",
      "razor",
      "witch-doctor",
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
    "overallWin": 0.482,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.482,
      "crusader": 0.481,
      "archon": 0.482,
      "legend": 0.484,
      "ancient": 0.481,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 20302,
      "guardian": 51623,
      "crusader": 63942,
      "archon": 62581,
      "legend": 49747,
      "ancient": 33011,
      "divine": 34330
    },
    "counters": [
      "phantom-lancer",
      "underlord",
      "death-prophet",
      "huskar",
      "silencer",
      "clinkz"
    ],
    "weakAgainst": [
      "naga-siren",
      "keeper-of-the-light",
      "lone-druid",
      "bane",
      "lycan",
      "batrider"
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
      "Arcane Boots",
      "Essence Distiller",
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
    "overallWin": 0.448,
    "winByBracket": {
      "herald": 0.444,
      "guardian": 0.437,
      "crusader": 0.445,
      "archon": 0.447,
      "legend": 0.456,
      "ancient": 0.459,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 16122,
      "guardian": 29502,
      "crusader": 28613,
      "archon": 24513,
      "legend": 17879,
      "ancient": 11123,
      "divine": 10548
    },
    "counters": [
      "silencer",
      "earthshaker",
      "storm-spirit",
      "tidehunter",
      "spirit-breaker",
      "razor"
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.5,
      "crusader": 0.504,
      "archon": 0.51,
      "legend": 0.515,
      "ancient": 0.52,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 23953,
      "guardian": 74873,
      "crusader": 103114,
      "archon": 109471,
      "legend": 89376,
      "ancient": 60303,
      "divine": 61592
    },
    "counters": [
      "lina",
      "troll-warlord",
      "weaver",
      "magnus",
      "chaos-knight",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "treant-protector",
      "nyx-assassin",
      "oracle",
      "tinker",
      "naga-siren",
      "lycan"
    ],
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.491,
      "crusader": 0.493,
      "archon": 0.487,
      "legend": 0.496,
      "ancient": 0.494,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 9557,
      "guardian": 24884,
      "crusader": 29383,
      "archon": 26937,
      "legend": 20088,
      "ancient": 13438,
      "divine": 14219
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
      "herald": 0.497,
      "guardian": 0.483,
      "crusader": 0.479,
      "archon": 0.474,
      "legend": 0.465,
      "ancient": 0.459,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 24993,
      "guardian": 68187,
      "crusader": 86397,
      "archon": 84623,
      "legend": 63407,
      "ancient": 38658,
      "divine": 30301
    },
    "counters": [
      "chaos-knight",
      "weaver",
      "oracle",
      "broodmother",
      "anti-mage",
      "sven"
    ],
    "weakAgainst": [
      "treant-protector",
      "lone-druid",
      "io",
      "clinkz",
      "venomancer",
      "alchemist"
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.513,
      "guardian": 0.517,
      "crusader": 0.519,
      "archon": 0.52,
      "legend": 0.526,
      "ancient": 0.522,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 32504,
      "guardian": 84123,
      "crusader": 102849,
      "archon": 100435,
      "legend": 76409,
      "ancient": 46783,
      "divine": 39283
    },
    "counters": [
      "zeus",
      "legion-commander",
      "magnus",
      "pangolier",
      "techies",
      "phoenix"
    ],
    "weakAgainst": [
      "venomancer",
      "abaddon",
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.484,
      "crusader": 0.488,
      "archon": 0.502,
      "legend": 0.511,
      "ancient": 0.514,
      "divine": 0.533
    },
    "pickByBracket": {
      "herald": 15608,
      "guardian": 37655,
      "crusader": 42823,
      "archon": 39826,
      "legend": 29961,
      "ancient": 19905,
      "divine": 22031
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
    "overallWin": 0.457,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.454,
      "crusader": 0.456,
      "archon": 0.458,
      "legend": 0.452,
      "ancient": 0.457,
      "divine": 0.454
    },
    "pickByBracket": {
      "herald": 7697,
      "guardian": 18160,
      "crusader": 22429,
      "archon": 23334,
      "legend": 20560,
      "ancient": 14933,
      "divine": 17138
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
      "Circlet",
      "Quelling Blade"
    ],
    "coreItems": [
      "Mithril Hammer",
      "Mage Slayer",
      "Blade of Alacrity",
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.485,
      "crusader": 0.488,
      "archon": 0.491,
      "legend": 0.502,
      "ancient": 0.498,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 10963,
      "guardian": 26196,
      "crusader": 32397,
      "archon": 32732,
      "legend": 27041,
      "ancient": 17364,
      "divine": 16201
    },
    "counters": [
      "sven",
      "bristleback",
      "weaver",
      "hoodwink",
      "pangolier",
      "lion"
    ],
    "weakAgainst": [
      "terrorblade",
      "templar-assassin",
      "shadow-shaman",
      "monkey-king",
      "necrophos",
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
      "Claymore",
      "Point Booster",
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.459,
      "crusader": 0.477,
      "archon": 0.467,
      "legend": 0.479,
      "ancient": 0.483,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 3262,
      "guardian": 8085,
      "crusader": 10872,
      "archon": 11472,
      "legend": 9835,
      "ancient": 7113,
      "divine": 7779
    },
    "counters": [
      "queen-of-pain",
      "pudge",
      "pangolier",
      "primal-beast",
      "timbersaw",
      "ancient-apparition"
    ],
    "weakAgainst": [
      "axe",
      "sniper",
      "beastmaster",
      "treant-protector",
      "muerta",
      "shadow-demon"
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
    "overallWin": 0.529,
    "winByBracket": {
      "herald": 0.537,
      "guardian": 0.533,
      "crusader": 0.534,
      "archon": 0.53,
      "legend": 0.523,
      "ancient": 0.523,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 29796,
      "guardian": 85163,
      "crusader": 104289,
      "archon": 99006,
      "legend": 72117,
      "ancient": 43365,
      "divine": 35578
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.499,
      "guardian": 0.489,
      "crusader": 0.49,
      "archon": 0.488,
      "legend": 0.495,
      "ancient": 0.503,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 4668,
      "guardian": 10882,
      "crusader": 12738,
      "archon": 12100,
      "legend": 9476,
      "ancient": 6485,
      "divine": 7026
    },
    "counters": [
      "silencer",
      "muerta",
      "lina",
      "slark",
      "lycan",
      "lich"
    ],
    "weakAgainst": [
      "grimstroke",
      "bane",
      "dawnbreaker",
      "abaddon",
      "magnus",
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
      "herald": 0.526,
      "guardian": 0.523,
      "crusader": 0.526,
      "archon": 0.524,
      "legend": 0.524,
      "ancient": 0.521,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 19332,
      "guardian": 50321,
      "crusader": 65821,
      "archon": 68980,
      "legend": 56640,
      "ancient": 38972,
      "divine": 37001
    },
    "counters": [
      "sven",
      "ursa",
      "ring-master",
      "sand-king",
      "wraith-king",
      "zeus"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "chaos-knight",
      "treant-protector",
      "kez",
      "muerta",
      "sniper"
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.511,
      "crusader": 0.52,
      "archon": 0.523,
      "legend": 0.525,
      "ancient": 0.525,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 16103,
      "guardian": 46040,
      "crusader": 62950,
      "archon": 64706,
      "legend": 52840,
      "ancient": 34556,
      "divine": 31856
    },
    "counters": [
      "witch-doctor",
      "night-stalker",
      "phantom-assassin",
      "weaver",
      "vengeful-spirit",
      "grimstroke"
    ],
    "weakAgainst": [
      "morphling",
      "kez",
      "alchemist",
      "phoenix",
      "slardar",
      "tusk"
    ],
    "startItems": [
      "Gauntlets of Strength",
      "Iron Branch",
      "Quelling Blade",
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.472,
      "guardian": 0.484,
      "crusader": 0.495,
      "archon": 0.497,
      "legend": 0.505,
      "ancient": 0.511,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 32781,
      "guardian": 75488,
      "crusader": 90564,
      "archon": 89516,
      "legend": 69597,
      "ancient": 44586,
      "divine": 42885
    },
    "counters": [
      "underlord",
      "death-prophet",
      "phoenix",
      "warlock",
      "axe",
      "dark-willow"
    ],
    "weakAgainst": [
      "invoker",
      "pangolier",
      "monkey-king",
      "leshrac",
      "dawnbreaker",
      "slardar"
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
      "herald": 0.492,
      "guardian": 0.49,
      "crusader": 0.49,
      "archon": 0.488,
      "legend": 0.485,
      "ancient": 0.487,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 46101,
      "guardian": 130965,
      "crusader": 166983,
      "archon": 166762,
      "legend": 129768,
      "ancient": 83182,
      "divine": 75824
    },
    "counters": [
      "troll-warlord",
      "tinker",
      "sven",
      "death-prophet",
      "dark-willow",
      "razor"
    ],
    "weakAgainst": [
      "lycan",
      "treant-protector",
      "earth-spirit",
      "monkey-king",
      "abaddon",
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
      "Force Staff",
      "Ghost Scepter",
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.476,
      "guardian": 0.476,
      "crusader": 0.49,
      "archon": 0.495,
      "legend": 0.484,
      "ancient": 0.489,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 4084,
      "guardian": 11182,
      "crusader": 13348,
      "archon": 13200,
      "legend": 10301,
      "ancient": 6740,
      "divine": 7613
    },
    "counters": [
      "shadow-fiend",
      "windranger",
      "tiny",
      "hoodwink",
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
      "Maelstrom",
      "Mjollnir",
      "Ogre Axe",
      "Blade of Alacrity"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.501,
      "crusader": 0.503,
      "archon": 0.496,
      "legend": 0.495,
      "ancient": 0.5,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 20041,
      "guardian": 49380,
      "crusader": 59212,
      "archon": 59489,
      "legend": 48694,
      "ancient": 32967,
      "divine": 33910
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.46,
      "crusader": 0.466,
      "archon": 0.489,
      "legend": 0.503,
      "ancient": 0.514,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 2955,
      "guardian": 7194,
      "crusader": 8682,
      "archon": 7987,
      "legend": 6446,
      "ancient": 4629,
      "divine": 6140
    },
    "counters": [
      "sven",
      "skywrath-mage",
      "lion",
      "pudge",
      "axe",
      "void-spirit"
    ],
    "weakAgainst": [
      "beastmaster",
      "leshrac",
      "bane",
      "terrorblade",
      "ogre-magi",
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
      "herald": 0.49,
      "guardian": 0.477,
      "crusader": 0.486,
      "archon": 0.491,
      "legend": 0.497,
      "ancient": 0.497,
      "divine": 0.498
    },
    "pickByBracket": {
      "herald": 9242,
      "guardian": 34208,
      "crusader": 55794,
      "archon": 66321,
      "legend": 58626,
      "ancient": 40391,
      "divine": 38448
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.487,
      "crusader": 0.485,
      "archon": 0.494,
      "legend": 0.499,
      "ancient": 0.497,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 9955,
      "guardian": 22067,
      "crusader": 25941,
      "archon": 24906,
      "legend": 19658,
      "ancient": 12924,
      "divine": 13689
    },
    "counters": [
      "death-prophet",
      "winter-wyvern",
      "dark-seer",
      "void-spirit",
      "ursa",
      "lina"
    ],
    "weakAgainst": [
      "dazzle",
      "ancient-apparition",
      "phoenix",
      "rubick",
      "razor",
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
    "overallWin": 0.468,
    "winByBracket": {
      "herald": 0.464,
      "guardian": 0.461,
      "crusader": 0.465,
      "archon": 0.467,
      "legend": 0.472,
      "ancient": 0.47,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 6627,
      "guardian": 18988,
      "crusader": 28374,
      "archon": 33021,
      "legend": 30958,
      "ancient": 22665,
      "divine": 24942
    },
    "counters": [
      "chaos-knight",
      "outworld-devourer",
      "drow-ranger",
      "medusa",
      "spectre",
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.5,
      "crusader": 0.499,
      "archon": 0.5,
      "legend": 0.499,
      "ancient": 0.502,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 8764,
      "guardian": 22693,
      "crusader": 26764,
      "archon": 25782,
      "legend": 19192,
      "ancient": 11398,
      "divine": 9238
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.51,
      "crusader": 0.515,
      "archon": 0.525,
      "legend": 0.514,
      "ancient": 0.531,
      "divine": 0.539
    },
    "pickByBracket": {
      "herald": 5663,
      "guardian": 12413,
      "crusader": 12860,
      "archon": 10501,
      "legend": 7348,
      "ancient": 4170,
      "divine": 4387
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
      "herald": 0.508,
      "guardian": 0.509,
      "crusader": 0.51,
      "archon": 0.508,
      "legend": 0.506,
      "ancient": 0.508,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 14250,
      "guardian": 40758,
      "crusader": 51107,
      "archon": 52417,
      "legend": 40353,
      "ancient": 25410,
      "divine": 23169
    },
    "counters": [
      "storm-spirit",
      "crystal-maiden",
      "ogre-magi",
      "queen-of-pain",
      "dragon-knight",
      "pudge"
    ],
    "weakAgainst": [
      "zeus",
      "tusk",
      "tidehunter",
      "templar-assassin",
      "sniper",
      "mars"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Blood Grenade",
      "Circlet",
      "Faerie Fire",
      "Observer and Sentry Wards"
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
    "overallWin": 0.443,
    "winByBracket": {
      "herald": 0.444,
      "guardian": 0.436,
      "crusader": 0.437,
      "archon": 0.441,
      "legend": 0.444,
      "ancient": 0.451,
      "divine": 0.46
    },
    "pickByBracket": {
      "herald": 14772,
      "guardian": 33737,
      "crusader": 39131,
      "archon": 37827,
      "legend": 30407,
      "ancient": 20274,
      "divine": 19902
    },
    "counters": [
      "earthshaker",
      "undying",
      "weaver",
      "skywrath-mage",
      "underlord",
      "lina"
    ],
    "weakAgainst": [
      "treant-protector",
      "zeus",
      "crystal-maiden",
      "timbersaw",
      "dawnbreaker",
      "slardar"
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.471,
      "crusader": 0.472,
      "archon": 0.475,
      "legend": 0.479,
      "ancient": 0.474,
      "divine": 0.483
    },
    "pickByBracket": {
      "herald": 8847,
      "guardian": 22683,
      "crusader": 28245,
      "archon": 27531,
      "legend": 20870,
      "ancient": 14048,
      "divine": 14882
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
      "sven",
      "luna",
      "dazzle",
      "timbersaw",
      "doom",
      "viper"
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.471,
      "crusader": 0.463,
      "archon": 0.461,
      "legend": 0.459,
      "ancient": 0.45,
      "divine": 0.458
    },
    "pickByBracket": {
      "herald": 12705,
      "guardian": 27796,
      "crusader": 32319,
      "archon": 31631,
      "legend": 25477,
      "ancient": 16643,
      "divine": 16025
    },
    "counters": [
      "techies",
      "lich",
      "bristleback",
      "tusk",
      "faceless-void",
      "luna"
    ],
    "weakAgainst": [
      "grimstroke",
      "leshrac",
      "huskar",
      "primal-beast",
      "sand-king",
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
      "Broadsword"
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
    "overallWin": 0.493,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.498,
      "crusader": 0.485,
      "archon": 0.486,
      "legend": 0.483,
      "ancient": 0.487,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 7955,
      "guardian": 15955,
      "crusader": 13144,
      "archon": 9483,
      "legend": 5872,
      "ancient": 3568,
      "divine": 3217
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
    "overallWin": 0.429,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.43,
      "crusader": 0.425,
      "archon": 0.424,
      "legend": 0.425,
      "ancient": 0.431,
      "divine": 0.435
    },
    "pickByBracket": {
      "herald": 23563,
      "guardian": 58217,
      "crusader": 66529,
      "archon": 62310,
      "legend": 45982,
      "ancient": 29166,
      "divine": 26393
    },
    "counters": [
      "razor",
      "huskar",
      "phantom-lancer",
      "doom",
      "sniper",
      "pangolier"
    ],
    "weakAgainst": [
      "kez",
      "bane",
      "morphling",
      "nyx-assassin",
      "tidehunter",
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.543,
      "guardian": 0.54,
      "crusader": 0.531,
      "archon": 0.526,
      "legend": 0.52,
      "ancient": 0.513,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 33090,
      "guardian": 90339,
      "crusader": 111388,
      "archon": 110584,
      "legend": 86932,
      "ancient": 54933,
      "divine": 51779
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.495,
      "guardian": 0.495,
      "crusader": 0.513,
      "archon": 0.524,
      "legend": 0.538,
      "ancient": 0.534,
      "divine": 0.542
    },
    "pickByBracket": {
      "herald": 8702,
      "guardian": 25825,
      "crusader": 37737,
      "archon": 44050,
      "legend": 39325,
      "ancient": 28209,
      "divine": 31076
    },
    "counters": [
      "dark-willow",
      "timbersaw",
      "storm-spirit",
      "tiny",
      "zeus",
      "troll-warlord"
    ],
    "weakAgainst": [
      "lifestealer",
      "pugna",
      "undying",
      "beastmaster",
      "terrorblade",
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.519,
      "crusader": 0.519,
      "archon": 0.518,
      "legend": 0.523,
      "ancient": 0.532,
      "divine": 0.531
    },
    "pickByBracket": {
      "herald": 12310,
      "guardian": 34618,
      "crusader": 45551,
      "archon": 46832,
      "legend": 38869,
      "ancient": 26410,
      "divine": 25837
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.517,
      "crusader": 0.513,
      "archon": 0.51,
      "legend": 0.503,
      "ancient": 0.499,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 38407,
      "guardian": 103694,
      "crusader": 122893,
      "archon": 113111,
      "legend": 82010,
      "ancient": 47890,
      "divine": 36287
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.487,
      "crusader": 0.488,
      "archon": 0.492,
      "legend": 0.504,
      "ancient": 0.509,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 7802,
      "guardian": 20201,
      "crusader": 23842,
      "archon": 22947,
      "legend": 17681,
      "ancient": 11113,
      "divine": 10072
    },
    "counters": [
      "tiny",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "windranger",
      "rubick",
      "pudge",
      "ember-spirit"
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.444,
      "guardian": 0.456,
      "crusader": 0.469,
      "archon": 0.482,
      "legend": 0.486,
      "ancient": 0.493,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 9251,
      "guardian": 25576,
      "crusader": 34813,
      "archon": 34818,
      "legend": 28871,
      "ancient": 19062,
      "divine": 19113
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.476,
      "crusader": 0.496,
      "archon": 0.5,
      "legend": 0.51,
      "ancient": 0.496,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 9542,
      "guardian": 23505,
      "crusader": 30412,
      "archon": 30679,
      "legend": 23825,
      "ancient": 14631,
      "divine": 13319
    },
    "counters": [
      "lion",
      "jakiro"
    ],
    "weakAgainst": [
      "mars",
      "disruptor",
      "timbersaw",
      "invoker",
      "tusk",
      "queen-of-pain"
    ],
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
    "overallWin": 0.454,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.441,
      "crusader": 0.454,
      "archon": 0.451,
      "legend": 0.456,
      "ancient": 0.457,
      "divine": 0.463
    },
    "pickByBracket": {
      "herald": 4682,
      "guardian": 13325,
      "crusader": 18851,
      "archon": 22154,
      "legend": 20622,
      "ancient": 16533,
      "divine": 19532
    },
    "counters": [
      "lina",
      "sven",
      "beastmaster",
      "death-prophet",
      "lion",
      "silencer"
    ],
    "weakAgainst": [
      "naga-siren",
      "largo",
      "treant-protector",
      "bounty-hunter",
      "nature-s-prophet",
      "juggernaut"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer Ward",
      "Faerie Fire",
      "Circlet",
      "Magic Stick"
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.518,
      "crusader": 0.515,
      "archon": 0.507,
      "legend": 0.5,
      "ancient": 0.497,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 42450,
      "guardian": 98677,
      "crusader": 106243,
      "archon": 92525,
      "legend": 62595,
      "ancient": 36101,
      "divine": 27825
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.521,
      "guardian": 0.52,
      "crusader": 0.52,
      "archon": 0.52,
      "legend": 0.525,
      "ancient": 0.525,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 24753,
      "guardian": 62330,
      "crusader": 68935,
      "archon": 59703,
      "legend": 42392,
      "ancient": 26171,
      "divine": 26142
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
    "overallWin": 0.508,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.509,
      "crusader": 0.51,
      "archon": 0.504,
      "legend": 0.51,
      "ancient": 0.512,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 7288,
      "guardian": 23613,
      "crusader": 34355,
      "archon": 37443,
      "legend": 32915,
      "ancient": 23408,
      "divine": 26536
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
      "herald": 0.482,
      "guardian": 0.481,
      "crusader": 0.477,
      "archon": 0.479,
      "legend": 0.493,
      "ancient": 0.5,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 6520,
      "guardian": 16705,
      "crusader": 20128,
      "archon": 19384,
      "legend": 15737,
      "ancient": 11010,
      "divine": 12110
    },
    "counters": [
      "muerta",
      "gyrocopter",
      "viper",
      "puck",
      "terrorblade",
      "dark-willow"
    ],
    "weakAgainst": [
      "earthshaker",
      "largo",
      "razor",
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
    "overallWin": 0.469,
    "winByBracket": {
      "herald": 0.448,
      "guardian": 0.45,
      "crusader": 0.452,
      "archon": 0.47,
      "legend": 0.471,
      "ancient": 0.486,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 5859,
      "guardian": 16347,
      "crusader": 22552,
      "archon": 24661,
      "legend": 21679,
      "ancient": 15893,
      "divine": 18382
    },
    "counters": [
      "weaver",
      "dark-willow",
      "earth-spirit",
      "sven",
      "ember-spirit",
      "crystal-maiden"
    ],
    "weakAgainst": [
      "naga-siren",
      "bounty-hunter",
      "nyx-assassin",
      "huskar",
      "oracle",
      "dark-seer"
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.519,
      "crusader": 0.517,
      "archon": 0.516,
      "legend": 0.517,
      "ancient": 0.511,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 49055,
      "guardian": 145989,
      "crusader": 190315,
      "archon": 185344,
      "legend": 140763,
      "ancient": 90681,
      "divine": 88488
    },
    "counters": [
      "io",
      "clinkz",
      "wraith-king",
      "warlock",
      "morphling",
      "phantom-assassin"
    ],
    "weakAgainst": [
      "largo",
      "lycan",
      "earth-spirit",
      "naga-siren",
      "slark",
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.493,
      "crusader": 0.489,
      "archon": 0.503,
      "legend": 0.501,
      "ancient": 0.505,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 9883,
      "guardian": 23726,
      "crusader": 27145,
      "archon": 25520,
      "legend": 19561,
      "ancient": 12637,
      "divine": 11379
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
    "overallWin": 0.464,
    "winByBracket": {
      "herald": 0.459,
      "guardian": 0.467,
      "crusader": 0.463,
      "archon": 0.462,
      "legend": 0.467,
      "ancient": 0.469,
      "divine": 0.462
    },
    "pickByBracket": {
      "herald": 19179,
      "guardian": 54244,
      "crusader": 73808,
      "archon": 78593,
      "legend": 63420,
      "ancient": 41216,
      "divine": 38098
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.5,
      "crusader": 0.505,
      "archon": 0.506,
      "legend": 0.503,
      "ancient": 0.501,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 17658,
      "guardian": 35789,
      "crusader": 39219,
      "archon": 36088,
      "legend": 26852,
      "ancient": 16897,
      "divine": 14029
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
      "phoenix",
      "terrorblade",
      "huskar",
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
      "herald": 0.509,
      "guardian": 0.523,
      "crusader": 0.522,
      "archon": 0.527,
      "legend": 0.525,
      "ancient": 0.52,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 18072,
      "guardian": 39101,
      "crusader": 41729,
      "archon": 35450,
      "legend": 25250,
      "ancient": 15116,
      "divine": 13083
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
      "herald": 0.471,
      "guardian": 0.469,
      "crusader": 0.479,
      "archon": 0.476,
      "legend": 0.478,
      "ancient": 0.482,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 6719,
      "guardian": 19383,
      "crusader": 26798,
      "archon": 29845,
      "legend": 26519,
      "ancient": 19563,
      "divine": 22989
    },
    "counters": [
      "dark-willow",
      "witch-doctor",
      "vengeful-spirit",
      "skywrath-mage",
      "earth-spirit",
      "terrorblade"
    ],
    "weakAgainst": [
      "alchemist",
      "chen",
      "grimstroke",
      "lich",
      "dazzle",
      "phoenix"
    ],
    "startItems": [
      "Iron Branch",
      "Faerie Fire",
      "Tango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Sentry Ward"
    ],
    "coreItems": [
      "Arcane Boots",
      "Staff of Wizardry",
      "Blink Dagger",
      "Vitality Booster",
      "Rod of Atos"
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
    "overallWin": 0.494,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.484,
      "crusader": 0.491,
      "archon": 0.493,
      "legend": 0.497,
      "ancient": 0.503,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 22168,
      "guardian": 69723,
      "crusader": 103341,
      "archon": 118971,
      "legend": 104621,
      "ancient": 73957,
      "divine": 75571
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.518,
      "guardian": 0.505,
      "crusader": 0.493,
      "archon": 0.478,
      "legend": 0.472,
      "ancient": 0.474,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 11626,
      "guardian": 28378,
      "crusader": 31851,
      "archon": 30160,
      "legend": 21918,
      "ancient": 14033,
      "divine": 10848
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
    "overallWin": 0.444,
    "winByBracket": {
      "herald": 0.428,
      "guardian": 0.428,
      "crusader": 0.438,
      "archon": 0.449,
      "legend": 0.447,
      "ancient": 0.447,
      "divine": 0.46
    },
    "pickByBracket": {
      "herald": 4346,
      "guardian": 11599,
      "crusader": 15194,
      "archon": 15797,
      "legend": 13116,
      "ancient": 9503,
      "divine": 9846
    },
    "counters": [],
    "weakAgainst": [],
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
    "overallWin": 0.491,
    "winByBracket": {
      "herald": 0.494,
      "guardian": 0.491,
      "crusader": 0.492,
      "archon": 0.49,
      "legend": 0.49,
      "ancient": 0.49,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 30604,
      "guardian": 80385,
      "crusader": 101914,
      "archon": 100616,
      "legend": 79203,
      "ancient": 54331,
      "divine": 56431
    },
    "counters": [
      "winter-wyvern",
      "medusa",
      "anti-mage",
      "pugna",
      "legion-commander",
      "undying"
    ],
    "weakAgainst": [
      "lone-druid",
      "enigma",
      "alchemist",
      "phoenix",
      "omniknight",
      "io"
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
      "Mask of Madness"
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
      "guardian": 0.519,
      "crusader": 0.52,
      "archon": 0.52,
      "legend": 0.523,
      "ancient": 0.519,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 35798,
      "guardian": 91746,
      "crusader": 108480,
      "archon": 101487,
      "legend": 75256,
      "ancient": 46009,
      "divine": 39029
    },
    "counters": [
      "medusa",
      "morphling",
      "kunkka",
      "phantom-assassin",
      "huskar",
      "tinker"
    ],
    "weakAgainst": [
      "oracle",
      "beastmaster",
      "naga-siren",
      "treant-protector",
      "phantom-lancer",
      "bane"
    ],
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.52,
      "crusader": 0.511,
      "archon": 0.51,
      "legend": 0.509,
      "ancient": 0.508,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 22976,
      "guardian": 66200,
      "crusader": 84823,
      "archon": 82475,
      "legend": 63485,
      "ancient": 39441,
      "divine": 35388
    },
    "counters": [
      "death-prophet",
      "timbersaw",
      "lina",
      "vengeful-spirit",
      "chaos-knight",
      "grimstroke"
    ],
    "weakAgainst": [
      "huskar",
      "razor",
      "leshrac",
      "spirit-breaker",
      "keeper-of-the-light",
      "viper"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.501,
      "crusader": 0.501,
      "archon": 0.496,
      "legend": 0.494,
      "ancient": 0.49,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 28161,
      "guardian": 72247,
      "crusader": 87038,
      "archon": 83260,
      "legend": 62414,
      "ancient": 40398,
      "divine": 36788
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
      "herald": 0.504,
      "guardian": 0.498,
      "crusader": 0.496,
      "archon": 0.496,
      "legend": 0.499,
      "ancient": 0.495,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 17331,
      "guardian": 44854,
      "crusader": 53889,
      "archon": 51685,
      "legend": 40929,
      "ancient": 26293,
      "divine": 24016
    },
    "counters": [
      "lifestealer",
      "lina",
      "weaver",
      "enchantress",
      "dazzle",
      "sand-king"
    ],
    "weakAgainst": [
      "vengeful-spirit",
      "marci",
      "earth-spirit",
      "winter-wyvern",
      "faceless-void",
      "phantom-lancer"
    ],
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.499,
      "crusader": 0.489,
      "archon": 0.493,
      "legend": 0.492,
      "ancient": 0.494,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 18001,
      "guardian": 52028,
      "crusader": 68073,
      "archon": 68583,
      "legend": 54394,
      "ancient": 34433,
      "divine": 31559
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
      "guardian": 0.517,
      "crusader": 0.534,
      "archon": 0.533,
      "legend": 0.536,
      "ancient": 0.533,
      "divine": 0.53
    },
    "pickByBracket": {
      "herald": 22799,
      "guardian": 72034,
      "crusader": 109184,
      "archon": 125176,
      "legend": 109664,
      "ancient": 76887,
      "divine": 80385
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.518,
      "crusader": 0.511,
      "archon": 0.505,
      "legend": 0.498,
      "ancient": 0.487,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 52511,
      "guardian": 129257,
      "crusader": 151308,
      "archon": 139022,
      "legend": 98873,
      "ancient": 56458,
      "divine": 42689
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
    "overallWin": 0.545,
    "winByBracket": {
      "herald": 0.56,
      "guardian": 0.551,
      "crusader": 0.545,
      "archon": 0.545,
      "legend": 0.542,
      "ancient": 0.54,
      "divine": 0.532
    },
    "pickByBracket": {
      "herald": 22753,
      "guardian": 63513,
      "crusader": 77420,
      "archon": 73536,
      "legend": 56233,
      "ancient": 35851,
      "divine": 34472
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
      "Faerie Fire",
      "Circlet"
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.519,
      "crusader": 0.518,
      "archon": 0.517,
      "legend": 0.519,
      "ancient": 0.513,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 33345,
      "guardian": 84140,
      "crusader": 98442,
      "archon": 95261,
      "legend": 74036,
      "ancient": 47165,
      "divine": 43246
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
    "overallWin": 0.47,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.462,
      "crusader": 0.464,
      "archon": 0.466,
      "legend": 0.473,
      "ancient": 0.475,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 13812,
      "guardian": 36694,
      "crusader": 46949,
      "archon": 47707,
      "legend": 39156,
      "ancient": 27143,
      "divine": 28283
    },
    "counters": [
      "legion-commander",
      "naga-siren",
      "sven",
      "techies",
      "templar-assassin",
      "void-spirit"
    ],
    "weakAgainst": [
      "mirana",
      "treant-protector",
      "chen",
      "huskar",
      "lycan",
      "marci"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Faerie Fire",
      "Observer Ward",
      "Mantle of Intelligence",
      "Gauntlets of Strength"
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
      "herald": 0.495,
      "guardian": 0.503,
      "crusader": 0.501,
      "archon": 0.503,
      "legend": 0.5,
      "ancient": 0.505,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 19942,
      "guardian": 45325,
      "crusader": 49680,
      "archon": 44202,
      "legend": 31588,
      "ancient": 19211,
      "divine": 16917
    },
    "counters": [
      "morphling",
      "phantom-lancer",
      "dark-seer",
      "skywrath-mage",
      "legion-commander",
      "axe"
    ],
    "weakAgainst": [
      "lycan",
      "kunkka",
      "earthshaker",
      "bane",
      "doom",
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
      "herald": 0.517,
      "guardian": 0.517,
      "crusader": 0.507,
      "archon": 0.509,
      "legend": 0.503,
      "ancient": 0.503,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 22154,
      "guardian": 55270,
      "crusader": 63800,
      "archon": 59122,
      "legend": 44098,
      "ancient": 28893,
      "divine": 28018
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
    "overallWin": 0.456,
    "winByBracket": {
      "herald": 0.452,
      "guardian": 0.445,
      "crusader": 0.457,
      "archon": 0.457,
      "legend": 0.463,
      "ancient": 0.462,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 10594,
      "guardian": 26061,
      "crusader": 30291,
      "archon": 27590,
      "legend": 21460,
      "ancient": 13886,
      "divine": 13481
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
      "herald": 0.479,
      "guardian": 0.47,
      "crusader": 0.468,
      "archon": 0.463,
      "legend": 0.476,
      "ancient": 0.476,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 9040,
      "guardian": 21514,
      "crusader": 23170,
      "archon": 19981,
      "legend": 14990,
      "ancient": 10249,
      "divine": 12640
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
      "herald": 0.512,
      "guardian": 0.508,
      "crusader": 0.509,
      "archon": 0.5,
      "legend": 0.493,
      "ancient": 0.492,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 15116,
      "guardian": 42600,
      "crusader": 55075,
      "archon": 56606,
      "legend": 45499,
      "ancient": 30169,
      "divine": 29543
    },
    "counters": [
      "faceless-void",
      "mirana",
      "spirit-breaker",
      "dark-willow",
      "sven",
      "necrophos"
    ],
    "weakAgainst": [
      "treant-protector",
      "clockwerk",
      "huskar",
      "grimstroke",
      "clinkz",
      "ember-spirit"
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
    "overallWin": 0.444,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.443,
      "crusader": 0.451,
      "archon": 0.443,
      "legend": 0.439,
      "ancient": 0.437,
      "divine": 0.445
    },
    "pickByBracket": {
      "herald": 8053,
      "guardian": 21036,
      "crusader": 26817,
      "archon": 28245,
      "legend": 22940,
      "ancient": 16092,
      "divine": 17250
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.442,
      "guardian": 0.456,
      "crusader": 0.467,
      "archon": 0.474,
      "legend": 0.485,
      "ancient": 0.49,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 10163,
      "guardian": 27092,
      "crusader": 32249,
      "archon": 29679,
      "legend": 22748,
      "ancient": 15065,
      "divine": 16455
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
    "overallWin": 0.443,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.445,
      "crusader": 0.443,
      "archon": 0.436,
      "legend": 0.434,
      "ancient": 0.448,
      "divine": 0.452
    },
    "pickByBracket": {
      "herald": 15932,
      "guardian": 37922,
      "crusader": 45019,
      "archon": 45243,
      "legend": 37469,
      "ancient": 26043,
      "divine": 26727
    },
    "counters": [
      "death-prophet",
      "weaver",
      "bristleback",
      "sven",
      "tinker",
      "sand-king"
    ],
    "weakAgainst": [
      "naga-siren",
      "bane",
      "lone-druid",
      "oracle",
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
      "Ogre Axe",
      "Echo Sabre",
      "Blink Dagger",
      "Claymore",
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.486,
      "crusader": 0.495,
      "archon": 0.498,
      "legend": 0.504,
      "ancient": 0.514,
      "divine": 0.532
    },
    "pickByBracket": {
      "herald": 6599,
      "guardian": 17781,
      "crusader": 22461,
      "archon": 22724,
      "legend": 18774,
      "ancient": 13697,
      "divine": 19710
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.515,
      "crusader": 0.511,
      "archon": 0.496,
      "legend": 0.498,
      "ancient": 0.494,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 12033,
      "guardian": 21045,
      "crusader": 18936,
      "archon": 15180,
      "legend": 10906,
      "ancient": 6277,
      "divine": 5103
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
      "herald": 0.446,
      "guardian": 0.448,
      "crusader": 0.464,
      "archon": 0.471,
      "legend": 0.482,
      "ancient": 0.49,
      "divine": 0.493
    },
    "pickByBracket": {
      "herald": 7501,
      "guardian": 21203,
      "crusader": 29407,
      "archon": 33806,
      "legend": 31591,
      "ancient": 24200,
      "divine": 27669
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.514,
      "crusader": 0.512,
      "archon": 0.506,
      "legend": 0.503,
      "ancient": 0.494,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 9456,
      "guardian": 28714,
      "crusader": 40540,
      "archon": 45464,
      "legend": 37690,
      "ancient": 25921,
      "divine": 24426
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.52,
      "crusader": 0.525,
      "archon": 0.529,
      "legend": 0.519,
      "ancient": 0.53,
      "divine": 0.527
    },
    "pickByBracket": {
      "herald": 21350,
      "guardian": 59057,
      "crusader": 73887,
      "archon": 71340,
      "legend": 53627,
      "ancient": 34748,
      "divine": 34149
    },
    "counters": [],
    "weakAgainst": [],
    "startItems": [],
    "coreItems": []
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
    "overallWin": 0.465,
    "winByBracket": {
      "herald": 0.447,
      "guardian": 0.454,
      "crusader": 0.463,
      "archon": 0.469,
      "legend": 0.471,
      "ancient": 0.471,
      "divine": 0.478
    },
    "pickByBracket": {
      "herald": 17249,
      "guardian": 41292,
      "crusader": 49565,
      "archon": 48303,
      "legend": 37344,
      "ancient": 23671,
      "divine": 21327
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
      "enigma",
      "treant-protector",
      "alchemist",
      "lycan",
      "chen",
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
    "overallWin": 0.537,
    "winByBracket": {
      "herald": 0.538,
      "guardian": 0.545,
      "crusader": 0.542,
      "archon": 0.542,
      "legend": 0.536,
      "ancient": 0.527,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 21523,
      "guardian": 61667,
      "crusader": 85239,
      "archon": 92718,
      "legend": 77803,
      "ancient": 51751,
      "divine": 47670
    },
    "counters": [
      "slardar",
      "lich",
      "morphling",
      "lina",
      "warlock",
      "legion-commander"
    ],
    "weakAgainst": [
      "techies",
      "beastmaster",
      "batrider",
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.479,
      "crusader": 0.477,
      "archon": 0.47,
      "legend": 0.472,
      "ancient": 0.468,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 19200,
      "guardian": 48108,
      "crusader": 58319,
      "archon": 55469,
      "legend": 41604,
      "ancient": 24995,
      "divine": 20343
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
    "overallWin": 0.488,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.488,
      "crusader": 0.484,
      "archon": 0.49,
      "legend": 0.491,
      "ancient": 0.49,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 29527,
      "guardian": 57478,
      "crusader": 59314,
      "archon": 52165,
      "legend": 36015,
      "ancient": 21622,
      "divine": 19349
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.489,
      "guardian": 0.499,
      "crusader": 0.5,
      "archon": 0.529,
      "legend": 0.529,
      "ancient": 0.539,
      "divine": 0.555
    },
    "pickByBracket": {
      "herald": 3696,
      "guardian": 8960,
      "crusader": 9820,
      "archon": 9080,
      "legend": 6760,
      "ancient": 4939,
      "divine": 5846
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.465,
      "guardian": 0.479,
      "crusader": 0.486,
      "archon": 0.494,
      "legend": 0.491,
      "ancient": 0.505,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 7931,
      "guardian": 19883,
      "crusader": 27100,
      "archon": 30412,
      "legend": 27867,
      "ancient": 21270,
      "divine": 23734
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
      "naga-siren",
      "treant-protector",
      "lycan",
      "bane",
      "alchemist"
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.505,
      "crusader": 0.502,
      "archon": 0.494,
      "legend": 0.491,
      "ancient": 0.478,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 14770,
      "guardian": 40626,
      "crusader": 50602,
      "archon": 48700,
      "legend": 35523,
      "ancient": 21580,
      "divine": 18372
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.474,
      "crusader": 0.467,
      "archon": 0.471,
      "legend": 0.467,
      "ancient": 0.467,
      "divine": 0.472
    },
    "pickByBracket": {
      "herald": 19510,
      "guardian": 43181,
      "crusader": 47216,
      "archon": 42967,
      "legend": 31883,
      "ancient": 19058,
      "divine": 17731
    },
    "counters": [
      "ancient-apparition",
      "brewmaster",
      "crystal-maiden",
      "gyrocopter",
      "sven",
      "lina"
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
      "herald": 0.483,
      "guardian": 0.479,
      "crusader": 0.476,
      "archon": 0.478,
      "legend": 0.483,
      "ancient": 0.491,
      "divine": 0.49
    },
    "pickByBracket": {
      "herald": 31579,
      "guardian": 76609,
      "crusader": 93145,
      "archon": 92334,
      "legend": 73155,
      "ancient": 48518,
      "divine": 48440
    },
    "counters": [
      "oracle",
      "chaos-knight",
      "phantom-lancer",
      "morphling",
      "winter-wyvern",
      "lina"
    ],
    "weakAgainst": [
      "treant-protector",
      "naga-siren",
      "enigma",
      "lone-druid",
      "bane",
      "alchemist"
    ],
    "startItems": [
      "Iron Branch",
      "Circlet",
      "Tango",
      "Faerie Fire",
      "Blood Grenade",
      "Observer and Sentry Wards"
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
    "overallWin": 0.486,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.475,
      "crusader": 0.476,
      "archon": 0.486,
      "legend": 0.491,
      "ancient": 0.498,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 10254,
      "guardian": 26301,
      "crusader": 30717,
      "archon": 28627,
      "legend": 21922,
      "ancient": 14801,
      "divine": 16142
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.527,
      "crusader": 0.523,
      "archon": 0.518,
      "legend": 0.513,
      "ancient": 0.504,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 32074,
      "guardian": 88137,
      "crusader": 107599,
      "archon": 101776,
      "legend": 72352,
      "ancient": 42835,
      "divine": 33624
    },
    "counters": [
      "gyrocopter",
      "undying",
      "vengeful-spirit",
      "tidehunter",
      "ursa",
      "lion"
    ],
    "weakAgainst": [
      "ember-spirit",
      "necrophos",
      "dark-willow",
      "sniper",
      "lifestealer",
      "snapfire"
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
    "overallWin": 0.55,
    "winByBracket": {
      "herald": 0.56,
      "guardian": 0.564,
      "crusader": 0.553,
      "archon": 0.548,
      "legend": 0.545,
      "ancient": 0.535,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 28208,
      "guardian": 74247,
      "crusader": 90501,
      "archon": 85902,
      "legend": 62431,
      "ancient": 36633,
      "divine": 27598
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
    "overallWin": 0.516,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.518,
      "crusader": 0.521,
      "archon": 0.52,
      "legend": 0.513,
      "ancient": 0.513,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 35502,
      "guardian": 94624,
      "crusader": 120302,
      "archon": 124650,
      "legend": 100982,
      "ancient": 67544,
      "divine": 66689
    },
    "counters": [
      "mirana",
      "viper",
      "medusa",
      "dawnbreaker",
      "shadow-demon",
      "slardar"
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
      "Enchanted Mango",
      "Faerie Fire",
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
