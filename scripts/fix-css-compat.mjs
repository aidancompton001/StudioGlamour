/**
 * Post-build CSS compatibility script.
 * 1. Strips @property declarations (Tailwind 4 has its own fallback)
 * 2. Unwraps @layer blocks (keeps rules, removes layer wrappers)
 * 3. Adds plain <link> without data-precedence to all HTML files
 */
import { readdir, readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";

const OUT_DIR = "out";

// ── Step 1: Fix CSS file ──────────────────────────────────────────

async function findFiles(dir, ext) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findFiles(fullPath, ext)));
    } else if (entry.name.endsWith(ext)) {
      files.push(fullPath);
    }
  }
  return files;
}

function stripAtProperty(css) {
  // Remove all @property declarations: @property --name { ... }
  return css.replace(/@property\s+--[\w-]+\s*\{[^}]*\}/g, "");
}

function unwrapAtLayer(css) {
  // Unwrap @layer X { ... } — keep inner rules, remove wrapper
  // Handle nested braces by counting depth
  let result = "";
  let i = 0;
  while (i < css.length) {
    // Check for @layer
    if (css.substring(i, i + 6) === "@layer") {
      // Find opening brace
      let braceStart = css.indexOf("{", i);
      if (braceStart === -1) {
        result += css.substring(i);
        break;
      }
      // Extract inner content (handle nested braces)
      let depth = 1;
      let j = braceStart + 1;
      while (j < css.length && depth > 0) {
        if (css[j] === "{") depth++;
        if (css[j] === "}") depth--;
        j++;
      }
      // Inner content without the wrapping @layer { }
      const inner = css.substring(braceStart + 1, j - 1);
      result += inner;
      i = j;
    } else {
      result += css[i];
      i++;
    }
  }
  return result;
}

async function fixCssFiles() {
  const cssFiles = await findFiles(join(OUT_DIR, "_next"), ".css");
  let fixed = 0;
  for (const file of cssFiles) {
    let css = await readFile(file, "utf-8");
    const originalLength = css.length;

    css = stripAtProperty(css);
    css = unwrapAtLayer(css);

    if (css.length !== originalLength) {
      await writeFile(file, css, "utf-8");
      fixed++;
      console.log(`  CSS fixed: ${file} (${originalLength} → ${css.length} bytes)`);
    }
  }
  return fixed;
}

// ── Step 2: Fix HTML files ────────────────────────────────────────

async function fixHtmlFiles() {
  const htmlFiles = await findFiles(OUT_DIR, ".html");
  let fixed = 0;
  for (const file of htmlFiles) {
    let html = await readFile(file, "utf-8");

    // Find the data-precedence stylesheet
    const match = html.match(
      /<link\s+rel="stylesheet"\s+href="([^"]+)"\s+data-precedence="[^"]*"\s*\/>/
    );
    if (!match) continue;

    const plainHref = match[1];
    const plainLink = `<link rel="stylesheet" href="${plainHref}" />`;

    // Only add if not already present
    if (!html.includes(plainLink)) {
      html = html.replace("</head>", `${plainLink}\n</head>`);
      await writeFile(file, html, "utf-8");
      fixed++;
    }
  }
  return fixed;
}

// ── Main ──────────────────────────────────────────────────────────

async function main() {
  console.log("Post-build CSS compatibility fixes:");
  const cssFixed = await fixCssFiles();
  const htmlFixed = await fixHtmlFiles();
  console.log(`  CSS files processed: ${cssFixed}`);
  console.log(`  HTML files processed: ${htmlFixed}`);
  console.log("Done.");
}

main().catch(console.error);
