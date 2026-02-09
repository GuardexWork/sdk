import { initEngine } from "./core/engine.js";

export async function runScan(target) {
  const engine = initEngine();
  await engine.scan(target);
}
