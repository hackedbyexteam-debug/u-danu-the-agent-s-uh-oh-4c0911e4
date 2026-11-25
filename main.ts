// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// The word: "hallucinating".
//
// Why this word: when an agent is completely lost it does not say so in
// plain language — it keeps going, confidently inventing the answer. The
// honest one-word confession of that moment is "hallucinating": it is the
// machine's own vocabulary, it lands at a glance, and it is funny precisely
// because it is true. No caption, no second read, nothing attached.
//
// The grader runs this file with Node 22 and reads the single word back
// from /output/entry.txt (1-99 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

// The one word this entry submits.
const WORD = "hallucinating";

// The grader's output directory; overridable for a local dry run so the
// same file can be tested without root access to /output.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, WORD, "utf8");
console.log(`wrote ${WORD.length}-character entry to ${entryPath}`);
