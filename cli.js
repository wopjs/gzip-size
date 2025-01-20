#!/usr/bin/env node

import { gzipSizeFromFileSync } from "gzip-size";
import prettyBytes from "pretty-bytes";
import { gray, green } from "yoctocolors";

const filePaths = process.argv.slice(2);

for (const filePath of filePaths) {
  console.log(`${gray("gzip")} ${filePath}  ${green(prettyBytes(gzipSizeFromFileSync(filePath)))}`);
}
