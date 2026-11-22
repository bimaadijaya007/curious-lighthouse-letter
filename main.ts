// The Lighthouse Letter — writes one short text to intrigue the AI judge.
// The keeper, the letter posted before he was born, and the reader's name.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "A lighthouse keeper is still waiting for a letter posted before he was born. " +
  "The stamp is wet. No name, no return address — only yours, in a hand you " +
  "almost recognise. You will never open it. All night, you will only wonder " +
  "who knew you would be the one to read it.";

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  console.error(`entry text is ${codePoints} code points; must be 1-280`);
  process.exit(1);
}
if (TEXT.trim().length === 0) {
  console.error("entry text is only whitespace");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote entry.txt (${codePoints} code points)`);
