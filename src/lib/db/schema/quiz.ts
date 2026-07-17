import {
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { cefrLevelEnum, quizQuestionTypeEnum } from "./enums";
import { grammarTopics } from "./grammar";
import { vocabCategories } from "./vocabulary";
import { authUsers } from "./auth";

export const quizzes = pgTable("quizzes", {
  id: uuid("id").primaryKey().defaultRandom(),
  grammarTopicId: uuid("grammar_topic_id").references(() => grammarTopics.id, {
    onDelete: "cascade",
  }),
  vocabCategoryId: uuid("vocab_category_id").references(() => vocabCategories.id, {
    onDelete: "cascade",
  }),
  title: jsonb("title").$type<Record<string, string>>().notNull(),
  cefrLevel: cefrLevelEnum("cefr_level").notNull(),
});

export const quizQuestions = pgTable("quiz_questions", {
  id: uuid("id").primaryKey().defaultRandom(),
  quizId: uuid("quiz_id")
    .notNull()
    .references(() => quizzes.id, { onDelete: "cascade" }),
  type: quizQuestionTypeEnum("type").notNull(),
  prompt: jsonb("prompt").$type<Record<string, string>>().notNull(),
  options: jsonb("options").$type<string[]>(),
  correctAnswer: jsonb("correct_answer").$type<unknown>().notNull(),
  explanation: jsonb("explanation").$type<Record<string, string>>(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const quizAttempts = pgTable("quiz_attempts", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => authUsers.id, { onDelete: "cascade" }),
  quizId: uuid("quiz_id")
    .notNull()
    .references(() => quizzes.id, { onDelete: "cascade" }),
  score: integer("score").notNull(),
  total: integer("total").notNull(),
  answers: jsonb("answers").$type<Record<string, unknown>>().notNull(),
  completedAt: timestamp("completed_at", { withTimezone: true }).notNull().defaultNow(),
});
