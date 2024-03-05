CREATE TABLE IF NOT EXISTS "experience" (
	"id" varchar PRIMARY KEY NOT NULL,
	"order" integer NOT NULL,
	"title" varchar(255),
	"year" varchar(255) NOT NULL,
	"role" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"technologies" varchar(255)[] NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "experience_order_unique" UNIQUE("order")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" varchar(128),
	"name" varchar(255) NOT NULL,
	"file_name" varchar(256) NOT NULL,
	"mime_type" varchar(255),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "uuid" UNIQUE("uuid")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project" (
	"id" varchar PRIMARY KEY NOT NULL,
	"order" integer NOT NULL,
	"title" varchar(255),
	"media_id" integer NOT NULL,
	"description" text NOT NULL,
	"url" varchar(255) NOT NULL,
	"source_code" varchar(255) NOT NULL,
	"type" varchar,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "project_order_unique" UNIQUE("order")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project" ADD CONSTRAINT "project_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
