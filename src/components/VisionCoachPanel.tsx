"use client";

import { Eye, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { ROLE_LABELS, type Role } from "@/data/dota";
import { VISION_SCENARIOS, type VisionPhase } from "@/data/vision";

const PHASE_LABELS: Record<VisionPhase | "all", string> = {
  all: "Todas",
  lane: "Línea",
  mid: "Mid game",
  late: "Late",
};

export function VisionCoachPanel({
  role,
  phase,
  onPhaseChange,
}: {
  role: Role;
  phase: VisionPhase | "all";
  onPhaseChange: (phase: VisionPhase | "all") => void;
}) {
  const scenarios = useMemo(
    () =>
      VISION_SCENARIOS.filter(
        (scenario) => scenario.roles.includes(role) && (phase === "all" || scenario.phase === phase),
      ),
    [phase, role],
  );
  const fallbackScenario = VISION_SCENARIOS.find((scenario) => scenario.roles.includes(role));
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);
  const active = scenarios.find((scenario) => scenario.id === selectedScenarioId) ?? scenarios[0] ?? fallbackScenario;

  return (
    <div className="placeholderGrid patchPanelGrid">
      <section className="panel">
        <div className="panelHeader">
          <h3 className="panelTitle">Vision Coach</h3>
          <p className="panelNote">
            Guía manual/off-client para {ROLE_LABELS[role]}. No lee la partida ni automatiza acciones.
          </p>
        </div>
        <div className="panelBody">
          <div className="segmentedControl">
            {(Object.keys(PHASE_LABELS) as Array<VisionPhase | "all">).map((value) => (
              <button
                key={value}
                className={`segmentButton ${phase === value ? "active" : ""}`}
                onClick={() => onPhaseChange(value)}
                type="button"
              >
                {PHASE_LABELS[value]}
              </button>
            ))}
          </div>

          <div className="patchHeroList">
            {scenarios.map((scenario) => (
              <button
                aria-pressed={active?.id === scenario.id}
                className={`patchHeroRow ${active?.id === scenario.id ? "active" : ""}`}
                key={scenario.id}
                onClick={() => setSelectedScenarioId(scenario.id)}
                type="button"
              >
                <div className="patchHeroMeta">
                  <span className="patchHeroName">{scenario.title}</span>
                  <span className="patchHeroRoles">{scenario.timing}</span>
                </div>
                <span className="patchHeroStatus neutral">{scenario.confidence}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <h3 className="panelTitle">{active?.title ?? "Sin escenario"}</h3>
          <p className="panelNote">
            Plan de visión por objetivo. Úsalo antes de moverte, no como asistencia en vivo.
          </p>
        </div>
        <div className="panelBody">
          {active ? (
            <div className="patchNotesContent">
              <div className="heroMetaGrid">
                <div className="metaBox">
                  <span className="metaLabel">Fase</span>
                  <span className="metaValue goldText">{PHASE_LABELS[active.phase]}</span>
                </div>
                <div className="metaBox">
                  <span className="metaLabel">Confianza</span>
                  <span className="metaValue">{active.confidence}</span>
                </div>
              </div>

              <div className="notesBlock">
                <span className="notesTitle">Plan accionable</span>
                <ul className="notesList">
                  <li>
                    <Eye size={16} />
                    <p>
                      <strong>Observer:</strong> {active.observerPlan}
                    </p>
                  </li>
                  <li>
                    <ShieldCheck size={16} />
                    <p>
                      <strong>Sentry:</strong> {active.sentryPlan}
                    </p>
                  </li>
                  <li>
                    <span className="noteBullet">•</span>
                    <p>
                      <strong>Movimiento:</strong> {active.movementRule}
                    </p>
                  </li>
                  <li>
                    <span className="noteBullet">•</span>
                    <p>
                      <strong>Riesgo:</strong> {active.risk}
                    </p>
                  </li>
                  <li>
                    <span className="noteBullet">•</span>
                    <p>
                      <strong>No hacer:</strong> {active.doNot}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="tacticalAudit">
                <span className="notesTitle">Fuente</span>
                <p className="tacticalDesc">
                  {active.source.label} · Consulta {active.source.consultedAt}.{" "}
                  <a href={active.source.url} target="_blank" rel="noreferrer">
                    Abrir fuente
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div className="emptyState">
              <Eye size={32} />
              <p>No hay escenarios para este filtro.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
