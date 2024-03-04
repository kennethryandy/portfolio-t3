CREATE TABLE IF NOT EXISTS "experience" (
	"id" varchar PRIMARY KEY NOT NULL,
	"order" integer NOT NULL,
	"title" varchar(255),
	"year" varchar(255) NOT NULL,
	"role" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"technologies" varchar(255)[] NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp,
	CONSTRAINT "experience_order_unique" UNIQUE("order")
);
