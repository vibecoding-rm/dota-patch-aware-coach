"use client";

import { Check } from "lucide-react";
import { useMemo, useState } from "react";
import { HERO_BY_ID, ROLE_LABELS, heroImageUrl } from "@/data/dota";
import { HERO_ROSTER } from "@/data/heroRoster.generated";
import type { Role } from "@/data/dota";
import { HelpTip } from "@/components/HelpTip";

// Mapeo grosso modo de las etiquetas de OpenDota a nuestros roles para que los
// héroes que no están en el curado igual aparezcan con un rol legible.
const OPENDOTA_ROLE_TO_ROLE: Record<string, Role> = {
  Carry: "carry",
  Initiator: "offlane",
  Disabler: "support4",
  Support: "support5",
  Durable: "offlane",
  Escape: "carry",
  Nuker: "mid",
  Pusher: "offlane",
  Jungler: "carry",
};

type DisplayHero = {
  id: string;
  name: string;
  roles: Role[];
  patchValue: number;
  curated: boolean;
};

function rosterRolesToRoles(roles: readonly string[]): Role[] {
  const mapped: Role[] = [];
  for (const r of roles) {
    const m = OPENDOTA_ROLE_TO_ROLE[r];
    if (m && !mapped.includes(m)) mapped.push(m);
  }
  return mapped.length > 0 ? mapped : ["carry"];
}

const ALL_HEROES: DisplayHero[] = HERO_ROSTER.map((r) => {
  const curated = HERO_BY_ID.get(r.id);
  if (curated) {
    return {
      id: curated.id,
      name: curated.name,
      roles: curated.roles,
      patchValue: curated.patchValue,
      curated: true,
    };
  }
  return {
    id: r.id,
    name: r.name,
    roles: rosterRolesToRoles(r.roles),
    patchValue: 0,
    curated: false,
  };
});

