-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "description" TEXT,
    "acronym" TEXT,
    "email" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Annexe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Annexe_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Agent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "annexeId" INTEGER,
    "hiringDate" DATETIME NOT NULL,
    "salary" DECIMAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Agent_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Agent_annexeId_fkey" FOREIGN KEY ("annexeId") REFERENCES "Annexe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "dateEmission" DATETIME NOT NULL,
    "monthConcern" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "annexeId" INTEGER,
    "numberAgents" INTEGER NOT NULL,
    "costServiceExclTax" DECIMAL NOT NULL,
    "commissionAmount" DECIMAL NOT NULL,
    "aib" DECIMAL NOT NULL,
    "tva" DECIMAL NOT NULL,
    "costServiceInclTax" DECIMAL NOT NULL,
    "salariesToPay" DECIMAL NOT NULL,
    "totalAmountToTransfer" DECIMAL NOT NULL,
    "netAmountToTransfer" DECIMAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "observations" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Invoice_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Invoice_annexeId_fkey" FOREIGN KEY ("annexeId") REFERENCES "Annexe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Company_acronym_key" ON "Company"("acronym");

-- CreateIndex
CREATE UNIQUE INDEX "Annexe_name_key" ON "Annexe"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_registrationNumber_key" ON "Agent"("registrationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_number_key" ON "Invoice"("number");
