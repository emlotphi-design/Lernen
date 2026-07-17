import { pgEnum } from "drizzle-orm/pg-core";

export const cefrLevelEnum = pgEnum("cefr_level", [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2",
]);

export const wordGenderEnum = pgEnum("word_gender", ["der", "die", "das"]);

export const wordRelationKindEnum = pgEnum("word_relation_kind", [
  "synonym",
  "antonym",
]);

export const vocabCategoryKindEnum = pgEnum("vocab_category_kind", [
  "level",
  "topic",
]);

export const quizQuestionTypeEnum = pgEnum("quiz_question_type", [
  "multiple_choice",
  "fill_blank",
  "sentence_order",
]);

export const savedEntryTypeEnum = pgEnum("saved_entry_type", [
  "word",
  "grammar_topic",
  "article",
]);

export const progressStatusEnum = pgEnum("progress_status", [
  "not_started",
  "in_progress",
  "completed",
]);
