import {
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { cefrLevelEnum, wordGenderEnum, wordRelationKindEnum } from "./enums";

export const dictionaryEntries = pgTable("dictionary_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  wordDe: text("word_de").notNull(),
  partOfSpeech: text("part_of_speech").notNull(),
  gender: wordGenderEnum("gender"),
  pluralForm: text("plural_form"),
  ipaPronunciation: text("ipa_pronunciation"),
  audioUrl: text("audio_url"),
  cefrLevel: cefrLevelEnum("cefr_level").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const dictionaryTranslations = pgTable("dictionary_translations", {
  id: uuid("id").primaryKey().defaultRandom(),
  entryId: uuid("entry_id")
    .notNull()
    .references(() => dictionaryEntries.id, { onDelete: "cascade" }),
  locale: text("locale").notNull(),
  meaning: text("meaning").notNull(),
  exampleSentence: text("example_sentence"),
});

export const dictionaryRelations = pgTable("dictionary_relations", {
  id: uuid("id").primaryKey().defaultRandom(),
  entryId: uuid("entry_id")
    .notNull()
    .references(() => dictionaryEntries.id, { onDelete: "cascade" }),
  relatedEntryId: uuid("related_entry_id")
    .notNull()
    .references(() => dictionaryEntries.id, { onDelete: "cascade" }),
  kind: wordRelationKindEnum("kind").notNull(),
});

export const verbConjugations = pgTable("verb_conjugations", {
  id: uuid("id").primaryKey().defaultRandom(),
  entryId: uuid("entry_id")
    .notNull()
    .references(() => dictionaryEntries.id, { onDelete: "cascade" }),
  tense: text("tense").notNull(),
  pronoun: text("pronoun").notNull(),
  form: text("form").notNull(),
});
