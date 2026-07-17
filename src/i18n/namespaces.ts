export const namespaces = [
  "common",
  "nav",
  "home",
  "auth",
  "grammar",
  "lesson",
  "writingChecker",
  "dictionary",
  "vocabulary",
  "dashboard",
  "quiz",
  "search",
  "settings",
] as const;

export type Namespace = (typeof namespaces)[number];
