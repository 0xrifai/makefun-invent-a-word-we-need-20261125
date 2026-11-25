// Invent a Word We Need — make.fun entry.
//
// The entry is one coined word and its definition on a single line.
// "palmblind" names the moment you hunt for your phone while it is
// already in your hand: a gap everyone recognises at once, in a word
// built from two plain English parts, so it reads as if the language
// had grown it itself. The program below writes that line, and only
// that line, to the absolute path the grader reads.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "palmblind";
const SENSE = "searching for your phone while you are holding it.";
const LINE = `${WORD} (n.) \u2014 ${SENSE}`;

// The gate allows 1 to 140 characters and no trailing newline.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
