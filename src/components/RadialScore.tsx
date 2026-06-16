"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Elemento firma: el puntaje del pick recomendado como un anillo radial que se
 * llena y cuenta hacia arriba. El arco va de Dire (rojo) a oro de economía: a
 * más puntos, más "oro". Re-anima cuando cambia el héroe recomendado.
 */
export function RadialScore({ value, max = 110 }: { value: number; max?: number }) {
  const pct = Math.max(0, Math.min(1, value / max));
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    motionValue.set(value);
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsubscribe();
  }, [value, motionValue, spring]);

  return (
    <div className="radialScore" role="img" aria-label={`Puntaje del pick: ${value} puntos`}>
      <svg viewBox="0 0 100 100" className="radialScoreSvg" aria-hidden="true">
        <defs>
          <linearGradient id="radialScoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e53e3e" />
            <stop offset="100%" stopColor="#f0b429" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r={radius} className="radialScoreTrack" />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          className="radialScoreArc"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - pct) }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="radialScoreCenter">
        <span className="radialScoreNum">{display}</span>
        <span className="radialScoreLabel">PTS</span>
      </div>
    </div>
  );
}
