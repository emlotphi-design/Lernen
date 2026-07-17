import { jsonb, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { cefrLevelEnum, vocabCategoryKindEnum } from "./enums";
import { dictionaryEntries } from "./dictionary";

export const vocabCategories = pgTable("vocab_categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  kind: vocabCategoryKindEnum("kind").notNull(),
  name: jsonb("name").$type<Record<string, string>>().notNull(),
  icon: text("icon"),
});

export const vocabItems = pgTable("vocab_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  entryId: uuid("entry_id")
    .notNull()
    .references(() => dictionaryEntries.id, { onDelete: "cascade" }),
  categoryId: uuid("category_id")
    .notNull()
    .references(() => vocabCategories.id, { onDelete: "cascade" }),
  cefrLevel: cefrLevelEnum("cefr_level").notNull(),
});
