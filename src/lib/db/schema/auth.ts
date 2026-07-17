import { pgSchema, uuid } from "drizzle-orm/pg-core";

// Reference-only mirror of Supabase's `auth.users` table so our own
// tables can declare foreign keys against it. Never migrated by us —
// Supabase owns this schema.
const authSchema = pgSchema("auth");

export const authUsers = authSchema.table("users", {
  id: uuid("id").primaryKey(),
});
