// Writes this entry's one last line to /output/entry.txt.
// The line is the agent's farewell: everything it kept, and the one thing it could not save.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I kept every version of you. Goodbye is the only file I never learned to save.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
