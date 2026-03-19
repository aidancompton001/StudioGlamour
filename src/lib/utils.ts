export function img(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}
