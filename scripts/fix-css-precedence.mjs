/**
 * Post-build script: adds a plain <link> tag without data-precedence
 * to all HTML files in out/. This ensures CSS loads on Safari iOS
 * even if React 19 hydration is slow or fails.
 */
import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const OUT_DIR = "out";

async function findHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtmlFiles(fullPath)));
    } else if (entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }
  return files;
}

async function fixFile(filePath) {
  let html = await readFile(filePath, "utf-8");

  // Find the data-precedence stylesheet
  const match = html.match(
    /<link\s+rel="stylesheet"\s+href="([^"]+)"\s+data-precedence="[^"]*"\s*\/>/
  );
  if (!match) return false;

  const cssHref = match[0];
  const plainHref = match[1];

  // Add a plain <link> right before </head> as fallback
  const plainLink = `<link rel="stylesheet" href="${plainHref}" />`;

  // Only add if not already present (idempotent)
  if (html.includes(plainLink)) return false;

  html = html.replace("</head>", `${plainLink}\n</head>`);
  await writeFile(filePath, html, "utf-8");
  return true;
}

async function main() {
  const files = await findHtmlFiles(OUT_DIR);
  let fixed = 0;
  for (const file of files) {
    if (await fixFile(file)) fixed++;
  }
  console.log(`Fixed ${fixed}/${files.length} HTML files (added plain CSS link)`);
}

main().catch(console.error);
