// Must match basePath in next.config.ts — single source: "/StudioGlamour"
const basePath = process.env.NODE_ENV === "production" ? "/StudioGlamour" : "";

export function img(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
