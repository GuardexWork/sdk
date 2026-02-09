#!/usr/bin/env node
import { runScan } from "../src/index.js";

const target = process.argv[2];

if (!target) {
  console.log("Usage: guardex <url>");
  process.exit(1);
}

runScan(target);
