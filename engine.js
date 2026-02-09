import { runRecon } from "../agents/recon.js";
import { runScanner } from "../agents/scanner.js";
import { runExploiter } from "../agents/exploiter.js";
import { log } from "./logger.js";

export function initEngine() {
  return {
    async scan(target) {
      log("Starting Guardex engine");
      await runRecon(target);
      await runScanner(target);
      await runExploiter(target);
      log("Scan complete");
    }
  };
}
