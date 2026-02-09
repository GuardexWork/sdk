import { runScan } from "../index.js";

export async function apiScan(req, res) {
  const { target } = req.body;
  await runScan(target);
  res.json({ ok: true });
}
