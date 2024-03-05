// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  integer,
  serial,
  text,
  timestamp,
  unique,
  varchar,
  pgTable as createTable,
} from "drizzle-orm/pg-core";
import { generateId } from "@/lib/create-id";
import { createId } from '@paralleldrive/cuid2';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
// export const createTable = pgTableCreator((name) => `project1_${name}`);


export const experience = createTable("experience", {
  id: varchar("id").$defaultFn(() => generateId()).primaryKey(),
  order: integer("order").unique().notNull(),
  title: varchar("title", { length: 255 }),
  year: varchar("year", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  description: text("description").notNull(),
  technologies: varchar("technologies", { length: 255 }).array().notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`).notNull()
});


export const media = createTable("media", {
  id: serial("id").primaryKey(),
  uuid: varchar("uuid", { length: 128 }).$defaultFn(() => createId()),
  name: varchar("name", { length: 255 }).notNull(),
  fileName: varchar("file_name", { length: 256 }).notNull(),
  mimeType: varchar("mime_type", { length: 255 }),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`).notNull()
}, (table) => ({
  uuidUnique: unique("uuid").on(table.uuid),
}));

export const project = createTable("project", {
  id: varchar("id").$defaultFn(() => generateId()).primaryKey(),
  order: integer("order").unique().notNull(),
  title: varchar("title", { length: 255 }),
  image: integer("media_id").notNull().references(() => media.id),
  description: text("description").notNull(),
  url: varchar("url", { length: 255 }).notNull(),
  sourceCode: varchar("source_code", { length: 255 }).notNull(),
  type: varchar('type', { enum: ["featured", "archived"] }),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`).notNull()
});