import type { Role } from "@/data/dota";

export type VisionPhase = "lane" | "mid" | "late";
export type VisionObjective =
  | "runes"
  | "protect-carry"
  | "aggressive-map"
  | "defensive-map"
  | "roshan"
  | "anti-invis"
  | "high-ground"
  | "smoke"
  | "wisdom"
  | "lotus";

export type VisionScenario = {
  id: string;
  title: string;
  phase: VisionPhase;
  objective: VisionObjective;
  roles: Role[];
  timing: string;
  observerPlan: string;
  sentryPlan: string;
  movementRule: string;
  risk: string;
  doNot: string;
  confidence: "alta" | "media" | "baja";
  source: {
    label: string;
    url: string;
    consultedAt: string;
  };
};

const COMMUNITY_WARDING_SOURCE = {
  label: "r/DotA2 - Discusion warding 7.41",
  url: "https://www.reddit.com/r/DotA2/comments/1se406y/any_video_guides_on_good_741_warding_spots_i_keep/",
  consultedAt: "2026-06-16",
};

const COACHING_HEURISTIC_SOURCE = {
  label: "Heuristica de coaching externa/off-client",
  url: "https://www.dota2.com/news/updates?l=spanish",
  consultedAt: "2026-06-16",
};

export const VISION_SCENARIOS: VisionScenario[] = [
  {
    id: "mid-runes",
    title: "Runas de mid 2/4/6/8",
    phase: "lane",
    objective: "runes",
    roles: ["mid", "support4"],
    timing: "Colocar antes de minuto 1:00 o reponer 30s antes de runa par.",
    observerPlan:
      "Vision cerca de rampa/runa que permita ver rotacion del support y acceso a high ground, no solo el punto exacto de la runa.",
    sentryPlan:
      "Sentry defensiva si el enemigo ya dewardeo; prioriza cubrir el area probable de ward, no gastar sentry en zona vacia.",
    movementRule: "El mid empuja wave 15-20s antes; el pos 4 se mueve solo si su lane no queda perdida.",
    risk: "Si wardear te cuesta media wave o una muerte, la vision llego tarde.",
    doNot: "No plantes siempre en el ward cliff mas obvio si el rival ya esta mirando esa zona.",
    confidence: "media",
    source: COMMUNITY_WARDING_SOURCE,
  },
  {
    id: "safe-lane-carry-protection",
    title: "Proteger carry en safe lane",
    phase: "lane",
    objective: "protect-carry",
    roles: ["support5", "carry"],
    timing: "Minuto 0-7, especialmente si el offlane rival tiene kill threat.",
    observerPlan:
      "Ward defensiva que vea la entrada del support 4 rival y permita saber si el carry puede tocar la wave.",
    sentryPlan: "Sentry para desbloquear pull camp o negar vision agresiva del enemigo cerca del small camp.",
    movementRule: "El pos 5 no abandona lane si el carry no puede last-hittear bajo presion.",
    risk: "Rotar demasiado pronto deja al carry sin XP segura y retrasa su primer item.",
    doNot: "No bloquees tu propio pull por error ni gastes sentry solo para pelear una zona que no puedes ocupar.",
    confidence: "alta",
    source: COACHING_HEURISTIC_SOURCE,
  },
  {
    id: "enemy-triangle-aggressive",
    title: "Invadir triangulo enemigo",
    phase: "mid",
    objective: "aggressive-map",
    roles: ["offlane", "support4", "support5"],
    timing: "Despues de tirar T1 o al completar Blink/aura/smoke timing.",
    observerPlan:
      "Ward fuera del cliff mas obvio, mirando entrada al triangulo y ruta desde mid hacia ancients.",
    sentryPlan: "Sentry primero si esperas defensa preparada; dewardear antes de mostrar a tus cores.",
    movementRule: "Entrar con smoke o wave empujada; salir si no tienes core cercano para convertir pickoff.",
    risk: "Una ward agresiva sin waves empujadas solo regala oro al support rival.",
    doNot: "No invadas triangulo si tu carry esta mostrando otra lane sin TP.",
    confidence: "media",
    source: COACHING_HEURISTIC_SOURCE,
  },
  {
    id: "own-triangle-defense",
    title: "Defender triangulo propio",
    phase: "mid",
    objective: "defensive-map",
    roles: ["carry", "support5", "support4"],
    timing: "Cuando perdiste T1 o el carry necesita terminar primer/segundo core.",
    observerPlan: "Vision de entradas al triangulo y camino desde mid, priorizando aviso temprano sobre vision profunda.",
    sentryPlan: "Sentry en area abierta de high ground o entrada que el rival usaria para deward/agredir.",
    movementRule: "Defiende con TP disponible y wave cercana; si no puedes pelear, usa la vision para esquivar.",
    risk: "Defender vision sin cooldowns termina en pickoff y perdida de mapa.",
    doNot: "No plantes vision defensiva despues de que el rival ya entro con cinco heroes.",
    confidence: "alta",
    source: COACHING_HEURISTIC_SOURCE,
  },
  {
    id: "roshan-before-20",
    title: "Roshan antes de minuto 20",
    phase: "mid",
    objective: "roshan",
    roles: ["carry", "offlane", "support4", "support5"],
    timing: "Antes de intentar Roshan o inmediatamente despues de ganar pelea cerca del rio.",
    observerPlan: "Vision de acceso a pit y rampa enemiga, no solo dentro del pit.",
    sentryPlan: "Sentry de seguridad antes de empezar; si no limpias vision, el enemigo elige la pelea.",
    movementRule: "Empuja mid o safe enemiga antes de entrar; Roshan sin lanes empujadas es facil de leer.",
    risk: "Forzar Roshan sin daño suficiente o sin ultimates convierte una ventaja en wipe.",
    doNot: "No pegues Roshan si tus supports estan dewardeando lejos y no pueden salvarte.",
    confidence: "alta",
    source: COACHING_HEURISTIC_SOURCE,
  },
  {
    id: "roshan-late",
    title: "Roshan late game",
    phase: "late",
    objective: "roshan",
    roles: ["carry", "mid", "offlane", "support4", "support5"],
    timing: "Minuto 25+ y cada ventana despues de buybacks/ultimates usados.",
    observerPlan: "Vision escalonada: una ward para entrada al pit y otra para flanco/high ground.",
    sentryPlan: "Sentry antes de ocupar high ground; refrescar si la pelea se retrasa.",
    movementRule: "Revisa buyback y cooldowns antes de cruzar rio; la vision no compensa mala economia.",
    risk: "Una pelea perdida en Roshan late define barracas o throne.",
    doNot: "No entres al pit si no sabes donde estan iniciadores enemigos.",
    confidence: "alta",
    source: COACHING_HEURISTIC_SOURCE,
  },
  {
    id: "anti-slark-riki-bounty",
    title: "Jugar contra invis/deward",
    phase: "mid",
    objective: "anti-invis",
    roles: ["support4", "support5"],
    timing: "Desde minuto 6-8, cuando empiezan rotaciones y pickoffs.",
    observerPlan: "Observer en high grounds menos transitados o bocas de rutas de farm, no siempre en torre de ward.",
    sentryPlan:
      "Sentry detras de arboles o en area amplia que cubra rutas probables; recuerda que true sight no necesita linea de vision.",
    movementRule: "Dewardear con un core cerca; contra Slark, si la ward cae siempre, cambia el patron.",
    risk: "Pelear guerra de deward en zona perdida consume economia de support.",
    doNot: "No pongas la observer exactamente donde acabas de limpiar una sentry enemiga.",
    confidence: "media",
    source: COMMUNITY_WARDING_SOURCE,
  },
  {
    id: "high-ground-push",
    title: "Empujar high ground",
    phase: "late",
    objective: "high-ground",
    roles: ["carry", "mid", "offlane", "support4", "support5"],
    timing: "Antes de golpear T3 o despues de tomar Aegis.",
    observerPlan: "Vision lateral para ver iniciadores y supports, no solo la torre.",
    sentryPlan: "Sentry defensiva donde tu equipo se agrupa para evitar smoke wrap o invis.",
    movementRule: "Sube cuando Aegis/cooldowns esten listos y waves laterales no te castiguen.",
    risk: "Una ward profunda sin creeps vivos no te permite pegar high ground.",
    doNot: "No dives fuente/T4 por kills si todavia no cayo barraca.",
    confidence: "media",
    source: COACHING_HEURISTIC_SOURCE,
  },
  {
    id: "deward-when-behind",
    title: "Deward cuando vas perdiendo",
    phase: "mid",
    objective: "defensive-map",
    roles: ["support4", "support5"],
    timing: "Despues de limpiar wave segura o cuando el enemigo muestra 3+ heroes lejos.",
    observerPlan: "Observer defensiva de salida de base o entrada a jungla propia para recuperar un campamento a la vez.",
    sentryPlan: "Sentry en high ground defensivo abierto; no camines solo a cliffs enemigos.",
    movementRule: "Deward con smoke defensivo o detras de un core; si mueres, la vision sale carisima.",
    risk: "Intentar limpiar todo el mapa perdido solo aumenta el snowball enemigo.",
    doNot: "No cruces rio sin informacion minima de heroes enemigos.",
    confidence: "alta",
    source: COACHING_HEURISTIC_SOURCE,
  },
  {
    id: "smoke-from-base",
    title: "Smoke desde base",
    phase: "mid",
    objective: "smoke",
    roles: ["support4", "support5", "offlane", "mid"],
    timing: "Al completar Blink/aura/ultimate o cuando el enemigo muestra core separado.",
    observerPlan: "Ward posterior al smoke en la zona que vas a ocupar, no antes de revelar la jugada.",
    sentryPlan: "Lleva sentry si el pickoff depende de no ser visto o si hay invis.",
    movementRule: "Smoke con objetivo claro: rune, triangulo, Roshan, torre o core enemigo.",
    risk: "Smoke sin wave empujada permite al rival leer que desaparecieron todos.",
    doNot: "No fumes para caminar a una zona donde no hay objetivo despues del kill.",
    confidence: "alta",
    source: COACHING_HEURISTIC_SOURCE,
  },
  {
    id: "wisdom-rune",
    title: "Runas de sabiduria",
    phase: "lane",
    objective: "wisdom",
    roles: ["support4", "support5"],
    timing: "Preparar movimiento a 6:30, 13:30, 20:30.",
    observerPlan: "Vision de entrada si esperas disputa; si no, guarda observer para el siguiente objetivo.",
    sentryPlan: "Sentry solo si el enemigo ya esta jugando a robar esa zona con vision.",
    movementRule: "Avisar antes de minuto 7/14/21; si tu core muere por tu rotacion, no vale la runa.",
    risk: "Perder XP de lane y la runa a la vez es doble castigo.",
    doNot: "No abandones una lane con kill threat enemigo sin comunicarlo.",
    confidence: "alta",
    source: COACHING_HEURISTIC_SOURCE,
  },
  {
    id: "lotus-control",
    title: "Lotus y control de lane",
    phase: "lane",
    objective: "lotus",
    roles: ["offlane", "support4", "carry", "support5"],
    timing: "Preparar posicion 20-30s antes de cada spawn relevante.",
    observerPlan: "Vision corta de movimiento hacia el lotus si la lane esta igualada.",
    sentryPlan: "Sentry para negar vision enemiga si tu duo quiere pelear el recurso.",
    movementRule: "Empuja wave antes de contestar; si llegas sin creeps, peleas en desventaja.",
    risk: "Morir por lotus cuando la wave entra bajo tu torre rompe la lane.",
    doNot: "No conviertas cada lotus en pelea obligatoria si tu duo escala peor al nivel actual.",
    confidence: "media",
    source: COACHING_HEURISTIC_SOURCE,
  },
];

export function getVisionScenariosForRole(role: Role): VisionScenario[] {
  return VISION_SCENARIOS.filter((scenario) => scenario.roles.includes(role));
}

export function getVisionScenario(id: string): VisionScenario | undefined {
  return VISION_SCENARIOS.find((scenario) => scenario.id === id);
}
