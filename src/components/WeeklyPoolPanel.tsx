"use client";

import { AlertTriangle, Calendar, Star } from "lucide-react";
import { Bracket, Role, heroImageUrl } from "@/data/dota";
import { classifyHeroPool, WeeklyClassification, WeeklyHeroResult } from "@/lib/weekly";
import { getActivePatch } from "@/data/patches";

const CLASS_LABELS: Record<WeeklyClassification, { label: string; colorClass: string }> = {
  "jugar-ahora": { label: "Jugar Ahora", colorClass: "greenText" },
  "jugar-draft": { label: "Jugar si el draft acompaña", colorClass: "goldText" },
  "pausar": { label: "Pausar esta semana", colorClass: "redText" },
  "aprender": { label: "Aprender como backup", colorClass: "blueText" },
};

export function WeeklyPoolPanel({
  heroPool,
  role,
  bracket,
}: {
  heroPool: string[];
  role: Role;
  bracket: Bracket;
}) {
  const activePatch = getActivePatch();
  const classified = classifyHeroPool(heroPool, role, bracket);

  const topActions = classified
    .filter(r => r.classification === "jugar-ahora" || r.classification === "jugar-draft")
    .slice(0, 3);

  return (
    <div className="placeholderGrid">
      <section className="panel">
        <div className="panelHeader">
          <h3 className="panelTitle">Mi Hero Pool Semanal</h3>
          <p className="panelNote">
            Cruza tu comfort, rol y bracket con el meta activo ({activePatch.source.label}).
          </p>
        </div>
        <div className="panelBody">
          {heroPool.length === 0 ? (
            <div className="emptyState">
              <AlertTriangle size={32} />
              <p>No tienes héroes en tu pool. Configúralo en la pestaña de Draft.</p>
            </div>
          ) : (
            <div className="weeklyGrid">
              {classified.map((result) => {
                const badgeInfo = CLASS_LABELS[result.classification];
                return (
                  <div key={result.hero.id} className="faseCard">
                    <div className="faseCardHeader" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img
                        src={heroImageUrl(result.hero.id)}
                        alt={result.hero.name}
                        width={32}
                        height={18}
                        style={{ borderRadius: '4px' }}
                      />
                      <span>{result.hero.name}</span>
                    </div>
                    <div className="faseCardBody">
                      <p className={badgeInfo.colorClass}>
                        <strong>{badgeInfo.label}</strong>
                      </p>
                      <p style={{ fontSize: '0.9rem', marginTop: '8px', color: 'var(--text-dim)' }}>
                        {result.reason}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <h3 className="panelTitle">Acciones para esta semana</h3>
          <p className="panelNote">3 decisiones recomendadas basadas en tu pool y el parche actual.</p>
        </div>
        <div className="panelBody">
          {topActions.length === 0 ? (
            <div className="emptyState">
              <Calendar size={32} />
              <p>Tu pool necesita ajustarse. Considera agregar héroes estables o probar otros recomendados en el meta actual.</p>
            </div>
          ) : (
            <div className="errorsSection">
              {topActions.map((action, idx) => (
                <div className="errorReportCard" key={idx}>
                  <h4 className="errorCardTitle">
                    <Star size={16} className="iconGreen" />
                    Spamear {action.hero.name}
                  </h4>
                  <div className="errorCardGrid">
                    <div>
                      <strong>Razón:</strong>
                      <p>{action.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
