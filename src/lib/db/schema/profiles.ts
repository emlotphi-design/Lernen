import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { cefrLevelEnum } from "./enums";
import { authUsers } from "./auth";

export const profiles = pgTable("profiles", {
  userId: uuid("user_id")
    .primaryKey()
    .references(() => authUsers.id, { onDelete: "cascade" }),
  displayName: text("display_name"),
  nativeLanguage: text("native_language"),
  targetLevel: cefrLevelEnum("target_level"),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