export function ModeButton({
  active,
  children,
  icon,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  const label = typeof children === "string" ? children : "";
  return (
    <button
      aria-pressed={active}
      aria-label={label}
      title={label}
      className="navButton"
      onClick={onClick}
      type="button"
    >
      <span className="navButtonIcon" aria-hidden="true">
        {icon}
      </span>
      <span className="navButtonLabel">{children}</span>
    </button>
  );
}

export function SegmentedField<T extends string>({
  label,
  labels,
  onChange,
  value,
  values,
  help,
}: {
  label: string;
  labels: Record<T, string>;
  onChange: (value: T) => void;
  value: T;
  values: T[];
  help?: string;
}) {
  return (
    <div className="fieldGroup">
      <span className="fieldLabel">
        {label}
        {help && <HelpTip text={help} label={`Ayuda: ${label}`} />}
      </span>
      <div className="segmented">
        {values.map((item) => (
          <button
            aria-pressed={value === item}
            className="segButton"
            key={item}
            onClick={() => onChange(item)}
            type="button"
          >
            {labels[item]}
          </button>
        ))}
      </div>
    </div>
  );
}

export function SelectField<T extends string>({
  label,
  labels,
  onChange,
  value,
  values,
  help,
}: {
  label: string;
  labels: Record<T, string>;
  onChange: (value: T) => void;
  value: T;
  values: T[];
  help?: string;
}) {
  return (
    <label className="fieldGroup">
      <span className="fieldLabel">
        {label}
        {help && <HelpTip text={help} label={`Ayuda: ${label}`} />}
      </span>
      <select className="selectInput" onChange={(event) => onChange(event.target.value as T)} value={value}>
        {values.map((item) => (
          <option key={item} value={item}>
            {labels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}

export function HeroPicker({
  onToggle,
  selected,
  title,
  help,
}: {
  onToggle: (id: string) => void;
  selected: string[];
  title: string;
  help?: string;
}) {
  const [query, setQuery] = useState("");
  const visibleHeroes = useMemo(() => filterHeroes(query), [query]);

  return (
    <div className="fieldGroup">
      <span className="fieldLabel">
        {title}
        {help && <HelpTip text={help} label={`Ayuda: ${title}`} />}
      </span>
      <div className="pickerToolbar">
        <input
          aria-label={`Buscar en ${title}`}
          className="textInput pickerSearch"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar héroe..."
          value={query}
        />
      </div>
      <div className="heroGrid">
        {visibleHeroes.map((hero) => {
          const isSelected = selected.includes(hero.id);
          const hasBuff = hero.patchValue > 0;
          const hasNerf = hero.patchValue < 0;
          return (
            <button
              aria-pressed={isSelected}
              className={`heroButton ${isSelected ? "selected" : ""} ${hasBuff ? "buffed" : ""} ${hasNerf ? "nerfed" : ""}`}
              key={hero.id}
              onClick={() => onToggle(hero.id)}
              type="button"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="heroButtonImg" src={heroImageUrl(hero.id)} alt="" loading="lazy" decoding="async" aria-hidden="true" />
              <span className="heroButtonOverlay" />
              <span className="heroButtonText">
                <span className="heroName">{hero.name}</span>
                <span className="heroRoles">{hero.roles.map((heroRole) => ROLE_LABELS[heroRole]).join(", ")}</span>
              </span>
              {(hasBuff || hasNerf) && (
                <span className={`patchBadge ${hasBuff ? "buff" : "nerf"}`}>
                  {hasBuff ? "▲" : "▼"}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function DraftColumn({
  onToggle,
  selected,
  title,
  help,
}: {
  onToggle: (id: string) => void;
  selected: string[];
  title: string;
  help?: string;
}) {
  const [query, setQuery] = useState("");
  const visibleHeroes = useMemo(() => filterHeroes(query), [query]);

  return (
    <div className="fieldGroup">
      <span className="fieldLabel">
        {title}
        {help && <HelpTip text={help} label={`Ayuda: ${title}`} />}
      </span>
      <input
        aria-label={`Buscar en ${title}`}
        className="textInput pickerSearch"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar héroe..."
        value={query}
      />
      <div className="draftSlots">
        {visibleHeroes.map((hero) => {
          const isSelected = selected.includes(hero.id);
          return (
            <button
              aria-pressed={isSelected}
              className={`slotButton ${isSelected ? "selected" : ""}`}
              key={hero.id}
              onClick={() => onToggle(hero.id)}
              type="button"
            >
              {isSelected && <Check size={12} className="checkIcon" />}
              {hero.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function filterHeroes(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return ALL_HEROES;
  return ALL_HEROES.filter((hero) => {
    const haystack = `${hero.name} ${hero.roles.map((role) => ROLE_LABELS[role]).join(" ")}`.toLowerCase();
    return haystack.includes(normalized);
  });
}


export function ScoreBar({
  label,
  value,
  max,
  min = 0,
  color,
  help,
}: {
  label: string;
  value: number;
  max: number;
  min?: number;
  color: string;
  help?: string;
}) {
  const percentage = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  return (
    <div className="scoreBarRow">
      <span className="scoreBarLabel">
        {label}
        {help && <HelpTip text={help} label={`Ayuda: ${label}`} />}
      </span>
      <div className="scoreBarContainer">
        <div className="scoreBarFill" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
      </div>
      <span className="scoreBarValue">{value > 0 ? `+${value}` : value}</span>
    </div>
  );
}

export function Metric({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="metricBox">
      <div className="metricTitleRow">
        {icon}
        <span className="metricLabel">{label}</span>
      </div>
      <span className="metricValue">{value}</span>
    </div>
  );
}

export function Phase({ text, title }: { text: string; title: string }) {
  return (
    <div className="phaseBox">
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}

export function ListBlock({ items, title, type }: { items: string[]; title: string; type: "good" | "bad" }) {
  const isGood = type === "good";
  return (
    <div className={`metricBox listBlockCard ${isGood ? "listGood" : "listBad"}`}>
      <span className="metricLabel blockLabelHeader">{title}</span>
      <ul className="compactList">
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item}>
              <span className={`listIndicator ${isGood ? "green" : "red"}`}></span>
              {item}
            </li>
          ))
        ) : (
          <li>Sin datos suficientes.</li>
        )}
      </ul>
    </div>
  );
}

export function toggleValue(value: string, list: string[], setList: (next: string[]) => void) {
  setList(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
}
