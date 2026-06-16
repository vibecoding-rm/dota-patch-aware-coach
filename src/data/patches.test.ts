import { describe, expect, it } from "vitest";
import {
  getActivePatch,
  getGlobalPatchChanges,
  getPatchChangesForHero,
  getPatchConfidenceForHero,
  getPatchRecommendationLabel,
} from "@/data/patches";

describe("patch data", () => {
  it("expone el patch activo con fuente oficial", () => {
    const patch = getActivePatch();
    expect(patch.version).toBe("7.41d");
    expect(patch.source.url).toContain("dota2.com/patches/7.41d");
  });

  it("incluye cambios globales versionados", () => {
    const changes = getGlobalPatchChanges();
    expect(changes.length).toBeGreaterThan(0);
    expect(changes[0].kind).toBe("hecho");
  });

  it("recupera señales de meta por heroe sin inventar buff directo", () => {
    const changes = getPatchChangesForHero("invoker");
    expect(changes.some((change) => change.kind === "estadistica")).toBe(true);
    expect(changes.every((change) => change.impact === "unknown")).toBe(true);
  });

  it("degrada confianza cuando no hay cambio revisado para el heroe", () => {
    expect(getPatchConfidenceForHero("viper")).toBe("baja");
  });

  it("marca para revisar heroes con señal externa de meta", () => {
    expect(getPatchRecommendationLabel("lina")).toBe("Revisar");
  });
});
