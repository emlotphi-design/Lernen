import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { progressStatusEnum, savedEntryTypeEnum } from "./enums";
import { authUsers } from "./auth";

export const userFavorites = pgTable("user_favorites", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => authUsers.id, { onDelete: "cascade" }),
  entryType: savedEntryTypeEnum("entry_type").notNull(),
  entryId: uuid("entry_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const userProgress = pgTable("user_progress", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => authUsers.id, { onDelete: "cascade" }),
  entryType: savedEntryTypeEnum("entry_type").notNull(),
  entryId: uuid("entry_id").notNull(),
  status: progressStatusEnum("status").notNull().default("not_started"),
  lastAccessedAt: timestamp("last_accessed_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
