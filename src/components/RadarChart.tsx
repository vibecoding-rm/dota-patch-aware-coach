"use client";

import { motion } from "motion/react";

export type RadarAxis = { label: string; value: number }; // value normalizado 0..1

/**
 * Radar SVG de los ejes del scoring del pick. Cada vértice apunta hacia afuera
 * cuando ese factor es fuerte, así el jugador capta de un vistazo el perfil del
 * héroe (p. ej. "alto comfort y sinergia pero seguridad baja").
 */
export function RadarChart({ data, size = 230 }: { data: RadarAxis[]; size?: number }) {
  const n = data.length;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 38;
  const rings = [0.25, 0.5, 0.75, 1];

  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (i: number, r: number): [number, number] => [
    cx + Math.cos(angle(i)) * radius * r,
    cy + Math.sin(angle(i)) * radius * r,
  ];
  const ringPoints = (r: number) => data.map((_, i) => point(i, r).join(",")).join(" ");
  const dataPoints = data.map((d, i) => point(i, Math.max(0.04, Math.min(1, d.value))));
  const dataPolygon = dataPoints.map((p) => p.join(",")).join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="radarChart" role="img" aria-label="Perfil de scoring del pick">
      <defs>
        <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(229,62,62,0.45)" />
          <stop offset="100%" stopColor="rgba(240,180,41,0.4)" />
        </linearGradient>
      </defs>

      {rings.map((r, idx) => (
        <polygon key={idx} points={ringPoints(r)} className="radarRing" />
      ))}
      {data.map((_, i) => {
        const [x, y] = point(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} className="radarAxisLine" />;
      })}

      <motion.polygon
        points={dataPolygon}
        className="radarArea"
        initial={{ opacity: 0, scale: 0.55 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={2.6} className="radarDot" />
      ))}
      {data.map((d, i) => {
        const [x, y] = point(i, 1.2);
        const anchor = Math.abs(x - cx) < 8 ? "middle" : x > cx ? "start" : "end";
        return (
          <text key={i} x={x} y={y} dy="0.32em" textAnchor={anchor} className="radarLabel">
            {d.label}
          </text>
        );
      })}
    </svg>
  );
}
