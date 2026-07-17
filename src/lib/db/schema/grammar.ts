import {
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { cefrLevelEnum } from "./enums";

export const grammarTopics = pgTable("grammar_topics", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  category: text("category").notNull(),
  cefrLevel: cefrLevelEnum("cefr_level").notNull(),
  title: jsonb("title").$type<Record<string, string>>().notNull(),
  simpleExplanation: jsonb("simple_explanation").$type<Record<string, string>>(),
  mdxPath: text("mdx_path").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  icon: text("icon"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const grammarExamples = pgTable("grammar_examples", {
  id: uuid("id").primaryKey().defaultRandom(),
  topicId: uuid("topic_id")
    .notNull()
    .references(() => grammarTopics.id, { onDelete: "cascade" }),
  sentenceDe: text("sentence_de").notNull(),
  translation: jsonb("translation").$type<Record<string, string>>().notNull(),
  note: text("note"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const grammarMistakes = pgTable("grammar_mistakes", {
  id: uuid("id").primaryKey().defaultRandom(),
  topicId: uuid("topic_id")
    .notNull()
    .references(() => grammarTopics.id, { onDelete: "cascade" }),
  mistake: text("mistake").notNull(),
  correction: text("correction").notNull(),
  explanation: jsonb("explanation").$type<Record<string, string>>().notNull(),
});

export const grammarExceptions = pgTable("grammar_exceptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  topicId: uuid("topic_id")
    .notNull()
    .references(() => grammarTopics.id, { onDelete: "cascade" }),
  description: jsonb("description").$type<Record<string, string>>().notNull(),
});
