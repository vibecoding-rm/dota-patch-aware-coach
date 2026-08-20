// Auto-generado por scripts/sync-dota-data.mjs desde la API pública de OpenDota.
// NO editar a mano. Re-sincroniza con: node scripts/sync-dota-data.mjs
// Última sync: 2026-08-20
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
      "herald": 0.505,
      "guardian": 0.517,
      "crusader": 0.511,
      "archon": 0.519,
      "legend": 0.514,
      "ancient": 0.51,
      "divine": 0.509
    },
    "pickByBracket": {
      "herald": 5491,
      "guardian": 15588,
      "crusader": 23755,
      "archon": 28811,
      "legend": 26588,
      "ancient": 16788,
      "divine": 11117
    },
    "counters": [
      "troll-warlord",
      "legion-commander",
      "sand-king",
      "terrorblade",
      "lion",
      "dark-willow"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "underlord",
      "marci",
      "wraith-king",
      "sniper",
      "faceless-void"
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.477,
      "crusader": 0.474,
      "archon": 0.474,
      "legend": 0.463,
      "ancient": 0.468,
      "divine": 0.461
    },
    "pickByBracket": {
      "herald": 4937,
      "guardian": 16275,
      "crusader": 26114,
      "archon": 30865,
      "legend": 26499,
      "ancient": 15552,
      "divine": 10074
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
    "overallWin": 0.52,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.522,
      "crusader": 0.522,
      "archon": 0.522,
      "legend": 0.52,
      "ancient": 0.518,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 8367,
      "guardian": 28313,
      "crusader": 46115,
      "archon": 59370,
      "legend": 54177,
      "ancient": 32259,
      "divine": 20117
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
      "herald": 0.494,
      "guardian": 0.5,
      "crusader": 0.499,
      "archon": 0.501,
      "legend": 0.499,
      "ancient": 0.497,
      "divine": 0.501
    },
    "pickByBracket": {
      "herald": 17217,
      "guardian": 55862,
      "crusader": 85225,
      "archon": 98148,
      "legend": 78894,
      "ancient": 43844,
      "divine": 25906
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
      "jakiro",
      "abaddon",
      "morphling",
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
    "overallWin": 0.525,
    "winByBracket": {
      "herald": 0.511,
      "guardian": 0.52,
      "crusader": 0.516,
      "archon": 0.522,
      "legend": 0.533,
      "ancient": 0.537,
      "divine": 0.532
    },
    "pickByBracket": {
      "herald": 5223,
      "guardian": 17466,
      "crusader": 27819,
      "archon": 32260,
      "legend": 27395,
      "ancient": 16480,
      "divine": 12662
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.52,
      "guardian": 0.519,
      "crusader": 0.508,
      "archon": 0.504,
      "legend": 0.499,
      "ancient": 0.493,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 19910,
      "guardian": 69842,
      "crusader": 114599,
      "archon": 147483,
      "legend": 135294,
      "ancient": 84558,
      "divine": 60734
    },
    "counters": [
      "morphling",
      "terrorblade",
      "techies",
      "faceless-void",
      "winter-wyvern",
      "death-prophet"
    ],
    "weakAgainst": [
      "bane",
      "chen",
      "monkey-king",
      "abaddon",
      "ember-spirit",
      "huskar"
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.474,
      "guardian": 0.478,
      "crusader": 0.49,
      "archon": 0.499,
      "legend": 0.504,
      "ancient": 0.514,
      "divine": 0.512
    },
    "pickByBracket": {
      "herald": 4641,
      "guardian": 15012,
      "crusader": 23421,
      "archon": 28757,
      "legend": 26366,
      "ancient": 18614,
      "divine": 18797
    },
    "counters": [
      "axe",
      "templar-assassin",
      "dawnbreaker",
      "earthshaker",
      "timbersaw",
      "tiny"
    ],
    "weakAgainst": [
      "monkey-king",
      "marci",
      "centaur-warrunner",
      "mars",
      "storm-spirit",
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
    "overallWin": 0.438,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.43,
      "crusader": 0.429,
      "archon": 0.431,
      "legend": 0.434,
      "ancient": 0.446,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 1592,
      "guardian": 4853,
      "crusader": 7569,
      "archon": 8584,
      "legend": 7437,
      "ancient": 5104,
      "divine": 4712
    },
    "counters": [
      "bristleback",
      "beastmaster",
      "grimstroke",
      "weaver",
      "tiny",
      "hoodwink"
    ],
    "weakAgainst": [
      "oracle",
      "monkey-king",
      "bane",
      "primal-beast",
      "chen",
      "underlord"
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
      "herald": 0.448,
      "guardian": 0.442,
      "crusader": 0.441,
      "archon": 0.441,
      "legend": 0.437,
      "ancient": 0.45,
      "divine": 0.471
    },
    "pickByBracket": {
      "herald": 4123,
      "guardian": 12436,
      "crusader": 18994,
      "archon": 21807,
      "legend": 18200,
      "ancient": 11254,
      "divine": 10631
    },
    "counters": [
      "vengeful-spirit",
      "lycan",
      "zeus",
      "magnus",
      "shadow-shaman",
      "morphling"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.511,
      "crusader": 0.516,
      "archon": 0.525,
      "legend": 0.523,
      "ancient": 0.527,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 11353,
      "guardian": 26201,
      "crusader": 30565,
      "archon": 30867,
      "legend": 22723,
      "ancient": 11980,
      "divine": 6859
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.505,
      "crusader": 0.511,
      "archon": 0.518,
      "legend": 0.529,
      "ancient": 0.538,
      "divine": 0.565
    },
    "pickByBracket": {
      "herald": 7823,
      "guardian": 23747,
      "crusader": 36065,
      "archon": 43740,
      "legend": 40820,
      "ancient": 28981,
      "divine": 31615
    },
    "counters": [
      "dragon-knight",
      "queen-of-pain",
      "timbersaw",
      "snapfire",
      "ursa",
      "warlock"
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.496,
      "guardian": 0.488,
      "crusader": 0.494,
      "archon": 0.495,
      "legend": 0.505,
      "ancient": 0.513,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 1848,
      "guardian": 5488,
      "crusader": 8481,
      "archon": 10444,
      "legend": 10653,
      "ancient": 8554,
      "divine": 9013
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
      "herald": 0.535,
      "guardian": 0.513,
      "crusader": 0.49,
      "archon": 0.481,
      "legend": 0.478,
      "ancient": 0.467,
      "divine": 0.456
    },
    "pickByBracket": {
      "herald": 17134,
      "guardian": 48850,
      "crusader": 60688,
      "archon": 58622,
      "legend": 40938,
      "ancient": 20538,
      "divine": 11876
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
    "overallWin": 0.504,
    "winByBracket": {
      "herald": 0.497,
      "guardian": 0.501,
      "crusader": 0.504,
      "archon": 0.503,
      "legend": 0.507,
      "ancient": 0.507,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 4928,
      "guardian": 12170,
      "crusader": 15249,
      "archon": 14867,
      "legend": 10604,
      "ancient": 5910,
      "divine": 4714
    },
    "counters": [
      "disruptor",
      "tusk",
      "hoodwink",
      "rubick"
    ],
    "weakAgainst": [
      "jakiro"
    ],
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
    "overallWin": 0.502,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.517,
      "crusader": 0.509,
      "archon": 0.506,
      "legend": 0.5,
      "ancient": 0.495,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 7607,
      "guardian": 31465,
      "crusader": 60783,
      "archon": 89258,
      "legend": 91126,
      "ancient": 61548,
      "divine": 48037
    },
    "counters": [
      "medusa",
      "weaver",
      "terrorblade",
      "silencer",
      "techies",
      "axe"
    ],
    "weakAgainst": [
      "treant-protector",
      "brewmaster",
      "marci",
      "earth-spirit",
      "timbersaw",
      "grimstroke"
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
    "overallWin": 0.519,
    "winByBracket": {
      "herald": 0.523,
      "guardian": 0.525,
      "crusader": 0.521,
      "archon": 0.514,
      "legend": 0.516,
      "ancient": 0.517,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 8895,
      "guardian": 26371,
      "crusader": 35237,
      "archon": 35454,
      "legend": 26422,
      "ancient": 14753,
      "divine": 8977
    },
    "counters": [
      "tiny",
      "templar-assassin",
      "ursa",
      "dragon-knight",
      "tidehunter",
      "pudge"
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
    "overallWin": 0.448,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.423,
      "crusader": 0.429,
      "archon": 0.437,
      "legend": 0.453,
      "ancient": 0.453,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 711,
      "guardian": 1925,
      "crusader": 2974,
      "archon": 3270,
      "legend": 2798,
      "ancient": 1754,
      "divine": 1648
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
      "herald": 0.492,
      "guardian": 0.489,
      "crusader": 0.487,
      "archon": 0.494,
      "legend": 0.495,
      "ancient": 0.501,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 12039,
      "guardian": 31481,
      "crusader": 40789,
      "archon": 45683,
      "legend": 39457,
      "ancient": 25835,
      "divine": 21552
    },
    "counters": [
      "ancient-apparition",
      "skywrath-mage",
      "snapfire",
      "dragon-knight",
      "clockwerk",
      "dark-willow"
    ],
    "weakAgainst": [
      "spirit-breaker",
      "pudge",
      "templar-assassin",
      "slardar",
      "razor",
      "hoodwink"
    ],
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
      "herald": 0.488,
      "guardian": 0.472,
      "crusader": 0.477,
      "archon": 0.475,
      "legend": 0.481,
      "ancient": 0.484,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 3104,
      "guardian": 11231,
      "crusader": 19557,
      "archon": 27182,
      "legend": 28686,
      "ancient": 21466,
      "divine": 22061
    },
    "counters": [
      "vengeful-spirit",
      "tidehunter",
      "luna",
      "silencer",
      "pugna",
      "witch-doctor"
    ],
    "weakAgainst": [
      "venomancer",
      "clinkz",
      "beastmaster",
      "monkey-king",
      "leshrac",
      "nature-s-prophet"
    ],
    "startItems": [
      "Iron Branch",
      "Tango",
      "Observer and Sentry Wards",
      "Blood Grenade",
      "Smoke of Deceit",
      "Boots of Speed"
    ],
    "coreItems": [
      "Essence Distiller",
      "Blink Dagger",
      "Staff of Wizardry",
      "Pavise",
      "Eul's Scepter of Divinity"
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.535,
      "guardian": 0.531,
      "crusader": 0.523,
      "archon": 0.516,
      "legend": 0.511,
      "ancient": 0.506,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 20695,
      "guardian": 65163,
      "crusader": 95374,
      "archon": 112049,
      "legend": 98038,
      "ancient": 60698,
      "divine": 42367
    },
    "counters": [
      "pugna",
      "sniper",
      "underlord",
      "slardar",
      "necrophos",
      "legion-commander"
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.487,
      "crusader": 0.481,
      "archon": 0.477,
      "legend": 0.489,
      "ancient": 0.494,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 3759,
      "guardian": 12954,
      "crusader": 21528,
      "archon": 28475,
      "legend": 29247,
      "ancient": 21647,
      "divine": 23700
    },
    "counters": [
      "queen-of-pain",
      "puck",
      "terrorblade",
      "disruptor",
      "tusk",
      "jakiro"
    ],
    "weakAgainst": [
      "phoenix",
      "ember-spirit",
      "tiny",
      "lion",
      "sven",
      "storm-spirit"
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
      "herald": 0.472,
      "guardian": 0.47,
      "crusader": 0.477,
      "archon": 0.481,
      "legend": 0.488,
      "ancient": 0.494,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 8099,
      "guardian": 24961,
      "crusader": 39256,
      "archon": 51983,
      "legend": 51602,
      "ancient": 36865,
      "divine": 35649
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
      "herald": 0.515,
      "guardian": 0.518,
      "crusader": 0.524,
      "archon": 0.524,
      "legend": 0.521,
      "ancient": 0.523,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 7382,
      "guardian": 26408,
      "crusader": 49691,
      "archon": 73757,
      "legend": 80691,
      "ancient": 57921,
      "divine": 51165
    },
    "counters": [
      "vengeful-spirit",
      "medusa",
      "terrorblade",
      "underlord",
      "lina",
      "sven"
    ],
    "weakAgainst": [
      "treant-protector",
      "bane",
      "morphling",
      "alchemist",
      "venomancer",
      "lycan"
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
      "guardian": 0.496,
      "crusader": 0.509,
      "archon": 0.51,
      "legend": 0.513,
      "ancient": 0.519,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 6552,
      "guardian": 22182,
      "crusader": 34073,
      "archon": 40729,
      "legend": 33610,
      "ancient": 20015,
      "divine": 14838
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
      "slardar",
      "lion",
      "abaddon",
      "weaver",
      "dawnbreaker"
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.467,
      "guardian": 0.475,
      "crusader": 0.477,
      "archon": 0.48,
      "legend": 0.484,
      "ancient": 0.489,
      "divine": 0.485
    },
    "pickByBracket": {
      "herald": 7872,
      "guardian": 18809,
      "crusader": 25345,
      "archon": 29425,
      "legend": 26180,
      "ancient": 17187,
      "divine": 14192
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
      "snapfire",
      "spirit-breaker",
      "hoodwink",
      "tiny",
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
      "herald": 0.479,
      "guardian": 0.491,
      "crusader": 0.491,
      "archon": 0.501,
      "legend": 0.502,
      "ancient": 0.501,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 5388,
      "guardian": 21721,
      "crusader": 39335,
      "archon": 58125,
      "legend": 61316,
      "ancient": 43095,
      "divine": 35264
    },
    "counters": [
      "chaos-knight",
      "phantom-assassin",
      "phantom-lancer",
      "sven",
      "lina",
      "muerta"
    ],
    "weakAgainst": [
      "broodmother",
      "io",
      "kez",
      "chen",
      "drow-ranger",
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
    "overallWin": 0.472,
    "winByBracket": {
      "herald": 0.46,
      "guardian": 0.456,
      "crusader": 0.465,
      "archon": 0.462,
      "legend": 0.472,
      "ancient": 0.481,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 5003,
      "guardian": 16686,
      "crusader": 29490,
      "archon": 41327,
      "legend": 43002,
      "ancient": 31548,
      "divine": 30479
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
      "herald": 0.511,
      "guardian": 0.515,
      "crusader": 0.512,
      "archon": 0.511,
      "legend": 0.513,
      "ancient": 0.514,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 7781,
      "guardian": 25025,
      "crusader": 38759,
      "archon": 46932,
      "legend": 42546,
      "ancient": 26990,
      "divine": 21104
    },
    "counters": [
      "drow-ranger",
      "morphling",
      "troll-warlord",
      "magnus",
      "naga-siren",
      "pangolier"
    ],
    "weakAgainst": [
      "bounty-hunter",
      "venomancer",
      "keeper-of-the-light",
      "phoenix",
      "clinkz",
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
    "overallWin": 0.466,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.47,
      "crusader": 0.47,
      "archon": 0.467,
      "legend": 0.464,
      "ancient": 0.461,
      "divine": 0.454
    },
    "pickByBracket": {
      "herald": 22896,
      "guardian": 67823,
      "crusader": 99974,
      "archon": 117171,
      "legend": 101743,
      "ancient": 61604,
      "divine": 42744
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
      "slardar",
      "hoodwink",
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
    "overallWin": 0.478,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.465,
      "crusader": 0.464,
      "archon": 0.471,
      "legend": 0.476,
      "ancient": 0.485,
      "divine": 0.5
    },
    "pickByBracket": {
      "herald": 6536,
      "guardian": 27467,
      "crusader": 56503,
      "archon": 86722,
      "legend": 93709,
      "ancient": 68274,
      "divine": 63896
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
      "herald": 0.498,
      "guardian": 0.501,
      "crusader": 0.502,
      "archon": 0.504,
      "legend": 0.509,
      "ancient": 0.51,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 18711,
      "guardian": 58374,
      "crusader": 92231,
      "archon": 116136,
      "legend": 111089,
      "ancient": 72087,
      "divine": 53286
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
    "overallWin": 0.512,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.483,
      "crusader": 0.488,
      "archon": 0.506,
      "legend": 0.532,
      "ancient": 0.531,
      "divine": 0.54
    },
    "pickByBracket": {
      "herald": 1693,
      "guardian": 5068,
      "crusader": 7305,
      "archon": 8528,
      "legend": 8015,
      "ancient": 5266,
      "divine": 5633
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
    "overallWin": 0.489,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.472,
      "crusader": 0.473,
      "archon": 0.488,
      "legend": 0.491,
      "ancient": 0.497,
      "divine": 0.506
    },
    "pickByBracket": {
      "herald": 7031,
      "guardian": 24998,
      "crusader": 44909,
      "archon": 65009,
      "legend": 69021,
      "ancient": 52034,
      "divine": 50979
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
      "herald": 0.491,
      "guardian": 0.484,
      "crusader": 0.475,
      "archon": 0.471,
      "legend": 0.477,
      "ancient": 0.479,
      "divine": 0.478
    },
    "pickByBracket": {
      "herald": 6635,
      "guardian": 15783,
      "crusader": 19385,
      "archon": 21059,
      "legend": 18201,
      "ancient": 12785,
      "divine": 11884
    },
    "counters": [
      "earthshaker",
      "clockwerk",
      "ursa",
      "disruptor",
      "void-spirit",
      "queen-of-pain"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "pugna",
      "slardar",
      "marci",
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
    "overallWin": 0.51,
    "winByBracket": {
      "herald": 0.48,
      "guardian": 0.49,
      "crusader": 0.494,
      "archon": 0.501,
      "legend": 0.517,
      "ancient": 0.529,
      "divine": 0.554
    },
    "pickByBracket": {
      "herald": 5798,
      "guardian": 18082,
      "crusader": 27007,
      "archon": 31390,
      "legend": 26970,
      "ancient": 17404,
      "divine": 17403
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.49,
      "guardian": 0.486,
      "crusader": 0.485,
      "archon": 0.489,
      "legend": 0.489,
      "ancient": 0.492,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 12006,
      "guardian": 39736,
      "crusader": 61051,
      "archon": 73469,
      "legend": 64005,
      "ancient": 38127,
      "divine": 26303
    },
    "counters": [
      "dawnbreaker",
      "dragon-knight",
      "ursa",
      "primal-beast",
      "templar-assassin",
      "storm-spirit"
    ],
    "weakAgainst": [
      "tidehunter",
      "sniper",
      "muerta",
      "axe",
      "earthshaker",
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.505,
      "guardian": 0.509,
      "crusader": 0.519,
      "archon": 0.521,
      "legend": 0.517,
      "ancient": 0.518,
      "divine": 0.518
    },
    "pickByBracket": {
      "herald": 5416,
      "guardian": 19463,
      "crusader": 35251,
      "archon": 48569,
      "legend": 49812,
      "ancient": 34120,
      "divine": 28165
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
      "herald": 0.447,
      "guardian": 0.447,
      "crusader": 0.45,
      "archon": 0.454,
      "legend": 0.462,
      "ancient": 0.458,
      "divine": 0.454
    },
    "pickByBracket": {
      "herald": 3646,
      "guardian": 10902,
      "crusader": 17783,
      "archon": 23535,
      "legend": 22649,
      "ancient": 14312,
      "divine": 10068
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
      "herald": 0.471,
      "guardian": 0.468,
      "crusader": 0.472,
      "archon": 0.474,
      "legend": 0.473,
      "ancient": 0.477,
      "divine": 0.478
    },
    "pickByBracket": {
      "herald": 14019,
      "guardian": 44465,
      "crusader": 72503,
      "archon": 94287,
      "legend": 89095,
      "ancient": 61230,
      "divine": 53421
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
    "overallWin": 0.453,
    "winByBracket": {
      "herald": 0.45,
      "guardian": 0.448,
      "crusader": 0.445,
      "archon": 0.447,
      "legend": 0.461,
      "ancient": 0.467,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 10576,
      "guardian": 23498,
      "crusader": 28152,
      "archon": 29178,
      "legend": 23976,
      "ancient": 15156,
      "divine": 12351
    },
    "counters": [
      "storm-spirit",
      "tidehunter",
      "spirit-breaker",
      "axe",
      "ring-master",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "hoodwink",
      "nature-s-prophet",
      "marci",
      "shadow-shaman",
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
      "herald": 0.492,
      "guardian": 0.495,
      "crusader": 0.499,
      "archon": 0.503,
      "legend": 0.508,
      "ancient": 0.513,
      "divine": 0.517
    },
    "pickByBracket": {
      "herald": 16548,
      "guardian": 59561,
      "crusader": 107676,
      "archon": 149774,
      "legend": 151006,
      "ancient": 102804,
      "divine": 83926
    },
    "counters": [
      "troll-warlord",
      "weaver",
      "chaos-knight",
      "lina",
      "ancient-apparition",
      "ring-master"
    ],
    "weakAgainst": [
      "treant-protector",
      "tinker",
      "puck",
      "monkey-king",
      "nyx-assassin",
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.483,
      "guardian": 0.488,
      "crusader": 0.479,
      "archon": 0.478,
      "legend": 0.467,
      "ancient": 0.468,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 7068,
      "guardian": 23856,
      "crusader": 41384,
      "archon": 52531,
      "legend": 50298,
      "ancient": 35044,
      "divine": 32879
    },
    "counters": [
      "disruptor",
      "ember-spirit",
      "jakiro",
      "snapfire",
      "hoodwink",
      "queen-of-pain"
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
    "overallWin": 0.484,
    "winByBracket": {
      "herald": 0.501,
      "guardian": 0.495,
      "crusader": 0.491,
      "archon": 0.485,
      "legend": 0.48,
      "ancient": 0.474,
      "divine": 0.464
    },
    "pickByBracket": {
      "herald": 12223,
      "guardian": 40860,
      "crusader": 65466,
      "archon": 80786,
      "legend": 71707,
      "ancient": 42481,
      "divine": 26471
    },
    "counters": [
      "chaos-knight",
      "winter-wyvern",
      "anti-mage",
      "weaver",
      "oracle",
      "undying"
    ],
    "weakAgainst": [
      "treant-protector",
      "io",
      "clinkz",
      "alchemist",
      "lycan",
      "enigma"
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
    "overallWin": 0.524,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.515,
      "crusader": 0.519,
      "archon": 0.526,
      "legend": 0.528,
      "ancient": 0.529,
      "divine": 0.526
    },
    "pickByBracket": {
      "herald": 21260,
      "guardian": 67898,
      "crusader": 107818,
      "archon": 137752,
      "legend": 127093,
      "ancient": 79608,
      "divine": 52912
    },
    "counters": [
      "zeus",
      "magnus",
      "pangolier",
      "beastmaster",
      "phoenix",
      "weaver"
    ],
    "weakAgainst": [
      "sniper",
      "timbersaw",
      "abaddon",
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.468,
      "guardian": 0.486,
      "crusader": 0.495,
      "archon": 0.5,
      "legend": 0.51,
      "ancient": 0.511,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 8710,
      "guardian": 26342,
      "crusader": 39356,
      "archon": 47920,
      "legend": 43073,
      "ancient": 29025,
      "divine": 30088
    },
    "counters": [
      "lina",
      "warlock",
      "phoenix",
      "kez",
      "silencer",
      "queen-of-pain"
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
    "overallWin": 0.443,
    "winByBracket": {
      "herald": 0.47,
      "guardian": 0.451,
      "crusader": 0.444,
      "archon": 0.437,
      "legend": 0.44,
      "ancient": 0.439,
      "divine": 0.443
    },
    "pickByBracket": {
      "herald": 7078,
      "guardian": 20433,
      "crusader": 32539,
      "archon": 41772,
      "legend": 40295,
      "ancient": 28685,
      "divine": 26670
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
      "largo",
      "drow-ranger",
      "windranger",
      "ember-spirit"
    ],
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.491,
      "guardian": 0.486,
      "crusader": 0.49,
      "archon": 0.497,
      "legend": 0.505,
      "ancient": 0.501,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 6089,
      "guardian": 17827,
      "crusader": 27570,
      "archon": 36162,
      "legend": 35397,
      "ancient": 23245,
      "divine": 16113
    },
    "counters": [
      "bristleback",
      "crystal-maiden",
      "hoodwink",
      "tiny",
      "skywrath-mage",
      "warlock"
    ],
    "weakAgainst": [
      "shadow-shaman",
      "necrophos",
      "templar-assassin",
      "shadow-demon",
      "zeus",
      "storm-spirit"
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
    "overallWin": 0.474,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.466,
      "crusader": 0.461,
      "archon": 0.469,
      "legend": 0.474,
      "ancient": 0.479,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 2041,
      "guardian": 6494,
      "crusader": 11400,
      "archon": 15688,
      "legend": 17147,
      "ancient": 13542,
      "divine": 14582
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
      "clinkz",
      "shadow-demon",
      "invoker",
      "beastmaster"
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
    "overallWin": 0.53,
    "winByBracket": {
      "herald": 0.53,
      "guardian": 0.525,
      "crusader": 0.532,
      "archon": 0.53,
      "legend": 0.533,
      "ancient": 0.528,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 16811,
      "guardian": 60109,
      "crusader": 99256,
      "archon": 123072,
      "legend": 107286,
      "ancient": 61578,
      "divine": 38089
    },
    "counters": [
      "luna",
      "bristleback",
      "silencer",
      "shadow-shaman",
      "skywrath-mage",
      "ursa"
    ],
    "weakAgainst": [
      "abaddon",
      "dawnbreaker",
      "hoodwink",
      "crystal-maiden",
      "vengeful-spirit",
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
      "herald": 0.492,
      "guardian": 0.504,
      "crusader": 0.507,
      "archon": 0.508,
      "legend": 0.518,
      "ancient": 0.511,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 2968,
      "guardian": 8779,
      "crusader": 13156,
      "archon": 15739,
      "legend": 14431,
      "ancient": 10117,
      "divine": 10185
    },
    "counters": [
      "silencer",
      "slark",
      "lina",
      "primal-beast",
      "clockwerk",
      "rubick"
    ],
    "weakAgainst": [
      "dawnbreaker",
      "terrorblade",
      "batrider",
      "queen-of-pain",
      "viper",
      "abaddon"
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
    "overallWin": 0.528,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.529,
      "crusader": 0.527,
      "archon": 0.531,
      "legend": 0.529,
      "ancient": 0.525,
      "divine": 0.524
    },
    "pickByBracket": {
      "herald": 11703,
      "guardian": 38591,
      "crusader": 62669,
      "archon": 84046,
      "legend": 84724,
      "ancient": 58087,
      "divine": 44507
    },
    "counters": [
      "sven",
      "ursa",
      "wraith-king",
      "ring-master",
      "zeus",
      "razor"
    ],
    "weakAgainst": [
      "treant-protector",
      "kez",
      "sniper",
      "phoenix",
      "keeper-of-the-light",
      "muerta"
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
    "overallWin": 0.532,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.513,
      "crusader": 0.524,
      "archon": 0.531,
      "legend": 0.539,
      "ancient": 0.54,
      "divine": 0.536
    },
    "pickByBracket": {
      "herald": 10750,
      "guardian": 40137,
      "crusader": 72435,
      "archon": 102332,
      "legend": 105966,
      "ancient": 72038,
      "divine": 57405
    },
    "counters": [
      "witch-doctor",
      "night-stalker",
      "phantom-assassin",
      "muerta",
      "vengeful-spirit",
      "dark-willow"
    ],
    "weakAgainst": [
      "alchemist",
      "morphling",
      "doom",
      "kez",
      "slardar",
      "phoenix"
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
    "overallWin": 0.497,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.486,
      "crusader": 0.493,
      "archon": 0.498,
      "legend": 0.499,
      "ancient": 0.502,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 25771,
      "guardian": 80932,
      "crusader": 131566,
      "archon": 176011,
      "legend": 173655,
      "ancient": 113847,
      "divine": 93294
    },
    "counters": [
      "underlord",
      "dark-willow",
      "phoenix",
      "warlock",
      "storm-spirit",
      "spirit-breaker"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "pangolier",
      "monkey-king",
      "pudge",
      "timbersaw",
      "leshrac"
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
      "herald": 0.493,
      "guardian": 0.492,
      "crusader": 0.488,
      "archon": 0.49,
      "legend": 0.488,
      "ancient": 0.488,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 29389,
      "guardian": 101698,
      "crusader": 168436,
      "archon": 217205,
      "legend": 202447,
      "ancient": 126397,
      "divine": 88456
    },
    "counters": [
      "grimstroke",
      "sven",
      "razor",
      "troll-warlord",
      "dazzle",
      "dark-willow"
    ],
    "weakAgainst": [
      "treant-protector",
      "abaddon",
      "earth-spirit",
      "monkey-king",
      "pangolier",
      "wraith-king"
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
      "herald": 0.496,
      "guardian": 0.485,
      "crusader": 0.471,
      "archon": 0.472,
      "legend": 0.468,
      "ancient": 0.482,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 4088,
      "guardian": 15472,
      "crusader": 26531,
      "archon": 33560,
      "legend": 30094,
      "ancient": 19672,
      "divine": 17245
    },
    "counters": [
      "underlord",
      "shadow-fiend",
      "windranger",
      "rubick",
      "tiny",
      "snapfire"
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.509,
      "crusader": 0.509,
      "archon": 0.507,
      "legend": 0.503,
      "ancient": 0.5,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 12559,
      "guardian": 39021,
      "crusader": 61477,
      "archon": 77322,
      "legend": 75956,
      "ancient": 53033,
      "divine": 50370
    },
    "counters": [
      "morphling",
      "sand-king",
      "phantom-assassin",
      "sniper",
      "mars",
      "earthshaker"
    ],
    "weakAgainst": [
      "clockwerk",
      "legion-commander",
      "keeper-of-the-light",
      "monkey-king",
      "techies",
      "lifestealer"
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
    "overallWin": 0.483,
    "winByBracket": {
      "herald": 0.469,
      "guardian": 0.464,
      "crusader": 0.461,
      "archon": 0.467,
      "legend": 0.498,
      "ancient": 0.493,
      "divine": 0.513
    },
    "pickByBracket": {
      "herald": 1936,
      "guardian": 5654,
      "crusader": 9386,
      "archon": 11815,
      "legend": 11388,
      "ancient": 7901,
      "divine": 8836
    },
    "counters": [
      "sven",
      "void-spirit",
      "skywrath-mage",
      "hoodwink",
      "silencer",
      "ursa"
    ],
    "weakAgainst": [
      "beastmaster",
      "terrorblade",
      "tusk",
      "tidehunter",
      "bane",
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
    "overallWin": 0.492,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.478,
      "crusader": 0.483,
      "archon": 0.49,
      "legend": 0.495,
      "ancient": 0.498,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 6357,
      "guardian": 27251,
      "crusader": 58809,
      "archon": 92433,
      "legend": 101790,
      "ancient": 70717,
      "divine": 53587
    },
    "counters": [
      "pudge",
      "phoenix",
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
      "herald": 0.483,
      "guardian": 0.486,
      "crusader": 0.493,
      "archon": 0.499,
      "legend": 0.505,
      "ancient": 0.501,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 6749,
      "guardian": 17905,
      "crusader": 25506,
      "archon": 29989,
      "legend": 27948,
      "ancient": 18430,
      "divine": 16221
    },
    "counters": [
      "undying",
      "ursa",
      "void-spirit",
      "pangolier",
      "centaur-warrunner",
      "axe"
    ],
    "weakAgainst": [
      "phoenix",
      "razor",
      "rubick",
      "dazzle",
      "ember-spirit",
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.471,
      "crusader": 0.463,
      "archon": 0.477,
      "legend": 0.473,
      "ancient": 0.475,
      "divine": 0.472
    },
    "pickByBracket": {
      "herald": 3668,
      "guardian": 12082,
      "crusader": 23150,
      "archon": 34211,
      "legend": 38185,
      "ancient": 28792,
      "divine": 24492
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
    "overallWin": 0.501,
    "winByBracket": {
      "herald": 0.506,
      "guardian": 0.502,
      "crusader": 0.506,
      "archon": 0.501,
      "legend": 0.496,
      "ancient": 0.505,
      "divine": 0.487
    },
    "pickByBracket": {
      "herald": 4623,
      "guardian": 14332,
      "crusader": 22885,
      "archon": 27277,
      "legend": 23182,
      "ancient": 13428,
      "divine": 7820
    },
    "counters": [
      "templar-assassin",
      "weaver",
      "sand-king",
      "warlock",
      "skywrath-mage",
      "beastmaster"
    ],
    "weakAgainst": [
      "shadow-demon",
      "shadow-shaman",
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
      "herald": 0.517,
      "guardian": 0.506,
      "crusader": 0.515,
      "archon": 0.519,
      "legend": 0.534,
      "ancient": 0.531,
      "divine": 0.549
    },
    "pickByBracket": {
      "herald": 3540,
      "guardian": 8704,
      "crusader": 11927,
      "archon": 12567,
      "legend": 10333,
      "ancient": 6199,
      "divine": 5254
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
      "herald": 0.519,
      "guardian": 0.525,
      "crusader": 0.517,
      "archon": 0.522,
      "legend": 0.518,
      "ancient": 0.516,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 9309,
      "guardian": 36189,
      "crusader": 66052,
      "archon": 93355,
      "legend": 96869,
      "ancient": 68570,
      "divine": 62653
    },
    "counters": [
      "storm-spirit",
      "ogre-magi",
      "queen-of-pain",
      "undying",
      "lion",
      "lifestealer"
    ],
    "weakAgainst": [
      "jakiro",
      "centaur-warrunner",
      "tusk",
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
    "overallWin": 0.456,
    "winByBracket": {
      "herald": 0.439,
      "guardian": 0.452,
      "crusader": 0.449,
      "archon": 0.452,
      "legend": 0.458,
      "ancient": 0.462,
      "divine": 0.48
    },
    "pickByBracket": {
      "herald": 8172,
      "guardian": 22451,
      "crusader": 31836,
      "archon": 37787,
      "legend": 34318,
      "ancient": 23074,
      "divine": 18599
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.478,
      "guardian": 0.477,
      "crusader": 0.467,
      "archon": 0.469,
      "legend": 0.478,
      "ancient": 0.48,
      "divine": 0.482
    },
    "pickByBracket": {
      "herald": 4579,
      "guardian": 14399,
      "crusader": 23153,
      "archon": 28253,
      "legend": 26351,
      "ancient": 18030,
      "divine": 15587
    },
    "counters": [
      "weaver",
      "terrorblade",
      "lifestealer",
      "puck",
      "void-spirit",
      "dawnbreaker"
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
    "overallWin": 0.476,
    "winByBracket": {
      "herald": 0.493,
      "guardian": 0.484,
      "crusader": 0.477,
      "archon": 0.476,
      "legend": 0.475,
      "ancient": 0.468,
      "divine": 0.47
    },
    "pickByBracket": {
      "herald": 5732,
      "guardian": 14987,
      "crusader": 21619,
      "archon": 25915,
      "legend": 23986,
      "ancient": 16003,
      "divine": 13154
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.51,
      "guardian": 0.494,
      "crusader": 0.489,
      "archon": 0.481,
      "legend": 0.485,
      "ancient": 0.489,
      "divine": 0.504
    },
    "pickByBracket": {
      "herald": 4756,
      "guardian": 11386,
      "crusader": 13620,
      "archon": 12200,
      "legend": 8265,
      "ancient": 4608,
      "divine": 3542
    },
    "counters": [
      "puck",
      "pangolier",
      "hoodwink",
      "ursa",
      "pudge",
      "shadow-demon"
    ],
    "weakAgainst": [
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
    "overallWin": 0.423,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.433,
      "crusader": 0.424,
      "archon": 0.414,
      "legend": 0.418,
      "ancient": 0.423,
      "divine": 0.43
    },
    "pickByBracket": {
      "herald": 14973,
      "guardian": 47513,
      "crusader": 73355,
      "archon": 87828,
      "legend": 77788,
      "ancient": 48701,
      "divine": 38783
    },
    "counters": [
      "drow-ranger",
      "troll-warlord",
      "witch-doctor",
      "sniper",
      "huskar",
      "pangolier"
    ],
    "weakAgainst": [
      "nyx-assassin",
      "clinkz",
      "primal-beast",
      "juggernaut",
      "zeus",
      "timbersaw"
    ],
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
    "overallWin": 0.513,
    "winByBracket": {
      "herald": 0.534,
      "guardian": 0.527,
      "crusader": 0.523,
      "archon": 0.511,
      "legend": 0.508,
      "ancient": 0.504,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 20195,
      "guardian": 68708,
      "crusader": 110590,
      "archon": 141770,
      "legend": 133617,
      "ancient": 86128,
      "divine": 66269
    },
    "counters": [
      "underlord",
      "void-spirit",
      "witch-doctor",
      "bristleback",
      "kunkka",
      "dark-willow"
    ],
    "weakAgainst": [
      "beastmaster",
      "clockwerk",
      "keeper-of-the-light",
      "tidehunter",
      "windranger",
      "grimstroke"
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
      "Sacred Relic",
      "Talisman of Evasion",
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
    "overallWin": 0.518,
    "winByBracket": {
      "herald": 0.479,
      "guardian": 0.491,
      "crusader": 0.507,
      "archon": 0.516,
      "legend": 0.524,
      "ancient": 0.528,
      "divine": 0.531
    },
    "pickByBracket": {
      "herald": 5747,
      "guardian": 21373,
      "crusader": 39232,
      "archon": 57703,
      "legend": 62854,
      "ancient": 46137,
      "divine": 41022
    },
    "counters": [
      "dark-willow",
      "storm-spirit",
      "zeus",
      "silencer",
      "troll-warlord",
      "ursa"
    ],
    "weakAgainst": [
      "lifestealer",
      "shadow-shaman",
      "pugna",
      "shadow-fiend",
      "invoker",
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.517,
      "guardian": 0.515,
      "crusader": 0.521,
      "archon": 0.523,
      "legend": 0.522,
      "ancient": 0.522,
      "divine": 0.522
    },
    "pickByBracket": {
      "herald": 6321,
      "guardian": 21806,
      "crusader": 36893,
      "archon": 49121,
      "legend": 48848,
      "ancient": 33476,
      "divine": 26232
    },
    "counters": [
      "bristleback",
      "void-spirit",
      "dark-willow",
      "puck",
      "timbersaw",
      "tidehunter"
    ],
    "weakAgainst": [
      "terrorblade",
      "largo",
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
      "herald": 0.526,
      "guardian": 0.518,
      "crusader": 0.51,
      "archon": 0.511,
      "legend": 0.508,
      "ancient": 0.502,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 23096,
      "guardian": 79443,
      "crusader": 123477,
      "archon": 146266,
      "legend": 120737,
      "ancient": 67815,
      "divine": 38748
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
      "mirana",
      "treant-protector",
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
      "herald": 0.489,
      "guardian": 0.486,
      "crusader": 0.5,
      "archon": 0.514,
      "legend": 0.512,
      "ancient": 0.514,
      "divine": 0.528
    },
    "pickByBracket": {
      "herald": 3434,
      "guardian": 10528,
      "crusader": 15614,
      "archon": 19063,
      "legend": 16854,
      "ancient": 10822,
      "divine": 8673
    },
    "counters": [
      "shadow-fiend",
      "disruptor",
      "ogre-magi"
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.466,
      "guardian": 0.476,
      "crusader": 0.492,
      "archon": 0.498,
      "legend": 0.511,
      "ancient": 0.519,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 3310,
      "guardian": 11652,
      "crusader": 20881,
      "archon": 28784,
      "legend": 28792,
      "ancient": 21083,
      "divine": 18957
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
    "overallWin": 0.528,
    "winByBracket": {
      "herald": 0.484,
      "guardian": 0.501,
      "crusader": 0.517,
      "archon": 0.53,
      "legend": 0.538,
      "ancient": 0.538,
      "divine": 0.538
    },
    "pickByBracket": {
      "herald": 6124,
      "guardian": 19625,
      "crusader": 34291,
      "archon": 50388,
      "legend": 51120,
      "ancient": 34265,
      "divine": 26435
    },
    "counters": [
      "lion"
    ],
    "weakAgainst": [
      "pudge",
      "mars",
      "snapfire",
      "disruptor",
      "queen-of-pain",
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
      "herald": 0.443,
      "guardian": 0.447,
      "crusader": 0.452,
      "archon": 0.458,
      "legend": 0.466,
      "ancient": 0.467,
      "divine": 0.474
    },
    "pickByBracket": {
      "herald": 2802,
      "guardian": 9375,
      "crusader": 16681,
      "archon": 24497,
      "legend": 27539,
      "ancient": 21328,
      "divine": 22422
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.523,
      "crusader": 0.521,
      "archon": 0.517,
      "legend": 0.514,
      "ancient": 0.505,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 26998,
      "guardian": 78783,
      "crusader": 109337,
      "archon": 116274,
      "legend": 88776,
      "ancient": 46070,
      "divine": 25173
    },
    "counters": [
      "ogre-magi",
      "dragon-knight"
    ],
    "weakAgainst": [
      "rubick",
      "pudge",
      "lifestealer",
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
    "overallWin": 0.53,
    "winByBracket": {
      "herald": 0.526,
      "guardian": 0.528,
      "crusader": 0.527,
      "archon": 0.528,
      "legend": 0.534,
      "ancient": 0.532,
      "divine": 0.529
    },
    "pickByBracket": {
      "herald": 16868,
      "guardian": 54097,
      "crusader": 82079,
      "archon": 96676,
      "legend": 84487,
      "ancient": 52443,
      "divine": 44500
    },
    "counters": [
      "slardar",
      "mars",
      "jakiro"
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
      "herald": 0.502,
      "guardian": 0.516,
      "crusader": 0.521,
      "archon": 0.513,
      "legend": 0.509,
      "ancient": 0.515,
      "divine": 0.51
    },
    "pickByBracket": {
      "herald": 3854,
      "guardian": 15318,
      "crusader": 29229,
      "archon": 41844,
      "legend": 43455,
      "ancient": 30682,
      "divine": 28759
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
    "overallWin": 0.49,
    "winByBracket": {
      "herald": 0.488,
      "guardian": 0.482,
      "crusader": 0.477,
      "archon": 0.489,
      "legend": 0.487,
      "ancient": 0.494,
      "divine": 0.516
    },
    "pickByBracket": {
      "herald": 3792,
      "guardian": 11991,
      "crusader": 18463,
      "archon": 22142,
      "legend": 19615,
      "ancient": 13587,
      "divine": 13453
    },
    "counters": [
      "terrorblade",
      "shadow-shaman",
      "gyrocopter",
      "muerta",
      "weaver",
      "viper"
    ],
    "weakAgainst": [
      "earthshaker",
      "largo",
      "razor",
      "leshrac",
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.454,
      "guardian": 0.443,
      "crusader": 0.453,
      "archon": 0.456,
      "legend": 0.464,
      "ancient": 0.469,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 3851,
      "guardian": 11895,
      "crusader": 19916,
      "archon": 27676,
      "legend": 28635,
      "ancient": 20128,
      "divine": 21398
    },
    "counters": [
      "weaver",
      "invoker",
      "razor",
      "silencer",
      "crystal-maiden",
      "brewmaster"
    ],
    "weakAgainst": [
      "naga-siren",
      "oracle",
      "morphling",
      "nyx-assassin",
      "bane",
      "dark-seer"
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
    "overallWin": 0.517,
    "winByBracket": {
      "herald": 0.529,
      "guardian": 0.526,
      "crusader": 0.522,
      "archon": 0.518,
      "legend": 0.512,
      "ancient": 0.511,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 30256,
      "guardian": 110927,
      "crusader": 190465,
      "archon": 238159,
      "legend": 210132,
      "ancient": 131838,
      "divine": 109096
    },
    "counters": [
      "clinkz",
      "wraith-king",
      "morphling",
      "sand-king",
      "lina",
      "outworld-devourer"
    ],
    "weakAgainst": [
      "largo",
      "magnus",
      "alchemist",
      "monkey-king",
      "naga-siren",
      "lycan"
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
      "herald": 0.48,
      "guardian": 0.481,
      "crusader": 0.498,
      "archon": 0.497,
      "legend": 0.515,
      "ancient": 0.513,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 6314,
      "guardian": 18657,
      "crusader": 27436,
      "archon": 32797,
      "legend": 29564,
      "ancient": 18587,
      "divine": 13447
    },
    "counters": [
      "ogre-magi",
      "dark-willow",
      "pangolier",
      "queen-of-pain",
      "undying",
      "night-stalker"
    ],
    "weakAgainst": [
      "terrorblade",
      "clockwerk",
      "crystal-maiden",
      "ancient-apparition",
      "shadow-fiend",
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
    "overallWin": 0.473,
    "winByBracket": {
      "herald": 0.477,
      "guardian": 0.474,
      "crusader": 0.476,
      "archon": 0.472,
      "legend": 0.471,
      "ancient": 0.474,
      "divine": 0.473
    },
    "pickByBracket": {
      "herald": 10109,
      "guardian": 34421,
      "crusader": 59656,
      "archon": 81451,
      "legend": 80088,
      "ancient": 50647,
      "divine": 37451
    },
    "counters": [
      "phantom-lancer",
      "drow-ranger",
      "chaos-knight",
      "timbersaw",
      "tinker",
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.498,
      "guardian": 0.505,
      "crusader": 0.505,
      "archon": 0.51,
      "legend": 0.502,
      "ancient": 0.506,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 11207,
      "guardian": 28545,
      "crusader": 40210,
      "archon": 47257,
      "legend": 42799,
      "ancient": 27524,
      "divine": 19031
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
    "overallWin": 0.522,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.514,
      "crusader": 0.522,
      "archon": 0.526,
      "legend": 0.527,
      "ancient": 0.522,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 10459,
      "guardian": 28148,
      "crusader": 39918,
      "archon": 44626,
      "legend": 37809,
      "ancient": 22879,
      "divine": 14019
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
    "overallWin": 0.48,
    "winByBracket": {
      "herald": 0.461,
      "guardian": 0.467,
      "crusader": 0.477,
      "archon": 0.477,
      "legend": 0.485,
      "ancient": 0.483,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 4370,
      "guardian": 16145,
      "crusader": 30544,
      "archon": 44708,
      "legend": 48566,
      "ancient": 36086,
      "divine": 35594
    },
    "counters": [
      "skywrath-mage",
      "vengeful-spirit",
      "dark-willow",
      "sven",
      "muerta",
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
      "herald": 0.491,
      "guardian": 0.486,
      "crusader": 0.49,
      "archon": 0.491,
      "legend": 0.497,
      "ancient": 0.499,
      "divine": 0.502
    },
    "pickByBracket": {
      "herald": 13599,
      "guardian": 53403,
      "crusader": 103407,
      "archon": 156316,
      "legend": 171596,
      "ancient": 122660,
      "divine": 101047
    },
    "counters": [
      "phantom-assassin",
      "weaver",
      "brewmaster",
      "phantom-lancer",
      "magnus",
      "dark-willow"
    ],
    "weakAgainst": [
      "earth-spirit",
      "lone-druid",
      "leshrac",
      "abaddon",
      "broodmother",
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
    "overallWin": 0.487,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.507,
      "crusader": 0.499,
      "archon": 0.486,
      "legend": 0.476,
      "ancient": 0.47,
      "divine": 0.468
    },
    "pickByBracket": {
      "herald": 7174,
      "guardian": 21783,
      "crusader": 31670,
      "archon": 37149,
      "legend": 31549,
      "ancient": 19062,
      "divine": 12790
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
    "overallWin": 0.451,
    "winByBracket": {
      "herald": 0.427,
      "guardian": 0.43,
      "crusader": 0.445,
      "archon": 0.447,
      "legend": 0.459,
      "ancient": 0.46,
      "divine": 0.457
    },
    "pickByBracket": {
      "herald": 2636,
      "guardian": 8909,
      "crusader": 15367,
      "archon": 20857,
      "legend": 21339,
      "ancient": 15265,
      "divine": 13732
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
      "herald": 0.485,
      "guardian": 0.485,
      "crusader": 0.488,
      "archon": 0.485,
      "legend": 0.481,
      "ancient": 0.48,
      "divine": 0.478
    },
    "pickByBracket": {
      "herald": 23332,
      "guardian": 74143,
      "crusader": 122346,
      "archon": 157686,
      "legend": 149497,
      "ancient": 98513,
      "divine": 83561
    },
    "counters": [
      "medusa",
      "night-stalker",
      "undying",
      "morphling",
      "terrorblade",
      "pugna"
    ],
    "weakAgainst": [
      "enigma",
      "lone-druid",
      "monkey-king",
      "alchemist",
      "phoenix",
      "batrider"
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.515,
      "guardian": 0.517,
      "crusader": 0.523,
      "archon": 0.52,
      "legend": 0.524,
      "ancient": 0.523,
      "divine": 0.514
    },
    "pickByBracket": {
      "herald": 22881,
      "guardian": 72613,
      "crusader": 109734,
      "archon": 129903,
      "legend": 111714,
      "ancient": 65919,
      "divine": 42230
    },
    "counters": [
      "medusa",
      "grimstroke",
      "kunkka",
      "morphling",
      "night-stalker",
      "chaos-knight"
    ],
    "weakAgainst": [
      "death-prophet",
      "beastmaster",
      "hoodwink",
      "primal-beast",
      "treant-protector",
      "undying"
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
    "overallWin": 0.505,
    "winByBracket": {
      "herald": 0.522,
      "guardian": 0.518,
      "crusader": 0.511,
      "archon": 0.504,
      "legend": 0.499,
      "ancient": 0.5,
      "divine": 0.499
    },
    "pickByBracket": {
      "herald": 11846,
      "guardian": 44472,
      "crusader": 74019,
      "archon": 93004,
      "legend": 83264,
      "ancient": 50309,
      "divine": 33439
    },
    "counters": [
      "timbersaw",
      "lina",
      "vengeful-spirit",
      "chaos-knight",
      "jakiro",
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.507,
      "guardian": 0.504,
      "crusader": 0.501,
      "archon": 0.502,
      "legend": 0.5,
      "ancient": 0.497,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 17216,
      "guardian": 54297,
      "crusader": 82750,
      "archon": 99257,
      "legend": 86261,
      "ancient": 52956,
      "divine": 38781
    },
    "counters": [],
    "weakAgainst": [],
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
      "herald": 0.517,
      "guardian": 0.505,
      "crusader": 0.509,
      "archon": 0.505,
      "legend": 0.504,
      "ancient": 0.498,
      "divine": 0.494
    },
    "pickByBracket": {
      "herald": 10286,
      "guardian": 33318,
      "crusader": 51124,
      "archon": 61822,
      "legend": 56306,
      "ancient": 35312,
      "divine": 26175
    },
    "counters": [
      "drow-ranger",
      "weaver",
      "lifestealer",
      "grimstroke",
      "void-spirit",
      "viper"
    ],
    "weakAgainst": [
      "vengeful-spirit",
      "phantom-lancer",
      "death-prophet",
      "zeus",
      "naga-siren",
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
    "overallWin": 0.499,
    "winByBracket": {
      "herald": 0.521,
      "guardian": 0.506,
      "crusader": 0.495,
      "archon": 0.494,
      "legend": 0.495,
      "ancient": 0.499,
      "divine": 0.511
    },
    "pickByBracket": {
      "herald": 10576,
      "guardian": 35789,
      "crusader": 60188,
      "archon": 78170,
      "legend": 74697,
      "ancient": 48441,
      "divine": 34978
    },
    "counters": [
      "warlock",
      "beastmaster",
      "pudge",
      "tidehunter",
      "puck",
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
      "herald": 0.476,
      "guardian": 0.487,
      "crusader": 0.492,
      "archon": 0.493,
      "legend": 0.495,
      "ancient": 0.494,
      "divine": 0.488
    },
    "pickByBracket": {
      "herald": 10522,
      "guardian": 37156,
      "crusader": 69145,
      "archon": 103111,
      "legend": 111242,
      "ancient": 80100,
      "divine": 68148
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
    "overallWin": 0.503,
    "winByBracket": {
      "herald": 0.514,
      "guardian": 0.513,
      "crusader": 0.511,
      "archon": 0.504,
      "legend": 0.497,
      "ancient": 0.494,
      "divine": 0.479
    },
    "pickByBracket": {
      "herald": 31524,
      "guardian": 97380,
      "crusader": 147232,
      "archon": 172977,
      "legend": 141912,
      "ancient": 74987,
      "divine": 39060
    },
    "counters": [
      "death-prophet",
      "witch-doctor",
      "morphling",
      "lich",
      "sven",
      "faceless-void"
    ],
    "weakAgainst": [
      "ember-spirit",
      "earthshaker",
      "nature-s-prophet",
      "crystal-maiden",
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
      "herald": 0.562,
      "guardian": 0.547,
      "crusader": 0.544,
      "archon": 0.541,
      "legend": 0.542,
      "ancient": 0.541,
      "divine": 0.54
    },
    "pickByBracket": {
      "herald": 14892,
      "guardian": 53930,
      "crusader": 88316,
      "archon": 109579,
      "legend": 100244,
      "ancient": 62531,
      "divine": 47676
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
      "herald": 0.52,
      "guardian": 0.521,
      "crusader": 0.52,
      "archon": 0.522,
      "legend": 0.519,
      "ancient": 0.522,
      "divine": 0.523
    },
    "pickByBracket": {
      "herald": 20234,
      "guardian": 64267,
      "crusader": 99941,
      "archon": 124248,
      "legend": 115582,
      "ancient": 72344,
      "divine": 55248
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.459,
      "guardian": 0.462,
      "crusader": 0.455,
      "archon": 0.463,
      "legend": 0.462,
      "ancient": 0.473,
      "divine": 0.469
    },
    "pickByBracket": {
      "herald": 8743,
      "guardian": 26427,
      "crusader": 41309,
      "archon": 51588,
      "legend": 49522,
      "ancient": 33284,
      "divine": 28329
    },
    "counters": [
      "templar-assassin",
      "sven",
      "techies",
      "death-prophet",
      "medusa",
      "alchemist"
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
      "guardian": 0.507,
      "crusader": 0.517,
      "archon": 0.513,
      "legend": 0.513,
      "ancient": 0.514,
      "divine": 0.52
    },
    "pickByBracket": {
      "herald": 12054,
      "guardian": 36514,
      "crusader": 56544,
      "archon": 68744,
      "legend": 64543,
      "ancient": 42791,
      "divine": 36474
    },
    "counters": [
      "undying",
      "phantom-lancer",
      "axe",
      "skywrath-mage",
      "dark-seer",
      "terrorblade"
    ],
    "weakAgainst": [
      "lycan",
      "earthshaker",
      "void-spirit",
      "lion",
      "lich",
      "gyrocopter"
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
    "overallWin": 0.511,
    "winByBracket": {
      "herald": 0.524,
      "guardian": 0.512,
      "crusader": 0.513,
      "archon": 0.51,
      "legend": 0.508,
      "ancient": 0.51,
      "divine": 0.508
    },
    "pickByBracket": {
      "herald": 13446,
      "guardian": 43658,
      "crusader": 67455,
      "archon": 80065,
      "legend": 71151,
      "ancient": 44000,
      "divine": 33462
    },
    "counters": [
      "viper",
      "luna",
      "crystal-maiden",
      "disruptor",
      "grimstroke",
      "vengeful-spirit"
    ],
    "weakAgainst": [
      "phoenix",
      "muerta",
      "keeper-of-the-light",
      "monkey-king",
      "bristleback",
      "bane"
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
    "overallWin": 0.463,
    "winByBracket": {
      "herald": 0.457,
      "guardian": 0.458,
      "crusader": 0.463,
      "archon": 0.46,
      "legend": 0.467,
      "ancient": 0.469,
      "divine": 0.465
    },
    "pickByBracket": {
      "herald": 6572,
      "guardian": 19487,
      "crusader": 30175,
      "archon": 35920,
      "legend": 32817,
      "ancient": 21075,
      "divine": 17627
    },
    "counters": [
      "kunkka",
      "sven",
      "weaver",
      "troll-warlord",
      "lina",
      "primal-beast"
    ],
    "weakAgainst": [
      "treant-protector",
      "bane",
      "bristleback",
      "grimstroke",
      "storm-spirit",
      "monkey-king"
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.481,
      "guardian": 0.466,
      "crusader": 0.461,
      "archon": 0.464,
      "legend": 0.472,
      "ancient": 0.48,
      "divine": 0.491
    },
    "pickByBracket": {
      "herald": 5696,
      "guardian": 16191,
      "crusader": 22398,
      "archon": 24687,
      "legend": 20963,
      "ancient": 13816,
      "divine": 14225
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
    "overallWin": 0.506,
    "winByBracket": {
      "herald": 0.5,
      "guardian": 0.507,
      "crusader": 0.51,
      "archon": 0.506,
      "legend": 0.507,
      "ancient": 0.499,
      "divine": 0.503
    },
    "pickByBracket": {
      "herald": 8824,
      "guardian": 29398,
      "crusader": 50442,
      "archon": 66581,
      "legend": 62797,
      "ancient": 39695,
      "divine": 29832
    },
    "counters": [
      "faceless-void",
      "necrophos",
      "undying",
      "dark-willow",
      "sniper",
      "templar-assassin"
    ],
    "weakAgainst": [
      "clockwerk",
      "treant-protector",
      "huskar",
      "ember-spirit",
      "keeper-of-the-light",
      "nyx-assassin"
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
      "herald": 0.452,
      "guardian": 0.451,
      "crusader": 0.452,
      "archon": 0.449,
      "legend": 0.442,
      "ancient": 0.441,
      "divine": 0.444
    },
    "pickByBracket": {
      "herald": 5290,
      "guardian": 17344,
      "crusader": 28589,
      "archon": 38666,
      "legend": 39053,
      "ancient": 27100,
      "divine": 25712
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
    "overallWin": 0.471,
    "winByBracket": {
      "herald": 0.456,
      "guardian": 0.461,
      "crusader": 0.459,
      "archon": 0.465,
      "legend": 0.474,
      "ancient": 0.483,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 6597,
      "guardian": 21477,
      "crusader": 33685,
      "archon": 39587,
      "legend": 35869,
      "ancient": 24020,
      "divine": 20453
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
      "queen-of-pain",
      "shadow-demon",
      "lion",
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
    "overallWin": 0.442,
    "winByBracket": {
      "herald": 0.449,
      "guardian": 0.446,
      "crusader": 0.444,
      "archon": 0.438,
      "legend": 0.439,
      "ancient": 0.442,
      "divine": 0.446
    },
    "pickByBracket": {
      "herald": 7662,
      "guardian": 21459,
      "crusader": 31670,
      "archon": 39231,
      "legend": 38114,
      "ancient": 26404,
      "divine": 25178
    },
    "counters": [
      "weaver",
      "sven",
      "death-prophet",
      "bristleback",
      "dark-seer",
      "void-spirit"
    ],
    "weakAgainst": [
      "bane",
      "kez",
      "kunkka",
      "chen",
      "treant-protector",
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
    "overallWin": 0.496,
    "winByBracket": {
      "herald": 0.471,
      "guardian": 0.478,
      "crusader": 0.487,
      "archon": 0.488,
      "legend": 0.491,
      "ancient": 0.503,
      "divine": 0.521
    },
    "pickByBracket": {
      "herald": 4397,
      "guardian": 14676,
      "crusader": 25131,
      "archon": 34377,
      "legend": 35995,
      "ancient": 26995,
      "divine": 35975
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
      "herald": 0.53,
      "guardian": 0.529,
      "crusader": 0.522,
      "archon": 0.517,
      "legend": 0.514,
      "ancient": 0.509,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 7495,
      "guardian": 17518,
      "crusader": 20709,
      "archon": 21903,
      "legend": 17207,
      "ancient": 9903,
      "divine": 6829
    },
    "counters": [
      "silencer",
      "tidehunter",
      "medusa",
      "sven",
      "lifestealer",
      "shadow-fiend"
    ],
    "weakAgainst": [
      "abaddon",
      "invoker",
      "pudge",
      "timbersaw",
      "nature-s-prophet",
      "sniper"
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
      "herald": 0.452,
      "guardian": 0.464,
      "crusader": 0.463,
      "archon": 0.475,
      "legend": 0.483,
      "ancient": 0.489,
      "divine": 0.497
    },
    "pickByBracket": {
      "herald": 4183,
      "guardian": 14590,
      "crusader": 26464,
      "archon": 38936,
      "legend": 45418,
      "ancient": 36338,
      "divine": 38035
    },
    "counters": [],
    "weakAgainst": [],
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
      "herald": 0.526,
      "guardian": 0.518,
      "crusader": 0.516,
      "archon": 0.509,
      "legend": 0.498,
      "ancient": 0.491,
      "divine": 0.477
    },
    "pickByBracket": {
      "herald": 6476,
      "guardian": 26122,
      "crusader": 52401,
      "archon": 80054,
      "legend": 84365,
      "ancient": 57627,
      "divine": 46509
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
    "overallWin": 0.514,
    "winByBracket": {
      "herald": 0.508,
      "guardian": 0.513,
      "crusader": 0.515,
      "archon": 0.517,
      "legend": 0.514,
      "ancient": 0.512,
      "divine": 0.507
    },
    "pickByBracket": {
      "herald": 14023,
      "guardian": 51160,
      "crusader": 87754,
      "archon": 115507,
      "legend": 109711,
      "ancient": 71884,
      "divine": 62039
    },
    "counters": [
      "shadow-shaman",
      "lion",
      "weaver",
      "ursa",
      "dragon-knight",
      "windranger"
    ],
    "weakAgainst": [
      "monkey-king",
      "treant-protector",
      "marci",
      "ember-spirit",
      "pugna",
      "alchemist"
    ],
    "startItems": [
      "Iron Branch",
      "Enchanted Mango",
      "Blood Grenade",
      "Observer and Sentry Wards",
      "Smoke of Deceit",
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.446,
      "guardian": 0.457,
      "crusader": 0.47,
      "archon": 0.478,
      "legend": 0.48,
      "ancient": 0.485,
      "divine": 0.486
    },
    "pickByBracket": {
      "herald": 9192,
      "guardian": 25135,
      "crusader": 37207,
      "archon": 45949,
      "legend": 42273,
      "ancient": 27072,
      "divine": 18952
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
      "herald": 0.543,
      "guardian": 0.537,
      "crusader": 0.537,
      "archon": 0.537,
      "legend": 0.528,
      "ancient": 0.529,
      "divine": 0.515
    },
    "pickByBracket": {
      "herald": 12952,
      "guardian": 45572,
      "crusader": 77224,
      "archon": 103487,
      "legend": 100682,
      "ancient": 63016,
      "divine": 42920
    },
    "counters": [
      "morphling",
      "slardar",
      "lich",
      "legion-commander",
      "lina",
      "warlock"
    ],
    "weakAgainst": [
      "clockwerk",
      "dawnbreaker",
      "phoenix",
      "tusk",
      "beastmaster",
      "lifestealer"
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
    "overallWin": 0.475,
    "winByBracket": {
      "herald": 0.473,
      "guardian": 0.477,
      "crusader": 0.478,
      "archon": 0.477,
      "legend": 0.477,
      "ancient": 0.474,
      "divine": 0.458
    },
    "pickByBracket": {
      "herald": 11217,
      "guardian": 35379,
      "crusader": 53844,
      "archon": 64595,
      "legend": 54505,
      "ancient": 30612,
      "divine": 18489
    },
    "counters": [
      "dragon-knight",
      "clockwerk",
      "warlock",
      "weaver",
      "dawnbreaker",
      "tusk"
    ],
    "weakAgainst": [
      "ember-spirit",
      "batrider",
      "invoker",
      "doom",
      "queen-of-pain",
      "pudge"
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
      "herald": 0.478,
      "guardian": 0.478,
      "crusader": 0.484,
      "archon": 0.485,
      "legend": 0.484,
      "ancient": 0.492,
      "divine": 0.489
    },
    "pickByBracket": {
      "herald": 18871,
      "guardian": 45643,
      "crusader": 56580,
      "archon": 58593,
      "legend": 46284,
      "ancient": 25573,
      "divine": 17633
    },
    "counters": [
      "bristleback",
      "silencer",
      "morphling",
      "ancient-apparition",
      "dragon-knight",
      "skywrath-mage"
    ],
    "weakAgainst": [
      "techies",
      "zeus",
      "bane",
      "slardar",
      "dazzle",
      "treant-protector"
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
    "overallWin": 0.526,
    "winByBracket": {
      "herald": 0.475,
      "guardian": 0.499,
      "crusader": 0.503,
      "archon": 0.522,
      "legend": 0.534,
      "ancient": 0.549,
      "divine": 0.563
    },
    "pickByBracket": {
      "herald": 2090,
      "guardian": 5774,
      "crusader": 8467,
      "archon": 10107,
      "legend": 8921,
      "ancient": 6138,
      "divine": 7190
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
    "overallWin": 0.495,
    "winByBracket": {
      "herald": 0.482,
      "guardian": 0.481,
      "crusader": 0.489,
      "archon": 0.493,
      "legend": 0.504,
      "ancient": 0.498,
      "divine": 0.496
    },
    "pickByBracket": {
      "herald": 4464,
      "guardian": 13912,
      "crusader": 22647,
      "archon": 31341,
      "legend": 33846,
      "ancient": 25132,
      "divine": 24780
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.512,
      "guardian": 0.511,
      "crusader": 0.507,
      "archon": 0.503,
      "legend": 0.489,
      "ancient": 0.486,
      "divine": 0.475
    },
    "pickByBracket": {
      "herald": 7935,
      "guardian": 28129,
      "crusader": 43805,
      "archon": 53081,
      "legend": 45480,
      "ancient": 25659,
      "divine": 16467
    },
    "counters": [
      "sand-king",
      "grimstroke",
      "ancient-apparition",
      "troll-warlord",
      "techies",
      "spirit-breaker"
    ],
    "weakAgainst": [
      "keeper-of-the-light",
      "treant-protector",
      "slark",
      "venomancer",
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
      "herald": 0.477,
      "guardian": 0.479,
      "crusader": 0.472,
      "archon": 0.469,
      "legend": 0.474,
      "ancient": 0.476,
      "divine": 0.484
    },
    "pickByBracket": {
      "herald": 10511,
      "guardian": 27872,
      "crusader": 37742,
      "archon": 42131,
      "legend": 36145,
      "ancient": 21448,
      "divine": 16078
    },
    "counters": [
      "dazzle",
      "ancient-apparition",
      "sven",
      "brewmaster",
      "gyrocopter",
      "warlock"
    ],
    "weakAgainst": [
      "morphling",
      "monkey-king",
      "venomancer",
      "shadow-demon",
      "tiny",
      "rubick"
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
      "legend": 0.482,
      "ancient": 0.486,
      "divine": 0.495
    },
    "pickByBracket": {
      "herald": 20527,
      "guardian": 64295,
      "crusader": 102160,
      "archon": 133875,
      "legend": 130918,
      "ancient": 87977,
      "divine": 73913
    },
    "counters": [
      "grimstroke",
      "oracle",
      "phantom-lancer",
      "morphling",
      "chaos-knight",
      "weaver"
    ],
    "weakAgainst": [
      "treant-protector",
      "enigma",
      "bane",
      "lone-druid",
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
    "overallWin": 0.498,
    "winByBracket": {
      "herald": 0.486,
      "guardian": 0.482,
      "crusader": 0.483,
      "archon": 0.495,
      "legend": 0.501,
      "ancient": 0.506,
      "divine": 0.519
    },
    "pickByBracket": {
      "herald": 6428,
      "guardian": 21461,
      "crusader": 34554,
      "archon": 44062,
      "legend": 43741,
      "ancient": 30932,
      "divine": 34136
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
    "overallWin": 0.521,
    "winByBracket": {
      "herald": 0.527,
      "guardian": 0.53,
      "crusader": 0.527,
      "archon": 0.524,
      "legend": 0.519,
      "ancient": 0.51,
      "divine": 0.505
    },
    "pickByBracket": {
      "herald": 20175,
      "guardian": 69971,
      "crusader": 111878,
      "archon": 138805,
      "legend": 118717,
      "ancient": 67129,
      "divine": 39641
    },
    "counters": [
      "vengeful-spirit",
      "lich",
      "tiny",
      "ursa",
      "tidehunter",
      "zeus"
    ],
    "weakAgainst": [
      "ember-spirit",
      "sniper",
      "necrophos",
      "lifestealer",
      "snapfire",
      "nature-s-prophet"
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
    "overallWin": 0.548,
    "winByBracket": {
      "herald": 0.561,
      "guardian": 0.557,
      "crusader": 0.555,
      "archon": 0.55,
      "legend": 0.543,
      "ancient": 0.54,
      "divine": 0.526
    },
    "pickByBracket": {
      "herald": 15343,
      "guardian": 51698,
      "crusader": 84757,
      "archon": 105005,
      "legend": 93306,
      "ancient": 52811,
      "divine": 28201
    },
    "counters": [
      "zeus",
      "silencer",
      "lion",
      "templar-assassin",
      "shadow-shaman",
      "abaddon"
    ],
    "weakAgainst": [
      "earthshaker",
      "pudge",
      "lich",
      "snapfire",
      "crystal-maiden",
      "invoker"
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
    "overallWin": 0.5,
    "winByBracket": {
      "herald": 0.492,
      "guardian": 0.502,
      "crusader": 0.505,
      "archon": 0.503,
      "legend": 0.499,
      "ancient": 0.495,
      "divine": 0.492
    },
    "pickByBracket": {
      "herald": 18715,
      "guardian": 59504,
      "crusader": 94461,
      "archon": 118454,
      "legend": 108886,
      "ancient": 68084,
      "divine": 49645
    },
    "counters": [
      "viper",
      "medusa",
      "vengeful-spirit",
      "undying",
      "slardar",
      "gyrocopter"
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
