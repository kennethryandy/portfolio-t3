-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "year" VARCHAR(255)[],
    "role" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "technologies" VARCHAR(255)[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Experience_order_key" ON "Experience"("order");
