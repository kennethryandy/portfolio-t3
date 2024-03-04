// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  // index,
  integer,
  pgTableCreator,
  // serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { generateId } from "@/lib/create-id";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => name);


export const experience = createTable("experience", {
  id: varchar("id").$defaultFn(() => generateId()).primaryKey(),
  order: integer("order").unique().notNull(),
  title: varchar("title", { length: 255 }),
  year: varchar("year", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  description: text("description").notNull(),
  technologies: varchar("technologies", { length: 255 }).array().notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp("updated_at")
});