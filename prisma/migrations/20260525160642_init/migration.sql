-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "service" TEXT NOT NULL,
    "budget" TEXT,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'Contact Form'
);

-- CreateTable
CREATE TABLE "CaseStudy" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "image" TEXT
);
