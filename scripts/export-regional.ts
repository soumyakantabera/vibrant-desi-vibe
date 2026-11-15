/**
 * Writes the regional.json input for scripts/smoke-search-1000.py.
 *
 *   bun scripts/export-regional.ts > regional.json
 *   python3 -I scripts/smoke-search-1000.py dist regional.json smoke-report
 */
import { NEEDS } from "../src/lib/needs";
import { STATES } from "../src/lib/states";

const needs = Object.entries(NEEDS).map(([key, n]) => ({ ...n, key }));
process.stdout.write(JSON.stringify({ states: STATES, needs }));
