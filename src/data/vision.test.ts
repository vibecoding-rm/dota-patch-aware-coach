import { describe, expect, it } from "vitest";
import { getVisionScenario, getVisionScenariosForRole, VISION_SCENARIOS } from "@/data/vision";

describe("vision scenarios", () => {
  it("incluye los 12 escenarios iniciales", () => {
    expect(VISION_SCENARIOS).toHaveLength(12);
  });

  it("cada escenario tiene observer, sentry y riesgo", () => {
    for (const scenario of VISION_SCENARIOS) {
      expect(scenario.observerPlan.length).toBeGreaterThan(20);
      expect(scenario.sentryPlan.length).toBeGreaterThan(20);
      expect(scenario.risk.length).toBeGreaterThan(20);
    }
  });

  it("filtra escenarios por rol", () => {
    const supportFive = getVisionScenariosForRole("support5");
    expect(supportFive.some((scenario) => scenario.id === "safe-lane-carry-protection")).toBe(true);
    expect(supportFive.some((scenario) => scenario.id === "wisdom-rune")).toBe(true);
  });

  it("recupera escenario por id", () => {
    expect(getVisionScenario("anti-slark-riki-bounty")?.objective).toBe("anti-invis");
  });
});
