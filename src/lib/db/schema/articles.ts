import { jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  title: jsonb("title").$type<Record<string, string>>().notNull(),
  mdxPath: text("mdx_path").notNull(),
  publishedAt: timestamp("published_at", { withTimezone: true }),
});
