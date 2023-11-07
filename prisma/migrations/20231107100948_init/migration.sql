-- CreateTable
CREATE TABLE "gallery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "gallery_pkey" PRIMARY KEY ("id")
);
