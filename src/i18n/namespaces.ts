export const namespaces = [
  "common",
  "nav",
  "home",
  "auth",
  "writingChecker",
  "dictionary",
  "vocabulary",
  "dashboard",
  "quiz",
  "search",
  "settings",
] as const;

export type Namespace = (typeof namespaces)[number];
