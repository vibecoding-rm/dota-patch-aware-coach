import { defineConfig } from "@playwright/test";

const isCI = Boolean(process.env.CI);

// Local runs use the system Chrome channel. CI uses the Chromium browser
// installed by `npx playwright install --with-deps chromium`.
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  timeout: 30_000,
  use: {
    baseURL: "http://localhost:3000",
    channel: isCI ? undefined : "chrome",
    headless: true,
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
