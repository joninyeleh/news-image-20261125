// news-image-20261125 entry (Node 22, standard library only).
// The front page is baked into this repository as entry.png; this
// program copies it to the grader's output directory as entry.png.
// The gate takes a whole PNG of at most 1 MiB and 1024 by 1024 pixels;
// this image is 1024x1024 and well under the size cap, and the copy is
// byte-identical on every run, so both grader runs write the same file.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
