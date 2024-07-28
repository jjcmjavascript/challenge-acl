-- CreateTable
CREATE TABLE "contract" (
    "id" SERIAL NOT NULL,
    "clientName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "initialDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountNumber" INTEGER,
    "amount" BIGINT,
    "currency" TEXT,

    CONSTRAINT "contract_pkey" PRIMARY KEY ("id")
);
